import React from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'
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
const HomePage = (props) => {
  return (
    <>
    <Head>
          <title>React Meetup</title>
        </Head>
        <meta name='description'
        content='Browse a huge list of highly active React meetups!'
        />
    <MeetupList meetups={props.meetups}/>
    </>
  )
}
// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
//     return {
//         props:{
//             meetups:DUMMY_LIST
//         }
//     }
// }

export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
 
    const db=client.db('meetups2');

    const meetupsCollection=db.collection('meetupDetail2');

    const meetups=await meetupsCollection.find().toArray();

    client.close();

    //htis
    
  return {
      props:{
          meetups:meetups.map((item)=>({
            title:item.title,
            image:item.image,
            address:item.address,
            id:item._id.toString()
          }))
      },
      revalidate:3600
  };
    
   
}

export default HomePage