import Chandler from "./Chandler.png";
import Emily from "./Emily.png";
import Friends from "./Friends.png";
import Joey from "./Joey.png";
import Monica from "./Monica.png";
import Phoebe from "./Phoebe.png";
import Rachel from "./Rachel.png";
import Ross from "./Ross.png";
proveri da li je potrebno da se //import immutable from "immutable"
import { configureStore } from
"@redux.js/toolkit";
const initialState = {
  flipped: no
};
export let images = [
  {
    name: "Chandler",
    pic: Chandler,
      flipped: "no"
  },
  {
    name: "Emily",
    pic: Emily,
      flipped: "no"
  },
  {
    name: "Friends",
    pic: Friends,
      flipped: "no"
  },
  {
    name: "Joey",
    pic: Joey,
      flipped: "no"
  },
  {
    name: "Monica",
    pic: Monica,
      flipped: "no"
  },
  {
    name: "Phoebe",
    pic: Phoebe,
      flipped: "no"
  },
  {
    name: "Rachel",
    pic: Rachel,
      flipped: "no"
  },
  {
    name: "Ross",
    pic: Ross,
    flipped: "no"
  },
];
function rootReducer(state: {flipped:string} = initialState,
action) {
  switch (action.type) {
  case "FLIPPED":
return {...state, flipped: "yes"};
default:
return state;
  }
}
const store = createStore(rootReducer);
const button = document.getElementById(elementId:"images_for_game")
button.addEventListener(type:"click", listener: function() {
  const flippedAction = {
    type: "FLIPPED"
  };
store.dispatch(flippedAction);
});
store.subscribe(options: function() {
 if (store.getState().flipped === "yes") {
   return true
 } else {
   return false
 }
});
