import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MajorCard from './components/MajorCard';
import MinorCards from './components/MinorCards';

function App() {
  const api_url = 'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020';
  const [result, setResult] = useState(null);
  const [majorData, setMajorData] = useState(null)
  let content = null;

  useEffect(() => {
    axios.get(api_url)
      .then(res => {
        setResult(res.data);
        setMajorData(res.data.results[0]);
      })
  }, []);

  if (result) {
    content = <div className="App">
      <Navbar />
      <MajorCard result={majorData}/>
      <MinorCards result={result} setMajorData={setMajorData}/>
    </div>
  }

  return (
    <div>{content}</div>
  );
}

export default App;
