import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const FormwithYup = () => {
  // form Data state to store
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
    birthDate: "",
  });

  const [errors, setErrors] = useState({});

  // To store Localstorage
  const [users, setUsers] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(users));
  }, [users]);

  // Validation with Yup liabrary
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required").email("Invalid Email formate"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number Must be 10 digits")
      .required(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match")
      .required("Confirm Password is required"),
    age: Yup.number().typeError("age must be number").min(18, "You must be at least 18 years old").max(100, "You cannot be older than 100 years").required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array().min(1, "Select at least one interest").required("Select at least one interest"),
    birthDate: Yup.date().required("Date of Birth is required"),
  });

  // checkbox handle function
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    let updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter((interest) => interest !== name);
    }
    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  // input change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
    } catch (error) {
      console.log(error.inner);
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };
  // submit handle function
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      if (editingIndex !== null) {
        // If editing, update the user at editingIndex
        const updatedUsers = [...users];
        updatedUsers[editingIndex] = formData;
        setUsers(updatedUsers);
        setEditingIndex(null); // Reset editing index
      } else {
        // If not editing, add a new user
        setUsers([...users, formData]);
      }

      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthDate: "",
      });
    } else {
      console.log("Form Validation Failed");
    }
  };

  // delete handle function
  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  // handler edit function
  const handleEdit = (e, i) => {
    setFormData({
      ...formData,
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      phoneNumber: e.phoneNumber,
      password: e.password,
      confirmPassword: e.confirmPassword,
      age: e.age,
      gender: e.gender,
      interests: e.interests,
      birthDate: e.birthDate,
    });
    setEditingIndex(i);
  };

  // delete all form value function
  const handleAllDelete = () => {
    setUsers([]);
  };

  return (
    <>
      <h1 className="text-center">React</h1>
      <form className="w-50 mx-auto">
        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input className="form-control" type="text" name="firstName" value={formData.firstName} placeholder="Enter your first name" onChange={handleChange} />
          {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
        </div>
        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="lastName">Last Name:</label>
          <input className="form-control" type="text" name="lastName" value={formData.lastName} placeholder="Enter your last name" onChange={handleChange} />
          {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
        </div>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input className="form-control" type="email" name="email" value={formData.email} placeholder="Enter your Email Id" onChange={handleChange} />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        {/* Phone number */}
        <div className="mb-3">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input className="form-control" type="tel" name="phoneNumber" value={formData.phoneNumber} placeholder="Enter your Phone Number" onChange={handleChange} />
          {errors.phoneNumber && <div style={{ color: "red" }}>{errors.phoneNumber}</div>}
        </div>
        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input className="form-control" type="password" name="password" value={formData.password} placeholder="Enter your password" onChange={handleChange} />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>
        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input className="form-control" type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm your password" onChange={handleChange} />
          {errors.confirmPassword && <div style={{ color: "red" }}>{errors.confirmPassword}</div>}
        </div>
        {/* Age */}
        <div className="mb-3">
          <label htmlFor="age">Age :</label>
          <input className="form-control" type="number" name="age" value={formData.age} placeholder="Confirm your age" onChange={handleChange} />
          {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
        </div>
        {/* Gender */}
        <div className="mb-3">
          <label htmlFor="gender">Gender:</label>
          <select className="form-select ms-2" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div style={{ color: "red" }}>{errors.gender}</div>}
        </div>
        {/* Interest */}
        <div className="mb-3">
          <label htmlFor="interest">Interest:</label>
          <div>
            <label className="form-check-label ms-2">
              <input type="checkbox" name="coding" checked={formData.interests.includes("coding")} className="form-check-input" onChange={handleCheckboxChange} />
              Coding
            </label>
            <label className="form-check-label ms-2">
              <input type="checkbox" name="sports" checked={formData.interests.includes("sports")} className="form-check-input" onChange={handleCheckboxChange} />
              Sports
            </label>
            <label className="form-check-label ms-2">
              <input type="checkbox" name="reading" checked={formData.interests.includes("reading")} className="form-check-input" onChange={handleCheckboxChange} />
              Reading
            </label>
            {errors.interests && <div style={{ color: "red" }}>{errors.interests}</div>}
          </div>
        </div>
        {/* BirthDate */}
        <div className="mb-3">
          <label htmlFor="birthDate">Birthdate:</label>
          <input className="form-control" type="date" name="birthDate" placeholder="Enter Your BirthDate" onChange={handleChange} />
          {errors.birthDate && <div style={{ color: "red" }}>{errors.birthDate}</div>}
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      {/* show all user form data */}
      {users.length > 0 ? (
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Password</th>
              <th scope="col">Confirm Password</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Interest</th>
              <th scope="col">Birth Date</th>
              <th scope="col">Actions</th>
              <th scope="col">
                <button className="btn btn-danger ms-4" onClick={handleAllDelete}>
                  Delete All
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((e, i) => (
              <tr key={i}>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.phoneNumber}</td>
                <td>{e.password}</td>
                <td>{e.confirmPassword}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>{e.interests.join(", ")}</td>
                <td>{e.birthDate}</td>
                <td>
                  <button className="btn btn-success" onClick={() => handleEdit(e, i)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(i)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};

export default FormwithYup;
