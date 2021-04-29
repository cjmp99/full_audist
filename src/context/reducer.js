export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case "EDIT_CATEGORY":
      let { newCategory, oldCategory } = action;
      let new_categories = [];
      if (newCategory !== oldCategory) {
        var i = state.categories.indexOf(oldCategory);
        state.categories.splice(i, 1);
        new_categories = [...state.categories, newCategory];
      }

      return {
        ...state,
        categories: new_categories,
        edit_category: false,
      };

    case "SELECTED_CATEGORY":
      return {
        ...state,
        category: action.payload,
        edit_category: true,
      };

    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.name !== action.payload
        ),
      };

    default:
      return state;
  }
}
