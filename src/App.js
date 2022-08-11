import React from 'react'
import './styles/App.css'
import kitty from './img/kitty.jpeg'
import Card from './Components/Card';

function App() {

  const cardData = {
    img: kitty,
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    link: 'https://netology.ru/',
  }

  return (
    <>
      <Card {...cardData}>
        <img src={cardData.img} class="card-img-top" alt="..."/>
      </Card>
      <Card {...cardData} image={null}/>
    </>
  );
}

export default App;
