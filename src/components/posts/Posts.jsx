import React from 'react'
import './posts.scss'
import Post from '../post/Post'
const Posts = () => {

  const posts = [
    {
      id:1,
      name:'Batuhan Sevinç',
      userId:1,
      profilePic:"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img:'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, eos.'
    },
    {
      id:2,
      name:'Gülfem Albayrak',
      userId:2,
      profilePic:"https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg",
      img:'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, eos.'
},
  ]

  return (
    <div className='posts'>
      {posts.map((post)=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts