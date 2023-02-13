import {useEffect, useState} from 'react';
import './App.css';

const corrections = {
  salda: 'salad',
  popconr: 'popcorn',
}

function App() {
  const [textValue, setTextValue] = useState('')
  useEffect(() => {
    // Check that ' ' was last entered
    if (textValue && textValue[textValue.length - 1] === ' ') {
      // Split the words by ' ' and remove the trailing ' '
      const wordsArr = textValue.split(' ')
      wordsArr.pop()
      // Edit the last word if in corrections dictionary
      let lastWord = wordsArr.pop()
      lastWord = lastWord in corrections ? corrections[lastWord] : lastWord
      // Recreate the text string with the edited (or unedited) word
      wordsArr.push(lastWord)
      const correctedWords = wordsArr.join(' ') + ' '
      // Update the state
      setTextValue(correctedWords)
    }

  }, [textValue])
  
  return (
    <div className="App">
     <textarea value={textValue} onChange={e => setTextValue(e.target.value)} />
    </div>
  );
}

export default App;
