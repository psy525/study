function JxsMission() {
  const qnaList = [
    { question: "Q1. 이름?", answer: "A1.짱구" },
    { question: "Q2. 몇살?", answer: "A2. 5살" },
    { question: "Q3. 유치원?", answer: "A3.떡잎유치원" },
    { question: "Q4. 강아지는?", answer: "A4.흰둥이" },
  ];
  const fruitList = [
    { fruit: "사과", price: 1000 },
    { fruit: "바나나", price: 2000 },
    { fruit: "딸기", price: 3000 },
    { fruit: "복숭아", price: 4000 },
    { fruit: "오렌지", price: 5000 },
  ];
  return (
    <>
      <div
        style={{
          backgroundColor: "pink",
          marginBottom: "10px",
          width: "250px",
        }}
      >
        모든 QnA 목록
      </div>
      <div>
        {qnaList.map((v, i) => {
          //태그사이에는 값이 들어가야 함(객체{}가 들어가면 오류)
          return (
            <div style={{ marginBottom: "10px" }}>
              <div key={`q-${i}`}>
                <span style={{ fontWeight: "bold" }}>{v.question}</span>
              </div>
              <div key={`w=${i}`}>{v.answer}</div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: "pink",
          marginBottom: "10px",
          width: "250px",
        }}
      >
        Q4제외한 QnA 목록
      </div>
      <div>
        {qnaList.map((v, i) => {
          const result = v.question.includes("Q4") ? false : true;
          console.log(result);
          if (result) {
            return (
              <div style={{ marginBottom: "10px" }}>
                <div key={`q-${i}`}>
                  <span style={{ fontWeight: "bold" }}>{v.question}</span>
                </div>
                <div key={`w=${i}`} style={{ marginBottom: "20px" }}>
                  {v.answer}
                </div>
              </div>
            );
          }
        })}
      </div>
      {qnaList.map((v, i) => {
        return !v.question.includes("Q4") ? (
          <p key={`${i}`}>
            {v.question} {v.answer}
          </p>
        ) : null;
      })}

      <div>
        {fruitList.map((v, i) => {
          return (
            <div>
              <img
                src={`../images/fruit${i + 1}.jpeg`}
                key={`fruit-${i}`}
                style={{ width: "150px" }}
              />
              <div key={`fruit${i}`}>
                {v.fruit}의 가격: {v.price}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default JxsMission;
