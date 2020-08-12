particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
})
var typewriter = document.getElementById("typewriter")
const instance = new Typewriter(typewriter, {
    loop: true
})

instance
  .typeString("Hello!")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I am Rithvik")
  .pauseFor(1000)
  .deleteChars(15)
  .typeString("a senior at<br>Poolesville High School.")
  .pauseFor(1000)
  .deleteChars(35)
  .typeString("I'm currently learning<br>JS.")
  .pauseFor(1000)
  .deleteAll()
  .typeString(
    'Feel free to look at<br><a href="https://github.com/rbhog" style="color: #E38B4FCC;">github.com/rbhog</a>'
  )
  .pauseFor(1000)
  .deleteAll()
  .start();