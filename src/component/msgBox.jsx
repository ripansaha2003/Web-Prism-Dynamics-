import '../css/msgBox.css';
function msgBox({header,content,color,img}) {
  return (
    <div className="special-box1">
      <div className="special-box1-header">
        <img src={icon} alt="" />
        <h2>{header}</h2>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default msgBox;