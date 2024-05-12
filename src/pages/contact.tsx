import { FormEvent } from "react";
import Wrapper from "../../components/wrapper"


const ContactPage = () => {
    const validateForm = (e:FormEvent) => {
        e.preventDefault(); 
        
        // const fname = document.querySelector("#fname")?.nodeValue;
        // const lname = document.querySelector("#lname")?.nodeValue;
        // const number = document.querySelector("#number")?.nodeValue;
        // const email = document.querySelector("#email")?.nodeValue;
        // const content = document.querySelector("#content")?.nodeValue;

        // if (!fname)   return alert("First Name is null!");
        // if (!lname)   return alert("Last Name is null!");
        // if (!number)  return alert("Number is null!");
        // if (!email)   return alert("Email is null!");
        // if (!content) return alert("Content is null!");
    }

    return (
        <Wrapper>
            <div className="h-full pt-40 " style={{"backgroundImage":"url('/smoke.jpg')"}}>
                <div className="w-1/2 m-auto text-center border-solid border-black border-2 py-20" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
                    <form className="w-fit flex flex-col md:flex-row px-12" method="POST" action="/api/contactsubmit">
                        <div className="w-1/2">
                            <input required className="w-60 p-2 my-1 focus:outline-none" placeholder="First Name" type="text" name="fname" id="fname" maxLength={20} />
                            <input required className="w-60 p-2 my-1 focus:outline-none" placeholder="Last Name" type="text" name="lname" id="lname" maxLength={20}/>
                            <input required className="w-60 p-2 my-1 focus:outline-none" placeholder="Email Address" type="email" name="email" id="email" max={50} />
                            <input className="w-60 p-2 my-1 focus:outline-none" placeholder="Phone Number" type="tel" name="phone" id="phone" max={15}/>
                            <input className="w-60 p-2 m-1 bg-green-600 text-white hover:cursor-pointer" type="submit" value="SUBMIT" />
                        </div>
                        <textarea required className="w-full p-4 focus:outline-none resize-none" name="content" id="content" placeholder="Tell us about your experience. Go into as much detail as possible" ></textarea>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default ContactPage;