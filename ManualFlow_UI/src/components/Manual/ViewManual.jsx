import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "@fortawesome/fontawesome-free/css/all.min.css";

Modal.setAppElement("#root"); // Asegura la accesibilidad

const apiUrl = process.env.API_URL;

export const ViewManual = () => {
  const [program, setProgram] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/programs/${id}`, {
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        method: "GET",
      });
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setProgram(data);
    })();
  }, []);

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white p-6 bg-base-200">
      {program ? (
        <>
          {/* Información del programa */}
          <div className="w-full max-w-3xl flex items-center justify-between mb-16">
            <div className="w-1/3 flex justify-center">
              <img src={program.logo} alt={program.name} className="h-44 w-44 object-contain" />
            </div>
            <div className="w-2/3 flex flex-col text-center">
              <h1 className="text-4xl font-bold">{program.name}</h1>
              <span className="text-xl font-semibold text-gray-300 mt-2">
                {program.program_type.name}
              </span>
              <p className="text-lg mt-4 text-gray-300">{program.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 w-full max-w-4xl mt-8">
            {[
              { id: "windows", icon: "fab fa-windows", bg: "bg-blue-500", text: program.manual_win },
              { id: "linux", icon: "fab fa-linux text-black", bg: "bg-orange-500 text-black", text: program.manual_linux },
              { id: "mac", icon: "fab fa-apple", bg: "bg-gray-500", text: program.manual_mac },
            ]
              .filter(({ text }) => text) 
              .map(({ id, icon, bg, text }) => (
                <div key={id} className="relative flex flex-col items-center">
                  <button
                    className={`p-4 rounded-xl shadow-md flex items-center justify-center text-white transition-transform duration-200 hover:scale-105 ${bg}`}
                    onClick={() => openModal(id)}
                  >
                    <i className={`${icon} text-xl`}></i>
                  </button>

                  <Modal
                    isOpen={activeModal === id}
                    onRequestClose={closeModal}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                  >
                    <div className="bg-gray-600 p-6 rounded-lg shadow-xl max-w-lg w-full text-white text-center">
                      <h2 className="text-2xl font-bold mb-4">{id.toUpperCase()} manual</h2>
                      <p dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}></p>
                      <button 
                        onClick={closeModal} 
                        className="mt-4 px-4 py-2 bg-red-400 text-black rounded-md"
                      >
                        X
                      </button>
                    </div>
                  </Modal>
                </div>
              ))}
          </div>
        </>
      ) : (
        <p className="text-lg text-center">Cargando datos...</p>
      )}
    </section>
  );
};
