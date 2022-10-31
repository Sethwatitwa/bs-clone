import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "../styles/LeftSide.css";
import DropDown from "./DropDown";
import Input from "./Input";


const RightSection = () => {
    const fields = [
      {name: "Bar Code:", type: "number"},
      {name: "Item Class:", type: "dropdown", options:["Operating Expenditure", "Opex"]},
      {name: "Line Type:", type: "dropdown", options:["Purchased", "Unpurchased"]},
      {name: "Buying Price:", type: "number"},
      {name: "Retail Price:", type: "number"},
      {name: "Sales VAT Inclusive:", type: "number"},
      {name: "Stockist Price:", type: "number"},
      {name: "Approve Back Oders:", type: "number"},
      {name: "Business Line:", type: "dropdown", options:["Central Business"]},
      {name: "G class:", type: "dropdown", options: ["DOME"]}

    ]
  return (
    <div className="left-side">
    {fields.map((field) => {
      if(field.type === 'dropdown'){
        return <DropDown label={field.name} options={field.options}/>;
      }
      return <Input label={field.name} type={field.type}/>
    }
    )
     }

  </div>
);
};

export default RightSection;
