import {useFormik} from 'formik';
import * as Yup from 'yup'

function App() {
  const formik=useFormik({
    initialValues:{
      username:"",
      email:"",
      password:"",
      gender:""
    },

    validationSchema:Yup.object({
        username:Yup.string()
                    .max(10,"cannot exceed 10 characters")
                    .required("this firld cannot be empty!"), 

       email:Yup.string()
                .required("this field cannot be empty"),
      password:Yup.string()
                  .min(5,"password should be min 5 characters")
                  .max(12,"password should be maximum 12 characters")
                  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_#@*])/,"Password should contain atleast 1 lowercase letter ,1 uppercase letter,1 number,1 special character")      
                  .required("this field cannot be empty"),
    
        gender:Yup.string()
                   .required("select atleast one") 
                }),

    

    onSubmit:(values)=>{
      alert(JSON.stringify(values))
    }
  })
  return (
    <div><form onSubmit={formik.handleSubmit}>
      <label>Username </label>
    <input 
          type="text"
          name="username"
          placeholder="Enter name"
          onChange={formik.handleChange}
          value={formik.values.username}
          /><br></br><br></br>
          {formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}

      <label>Email  </label>
    <input 
            type="email"
            name="email" 
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
   
            /> <br></br><br></br>
     {formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
       <label>Password </label>     
    <input 
            type="password"
            name="password" 
            placeholder="Enter password"
            onChange={formik.handleChange}
            value={formik.values.password}   
            /><br></br><br></br>
           {formik.errors.password && <p style={{color:"red"}}>{formik.errors.password}</p>}
          
       <label>Gender</label><br/>
       <label>Male</label>   
     <input type='radio'
            name='gender'
            onChange={formik.handleChange}
            value="MALE"/>

        <label>Female</label>    
    <input type='radio'
            name='gender'
            onChange={formik.handleChange}
            value="FEMALE"/>   
   {formik.errors.gender && <p style={{color:"red"}}>{formik.errors.gender}</p>}
   

   <br/><button type="submit">Submit</button>
    </form>
    </div>
);
}

export default App;
