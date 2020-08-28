// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("click", e => {
  if(e.target.matches('.like-glyph')) {
    mimicServerCall(url="http://mimicServer.example.com", config={})
    .then(changeLike)
    .catch(error => displayError(error))
    
    
    function displayError(error) {
      let errorDiv = document.getElementById("modal")
      let errorP = document.getElementById("modal-message")
      errorDiv.classList.remove("hidden"); 
      errorP.innerText = "Random server error. Try again."
      setTimeout(function() {
        errorDiv.classList.add("hidden")
      }, 5000)
    }
    
    function changeLike() {
      let button = e.target
      if (button.classList.contains("activated-heart")) {
        button.innerText = EMPTY_HEART
        button.classList.remove("activated-heart")
      } else {
        button.innerText = FULL_HEART
        button.classList.add("activated-heart")
      }
    }
  }
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
