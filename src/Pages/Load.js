import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "./Card";

function Load() {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);

  const getData = async () => {
    setPage(++page)
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos?page=${page}&client_id=LB3stMalUeAMbvPKGM_7rHd4DOnUhbixDJfKaLLZm4g`
      );
      setData([...data, ...response.data]);
    } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
    }
  };
  
  useEffect(() => {
    return () => {
      getData();
    };
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>This Load Page</h1>
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
            />
          ))}
        </div>
        <div className="text-center mt-5 mb-5  d-flex justify-content-center">
          <button className="go ms-3 me-3" onClick={getData}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Load;
