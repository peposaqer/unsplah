import React, { useState } from "react";
import ReadMoreArea from "@foxeian/react-read-more";
import Modal from "react-bootstrap/Modal";
import Moment from "react-moment";

function Card(props) {
//   : `This Text ${img} Not Matching`
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card">
          <div>
            <div className="overflow-hidden">
              <img
                src={props.Url}
                className="card-img-top"
                alt={props.description}
              />
            </div>
          </div>
          <div className="card-body">
            <div>
              <h5 className="card-title">{props.user}</h5>
              <ReadMoreArea
                lettersLimit={20}
                buttonStyle={{
                  fontSize: "16px",
                  color: "red",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {props.description ? props.description : ""}
              </ReadMoreArea>
              {/* <p>{props.description.length >= 50 ? props.description : "fd"}</p> */}
            </div>
            <div>
              <div className="d-flex justify-content-between mt-4 mb-4">
                <div>
                  <h4>Likes</h4>
                  <span>{props.likes}</span>
                </div>
                <div>
                  <h4>created At</h4>
                  <Moment fromNow ago>
                    {props.Moment}
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
                        src={props.profile_image}
                        className="card-img-top"
                        alt={props.description}
                      />
                      <div>
                        <h4>{props.username}</h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4 mb-4">
                      <div>
                        <h4>Total Likes</h4>
                        <span>{props.total_likes}</span>
                      </div>
                      <div>
                        <h4>Total Photos</h4>
                        <span>{props.total_photos}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4 mb-4">
                      <div>
                        <h4>Twitter Username</h4>
                        <a
                          href={`https://x.com/${props.twitter_username}`}
                          target="_blank"
                          className="user-link"
                        >
                          {props.twitter_username}
                        </a>
                      </div>
                      <div>
                        <h4>Instagram Username</h4>
                        <a
                          href={`https://www.instagram.com/${props.instagram_username}`}
                          target="_blank"
                          className="user-link"
                        >
                          {props.instagram_username}
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4 mb-4">
                      <a href={props.html} className="w-100 go" target="_blank">
                        Profile
                      </a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              <div className="d-flex justify-content-between mt-4 mb-4">
                <a href={props.html} className="" target="_blank">
                  Show Photo
                </a>
                <a href="#!" onClick={handleShow}>
                  Show Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="lds-hourglass"></div>
      </div>
    </>
  );
}

export default Card;
