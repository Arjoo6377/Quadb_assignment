import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleShow } from "../apis";
import styles from "../modules/Show.module.css";

const SingleShow = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    showName: "",
    name: "",
    mobile: "",
    bankDetails: "",
  });

  useEffect(() => {
    getSingleShow(id)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("formData", JSON.stringify(formData));

    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <h3>"{data.name}" summary</h3>
        <p>{data.summary}</p>
        <button onClick={() => setShowForm(!showForm)}>Book Ticket</button>
      </div>
      {showForm && (
        <div className={styles.formContainer}>
          <h2>Book Ticket</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="showName">Show Name:</label>
              <input
                type="text"
                id="showName"
                name="showName"
                value={data.name}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="bankDetails">Bank Account Details:</label>
              <textarea
                id="bankDetails"
                name="bankDetails"
                value={formData.bankDetails}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SingleShow;
