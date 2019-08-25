/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

var pronoun = ["his", "our", "your", "the"];
var adj = ["great", "ancient", "mighty", "small"];
var noun = ["cthulu", "dog", "pegasus", "fountain"];

pronoun.forEach((car, bus) => {
  adj.forEach((dog, cat) => {
    noun.forEach((shoe, boot) => {
      console.log(car + "" + dog + "" + shoe + ".com");
    });
  });
});
