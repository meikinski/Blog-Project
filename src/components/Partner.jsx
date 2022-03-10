import React, {useEffect, useState} from 'react';
import {useContentful} from 'react-contentful'
import {Routes, Route} from 'react-router-dom';
import {client} from '../client.js';

function Partner() {
const [partnerData, setPartnerData] = useState([]);


useEffect(() => {


  client.getEntries({content_type:'partner'}).then(response => setPartnerData(response.items)).catch(error => console.log('Error: ', error));

  }, [])


  return (
<>
    <div className="partnerWrapper">
  {
  partnerData.length &&
    partnerData.map((item) => 
    <>
      <div className="partnerCard">
        <h2 >{item.fields.name}</h2>
        <img className="partnerImage" src={item.fields.picture.fields.file.url} alt="test"/>
        <div class="" className="partnerDescription"> 
          <p className="partnerText"  >{item.fields.description}</p>
          <a className="partnerText" href={item.fields.url}>More information</a>
        </div>
      </div>


  
    </>
    )
  
  }
  </div>
</>
  );
}

export default Partner;
