
import { useSelector } from "react-redux"

const Profile = () => {
    const currentUser = useSelector(state=>state.persistedReducer.user.currentUser)
    console.log(currentUser)
  return (
    <div className=" p-3 max-w-lg mx-auto">
      <h1 className=" text-3xl text-center font-semibold my-7">Profile</h1>
      <form className=" flex flex-col gap-4">
        <img src={currentUser.profilePic} alt="" className=" h-24 w-24 self-center cursor-pointer rounded-full object-cover" />
       
        <input defaultValue={currentUser.name} type="text" placeholder="username" className=" bg-slate-100 rounded-lg p-3" />
        <input defaultValue={currentUser.email} type="text" placeholder="email" className=" bg-slate-100 rounded-lg p-3" /> <input type="password" placeholder="password" className=" bg-slate-100 rounded-lg p-3" />
        <button className=" bg-slate-700 text-white p-3 rounded-lg hover:opacity-90">Update</button>
      </form>
      <div className=" flex justify-between mt-5">
        <span className=" text-red-700">Delete User</span>
        <span className=" text-red-700">SignOut</span>
      </div>
    </div>
  )
}

export default Profile