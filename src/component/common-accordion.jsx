
import { useState } from 'react';
import '../css/common-accordion.css';

// Main Accordion Container Component
const CommonAccordionContainer = ({ data }) => {
  // State to track which accordion is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to handle accordion clicks
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="common-accordion-container">
      {data.map((item, index) => (
        <CommonAccordionItem
          key={item.id || index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

// Individual Accordion Item Component
const CommonAccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="common-accordion-item">
      {/* Header Section */}
      <div
        className="common-accordion-header"
        onClick={onClick}
      >
        <h3 className="common-accordion-title">{title}</h3>
        <div className="common-accordion-icon-container">
          {isOpen ?
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="common-accordion-icon">
              <path d="m18 15-6-6-6 6" />
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="common-accordion-icon">
              <path d="m6 9 6 6 6-6" />
            </svg>
          }
        </div>
      </div>

      {/* Content Section - Only displayed when open */}
      {isOpen && (
        <>
          <div className="common-accordion-divider"></div>
          <div className="common-accordion-content">{content}</div>
        </>
      )}
    </div>
  );
};

export { CommonAccordionContainer, CommonAccordionItem };