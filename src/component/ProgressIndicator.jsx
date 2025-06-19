// import React from 'react';


// const ProgressIndicator = ({ current = 1, total = 3 }) => {
//   const progress = (current / total) * 100;

//   return (
//     <div className="progress-container">
//       <span className="progress-text">
//         <strong>{String(current).padStart(2, '0')}</strong>
//         <span className="divider">/</span>
//         <span className="total">{String(total).padStart(2, '0')}</span>
//       </span>
//       <div className="progress-bar">
//         <div className="progress-fill" style={{ width: `${progress}%` }} />
//       </div>
//     </div>
//   );
// };

// export default ProgressIndicator;
import React from 'react';
import "../css/ProgressIndicator.css"

const ProgressIndicator = ({ current = 1, total = 3 }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-text">
        <strong>{String(current).padStart(2, '0')}</strong>
        <span className="divider"> / </span>
        <span className="total">{String(total).padStart(2, '0')}</span>
      </div>
      <div className="progress-line">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
        <div className="diamond" />
      </div>
    </div>
  );
};

export default ProgressIndicator;


