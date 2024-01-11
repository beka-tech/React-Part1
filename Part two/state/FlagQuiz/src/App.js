import { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "img/1.jpg",
    answer: "Japan",
  },
  {
    id: 7336,
    question: "img/2.jpg",
    answer: "czech republic",
  },
  {
    id: 8832,
    question: "img/3.jpg",
    answer: "Iceland",
  },
  {
    id: 1297,
    question: "img/4.jpg",
    answer: "Estonia",
  },
  {
    id: 9103,
    question: "img/5.jpg",
    answer: "Netherlands",
  },
  {
    id: 2002,
    question: "img/6.jpg",
    answer: "Palestine",
  },
];

function FlashCards() {
  const [selectedID, setSelectedID] = useState(null);

  function handleclick(id) {
    setSelectedID(id !== selectedID ? id : null);
  }
  // function handleDelete(id) {
  //   setSelectedID((questions) =>
  //     questions.filter((questions) => questions.id !== id)
  //   );
  // }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleclick(question.id)}
          onMouseLeave={() => handleclick(null)}
          // onClick={() => handleDelete(question.id)}
        >
          <>
            {question.id === selectedID ? (
              <p>{question.answer}</p>
            ) : (
              <img src={question.question} alt={`Flashcard ${question.id}`} />
            )}
          </>
        </div>
      ))}
    </div>
  );
}
