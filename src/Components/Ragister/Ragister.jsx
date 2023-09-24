import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios';
export default function Ragister() {
  let navigate=useNavigate();
  //
  const [messageError, setmessageError] = useState('')
  //start show and hide Password 
  const [showPassword, setshowPassword] = useState(false)
  const [showPasswordTwo, setshowPasswordTwo] = useState(false)
function showPasswordOne() {
  setshowPassword(true)
}
function HidePasswordOne() {
  setshowPassword(false)
}
function showPasswordTwoP() {
  setshowPasswordTwo(true)
}
function HidePasswordTwoP() {
  setshowPasswordTwo(false)
}
  // end show and hide Password 
  // auth
      //validtion input
      let validationSchema=Yup.object({
        username:Yup.string().required(' االاسم مطلوب').min(2,'يجب ادخال اكثر من حرفين  '),
        email:Yup.string().required('الايميل مطلوب').email('الايميل غير صحيح '),
        password:Yup.string().required('كلمه السر مطلوبه').min(8,'يجب ان لا تقل عن 8 احرف'),
        repassword:Yup.string().required('اعاده كلمه السر مطلوبه').oneOf([Yup.ref('password')],"كلمه السر و اعاده كلمه السر غير مطابقه"),
        phoneNumber:Yup.string().required('رقم الهاتف مطلوب'),
    
      })
      // send api to backend
  async function handelRegister(values) {
    let {data}= await axios.post(`http://66.45.248.247:8000/auth/register/`,values).catch((errr)=>{
      setmessageError(`${errr.response.data.email} `)
    });

   



    if (data.type === 'successful') {
  localStorage.setItem("userToken",data.token);
  navigate("/")
  console.log('ture');

  }else{
    console.log('fales');
  }
     console.log(data.type);
     
   }
  let formik=useFormik({
    initialValues:{
      username:'',
      email:'',
      phoneNumber:'',
      password:'',
    },validationSchema,onSubmit:handelRegister
  });
  //errors
  function validate(values) {
    let errors={};
    return errors;
    
  }




  return <div className=' fixeW m-auto text-end'>
  <h2 className='my-2'>إنشــاء حسـاب</h2>
  {messageError.length >0?<div className=" text-danger small" role="alert">
  البريد الإلكتروني مستخدم بالفعل، حاول استخدام بريد آخر</div>:null}
  <form  onSubmit={formik.handleSubmit}>

<label className='fs-4 ' htmlFor="username">الاسم بالكامل</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username} placeholder='الاسم بالكامل' className='form-control mb-2 text-end' type="text" name="username" id="username" />

{formik.errors.username && formik.touched.username?
      <div className=" text-danger small" role="alert">
     {formik.errors.username}
    </div>:null}


<label  className='fs-4' htmlFor="phoneNumber"> رقم الهاتف</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phoneNumber} placeholder='رقم الهاتف' className='form-control mb-2 text-end' type="tel" name="phoneNumber" id="phoneNumber" />
{formik.errors.phoneNumber && formik.touched.phoneNumber?
      <div className=" text-danger small" role="alert">
     {formik.errors.phoneNumber}
    </div>:null}

<label  className='fs-4' htmlFor="email"> البريد الالكتروني</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder='البريد الالكتروني' className='form-control mb-2 text-end' type="email" name="email" id="email" />
{formik.errors.email && formik.touched.email?
      <div className=" text-danger small" role="alert">
     {formik.errors.email}
    </div>:null}
<div className="password position-relative">
<label  className='fs-4' htmlFor="password">  كلمة المرور</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} placeholder='كلمة المرور' className='form-control mb-2 text-end' type={showPassword?"text":"password"} name="password" id="password"  />
{showPassword?<i onClick={HidePasswordOne} className="fa-regular fa-eye eyeHide"></i>:<i onClick={showPasswordOne}  className ="fa-regular  fa-eye-slash eyeHide"></i>}
</div>
{formik.errors.password && formik.touched.password?
      <div className=" text-danger small" role="alert">
     {formik.errors.password}
    </div>:null}


<div className="password position-relative">
<label  className='fs-4' htmlFor="repassword">   إعادة كتابة كلمة المرور</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.repassword} placeholder='إعادة كتابة كلمة المرور' className='form-control mb-2 text-end' type={showPasswordTwo?"text":"password"} name="repassword" id="repassword" />
{showPasswordTwo?<i onClick={HidePasswordTwoP} className="fa-regular fa-eye eyeHide"></i>:<i onClick={showPasswordTwoP}  className ="fa-regular  fa-eye-slash eyeHide"></i>}
</div>
{formik.errors.repassword && formik.touched.repassword?
      <div className=" text-danger small" role="alert">
     {formik.errors.repassword}
    </div>:null}


<p>بالضغط على تسجيل، أنت توافق على   <span className='colorDef'>أحكام وشروط</span> مسكني
</p>
<div className="item text-center">

<button  className='px-4  mainButton rounded-2 py-1   mb-2 text-center w-100 ' type="submit">ابدا الان</button>
<p >هل لديك حساب بالفعل ؟ <Link   to="/login" className='colorDef text-decoration-none'>تسجيل الدخول</Link>  </p>
</div>





  </form>

  </div>
}
