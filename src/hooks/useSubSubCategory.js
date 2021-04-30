import { useState } from "react";

export const useSubSubCategory = (sub_categories) => {
  const [selectedKey, setselectedKey] = useState("");
  const [selectedKeyShowOptions, setselectedKeyShowOptions] = useState("");

  const [showOptions, setshowOptions] = useState(false);

  //new sub
  const [addNewSub, setAddNewSub] = useState(false);
  const [newSub, setsNewSub] = useState("");

  const editSubCategory = (item, key) => {
    if (!showOptions) {
      if (selectedKeyShowOptions.length < 1) {
        setselectedKeyShowOptions(key);
      }

      setshowOptions(true);
    } else {
      setshowOptions(false);
      setAddNewSub(false);
      setselectedKeyShowOptions("");
      setsNewSub("");
    }
  };

  const activateAddNewSubCategory = (item, key) => {
    if (selectedKeyShowOptions.length < 1) {
      setselectedKeyShowOptions(key);
    }
    if (selectedKey.length < 1) {
      setselectedKey(key);
    }

    setAddNewSub(true);
    setshowOptions(false);
  };

  const onChangeNewSubCategory = (e) => {
    if (e.target.name === "sub_category") {
      setsNewSub(e.target.value);
    }
  };

  const saveNewSubCategory = (key) => {
    if (newSub !== "") {
      let selectItem = sub_categories[key];

      selectItem.sub_categories = [
        ...sub_categories[key]?.sub_categories,
        newSub,
      ];

      setsNewSub("");
      setAddNewSub(false);
      setselectedKeyShowOptions("");
    } else {
      alert("enter a name for a sub category");
    }
  };

  return [
    newSub,
    addNewSub,
    showOptions,
    selectedKeyShowOptions,
    editSubCategory,
    activateAddNewSubCategory,
    onChangeNewSubCategory,
    saveNewSubCategory,
  ];
};
