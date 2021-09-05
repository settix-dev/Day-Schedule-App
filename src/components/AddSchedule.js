import { useState } from 'react';

const AddSchedule = ({onAdd}) => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Please add a schedule");
            return;
        }

        onAdd({ title, time});

        // clear the input fields
        setTitle("");
        setTime("");
    }
    return (
        
           <div>
           <form 
           className="add-schedule"
           onSubmit={onSubmit}>
           <h3>Add Schedule</h3> 
            <div >
                <label>Schedule</label> <br />
                <input 
                className="form-control"
                type="text" 
                name="title" 
                placeholder="Add Schedule"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                /> 
            </div>
            <div>
            <label>Time</label>
             <input 
                className="form-control"
                type="text" 
                name="time" 
                placeholder="Add Time"
                value={time}
                onChange={(e) => setTime(e.target.value) }
            />
            </div>
            <input 
            type="submit" 
            value="Save Schedule"
            className="btn btn-block" />
           </form>
           </div>
    )
}

export default AddSchedule
