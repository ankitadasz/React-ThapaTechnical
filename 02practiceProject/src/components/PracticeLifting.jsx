import { useState } from "react";

const PracticeLifting = () => {
  const [InputValue, setInputValue] = useState("");
  return (
    <>
      <InputField inValue={InputValue} SetValue={setInputValue} />
      <DisplayField inValue={InputValue} SetValue={setInputValue} />
      <CompareMaker inValue={InputValue} SetValue={setInputValue} />
    </>
  );
};
const InputField = ({ inValue, SetValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Place temprature value"
        value={inValue}
        onChange={(event) => SetValue(event.target.value)}
      ></input>
    </>
  );
};
const DisplayField = ({ inValue, SetValue }) => {
  function ConditionChecker() {
    return <>{Number(inValue) > 50 ? "Its Too Hot" : "Its too Cold"}</>;
  }
  return (
    <>
      <div>
        The input temp is:{inValue}
        <p>{inValue == "" ? " " : ConditionChecker()}</p>
      </div>
    </>
  );
};

const CompareMaker = ({inValue}) => {
  let message = "";

  if (Number(inValue) > 50) {
    message = "Its too hot to livein bbsr";
  } else if (Number(inValue) < 40) {
    message = "Its quite good in bbsr";
  } else  {
    message = "Temprature is stable";
  }
  return (
    <>
      <p>{inValue == "" ? "" : message}</p>
    </>
  );
};
export default PracticeLifting;
