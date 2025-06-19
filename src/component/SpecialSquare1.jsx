
import "../css/SpecialSquare1.css"
import { Settings } from "lucide-react";
function SpecialSquare1({header,content,color,img}) {
  return (
    <div className="main-container" style={{borderColor:color}}>
      <div className="diamond-1" style={{backgroundColor:color}}></div>
      <div className="diamond-2" style={{backgroundColor:color}}></div>
      <div className="diamond-3" style={{backgroundColor:color}}></div>
      <div className="diamond-4" style={{backgroundColor:color}}></div>
      <div className="blankspace1"></div>
      <div className="blankspace2"></div>
      <div className="content">
        <img src={img} alt="" />
        <h4>{header}</h4>
        <p>{content}</p>
      </div>
    </div>
    
  );
}

export default SpecialSquare1;