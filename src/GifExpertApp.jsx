import { useState } from "react";
import { AddCategory, DeleteCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifSpotterApp</h1>
      <div className="wraper">
        <AddCategory onNewCategory={onAddCategory} />
        <DeleteCategory categories={categories} setCategories={setCategories} />
      </div>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
