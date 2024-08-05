import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal = ({ message, onClose }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        className="bg-white rounded-lg p-8 shadow-lg w-[90%] max-w-md text-center"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg p-4 mb-4">
          <h2 className="text-3xl font-bold">Notification</h2>
        </div>
        <div className="flex justify-center items-center mb-4">
          <AiOutlineCheckCircle className="text-green-500 text-6xl" />
        </div>
        <p className="mb-6 text-gray-800">{message}</p>
        <button
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
