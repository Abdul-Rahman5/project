import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ForGetPasswordTwo() {
let navigate=useNavigate();

function navigateFun() {
  console.log("done");
  navigate("/");
}

  return <div className="">
    
  <div className="layout">
  </div>
  <div className='w-100  d-flex justify-content-center     text-end'>

<div className="boxInFor    pb-3 w-25 bg-body text-center px-4 pt-5 rounded-2 shadow ">
  <i className="fa fa-check-circle colorDef fa-3x" aria-hidden="true"></i>
  <p className='m-0 fs-4 '>تم تعيين كلمة المرور بنجاح</p>
  <p className='colorTr fontSmall'>تم تعيين كلمة المرور الخاصة بك. الاستمرار في الصفحة الرئيسية</p>
<button onClick={navigateFun}  className='px-4  mainButton rounded-2 py-1   mb-2 text-center w-100 ' type="submit"> ابدا الأن </button>



</div>


</div>
<div className=' fixeW m-auto pt-5 text-end mt-5 layoutOne' >
  <form  action="" method="get">
  <h2 className='my-2'> هل نسيت كلمة المرور</h2>

<label  className='fs-4' htmlFor="email">  البريد الالكتروني  </label>
<input placeholder='اكتب البريد الالكتروني ' className='form-control mt-2 mb-3 mb-2 text-end' type="email" name="email" id="email" />




<div className="item text-center">

<button  className='px-4  mainButton rounded-2 py-1   mb-2 text-center w-100 ' type="submit"> التالي </button>
<p >   هل تذكرة كلمة المرور الأن ؟ <Link   to="/login" className='colorDef text-decoration-none '>   الي الخلف</Link>  </p>

</div>





  </form>

  </div>
  </div>
  


 
  
}
