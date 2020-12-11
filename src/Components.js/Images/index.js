import Chandler from "./Chandler.png";
import Emily from "./Emily.png";
import Friends from "./Friends.png";
import Joey from "./Joey.png";
import Monica from "./Monica.png";
import Phoebe from "./Phoebe.png";
import Rachel from "./Rachel.png";
import Ross from "./Ross.png";
import { createStore } from
"https://unpkg.com/react@16.7.0/umd/react.production.min.js00";
export const initialState = [
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
const button = document.getElementById(elementId:"my-button")
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
