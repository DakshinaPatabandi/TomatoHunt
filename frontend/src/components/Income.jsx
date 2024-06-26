import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Income = () => {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8801/Income")
      .then((res) => setIncome(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8801/Income/" + id);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="flex-container-accountHome  vh-50">
      <div className="UpNavtitle">
        <p className="pt-5 UpNavtitle1">MyCoin</p>
        <p className="UpNavtitle2">Expenses Tracker Web Application</p>
      </div>

      <div className="container pt-2">
        <Navbar />

        <div className="aboutbox">
          <h1 className="pt-5 Incometopic">Add your income sources</h1>
        </div>

        <div className="flex-container-accountHome vh-50">
          <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">
              <Link to="/CreateIncome" className="btn btn-success">
                Add +
              </Link>
              <table className="table">
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>Income</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {income.map((data, i) => (
                    <tr key={i}>
                      <td>{data.Source}</td>
                      <td>{data.Income}</td>
                      <td>
                        <Link
                          to={`/UpdateIncome/${data.In_ID}`}
                          className="btn btn-primary"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={(e) => handleDelete(data.In_ID)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <div className="container mt-2 justify-content-center align-items-center d-flex  ">
                    <div className="mt-5  justify-content-center align-items-center rounded-2 p-5 formbox-Income">
                        <form action="" >
                            <div class="mb-3">
                                <label className="form-label"><strong>Section 01:</strong></label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Add</button>
                        </form>
                    </div>
                </div>

                <div className="container mt-2 justify-content-center align-items-center d-flex  ">
                    <div className="mt-5  justify-content-center align-items-center rounded-2 p-5 formbox-Income">
                        <form action="" >
                            <div class="mb-3">
                                <label className="form-label"><strong>Section 02:</strong></label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Add</button>
                        </form>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default Income;
