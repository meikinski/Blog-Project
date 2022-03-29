import React, {useEffect, useState} from 'react';

import {client} from '../client.js';
import { useNavigate } from 'react-router-dom'

function Partner() {
const [partnerData, setPartnerData] = useState([]);


useEffect(() => {

  fetch('http://localhost:8000/partners')
  .then(response => setPartnerData(response.items)).catch(error => console.log('Error: ', error));

  }, [])



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
            <h2 className="py-2" >{item.fields.name}</h2>
            <img className="partnerImage" src={item.fields.picture.fields.file.url} alt="test"/>
            <div class="" className="partnerDescription"> 
              <p className="partnerText my-4"  >{item.fields.description}</p>
              <a className="partnerText" href={item.fields.url}>More information</a>
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
