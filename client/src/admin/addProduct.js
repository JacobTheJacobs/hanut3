import React, { useState } from "react";
import AdminPage from "./homeAdmin";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [sold, setSold] = useState(0);
  const [images, setImages] = useState([]);

  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <div>
      <AdminPage>
        <br></br>
        <div class="container" style={{ width: "40%" }}>
          <form>
            <h4 for="fname">שם מוצר</h4>
            <input
              type="text"
              id={name}
              name={name}
              placeholder="שם מוצר"
              style={{ width: "60%" }}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <h4 for="lname">מחיר</h4>
            <input
              type="number"
              id={price}
              name={price}
              placeholder="מחיר"
              style={{ width: "10%" }}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br></br>
            <h4 for="country">קטגוריה</h4>
            <select id="country" name="country" style={{ width: "30%" }}>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
            </select>
            <br></br>
            <h4 for="subject">תיאור</h4>
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
