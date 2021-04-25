import React, { useContext, useState } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Form from "./form/Form";
import { GlobalContext } from "../../context/context";
import { useOnchangeValue } from "../../hooks/useOnchageValue";
import { useSubCategories } from "../../hooks/useSubCategories";

const AddCategory = () => {
  const [showFormAddCategory, setShowFormAddCategory] = useState(false);
  const [
    onChangeSubCategory,
    sub_categories,
    asignamentSubCategory,
    sub_category,
    setSub_category,
    setSub_categories,
  ] = useSubCategories();
  const { addCategory } = useContext(GlobalContext);
  const [onChangeValue, data, setData] = useOnchangeValue();

  const saveCategory = () => {
    setData({
      name: "",
      sub_categories: [],
    });
    addCategory(data);

    setSub_category("");
    setSub_categories([]);
  };


  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Full Audist</h3>
      <p>
        List of categories by <b>Carlos Martinez</b>
      </p>
      <button
        className="btn"
        onClick={
          !showFormAddCategory
            ? () => setShowFormAddCategory(true)
            : () => saveCategory()
        }
      >
        {showFormAddCategory ? "Save Category" : "Add Category"}
      </button>
      {showFormAddCategory ? (
        <Form
          setShowFormAddCategory={setShowFormAddCategory}
          onChangeSubCategory={onChangeSubCategory}
          sub_categories={sub_categories}
          asignamentSubCategory={asignamentSubCategory}
          onChangeValue={onChangeValue}
          sub_category={sub_category}
          setData={setData}
          data={data}
        />
      ) : null}
    </div>
  );
};

export default AddCategory;
