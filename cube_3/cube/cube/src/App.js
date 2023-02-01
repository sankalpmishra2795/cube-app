import { useEffect, useState } from "react";
import "./App.css";
import InputPannel from "./comonents/sideBar/InputPannel";
import RightViewPannel from "./comonents/viewBar/RightViewPannel";
import ViewPannel from "./comonents/viewBar/ViewPannel";
import InputFormData from "./customData/input-form.json";
import { convertFeetToMeter, convertMeterToFeet } from "./utils";

function App() {
  const [unit, setUnit] = useState(InputFormData?.fields[0]?.unit);
  const [outputUnit, setOutputUnit] = useState();
  const resetInput = () => {
    let obj = {};
    InputFormData?.fields?.map((item) => {
      obj[item?.label] = 0;
    });
    return obj;
  };
  const [inputText, setInputText] = useState(resetInput());
  const [outputValue, setOutputValue] = useState({
    meter: 0,
    feet: 0,
  });
  const changeUnit = (type, current) => {
    if (type === "input") {
      setUnit(current);
    } else {
      setOutputUnit(current);
    }
  };
  const convertToInt = (value) => {
    return +value;
  };
  useEffect(() => {
    let { Length, Width, Height } = inputText;
    Length = convertToInt(Length);
    Width = convertToInt(Width);
    Height = convertToInt(Height);
    let value = 2 * Length * Width + 2 * Length * Height + 2 * Height * Width;
    if (outputUnit === "unitInMeter") {
      outputValue.meter = value;
    } else {
      outputValue.feet = value;
    }
    setOutputValue({ ...outputValue });
  }, [inputText]);

  
  useEffect(() => {
    let value = 0;
    if (unit === "unitInFeet") value = (+outputValue * 0.3048)?.toPrecision(3);
    else value = (+outputValue * 3.28084)?.toPrecision(3);

    outputValue[outputUnit === "unitInFeet" ? "feet" : "meter"] = value;
    setOutputValue({ ...outputValue });
  }, [outputUnit]);
  let width = "30%";
  console.log("output", outputValue);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "20px",
      }}
    >
      <InputPannel
        setOutputValue={setOutputValue}
        inputText={inputText}
        setInputText={setInputText}
        width={width}
        unit={unit}
        changeUnit={changeUnit}
      />
      <ViewPannel inputText={inputText} width={width} unit={unit} />
      <RightViewPannel
        width={width}
        unit={unit}
        outputUnit={outputUnit}
        outputValue={outputValue}
        inputText={inputText}
      />
    </div>
  );
}

export default App;
