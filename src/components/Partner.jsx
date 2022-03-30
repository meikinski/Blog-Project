import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'

function Partner() {
const [partnerData, setPartnerData] = useState([]);


useEffect(() => {

  fetch('http://localhost:8000/partners')
  .then(response => response.json())
  .then(data => setPartnerData(data))
  .catch(error => console.log('Error: ', error));
  }, [])

    console.log(partnerData)


  let navigate =useNavigate();
function goBack() {
  navigate(-1);
}

  return (
<>
    <div className="partnerWrapper">
      {
      partnerData &&
        partnerData.map((item) => 
        <>
          <div className="partnerCard">
            <h2 className="py-2" >{item.name}</h2>
            <img className="partnerImage" src={item.picture} alt="test"/>
            <div class="" className="partnerDescription"> 
              <p className="partnerText my-4"  >{item.description}</p>
              <a className="partnerText" href={item.url}>More information</a>
            </div>
          </div>
        </>
        )
      }
  </div>
  <div className="d-flex justify-content-center mb-5">
    <button onClick={goBack}>Go back</button>
  </div>
</>
  );
}

export default Partner;
