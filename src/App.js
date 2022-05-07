import { useEffect, useState } from 'react';
import {fetchHistory} from './api';
import { MissionCard } from './components/MissionCard';
import './App.css';
import { DateInput } from './components/DateInput';

function App() {

  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const getHistory = async () => {
    const data = await fetchHistory({
      start: startDate,
      end: endDate
    });
    setData(data);
  }

useEffect(() => {
  getHistory();
}, [startDate, endDate])

  return (
    <div>
      <h1 className='title'>Historial de SpaceX 🚀</h1>
      <div className='filters'>
        <DateInput label='Start Date' onChange={(e) => setStartDate(e.target.value)} />
        <br/>
        <DateInput label='End Date' onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div className='mission-list'>
        {data.map((title, idx) => {
          return <MissionCard key={idx} mission = {title} />
        })}
      </div>
    </div>
  );
}

export default App;
