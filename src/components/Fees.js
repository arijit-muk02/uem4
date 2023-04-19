import React from 'react'
import '../assets/fees.css';
import { Link } from 'react-router-dom';
export default function fees() {
  return (
    <>
    <>
  <section className="alert alert-danger">
    <div className="container">
      <div className="textsfees">
        <h4 className="alert-link">
          For online payment related query please mail to{" "}
          <a href="fees@uem.edu.in">fees@uem.edu.in</a> with
        </h4>
        <ol>
          <li>Enrollment Number</li>
          <li>College Name</li>
          <li>Name</li>
          <li>Contact Number</li>
          <li>Payment Date</li>
          <li>Transaction ID.</li>
        </ol>
        <h4 className="font-weight-bold">
          Due to Debit/Credit Card limits,It's advisable to use net banking.
        </h4>
      </div>
    </div>
  </section>
  <section className="fees">
    <div className="container text-center table-sm" style={{ paddingLeft: 0 }}>
      <table className="feestable table-bordered border-primary table table-striped table-condensed">
        <thead>
          <tr>
            <th>Semester</th>
            <th>Due Date</th>
            <th>Fees</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2nd Sem</td>
            <td>2012/05/06</td>
            <td>70000</td>
            <td>
              <span className="btn-success btn label label-success">Paid</span>
            </td>
          </tr>
          <tr>
            <td>3rd Sem</td>
            <td>2012/05/06</td>
            <td>70000</td>
            <td>
              <span className="btn-success btn label label-success">Paid</span>
            </td>
          </tr>
          <tr>
            <td>4th Sem</td>
            <td>2012/05/06</td>
            <td>70000</td>
            <td>
              <span className="btn-success btn label label-success">Paid</span>
            </td>
          </tr>
          <tr>
            <td>5th Sem</td>
            <td>2012/05/06</td>
            <td>70000</td>
            <td>
              <span className="btn-warning btn label label-success">
                Pay Now
              </span>
            </td>
          </tr>
          <tr>
            <td>6th Sem</td>
            <td>2012/05/06</td>
            <td>70000</td>
            <td>
              <span className="btn-warning btn label label-success">
                Pay Now
              </span>
            </td>
          </tr>
          <tr>
            <td>7th Sem</td>
            <td>2012/05/06</td>
            <td>70000</td>
            <td>
              <span className="btn-warning btn label label-success">
                Pay Now
              </span>
            </td>
          </tr>
          <tr>
            <td>8th Sem</td>
            <td>2012/05/06</td>
            <td>70000</td>
            <td>
              <span className="btn-warning btn label label-success">
                Pay Now
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <div className="text-center">
    <Link className='btn btn-primary' to="/about">Back</Link>
  </div>
</>

    </>
  )
}
