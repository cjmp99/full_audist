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
  const { categories, selectedCategory, removeCategory } = useContext(
    GlobalContext
  );
  const [
    enableOrDisableSubs,
    selectedKey,
    showSubCategories,
    enableOrDisableSubsTwo,
    selectedTwoKey,
    showSubTwoCategories,
  ] = useShowSubCategories();

  return (
    <div className="container">
      {categories.map((item, key) => (
        <div key={key}>
          <span className="category">
            <div className="content-title">{item?.name}</div>
            <div className="content-buttons">
              <span
                className="edit-btn"
                style={{ cursor: "pointer" }}
                onClick={() => selectedCategory(item)}
              >
                <FaEdit />
              </span>
              <span
                className="delete-btn"
                style={{ cursor: "pointer" }}
                onClick={() => removeCategory(item.name)}
              >
                <FaTrash style={{ marginLeft: "20px" }} />
              </span>
            </div>
            {item?.sub_categories?.length ? (
              <span
                className="subcategories-btn"
                style={{ cursor: "pointer" }}
                onClick={() => enableOrDisableSubs(key)}
              >
                <FaChevronCircleDown />
              </span>
            ) : null}
          </span>

          {showSubCategories && selectedKey === key ? (
            <div className="content-subcategories">
              {item?.sub_categories?.map((sub, key) => (
                <div key={key}>
                  <div className="sub-category">
                    <span>{sub.name}</span>
                    <div className="content-buttons">
                      {sub?.sub_categories?.length ? (
                        <span
                          className="subcategories-btn"
                          style={{ cursor: "pointer" }}
                          onClick={() => enableOrDisableSubsTwo(key)}
                        >
                          <FaChevronCircleDown />
                        </span>
                      ) : null}
                    </div>
                  </div>
                  {showSubTwoCategories && selectedTwoKey === key ? (
                    <>
                      {sub?.sub_categories?.map((item, key) => (
                        <div className="content-subcategories" key={key}>
                          <div className="sub-category">
                            <span>{item}</span>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
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
