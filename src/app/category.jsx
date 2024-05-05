// components/Category.js
import React from 'react';

const Category = ({ id, imgSrc, alt, title }) => {
  return (
    <div className="category" id={id}>
      <img src={imgSrc} alt={alt} />
      <h2>{title}</h2>
    </div>
  );
};

export default Category;
