// App.js
import React, { useState } from 'react';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState([]);

  const handleAddQuestion = () => {
    if (currentQuestion.trim() !== '' && currentOptions.length > 0) {
      setQuestions([...questions, { question: currentQuestion, options: currentOptions }]);
      setCurrentQuestion('');
      setCurrentOptions([]);
    }
  };

  const handleAddOption = () => {
    if (currentOptions.length < 4) {
      setCurrentOptions([...currentOptions, '']);
    }
  };

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...currentOptions];
    updatedOptions[index] = value;
    setCurrentOptions(updatedOptions);
  };

  const handleFormSubmit = () => {
    console.log(questions);
  };

  return (
    <div>
      <h1>Question Form</h1>
      <div>
        <input
          type="text"
          value={currentQuestion}
          onChange={handleQuestionChange}
          placeholder="Enter question"
        />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
      {currentOptions.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
          />
        </div>
      ))}
      {currentOptions.length < 4 && <button onClick={handleAddOption}>Add Option</button>}
      <hr />
      {questions.map((q, index) => (
        <div key={index}>
          <h3>{q.question}</h3>
          {Object.keys(q.options).map((key) => (
            <div key={key}>
              <p>{key}</p>
              <input type="text" value={q.options[key]} readOnly />
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default App;
