import './App.css';

import StreakCounter from './streak-counter/StreakCounter';



// passes the contributions array to the StreakCounter component
const contributions = [
  [0, 0, 0, 0, 1, 5, 8],
  [3, 6, 7, 8, 2, 0, 0],
  [0, 4, 2, 1, 3, 9, 7], 
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],
  [3, 6, 7, 8, 2, 0, 0],
  [0, 4, 2, 1, 3, 9, 7], 
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 3, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 2, 5, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0],  
  [0, 3, 0, 0, 0, 15, 0],  
  [0, 0, 0, 0, 0, 10, 0],  
  [1, 1, 1, 1, 1, 1, 1],
  // Add more weeks as needed
];

function App() {
  return (
    <div className="App">
      <h1 className="title">Streak Counter</h1>
      <StreakCounter contributions={contributions} />
    </div>
  );
}

export default App;