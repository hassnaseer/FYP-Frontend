// FormField.js
import React, { useState } from 'react';

const FormField = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleTitleChange = (event) => {
    setQuestion(event.target.value);
  };

  const canAddOptions = options.length < 4;

  const handleAddQuestion = () => {
    setShowOptions(true);
    setQuestion(''); // Clear the question input for the next question
    setOptions([]); // Clear the options for the next question
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleDone = () => {
    onAddQuestion({
      question,
      options: options.filter((option) => option.trim() !== ''),
    });
    setShowOptions(false);
  };

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <input type="text" value={question} onChange={handleTitleChange} placeholder="Enter question" />
      {!showOptions && <button onClick={handleAddQuestion}>Add New Question</button>}
      {showOptions && (
        <div>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
            </div>
          ))}
          {canAddOptions && <button onClick={handleAddOption}>Add Option</button>}
          <button onClick={handleDone}>Done</button>
        </div>
      )}
      {showOptions && !options.length && <button onClick={handleDone}>Done</button>}
      {showOptions && !canAddOptions && <button onClick={handleDone}>Done</button>}
      {showOptions && !showOptions && <button onClick={handleDone}>Done</button>}
      {showOptions && <button onClick={handleShowOptions}>Show Options</button>}
    </div>
  );
};

export default FormField;
