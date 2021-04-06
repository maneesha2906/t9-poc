import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import buttonList from "./statics/buttonList";
import Button from "./components/Button";
import appStatics from "./statics/app";
import { generateUID } from "./helpers/utils";
import {
  convertT9Fetch,
  selectConvertedList,
  selectIsLoading,
  selectApiError,
  convertT9Actions,
} from "./store/slices/t9ConvertSlice";

function App() {
  const [keyPadInput, setKeyPadInput] = useState("");
  const convertedList = useSelector(selectConvertedList);
  const isLoading = useSelector(selectIsLoading);
  const apiError = useSelector(selectApiError);

  const dispatch = useDispatch();

  const onButtonClick = (keyValue) => {
    if (keyValue === "clear") {
      setKeyPadInput("");
      dispatch(convertT9Actions.resetConvertT9Store());
    } else if (keyValue === "convert") {
      keyPadInput && dispatch(convertT9Fetch(keyPadInput));
    } else {
      setKeyPadInput(keyPadInput + keyValue);
    }
  };

  return (
    <div className="container">
      <div className="input">{keyPadInput || appStatics.inputDefaultText}</div>
      <div className="buttons">
        {buttonList.map((button) => (
          <Button
            disabled={button.disabled}
            key={generateUID()}
            subtitle={button.subtitle}
            title={button.title}
            onButtonClick={onButtonClick}
            value={button.value}
          />
        ))}
      </div>
      <div className="output">
        {isLoading
          ? appStatics.loading
          : apiError
          ? appStatics.error
          : convertedList
          ? JSON.stringify(convertedList)
          : appStatics.outputDefaultText}
      </div>
    </div>
  );
}

export default App;
