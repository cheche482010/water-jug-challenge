# Water Jug Challenge Solver

## Motivo de la Aplicación

La aplicación Water Jug Challenge resuelve el famoso desafío de las botellas de agua. El desafío consiste en utilizar dos jarras de diferentes capacidades para medir una cantidad específica de agua. La aplicación permite a los usuarios ingresar las capacidades de las jarras y la cantidad de agua objetivo, y luego muestra el proceso para lograr la medida requerida.

## Estructura de Carpetas

- **src**
  - **components**: Contiene los componentes utilizados en la interfaz de usuario.
    - `Algorithm.js`: Contiene el algoritmo que resuelve el desafío.
    - `InputField.js`: Componente reutilizable para campos de entrada.
    - `JugForm.js`: Componente que muestra el formulario de entrada de datos.
    - `Solution.js`: Componente que muestra la solución del desafío.
    - `SolutionTable.js`: Componente que muestra la tabla de pasos de la solución.
  - **css**: Contiene los estilos CSS para los componentes.
    - `InputField.css`
    - `JugForm.css`
    - `Solution.css`
  - `App.js`: Componente principal que renderiza la interfaz de usuario.
  - `index.js`: Punto de entrada de la aplicación.

## Componentes Utilizados

### `Algorithm.js`

Este componente contiene el algoritmo principal que resuelve el desafío del problema de los recipientes de agua. Utiliza un enfoque de búsqueda en anchura (BFS).

### `InputField.js`

Este componente es una pieza reutilizable de la interfaz de usuario que representa un campo de entrada numérico. Recibe tres propiedades: `label`, `value` y `onChange`. `label` muestra una etiqueta descriptiva para el campo, `value` es el valor numérico actual del campo y `onChange` es una función que se ejecuta cuando el valor cambia.

### `JugForm.js`

Este componente muestra un formulario interactivo para ingresar los valores de capacidad de los dos recipientes (`X` y `Y`) y la cantidad deseada `Z`. Utiliza el componente `InputField` para crear los campos de entrada. Cuando se hace clic en el botón "Solve", valida los datos ingresados, realiza la llamada al algoritmo para resolver el desafío y muestra la solución o un mensaje de error.

### `Solution.js`

Este componente muestra la solución del problema o un mensaje si no se encuentra ninguna solución. Utiliza el componente `SolutionTable` para mostrar los pasos de la solución en forma de tabla. Si no hay solución, muestra un mensaje de "No solution found."

### `SolutionTable.js`

Este componente muestra los pasos de la solución en forma de tabla. Recibe una propiedad `solution` que es un arreglo de pasos, donde cada paso tiene información sobre el estado de los recipientes y la acción realizada en ese paso. La tabla muestra los cambios en las capacidades de los recipientes en cada paso, junto con una explicación de la acción tomada.

## Algoritmo Utilizado

El algoritmo utilizado es un enfoque de búsqueda en anchura (BFS). Comienza con un estado inicial (ambos recipientes vacíos) y explora todas las posibles acciones que pueden realizarse desde ese estado. El algoritmo considera llenar o vaciar los recipientes, y transferir agua entre ellos. Se utiliza una cola para mantener un seguimiento de los estados pendientes de explorar.

El algoritmo continúa explorando hasta encontrar la solución (una de las capacidades coincide con la cantidad deseada) o hasta que no haya más estados por explorar. Si se encuentra una solución, se guardan los pasos necesarios para llegar a ella. Si no se encuentra una solución, se marca como resuelto con una solución vacía.

## Cómo Instalar y Ejecutar

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación en el navegador.



