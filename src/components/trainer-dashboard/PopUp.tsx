import React from "react";

interface PopupProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-sm shadow-xl">
        <h2 className="text-lg font-semibold">Notification</h2>
        <p className="mt-2">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
