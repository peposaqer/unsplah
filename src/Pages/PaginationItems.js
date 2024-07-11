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
      console.log(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handlePageChange = (currentPage) => {
    console.log(`active page is ${currentPage}`);
    setCurrentPage(currentPage);
    getData(currentPage);
    
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

          {data.map((x, index) => (
            <Card
              Url={x.urls.small}
              description={x.description}
              user={x.user.username}
              likes={x.likes}
              Moment={x.created_at}
              profile_image={x.user.profile_image.small}
              username={x.user.name}
              total_likes={x.user.total_likes}
              total_photos={x.user.total_photos}
              twitter_username={x.user.twitter_username}
              instagram_username={x.user.instagram_username}
              html={x.links.html}
              id={x.id}
              key={index}
            />
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
