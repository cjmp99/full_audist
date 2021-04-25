import { useState } from "react";

export const useSubCategories = () => {
  const [sub_categories, setSub_categories] = useState([]);
  const [sub_category, setSub_category] = useState("");

  const onChangeSubCategory = (e) => {
    if (e.target.name === "sub_category") {
      setSub_category(e.target.value);
    }
  };

  const asignamentSubCategory = (data, setData) => {
    if (sub_category !== "") {
      setSub_categories([...sub_categories, sub_category]);
      setData({
        ...data,
        sub_categories: [...sub_categories, sub_category],
      });
      setSub_category("")
    } else {
      alert("To add a sub-category the field must not be empty");
    }
  };

  return [
    onChangeSubCategory,
    sub_categories,
    asignamentSubCategory,
    sub_category,
    setSub_category,
    setSub_categories
  ];
};
