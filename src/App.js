import React, {useState} from 'react';
import './App.css';
import CardsComponent from './Components/CardsComponent/CardsComponent';

function App() {
 
     const [CardList] = useState([
      {
        "id":1,
        "name": "Bright",
        "release_year": 2017,
        "duration": 117,
        "genre": ["Action", "Crime", "Fantasy"],
        "description": "In an alternate present-day where humans and magical creatures coexist, two police officers uncover a dangerous artifact and a powerful conspiracy.",
        "image_url": "https://deadline.com/wp-content/uploads/2017/11/bright_us.jpg",
        "poster_image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-z8wOoXGRBp3TScGiMPOi5q_a4eWN5r15Yw&s"
      },
      {
        "id":2,
        "name": "Tomb Raider",
        "release_year": 2018,
        "duration": 118,
        "genre": ["Action", "Adventure", "Fantasy"],
        "description": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
        "image_url": "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/88472/91395/Tomb-Raider-Advance-Style-Poster-buy-original-movie-posters-at-starstills__48030.1519755303.jpg?c=2",
        "poster_image":"https://external-preview.redd.it/ZH4BkVdFeMsoHu-CE0JdiZeaJ7PUXqQgBp5JRM6E4_I.jpg?width=640&crop=smart&auto=webp&s=9df47fbea61a67e576bf8e7cc946be1bec15b3c7"
      },
      {
        "id":3,
        "name": "Inception",
        "release_year": 2010,
        "duration": 148,
        "genre": ["Action", "Sci-Fi", "Thriller"],
        "description": "A skilled thief, who can enter people's dreams and steal their secrets, is given a chance to have his past crimes forgiven if he can plant an idea into someone's mind.",
        "image_url": "https://c8.alamy.com/comp/2JKYD0T/movie-poster-inception-2010-2JKYD0T.jpg",
        "poster_image":"https://filmartgallery.com/cdn/shop/files/Inception-Vintage-Movie-Poster-Original.jpg?v=1738912645"
      },
      {
        "id":4,
        "name": "The Dark Knight",
        "release_year": 2008,
        "duration": 152,
        "genre": ["Action", "Crime", "Drama"],
        "description": "Batman faces his greatest psychological and physical test when he confronts the Joker, a criminal mastermind who seeks to plunge Gotham into anarchy.",
        "image_url": "https://m.media-amazon.com/images/I/41CRfXsE8SL._AC_UF894,1000_QL80_.jpg",
        "poster_image":"https://i.pinimg.com/736x/1c/e5/a5/1ce5a568bdfe565aa2a527012ef5643c.jpg"
      },
      {
        "id":5,
        "name": "Interstellar",
        "release_year": 2014,
        "duration": 169,
        "genre": ["Adventure", "Drama", "Sci-Fi"],
        "description": "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "image_url": "https://m.media-amazon.com/images/I/71-YHJtGMoL._AC_UF1000,1000_QL80_.jpg",
        "poster_image":"https://mir-s3-cdn-cf.behance.net/project_modules/hd/8d8f28105415493.619ded067937d.jpg"
      },
      {
        "id":6,
        "name": "The Matrix",
        "release_year": 1999,
        "duration": 136,
        "genre": ["Action", "Sci-Fi"],
        "description": "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        "image_url": "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF1000,1000_QL80_.jpg",
        "poster_image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ErtaYA0YL18ugo2CR2lf8TJKcYpAhvA-5A&s"
      },
      {
        "id":7,
        "name": "Avatar",
        "release_year": 2009,
        "duration": 162,
        "genre": ["Action", "Adventure", "Fantasy"],
        "description": "A paraplegic marine dispatched to the moon Pandora becomes torn between following his orders and protecting the world he feels is his home.",
        "image_url": "https://m.media-amazon.com/images/I/61l4F+4vu8L._AC_UF1000,1000_QL80_.jpg",
        "poster_image":"https://c8.alamy.com/comp/2W9YCX6/avatar-the-way-of-water-2023-directed-by-james-cameron-and-starring-sam-worthington-zoe-saldana-and-sigourney-weaver-jake-sully-lives-with-his-newfound-family-formed-on-the-extrasolar-moon-pandora-once-a-familiar-threat-returns-to-finish-what-was-previously-started-jake-must-work-with-neytiri-and-the-army-of-the-navi-race-to-protect-their-home-us-one-sheet-poster-editorial-use-only-credit-bfa-20th-century-studios-2W9YCX6.jpg"
      }
    ]);
  
  


  return (
   <div>
     {CardList.map((card) => (
      <CardsComponent key={card.id} card = {card}/>
     ))};
   </div>
  );
}

export default App;
