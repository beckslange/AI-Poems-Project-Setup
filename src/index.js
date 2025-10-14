function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "床前明月光 疑是地上霜 举头望明月 低头思故乡",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  /*alert("Generating poem"); -- This alert was nulled out and 
  let poemElement took its place, then new Typewriter was added*/
}
/*function generatePoem was the second part of JS that was created
now when you type in a prompt like "flowers into the search bar, the
alert "Generating poem" pops up
after doing this we want to go back and add an id "poem" to our div*/

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
/*let poemFormElement is the very first step we took in creating the
js. It doesn't do anything yet because "generatePoem" is not defined/does
not exist. So we have to create the function generatePoem(event)*/
