import React from 'react';
import '../style/NavBar.css';
function NavBar(props) {
    return (
        <>
  <header>
  <nav className="navbar container-fluid navbar-expand-lg navbar-light bg-light p-3 ">
    <div className="container bg-light">
      <a className="navbar-brand me-5" href="#">
        <img
          width="140px"
          src="https://zandokh.com/image/catalog/avethemes/zando-logo-small.png"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              News
            </a>
          </li>
          {/* dorpdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#New">
                  New Products
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#Promotion">
                  Promotion Products
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#Popular">
                  Popular Products
                </a>
              </li>
            </ul>
          </li>
          <li
            className="nav-item"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <form className="d-flex ">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn " type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
        </header>
        <>
  {/*modal  */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            FEEDBACK
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form action="">
            <div className="row">
              <div className="col-12 col-lg-6 col-md-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <label htmlFor="name" className="form-label">
                  Email
                </label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <label htmlFor="name" className="form-label">
                  Phone Number
                </label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <label htmlFor="name" className="form-label">
                  Address
                </label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col-12 col-lg-12 col-md-12">
                <label htmlFor="" className="form-label">
                  {" "}
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  className="form-control"
                  defaultValue={""}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Cancle
          </button>
          <button type="submit" className="btn btn-primary">
            <i className="bi bi-send mx-2" />
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</>
        </>

    );
}

export default NavBar;