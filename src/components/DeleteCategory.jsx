export const DeleteCategory = ({ categories, setCategories }) => {
  const deleteCategory = () => {
    const updateCategories = [...categories];
    console.log(updateCategories.shift());
    setCategories(updateCategories);
  };
  return (
    <button className="delete" onClick={deleteCategory}>
      Delete
    </button>
  );
};
