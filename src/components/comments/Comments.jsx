import './comments.scss'

const Comments = () => {
    const comments = [
        {
            id:1,
            desc:'Nice Photo <3 ',
            name:'Jane Farah',
            userId:1,
            profilePicture:'https://images.pexels.com/photos/4979500/pexels-photo-4979500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id:2,
            desc:'Very nice photo, Lorem ipsum dolor sit amet.',
            name:'John Smith',
            userId:2,
            profilePicture:'https://images.pexels.com/photos/4880413/pexels-photo-4880413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ]
  return (
    <div className='comments'>
        {
            comments.map((comment)=>(
                <div className="comment" key={comment.id}>
                    <img src={comment.profilePicture}/>
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>46 min ago</span>
                </div>
            ))
        }
    </div>
  )
}

export default Comments
