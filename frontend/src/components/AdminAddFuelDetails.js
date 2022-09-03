import React,{useState} from "react"
import axios from "axios";


export default function AddFuelDetails(){

    
    const[fueltype, setfueltype]= useState("");
    const[fuelquality, setfuelquality]= useState("");
    const[cypetcoitemno, setcypetcoitemno]= useState("");
    const[price, setprice]= useState("");
    const[priceupdateddate, setpriceupdateddate]= useState("");
    const[description, setdescription]= useState("");
    

    function sendData(e){
        e.preventDefault();
        const newfueldetail={
          
          fueltype,
          fuelquality,
          cypetcoitemno,
          price,
          priceupdateddate,
          description
        }
        //console.log(newfueldetail);
        axios.post("http://localhost:8000/fueldetail/add",newfueldetail).then(()=>{
          alert("Fuel Detais added")
        }).catch((err)=>{
           alert(err)
        })  
    }

    return(
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/admin_panel/home"style={{color:"red "}}>Fuel Details Management</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/admin_panel/accommodation_admin">All Fuel Details <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin_panel/accommodation_admin/addnew">Add new Fuel Details</a>
      </li>
      

     
    </ul>

  </div>
</nav>
<br/><br/><br/><br/><br/>
      
     <div className="container">
        <form className="row g-3 needs-validation" novalidate onSubmit={sendData}>
          
          <div className="col-md-4">
            <label for="name" className="form-label">fueltype</label>
            <select id="inputState" class="form-control" required
             onChange={(e)=>{
                setfueltype(e.target.value)

            }}>
            <option selected></option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Kerosene</option>
            </select>
          </div>
          

          <div className="col-md-4">
            <label for="type_ID" className="form-label">Quality</label>
            <select id="inputState" class="form-control" required
            onChange={(e)=>{
                setfuelquality(e.target.value)

            }}>
              <option selected></option>
            <option>Octane 92</option>
            <option>Octane 93</option>
            <option>Octane 95</option>
            <option>Auto Diesel</option>
            <option>4 Star Euro 4</option>
            <option>Lanka Kerosene</option>
            <option>Lanka Industrial Kerosene</option>
            </select>
            
            <div className="valid-feedback">
              
            </div>

          </div>
          <div className="col-md-4">
            <label for="type_ID" className="form-label">cypetco item no</label>
            <select id="inputState" class="form-control" required
            onChange={(e)=>{
                setcypetcoitemno(e.target.value)

            }}>
            <option selected></option>
            <option>A0023L99 octane 92</option>
            <option>A0018L99 Octane 93</option>
            <option>A0013L95 Octane 95</option>
            <option>A0045L77 auto</option>
            <option>A0041222 supper</option>
            <option>A0015256 lanka</option>\
            <option>A0017423 industrial</option>

        
            </select>
            <div className="valid-feedback">
              
            </div>

          </div>
          <div className="col-md-4">
            <label for="price" className="form-label">price</label>
            <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
             onChange={(e)=>{
                setprice(e.target.value)

            }}/>
           
            <div className="valid-feedback">
              
            </div>

          </div>
          <div className="col-md-4">
            <label for="priceupdateddate" className="form-label">priceupdateddate</label>
              <input type="date" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
              onChange={(e)=>{
                setpriceupdateddate(e.target.value)
            }}/>
              <div id="validationServerUsernameFeedback" className="invalid-feedback">
                
              </div>
          </div>

          
         
          <div className="col-md-3">
            <label for="description" className="form-label">description</label>
            <input type="text" className="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
             onChange={(e)=>{
                setdescription(e.target.value)

            }}/>
           
            <div id="validationServer05Feedback" className="invalid-feedback">
              Please provide a valid phone number.
            </div>

          </div>
          
         <br/>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
    </div> 
   </div>
    )
}