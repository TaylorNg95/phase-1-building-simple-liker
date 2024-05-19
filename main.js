// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if(heart.textContent === FULL_HEART){
          heart.textContent = EMPTY_HEART
          heart.classList.remove('activated-heart')
        }
        else {
          heart.textContent = FULL_HEART
          heart.classList.add('activated-heart')
        }
      })
      .catch(error => {
        document.querySelector('#modal').classList.remove('hidden')
        document.querySelector('#modal h2').textContent = error
      })
      setTimeout(() => document.querySelector('#modal').classList.add('hidden'), 3000)
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
