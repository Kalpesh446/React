import React, { useEffect, useState } from "react";
import "./index.css";

const CrudeApp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthData: "",
  });

  // const [data, setData] = useState({ name: "", email: "" });
  // const [user, setUser] = useState(() => {
  //   const storedData = localStorage.getItem("userData");
  //   return storedData ? JSON.parse(storedData) : [];
  // });
  // const [editingIndex, setEditingIndex] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify(user));
  // }, [user]);

  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (data.name === "" || data.email === "") {
  //     alert("Please fill in all fields");
  //   } else if (editingIndex != null && editingIndex !== undefined) {
  //     const updatedUser = [...user];
  //     updatedUser[editingIndex] = data;
  //     setUser(updatedUser);
  //     setEditingIndex(null);
  //   } else {
  //     setUser([...user, data]);
  //   }
  //   setData({ name: "", email: "" });
  // };

  // const handleAllDelete = () => {
  //   setUser([]);
  // };

  // const handleDelete = (i) => {
  //   const updatedUser = user.filter((e, index) => index !== i);
  //   setUser(updatedUser);
  // };

  // const handleEdit = (e, i) => {
  //   setData({ ...data, name: e.name, email: e.email });
  //   setEditingIndex(i);
  // };

  return (
    <>
      <h1 className="text-center">React</h1>
      <form className="w-50 m-auto">
        <div className="mb-3">
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input className="form-control" type="text" name="firstName" value={formData.firstName} placeholder="Enter your first name" />
          </div>
          <br />
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input className="form-control" type="text" name="lastName" value={formData.lastName} placeholder="Enter your last name" />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label>
            <input className="form-control" type="email" name="email" value={formData.email} placeholder="Enter your Email Id" />
          </div>
          <br />
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input className="form-control" type="number" name="phoneNumber" value={formData.phoneNumber} placeholder="Enter your Phone Number" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input className="form-control" type="password" name="password" value={formData.password} placeholder="Enter your password" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Confirm Password:</label>
            <input className="form-control" type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Enter your confirm password" />
          </div>
          <br />
          <div>
            <label htmlFor="gender">Gender :</label>
            <select name="gender" value={formData.gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
      </form>

      {/* {user.length > 0 ? (
        <table className="table w-50 m-auto table-striped table-responsive-lg border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
              <th>
                <button className="btn btn-danger ms-4" onClick={handleAllDelete}>
                  Delete All
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {user?.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => handleEdit(e, i)}>
                      Edit
                    </button>
                  </td>
                  <td className="border border-slate-700">
                    <button className="btn btn-danger" onClick={() => handleDelete(i)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )} */}
    </>
  );
};

export default CrudeApp;
