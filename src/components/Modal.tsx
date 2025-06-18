import { useEffect } from "react";
import { X } from "lucide-react";
import Portal from "./Portal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

function Modal({ children, isOpen, onClose, title, size = "md" }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <Portal>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 bg-black/75 transition-opacity"
          onClick={onClose}
        />

        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className={`relative w-full ${sizeClasses[size]} transform rounded-2xl bg-white shadow-xl transition-all`}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}

            {!title && (
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}

            <div className={title ? "p-6" : "p-6 pt-12"}>{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
