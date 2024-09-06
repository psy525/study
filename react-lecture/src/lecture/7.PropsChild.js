//const PropsChild = ( { name, age, list, info }) 이렇게 하면 구조분해할당이 바로됨
const PropsChild = (props) => {
  console.log(props);
  //구조분해 할당
  const { name, age, list, info } = props;
  console.log(name, age, list, info);
  return (
    <div>
      {" "}
      나는 {name}
      {info.test}
      {list &&
        list.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}
      {list[1]}
    </div>
  );
};
export default PropsChild;
