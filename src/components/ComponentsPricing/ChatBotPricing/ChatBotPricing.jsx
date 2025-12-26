import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ChatBotPricing.scss";

export default function ChatBotPricing() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const [messages, setMessages] = useState([
        { role: "bot", content: t("chatbot.welcome") }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    const toggleLanguage = () => {
        const newLang = currentLang === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
        document.documentElement.dir = newLang === "en" ? "ltr" : "rtl";
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = {
            role: "user",
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");


        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    content: t("chatbot.tempReply"),
                },
            ]);
        }, 800);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chatbot">
            <div className="container">
                <div className="headingchat">
                    <h2>{t("chatbot.title")}</h2>
                    <p>{t("chatbot.description")}</p>
                </div>

                <div className="frame-chat">
                    <div className="box-chating">
                        {messages.map((msg, i) => (
                            <div key={i} className={`message ${msg.role}`}>
                                {msg.content}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="bottom-content">
                        <input
                            className="text-area"
                            type="text"
                            placeholder={t("chatbot.placeholder")}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />

                        <button className="btn-submit" onClick={sendMessage}>
                            {t("chatbot.send")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
