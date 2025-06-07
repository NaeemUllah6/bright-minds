import React from 'react';

const Modal = ({ title, text, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 modal flex items-center justify-center">
      <div className="bg-white rounded-2xl flex flex-col items-center justify-center shadow-lg p-6 w-full max-w-[500px] h-[300px] text-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-6 text-gray-700">{text}</p>
        <button
          onClick={onClose}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
