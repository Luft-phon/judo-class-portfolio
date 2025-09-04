import { useEffect } from "react";

// Khai báo global cho class bên ngoài (do script chèn vào window)
declare global {
  interface Window {
    TuDongChat: any;
  }
}

function ChatBot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.tudongchat.com/js/chatbox.js";
    script.async = true;
    script.onload = () => {
      if (window.TuDongChat) {
        const tudong_chatbox = new window.TuDongChat("X1ct5Cj94eeIxuCqBPFFN");
        tudong_chatbox.initial();
      }
    };
    document.body.appendChild(script);

    // optional cleanup (nếu muốn remove script khi unmount)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default ChatBot;
