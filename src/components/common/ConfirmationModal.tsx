import React from 'react';
import Button from './Button';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
  confirmText?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title, children, confirmText = 'Confirm' }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md m-4 transform transition-transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-brand-dark dark:text-white font-heading mb-4">{title}</h2>
        <div className="text-gray-600 dark:text-gray-300 mb-6">
          {children}
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;