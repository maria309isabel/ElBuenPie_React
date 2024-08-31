import React from 'react';
import './Acerca.css'; 
import logo from './imagenes/LOGO EL BUENPIE.png'; 

const Acerca = () => {
  return (
    <div className="container">
      <h1 className="h1">Acerca de nosotros</h1>
      <div className="texto-img">
        <p className="texto">
          Somos una empresa dedicada a la venta de calzado para caballeros y damas. Ofrecemos a nuestros clientes 
          una gran variedad de modelos y atención de calidad. <br />
          Le permitimos a nuestros clientes personalizar sus calzados por si ellos cuentan con alguna discapacidad o problemas. <br /><br />
          La Zapatería El Buen Pie fue fundada en el año 2024 por sus socios Dulce, Luis y Margarita, 3 jóvenes emprendedores, los cuales 
          llevaron a que sea un negocio de éxito. <br /><br />
          Sus principales proveedores pertenecen a grandes marcas a nivel internacional, las que más destacan son Calimod, Vizzano, Nike, Lacoste,
          Adidas, entre otras. <br /><br />
          En nuestra marca, valoramos la creatividad, la calidad y la sostenibilidad. <br /><br />
          Nuestro equipo está compuesto por un grupo de jóvenes emprendedores apasionados por la moda. Cada uno de nosotros aporta una perspectiva única al diseño y la producción de nuestros productos.
        </p>
        <img src={logo} className="img" alt="Logo El Buen Pie" />
      </div>
    </div>
  );
};

export default Acerca;
