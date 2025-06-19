import '../css/special-box1.css';
function SpecialBox1({header,content,icon}) {
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

export default SpecialBox1;