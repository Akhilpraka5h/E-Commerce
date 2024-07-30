import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox_navigator">
        <div className="descriptionBox_navbox">Description</div>
        <div className="descriptionBox_navbox fade">Reviews</div>
      </div>
      <div className="descriptionBox_descrip">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          dolore quasi ex voluptatibus voluptatum repellendus, accusamus neque
          iure nulla praesentium libero hic ullam id vitae quibusdam sunt culpa
          magnam obcaecati.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat
          nihil inventore optio fugiat fugit sit, quis asperiores est beatae
          commodi veniam, explicabo tenetur illum in incidunt at unde
          repellendus.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
