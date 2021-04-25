import { useState } from "react";

export const useShowSubCategories = () => {
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");

  const enableOrDisableSubs = (key) => {
    if (showSubCategories) {
      setShowSubCategories(false);
      setSelectedKey("");
    } else {
      setShowSubCategories(true);
      setSelectedKey(key);
    }
  };

  return [enableOrDisableSubs, selectedKey, showSubCategories];
};
