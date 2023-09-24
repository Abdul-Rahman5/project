import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios';
export default function ForGetPasswordOne() {
  
  let navigate=useNavigate();

//messageError
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
 // end show and hide Password 
  // auth
      //validtion input
      let validationSchema=Yup.object({
        otp:Yup.string().required('رقم الهاتف مطلوب'),
        new_password:Yup.string().required('كلمه السر مطلوبه').min(8,'يجب ان لا تقل عن 8 احرف'),
        repassword:Yup.string().required('اعاده كلمه السر مطلوبه').oneOf([Yup.ref('new_password')],"كلمه السر و اعاده كلمه السر غير مطابقه"),
    
      });
         // send api to backend
  async function handelRepassword(values) {
    let {data}= await axios.post(`http://66.45.248.247:8000/auth/reset-password/`,values).catch((errr)=>{
      setmessageError(`${errr.response.data.email} `)
    });
    if (data.type === 'successful') {
  navigate("/forGetPasswordTwo")
  console.log('ture');
  }else{
    console.log('fales');
  }

     console.log(data.type);
     
   };
  let formik=useFormik({
    initialValues:{
      otp:'',
      new_password:'',
    },validationSchema,onSubmit:handelRepassword
  });

   //errors
   function validate(values) {
    let errors={};
    return errors;
    
  }



  return  <div className=' fixeW m-auto mt-5 text-end'>

  <form  onSubmit={formik.handleSubmit}>
  <h2 className='my-2'>تغــير كلـمة الـمرور </h2>

  {messageError.length >0?<div className="text-danger " role="alert">
  لقد قمت بأدخال كود تفعيل خاطئ</div>:null}


<label  className='fs-4' htmlFor="otp"> كود التفعيل </label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.otp} placeholder=' اكتب كود التفعيل' className='form-control mb-2 text-end' type="text" name="otp" id="otp" />
{formik.errors.otp && formik.touched.otp?
      <div className="text-danger small" role="alert">
     {formik.errors.otp}
    </div>:null}
<div className="password position-relative">
<label  className='fs-4' htmlFor="new_password">   كلمة المرور الجديدة</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.new_password} placeholder=' كلمة المرور الجديدة' className='form-control mb-2 text-end' type={showPassword?"text":"password"} name="new_password" id="new_password"  />
{showPassword?<i onClick={HidePasswordOne} className="fa-regular fa-eye eyeHide"></i>:<i onClick={showPasswordOne}  className ="fa-regular  fa-eye-slash eyeHide"></i>}
</div>
{formik.errors.new_password && formik.touched.new_password?
      <div className=" text-danger small" role="alert">
     {formik.errors.new_password}
    </div>:null}

<div className="password position-relative">
<label  className='fs-4' htmlFor="repassword">   إعادة كتابة كلمة المرور</label>
<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.repassword} placeholder='إعادة كتابة كلمة المرور' className='form-control mb-2 text-end' type={showPasswordTwo?"text":"password"} name="repassword" id="repassword" />
{showPasswordTwo?<i onClick={HidePasswordTwoP} className="fa-regular fa-eye eyeHide"></i>:<i onClick={showPasswordTwoP}  className ="fa-regular  fa-eye-slash eyeHide"></i>}

</div>
{formik.errors.repassword && formik.touched.repassword?
      <div className="text-danger small" role="alert">
     {formik.errors.repassword}
    </div>:null}
<div className="item text-center">

<button  className='px-4  mainButton rounded-2 py-1   mb-2 text-center w-100 ' type="submit"> تـأكــيد </button>
<p >   هل تذكرة كلمة المرور الأن ؟ <Link   to="/login" className='colorDef text-decoration-none '>   الي الخلف</Link>  </p>

</div>




  </form>

  </div>
}
