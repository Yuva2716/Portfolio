import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Contact.css'
import Swal from 'sweetalert2'
import contactimg1 from '../assets/AI-img-11.png'
import contactimg2 from '../assets/AI-img-12.png'
import contactimg3 from '../assets/AI-img-13.png'
import contactimg4 from '../assets/AI-img-14.png'
import contactimg5 from '../assets/AI-img-15.png'

const Contact = () => {
  const [result, setResult] = React.useState("");
  
 
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(
      <>        
        <div class="d-flex justify-content-center spinner-div">
            <div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
      </> 
    );
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY_HERE);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message send successfully!",
        icon: "success"
      });
      event.target.reset();
      setResult("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <>
    <Navbar />
    <div className="contact-page">
      <div className="cont-img">
        <img src={contactimg1} className='cont-img-1' alt="contact-imgs" />
        <img src={contactimg2} className='cont-img-2' alt="contact-imgs" />
        <img src={contactimg3} className='cont-img-3' alt="contact-imgs" />
        <img src={contactimg4} className='cont-img-4' alt="contact-imgs" />
        <img src={contactimg5} className='cont-img-5' alt="contact-imgs" />
        <img src={contactimg1} className='cont-img-6' alt="contact-imgs" />
        <img src={contactimg2} className='cont-img-7' alt="contact-imgs" />
        <img src={contactimg3} className='cont-img-8' alt="contact-imgs" />
        <img src={contactimg4} className='cont-img-9' alt="contact-imgs" />
        <img src={contactimg5} className='cont-img-10' alt="contact-imgs" />
      </div>

      <div className='contact-form-div'>
        <form className='contact-form' onSubmit={onSubmit}>
        <h2 className='contact-title'>Contact us</h2>
              <div className="input-box">
                <label>Full Name</label>
                <input type="text" className='field' placeholder='Enter your name' name='name' required />
              </div>
              <div className="input-box">
                <label>Email Address</label>
                <input type="text" className='field' placeholder='Enter your email' name='mail' required />
              </div>
              <div className="input-box">
                <label>Your Message</label>
                <textarea name='message' className='field mess' placeholder='Enter your message' required />
              </div>
              <button type='submit'>Send Message</button>
        </form>
        <span>{result}</span>

      </div>
    </div> 
    </>
  );
}

export default Contact