import { useState } from "react";

import "./LessText.css";

function LessText({ travelInfo, max = 55 }) {

  const [showLess, setShowLess] = useState(true);

  if (travelInfo.length <= max) {
    return <span>{travelInfo}</span>;
  }

  return (
    <div className="lessText">
      <span className="secondary">T</span>he{" "}
      {showLess ? `${travelInfo.substring(0, max)} ...` : travelInfo}
      <a
        href="#!"
        onClick={(e) => {
          e.preventDefault();
          setShowLess(!showLess);
        }}
      >
        {showLess ? " -> More" : " <- Less"}
      </a>
    </div>
  );
}

export default LessText;
