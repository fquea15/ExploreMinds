import React, { useEffect, useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("category", category);
    data.append("type", type);
    data.append("price", price);
    data.append("description", description);
    data.append("image", image);

    onSubmit(data);
    setName("");
    setCategory("");
    setType("");
    setPrice(0);
    setDescription("");
    setImage(null);
    onClose();
  };

  const handleClose = () => {
    setName("");
    setCategory("");
    setType("");
    setPrice(0);
    setDescription("");
    setImage(null);
    onClose();
  };
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <div className="modal-title">
              <h2>Agregar Nuevo Plato</h2>
            </div>
            <div className="content-close">
              <FontAwesomeIcon
                className="close-icon"
                icon={faTimes}
                onClick={() => {
                  handleClose();
                }}
              />
            </div>
          </div>
          <div className="modal-body">
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group-modal">
                <label htmlFor="name" className="name-modal">
                  NOMBRE:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="nombre del plato"
                  value={name}
                  onChange={handleChangeName}
                  required="true"
                />
              </div>

              <div className="form-group-modal">
                <label htmlFor="category" className="name-modal">
                  CATEGORIA:
                </label>
                <input
                  type="text"
                  id="category"
                  placeholder="Categoria a la que pertenece"
                  value={category}
                  onChange={handleChangeCategory}
                  required="true"
                />
              </div>

              <div className="form-group-modal">
                <label htmlFor="type" className="name-modal">
                  TIPO:
                </label>
                <input
                  type="text"
                  id="type"
                  placeholder="Tipo de Plato"
                  value={type}
                  onChange={handleChangeType}
                  required="true"
                />
              </div>
              <div className="form-group-modal">
                <label htmlFor="price" className="name-modal">
                  PRECIO:
                </label>
                <input
                  type="number"
                  id="price"
                  placeholder="Precio"
                  value={price}
                  onChange={handleChangePrice}
                  required="true"
                />
              </div>
              <div className="form-group-modal">
                <label htmlFor="description" className="name-modal">
                  DESCRIPCION:
                </label>
                <textarea
                  id="description"
                  rows="4"
                  maxLength="4000"
                  placeholder="Escribe una corta descripción de no más de 4.000 caracteres."
                  disabled={false}
                  value={description}
                  onChange={handleChangeDescription}
                  required="true"
                ></textarea>
              </div>
              <div className="form-group-modal">
                <label htmlFor="image" className="pdf-modal">
                  IMAGEN:
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleChangeImage}
                  required="true"
                />
              </div>
              <div className="button-container">
                <button type="submit" className="save-button">
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
