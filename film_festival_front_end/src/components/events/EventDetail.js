import React from 'react';
import Event from "./Event";
import {Link} from 'react-router-dom';

const EventDetail = ({event, rooms, onDelete, onUpdate}) => {

    if (!event){
      return "Loading..."
    }


  const handleDelete = () => {
    onDelete(event.id)
  }

  const deleteEvent = (eventIndex) => {
    let copiedEvent = {...event}
    copiedEvent.events.splice(eventIndex, 1)
    onUpdate(event)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const index = parseInt(evt.target.events.value)
    const indexEvent = events[index];
    event.events.push(indexEvent)
    onUpdate(event);
  }

  const eventEvents = event.events.map((event, index) => {
    return <li key={index}>
    {event.name}<button onClick={() => deleteEvent(index)}>Delete</button>
    </li>
  })

  const editUrl = "/event/" + event.id + "/edit"

  const eventOptions = events.map((event, index) => {
    if (!attendeeHasEvent(event)){
      return (
        <option key={index} value={index}>{event.name}</option>
      )
    } else {
      return null
    }
  })


  return (
    <div className = "component">
    <Attendee attendee = {attendee}/>
    <p>Events:</p>
    <ul>
    {attendeeEvents}
    </ul>
    <form onSubmit={handleSubmit}>
    <select name="events" >
    {eventOptions}
    </select>
    <input type="submit" value="Add Event"/>
    </form>
    <button onClick={handleDelete}>Delete {attendee.name}</button>
    <Link to= {editUrl}><button type="button">Edit {attendee.name}</button></Link>
    </div>
  )
}

export default AttendeeDetail;
