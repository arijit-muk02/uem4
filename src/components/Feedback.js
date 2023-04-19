import React from 'react';
import '../assets/feedback.css';
import { Link } from 'react-router-dom';
export default function Feedback() {
  return (
    <div>
      <div className="container mt-3">
        <form className='form1' action="mailto:fees@uem.edu.in" method="post" encType="text/plain">
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" type="text" name="name" placeholder="Enter Your Name" />
            <br />
            <label>Email</label>
            <input className="form-control" type="email" name="email" placeholder="Enter Your Email" />
            <br />
            <label>Semester</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <br />
            <label>Phone</label>
            <input className="form-control" type="number" name="phone" placeholder="Enter Your Contact" />
            <br />
            <label>Image upload</label>
            <input className="form-control" type="file" name="image" value="" accept="image/jpeg" />
            <br />
            <label>Your Feedback</label>
            <input className="form-control form-control-lg" type="text" name="text" placeholder="Write Down Your Feedback Here" />
            <br />
            <input className="update btn-lg btn-block" type="submit" name="" />
          </div>
        </form>
        <div className="text-center">
  <Link to="/about" className='btn my-3 btn-primary'>Back</Link>
</div>
      </div>
    </div>
  );
}
