export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_CATEGORY":
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
  
      case "EDIT_CATEGORY":
        const updatedCategory = action.payload;
  
        const updatedCategories = state.categories.map((category) => {
          if (category.id === updatedCategory.id) {
            return updatedCategories;
          }
          return category;
        });
  
        return {
          ...state,
          categories: updatedCategory,
        };
  
      case "REMOVE_CATEGORY":
        return {
          ...state,
          categories: state.categories.filter(
            (category) => category.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };