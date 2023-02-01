import React from "react";
import Heading from "../../communComponents/Heading";
import InputFormBox from "../../communComponents/InputFormBox";
import InputFormData from "../../customData/input-form.json";

const InputForm = ({ unit, inputText, setInputText }) => {
  return (
    <div style={{ height: "55vh", width: "90%", background: "#f7f7f7" }}>
      <Heading text={InputFormData.label} />
      {InputFormData?.fields.map((box) => {
        return <InputFormBox inputText={inputText} setInputText={setInputText} unit={unit} key={box._uid} box={box} />;
      })}
    </div>
  );
};

export default InputForm;
