import React from "react";
import "../styles/LeftSide.css";
import DropDown from "./DropDown";
import Input from "./Input";

const LeftSection = () => {
  const fields = [
    {name: "Item Code", type: 'number'},
    {name: "Item Description", type: 'number'},
    {name: "Stocking Type", type: 'dropdown', options: ['stock item', 'another item']},
    {name: "Item Category", type: 'dropdown', options: ['First Moving Consumer', 'Slow moving']},
    {name: "Purchase VAT", type: 'number'},
    {name: "Sales VAT", type: 'number'},
    {name: "Wholesale Price", type: 'number'},
    {name: "Minimum Sales Quantity", type: 'number'},
    {name: "Is Taxable", type: 'number'},
    {name: "Buyers", type: 'dropdown', options: ['super@live.com', 'staff@live.com'] }
   
  ];
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

export default LeftSection;
