import { createPortal } from "react-dom";
import IconClose from "../../assets/icons/IconClose";
import { useTheme } from "../../utils/themeMode";

const Modal = ({ onClose, children, title }) => {
  const { darkMode } = useTheme();

  return createPortal(
    <div className="w-full h-full fixed top-0 left-0 ">
      <div className="absolute p-2 top-0 left-0 bg-black bg-opacity-70 w-full h-full flex items-center justify-center">
        <div className={`rounded-xl w-full max-w-sm ${darkMode ? "bg-[#111827]" : "bg-white"}`}>
          {/* header */}
          <div className="flex justify-between border-b p-2 items-center">
            <div className="text-lg font-semibold px-2 text-yellow-500">{title}</div>
            <button
              onClick={onClose}
              className="hover:bg-yellow-400 p-2 rounded-lg transition"
            >
              <IconClose className={`h-5 w-5 ${darkMode ? "text-white" : "text-[#111827]"}`}/>
            </button>
          </div>
          {/* body */}
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
