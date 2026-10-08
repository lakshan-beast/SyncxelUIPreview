import { useEffect } from "react";

const SecurityWrapper = ({ children }) => {
  useEffect(() => {
    // 1. Right-Click (Context Menu) බ්ලොක් කිරීම
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // 2. Keyboard Shortcuts බ්ලොක් කිරීම (F12, Inspect Element, View Source)
    const handleKeyDown = (e) => {
      // F12 Key එක (KeyCode: 123)
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      // Ctrl + Shift + I (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }

      // Ctrl + Shift + J (Console Open කිරීම)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
      }

      // Ctrl + U (View Page Source)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }

      // Mac Users වෙනුවෙන් Cmd + Option + I
      if (e.metaKey && e.altKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }
    };

    // Event listeners ඇතුළත් කිරීම
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Component එක unmount වෙද්දී listeners අයින් කිරීම (Cleanup)
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <>{children}</>;
};

export default SecurityWrapper;
