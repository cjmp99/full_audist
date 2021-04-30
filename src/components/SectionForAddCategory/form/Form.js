import React from "react";
import "./form.css";
import { FaWindowClose, FaPlusSquare, FaEllipsisV } from "react-icons/fa";
import { useSubSubCategory } from "../../../hooks/useSubSubCategory";

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
  const [
    newSub,
    addNewSub,
    showOptions,
    selectedKeyShowOptions,
    editSubCategory,
    activateAddNewSubCategory,
    onChangeNewSubCategory,
    saveNewSubCategory,
  ] = useSubSubCategory(sub_categories);

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
        value={data?.name}
        placeholder="Name Category"
        onChange={(e) => onChangeValue(e)}
        maxLength={15}
      />

      {sub_categories?.length < 5 ? (
        <>
          <label>Add Sub-Category</label>
          <input
            name="sub_category"
            value={sub_category.name}
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
        </>
      ) : null}

      <div className="listofsub">
        {sub_categories.map((item, key) => (
          <div key={key}>
            {/* {addNewSub && selectedKey === key ? (
              <input defaultValue={newSub} />
            ) : ( */}

            {/* category */}
            <span
              className="item-sub"      
              onClick={() => editSubCategory(item, key)}
            >
              {" "}
              <div className="content-title">{item?.name}</div>
              <div className="content-buttons">
                <span style={{ cursor: "pointer" }}>
                  <FaEllipsisV />
                </span>
              </div>
            </span>
            {/* )} */}

            {/* asignament sub-category */}
            {addNewSub && selectedKeyShowOptions === key ? (
              <div className="add-new-subcategory">
                <input
                  placeholder="new sub category"
                  name="sub_category"
                  value={newSub}
                  onChange={(e) => onChangeNewSubCategory(e)}
                  maxLength={15}
                />
                <button
                  className="btn-add-new-subcategory"
                  onClick={() => saveNewSubCategory(key)}
                >
                  add +
                </button>
              </div>
            ) : null}

            {/* window for options */}
            {selectedKeyShowOptions === key && showOptions ? (
              <div className="content-options">
                {item?.sub_categories?.length < 5 ? (
                  <span
                    className="item-option"
                    onClick={() => activateAddNewSubCategory(item, key)}
                  >
                    Add Sub category
                  </span>
                ) : null}
                <span className="item-option">Edit Sub category</span>
                <span className="item-option">Delete Sub category</span>
              </div>
            ) : null}
            {/* list of sub-sub-categories */}
            <div className="content-subcategories">
              {item?.sub_categories?.map((sub, key) => (
                <span className="sub-category" key={key}>
                  {sub}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
