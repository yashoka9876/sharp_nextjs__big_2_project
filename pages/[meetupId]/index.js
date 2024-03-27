import React from 'react'
import Card from '../../components/ui/Card'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient, ObjectId } from 'mongodb'

const DetailPage = (props) => {
  console.log(props.meetupData.id)
  return (
    <>
      <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.titlte}
      address={props.meetupData.address}
      description={props.meetupData.description}
      />
    </>
  )
}
export async function getStaticPaths(){

  const url='mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/'
  // 'mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/meeetups?retryWrites=true&w=majority&appName=Cluster0'
  
  const client = await MongoClient.connect('mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
 
      const db=client.db('meetups2');

      const meetupsCollection=db.collection('meetupDetail2');

      const meetups=await meetupsCollection.find({},{_id:1}).toArray();

      // console.log(meetups)
      client.close();

  return{
    fallback:'blocking',
    paths:meetups.map(meetup=>({
    params:{
      meetupId:meetup._id.toString()
    }
    })),
  }
}

export async function getStaticProps(context){
  
  const meetupid=context.params.meetupId;

  const url='mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/'
  // 'mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/meeetups?retryWrites=true&w=majority&appName=Cluster0'
  
  const client = await MongoClient.connect('mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
 
      const db=client.db('meetups2');

      const meetupsCollection=db.collection('meetupDetail2');

      const selectedMeetup=await meetupsCollection.findOne({_id: new ObjectId(meetupid)});

      // console.log(meetups)
      client.close();

  return {
      props:{
         meetupData:{
          id:selectedMeetup._id.toString(),
          title:selectedMeetup.title,
          image:selectedMeetup.image,
          address:selectedMeetup.address,
          description:selectedMeetup.description
         }
      }
  };
}

export default DetailPage
