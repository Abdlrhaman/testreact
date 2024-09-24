
import React from 'react'

function Navbar() {
  return (
    <div>
       {/* <!-- start navbar  adn home section--> */}
  <div className="home">
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html" id ="logo"><img src="img/mad.png" alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span><i className="fas fa-bars "></i></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto abdo">
            <li className="nav-item mama">
              <a className="nav-link active baba" href="index.html">Home</a>
            </li>
            <li className="nav-item mama">
              <a className="nav-link baba" href="#About">About</a>
            </li>
            <li className="nav-item mama">
              <a className="nav-link baba" href="#Affairs">Affairs</a>
            </li>
            <li className="nav-item mama">
              <a className="nav-link baba" href="#Subject">Subject</a>
            </li>
          </ul>
          <form className="d-flex ham ">
            <input className="form-control me-2" type="text" placeholder="Search"/>
            <button className="btn btn-primary  smsm" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>
     
    {/* <!-- end navbar --> */}

    {/* <!-- <start header section> --> */}

    <header className="header-index">
        <div className="container">
            <div className="row">
                <div className=" col-lg-6">
                    <p>Always laugh <br/> when you can,<br/> never ever stop.<br/> - H. P. Lovecraft</p>
                </div>
            </div>
        </div>

    </header>
</div>

    {/* <!-- <end header section> --> */}

    </div>
  );
}

export default Navbar;
