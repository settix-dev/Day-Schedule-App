import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import AddSchedule from './components/AddSchedule';
import Footer from './components/Footer';
import Header from "./components/Header";
import Schedules from "./components/Schedules";


function App() {
  const [showAddSchedule, setShowAddSchedule] = useState(false);
  const [schedules, setSchedules] = useState([]);

useEffect(() => {
  const getSchedules = async () => {
    const schedulesFromServer = await fetchSchedules();
    setSchedules(schedulesFromServer);
  }

  getSchedules();
}, []);

//  FETCH SCHEDULES FROM SERVER
const fetchSchedules = async () => {
  const res = await fetch("http://localhost:5000/schedules");
  const data = await res.json();

  return data;
 // console.log(data);
}

// FETCH A SINGLE SCHEDULE
// const fetchSchedule = async (id) => {
//   const res = await fetch(`http://localhost:5000/schedules/${id}`);
//   const data = await res.json();

//   return data
// }

// DELETE SCHEDULE
const onDelete = async (id) => {
  // console.log(`Deleted: ID ${id}`);
  await fetch(`http://localhost:5000/schedules/${id}`,
  {
    method: "DELETE"
  }
  );

  setSchedules(
    schedules.filter((schedule) => schedule.id !== id ? schedule.id : "")
  )
}

const addSchedule = async (schedule) => {
  const res = await fetch("http://localhost:5000/schedules", 
  {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(schedule)
  })
  const data = await res.json();
  setSchedules([...schedules, data]);

  // FOR REVISION PURPOSES
  // console.log(schedule);
  // const id = Math.floor(Math.random() * 1000 + 1);
  // console.log(id)
  // const newSchedule = {id, ...schedule};
  // console.log(newSchedule);
  // setSchedules([...schedules, newSchedule]);
}

  return (
    <Router>
    <div className="container">
      <Header
       onToggle={() => setShowAddSchedule(!showAddSchedule)}
       showAdd={showAddSchedule}
       />
      
      <Route path="/" exact render={(props) => (
        <>
          {showAddSchedule && 
        <AddSchedule 
      onAdd={addSchedule}
      /> }
      <Schedules 
      schedules={schedules}
      onDelete={onDelete}
      />
        </>
      )} />
      <Route path="/about" component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
