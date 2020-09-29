import React from 'react';
import logo from './jodc.png';
import Card from './Card';
import contributors from './Contributors';
import './App.css';

const shuffle= (cards) => {
  for (
    let j, x, i = cards.length;
    i;
    j = parseInt(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x
  );
  return cards;
}

function search() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toLowerCase();
  let container = document.getElementsByClassName("container")[0];
  let divs = container.getElementsByClassName("card");
  
  for (let i = 0; i < divs.length; i++) {
    let div = divs[i];
    let profile = div.getElementsByClassName("profile")[0];

    let name = profile.getElementsByClassName("name")[0].textContent;
    let title = profile.getElementsByClassName("job")[0].textContent;
  
    if (
      name.toLowerCase().indexOf(filter) > -1 ||
      title.toLowerCase().indexOf(filter) > -1
    ) {
      div.style.display = "";
    } else {
      div.style.display = "none";
    }
  }
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="JODC_logo" alt="logo" />
      <p>Nice to see you <i className="em em-wave" aria-label="WAVE"></i> , participate in <a target="_blank" href="https://hacktoberfest.digitalocean.com/" rel="noopener noreferrer">Hacktoberfest 2020</a> and add yourself here <i className="em em-star-struck" aria-label="GRINNING FACE WITH STAR EYES"></i></p>
      <input type="text" id="searchInput" placeholder="Search for people here!" onInput={search} />
      <div className="container">
        {shuffle(contributors).map((user,i) => (<Card key={i} user= {user} />))}
      </div>
    </div>
  );
}

export default App;
