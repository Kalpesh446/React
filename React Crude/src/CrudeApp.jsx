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

  const [errors, setErrors] = useState({});
  console.log(formData);

  // const [data, setData] = useState({ name: "", email: "" });
  // const [user, setUser] = useState(() => {
  //   const storedData = localStorage.getItem("userData");
  //   return storedData ? JSON.parse(storedData) : [];
  // });
  // const [editingIndex, setEditingIndex] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify(user));
  // }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Rgular expression for basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidPassword = (password) => {
    // regular expression for password validation
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return password.length >= 8 && symbolRegex.test(password) && numberRegex.test(password) && upperCaseRegex.test(password) && lowerCaseRegex.test(password);
  };

  const isValidAge = (age) => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };

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

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email formate";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "PhoneNumber is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Must be 10 digit";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.phoneNumber)) {
      newErrors.password = "Password must be at least 8 characters long and contain at least one symbol, one number";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required ";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
    }
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!isValidAge(formData.age)) {
      newErrors.age = "You must be least 18 years old and not older than 100 years";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.interests.length === 0) {
      newErrors.interests = "Select at least one interest";
    }
    if (!formData.birthData) {
      newErrors.birthData = "Date of birth required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      console.log("Form Submitted", formData);
    } else {
      console.log("Form Validation Failed");
    }
  };
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
          <input className="form-control" type="date" name="birthdate" placeholder="Enter Your BirthDate" onChange={handleChange} />
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
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
