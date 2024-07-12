import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "./Card";
import Pagination from "react-js-pagination";

function PaginationItems() {
  let [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const getData = async (currentPage) => {
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

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
    getData(currentPage);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  }

  useEffect(() => {
      getData(currentPage);
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>This Pagination Page</h1>
          </div>

          {data.map((x) => (
            <Card item={x} key={x.id} />
          ))}
        </div>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={3460}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default PaginationItems;
