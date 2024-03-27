import React from 'react'
import Card from '../../components/ui/Card'
import MeetupDetail from '../../components/meetups/MeetupDetail'
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
  return {
    fallback:false,
    paths:[
      {
        params:{
          meetupId:'m1'
        }
      },
      {
        params:{
          meetupId:'m2'
        }
      },
    ]
  }
}
export async function getStaticProps(context){
  let Id=context.params.meetupId;
  return {
    props:{
      meetupData:{
        id:Id,
        image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
        title:'just an image',
        address:'vpo lidhran jalandhar',
        description:'nice place'
      }
    }
  }
}



export default DetailPage