
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvtwlozc6MqmbDUtZqB24H7wSI_FmNGH0",
  authDomain: "learnede-d62d9.firebaseapp.com",
  projectId: "learnede-d62d9",
  storageBucket: "learnede-d62d9.appspot.com",
  messagingSenderId: "267653568024",
  appId: "1:267653568024:web:08be8bc1528ba2841d156d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);


// const full_name=document.getElementById("rtext").value;

// const repassword=document.getElementById("rpassword2").value;

const submit=document.getElementById("btnSubmit");
submit.addEventListener("click",function(event){
  // event.preventDefault()
  
  const email=document.getElementById("remail").value;
  const password=document.getElementById("rpassword").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user=userCredential.user;
    // alert("Creating account")
    // Signed up 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
  });

})