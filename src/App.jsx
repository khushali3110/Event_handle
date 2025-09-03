import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"

function App(){

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    hobbies: [],
    course: "",
    address: "",
    fees: ""
  })

  const [submittedData, setSubmittedData] = useState(null)

 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        if (checked) {
          return { ...prev, hobbies: [...prev.hobbies, value] };
        } else {
          return { ...prev, hobbies: prev.hobbies.filter((hobby) => hobby !== value) };
        }
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)   
    setFormData({ name:"",
       email:"",
        gender:"",
         hobbies:[], 
         course:"",
          address:"",
           fees:"" })
  }

  return (
    <div className="col-lg-7 mx-auto my-4 p-5 shadow rounded-2 bg-light">
      <form onSubmit={handleSubmit} className="w-100">
        <h2 className="text-center text-dark mb-4">Student Registration Form</h2>

       
        <div className="mt-4">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        
        <div className="mt-4">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

       
        <div className="mt-4 ">
          <label className="me-3">Gender:</label>

          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              className="form-check-input" 
              id="male" 
              name="gender" 
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              className="form-check-input" 
              id="female" 
              name="gender" 
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>

      
        <div className="mt-4">
          <label className="me-3">Hobbies:</label>

          {["reading", "sports", "music"].map((hobby) => (
            <div className="form-check form-check-inline" key={hobby}>
              <input 
                type="checkbox" 
                className="form-check-input" 
                id={hobby} 
                name="hobbies"
                value={hobby}
                checked={formData.hobbies.includes(hobby)}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={hobby}>
                {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
              </label>
            </div>
          ))}
        </div>

       
        <div className="mt-4">
          <select 
            className="form-select"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="" disabled>--select course--</option>
            <option value="bca">BCA</option>
            <option value="bsc">BSc</option>
            <option value="bcom">BCom</option>
          </select>
        </div>

      
        <div className="mt-4">
          <textarea 
            className="form-control" 
            placeholder="Enter Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        
      <div className="mt-4">
  <input 
    type="number" 
    className="form-control" 
    placeholder="Enter Fees"
    name="fees"
    value={formData.fees}
    onChange={(e) => 
      setFormData({ ...formData, [e.target.name]: Number(e.target.value) })
    }
  />
</div>




        <div className="mt-4 text-center">
          <button className="btn btn-dark px-4" type="submit">Submit</button>
        </div>
      </form>

   
      {submittedData && (
        <div className="mt-5">
          <h4 className="mb-3 text-center">📋 Submitted Data</h4>
          <table className="table table-bordered table-striped shadow">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{submittedData.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{submittedData.email}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{submittedData.gender}</td>
              </tr>
              <tr>
                <th>Hobbies</th>
                <td>{submittedData.hobbies.join(", ")}</td>
              </tr>
              <tr>
                <th>Course</th>
                <td>{submittedData.course}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{submittedData.address}</td>
              </tr>
              <tr>
                <th>Fees</th>
                <td>{submittedData.fees}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default App