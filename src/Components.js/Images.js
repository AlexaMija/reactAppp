import React from "react";
import { images } from "./Images/index";

class Images extends React.Component {
  characters = [];
  handleClick = (event) => {
    let character = event.target;
    if ( character.getAttribute(check) === "found") {
      return;
    }
    if  (character !== this.characters[0]) {
      this.switch(character);
      this.character.push(character);
    } else {
      this.switch(character);
      this.character = []
      }
      if (this.character.length > 2) {
        if(!this.checkName(this.character[0], this.character[1])) {
          this.swich(this.character[0]);
          this.swich(this.character[1]);
          this.character.shift();
          this.charcter.shift();
        } else {
          this.character.shift();
          this.character.shift();
        }
      }
      let allPictures = document.getElementByClassName("image blanc");
      if (allPictures.length < 1) {
        this.props.endGame(true);
        let reset = document.getElementByClassName("image");
        for (let i = 0; i < reset.length; i++) {
          reset[i].classList.add("image-blank");
          reset[i].setAttribute("check", "false");
          this.characters = [];
        }
      }
    };
    checkName = (character1, character2) => {
      if(character1.getAttribut("name") === character2.getAttribut("name")) {
        character1.setAttribute("check", "found");
        character2.setAttribute("check", "found");
        return true;
      }
      return false;
    };
    switch = (target) => {
      if (target.getAttribute("check") === "true") {
        target.setAttribute("check", "false");
        target.classList.add("image-blank")
      } else {
        target.setAttribute("check", "true");
        target.classList.remove("image-blank")
      }
    }
    render () {
      return (
        <div className="images">
        {images
          .sort(()=>Math.rendom() - 0.5)
          .map((element) => {
            return (
              <div
              className="image image-blank"
              name= {element.name}
              style={{background: 'url(${element.pic})'}}
              check="false"
              onClick={this.handleClick}
              />
            );
          })
        }

        </div>
      )
    }
    }
    export default Images;
