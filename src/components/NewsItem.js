import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const myStyle = {
      backgroundColor: this.props.mode === "light" ? "white" : "#0F0F0F",
      color: this.props.mode === "light" ? "#0F0F0F" : "white",
    };
    let { title, description, imgUrl, newsUrl, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className="badge rounded-pill bg-danger "
              style={{ left: "70%", zIndex: "1" }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://s.yimg.com/os/creatr-uploaded-images/2023-01/5a9f5f60-a1b5-11ed-b7be-49ca46e2f84a"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={myStyle}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className={`btn btn-sm btn-${
                this.props.mode === "light" ? "primary" : "dark"
              }`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
