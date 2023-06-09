import React from 'react';

const HeaderSectionTitle = ({heading,subHeading,details}) => {
    return (
        <div>
            <h6 className="text-xl font-semibold pt-3 pb-3 uppercase text-red-400">{heading}</h6>
        <h2 className="text-4xl font-bold pt-3 pb-3 uppercase text-white">
        {subHeading}
        </h2>
        <p className="pt-3 pb-2 text-white ">
         {details}
        </p>
        </div>
    );
};

export default HeaderSectionTitle;