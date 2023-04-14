import { useEffect, useRef, useState } from "react";

function App() {

  const [postId, setPostId] = useState([]);
  const [advice, setAdvice] = useState([]);
  const [changeQuote, setChangeQuote] = useState(0)


  useEffect(() => {
    const number = Math.floor(Math.random() * 245)+1;
    fetch("https://api.adviceslip.com/advice/"+number)
      .then((response) => response.json())
      .then((data) => {
        setPostId(data.slip.id);
        setAdvice(data.slip.advice);
      })
  }, [changeQuote]);

  function handleQuote(event: any) {
    setChangeQuote(changeQuote+1)
  }
  
  return (
    <div className="main">
      <div className="container">
        <p>ADVICE #{postId}</p>
        <h2>"{advice}"</h2>
        <svg className="break" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        <button onClick={handleQuote}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </button>
      </div>
    </div>
  )
}

export default App
