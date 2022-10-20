import React, { useState } from "react";
import axios from "axios";

export default function Login() {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newadmin = {
      username, password
    }

    axios.post("http://localhost:8000/admin/login/", newadmin).then((res) => {
      alert("Successfully Login.");
      console.log(res.data);
      window.location.href = "/admin";
    }).catch((err) => {
      alert(err)
    })
  }



  return (
    <div>
      <div className="row mt-5"></div>
      <div className="row">
        <h1 className="text-danger mt-5 b">Admin Login</h1>
        <div className="col-3"></div>
        <div class="col-lg-3 d-none d-lg-flex mt-5">
          <img src="https://th.bing.com/th/id/R.20bbaa9b4cea89e95432c5b758b27643?rik=M5NYN0z8vkGoIg&riu=http%3a%2f%2fwww.dataversity.net%2fwp-content%2fuploads%2f2011%2f08%2fOrange-Login-Button.jpg&ehk=5%2fKuZcYR9GuQFn5JLY5JAjuUSal2L6u7wgRTu4dPX%2bM%3d&risl=&pid=ImgRaw&r=0" alt="Trendy Pants and Shoes"
            class="w-100 " />
        </div>

        <div className="card col-3 mt-5 ">



          <form className="mt-5" onSubmit={sendData}>


            <div class="form-outline mb-4">
              <input type="username" id="username" class="form-control" required onChange={
                (e) => {
                  setusername(e.target.value);
                }
              } />
              <label class="form-label" for="form2Example1" >User Name</label>
            </div>


            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control" required onChange={
                (e) => {
                  setpassword(e.target.value);
                }
              } />
              <label class="form-label" for="form2Example2">Password</label>
            </div>


            <button type="button " class="btn btn-primary btn-block mb-4  form-control">Sign in</button>

            <button type="button " class="btn btn-danger btn-block mb-4  form-control" onClick={() => window.location.href = "/"}>Cancel</button>



          </form>

        </div>
      </div>


    </div>
  )

}