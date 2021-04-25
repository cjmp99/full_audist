import React from "react";
import "./form.css";
import { FaWindowClose, FaPlusSquare } from "react-icons/fa";

const Form = ({
  setShowFormAddCategory,
  onChangeSubCategory,
  sub_categories,
  asignamentSubCategory,
  onChangeValue,
  sub_category,
  setData,
  data,
}) => {
  return (
    <div className="form">
      <span
        className="close-form"
        onClick={() => setShowFormAddCategory(false)}
      >
        <FaWindowClose />
      </span>
      <label>Name Category</label>
      <input
        name="name"
        value={data.name}
        placeholder="Name Category"
        onChange={(e) => onChangeValue(e)}
        maxLength={15}
      />

      <label>Add Sub-Category</label>
      <input
        name="sub_category"
        value={sub_category}
        placeholder="Name Sub Category"
        onChange={(e) => onChangeSubCategory(e)}
        maxLength={15}
      />

      <button
        className="add-subcategory"
        onClick={() => asignamentSubCategory(data, setData)}
      >
        {" "}
        <FaPlusSquare />
        Add Sub-Category
      </button>
      {console.log(sub_categories)}

      <span className="listofsub">
        {sub_categories.map((item, key) => (
          <span key={key}>* {item}</span>
        ))}
      </span>
    </div>
  );
};

export default Form;
