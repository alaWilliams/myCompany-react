import Employee from "./Employee";

const AboutUs = () => {

  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <h1 className="section-title center">Nasi specjaliści</h1>

        <div className="employee-container">

          <Employee isFirst={true}/>

          <Employee isFirst={false}/>

        </div>
      </div>

    </section>
  )
}

export default AboutUs;