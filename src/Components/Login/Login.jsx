import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios';
//testone@gamil.com 369369369
//Eslam@gmail.com 123123123


export default function Login() {
  let navigate=useNavigate();

//messageError
const [messageError, setmessageError] = useState('')


    //start show and hide Password 
  const [showPassword, setshowPassword] = useState(false)
function showPasswordOne() {
  setshowPassword(true)
}
function HidePasswordOne() {
  setshowPassword(false)
}
    //end show and hide Password 


let validationSchema=Yup.object({
  email:Yup.string().required('الايميل مطلوب').email('الايميل غير صحيح '),
  password:Yup.string().required('كلمه السر مطلوبه').min(8,'يجب ان لا تقل عن 8 احرف'),
})
// send api to backend
async function handelLogin(values) {
let {data}= await axios.post(`http://66.45.248.247:8000/auth/login/`,values).catch((errr)=>{
setmessageError(`${errr.response.data.email} `)
});


if (data.type === 'successful') {
  localStorage.setItem("userToken",data.token);
  // saveUserData();
  navigate("/");
}else{
console.log('fales');
}
console.log(data.type);

}
let formik=useFormik({
initialValues:{
email:'',
password:'',
},validationSchema,onSubmit:handelLogin
});
//errors
function validate(values) {
let errors={};
return errors;

}












  return <div className=' fixeW m-auto text-end mt-5'>
  <form  onSubmit={formik.handleSubmit}>
  <h2 className='my-2'> دخول</h2>
  {messageError.length >0?<div className=" text-danger small" role="alert">
  الايميل او الباسورد غير صحيح , برجاء التأكد منهم</div>:null}

<label  className='fs-4' htmlFor="email">  البريد الالكتروني/ اسم المستخدم</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder='اكتب البريد الالكتروني / اسم المستخدم' className='form-control mb-2 text-end' type="email" name="email" id="email" />
{formik.errors.email && formik.touched.email?
      <div className=" text-danger small" role="alert">
     {formik.errors.email}
    </div>:null}
<div className="password position-relative">

<label  className='fs-4' htmlFor="password">  كلمة المرور</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} placeholder=' اكتب كلمة المرور' className='form-control mb-2 text-end'  type={showPassword?"text":"password"} name="password" id="password"  />
{showPassword?<i onClick={HidePasswordOne} className="fa-regular fa-eye eyeHide"></i>:<i onClick={showPasswordOne}  className ="fa-regular  fa-eye-slash eyeHide"></i>}

</div>
{formik.errors.password && formik.touched.password?
      <div className=" text-danger small" role="alert">
     {formik.errors.password}
    </div>:null}

<div className="form-check text-end ">
  <label className="colorTr" htmlFor="flexCheckDefault ">
  تذكرني 
  </label>
    <input className="form-check- mx-2" type="checkbox" value="" id="flexCheckDefault" />
</div>

<Link to="/forGetPassword" className='colorDef text-decoration-none'>هل نسيت كلمة المرور ؟</Link>

<div className="item text-center">

<button  className='px-4  mainButton rounded-2 py-1   mb-2 text-center w-100 ' type="submit"> تسجيل الدخول</button>
<p >    هل ليست لديك حساب ؟ <Link   to="/register" className='colorDef text-decoration-none '> سجيل حساب جديد</Link>  </p>
</div>





  </form>

  </div>
}
