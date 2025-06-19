import "../css/SpecialSquare2.css";
import { Star } from "lucide-react";
function SpecialSquare2({color,title,content,star,image}) {
  return (
    <div className="SpecialSquare2-container" style={{borderColor:color}}>
      <div className="SpecialSquare2-bar1"></div>
      <div className="SpecialSquare2-bar2"></div>
      <div className="SpecialSquare2-diamond1" style={{backgroundColor:color}}></div>
      <div className="SpecialSquare2-diamond2" style={{backgroundColor:color}}></div>
      <div className="SpecialSquare2-diamond3" style={{backgroundColor:color}}></div>
      <div className="SpecialSquare2-diamond4" style={{backgroundColor:color}}></div>
      <div className="SpecialSquare2-quotes1" style={{color:color}}>“</div>
      <div className="SpecialSquare2-quotes2" style={{color:color}}>”</div>
      <div className="SpecialSquare2-content">
        <img src={image} alt="" style={{borderColor:color}}/>
        <div className="SpecialSquare2-text">
          <h1>{title}</h1>
          <p>Founder</p>
          <div>
            {Array.from({ length: star }, (_, index) => (
              <Star key={index} size={11} color="#0B6CB9" fill="#0B6CB9" />
            ))}
          </div>
        </div>
      </div>
      <p className="SpecialSquare2-paragraph">{content}</p>
    </div>
  );
}

export default SpecialSquare2;