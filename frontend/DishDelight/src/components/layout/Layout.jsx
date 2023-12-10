import React, { useState } from "react";
import Header from "../header/Header";
import "./Layout.css";
import Modal from "../modal/Modal";
import { postDish } from "../../service/apiDish";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (data) => {
    console.log(data);
    try {
      await postDish(data)
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  console.log(isModalOpen);
  return (
    <div className="container">
      <Header onModal={openModal} onCloseModal={closeModal} />
      <main>
        {children}
      </main>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Layout;
