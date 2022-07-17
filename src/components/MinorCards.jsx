import React, { useEffect, useState } from 'react'
import './css/MinorCards.css'

function MinorCard(props) {
  const results = props.result.results;
  const [currentCard, setCurrentCard] = useState('0');
  const [prevCard, setPrevCard] = useState('0');
  // console.table(results);
  
  const changeCard = (elem,index) => {
   props.setMajorData(elem);
   setPrevCard(currentCard);
   setCurrentCard(index);
  }

  useEffect(() => {
    document.getElementById(prevCard).classList.remove('active');
    document.getElementById(currentCard).classList.add('active');
  }, [currentCard,prevCard])
  

  return (
    <div className="grid">
      {results.map((elem,index) => {
        return (
        <div className='card' id={index} key={index} onClick={() => changeCard(elem, index)}>
          <p className='gender'>{elem.gender.slice(0,1).toUpperCase()}{elem.gender.slice(1)} • {elem.nat}</p>
          <p className='name'>{elem.name.title} {elem.name.first} {elem.name.last}</p>
          <p className='email'>{elem.email}</p>
        </div>)
      })}
    </div>
  )
}

export default MinorCard