import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { removeToast } from "../features/toastSlice";

export default function ToastProvider() {
  const toasts = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  const styles = {
    success: {
      bg: "bg-green-500",
      text: "text-white",
    },
    error: {
      bg: "bg-red-500",
      text: "text-white",
    },
    info: {
      bg: "bg-blue-500/60",
      text: "text-white",
    },
  };

  return createPortal(
    <div className="fixed bottom-4 right-4 z-9999 space-y-3 w-96 flex flex-col">
      {toasts.map((t) => {
        const style = styles[t.type] ?? styles.info;

        return (
          <div
            key={t.id}
            className={`px-4 py-3 rounded-xl shadow-lg ${style.bg}`}
          >
            <div className="flex justify-between items-center">
              <div className={`text-sm leading-5 ${style.text}`}>
                {t.message}
              </div>

              <button
                onClick={() => dispatch(removeToast(t.id))}
                className="ml-3 text-white/80 hover:text-white transition"
              >
                ✕
              </button>
            </div>
          </div>
        );
      })}
    </div>,
    document.getElementById("toast-root")
  );
}
