import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className=' bg-slate-200'>
        <div className=" flex  justify-around">
          <h1 className="  text-2xl p-5 font-bold">AUTHer</h1>
            <ul className="flex  gap-4 items-center text-2xl">
            <Link to={"/"}> <li>Home</li></Link>
               <Link  to="/Signup"> <li>Signin</li></Link>
               <Link to={"/about"}><li>About</li></Link> 
               
            </ul>
        </div>
    </div>
  )
}

export default Header













