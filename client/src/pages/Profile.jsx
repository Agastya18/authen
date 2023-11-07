import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {getStorage,ref, uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { updateUserSuccess,deleteUserSuccess } from "../redux/user/userSlice";
import axios from "axios";
const Profile = () => {
  const [image,setImage] =useState(undefined)
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [name,Setname] = useState(undefined);
  const [email,Setemail] = useState(undefined);
  const [password,Setpassword] = useState(undefined);
  const dispatch = useDispatch()
  // console.log(formData)
  // console.log(image)
  const fileRef = useRef(null);
  const currentUser = useSelector(
    (state) => state.persistedReducer.user.currentUser
  );
  useEffect(() => {
    if(image)
    {
      handleFileUpload(image)
    }
  },[image])
  const handleFileUpload = async(image)=>{
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
     
  }
  console.log(currentUser);
  const handleSubmit = async(e)=>{
     e.preventDefault();
     try {
      // const res= fetch(`/api/user/update/${currentUser._id}`,{
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({name,email,password})
      // })
      // const data = await res.json();
      // dispatch(updateUserSuccess(data));
      const res = await axios.post(`/api/user/update/${currentUser._id}`,{name,email,password})
      dispatch(updateUserSuccess(res));
      console.log(res.data)
     } catch (error) {
      console.log(error)
     }
  }
  const handleDelete = async()=>{
    try {
       const res= await axios.delete(`/api/user/delete/${currentUser._id}`)
       dispatch(deleteUserSuccess(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  const handleOut= async()=>{
    try {
      const res = await axios.get('/api/auth/signout')
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=" p-3 max-w-lg mx-auto">
      <h1 className=" text-3xl text-center font-semibold my-7">Profile</h1>
      <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
      <input type="file" ref={fileRef} hidden accept="image*" onChange={(e)=>setImage(e.target.files[0])} />
        <img
          src={ formData.profilePicture || currentUser.profilePic}
          alt=""
          className=" h-24 w-24 self-center cursor-pointer rounded-full object-cover"
          onClick={()=>fileRef.current.click()}
        />
          <p className='text-sm self-center'>
          {imageError ? (
            <span className='text-red-700'>
              Error uploading image (file size must be less than 2 MB)
            </span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className='text-green-700'>Image uploaded successfully</span>
          ) : (
            ''
          )}
        </p>
        <input
          defaultValue={currentUser.name}
          type="text"
          placeholder="username"
          className=" bg-slate-100 rounded-lg p-3"
          value={name}
          onChange={(e)=>Setname(e.target.value)}
        />
        <input
          defaultValue={currentUser.email}
          type="text"
          placeholder="email"
          className=" bg-slate-100 rounded-lg p-3"
          value={email}
          onChange={(e)=>Setemail(e.target.value)}
        />{" "}
        <input
          type="password"
          placeholder="password"
          className=" bg-slate-100 rounded-lg p-3"
          value={password}
          onChange={(e)=>Setpassword(e.target.value)}
        />
        <button className=" bg-slate-700 text-white p-3 rounded-lg hover:opacity-90">
          Update
        </button>
      </form>
      <div className=" flex justify-between mt-5">
        <span className=" text-red-700" onClick={handleDelete}>Delete User</span>
        <span className=" text-red-700" onClick={handleOut}>SignOut</span>
      </div>
    </div>
  );
};

export default Profile;
