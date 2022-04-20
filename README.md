[![Netlify Status](https://api.netlify.com/api/v1/badges/96826b26-a250-4579-8af2-7ab833c1009e/deploy-status)](https://app.netlify.com/sites/lovely-cucurucho-d6daa6/deploys)

# LEGO
## Skateshop
Encontra los mejores productos de skate.

### Descripcion del proyecto
    Mi codigo corresponde a un ecommerce relacionado a la venta de articulos de skate.
    Consta de un inicio donde se presentan todos los productos que comercializamos, un header donde se encuentran la categorias (para filtrar los productos) y un cartIcon que redirecciona al carro de compras, donde se puede: eliminar productos no deseados de forma individual, vaciar el carro por completo o mediante un boton (confirmar compra)finalizar con la seleccion de productos y pasar al pago.
    Una vez realizado el click en la confirmacion, se presentar un formulario donde solicitamos el nombre y correo electronico del cliente.
    Estos datos son fundamentales, ya que es donde enviaremos informacion respecto a las formas de pago.
    Al finalizar, se le brindara el numero de orden de compra.
    Esto generar en firebase una orden con la informacion de los productos seleccionados, un total por la sumatoria de todos los productos y la informacion que nos brindo el cliente mediante los formularios.
    Este codigo esta hecho con React.

## Uso / Instalacion
        git clone https://github.com/fpagnutt/React.git
        cd React
        npm install
        npm start

     
[Se puede visualizar mediante el link] (https://lovely-cucurucho-d6daa6.netlify.app/) 
    


### Teconologias usadas

1. React 17+
2. React-Router-DOM 6+
3. Bootstrap v5.1.3 = Para utilizar los botones predeterminados.
4. Dotenv v16 = Ocultamos los valores de las variables de firebase.
5. Firebase = Se utilizo firestore para simular una base de datos.
6. Formik v2.2.9 = Se utilizo para los formularios (validaciones).
7. rc-rate = Estrellas con puntuacion del producto.







    
    

     
