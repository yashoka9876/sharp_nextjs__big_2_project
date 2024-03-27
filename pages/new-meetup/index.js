import React from 'react';
import NewMeetuForm from '../../components/meetups/NewMeetupForm';
const NewMeetupPage = () => {
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)
    }
  return (
    <>
    <NewMeetuForm onAddMeetup={addMeetupHandler}/>
    </>
  )
}

export default NewMeetupPage