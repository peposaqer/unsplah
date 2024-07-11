import React, { useEffect, useState } from "react";
import axios from "axios";
import ReadMoreArea from "@foxeian/react-read-more";
import Modal from "react-bootstrap/Modal";
import Moment from "react-moment";
import Swal from "sweetalert2";

function Next() {
  let [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    return () => {
      getData();
    };
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>This Next Page</h1>
          </div>

          {data.map((x) => (
            <div className="col-lg-4 col-md-6" key={x.id}>
              <div className="card">
                <div>
                  <div className="overflow-hidden">
                    <img
                      src={x.urls.small}
                      className="card-img-top"
                      alt={x.description}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <h5 className="card-title">{x.user.username}</h5>
                    <ReadMoreArea
                      lettersLimit={20}
                      buttonStyle={{
                        fontSize: "16px",
                        color: "red",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      {x.description ? x.description : ""}
                    </ReadMoreArea>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mt-4 mb-4">
                      <div>
                        <h4>Likes</h4>
                        <span>{x.likes}</span>
                      </div>
                      <div>
                        <h4>created At</h4>
                        <Moment fromNow ago>
                          {x.created_at}
                        </Moment>
                      </div>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Body>
                        <a className="close-modal" onClick={handleClose}>
                          <i className="fa fa-x"></i>
                        </a>
                        <div className={"profile"}>
                          <div className="d-flex align-items-center">
                            <img
                              src={x.user.profile_image.small}
                              className="card-img-top"
                              alt={x.description}
                            />
                            <div>
                              <h4>{x.user.name}</h4>
                              {/* <p>{x.user.bio}</p> */}
                            </div>
                          </div>
                          <div className="d-flex justify-content-between mt-4 mb-4">
                            <div>
                              <h4>Total Likes</h4>
                              <span>{x.user.total_likes}</span>
                            </div>
                            <div>
                              <h4>Total Photos</h4>
                              <span>{x.user.total_photos}</span>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between mt-4 mb-4">
                            <div>
                              <h4>Twitter Username</h4>
                              <a
                                href={`https://x.com/${x.user.twitter_username}`}
                                target="_blank"
                                className="user-link"
                              >
                                {x.user.twitter_username}
                              </a>
                            </div>
                            <div>
                              <h4>Instagram Username</h4>
                              <a
                                href={`https://www.instagram.com/${x.user.instagram_username}`}
                                target="_blank"
                                className="user-link"
                              >
                                {x.user.instagram_username}
                              </a>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between mt-4 mb-4">
                            <a
                              href={x.user.links.portfolio}
                              className="w-100 go"
                              target="_blank"
                            >
                              Profile
                            </a>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>

                    <div className="d-flex justify-content-between mt-4 mb-4">
                      <a href={x.links.html} className="" target="_blank">
                        Show Photo
                      </a>
                      <a href="#!" onClick={handleShow}>
                        Show Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
