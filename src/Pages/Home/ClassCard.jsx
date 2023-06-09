import React from "react";

const ClassCard = ({ singleClass }) => {
//   const { image, currentStudent, instructorName, danceName } = singleClass;
  return (
    <div className="transition-all duration-300 transform hover:scale-110">
      <div className=" w-96 bg-base-100 shadow-xl rounded-sm">
        <figure>
          <img
          
            src={singleClass.image}
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className="text-3xl text-center">{singleClass.danceName}</h2>
         
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
