import { useState } from 'react'
import { Link ,useNavigate} from "react-router-dom"
import axios from 'axios'
import { signInSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'
const SignIn = () => {
   const dispatch = useDispatch()
  const [pass,setPass]= useState("")
  const [email,setEmail]= useState("")
  const navigate = useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(pass,email)
    if( !pass || !email){
        alert('please fill all the fields')
        return
    }
    //api call
    const userData={
     
      email: email,
      password: pass
    }
    try {
     
      const res= await axios.post('/api/signin',userData)
      console.log(res.data)
      dispatch(signInSuccess(res.data.verifyUser))
       navigate('/profile')
    } catch (error) {
   
      console.log(error)
    }
    

}
  return (
    <div className=' min-h-screen bg-gray-300 flex flex-col justify-center items-center'>
        <div className=' bg-white px-16 pt-8 pb-12 mb-4'>
              <h1 className=' text-3xl font-mono text-center'>Login</h1>
              <form >
             
                <label  className=' block text-gray-600 mt-4'>Email: </label>
                 <input  label="Email"
                    type="text"
                    id="email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
                />
                <label  className=' block text-gray-600 mt-4'>Password: </label>
                 <input label="password"
                    type="password"
                    id="password"
                   value={pass}
                   onChange={(e)=>setPass(e.target.value)}
                   className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
                />
                
                
                <button onClick={(e)=>handleSubmit(e)} className=' bg-green-600   rounded-md p-2 mt-3   w-full px-4'>signin</button>
                <p className=' inline-block'> Already have an account?</p>
                <Link to="/login" className=' text-blue-500 ml-2'>Login</Link>
              </form>
        </div>
    </div>
  )
}

export default SignIn