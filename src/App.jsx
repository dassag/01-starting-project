import { useState } from 'react';
import Results from './components/Results';
import UserInput from './components/UserInput';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    //let intValue = parseInt(newValue, 10);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onChange={handleInputChange} />
      {isValidInput ? (
        <Results input={userInput} />
      ) : (
        <p className='center'> Please enter valid duration</p>
      )}
    </>
  );
}

export default App;
