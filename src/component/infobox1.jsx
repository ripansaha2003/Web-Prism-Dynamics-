// import "../css/infobox1.css"
// function Infobox1({ title, content, onClick, url, color, extracss, buttonActive = true, subText="" }) {
//   return (
//     <div className="infobox1-container" style={{ backgroundColor: color, ...extracss }}>
//       <h1>{title}</h1>
//       {subText && <h3>{subText}</h3>}
//       <p>{content}</p>
//       {buttonActive && <button>Know More</button>}
//       <img src={url} alt="" className="infobox1-img" />
//     </div>
//   );
// }

// export default Infobox1;

import "../css/infobox1.css";

function Infobox1({ title, content, onClick, url, color, extracss, buttonActive = true, subText = "" }) {
  return (
    <div className="infobox1-container" style={{ backgroundColor: color, ...extracss }}>
      <h1 className="infobox1-title">
        {title}{" "}
        {subText && <span className="infobox1-subtext">({subText})</span>}
      </h1>
      <p>{content}</p>
      {buttonActive && <button>Know More</button>}
      <img src={url} alt="" className="infobox1-img" />
    </div>
  );
}

export default Infobox1;
