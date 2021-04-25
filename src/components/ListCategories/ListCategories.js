import React, { useContext } from "react";
import "./list_categories.css";
import { GlobalContext } from "../../context/context";
import {
  FaChalkboardTeacher,
  FaEdit,
  FaTrash,
  FaChevronCircleDown,
} from "react-icons/fa";
import { useShowSubCategories } from "../../hooks/useShowSubCategories";

const ListCategories = () => {
  const { categories } = useContext(GlobalContext);
  const [
    enableOrDisableSubs,
    selectedKey,
    showSubCategories,
  ] = useShowSubCategories();

  return (
    <div className="container">
      {categories.map((item, key) => (
        <span className="category" key={key}>
          <div className="content-title">{item?.name}</div>

          <div className="content-buttons">
            <FaEdit />
            <FaTrash style={{ marginLeft: "20px" }} />
          </div>
          {item?.sub_categories?.length ? (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => enableOrDisableSubs(key)}
            >
              <FaChevronCircleDown />
            </span>
          ) : null}
          {showSubCategories && selectedKey === key ? (
            <div className="content-subcategories">
              {item?.sub_categories?.map((sub, key) => (
                <span className="sub-category" key={key}>
                  {sub}
                </span>
              ))}
            </div>
          ) : null}
        </span>
      ))}

      {categories.length < 1 && (
        <div className="container">
          <FaChalkboardTeacher size={100} />
          <h3>There are no categories to list...</h3>
        </div>
      )}
    </div>
  );
};

export default ListCategories;
