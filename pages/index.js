import React from 'react'
import MeetupList from '../components/meetups/MeetupList'
const HomePage = () => {
    const DUMMY_LIST=[
        {
            id:'m1',
            image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
            title:'first meetup',
            address:'vpo lidhran',
            description:'good one'
        },
        {
            id:'m2',
            image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
            title:'second meetup',
            address:'vpo lidhran',
            description:'good one'
        }
    ]
  return (
    <>
    <MeetupList meetups={DUMMY_LIST}/>
    </>
  )
}

export default HomePage