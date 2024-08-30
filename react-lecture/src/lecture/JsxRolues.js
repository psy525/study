const JsxRolues = () => {
  /* jsx 규칙
     1. 하나의 부모태그로 감싸야 함 >> 하나의 컴포넌트는 하나의 덩어리로
     2. <> </> 빈태그를 활용해서 스타일 구조를 잡기도 함
     3. 반드시 종료 태그 작성
     4. class 속성은 className으로 사용
     5. style 속성은 객체 형태로 값을 지정
     6. 모든 속성은 카멜표기법으로 작성
     ** js영역은 {} 안에 기입
     7. js변수를 대입해서 사용가능
     8. 조건문은 삼항연산자 활용 (조건 ? 참 : 거짓)
     9. 반복문은 map 활용
  */
  const myFavorite = "스펀지밥";
  const userObj = { name: "짱구", age: "5" };
  const list = ["철수", "훈이", "유리", "맹구"];
  const list2 = "" || [];

  return (
    <>
      <p className="zzz" style={{ backgroundColor: "pink", color: "red" }}>
        내가 제일 좋아하는 건 {myFavorite}
      </p>
      <p>닉네임: {userObj.name2?.name}</p>
      <p>나이: {userObj.age}</p>
      <p>친구들 목록</p>
      <ul>
        {/* key 속성 꼭 넣기 */}
        {list.map((v, i) => {
          return <li key={`fr-${i}`}>{v}</li>;
        })}
      </ul>
      <p>빌런은 제외</p>
      {list2.map((v, i) => {
        if (v != "훈이") {
          return <li key={i}>{v}</li>;
        }
      })}
      {list.map((v, i) => {
        return <li key={i}>{v == "훈이" ? "수지" : v}</li>;
      })}
    </>
  );
};

export default JsxRolues;
