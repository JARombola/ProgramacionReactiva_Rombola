# ProgramacionReactiva - Rombola
## Resumen
La aplicación simplemente muestra el nombre de distintos super héroes, junto con una imagen de cada uno y un ícono representado su género:

![image](https://user-images.githubusercontent.com/11930260/179601749-7473e419-f4e5-48a8-84cb-25a80b4b5032.png)

## Funcionamiento
Para obtener esta información se realiza una llamada http a una API REST (usando un **observable** y el pipe async).

Se presentan cuatro botones en la barra superior, y un panel colapsable.
![image](https://user-images.githubusercontent.com/11930260/179601320-0d10c4f1-aef5-4bf3-a063-6616e5a8b303.png)
- Al presionar cada uno de estos botones se vuelve a realizar una llamada a la API REST, aplicando en cada caso un filtro distinto según el género seleccionado (Utilizando el operador *pipe* con *filter* sobre el observable).

- Por otro lado, dentro del panel colapsable de **Bandos**, se muestra una tabla cuya información es completada a través de una promesa: Una vez obtenido el listado de superhéroes estos se "agrupan" por bandos indicando la cantidad perteneciente a cada uno de estos. (Se agregó un delay de 3 segundos para simular demora).
![image](https://user-images.githubusercontent.com/11930260/179603273-fd7927c3-ca95-43e9-b0bc-2b843d221abc.png)

Resultado -> ![image](https://user-images.githubusercontent.com/11930260/179603850-52794e2d-e23d-4902-9808-03bd5210d25a.png)
