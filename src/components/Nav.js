const Nav = () => {
 return (
  <nav className="navbar">
    <div className="container navbar">

      <div className="company-name">moja firma</div>

      <ul className=" navbar-right">
          <li className="nav-item"><a href="#about-us">o nas</a></li>
          <li className="nav-item"><a href="#offer">oferta</a></li>
          <li className="nav-item disabled"><p>kontakt</p></li>
       </ul>

    </div>
  </nav>
 )
}

export default Nav