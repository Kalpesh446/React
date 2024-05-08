import React, { useEffect, useState } from "react";

const FakeApi = () => {
  const [data, setData] = useState([]);
  const BaseUrl = "https://fakestoreapi.com/products";

  const apiProduct = async () => {
    const response = await fetch(BaseUrl);
    const calljson = await response.json();
    setData(calljson);
  };

  useEffect(() => {
    apiProduct();
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ width: "50%" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>category</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((e) => e.price < 20)
              .map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.price}</td>
                    <td>{e.description}</td>
                    <td>{e.category}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FakeApi;
