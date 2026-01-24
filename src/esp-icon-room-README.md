que te parece asi? # Icon Room Card 

El objetivo es consolidar la mayoría de las funciones en un único dashboard.

<img width="513" height="627" alt="Screenshot 2026-01-20 at 12 02 04 AM" src="https://github.com/user-attachments/assets/e4937bf0-ad7c-420a-a0fc-724f403f3c29" />


## ✨ Características

- **Diseño facil de entender con título, temperatura, humedad, presencia y cuadrícula de dispositivos** El lado izquierdo muestra el nombre de la habitación con presencia, temperatura y humedad, mientras que el lado derecho muestra una cuadrícula limpia de dispositivos para un control rápido.

- **Chips de dispositivos con múltiples acciones** Cada chip de dispositivo puede realizar diferentes acciones al pulsarlo:
  - toggle (alternar/conmutar - por defecto)  
  - abrir Más Información (More Info)  
  - navegar a otro panel o vista  
  - llamar a un servicio de Home Assistant  

- **Cambios automáticos de color y comportamiento según el estado del dispositivo** Los chips pueden cambiar colores, animaciones y comportamiento automáticamente.

- **Animaciones!** Los dispositivos pueden mostrar animaciones sutiles como parpadeo, pulso, resplandor, sacudida o zoom, haciendo que los dispositivos activos sean más fáciles de notar.

- **Información adicional en la esquina superior derecha** 

- **Diseño compatible con temas y estilo de tarjeta opcional** La tarjeta sigue los temas de Home Assistant por defecto, pero el fondo, borde, radio y sombra se pueden personalizar usando `card_overrides`.


---

## 🧩 Requisitos previos

Esta tarjeta depende únicamente del frontend de Home Assistant.

### **Requerido**
- Ninguno.

### **Opcional (pero soportado por la tarjeta)**
- **card_mod** (recomendado si deseas anulaciones de estilo profundas)  
  https://github.com/thomasloven/lovelace-card-mod

Si no estás seguro, puedes instalar la tarjeta sin nada más y funcionará.


---

## 📦 Instalación 

1. Instalar vía HACS (Frontend → Repositorios personalizados → añadir este repo como repositorio Lovelace: https://github.com/mdjuarez/mj-cards)
2. Recargar el frontend de Home Assistant
3. Añadir un único recurso Lovelace:

URL:
`/hacsfiles/mj-cards/mj-cards.js`

Tipo:
`JavaScript Module o Dashboard`

Eso es todo.


## 🚀 Uso

La tarjeta acepta un conjunto flexible de opciones de configuración.

### Ejemplo básico
Por defecto, la tarjeta ocupará todo el espacio de una columna del dashboard.

<img width="792" height="326" alt="Screenshot 2026-01-20 at 7 12 16 PM" src="https://github.com/user-attachments/assets/da8990ca-0dbf-4bc7-8520-d6349b6a2954" />


```yaml
type: custom:icon-room-card
title: Bedroom
temp_entity: sensor.apollo_air_max_sen55_temperature
hum_entity: sensor.apollo_air_max_sen55_humidity
columns: 1
presence:
  entity: binary_sensor.presence_max_presence_sensor_1
devices:
  - entity: light.luces_max
    icon: mdi:lightbulb
  - entity: switch.ventilador_max
    icon: mdi:fan
  - entity: remote.sabrina_max
    icon: mdi:television
```
En el caso de que se quiera ocupar menos cantidad, la card tiene varias formas de personalizarla y puede variar de pantalla en pantalla pero lo que a mi me funciono es poner el siguiente **layout_overrides**.

Más adelante se detalla que son estas opciones, por si esto no te ha funcionado.

```yaml
type: custom:icon-room-card
title: Bedroom
layout_overrides:
  right_top_padding: 13
  chips_gutter: -400
temp_entity: sensor.apollo_air_max_sen55_temperature
hum_entity: sensor.apollo_air_max_sen55_humidity
columns: 1
presence:
  entity: binary_sensor.presence_max_presence_sensor_1
devices:
  - entity: light.luces_max
    icon: mdi:lightbulb
  - entity: switch.ventilador_max
    icon: mdi:fan
  - entity: remote.sabrina_max
    icon: mdi:television
```
<img width="792" height="529" alt="Screenshot 2026-01-20 at 7 19 58 PM" src="https://github.com/user-attachments/assets/c8c31a82-6cb5-487a-b9c6-0320e0511446" />

## ⚙️ Opciones de configuración

Son muchas así que las pondré en un cuadro pero luego daré ejemplos de aquellos que no creo que se entiendan con solo ver el cuadro.

| Opción | Requerido | Descripción |
|--------|-----------|-------------|
| **devices** | ✔️ Sí | Lista de dispositivos renderizados como chips en el lado derecho. Cada ítem controla un chip (entidad, icono, acción, animaciones, reglas por estado, etc.). |
| **title** | ❌ Opcional | Título mostrado en el lado izquierdo de la tarjeta. |
| **temp_entity** | ❌ Opcional | Entidad de temperatura mostrada debajo del título. Al tocarla abre **Más Información** de Home Assistant. |
| **hum_entity** | ❌ Opcional | Entidad de humedad mostrada debajo del título. Al tocarla abre **Más Información** de Home Assistant. |
| **use_fahrenheit** | ❌ Opcional | Cuando es `true`, la unidad de temperatura muestra `°F` en lugar de `°C`. El valor se toma directamente del sensor. |
| **columns** | ❌ Opcional | Número de columnas en la cuadrícula de dispositivos. Por defecto: `4`. |
| **show_names** | ❌ Opcional | Cuando es `true`, muestra el nombre del dispositivo debajo de cada chip. Por defecto: `false`. |
| **full_width** | ❌ Opcional | Cuando es `true`, la tarjeta intenta usar todo el ancho disponible del dashboard. |
| **icon** | ❌ Opcional | Icono usado dentro de la burbuja principal. Por defecto: `mdi:bed`. |
| **chip_color_on** | ❌ Opcional | Color de fondo global de los chips cuando el dispositivo está encendido (ON). |
| **chip_color_off** | ❌ Opcional | Color de fondo global de los chips cuando el dispositivo está apagado (OFF). |
| **icon_color_on** | ❌ Opcional | Color del icono del chip cuando el dispositivo está encendido. |
| **icon_color_off** | ❌ Opcional | Color del icono del chip cuando el dispositivo está apagado. |
| **bubble_action** | ❌ Opcional | Acción al tocar la burbuja principal. Opciones: `more-info`, `navigate`, `none`. Por defecto: `more-info`. |
| **bubble_more_info_entity** | ❌ Opcional | Entidad que se abre cuando `bubble_action: more-info`. Orden de respaldo: `temp_entity` → `hum_entity` → ninguno. |
| **bubble_navigate_path** | ❌ Opcional | Ruta usada cuando `bubble_action: navigate`. Ejemplo: `/dashboard-phones/max`. |
| **title_overrides** | ❌ Opcional | Permite personalizar el estilo del título (tamaño, color, peso, icono, posición, visibilidad, etc.). |
| **header_overrides** | ❌ Opcional | Permite personalizar el encabezado de temperatura y humedad (iconos, colores, tamaños, fondo y posición). |
| **grid_overrides** | ❌ Opcional | Permite personalizar el diseño de la grilla de dispositivos (columnas, separación y alineación). |
| **device_overrides** | ❌ Opcional | Permite definir tamaños globales por defecto para los chips (tamaño, padding, icono). |
| **layout_overrides** | ❌ Opcional | Permite ajustar los espacios generales del layout (`right_top_padding`, `chips_gutter`). |
| **top_right** | ❌ Opcional | Permite mostrar y configurar píldoras informativas en la esquina superior derecha (una o múltiples). |
| **presence** | ❌ Opcional | Permite mostrar una insignia de presencia dentro de la burbuja principal (entidad, icono, colores y posición). |
| **bubble_overrides** | ❌ Opcional | Permite personalizar la burbuja principal (tamaño, colores, icono, posición y acción). |
| **card_overrides** | ❌ Opcional | Permite personalizar el estilo general de la tarjeta (fondo, bordes, sombra, altura mínima o fija). |


### 📌 Prioridad (qué gana si hay conflictos):

1) state_map (si aplica)

2) overrides por device (device_color_on/off, device_icon_color_on/off, chip_color)

3) colores globales (chip_color_on/off, icon_color_on/off)

4) defaults de la tarjeta

### 🔹 Ejemplo — tema global verde/gris

```yaml
type: custom:icon-room-card
title: Dormitorio

chip_color_on: "#22c55e"
chip_color_off: "rgba(100,116,139,0.25)"
icon_color_on: "#ffffff"
icon_color_off: "#475569"

devices:
  - entity: light.luces_max
    icon: mdi:lightbulb
    name: Luz
```



## 🔘 Ejemplos — dispositivos y reglas por estado (devices + state_map)

La sección **devices** define los chips que se muestran en la grilla del lado derecho de la tarjeta.

Cada device representa un control visual que puede:
- encender/apagar una entidad
- mostrar un estado
- ejecutar servicios
- navegar a otra vista
- cambiar colores, iconos y animaciones dinámicamente

Además, mediante **state_map**, cada chip puede modificar su comportamiento automáticamente según el estado o valor de una entidad.

---

### 🧠 ¿Qué es un device?

Un device es un chip interactivo dentro de la grilla.

Ejemplo básico:
```yaml
    devices:
      - entity: light.luz_dormitorio
        icon: mdi:lightbulb
```
Esto crea un chip que:
- usa el icono indicado
- ejecuta toggle al tocar
- cambia de color según ON / OFF

---

### 🧠 Opciones disponibles (device)

| Opción | Descripción |
|------|-------------|
| `entity` | Entidad principal del chip |
| `icon` | Icono mostrado |
| `name` | Texto debajo del chip |
| `action` | Acción al tocar (`toggle`, `more-info`, `navigate:/path`, `call-service`) |
| `state_entity` | Entidad alternativa usada solo para leer el estado |
| `service` | Servicio a ejecutar cuando `action: call-service` |
| `service_data` | Datos del servicio |
| `animated` | Animación cuando el dispositivo está activo |
| `invert_animation` | Invierte cuándo se ejecuta la animación |
| `chip_color` | Color fijo del chip |
| `device_color_on` / `device_color_off` | Colores del chip según estado |
| `device_icon_color_on` / `device_icon_color_off` | Colores del icono |
| `chip_size` | Tamaño del chip |
| `chip_padding` | Padding interno |
| `icon_size` | Tamaño del icono |
| `show_name` | Muestra u oculta el nombre |
| `spacer` | Deja un espacio, simulando el espacio que ocuparía el chip |

---


### 🔹 Ejemplo 1 — Leer estado de un sensor, pero controlar otra entidad

Muy útil cuando un sensor define el estado visual (ej: un enchufe), pero la acción actúa sobre otro dispositivo.
```yaml
    devices:
      - entity: switch.aire_dormitorio
        state_entity: sensor.estado_aire
        icon: mdi:air-conditioner
        name: Aire
```
El color y animación dependen del sensor, pero el toggle actúa sobre el switch.

---

### 🔹 Ejemplo 2 — Ejecutar un servicio
```yaml
    devices:
      - icon: mdi:power
        action: call-service
        service: button.press
        service_data:
          entity_id: button.apollo_air_restart
```
---

### 🔹 Ejemplo 3 — Navegar a otra vista
```yaml
    devices:
      - icon: mdi:chart-line
        action: navigate:/dashboard-phones/air
```

### 🔹 Ejemplo 4 — Spacer

No usar spacer vs usar spacer: 
```yaml
    devices:
  - entity: light.luces_max
    icon: mdi:lightbulb
  - entity: switch.ventilador_max
    icon: mdi:fan
  - entity: remote.sabrina_max
    icon: mdi:television
  - entity: light.luces_max
    icon: mdi:lightbulb
  - type: spacer
  - entity: switch.ventilador_max
    icon: mdi:fan
```
<img width="274" height="243" alt="Screenshot 2026-01-20 at 9 41 51 PM" src="https://github.com/user-attachments/assets/127854aa-a02e-4718-8bdd-a9150d932d39" />
<img width="274" height="243" alt="Screenshot 2026-01-20 at 9 42 00 PM" src="https://github.com/user-attachments/assets/24271a09-7b7f-4a16-898b-b1d52e3620c5" />


---

## 🎛️ Reglas dinámicas con state_map

La opción **state_map** permite cambiar automáticamente el aspecto y comportamiento de un chip según su estado o valor.

Con esto podés:
- cambiar colores
- cambiar iconos
- agregar animaciones
- modificar la acción al tocar
- mostrar distintos estados visuales

Todo sin duplicar dispositivos.

---

### 🧠 ¿Cómo funciona?

Cada regla se evalúa en orden.

La primera que coincida se aplica.

Las condiciones pueden usar:

- `value` → valor numérico del sensor  
- `state` → estado textual  
- `on` → true / false según el estado del dispositivo  

---

### 🔹 Ejemplo 5 — Cambiar color según valor numérico
```yaml
    devices:
      - entity: sensor.temperatura_dormitorio
        icon: mdi:thermometer
        name: Temperatura
        state_map:
          - when: value >= 30
            chip_color: "#ef4444"

          - when: value >= 24
            chip_color: "#f59e0b"

          - when: else
            chip_color: "#22c55e"
```
---

### 🔹 Ejemplo 6 — Animación cuando está encendido
```
    devices:
      - entity: switch.ventilador
        icon: mdi:fan
        name: Ventilador
        animated: rotate
```
El chip se anima automáticamente mientras esté encendido.

---

### 🔹 Ejemplo 7 — Animación invertida
```yaml
    devices:
      - entity: binary_sensor.puerta
        icon: mdi:door
        name: Puerta
        animated: blink
        invert_animation: true
```
La animación se activa cuando la puerta está abierta.

---

### 🔹 Ejemplo 8 — Cambiar acción según estado
```yaml
    devices:
      - entity: light.luz_dormitorio
        icon: mdi:lightbulb
        name: Luz
        state_map:
          - when: state === "off"
            action: toggle

          - when: state === "on"
            action: more-info
```
Cuando está apagada → la enciende  
Cuando está prendida → abre más información

---

### 🔹 Ejemplo 9 — Cambiar icono y color dinámicamente
```yaml
    devices:
      - entity: binary_sensor.presencia
        name: Presencia
        icon: mdi:account
        state_map:
          - when: on === true
            icon: mdi:account-check
            chip_color: "#22c55e"

          - when: else
            icon: mdi:account-off
            chip_color: "#64748b"
```
---

💡 **Consejo**

`state_map` es el corazón de la tarjeta.

Permite que los chips “cobren vida” y reaccionen al estado real de tu casa, sin necesidad de crear múltiples tarjetas ni automatizaciones visuales.

## ✨ Animaciones disponibles

La Icon Room Card incluye una **librería completa de animaciones ya incorporadas en el bundle** (`mj-cards.js`).

Esto significa que:

- no necesitás instalar nada adicional
- no se pierden animaciones al actualizar
- todas están disponibles automáticamente
- solo tenés que indicar el nombre en el YAML

Las animaciones pueden usarse tanto de forma directa (`animated`) como dentro de reglas dinámicas (`state_map`).

> ⚠️ Los nombres son **case-sensitive**  
> Ejemplo: `jiggleX` ≠ `jigglex`

---

## 🧠 Cómo se usan

### 🔹 Animación simple (cuando el dispositivo está activo)

```yaml
devices:
  - entity: switch.ventilador
    name: Ventilador
    icon: mdi:fan
    animated: rotate

```
### 🔹 Animaciones condicionales con state_map
```yaml
devices:
  - entity: sensor.humedad_banio
    icon: mdi:water-percent
    name: Humedad
    state_map:
      - when: value >= 75
        animated: vibrate
        chip_color: "#ef4444"

      - when: value >= 60
        animated: pulse
        chip_color: "#f59e0b"

      - when: else
        animated: halo
        chip_color: "#22c55e"
```

### 📚 Lista completa de animaciones

| Animación    | Descripción                       |
| ------------ | --------------------------------- |
| `blink`      | Parpadeo suave                    |
| `bounce`     | Rebote vertical                   |
| `breathe`    | Respiración muy sutil             |
| `breathGlow` | Respiración con resplandor        |
| `distort`    | Distorsión visual leve            |
| `flicker`    | Titileo irregular (tipo lámpara)  |
| `flip`       | Giro rápido                       |
| `float`      | Movimiento flotante suave         |
| `glow`       | Resplandor constante              |
| `halo`       | Halo luminoso alrededor del chip  |
| `heartbeat`  | Pulso rítmico tipo latido         |
| `hover`      | Movimiento continuo tipo hover    |
| `jelly`      | Efecto gelatina                   |
| `jiggleX`    | Sacudida horizontal               |
| `neonPulse`  | Pulso estilo neón                 |
| `orbit2`     | Órbita animada alrededor del chip |
| `pop`        | Salto corto / expansión rápida    |
| `pulse`      | Pulso de tamaño                   |
| `radar`      | Barrido tipo radar                |
| `ring`       | Anillo animado                    |
| `ripple`     | Onda expansiva                    |
| `rotate`     | Rotación continua                 |
| `scan`       | Barrido tipo escáner              |
| `shake`      | Sacudida corta                    |
| `shimmer`    | Brillo deslizante                 |
| `spark`      | Destellos rápidos                 |
| `sparkle`    | Chispas intermitentes             |
| `sweep`      | Barrido direccional               |
| `swing`      | Balanceo lateral                  |
| `throb`      | Pulso intenso                     |
| `tilt`       | Inclinación suave                 |
| `vibrate`    | Vibración rápida                  |
| `wave`       | Ondulación                        |
| `wobble`     | Balanceo irregular                |
| `zoom`       | Zoom in / out suave               |


## 🎨 Ejemplos — estilo general de la tarjeta (card_overrides)

La opción **card_overrides** permite modificar el aspecto visual completo de la tarjeta, sin afectar el funcionamiento interno ni romper los temas de Home Assistant.

Desde aquí podés personalizar:

- color de fondo
- bordes redondeados
- borde
- sombra
- altura mínima o fija
- estilo tipo “glass”
- apariencia clara u oscura

Por defecto, la tarjeta utiliza automáticamente las variables del theme activo de Home Assistant.

---

### 🧠 Opciones disponibles

| Opción | Descripción |
|------|-------------|
| `bg` | Color o fondo de la tarjeta |
| `radius` | Bordes redondeados |
| `border` | Ancho del borde |
| `border_color` | Color del borde |
| `shadow` | Sombra de la tarjeta |
| `min_height` | Altura mínima |
| `height` | Altura fija |

---

### 🔹 Ejemplo 1 — Fondo oscuro simple
<img width="274" height="225" alt="Screenshot 2026-01-20 at 9 20 19 PM" src="https://github.com/user-attachments/assets/71a2ddcd-81e5-4300-b488-ea3b1c151d44" />

```yaml
card_overrides:
  bg:  "#1f2"
```
Por favor no usen este color :)

### 🔹 Ejemplo 2 — Fondo translúcido (glass effect)

```yaml
card_overrides:
  bg: "rgba(255,255,255,0.75)"
  shadow: "0 8px 24px rgba(0,0,0,0.15)"

```

### 🔹 Ejemplo 3 — Bordes redondeados personalizados

```yaml
card_overrides:
  radius: "22px"

```
### 🔹 Ejemplo 4 — Borde visible
<img width="274" height="243" alt="Screenshot 2026-01-20 at 9 23 30 PM" src="https://github.com/user-attachments/assets/dc047d69-a08a-4185-84fe-7cf0bde44a88" />

```yaml
card_overrides:
  border: "10px"
  border_color: "rgba(0,0,0,0.15)"

```
10 px es mucho, posiblemente 1 o 2 px quede mejor, esto es a modo de ejemplo.
### 🔹 Ejemplo 5 — Altura fija o mínima

```yaml
card_overrides:
  height: "220px"
```

o bien
```yaml
card_overrides:
  min_height: "220px"

```

## 🧭 Ejemplos — acciones de la burbuja principal

La burbuja principal (ícono grande en la esquina inferior izquierda) puede ejecutar distintas acciones cuando se toca.

Esto se controla mediante las siguientes opciones:

- **bubble_action**  
  Define qué ocurre al tocar la burbuja. Recuerda que debes tocar abajo a la izquierda del ícono principal.

  Valores posibles:
  - `more-info` → abre el panel **Más Información** de una entidad  
  - `navigate` → navega a otra vista o dashboard  
  - `none` → no ejecuta ninguna acción  

  Valor por defecto: `more-info`

- **bubble_more_info_entity**  
  Entidad que se abrirá cuando `bubble_action: more-info`.

  Si no se especifica, la tarjeta utiliza automáticamente este orden de respaldo:

  1. `temp_entity`  
  2. `hum_entity`  
  3. ninguno (no hace nada)

- **bubble_navigate_path**  
  Ruta utilizada cuando `bubble_action: navigate`. Usar navigate es especialmente útil cuando tenés un dashboard principal y querés abrir una vista más completa de la habitación desde el icono grande.
  
---

### 🔹 Ejemplo 1 — Abrir “Más Información” (comportamiento por defecto)

```yaml
type: custom:icon-room-card
title: Dormitorio

bubble_action: more-info
bubble_more_info_entity: light.luces_max

devices:
  - entity: light.luces_max
    icon: mdi:lightbulb

```
### 🔹 Ejemplo 2 — Navegar a otro dashboard o vista
Mismo código pero cambiando esta parte: 
```yaml
bubble_action: navigate
bubble_navigate_path: /dashboard-phones/max
```


## 📊 Ejemplos — píldoras de información (top_right)

La opción **top_right** permite mostrar una o varias *píldoras informativas* en la esquina superior derecha de la tarjeta.
Las píldoras son ideales para mostrar información rápida que no requiere interacción directa, pero que querés tener siempre visible sin ocupar espacio en la grilla de dispositivos.

Estas píldoras son ideales para mostrar información rápida como:
- estado del clima
- valores numéricos
- sensores auxiliares
- indicadores secundarios

Cada píldora puede mostrar:
- un icono opcional
- un valor
- una unidad
- y abrir “Más Información” al tocarla

### 🧠 Opciones disponibles — `top_right`

La opción **top_right** permite mostrar una o varias “píldoras” de información en la esquina superior derecha.

| Opción | Requerido | Descripción |
|--------|-----------|-------------|
| **enabled** | ❌ Opcional | Habilita/deshabilita el bloque. Si definís `top_right:` y no seteás `enabled`, se considera `true`. |
| **items** | ❌ Opcional | Lista de píldoras (modo recomendado). Si no existe o está vacío, podés usar el modo legacy `value` + `icon`. |
| **bg** | ❌ Opcional | Fondo por defecto de las píldoras. Default: `rgba(0,0,0,0.05)`. |
| **radius** | ❌ Opcional | Radio (en px) por defecto de las píldoras. Default: `12`. |
| **padding** | ❌ Opcional | Padding por defecto (CSS). Default: `2px 8px`. |
| **gap** | ❌ Opcional | Separación (en px) entre icono y texto. Default: `2`. |
| **icon_size** | ❌ Opcional | Tamaño del icono por defecto (en px). Default: `14`. |
| **icon_color** | ❌ Opcional | Color del icono por defecto. Default: `var(--secondary-text-color)`. |
| **value_size** | ❌ Opcional | Tamaño del valor por defecto (en px). Default: `12`. |
| **value_color** | ❌ Opcional | Color del valor por defecto. Default: `var(--secondary-text-color)`. |
| **unit_size** | ❌ Opcional | Tamaño de la unidad por defecto (en px). Default: `12`. |
| **unit_color** | ❌ Opcional | Color de la unidad por defecto. Default: `var(--secondary-text-color)`. |
| **value** | ❌ Opcional | (Legacy) Entidad a mostrar como una única píldora. Si existe, se convierte en `items: [{ entity: value, icon: ... }]`. |
| **icon** | ❌ Opcional | (Legacy) Icono usado cuando se utiliza `value`. |

---

### 🧩 Opciones disponibles — `top_right.items[]`

Cada elemento de `items` representa una píldora.

| Opción | Requerido | Descripción |
|--------|-----------|-------------|
| **entity** | ❌ Opcional | Entidad para mostrar su estado. Si existe, el valor se lee desde Home Assistant. |
| **text** | ❌ Opcional | Texto fijo (en vez de entidad). Si no hay `entity`, se usa `text` (o `--` si falta). |
| **unit** | ❌ Opcional | Unidad mostrada a la derecha (ej: `ppm`, `%`, `°C`). |
| **icon** | ❌ Opcional | Icono de la píldora (ej: `mdi:molecule-co2`). |
| **format** | ❌ Opcional | Formato del valor cuando hay `entity`: `int`, `float1`, `float2` (o vacío = sin formato). |
| **more_info_entity** | ❌ Opcional | Entidad a abrir al tocar la píldora. Default: `entity` (si existe). |
| **state_map** | ❌ Opcional | Reglas dinámicas (igual que en devices) para ajustar `chip_color`, `icon_color`, `animated`, `action`, `text`, etc. según estado/valor. |
| **bg** | ❌ Opcional | Fondo específico de esta píldora (override del `bg` general). |
| **radius** | ❌ Opcional | Radio específico (override del `radius` general). |
| **padding** | ❌ Opcional | Padding específico (override del `padding` general). |
| **icon_size** | ❌ Opcional | Tamaño de icono específico (override del general). |
| **icon_color** | ❌ Opcional | Color de icono específico (override del general). |
| **value_size** | ❌ Opcional | Tamaño de valor específico (override del general). |
| **value_color** | ❌ Opcional | Color de valor específico (override del general). |
| **unit_size** | ❌ Opcional | Tamaño de unidad específico (override del general). |
| **unit_color** | ❌ Opcional | Color de unidad específico (override del general). |

---

### 🔹 Ejemplo 1 — Una sola píldora simple
<img width="274" height="182" alt="Screenshot 2026-01-20 at 8 13 55 PM" src="https://github.com/user-attachments/assets/234cbcbb-944b-4215-a938-8c153587a6b3" />

```yaml
type: custom:icon-room-card
title: Dormitorio

top_right:
  value: sensor.apollo_air_max_co2
  icon: mdi:molecule-co2

devices:
  - entity: light.luces_max
```

### 🔹 Ejemplo 2 — Múltiples píldoras
Cuando necesitás mostrar más de un valor, podés usar _items_.
```yaml
top_right:
  items:
    - entity: sensor.apollo_air_max_co2
      icon: mdi:molecule-co2
      unit: ppm

    - entity: sensor.apollo_air_max_voc
      icon: mdi:chemical-weapon
      unit: ppb
```

### 🔹 Ejemplo 3 — Píldoras con texto fijo
También podés mostrar texto en lugar de una entidad.
```yaml
top_right:
  items:
    - text: ECO
      icon: mdi:leaf

```
## 🏷️ Ejemplos — personalización del título (title_overrides)

La opción **title_overrides** permite modificar completamente el estilo del título que aparece en el lado izquierdo de la tarjeta.

Podés cambiar:
- tamaño del texto
- color
- peso (bold)
- mayúsculas
- ancho máximo
- icono junto al título
- desplazamiento horizontal y vertical

Esto es útil cuando querés adaptar la tarjeta a distintos dashboards o estilos visuales sin romper el diseño general.
Si no quieres título podés poner que no se renderize así:
```yaml
title_overrides:
  hidden: true
```

| Opción       | Descripción                            |
| ------------ | -------------------------------------- |
| `hidden`     | Oculta el título                       |
| `size`       | Tamaño de fuente en píxeles            |
| `color`      | Color del texto                        |
| `weight`     | Grosor del texto                       |
| `uppercase`  | Convierte el texto a mayúsculas        |
| `max_width`  | Ancho máximo antes de aplicar ellipsis |
| `nowrap`     | Evita saltos de línea                  |
| `icon`       | Icono junto al título                  |
| `icon_size`  | Tamaño del icono                       |
| `icon_color` | Color del icono                        |
| `gap`        | Espacio entre icono y texto            |
| `offset_x`   | Desplazamiento horizontal              |
| `offset_y`   | Desplazamiento vertical                |

---

### 🔹 Ejemplo 1 — Cambiar tamaño y color del título

```yaml
type: custom:icon-room-card
title: Dormitorio

title_overrides:
  size: 22
  color: "#334155"
  weight: 600
```

### 🔹 Ejemplo 2 — Título en mayúsculas y limitar el ancho del título

```yaml

title_overrides:
  uppercase: true
  max_width: 120
```
### 🔹 Ejemplo 3 — Agregar un icono junto al título

```yaml
title_overrides:
  icon: mdi:bed
  icon_size: 18
  icon_color: "#64748b"
  gap: 6

```

### 🔹 Ejemplo 4 — Mover el título (offset)

```yaml
title_overrides:
  offset_x: 6
  offset_y: -2
```

## 🌡️ Ejemplos — personalización del encabezado (header_overrides)

La opción **header_overrides** permite personalizar el mini encabezado que aparece debajo del título, donde se muestran la temperatura y la humedad.

Desde aquí podés modificar:
- posición del bloque
- iconos
- colores
- tamaños
- fondo y espaciado

Todo sin alterar el diseño general de la tarjeta.

### 🧠 Opciones disponibles

#### Generales

| Opción | Descripción |
|------|-------------|
| `offset_x` | Desplazamiento horizontal del encabezado |
| `offset_y` | Desplazamiento vertical del encabezado |

#### Para temperatura (`temp`) y humedad (`hum`)

| Opción | Descripción |
|------|-------------|
| `icon` | Icono mostrado |
| `icon_size` | Tamaño del icono |
| `icon_color` | Color del icono |
| `value_size` | Tamaño del valor |
| `value_color` | Color del valor |
| `unit_size` | Tamaño de la unidad |
| `unit_color` | Color de la unidad |
| `bg` | Fondo |
| `radius` | Bordes redondeados |
| `padding` | Espaciado interno |
| `gap` | Separación entre icono y texto |


---

### 🔹 Ejemplo 1 — Cambiar iconos, colores y tamaños

```yaml
header_overrides:
  temp:
    icon: mdi:thermometer-lines
    icon_color: "#ef4444"
    icon_size: 16
    value_size: 15
    value_color: "#1f2933"
    unit_size: 12

  hum:
    icon: mdi:water
    icon_color: "#3b82f6"
    icon_size: 16
    value_size: 15
    value_color: "#1f2933"
```

### 🔹 Ejemplo 2 — Estilo tipo “chip” con fondo
<img width="274" height="215" alt="Screenshot 2026-01-20 at 8 27 43 PM" src="https://github.com/user-attachments/assets/c2ebb0a4-4701-4b4c-b8fa-14fd61becbc6" />

```yaml
header_overrides:
  temp:
    bg: "rgba(239, 68, 68, 0.12)"
    radius: 10
    padding: "2px 6px"

  hum:
    bg: "rgba(59, 130, 246, 0.12)"
    radius: 10
    padding: "2px 6px"

```

### 🔹 Ejemplo 3 — Mover el encabezado completo
Desplaza todo el bloque de temperatura y humedad.
<img width="274" height="215" alt="Screenshot 2026-01-20 at 8 27 43 PM" src="https://github.com/user-attachments/assets/c2ebb0a4-4701-4b4c-b8fa-14fd61becbc6" />

```yaml
header_overrides:
  offset_x: 6
  offset_y: -4

```
## 🔲 Ejemplos — personalización de la grilla de dispositivos (grid_overrides)

La opción **grid_overrides** permite modificar el comportamiento y el diseño de la grilla donde se renderizan los dispositivos (chips) en el lado derecho de la tarjeta.

Desde aquí podés controlar:
- cantidad de columnas
- separación entre chips
- alineación horizontal y vertical
- comportamiento visual del layout

Esto es especialmente útil para adaptar la tarjeta a:
- pantallas grandes
- tablets
- dashboards móviles
- vistas más compactas o más aireadas

---

### 🧠 Opciones disponibles

| Opción | Descripción |
|------|-------------|
| `columns` | Número de columnas de la grilla |
| `col_gap` | Espacio horizontal entre columnas |
| `row_gap` | Espacio vertical entre filas |
| `justify_content` | Alineación horizontal de la grilla (`start`, `center`, `end`) |
| `align_items` | Alineación vertical de los chips (`start`, `center`, `end`) |

---

### 🔹 Ejemplo 1 — Cambiar cantidad de columnas


```yaml
    grid_overrides:
      columns: 5
```
Aumenta la cantidad de chips visibles por fila (ideal para pantallas grandes o tablets).

---

### 🔹 Ejemplo 2 — Ajustar separación entre dispositivos

<img width="274" height="468" alt="Screenshot 2026-01-20 at 8 37 18 PM" src="https://github.com/user-attachments/assets/192db86f-9479-4f9f-8285-1bd1ddb9a4c7" />

Este ejemplo es solo para que se entienda, no usen estos valores :)
```yaml
    grid_overrides:
      col_gap: 30
      row_gap: 140
```
Permite hacer la grilla más aireada o más compacta según el theme.

---

### 🔹 Ejemplo 3 — Centrar la grilla


```yaml
    grid_overrides:
      justify_content: center
      align_items: center
```
Centra visualmente todos los chips dentro del área disponible.
Útil cuando hay pocos dispositivos o en dashboards minimalistas.
## 📐 Ejemplos — control del diseño general (layout_overrides)

La opción **layout_overrides** permite ajustar los espacios generales del layout de la tarjeta, sin modificar tamaños de chips ni estilos individuales.

Desde aquí podés controlar:
- el espacio superior de la grilla de dispositivos
- la separación entre la burbuja izquierda y los chips
- el balance visual general de la tarjeta

Es especialmente útil para:
- pantallas pequeñas
- dashboards móviles
- layouts más compactos
- corregir alineaciones entre distintas tarjetas

---

### 🧠 Opciones disponibles

| Opción | Descripción |
|------|-------------|
| `right_top_padding` | Espacio superior de la grilla de dispositivos (por defecto: `30`) |
| `chips_gutter` | Separación horizontal entre la burbuja izquierda y la grilla de chips (por defecto: `0`) |

---

### 🔹 Ejemplo 1 — Subir o bajar la grilla de dispositivos


```yaml
    layout_overrides:
      right_top_padding: 12
```
Reduce el espacio superior y acerca los chips al título.

Ideal para dashboards compactos.

---

### 🔹 Ejemplo 2 — Separar la grilla de la burbuja

```yaml

    layout_overrides:
      chips_gutter: 24
```
Agrega espacio entre la burbuja izquierda y los dispositivos.

Útil cuando la burbuja es grande o visualmente pesada.

---

### 🔹 Ejemplo 3 — Ajuste combinado

Esta es la razon por la cual debemos colocar algo así para hacer la card más pequeña como les dije al principio:
<img width="792" height="529" alt="Screenshot 2026-01-20 at 7 19 58 PM" src="https://github.com/user-attachments/assets/c8c31a82-6cb5-487a-b9c6-0320e0511446" />

```yaml
layout_overrides:
  right_top_padding: 13
  chips_gutter: -400
```
Permite equilibrar visualmente toda la tarjeta sin tocar estilos individuales.

## 👤 Ejemplos — insignia de presencia en la burbuja (presence)

La opción **presence** permite mostrar una “insignia” (badge) dentro de la burbuja principal (la burbuja grande abajo a la izquierda).

Sirve para indicar presencia/ocupación de un cuarto (por ejemplo: `person.max`, `binary_sensor.presencia_dormitorio`, etc.).

Desde aquí podés controlar:
- entidad de presencia
- icono
- tamaño y posición dentro de la burbuja
- colores cuando está ON/OFF
- ocultarlo cuando está apagado

---

### 🧠 Opciones disponibles

| Opción | Descripción |
|------|-------------|
| `enabled` | Habilita/deshabilita el badge. Si no lo definís y seteás `entity`, se habilita solo |
| `entity` | Entidad de presencia (ej: `person.max`, `binary_sensor.presencia_*`) |
| `icon` | Icono del badge (por defecto: `mdi:account`) |
| `size` | Tamaño del icono dentro del badge |
| `badge_size` | Tamaño del círculo (badge) |
| `bg_on` / `bg_off` | Fondo del badge cuando está ON / OFF |
| `icon_on` / `icon_off` | Color del icono cuando está ON / OFF |
| `position` | Posición del badge dentro de la burbuja (`top-left`, `top-right`, `bottom-left`, `bottom-right`, `center-left`) |
| `offset_x` / `offset_y` | Ajuste fino de la posición del badge |
| `show_only_when_on` | Si es `true`, oculta el badge cuando está OFF |

---

### 🔹 Ejemplo 1 — Presencia simple (auto-enabled)

```yaml

    presence:
      entity: binary_sensor.presencia_dormitorio
      icon: mdi:account
```
Cuando `binary_sensor.presencia_dormitorio` es detectado el badge se ve activo.

---

### 🔹 Ejemplo 2 — Cambiar aspecto del icono

```yaml

    presence:
      entity: binary_sensor.presencia_dormitorio
      bg_on: "rgba(34,197,94,0.20)"
      bg_off: "rgba(100,116,139,0.15)"
      icon_on: "#16a34a"
      icon_off: "#64748b"
```
---

### 🔹 Ejemplo 3 — Mover el badge 
<img width="274" height="225" alt="Screenshot 2026-01-20 at 8 49 57 PM" src="https://github.com/user-attachments/assets/c25559bf-f5a6-4800-aa81-f73df1b9101c" />

```yaml

    presence:
      entity: binary_sensor.presencia_dormitorio
      offset_x: 55
      offset_y: -35
      badge_size: 28
      size: 16
```
## 🧩 Ejemplos — tamaños globales de chips (device_overrides)

La opción **device_overrides** define los tamaños globales por defecto para todos los chips del grid (lado derecho).

Sirve para:
- hacer la grilla más compacta
- agrandar iconos
- ajustar el padding sin tocar cada device

Estos valores se usan como “default”, pero cada device puede sobrescribirlos con `chip_size`, `chip_padding`, `icon_size`.

---

### 🧠 Opciones disponibles

| Opción | Descripción |
|------|-------------|
| `chip_size` | Tamaño del círculo del chip (por defecto: `48`) |
| `chip_padding` | Padding interno del chip (por defecto: `10`) |
| `icon_size` | Tamaño del icono dentro del chip (por defecto: `24`) |

---

### 🔹 Ejemplo 1 — Chips más chicos (compacto)

```yaml

    device_overrides:
      chip_size: 42
      chip_padding: 8
      icon_size: 22
```
---

### 🔹 Ejemplo 2 — Chips grandes (tipo tablet)

```yaml

    device_overrides:
      chip_size: 56
      chip_padding: 12
      icon_size: 28
```
---

### 🔹 Ejemplo 3 — Sobrescribir un solo device (mezcla)

Ejemplo: usás defaults compactos, pero un device especial más grande:
```yaml
    device_overrides:
      chip_size: 42
      chip_padding: 8
      icon_size: 22

    devices:
      - entity: light.luz_principal
        icon: mdi:ceiling-light
        name: Luz
        chip_size: 56
        chip_padding: 12
        icon_size: 28
```

## 🫧 Ejemplos — personalización de la burbuja principal (bubble_overrides)

La opción **bubble_overrides** permite personalizar la burbuja grande (abajo a la izquierda), sin tocar el comportamiento de los chips.

Desde aquí podés controlar:
- tamaño, color y posición
- tamaño del icono dentro de la burbuja
- color/opacity del icono
- separación contra la grilla (gutter)
- acción al tocar (si querés sobrescribir lo global)

---

### 🧠 Opciones disponibles

| Opción | Descripción |
|------|-------------|
| `enabled` | Muestra u oculta la burbuja |
| `icon` | Icono dentro de la burbuja (ej: `mdi:bed`) |
| `size` | Tamaño de la burbuja |
| `offset` | Offset vertical (negativo la “entierra” hacia abajo, por defecto `-20`) |
| `bg` | Color de fondo de la burbuja |
| `icon_size` | Tamaño del icono de la burbuja |
| `icon_color` | Color del icono |
| `icon_opacity` | Opacidad del icono |
| `right_gutter` | Separación entre burbuja y grilla |
| `action` | `more-info`, `navigate`, `none` |
| `more_info_entity` | Entidad usada si `action: more-info` |
| `navigate_path` | Path usado si `action: navigate` |

---

### 🔹 Ejemplo 1 — Cambiar tamaño y colores

<img width="274" height="225" alt="Screenshot 2026-01-20 at 9 17 09 PM" src="https://github.com/user-attachments/assets/b6080fac-6a26-4878-9a38-0a3e0b1219c6" />

```yaml

    bubble_overrides:
      size: 92
      bg: "#1f2937"
      icon: mdi:sofa
      icon_size: 50
      icon_color: "#e5e7eb"
      icon_opacity: 0.95
```
---

### 🔹 Ejemplo 2 — Ajustar separación con la grilla


```yaml
    bubble_overrides:
      right_gutter: 24
```
Si ves que los chips quedan muy pegados a la burbuja, subí este valor.

---

### 🔹 Ejemplo 3 — Acción específica solo para la burbuja

```yaml

    bubble_overrides:
      action: navigate
      navigate_path: /dashboard-phones/max
```
O para abrir “Más información” de una entidad específica:
```yaml
    bubble_overrides:
      action: more-info
      more_info_entity: light.luz_principal
```
