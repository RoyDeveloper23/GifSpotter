import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInpuntChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newValue = inputValue.trim();
    if (newValue.length <= 3) return;

    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(newValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} className="buscador-form">
      <input
        type="text"
        placeholder="Search Gifs"
        autoFocus
        value={inputValue}
        onChange={onInpuntChange}
      />
    </form>
  );
};
