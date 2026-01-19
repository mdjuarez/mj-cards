/* ============================================================
   icon-room-card.js
   - Layout tipo Apollo:
     * Izquierda: título + (temp/hum debajo del título)
     * Derecha: grid de devices (solo iconos)
     * Top-right: pills informativas (items)
   - Extras:
     * Bubble icon color default similar a screenshot
     * Device chip/icon sizes default similares a screenshot
     * Presence badge dentro de la burbuja (opcional)
     * ✅ Card background configurable (sin romper themes)
   ============================================================ */

const LitEl =
    window.LitElement ||
    Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitEl.prototype.html;
const css = LitEl.prototype.css;

class IconRoomCard extends LitEl {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _loadedAnimations: {}
    };
  }

  /* -------------------------------------------------------------
     SET CONFIG
  ------------------------------------------------------------- */
  setConfig(config) {
    if (!config || !Array.isArray(config.devices)) {
      throw new Error("Config inválida. Usa devices: []");
    }

    const defaultEntity = "light.luces_max";
    const defaultIcon = "mdi:lightbulb";

    // ✅ título (estilo)
    const titleDefaults = {
      hidden: false,
      size: 18,
      color: "var(--primary-text-color)",
      weight: 700,
      uppercase: false,
      max_width: null,
      nowrap: true,

      icon: null,
      icon_size: 18,
      icon_color: "var(--secondary-text-color)",
      gap: 8,
      offset_x: 0,
      offset_y: 0
    };
    const titleOverrides = config.title_overrides || {};
    const title_style = { ...titleDefaults, ...titleOverrides };
    if (typeof title_style.max_width === "number") {
      title_style.max_width = `${title_style.max_width}px`;
    }

    // ✅ mini header (temp/hum) debajo del título (Apollo style por defecto)
    const headerDefaults = {
      offset_x: 0,
      offset_y: 0,
      temp: {
        icon: "mdi:thermometer",
        icon_size: 15,
        icon_color: "var(--secondary-text-color)",
        value_size: 13,
        value_color: "var(--secondary-text-color)",
        unit_size: 13,
        unit_color: "var(--secondary-text-color)",
        bg: "transparent",
        radius: 0,
        padding: "0",
        gap: 2
      },
      hum: {
        icon: "mdi:water-percent",
        icon_size: 15,
        icon_color: "var(--secondary-text-color)",
        value_size: 13,
        value_color: "var(--secondary-text-color)",
        unit_size: 13,
        unit_color: "var(--secondary-text-color)",
        bg: "transparent",
        radius: 0,
        padding: "0",
        gap: 2
      }
    };
    const headerOverrides = config.header_overrides || {};
    const header = {
      offset_x: headerOverrides.offset_x ?? headerDefaults.offset_x,
      offset_y: headerOverrides.offset_y ?? headerDefaults.offset_y,
      temp: { ...headerDefaults.temp, ...(headerOverrides.temp || {}) },
      hum: { ...headerDefaults.hum, ...(headerOverrides.hum || {}) }
    };

    // ✅ grid de devices (derecha)
    const gridDefaults = {
      columns: config.columns || 4,
      col_gap: 10,
      row_gap: 10,
      justify_content: "start",
      align_items: "center"
    };
    const gridOverrides = config.grid_overrides || {};
    const grid = { ...gridDefaults, ...gridOverrides };

    // ✅ burbuja estilo Apollo (defaults más parecidos al screenshot)
    const bubbleDefaults = {
      enabled: true,
      icon: config.icon || "mdi:bed",
      size: 100,
      offset: -20,
      bg: "#7799b8",

      icon_size: 52,
      icon_color: "#334155",
      icon_opacity: 0.95,

      right_gutter: 14,

      // acción al tocar la burbuja
      action: ["more-info", "navigate", "none"].includes(config.bubble_action)
          ? config.bubble_action
          : "more-info",

      more_info_entity:
          config.bubble_more_info_entity ??
          config.temp_entity ??
          config.hum_entity ??
          null,

      navigate_path: config.bubble_navigate_path ?? null
    };

    const bubbleOverrides = config.bubble_overrides || {};
    const bubble = { ...bubbleDefaults, ...bubbleOverrides };

    // ✅ PRESENCE defaults (inteligentes)
    const presenceDefaults = {
      enabled: undefined, // auto
      entity: null,

      icon: "mdi:account",
      size: 16,
      badge_size: 26,

      bg_off: "transparent",
      bg_on: "transparent",
      icon_off: "#64748b",
      icon_on: "#475569",

      position: "center-left",
      offset_x: 38,
      offset_y: -35,

      show_only_when_on: true
    };

    const presenceOverrides = config.presence || {};
    let presence = { ...presenceDefaults, ...presenceOverrides };

    // ✅ enabled automático si hay entity
    if (presence.entity && presence.enabled === undefined) {
      presence.enabled = true;
    }
    presence.enabled = Boolean(presence.enabled);

    // ✅ sizes de devices (global + per-device)
    const deviceDefaults = {
      chip_size: 48,
      chip_padding: 10,
      icon_size: 24
    };
    const deviceOverrides = config.device_overrides || {};
    const device_style = { ...deviceDefaults, ...deviceOverrides };

    // ✅ layout defaults
    const layoutDefaults = {
      right_top_padding: 30,
      chips_gutter: 0 // 👈 NUEVO (equivale a apollo-chips-gutter)
    };

    const layoutOverrides = config.layout_overrides || {};
    const layout = { ...layoutDefaults, ...layoutOverrides };

    // ✅ TOP RIGHT (multi items)
    const topRightDefaults = {
      enabled: undefined,

      bg: "rgba(0,0,0,0.05)",
      radius: 12,
      padding: "2px 8px",
      gap: 2,

      icon_size: 14,
      icon_color: "var(--secondary-text-color)",
      value_size: 12,
      value_color: "var(--secondary-text-color)",
      unit_size: 12,
      unit_color: "var(--secondary-text-color)",

      items: null,

      // legacy:
      value: null,
      icon: null
    };

    const topRightOverrides = config.top_right || {};
    const top_right = { ...topRightDefaults, ...topRightOverrides };
    if (config.top_right && top_right.enabled === undefined) {
      top_right.enabled = true;
    }

    top_right.enabled = Boolean(top_right.enabled);

    if (!Array.isArray(top_right.items) || top_right.items.length === 0) {
      if (top_right.value) {
        top_right.items = [
          {
            entity: top_right.value,
            icon: top_right.icon || null,
            bg: top_right.bg,
            radius: top_right.radius,
            padding: top_right.padding,
            icon_size: top_right.icon_size,
            icon_color: top_right.icon_color,
            value_size: top_right.value_size,
            value_color: top_right.value_color,
            unit_size: top_right.unit_size,
            unit_color: top_right.unit_color
          }
        ];
      } else {
        top_right.items = [];
      }
    }

    // ✅ CARD STYLE (background / radius / border / shadow) - opcional
    // default: respeta theme, pero si lo seteas en YAML cambia el fondo
    const cardDefaults = {
      bg: "var(--ha-card-background, var(--card-background-color, white))",
      radius: "var(--ha-card-border-radius, 12px)",
      border: "var(--ha-card-border-width, 0px)",
      border_color: "var(--divider-color)",
      shadow: "var(--ha-card-box-shadow, none)",
      min_height: null, // ej "220px"
      height: null // ej "220px"
    };
    const cardOverrides = config.card_overrides || {};
    const card = { ...cardDefaults, ...cardOverrides };

    const devices = config.devices.map((d) => ({
      type: d.type || "device", // "device" | "spacer"
      transparent: d.transparent ?? false,
      entity: d.entity || defaultEntity,
      icon: d.icon || defaultIcon,
      name: d.name || null,

      action: d.action || "toggle",
      state_entity: d.state_entity || null,
      animated: d.animated || null,
      service: d.service || null,
      service_data: d.service_data || null,
      state_map: d.state_map || null,
      chip_color: d.chip_color ?? null,

      device_color_on: d.device_color_on || null,
      device_color_off: d.device_color_off || null,
      device_icon_color_on: d.device_icon_color_on || null,
      device_icon_color_off: d.device_icon_color_off || null,
      invert_animation: d.invert_animation || false,

      chip_size: d.chip_size ?? null,
      chip_padding: d.chip_padding ?? null,
      icon_size: d.icon_size ?? null,

      show_name: d.show_name ?? null
    }));

    this._config = {
      title: config.title,
      use_fahrenheit: config.use_fahrenheit ?? false,
      full_width: config.full_width ?? false,

      temp_entity: config.temp_entity,
      hum_entity: config.hum_entity,

      chip_color_on: config.chip_color_on || "rgba(138,205,215,1)",
      chip_color_off: config.chip_color_off || "rgba(11,83,148,0.3)",
      icon_color_on: config.icon_color_on || "#000000",
      icon_color_off: config.icon_color_off || "#000000",

      show_names: config.show_names ?? false,

      title_style,
      header,
      grid,
      bubble,
      presence,
      device_style,
      layout,
      top_right,

      // ✅ new
      card,

      devices
    };
  }

  getCardSize() {
    return 3;
  }

  /* -------------------------------------------------------------
     ANIMATIONS
  ------------------------------------------------------------- */
  async _loadAnimation(name) {
    try {
      const module = await import(`./animations/${name}.js`);
      return module.css || "";
    } catch (e) {
      console.warn(`❌ Animación '${name}' no encontrada`);
      return "";
    }
  }

  async willUpdate(changedProps) {
    if (!changedProps.has("hass") || !this._config) return;

    const animations = new Set();

    for (const d of this._config.devices) {
      if (d.animated) animations.add(d.animated);
      if (Array.isArray(d.state_map)) {
        for (const rule of d.state_map) {
          if (rule.animated) animations.add(rule.animated);
        }
      }
    }

    const result = {};
    for (const anim of animations) {
      result[anim] = await this._loadAnimation(anim);
    }

    this._loadedAnimations = result;
    this.requestUpdate();
  }

  /* -------------------------------------------------------------
     HELPERS
  ------------------------------------------------------------- */
  _state(entityId) {
    return this.hass?.states?.[entityId] || null;
  }

  _num(entityId) {
    const st = this._state(entityId)?.state;
    const v = Number(st);
    return Number.isNaN(v) ? null : v;
  }

  _formatState(entityId, fmt) {
    const st = this._state(entityId);
    if (!st) return "--";
    const raw = st.state;

    if (fmt === "int") {
      const v = Number(raw);
      return Number.isNaN(v) ? raw : String(Math.round(v));
    }
    if (fmt === "float1") {
      const v = Number(raw);
      return Number.isNaN(v) ? raw : String(Math.round(v * 10) / 10);
    }
    if (fmt === "float2") {
      const v = Number(raw);
      return Number.isNaN(v) ? raw : String(Math.round(v * 100) / 100);
    }
    return String(raw);
  }

  _fmtTemp(v) {
    if (v === null || v === undefined) return "--";
    return Math.round(v);
  }

  _fmtHum(v) {
    if (v === null || v === undefined) return "--";
    return Math.round(v);
  }

  _isTruthyState(state) {
    if (state === null || state === undefined) return false;
    const s = String(state).toLowerCase();
    return (
        s === "on" ||
        s === "home" ||
        s === "present" ||
        s === "detected" ||
        s === "true" ||
        s === "occupied"
    );
  }

  _showMoreInfo(entityId) {
    this.dispatchEvent(
        new CustomEvent("hass-more-info", {
          detail: { entityId },
          bubbles: true,
          composed: true
        })
    );
  }

  /* -------------------------------------------------------------
     STATE MAP
  ------------------------------------------------------------- */
  _applyStateMap(device, st, isOn) {
    if (!device.state_map || !Array.isArray(device.state_map)) return null;

    const raw = st?.state ?? null;
    const numVal = Number(raw);
    const isNum = !isNaN(numVal);

    const ctx = { value: isNum ? numVal : null, state: raw, on: isOn };

    for (const rule of device.state_map) {
      const cond = rule.when;
      if (!cond || cond === "else") return rule;

      try {
        const fn = new Function("value", "state", "on", `return (${cond});`);
        if (fn(ctx.value, ctx.state, ctx.on)) return rule;
      } catch (e) {
        console.warn("❌ Error evaluando condición:", cond, e);
      }
    }
    return null;
  }

  /* -------------------------------------------------------------
     ACTIONS
  ------------------------------------------------------------- */
  _performAction(e, device) {
    e.stopPropagation();
    e.preventDefault();

    const action = device.action || "toggle";

    switch (action) {
      case "none":
        return;

      case "toggle":
        return this.hass.callService("homeassistant", "toggle", {
          entity_id: device.entity
        });

      case "more-info":
        return this._showMoreInfo(device.entity);

      case "call-service": {
        const svc = device.service;
        if (!svc || !svc.includes(".")) {
          console.warn("❌ call-service necesita 'service: domain.service'");
          return;
        }
        const [domain, service] = svc.split(".");
        const data = device.service_data || {};
        return this.hass.callService(domain, service, data);
      }

      default:
        if (action.startsWith("navigate:")) {
          const path = action.replace("navigate:", "");
          history.pushState(null, "", path);
          window.dispatchEvent(
              new CustomEvent("location-changed", { bubbles: true, composed: true })
          );
          return;
        }
    }
  }

  _performBubbleAction(e) {
    e.stopPropagation();
    e.preventDefault();

    const b = this._config?.bubble;
    if (!b) return;

    switch (b.action) {
      case "none":
        return;

      case "navigate": {
        const path = b.navigate_path;
        if (!path) return;
        history.pushState(null, "", path);
        window.dispatchEvent(
            new CustomEvent("location-changed", { bubbles: true, composed: true })
        );
        return;
      }

      case "more-info":
      default: {
        const entityId = b.more_info_entity;
        if (!entityId) return;
        return this._showMoreInfo(entityId);
      }
    }
  }

  _presenceStyle(presence) {
    const st = presence.entity ? this._state(presence.entity) : null;
    const isOn = this._isTruthyState(st?.state);
    if (presence.show_only_when_on && !isOn) return { hidden: true };

    const bg = isOn ? presence.bg_on : presence.bg_off;
    const ic = isOn ? presence.icon_on : presence.icon_off;

    let left = "50%";
    let top = "50%";
    let tx = "-50%";
    let ty = "-50%";

    switch (presence.position) {
      case "top-left":
        left = `${presence.offset_x}px`;
        top = `${presence.offset_y}px`;
        tx = "0";
        ty = "0";
        break;
      case "top-right":
        left = `calc(100% - ${presence.offset_x}px)`;
        top = `${presence.offset_y}px`;
        tx = "-100%";
        ty = "0";
        break;
      case "bottom-left":
        left = `${presence.offset_x}px`;
        top = `calc(100% - ${presence.offset_y}px)`;
        tx = "0";
        ty = "-100%";
        break;
      case "bottom-right":
        left = `calc(100% - ${presence.offset_x}px)`;
        top = `calc(100% - ${presence.offset_y}px)`;
        tx = "-100%";
        ty = "-100%";
        break;
      case "center-left":
      default:
        left = `${presence.offset_x}px`;
        top = `calc(50% + ${presence.offset_y}px)`;
        tx = "0";
        ty = "-50%";
        break;
    }

    return { hidden: false, isOn, bg, ic, left, top, tx, ty };
  }

  /* -------------------------------------------------------------
     RENDER
  ------------------------------------------------------------- */
  render() {
    if (!this.hass || !this._config) return html``;

    const cfg = this._config;
    const devices = cfg.devices || [];
    const titleStyle = cfg.title_style || {};
    const grid = cfg.grid || {};
    const bubble = cfg.bubble || {};
    const presence = cfg.presence || {};
    const deviceStyle = cfg.device_style || {};
    const header = cfg.header || {};
    const layout = cfg.layout || {};
    const topRight = cfg.top_right || {};
    const card = cfg.card || {};

    const animationCss = Object.values(this._loadedAnimations).join("\n");

    const tRaw = cfg.temp_entity ? this._num(cfg.temp_entity) : null;
    const hRaw = cfg.hum_entity ? this._num(cfg.hum_entity) : null;

    const tVal = cfg.temp_entity ? this._fmtTemp(tRaw) : null;
    const hVal = cfg.hum_entity ? this._fmtHum(hRaw) : null;
    const tUnit = cfg.use_fahrenheit ? "°F" : "°C";

    const titleText = cfg.title || "";

    const titleInline = `
      font-size:${titleStyle.size}px;
      color:${titleStyle.color};
      font-weight:${titleStyle.weight};
      text-transform:${titleStyle.uppercase ? "uppercase" : "none"};
      ${titleStyle.max_width ? `max-width:${titleStyle.max_width};` : ""}
      margin-left:${titleStyle.offset_x || 0}px;
      margin-top:${titleStyle.offset_y || 0}px;
    `;

    const titleTextInline = `
      ${titleStyle.nowrap ? "white-space:nowrap;" : ""}
      overflow:hidden;
      text-overflow:ellipsis;
    `;

    const rightStart = bubble.enabled
        ? `calc(max(0px, (${bubble.size}px + ${bubble.offset}px)) + ${bubble.right_gutter}px)`
        : "0px";

    const showTopRight =
        topRight.enabled && Array.isArray(topRight.items) && topRight.items.length > 0;

    const pres =
        presence?.enabled && presence.entity ? this._presenceStyle(presence) : { hidden: true };

    return html`
      <style>${animationCss}</style>

      <ha-card
        class="wrap"
        style="
          background:${card.bg};
          border-radius:${card.radius};
          border-style: solid;
          border-width:${card.border};
          border-color:${card.border_color};
          box-shadow:${card.shadow};
          ${card.min_height ? `min-height:${card.min_height};` : ""}
          ${card.height ? `height:${card.height};` : ""}
        "
      >

        ${bubble.enabled
        ? html`
              <div
                class="img_cell"
                style="
                  width:${bubble.size}px;
                  height:${bubble.size}px;
                  margin: 0 0 ${bubble.offset}px ${bubble.offset}px;
                  background:${bubble.bg};
                "
                @click=${(e) => this._performBubbleAction(e)}
                title="${bubble.action === "navigate" ? (bubble.navigate_path || "") : (bubble.more_info_entity || "")}"
              >
                <ha-icon
                  icon="${bubble.icon}"
                  style="
                    --mdc-icon-size:${bubble.icon_size}px;
                    color:${bubble.icon_color};
                    opacity:${bubble.icon_opacity};
                  "
                  class="main_icon"
                ></ha-icon>

                ${pres.hidden
            ? ""
            : html`
                      <div
                        class="presence-badge"
                        style="
                          width:${presence.badge_size}px;
                          height:${presence.badge_size}px;
                          left:${pres.left};
                          top:${pres.top};
                          transform: translate(${pres.tx}, ${pres.ty});
                          background:${pres.bg};
                        "
                        @click=${(e) => {
              e.stopPropagation();
              e.preventDefault();
              this._showMoreInfo(presence.entity);
            }}
                        title="${presence.entity}"
                      >
                        <ha-icon
                          icon="${presence.icon}"
                          style="
                            --mdc-icon-size:${presence.size}px;
                            color:${pres.ic};
                          "
                        ></ha-icon>
                      </div>
                    `}
              </div>
            `
        : ""}

        ${showTopRight
        ? html`
              <div class="top-right">
                ${topRight.items.map((it) => {
          const item = {
            bg: topRight.bg,
            radius: topRight.radius,
            padding: topRight.padding,
            icon_size: topRight.icon_size,
            icon_color: topRight.icon_color,
            value_size: topRight.value_size,
            value_color: topRight.value_color,
            unit_size: topRight.unit_size,
            unit_color: topRight.unit_color,
            ...it
          };

          const entityId = item.entity || null;
          const moreInfoEntity = item.more_info_entity || entityId;

          let text;

          if (item.state_map && entityId) {
            const st = this._state(entityId);
            const rule = this._applyStateMap(item, st, this._isTruthyState(st?.state));
            text = rule?.text ?? this._formatState(entityId, item.format);
          } else {
            text = entityId
                ? this._formatState(entityId, item.format)
                : item.text ?? "--";
          }

          const unit = item.unit ?? "";

          return html`
                    <div
                      class="tr-pill"
                      style="
                        background:${item.bg};
                        border-radius:${item.radius}px;
                        padding:${item.padding};
                        gap:${topRight.gap}px;
                      "
                      @click=${moreInfoEntity ? () => this._showMoreInfo(moreInfoEntity) : null}
                      title="${moreInfoEntity || entityId || ""}"
                    >
                      ${item.icon
              ? html`
                            <ha-icon
                              icon="${item.icon}"
                              style="
                                --mdc-icon-size:${item.icon_size}px;
                                color:${item.icon_color};
                              "
                            ></ha-icon>
                          `
              : ""}

                      <span
                        class="tr-value"
                        style="font-size:${item.value_size}px; color:${item.value_color};"
                        >${text}</span
                      >
                      ${unit
              ? html`
                            <span
                              class="tr-unit"
                              style="font-size:${item.unit_size}px; color:${item.unit_color};"
                              >${unit}</span
                            >
                          `
              : ""}
                    </div>
                  `;
        })}
              </div>
            `
        : ""}

        <div class="layout">
          <div class="left">
            ${titleStyle.hidden
        ? ""
        : html`
                  <div class="name" style="${titleInline}">
                    ${titleStyle.icon
            ? html`
                          <ha-icon
                            icon="${titleStyle.icon}"
                            style="
                              --mdc-icon-size:${titleStyle.icon_size}px;
                              color:${titleStyle.icon_color};
                              margin-right:${titleStyle.gap}px;
                              flex-shrink:0;
                            "
                            class="title-icon"
                          ></ha-icon>
                        `
            : ""}

                    <span class="title-text" style="${titleTextInline}">${titleText}</span>
                  </div>
                `}

            <div
              class="mini"
              style="
                transform: translate(${header.offset_x || 0}px, ${header.offset_y || 0}px);
              "
            >

              ${cfg.temp_entity
        ? html`
                    <div
                      class="mini-row"
                      style="
                        background:${header.temp.bg};
                        border-radius:${header.temp.radius}px;
                        padding:${header.temp.padding};
                        gap:${header.temp.gap}px;
                      "
                      @click=${() => this._showMoreInfo(cfg.temp_entity)}
                    >
                      <ha-icon
                        icon="${header.temp.icon}"
                        style="
                          --mdc-icon-size:${header.temp.icon_size}px;
                          color:${header.temp.icon_color};
                        "
                      ></ha-icon>
                      <span
                        class="mini-value"
                        style="font-size:${header.temp.value_size}px; color:${header.temp.value_color};"
                        >${tVal}</span
                      >
                      <span
                        class="mini-unit"
                        style="font-size:${header.temp.unit_size}px; color:${header.temp.unit_color};"
                        >${tUnit}</span
                      >
                    </div>
                  `
        : ""}

              ${cfg.hum_entity
        ? html`
                    <div
                      class="mini-row"
                      style="
                        background:${header.hum.bg};
                        border-radius:${header.hum.radius}px;
                        padding:${header.hum.padding};
                        gap:${header.hum.gap}px;
                      "
                      @click=${() => this._showMoreInfo(cfg.hum_entity)}
                    >
                      <ha-icon
                        icon="${header.hum.icon}"
                        style="
                          --mdc-icon-size:${header.hum.icon_size}px;
                          color:${header.hum.icon_color};
                        "
                      ></ha-icon>
                      <span
                        class="mini-value"
                        style="font-size:${header.hum.value_size}px; color:${header.hum.value_color};"
                        >${hVal}</span
                      >
                      <span
                        class="mini-unit"
                        style="font-size:${header.hum.unit_size}px; color:${header.hum.unit_color};"
                        >%</span
                      >
                    </div>
                  `
        : ""}
            </div>
          </div>

          <div
            class="grid"
            style="
              margin-left: calc(${rightStart} + ${layout.chips_gutter}px);
              padding-top:${layout.right_top_padding}px;
              grid-template-columns: repeat(${grid.columns}, max-content);
              column-gap:${grid.col_gap}px;
              row-gap:${grid.row_gap}px;
              justify-content:${grid.justify_content};
              align-items:${grid.align_items};
            "
          >
            ${devices.map((device) => {
      const isSpacer = device.type === "spacer";

      const st = this.hass.states[device.state_entity || device.entity];
      const isOn = st && !["off", "unavailable", "unknown", "idle"].includes(st.state);

      const rule = this._applyStateMap(device, st, isOn);
      const shouldAnimate = device.invert_animation ? !isOn : isOn;

      let animClass = "";
      let chipBgColor;
      let chipAnimColor;
      let iconColor;
      let actionOverride = null;

      if (device.chip_color) chipBgColor = device.chip_color;

      if (rule) {
        if (rule.animated) animClass = `animated-${rule.animated}`;
        if (rule.chip_color) chipBgColor = rule.chip_color;
        if (rule.icon_color) iconColor = rule.icon_color;
        if (rule.action) actionOverride = rule.action;
      } else {
        animClass =
            device.animated && shouldAnimate ? `animated-${device.animated}` : "";
      }

      if (!chipBgColor) chipBgColor = isOn ? cfg.chip_color_on : cfg.chip_color_off;

      chipAnimColor = isOn
          ? device.device_color_on || cfg.icon_color_on || chipBgColor
          : device.device_color_off || cfg.icon_color_off || chipBgColor;

      if (!iconColor) {
        iconColor = isOn
            ? device.device_icon_color_on || chipAnimColor
            : device.device_icon_color_off || chipAnimColor;
      }

      const finalDevice = actionOverride ? { ...device, action: actionOverride } : device;

      const chipSize = device.chip_size ?? deviceStyle.chip_size;
      const chipPad = device.chip_padding ?? deviceStyle.chip_padding;
      const iconSz = device.icon_size ?? deviceStyle.icon_size;

      // ✅ SPACER: ocupa lugar, pero invisible y sin interacción
      if (isSpacer) {
        return html`
                  <div class="grid-item">
                    <div
                      class="chip spacer"
                      style="
                        width:${chipSize}px;
                        height:${chipSize}px;
                        padding:${chipPad}px;
                        --room-icon-size:${iconSz}px;
                      "
                    ></div>
                    ${""}
                  </div>
                `;
      }

      const showName = device.show_name ?? cfg.show_names;

      return html`
                <div class="grid-item">
                  <div
                    class="chip ${animClass}"
                    style="
                      background:${chipBgColor};
                      --chip-anim-color:${chipAnimColor};
                      width:${chipSize}px;
                      height:${chipSize}px;
                      padding:${chipPad}px;
                      --room-icon-size:${iconSz}px;
                    "
                    @click=${(e) => this._performAction(e, finalDevice)}
                    title="${device.name ?? ""}"
                  >
                    <ha-icon
                      icon="${device.icon}"
                      style="
                        --mdc-icon-size:${iconSz}px;
                        color:${iconColor};
                      "
                      class="chip-svg"
                    ></ha-icon>
                  </div>

                  ${showName ? html`<div class="chip-name">${device.name ?? ""}</div>` : ""}
                </div>
              `;
    })}
          </div>
        </div>
      </ha-card>
    `;
  }

  /* -------------------------------------------------------------
     STYLES
  ------------------------------------------------------------- */
  static get styles() {
    return css`
      :host {
        display: block;
      }

      .wrap {
        position: relative;
        padding: 18px 16px 8px 18px;
        overflow: hidden;
      }

      .img_cell {
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 0;
      }

      .presence-badge {
        position: absolute;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .top-right {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 2;
        display: flex;
        flex-wrap: wrap;
        gap: 1px;
        justify-content: flex-end;
        align-items: center;
        max-width: 60%;
      }

      .tr-pill {
        display: inline-flex;
        align-items: center;
        line-height: 1;
        cursor: pointer;
        white-space: nowrap;
      }

      .tr-unit {
        opacity: 0.85;
        margin-left: 2px;
      }

      .layout {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 18px;
      }

      .left {
        min-width: 92px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .grid {
        display: grid;
        grid-auto-rows: min-content;
        align-self: flex-start;
        max-width: calc(100% - 8px);
      }

      .name {
        display: flex;
        align-items: center;
        min-width: 0;
      }

      .title-text {
        min-width: 0;
      }

      .mini {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .mini-row {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        line-height: 1;
        cursor: pointer;
      }

      .mini-row ha-icon {
        opacity: 0.95;
        position: relative;
        top: -1px;
      }

      .mini-unit {
        opacity: 0.85;
      }

      .grid-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }

      .chip.spacer {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        cursor: default !important;
        pointer-events: none !important;
      }

      .chip {
        border-radius: 9999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: 0.2s;
        overflow: visible;
        box-sizing: border-box;
      }

      .chip-name {
        font-size: 11px;
        opacity: 0.7;
        max-width: 80px;
        text-align: center;
        line-height: 1.1;
        min-height: 14px;
      }
    `;
  }
}

customElements.define("icon-room-card", IconRoomCard);
