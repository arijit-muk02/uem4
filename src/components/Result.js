import React, { useState } from 'react';
import '../assets/result.css';
import { Link } from 'react-router-dom';
export default function Result() {
  const [selectedSemester, setSelectedSemester] = useState('');

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    window.location.href = event.target.value;
  };

  return (
    <>
      <div className="result-table container" style={{ marginTop: 25 }}>
        <table>
          <tbody>
            <tr>
              <td className="dataasked">Name</td>
              <td className="datagiven">Jerry</td>
            </tr>
            <tr>
              <td className="dataasked">Enrollment</td>
              <td className="datagiven">12548795652</td>
            </tr>
            <tr>
              <td className="dataasked">Registration</td>
              <td className="datagiven">30420450450</td>
            </tr>
            <tr>
              <td className="dataasked">Stream</td>
              <td className="datagiven">BTech</td>
            </tr>
            <tr>
              <td className="dataasked">Department</td>
              <td className="datagiven">CST</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div
          className="dropd input-group mb-3"
          style={{ width: '100%' }}
        >
          <div className="input-group-prepend">
            <label
              className="input-group-text"
              htmlFor="inputGroupSelect01"
            >
              Semester
            </label>
          </div>
          <select
            name="forma"
            className="custom-select"
            id="inputGroupSelect01"
            onChange={handleSemesterChange}
            value={selectedSemester}
          >
            <option value="">Choose...</option>
            <option value="/DemoResult">1st Semester</option>
            <option value="/DemoResult">2nd Semester</option>
            <option value="/DemoResult">3rd Semester</option>
          </select>
        </div>
        <div className="text-center">
  <Link to="/about" className='btn btn-primary'>Back</Link>
</div>
      </div>
    </>
  );
}
