import './App.css';
import React, {useEffect, useState} from "react";
import Select from "react-select";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
    <Select options={options.map(({value, label}) => ({value, label: `${label} 1`}))} />
)

function App() {
  const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()) // default value can be anything you want

  useEffect(() => {
    setTimeout(() => setFakeCurrentDate(new Date()), 1000)
  }, [fakeCurrentDate])

  return (
    <div className="App">
      <MyComponent/>
    </div>
  );
}

export default App;
