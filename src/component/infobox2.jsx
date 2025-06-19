import '../css/infobox2.css'
function Infobox2({ title, content, onClick=()=>{}, url, date }) {
  return (
    <div className="infobox2-container">
      <h3>{title}</h3>
      <h2>{content}</h2>
      <p>{date} <span>Tech News</span></p>
      <div className="infobox2-button-container">
        <button>Learn More</button>
        <img src={url} alt="" onClick={onClick}/>
      </div>
    </div>
  );
}

export default Infobox2;