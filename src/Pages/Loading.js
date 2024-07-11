import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Swal from "sweetalert2";
import Card from "./Card";

function Loading() {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const [loaded, setIsLoaded] = useState(false);

  const getData = async () => {
    setPage(++page);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos?page=${page}&client_id=LB3stMalUeAMbvPKGM_7rHd4DOnUhbixDJfKaLLZm4g`
      );
      setData([...data, ...response.data]);
      setIsLoaded(true);
    } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
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
            <h1>This EndLess Scrolling Page</h1>
          </div>
          <InfiniteScroll
            dataLength={page}
            next={() => getData(10)}
            hasMore={true}
            loader={<div class="lds-hourglass"></div>}
          >
            <div className="row">
              {loaded
                ? data.map((x, index) => (
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
                  ))
                : ""}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default Loading;
