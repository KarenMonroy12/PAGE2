// components/Product.js
import React from 'react';

const Product = ({ imgSrc, alt, imgHoverSrc, category, title, description, oldPrice, newPrice }) => {
  return (
    <div className="producto item">
      <div className="contenedor-imagen">
        <a href="#" className="link"></a>
        <img src={imgSrc} alt={alt} />
        <img src={imgHoverSrc} className="img-hover" />
      </div>
      <div className="datos">
        <small><a href="#">{category}</a></small>
        <h3><a href="#">{title}</a></h3>
        <small>{description}</small>
      </div>
      <div className="precios">
        <div className="internet">
          <small>Antes</small>
          <span>{oldPrice}</span>
        </div>
        <div>
          <small>Ahora</small>
          <span>{newPrice}</span>
        </div>
      </div>
      <a href="#" className="btn-carrito"><i className="fas fa-shopping-basket"></i> Contactar</a>
    </div>
  );
};

export default Product;