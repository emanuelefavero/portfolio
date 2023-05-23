// NOTE: Change the words to whatever you want
const words = ['Fullstack', 'Frontend', 'Backend', 'Web']
let currentWordIndex = 0

function hackerTextEffect() {
  const textElement = document.getElementById('hacker-text')
  const originalText = textElement.textContent
  const characters = originalText.split('')
  let newText = ''

  // Randomize the characters
  const intervalId = setInterval(() => {
    characters.forEach((char, index) => {
      const randomChar = String.fromCharCode(Math.random() * 128)
      characters[index] = randomChar
    })

    newText = characters.join('')
    textElement.textContent = newText

    // NOTE: Change the interval duration to adjust the animation speed
  }, 50)

  // Restore the original text after 1 second
  setTimeout(() => {
    clearInterval(intervalId)

    // ----------------------------
    // NOTE: Restore the original text
    // textElement.textContent = originalText

    // NOTE: Assign different words to the textElement each time the animation runs
    textElement.textContent = words[currentWordIndex]
    currentWordIndex =
      currentWordIndex + 1 >= words.length ? 0 : currentWordIndex + 1
    // ----------------------------

    // NOTE: Restart the animation (comment out to run the animation only once)
    setTimeout(hackerTextEffect, 3000)
  }, 400)
}

// Call the function to start the animation
hackerTextEffect()
