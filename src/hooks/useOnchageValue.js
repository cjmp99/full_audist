import { useState } from "react";
import { CategoryData } from "../models/category";

export const useOnchangeValue = () => {
  const [data, setData] = useState(CategoryData);

  const onChangeValue = (e) => {
      if(e.target.name === "name"){
          setData({
              ...data,
              name: e.target.value
          })
      }
      console.log(e.target.value);
  };

  return [onChangeValue, data, setData];
};
