import { useState } from "react";

export const useSubCategories = () => {
  const [sub_categories, setSub_categories] = useState([]);
  const [sub_category, setSub_category] = useState({
    name: "",
    sub_categories: [],
  });

  const onChangeSubCategory = (e) => {
    if (e.target.name === "sub_category") {
      setSub_category({
        ...sub_category,
        name: e.target.value,
        sub_categories: [],
      });
    }
  };

  const asignamentSubCategory = (data, setData) => {
    if (sub_category.name !== "") {
      setSub_categories([...sub_categories, sub_category]);
      setData({
        ...data,
        sub_categories: [...sub_categories, sub_category],
      });
      setSub_category({
        name: "",
        sub_categories: [],
      });
    } else {
      alert("To add a sub-category the field must not be empty");
    }
  };

  const editAsignamentSubCategory = (
    item,
    sub_categories,
    data,
    setData,
    setshoweditSubCategory
  ) => {
    if (sub_category?.name?.length > 0) {
      if (sub_category !== item) {
        let new_categories = [];
        var i = sub_categories.indexOf(item);
        sub_categories.splice(i, 1);
        new_categories = [...sub_categories, sub_category];
        setSub_categories(new_categories);
        setData({
          ...data,
          sub_categories: new_categories,
        });
      }
      setshoweditSubCategory(false);
    } else {
      alert("To add a sub-category the field must not be empty");
    }
  };

  const deleteSubCategory = (
    item,
    setshoweditSubCategory,
    sub_categories,
    setData,
    data,
    setshowOptions
  ) => {
    var i = sub_categories.indexOf(item);
    sub_categories.splice(i, 1);
    setData({
      ...data,
      sub_categories: sub_categories,
    });
    setshoweditSubCategory(false);
    setshowOptions(false);
  };

  const editAction = (
    item,
    key,
    setselectedKeyEdit,
    setshoweditSubCategory,
    setSub_category
  ) => {
    setselectedKeyEdit(key);
    setshoweditSubCategory(true);
    setSub_category({
      ...sub_category,
      name: item.name,
    });
  };

  return [
    onChangeSubCategory,
    sub_categories,
    asignamentSubCategory,
    sub_category,
    setSub_category,
    setSub_categories,
    editAsignamentSubCategory,
    editAction,
    deleteSubCategory,
  ];
};
