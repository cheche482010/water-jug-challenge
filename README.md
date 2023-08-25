# Water Jug Challenge App

## Motivo de la Aplicación

La aplicación Water Jug Challenge resuelve el famoso desafío de las botellas de agua. El desafío consiste en utilizar dos jarras de diferentes capacidades para medir una cantidad específica de agua. La aplicación permite a los usuarios ingresar las capacidades de las jarras y la cantidad de agua objetivo, y luego muestra el proceso para lograr la medida requerida.

## Estructura de Carpetas

La estructura de carpetas de la aplicación está organizada de la siguiente manera:

water-jug-challenge/
|-- src/
| |-- components/
| | |-- css/
| | | |-- InputField.css
| | | |-- JugForm.css
| | | |-- Solution.css
| | |-- InputField.js
| | |-- JugForm.js
| | |-- Solution.js
| |-- App.js
| |-- index.js
| |-- ...
|-- public/
|-- ...
|-- ...


- `src/components/`: Contiene los componentes principales de la aplicación.
- `src/components/css/`: Contiene archivos CSS para los estilos de los componentes.
- `src/App.js`: Componente principal que ensambla otros componentes y maneja la lógica del desafío.
- `src/index.js`: Punto de entrada de la aplicación.

## Funcionamiento de los Componentes

### JugForm.js

El componente `JugForm` renderiza un formulario donde los usuarios pueden ingresar las capacidades de las jarras (X-gallon y Y-gallon) y la cantidad de agua objetivo (Z gallons). También incluye validaciones para garantizar que las entradas sean números enteros y mayores que cero. Al hacer clic en el botón "Solve", se llama a la función `solveWaterJugChallenge` en `App.js`.

### Solution.js

El componente `Solution` muestra la solución encontrada para el desafío. Si se encuentra una solución, muestra los pasos para lograr la cantidad de agua objetivo, rodeados de verde. Si no se encuentra una solución, muestra "No Solution" rodeado de rojo.

### InputField.js

El componente `InputField` es reutilizable y maneja los campos de entrada. Renderiza un campo de entrada `input` junto con su correspondiente etiqueta `label`.

## Algoritmo Utilizado

El algoritmo utilizado para resolver el desafío es una simulación simple que utiliza las operaciones de llenado, vaciado y transferencia de agua entre las jarras. En cada paso, se consideran tres posibles operaciones: llenar una jarra, vaciar una jarra y transferir agua de una jarra a otra. El algoritmo continúa ejecutando estas operaciones hasta que se alcance la cantidad de agua objetivo en una de las jarras.

El algoritmo no siempre encuentra la solución más eficiente y puede requerir varios pasos en algunos casos. Se utilizó este enfoque simple para demostrar el proceso básico de resolución del desafío.