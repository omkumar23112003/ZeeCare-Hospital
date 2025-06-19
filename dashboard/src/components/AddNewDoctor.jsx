import React, { useContext, useState } from 'react';
import {Context} from "../main"
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddNewDoctor = () => {

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Neurology",
    "Cardiology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const { isAuthenticated, setIsAuthenticated} = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const handleAvatar = async(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("aadhar", aadhar);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      formData.append("docAvatarPreview", docAvatarPreview);

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/user/doctor/addnew`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(response.data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
      <section className="page">

      <div className='container form-component add-doctor-form'>
      <img src="/logo.png" alt="logo" className='logo' />
      <h1 className='form-title'>ADD NEW DOCTOR</h1>
      <form onSubmit={handleAddNewDoctor}>

        <div className="first-wrapper">
          <div>
            <img src={docAvatarPreview ? `${docAvatarPreview}` : "/docHolder.jpg"} alt="Doctor Avatar" />
            <input type='file' onChange={handleAvatar}></input>
          </div>

          <div>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)} />

            <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="number" placeholder="Phone Number" value={phone} onChange={(e)=> setPhone(e.target.value)} />

            <input type="number" placeholder="Aadhar Number" value={aadhar} onChange={(e)=> setAadhar(e.target.value)} />
            <input type="date" placeholder="Date of Birth" value={dob} onChange={(e)=> setDob(e.target.value)} />

            <select value={gender} onChange={(e)=> setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />

            <select value={doctorDepartment} onChange={(e) => setDoctorDepartment(e.target.value)}>
              <option value="">Select Department</option>
              {
                departmentsArray.map((element, index)=>{
                  return(
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })
              }
            </select>
            <button type="submit">ADD NEW DOCTOR</button>
          </div>
        </div>
      </form>
    </div>

      </section>

    </>
  );
};

export default AddNewDoctor