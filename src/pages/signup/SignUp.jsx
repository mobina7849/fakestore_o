import React from 'react';
import "./signup.style.scss";
import Container from '../../components/container/Container';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const inputrItems=[
        {
            id:"0",
            name:"نام",
            type:"text"
        },
        {
            id:"1",
            name:"نام خانوادگی",
            type:"text"
        },
        {
            id:"2",
            name:"ایمیل",
            type:"email"
        },
        {
            id:"3",
            name:"رمز عبور",
            type:"text"
        },
        {
            id:"4",
            name:"تکرار رمز عبور",
            type:"text"
        },
        {
            id:"5",
            name:"رمز عبور",
            type:"text"
        },
        {
            id:"6",
            name:"شماره تلفن",
            type:"number"
        },
        {
            id:"7",
            name:" آدرس",
            type:"text"
        },
        {
            id:"8",
            name:"پلتفرم محبوب",
            type:"text"
        }
    ]
    const inputlItems=[
        {
            id:"9",
            name:"ایمیل",
            type:"email" 
        },
        {
            id:"10",
            name:"رمز عبور",
            type:"password"
        }
    ]
    const nav=useNavigate()
    const handleNav=()=>{
            nav('/')
    }
    return ( 
        <Container>
        <div className='signUp'>
            <div className='signUpBack' onClick={handleNav}> &nbsp;برگشت به صفحه قبل</div>
            <div className='signUpInputs'>
                <div>
                    <h4>لطفا مشخصات خود را جهت ثبت نام وارد نمایید .</h4>
                    <form>
                        {inputrItems.map(inputr=>(
                         <div key={inputr.id} className="signup_right">
                            <label htmlFor="">{inputr.name}</label>
                            <input type={inputr.type}/>
                         </div>
                        ))}
                        <button className='btnSignUp' type={"submit"}>ثبت نام</button>
                    </form>
                </div>
                <div>
                    <h4>ثبت نام کرده اید ؟ وارد شوید.</h4>
                    <form >
                    {inputlItems.map(inputl=>(
                         <div key={inputl.id} className="signup_right">
                            <label htmlFor="">{inputl.name}</label>
                            <input type={inputl.type}/>
                         </div>
                        ))}
                        <button className='btnSignUp' type={"submit"}> ورود</button>
                    </form>
                </div>
            </div>
        </div>
        </Container>

     );
}
 
export default SignUp;