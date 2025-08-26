import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from "react-hook-form"

function App(){

  const { register, handleSubmit, formState:{errors}, reset } = useForm()

  function submitForm(data){
    console.log(data)
    alert("form submitted")
    reset()
  }

  return (
    <div className="col-lg-7 mx-auto my-4 p-5 shadow rounded-2 bg-light">
      <form onSubmit={handleSubmit(submitForm)} className="w-100">

        {/* Heading */}
        <h2 className="text-center text-dark mb-4">Student Registration Form</h2>

        {/* Name */}
        <div className="mt-4">
          <input type="text" className="form-control" placeholder="Enter Name"
          {...register("name",{
            required:"Name is required",
            pattern:{
              value:/^[A-Za-z ]/,
              message:"Name must contain only letters"
            }
          })}/>
          <p className="text-danger">{errors?.name?.message}</p>
        </div>

        {/* Email */}
        <div className="mt-4">
          <input type="text" className="form-control" placeholder="Enter Email"
          {...register("email",{
            required:"Enter Email",
            pattern:{
              value:/^\S+@\S+$/i,
              message:"Enter valid email"
            }
          })}/>
          <p className="text-danger">{errors?.email?.message}</p>
        </div>

              {/* Gender (radio) */}
        <div className="mt-4 ">
          <label className="me-3">Gender:</label>

          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id='male' value="male" {...register("gender",
              {required:"Select gender"})}/>
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>

          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id='Female' value="female" {...register("gender",
              {required:"Select gender"})}/>
            <label className="form-check-label" htmlFor="Female">Female</label>
          </div>
            
          <p className="text-danger">{errors?.gender?.message}</p>
        </div>

        {/* Hobbies (checkbox) */}
        <div className="mt-4">
          <label className="me-3">Hobbies:</label>

          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input" id="reading" value="reading" {...register("hobbies",
              {required:"Select at least one hobby"})}/>
            <label className="form-check-label" htmlFor="reading">Reading</label>
          </div>

          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input" id="sports" value="sports" {...register("hobbies",
              {required:"Select at least one hobby"})}/>
            <label className="form-check-label" htmlFor="sports">Sports</label>
          </div>

          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input" id="music" value="music" {...register("hobbies",
              {required:"Select at least one hobby"})}/>
            <label className="form-check-label" htmlFor="music">Music</label>
          </div>

          <p className="text-danger">{errors?.hobbies?.message}</p>
        </div>



        {/* Course (dropdown) */}
        <div className="mt-4">
          <select className="form-select"
          {...register("course",{
            required:"Please select course"})}>
            <option value="" selected disabled >--select course--</option>
            <option value="bca">BCA</option>
            <option value="bsc">BSc</option>
            <option value="bcom">BCom</option>
          </select>
          <p className="text-danger">{errors?.course?.message}</p>
        </div>

        {/* Address (textarea) */}
        <div className="mt-4">
          <textarea className="form-control" placeholder="Enter Address"
          {...register("address",{
            required:"Enter Address",
            minLength:{
              value:10,
              message:"Address must be at least 10 characters"
            }
          })}></textarea>
          <p className="text-danger">{errors?.address?.message}</p>
        </div>

               {/* Fees (textbox number only) */}
        <div className="mt-4">
          <input type="number" className="form-control" placeholder="Enter fees"
          {...register("Fees",{
            required:"Fees is required",
            pattern:{
              value: /^[0-9]+$/,
              message: "Price must be a valid number"
            },
            min:{
              value:9500,
              message:"Fees must be at least 9500"
            },
            max:{
              value:18500,
              message:"Fees cannot exceed 18500"
            }
          })}/>
          <p className="text-danger">{errors?.Fees?.message}</p>
        </div>


        <div className="mt-4 text-center">
          <button className="btn btn-dark px-4" type="submit">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default App
