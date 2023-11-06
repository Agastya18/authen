import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {
  const currentUser= useSelector(state=>state.persistedReducer.user.currentUser)
  console.log(currentUser)
  return (
    <div className=' bg-slate-200'>
        <div className=" flex  justify-around">
          <h1 className="  text-2xl p-5 font-bold">AUTHer</h1>
            <ul className="flex  gap-4 items-center text-2xl">
            <Link to={"/"}> <li>Home</li></Link>
              
               <Link to={"/about"}><li>About</li></Link> 
               <Link  to="/Signin"> 
               {currentUser ? (
                <img src={currentUser.profilePic} className=" h-10 w-10 rounded-full"/>
               ):( <li>Sign In</li>)}
               
              
               </Link>
               
            </ul>
        </div>
    </div>
  )
}

export default Header













