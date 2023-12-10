// Widget.js
import React from 'react';
import './Widget.css';

const Widget = ({ image, name, ratings, onClick }) => {
  return (
    <div className="widget-container">
      <img src={image} alt={name} className="widget-image" />
      <div className="widget-content">
        <h2 className="widget-name">{name}</h2>
        <div className="widget-ratings">{ratings} ⭐</div>
        <button className="widget-button" onClick={onClick}>
          Ver comentarios
        </button>
      </div>
    </div>
  );
};

export default Widget;
