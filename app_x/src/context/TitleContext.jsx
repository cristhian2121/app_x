import { createContext, useState } from "react";

const DEFAULT_VALUE = {
  title: "Lista de usuarios",
  updateTitle: () => {},
};

export const TitleContext = createContext(DEFAULT_VALUE);

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState(DEFAULT_VALUE.title);

  const updateTitle = (newTitle) => {
    // regex
    // ...
    setTitle(newTitle);
  };

  return (
    <TitleContext.Provider
      value={{
        title,
        updateTitle,
      }}
    >
      {children}
    </TitleContext.Provider>
  );
};
