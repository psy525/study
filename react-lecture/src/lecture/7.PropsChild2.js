import { useState } from "react";

const PropsChild2 = ({ num1, num2 }) => {
  const [newNum1, setNewNum1] = useState(Number(num1));
  const [newNum2, setNewNum2] = useState(num2);
  const [sum, setSum] = useState(Number(num1) + num2);

  const sumNum = () => {
    setSum(newNum1 + newNum2);
  };
  return (
    <>
      <p>나는 첫번째 숫자 {num1}</p>
      <p>타입은{typeof num1}</p>
      <p>나는 두번째 숫자 {num2}</p>
      <p>타입은{typeof num2}</p>

      <div>
        <p>num1: {newNum1} </p>
        <button
          onClick={() => {
            setNewNum1(newNum1 + 1);
          }}
          style={{
            border: "2px solid lavenderblush",
            padding: "5px",
            backgroundColor: "lavenderblush",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          num1 +
        </button>
        <button
          onClick={() => {
            setNewNum1(newNum1 - 1);
          }}
          style={{
            border: "2px solid lavenderblush",
            padding: "5px",
            backgroundColor: "lavenderblush",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          num1 -{" "}
        </button>

        <p>num2: {newNum2}</p>
        <button
          onClick={() => {
            setNewNum2(newNum2 + 1);
          }}
          style={{
            border: "2px solid lavenderblush",
            padding: "5px",
            backgroundColor: "lavenderblush",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          num2 +{" "}
        </button>
        <button
          onClick={() => {
            setNewNum2(newNum2 - 1);
          }}
          style={{
            border: "2px solid lavenderblush",
            padding: "5px",
            backgroundColor: "lavenderblush",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          num2 -{" "}
        </button>
        <br />
        <button
          onClick={sumNum}
          style={{
            border: "2px solid lavenderblush",
            padding: "5px",
            backgroundColor: "lavenderblush",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          총합
        </button>
        <p>{sum}</p>
      </div>
    </>
  );
};
export default PropsChild2;
