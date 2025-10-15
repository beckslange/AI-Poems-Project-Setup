//step 31
let flipInterval;
//step 11
function displayPoem(response) {
  /*response.data.enter should have the poem in it. So the next
    step is to take step 4 and move it under this function, because
    at this point we will have the actual poem. We will also change 
    the strings to below*/

  //step 15 --the problem with this is that we have not applied a prompt
  console.log("poem generated");

  //step 30
  clearInterval(flipInterval);

  //step 12, step 13 is to add axios
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

//Step 2
function generatePoem(event) {
  event.preventDefault();

  /*step 17 --the value of the user-prompt element is going to be the
promptInput.value (as seen in step 18)*/
  let promptInput = document.querySelector("#user-prompt");
  //step 25--continued from html and css for user experience
  let poemElement = document.querySelector("#poem");

  //step 26
  poemElement.classList.remove("hidden");

  //step 5
  let apiKey = "tfo33b89af42954f2d60430a801e1b3c";

  //step 9 is let context = ""; step 22 is "You are a romantic poem expert...";
  /*step 24 you can continue to engineer the prompt to say or do what you want. 
  I added to separate each line, sign the poem with "SheCodes", and to get rid 
  of the '''html at the beginning and end and it worked*/
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML, and make sure to separate each line with <br />. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI` inside a <strong> element. Do not include ```html or ```";

  //step 8; step 16--"prompt engineering"--add "Generate a French poem about...";
  //step 18--add ${promptInput.value}
  /*we want the prompt to generate a French poem about whatever is searched
to get this, go back to html, and select the input "text", and add
an id --in this case I added "user-prompt"
just as a note, you have to use `` instead of "" after step 18 */
  //step 23, add in `User instructions:
  let prompt = `User Instructions: Generate a french poem about ${promptInput.value}`;

  /*steps 6 and 7--step 7 is changing {prompt} to ${prompt},
{context} to ${context}, and {key} to ${apiKey}
Also, make sure to use `` and not "" on this, because it will not work otherwise */
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //step 28
  let flip = true;
  //step 27, step 32--add span class flip, step 33--add id loading
  poemElement.innerHTML = `<span id="loading" class = "flip">⏳</span> Generating a poem about ${promptInput.value}`;
  //step 29
  flipInterval = setInterval(() => {
    poemElement.innerHTML = `${flip ? "⌛️" : "⏳"} Generating a poem about ${
      promptInput.value
    }`;
    flip = !flip;
  }, 500);

  //step 14 "generating poem"
  //console.log("generating poem");
  /*Step 19 is a continuation of step 14...step 14 was never completed, 
  but go back to that console.log and erase "generating poem" and then 
  say `Prompt: ${prompt}`, and then add step 20. 
  Step 14 started to make sure steps 12 and 13 are working,
  then we take a side trip to finish with steps 15-18, */
  //Step 21--adding back in step 14
  console.log("Generating poem");
  //Step 19
  console.log(`Prompt: ${prompt}`);
  //Step 20
  console.log(`Context ${context}`);

  /*step 10 is make a call to the API. (displayPoem) will then have 
  to be made into a separate function above*/
  axios.get(apiURL).then(displayPoem);
  //Step 3
  //let poemElement = document.querySelector("#poem");

  //Step 4
  /*new Typewriter("#poem", {
    strings: "床前明月光 疑是地上霜 举头望明月 低头思故乡",
    autoStart: true,
    delay: 1,
    cursor: "",
  }); -- This is nulled out and moved to step 12, and the strings are changed*/

  /*alert("Generating poem"); -- This alert was nulled out and 
  let poemElement took its place, then new Typewriter was added*/
}
/*function generatePoem was the second part of JS that was created
now when you type in a prompt like "flowers" into the search bar, the
alert "Generating poem" pops up
after doing this we want to go back and add an id "poem" to our div*/
/*new Typewriter was the third element added--don't forget to add the
link to html*/
/*This was the basic js that added the typewriter element. Now we 
  are going to add the API element to make it look even better*/
/*In order to get the API working, we want to build the API URL, 
  make a callto the API, and then Display the generated poem*/

//Step 1
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
/*let poemFormElement is the very first step we took in creating the
js. It doesn't do anything yet because "generatePoem" is not defined/does
not exist. So we have to create the function generatePoem(event)*/

//by step 23, it is generating poems
