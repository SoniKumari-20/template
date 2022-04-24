
import { isValidElement, useState } from "react";

import data from "./mock.data.json";
const Sticker=()=>{
  const[employee, setEmployees] = useState(data);
  const [PHNO, setAge] = useState();
  const [STATE, setSTATE] = useState();
  const[NAME , setName] = useState();


    const[allsubmit, setAllsubmit] = useState({
      fullname: " ",
      phoneNo: " ",
      State: " "
  });


  const Submit =(e)=>{
    e.preventDefault();
    
    const Employeename = e.target.getAttribute('name')
    const Employeevalue = e.target.value;
    const newformdata = {...allsubmit};
    newformdata[Employeename] = Employeevalue;
    setAllsubmit(newformdata ) 
    };
    
  
const addsubmit=(e)=>{
  e.preventDefault();
    setEmployees(employee.concat(allsubmit));
};

  return(
<div>
<form onSubmit={addsubmit}>
<div className="col-6">
<label htmlFor="state" className="form-label">Employee name</label>
  <input 
  className="form-control"
  type="text"
  name="fullname"
  value={NAME}
  minLength={4}
  maxLength={15}
  required="required"
  onChange={Submit}
  ></input>
  </div>
  <div className="col-6">
  <label htmlFor="state" className="form-label">Employee phone no.</label>
    <input
    className="form-control"
  type="text"
  name="phoneNo"
  value={PHNO}
  minLength={10}
  maxLength={10}
  required="required"
  onChange={Submit}
  ></input>
  </div>
  <div className="col-6">
  <label htmlFor="state" className="form-label">State</label>
  <input
  className="form-control"
  type="text"
  name="State"
  required="required"
  value={STATE}
  onChange={Submit}
  ></input>
  </div>
  <button type='submit' onSubmit={addsubmit}>Submit</button> 
</form>
    <div>
<table className="table table-success table-striped">
  <thead>
    <tr className="tr" >
      <th scope="col">Sr no.</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">State</th>
    </tr>
  </thead>
  <tbody>

  {
  employee.map((select,id)=>
  
    <tr key={id} >
      <td>{id+1}</td>
      <td >{select.fullname}</td>
      <td>{select.phoneNo}</td>
      <td>{select.State}</td>
    </tr>
  )
  } 
  </tbody>
</table>
</div>
  
  </div>
  );
};
export default Sticker;