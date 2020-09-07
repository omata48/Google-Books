import React from "react";

function GoogleBooks({ key, title, subtitle, link, authors, description, image, Button }){

  return <li key={key} className="list-group-item">
        <div className="row">
          <div className="col-md-8 mt-2">
            <h3>{title}</h3>
            {subtitle && <h5>{subtitle}</h5>}
            <p>Written by {authors} </p>
          </div>
          <div className="col-md-4 mb-3">
            <div className="btn-container float-right">
              <a
                className="btn btn-light"
                target="_blank"
                rel="noopener noreferrer"
                href={link}
              >
                View
              </a>
              <Button />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-4 col-md-2 mb-2">
            <img
              className="img-thumbnail img-fluid w-100"
              src={image}
              alt={title}
            />
          </div>
          <div className="col-12 col-sm-8 col-md-10 p-4">
            <p>{description}</p>
          </div>
        </div>
      </li>
}

export default GoogleBooks;