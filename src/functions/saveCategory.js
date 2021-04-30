export const saveCategory = (
  data,
  setData,
  setSub_category,
  setSub_categories,
  edit_category,
  addCategory,
  editCategory,
  category
) => {
  if (data?.name?.length) {
    setData({
      name: "",
      sub_categories: [],
    });

    setSub_category("");
    setSub_categories([]);

    if (!edit_category) {
      addCategory(data);
    } else {
      editCategory(data, category);
    }
  } else {
    alert("You must add at least one name to a category");
  }
};
