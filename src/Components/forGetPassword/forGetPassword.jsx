import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios';
export default function ForGetPassword() {
  let navigate=useNavigate();
  //

//messageError
  const [messageError, setmessageError] = useState('')
  
  //validation
  let validationSchema=Yup.object({
    email:Yup.string().required('الايميل مطلوب').email('الايميل غير صحيح '),
  })
  
// send api to backend
async function handelLogin(values) {
  let {data}= await axios.post(`http://66.45.248.247:8000/auth/otp-request/`,values).catch((errr)=>{
  setmessageError(`${errr.response.data.email} `)
  });
  
  // console.log(data.detail);
  if (data.type === 'successful') {
    localStorage.setItem("userToken",data.token);
    // saveUserData();
  // console.log(data.type);
  // console.log('data.type');
    navigate("/ForGetPasswordOne");
  }else{
  console.log('fales');
  }
  console.log(data.type);
  
  }
  let formik=useFormik({
    initialValues:{
    email:'',
    },validationSchema,onSubmit:handelLogin
    });
  //errors
function validate(values) {
  let errors={};
  return errors;
  
  }



  return <div className=' fixeW m-auto pt-5 text-end mt-5'>
  <form onSubmit={formik.handleSubmit} >
  <h2 className='my-2'> هل نسيت كلمة المرور</h2>
  {messageError.length >0?<div className=" text-danger small" role="alert">
  الايميل   غير صحيح  </div>:null}
<label  className='fs-4' htmlFor="email">  البريد الالكتروني  </label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  placeholder='اكتب البريد الالكتروني ' className='form-control mt-2 mb-3 mb-2 text-end' type="email" name="email" id="email" />
{formik.errors.email && formik.touched.email?
      <div className=" text-danger small" role="alert">
     {formik.errors.email}
    </div>:null}



<div className="item text-center">

<button  className='px-4  mainButton rounded-2 py-1   mb-2 text-center w-100 ' type="submit"> التالي </button>
<p >   هل تذكرة كلمة المرور الأن ؟ <Link   to="/login" className='colorDef text-decoration-none '>   الي الخلف</Link>  </p>

</div>





  </form>

  </div>
}
