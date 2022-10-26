import OfferBox from './OfferBox';

const OfferContent = () => {
  const offerArray = [{name: 'Usługa 1', new: true}, {name: 'Usługa 2', new: false}, {name: 'Usługa 3', new: false}, {name: 'Usługa 4', new: false}, {name: 'Usługa 5', new: false}, {name: 'Usługa 6', new: false}];

return (
      <div className = 'offer-content'>
        {offerArray.map(element => <OfferBox name={element.name} new={element.new}/>)}
     </div> 
)

}

export default OfferContent;