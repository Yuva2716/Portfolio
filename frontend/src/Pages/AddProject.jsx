import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/AddProject.css'
import Swal from 'sweetalert2'

import contactimg1 from '../assets/AI-img-11.png'
import contactimg2 from '../assets/AI-img-12.png'
import contactimg3 from '../assets/AI-img-13.png'
import contactimg4 from '../assets/AI-img-14.png'
import contactimg5 from '../assets/AI-img-15.png'

const AddProject = () => {
    const [newproject, setNewproject] = useState({
        title:"",
        description:"",
        category:"",
        link:"",
        image:"",
      })
    
      const handleChange = (e) => {
        const {name,value} = e.target
        setNewproject({...newproject,[name]:value})
      }
    
      const handleImageUpload = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = ()=>{
          setNewproject({...newproject, image:reader.result})
        }
        if(file) {
          reader.readAsDataURL(file)
        }
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('https://portfolio-o69y.onrender.com',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newproject)
        })
        if (response.ok){
          Swal.fire({
            title: "Project added Successfully!",
            text: "",
            icon: "success"
          });          
          setNewproject({title:'',description:'',category:'',link:'',image:''})
        }else{
          alert('Failed to add project')
        }
      }



  return (
    <>
        <Navbar />
        <div className='Admin-page'>
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
        <form className='Add-project-form' onSubmit={handleSubmit}>
          <h2 className='text-center text-light'>Add new Projects</h2>
          <label>Project Title</label>
          <input 
            type="text"
            name='title'
            placeholder='Enter Project Title'
            value={newproject.title}
            onChange={handleChange}
            required
          />
          <label>Project Description</label>
          <textarea 
            name='description'
            placeholder='Enter Project Description'
            value={newproject.description}
            onChange={handleChange}
            required
          />
          <label>Project category</label>
          <input 
            type="text"
            name='category'
            placeholder='Enter Project category'
            value={newproject.category}
            onChange={handleChange}
            required
          />
          <label>Project Link</label>
          <input
            type="text"
            name='link'
            placeholder='Enter Project link'
            value={newproject.link}
            onChange={handleChange}
            required
          />
          <label>Image URL</label>
          <input
            type="text"
            name='image'
            placeholder='Image URL'
            value={newproject.image}
            onChange={handleChange}
            required
          />
          <input
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
          />
          <button type='submit'>Add Project</button>
        </form>
      </div>      
    </>
  )
}

export default AddProject