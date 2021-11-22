# The DOM

Es el Document Object Model
Hace referencia a la manera en que podemos usar JS para modificar un sitio web

- Document = Es el documento HTML
- Object = Javascript genera un objeto a partir del HTML
- Model = Es la representación en JS del verdadero HTML (
  Lo real es dentro del HTML: <h2 id="count-el">0</h2>
  El modelo es en JS: let countEl = document.getElementById("count-el")
  )

# The += operator

Este operador toma el valor actual de la función y le suma (o concatena) lo que sigue

- let count = 1;
- count += 1;
- console.log(count); // expected: 2

- let saludo = "¡Hola ";
- let finSaludo = "buen día!";
- console.log(saludo += finSaludo); // expected ¡Hola buen día!
