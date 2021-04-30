import React, { useContext, useEffect, useState } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Form from "./form/Form";
import { GlobalContext } from "../../context/context";
import { useOnchangeValue } from "../../hooks/useOnchageValue";
import { useSubCategories } from "../../hooks/useSubCategories";
import { saveCategory } from "../../functions/saveCategory";

const AddCategory = () => {
  const [showFormAddCategory, setShowFormAddCategory] = useState(false);
  const [
    onChangeSubCategory,
    sub_categories,
    asignamentSubCategory,
    sub_category,
    setSub_category,
    setSub_categories,
    editAsignamentSubCategory,
    editAction
  ] = useSubCategories();
  const { addCategory, editCategory, category, edit_category } = useContext(
    GlobalContext
  );
  const [onChangeValue, data, setData] = useOnchangeValue();

  useEffect(() => {
    setData({
      name: category?.name,
      sub_categories: category?.sub_categories,
    });
    if (category?.sub_categories?.length) {
      setSub_categories(category?.sub_categories);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Full Audist</h3>
      <p className="title">
        List of categories by <b>Carlos Martinez</b>
      </p>
      <button
        className="btn"
        onClick={
          !showFormAddCategory
            ? () => setShowFormAddCategory(true)
            : () =>
                saveCategory(
                  data,
                  setData,
                  setSub_category,
                  setSub_categories,
                  edit_category,
                  addCategory,
                  editCategory,
                  category
                )
        }
      >
        {showFormAddCategory
          ? "Save Category"
          : edit_category
          ? "Edit Category"
          : "Add Category"}
      </button>
      {showFormAddCategory ? (
        <Form
          setShowFormAddCategory={setShowFormAddCategory}
          editAsignamentSubCategory={editAsignamentSubCategory}
          onChangeSubCategory={onChangeSubCategory}
          sub_categories={sub_categories}
          setSub_categories={setSub_categories}
          asignamentSubCategory={asignamentSubCategory}
          onChangeValue={onChangeValue}
          sub_category={sub_category}
          setSub_category={setSub_category}
          editAction={editAction}
          setData={setData}
          data={data}
        />
      ) : null}
    </div>
  );
};

export default AddCategory;
