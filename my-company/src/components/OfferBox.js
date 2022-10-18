const OfferBox = (props) => {
  return (
  <div className= {props.new ? "offer-item new-item" : "offer-item"}>
  {props.name} <br/>
  {props.new ? '(Nowość)' : ''}
  {props.new ? <div className="ellipse"></div> : ''}</div>
  )
}

export default OfferBox;