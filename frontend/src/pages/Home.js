import { useEffect }from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import ReactPlayer from 'react-player'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className="home">

       <div style={{display:'flex',flexDirection:'column',color:'white'}}>
       
       <span className='shinee'><h1>👋🏻 ,{user.name}</h1> </span><h3> Your code for today: conquerTheDay();🚀</h3>
           
           <br></br> Did you checked out today's TECH news?
    
         <div className="video">
      <ReactPlayer url={'https://youtu.be/1p7_4ZuP0Y4?si=NlOwNQg8WTdvFMYu'}></ReactPlayer>
      </div>
      </div> 
      <div className="workfit">
      <WorkoutForm />
       <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
       </div>
       
      </div>
      
    </div>
  )
}

export default Home