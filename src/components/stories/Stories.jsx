import React from 'react'
import './stories.scss'
const Stories = () => {
    const stories=[
        {
            id:1,
            name:'Ayla Berk',
            img: 'https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id:2,
            name:'Ahmet Yayla',
            img: 'https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id:3,
            name:'Berk Turp',
            img: 'https://images.pexels.com/photos/2215578/pexels-photo-2215578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id:4,
            name:'Gülfem Albayrak',
            img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg',
        },
        {
            id:5,
            name:'Yuşa Sevinç',
            img: 'https://images.pexels.com/photos/5037617/pexels-photo-5037617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ]
  return (
    <div className='stories'>
        <div className="story">
            <img src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            <span>Batuhan Sevinç</span>
            <button>+</button>
        </div>
        {
            stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img}/>
                    <span>{story.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Stories