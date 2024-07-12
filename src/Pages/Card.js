import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Moment from "react-moment";

function Card(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [item, setItem] = useState(props.item)
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card">
          <div>
            <div className="overflow-hidden">
              <img
                src={item.urls.small}
                className="card-img-top"
                alt={item.description}
              />
            </div>
          </div>
          <div className="card-body">
            <div>
              <h5 className="card-title">{item.user.username}</h5>
              <p className="">
                {isReadMore && item.description && item.description.length > 30
                  ? item.description.substring(0, 30) + "..."
                  : item.description}
                <span
                  onClick={toggleReadMore}
                  className="read-or-hide"
                  style={{ color: "red" }}
                >
                  {isReadMore &&
                  item.description &&
                  item.description.length > 30
                    ? " Read More"
                    : !isReadMore &&
                      item.description &&
                      item.description.length > 30
                    ? "Read Less"
                    : ""}
                </span>
              </p>
            </div>
            <div>
              <div className="d-flex justify-content-between mt-4 mb-4">
                <div>
                  <h4>Likes</h4>
                  <span>{item.likes}</span>
                </div>
                <div>
                  <h4>created At</h4>
                  <Moment fromNow ago>
                    {item.created_at}
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
                        src={item.user.profile_image.small}
                        className="card-img-top"
                        alt={item.description}
                      />
                      <div>
                        <h4>{item.user.name}</h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4 mb-4">
                      <div>
                        <h4>Total Likes</h4>
                        <span>{item.user.total_likes}</span>
                      </div>
                      <div>
                        <h4>Total Photos</h4>
                        <span>{item.user.total_photos}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4 mb-4">
                      <div>
                        <h4>Twitter Username</h4>
                        <a
                          href={`https://x.com/${item.user.twitter_username}`}
                          target="_blank"
                          className="user-link"
                        >
                          {item.user.twitter_username}
                        </a>
                      </div>
                      <div>
                        <h4>Instagram Username</h4>
                        <a
                          href={`https://www.instagram.com/${item.user.instagram_username}`}
                          target="_blank"
                          className="user-link"
                        >
                          {item.user.instagram_username}
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4 mb-4">
                      <a
                        href={item.links.html}
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
                <a href={item.links.html} className="" target="_blank">
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
    </>
  );
}

export default Card;
