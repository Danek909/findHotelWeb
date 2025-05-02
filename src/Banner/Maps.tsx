import React from 'react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={handleOverlayClick}
    >
      <iframe
        width="90%"
        height="90%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=48.8588443,2.2943506&z=15&output=embed"
      />
    </div>
  );
};

export default MapModal;