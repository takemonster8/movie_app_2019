import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "potato",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/KeiraKnightleyByAndreaRaffin2011_%28cropped%29.jpg/330px-KeiraKnightleyByAndreaRaffin2011_%28cropped%29.jpg",
    rating:5
  },
  {
    id: 2,
    name: "orange",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Keira_Knightley_at_the_premiere_of_A_Dangerous_Method%2C_Toronto_Film_Festival_2011_%28cropped%29.jpg/330px-Keira_Knightley_at_the_premiere_of_A_Dangerous_Method%2C_Toronto_Film_Festival_2011_%28cropped%29.jpg",
    rating:4
  }
]

function Food({ name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// Food.PropTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
