const Header = () => {
  return (
    <header id="header" className="header">

      <div className="shadow">

        <div className="container-header container">

          <h1 className="section-title">Nasza firma oferuje najwyższej jakości produkty.</h1>
          <p className="header-content">Nie wierz nam na słowo - sprawdź</p> 
          <button type="button" className="btn">
            <a className="btn-offer" href="#offer">oferta</a></button>
          
        </div>

      </div>

    </header>
  )
}

export default Header;