import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Userdetails = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const storedUserList = localStorage.getItem("userList");
    if (storedUserList) {
      setUserList(JSON.parse(storedUserList));
    }
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.confirm_password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-container {
    max-width: 80vw;
    width: 100%;
    overflow-x: auto;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .styled-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  .styled-table th,
  .styled-table td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  .styled-table th {
    background-color: #f2f2f2;
    font-weight: bold;
    color: #333;
  }

  .styled-table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .styled-table tbody tr:hover {
    background-color: #ddd;
  }
`;

export default Userdetails;
