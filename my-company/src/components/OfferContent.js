import OfferBoxNew from './OfferBoxNew';
import OfferBox from './OfferBox';
import { useState } from 'react';
import offerArray from './OfferArray';

const OfferContent = ({offerArray, isNew}) => {
  const offerArrayThree = offerArray
  // const offerArrayTwo = ['Usługa 1', 'Usługa 2', 'Usługa 3', 'Usługa 4', 'Usługa 5', 'Usługa 6'];
 {isNew ? <OfferBoxNew /> : <OfferBox/>}
return (
  <div>
  {offerArrayThree.map((div, key) => <div key={key}>{div}</div>)}
  </div>
)

}
// const [isNew, setIsNew] = useState(true);

// const changeStatus = () => setIsNew((state => true));
//   return (
//     <div className = 'offer-content'>
//       {isNew ? <OfferBoxNew /> : <OfferBox/>}
//       {isNew ? <OfferBoxNew /> : <OfferBox/>}
//       {isNew ? <OfferBoxNew /> : <OfferBox/>}
//       {isNew ? <OfferBoxNew /> : <OfferBox/>}
//       {isNew ? <OfferBoxNew /> : <OfferBox/>}
//       {isNew ? <OfferBoxNew /> : <OfferBox/>}
//    </div> 
//  )
export default OfferContent;