import { useState } from './fake-react.js';

function WrongComponent() {
  const [data, setData] = useState([]);

  data.push(5);
  setData(data);
}

function CorrectComponent() {
  const [data, setData] = useState([]);

  // we will explain this syntax in the next chapter
  // but this is effectively making a new copy of the array
  // rather than mutating it
  setData([...data, 5]);
}

// Sample usage
WrongComponent();
CorrectComponent();
