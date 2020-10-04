import React, { useState, useEffect } from "react";
import AdminPage from "./homeAdmin";
import axios from "axios";

const url = "http://localhost:5000/category";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState([]);
  const [sold, setSold] = useState(0);
  const [images, setImages] = useState([]);

  const handleSubmit = () => {
    console.log(name);
  };

  useEffect(() => {
    let isSubscribed = true;
    async function fetchData() {
      const response = await axios.get(url);
      if (isSubscribed) {
        setCategory(response.data);
      }
    }
    fetchData();

    return () => (isSubscribed = false);
  }, []);

  return (
    <div>
      <AdminPage>
        <br></br>
        <div className="container" style={{ width: "40%" }}>
          <form>
            <h4>שם מוצר</h4>
            <input
              type="text"
              id={name}
              name={name}
              placeholder="שם מוצר"
              style={{ width: "60%" }}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <h4>מחיר</h4>
            <input
              type="number"
              id={price}
              name={price}
              placeholder="מחיר"
              style={{ width: "10%" }}
              onChange={(e) =>
                e.target.value < 0
                  ? (e.target.value = 0)
                  : setPrice(e.target.value)
              }
            />
            <br></br>
            <h4>קטגוריה</h4>
            <select id="country" name="country" style={{ width: "30%" }}>
              {category.map((cat, i) => (
                <option key={i} id={cat} value={cat}>
                  {cat.name}
                </option>
              ))}
            </select>
            <br></br>
            <h4>תיאור</h4>
            <textarea
              id={description}
              name={description}
              placeholder="תיאור"
              style={{ height: "200px", width: "100%" }}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <input
              type="button"
              className="fadeIn fourth"
              value="שמור"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </AdminPage>
    </div>
  );
};

export default AddProduct;
