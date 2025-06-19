import "../css/hexagon.css";
function Hexagon({ primaryColor, secondaryColor, title, iconList = [] }) {
  return (

    <div class="hexagon" style={{ backgroundColor: secondaryColor }}>
      <div class="hexagon-title"><p style={{ backgroundColor: primaryColor }}>{title}</p></div>
      <div class="hexagon-body">
        {
          iconList?.map((icon, index) => (
            <div class="hexagon-icon-container" key={index} style={{ border: `0.1rem solid ${primaryColor}` }}>
              <img src={icon} alt="" />
            </div>
          ))
        }
      </div>
    </div>

  );
}

export default Hexagon;