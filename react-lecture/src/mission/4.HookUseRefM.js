import { useEffect, useRef, useState } from "react";

const HookUseRefM = () => {
  const imgRef = useRef();
  const [imageName, setImageName] = useState("피자");
  const [colorList, setColorList] = useState([]);

  const changeImg = () => {
    const random = Math.floor(Math.random() * 8) + 1;
    imgRef.current.src = `/images/food${random}.png`;
    if (random == 1) {
      setImageName("피자");
    } else if (random == 2) {
      setImageName("스파게트");
    } else if (random == 3) {
      setImageName("샌드위치");
    } else if (random == 4) {
      setImageName("오므라이스");
    } else if (random == 5) {
      setImageName("함박스테이크");
    } else if (random == 6) {
      setImageName("새우튀김");
    } else if (random == 7) {
      setImageName("크림파스타");
    } else {
      setImageName("샌드위치");
    }
    console.log(imgRef.current.src);
  };

  const colorRef = useRef();
  const changeColor = () => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colorRef.current.style.backgroundColor = newColor;
    setColorList([...colorList, newColor]);
    console.log(colorRef.current.style.backgroundColor);
  };

  //   setInterval(() => {
  //     imgRef.current.src = `/images/food${Math.floor(Math.random() * 8) + 1}.png`;
  //   }, 1000);

  return (
    <>
      <div
        className="flex"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={`/images/food1.png`}
          style={{
            height: "200px",
            width: "200px",
            border: "1px solid",
            margin: "10px",
          }}
          ref={imgRef}
        />
        {imageName}
        <button
          style={{ border: "1px solid", width: "100px" }}
          onClick={changeImg}
        >
          음식변경
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "200px",
            width: "200px",
            border: "1px solid",
            margin: "10px",
            backgroundColor: "aquamarine",
          }}
          ref={colorRef}
        ></div>
        <button style={{ border: "1px solid" }} onClick={changeColor}>
          색상변경
        </button>
        <div>
          {colorList.map((v, i) => {
            return <p key={i}>{v}</p>;
          })}
        </div>
      </div>
    </>
  );
};
export default HookUseRefM;
