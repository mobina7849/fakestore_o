import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';

//import img from '../../assets/images/contact.png'
import './contactus.style.scss'
const ContactUs = () => {
    const nav3=useNavigate()
    const handleNav3=()=>{
        nav3('/')
    }
    return ( 
        <Container>
            <div className='contactBack' onClick={handleNav3}> &nbsp;برگشت به صفحه قبل</div>
            <div className='contactCard'>
                <h1>تماس با ما</h1>
                <div className='contactcontent'>
                 <div>
                    <label htmlFor="">نام</label>
                    <input type="text" />
                 </div>
                 <div>
                    <label htmlFor="">  نام خانوادگی</label>
                    <input type="text" />
                 </div>
                 <div>
                    <label htmlFor="">ایمیل</label>
                    <input type="email" />
                 </div>
                 <div>
                    <label htmlFor="">پیغام</label>
                    <textarea rows={5}>تایپ کنید...</textarea>
                 </div>
                 <div><button className='contactBtn'>ارسال</button></div>

                </div>



            </div>
        </Container>
     );
}
 
export default ContactUs;