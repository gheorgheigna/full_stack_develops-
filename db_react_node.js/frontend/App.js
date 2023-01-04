import React,{useState,useEffect} from 'react'
import Axios from 'axios'
//import {useParams} from 'react-router-dom'
import validator from 'validator'
import './App.css'
import styles from './mystyle.module.css';


let dag={};
let dag1={};

function App() {
    
    //submitt constatant
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(true);    
    
    const [username,setUserName_s] = useState("");
    const [passwordd,setPasswordd_s] = useState("");
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const type_of_user="user";

   //login const

    
    const [post,setPost] = useState("");
    const [title,setTitle] = useState("");
    const [username_post,setUserName] = useState("");
    const [passwordd_post,setPasswordd] = useState("");
    

   //login function 
   const login=(()=>{
    Axios.post(`http://localhost:3002/api/getFromId/`,{username1: username_post, passwordd1:passwordd_post} ).then((data)=>{
        setPost({
          
            a:data.data[0].type_of_user
           });
           
          
          if (post.a=="admin") {
            setPost({message:"you are login as admin",});
          } ;
          if (post.a=="user") {
            setPost({message:"welcome loser user",});
          };
         
          
    }).catch((err) => {
        console.error("invalid credentials");
        setPost({
            
            message:"invalid credentials",
           
           });
    })
});
    
   const listdb=(()=>{
    Axios.get(`http://localhost:3002/api/get`).then((data)=>{
    
    
    console.log(data.data[0]);
    console.log(post.a);
       if (post.a==="admin") {
        dag=data.data[0];
        dag1=data.data[1];
        console.log(post.a+"caca");
       } 
    
     });
    
   });



//submit function

const validateEmail = email => {
    return validator.isEmail(email) && email.length > 0;
}

const submitPost = () => {
Axios.post('http://localhost:3002/api/create', {username: username, passwordd:passwordd, firstname:firstname, lastname:lastname, email:email,type_of_user})
}

useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email])

    
return (
  <div>
    <div >
                <label>Username: </label>
                <input type="text" onChange={(e)=> {
                    setUserName(e.target.value)
                }}/>
                <label>Passwordd: </label>
                <input type="text" onChange={(e)=>{
                    setPasswordd(e.target.value)
                }}/>
                <button onClick={login}>login</button>
            </div>
            <div ><h4 >{post.message}</h4>

             {post.a==="admin" &&  <button onClick={listdb}>listdb</button>}
    </div>
        <div>
             
      <div>
        <table>
        <tbody>
            <tr>
             {Object.values(dag).map((value, index) => {
               return (<td>{value}</td> );
             })}
            </tr>
            <tr>
            {Object.values(dag1).map((value, index) => {
               return (<td>{value}</td> );
             })}
            </tr>
        </tbody>
       </table>
       </div>
            
      
 <div>
    <table>
        <tbody>
       
      {Object.keys(dag).map((key, index) => {
        return (
          <tr key={index}>
            <td>
              {key}: {dag[key]}
            </td>
          </tr>
        );
      })}
      
      </tbody>
      </table>
    </div>

    
                  
   </div>   


     // submit code
     <div >
                <label>Username: </label>
                <input  type="text"  onChange={(e)=> {
                    setUserName_s(e.target.value)
                }}/>
                <label>Passwordd: </label>
                <input type="text" onChange={(e)=>{
                    setPasswordd_s(e.target.value)
                }}/>

                <label>Firstname: </label>
                <input type="text" onChange={(e)=> {
                    setFirstname(e.target.value)
                }}/>
                <label>Lastname: </label>
                <input type="text" onChange={(e)=>{
                    setLastname(e.target.value)
                }}/>
                <label>email: </label>
                <input value={email} type="text" onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>

        {(emailValid ===false) &&
        <h2>
          Please insert a valid email!
        </h2>||<button onClick={submitPost}>Submit Post</button>
      }


               
            </div>



   </div>
              
        
         
              

          
        )
    }
    
    
export default App;
