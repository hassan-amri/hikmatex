import React, { useEffect, useState } from "react";
import "./Faq.css";
import faq from "./FAQ.png";

const Faq = () => {
  const faqs = [
   
    {
      question: "Do we offer support throughout the year?",
      answer:
        "Yes, we provide continuous support to our clients throughout the year, ensuring they have access to assistance whenever needed.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Our company accepts various payment methods, including credit cards, bank transfers, and online payment platforms. Please contact us for more details.",
    },
   
    {
      question: "How can I place an order?",
      answer:
        "You can place an order through our website or by contacting our sales team directly. We will guide you through the process to ensure a smooth experience.",
    },
    {
      question: "What types of fabrics do you offer?",
      answer:
        "We offer a wide range of fabrics, including cotton, polyester, linen, and blends suitable for various applications in fashion and home textiles.",
    },
    {
      question: "Do you provide customization options?",
      answer:
        "Yes, we offer customization options for our fabrics based on your specific requirements. Please reach out to discuss your needs with our team.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We have a customer-friendly return policy that allows returns within 30 days of purchase if the products are unused and in their original packaging.",
    },
  ];

  const [selectedFaq, setSelectedFaq] = useState(null);

  const toggleFaq = (index) => {
    setSelectedFaq(selectedFaq === index ? null : index);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq">
        
        <div className="faq__left">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${selectedFaq === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span >{faq.question}</span>
                  <span className="faq-icon">
                    {selectedFaq === index ? "-" : "+"}
                  </span>
                </button>
                <div
                  
                  className={`faq-answer ${
                    selectedFaq === index ? "show" : ""
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq__right">
          <img src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
