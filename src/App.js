import logo from './logo.svg';
import { useRef, useState } from 'react';
import './App.css';

const intialState = [
  {
    id: 0,
    content: '',
    clicked: false,
  },
  {
    id: 1,
    content: '',
    clicked: false,
  },
  {
    id: 2,
    content: '',
    clicked: false,
  },
  {
    id: 3,
    content: '',
    clicked: false,
  },
  {
    id: 4,
    content: '',
    clicked: false,
  },
  {
    id: 5,
    content: '',
    clicked: false,
  },
  {
    id: 6,
    content: '',
    clicked: false,
  },
  {
    id: 7,
    content: '',
    clicked: false,
  },
  {
    id: 8,
    content: '',
    clicked: false,
  },
];
function App() {
  const [value, setValue] = useState(intialState);
  const [totalClick, setTotalClick] = useState(0);
  const [win, setWin] = useState(false);
  const winRef = useRef(null);

  function checkWin() {
    if (
      (value[0].content === 'o') &
        (value[1].content === 'o') &
        (value[2].content === 'o') ||
      (value[3].content === 'o') &
        (value[4].content === 'o') &
        (value[5].content === 'o') ||
      (value[6].content === 'o') &
        (value[7].content === 'o') &
        (value[8].content === 'o') ||
      (value[0].content === 'o') &
        (value[3].content === 'o') &
        (value[6].content === 'o') ||
      (value[2].content === 'o') &
        (value[4].content === 'o') &
        (value[7].content === 'o') ||
      (value[2].content === 'o') &
        (value[5].content === 'o') &
        (value[8].content === 'o') ||
      (value[0].content === 'x') &
        (value[1].content === 'x') &
        (value[2].content === 'x') ||
      (value[3].content === 'x') &
        (value[4].content === 'x') &
        (value[5].content === 'x') ||
      (value[6].content === 'x') &
        (value[7].content === 'x') &
        (value[8].content === 'x') ||
      (value[0].content === 'x') &
        (value[3].content === 'x') &
        (value[6].content === 'x') ||
      (value[2].content === 'x') &
        (value[4].content === 'x') &
        (value[7].content === 'x') ||
      (value[2].content === 'x') &
        (value[5].content === 'x') &
        (value[8].content === 'x') ||
      (value[0].content === 'x') &
        (value[4].content === 'x') &
        (value[8].content === 'x') ||
      (value[2].content === 'x') &
        (value[4].content === 'x') &
        (value[6].content === 'x') ||
      (value[0].content === 'o') &
        (value[4].content === 'o') &
        (value[8].content === 'o') ||
      (value[2].content === 'o') &
        (value[4].content === 'o') &
        (value[6].content === 'o')
    ) {
      console.log('win');
      winRef.current.classList.remove('hidden');
      // winRef.current.classList.remove('main-div');
      // winRef.current.classList.add('main-div');
    }
  }
  checkWin();

  function clickHandler(boxId) {
    if (totalClick % 2 === 0) {
      const newValue = value.map((el) => {
        if (el.id === boxId) {
          return { ...el, content: 'o', clicked: true };
        } else {
          return el;
        }
      });
      setValue(newValue);
      setTotalClick((totalClick) => totalClick + 1);
    } else {
      const newValue = value.map((el) => {
        if (el.id === boxId) {
          return { ...el, content: 'x', clicked: true };
        } else {
          return el;
        }
      });
      setValue(newValue);
      setTotalClick((totalClick) => totalClick + 1);
    }
  }

  return (
    <div className='App'>
      <h1> Tic toc game</h1>
      <div className='contianer container'>
        {value.map((el) => (
          <button
            className={`box `}
            key={el.id}
            disabled={win}
            onClick={() => clickHandler(el.id)}
          >{`${el.clicked ? el.content : ''}`}</button>
        ))}
      </div>
      <div ref={winRef} className='hidden main-div'>
        you Win
      </div>
    </div>
  );
}

export default App;
