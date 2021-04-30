import { useState } from "react";

export const useShowSubCategories = () => {
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [showSubTwoCategories, setShowSubTwoCategories] = useState(false);

  const [selectedKey, setSelectedKey] = useState("");
  const [selectedTwoKey, setSelectedTwoKey] = useState("");

  const enableOrDisableSubs = (key) => {
    if (showSubCategories) {
      setShowSubCategories(false);
      setSelectedKey("");
    } else {
      setShowSubCategories(true);
      setSelectedKey(key);
    }
  };

  const enableOrDisableSubsTwo = (key) => {
    if (showSubTwoCategories) {
      setShowSubTwoCategories(false);
      setSelectedTwoKey("");
    } else {
      setShowSubTwoCategories(true);
      setSelectedTwoKey(key);
    }
  };

  return [
    enableOrDisableSubs,
    selectedKey,
    showSubCategories,
    enableOrDisableSubsTwo,
    selectedTwoKey,
    showSubTwoCategories,
  ];
};
