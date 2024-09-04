import { useState } from "react";

const HookUseRefMC = () => {
  //음식 이미지 바꾸기
  // const imgRef = useRef(); //변하는 이미지 값을 유지
  const [num, setNum] = useState(1); //시작 이미지 번호

  const goChangeFood = () => {
    const index = Math.floor(Math.random() * 8 + 1);
    // 1.useRef활용
    // imgRef.current.src = `/images/food${index}.png`;
    // 2.useState활용
    setNum(index);
  };

  //배경색상 바꾸기
  // const divRef = useRef();
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);
  const goChangeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // 1.uesRef 활용
    // divRef.current.style.backgroundColor = randomColor;
    // 2.useState 활용
    setColor(randomColor);
    setList([...list, randomColor]);
  };

  return (
    <div className="flex flex-col items-center mt-2">
      <div className="w-40 h-40 border border-solid">
        {/* 1.ref이용 */}
        {/* <img className="w-full h-full" ref={imgRef} src="/images/J.png" /> */}
        <img className="w-full h-full" src={`/images/food${num}.png`} />
      </div>
      <button className="btn mb-2" onClick={goChangeFood}>
        음식변경
      </button>
      {/* <div className="w-40 h-40 border border-solid" ref={divRef}></div> */}
      <div
        className="w-40 h-40 border border-solid"
        style={{ backgroundColor: color }}
      ></div>
      <button className="btn" onClick={goChangeColor}>
        색상변경
      </button>
      {list.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </div>
  );
};
export default HookUseRefMC;
