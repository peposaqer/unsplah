import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "./Card";

function Next() {
  let [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos?page=${currentPage}&client_id=LB3stMalUeAMbvPKGM_7rHd4DOnUhbixDJfKaLLZm4g`
      );
      setData(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const nextStep = () => {
    if (currentPage < 346) {
      setCurrentPage(++currentPage);
      getData();
    }
  };

  const prevStep = (e) => {
    if (currentPage > 1) {
      setCurrentPage(--currentPage);
      getData();
    }
  };

  useEffect(() => {
      getData();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>This Next Page</h1>
          </div>

          {data.map((x) => (
            <Card
              item ={x}
              key={x.id}
            />
          ))}
        </div>
        <div className="text-center mt-5 mb-5 d-flex justify-content-center align-items-center">
          <button
            className={
              currentPage > 1 ? "go ms-3 me-3" : "go ms-3 me-3 disable "
            }
            onClick={prevStep}
          >
            prev
          </button>
          <button
            className={
              currentPage < 346 ? "go ms-3 me-3" : "go ms-3 me-3 disable "
            }
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Next;
