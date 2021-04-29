import React, { createContext, useReducer } from "react";

import appReducer from "./reducer";

const initialState = {
  categories: [],
  category: {},
  edit_category: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addCategory(category) {
    dispatch({
      type: "ADD_CATEGORY",
      payload: category,
    });
  }

  function editCategory(category, oldCategory) {
    dispatch({
      type: "EDIT_CATEGORY",
      newCategory: category,
      oldCategory: oldCategory,
    });
  }

  function selectedCategory(category) {
    dispatch({
      type: "SELECTED_CATEGORY",
      payload: category,
    });
  }

  function removeCategory(name) {
    dispatch({
      type: "REMOVE_CATEGORY",
      payload: name,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        categories: state.categories,
        category: state.category,
        edit_category: state.edit_category,
        addCategory,
        editCategory,
        removeCategory,
        selectedCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
