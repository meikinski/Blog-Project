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
  {
  partnerData.length &&
    partnerData.map((item) => 
    <>
  
      <h2>{item.fields.name}</h2>
      <img className="partnerImage" src={item.fields.picture.fields.file.url} alt="test"/>
      <p>{item.fields.description}</p>
      <a href={item.fields.url}>More information</a>
  
    </>
    )
  
  }
  
</>
  );
}

export default Partner;
