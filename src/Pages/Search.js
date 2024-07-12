import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "./Card";

function Search() {
  let [data, setData] = useState([]);
  let [img, setImg] = useState("Office");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=LB3stMalUeAMbvPKGM_7rHd4DOnUhbixDJfKaLLZm4g`
      );
      setData(response.data.results);
    } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
    }
  };

  const Submit = () => {
    getData();
  };

  useEffect(() => {
      getData();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>This Search Page</h1>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search Anything..."
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <button type="submit" onClick={Submit} className="btn">
                Search
              </button>
            </div>
          </div>

          {data.map((x) => (
            <Card item={x} key={x.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
