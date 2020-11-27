let cont = document.getElementById('contact-container');
let contactRow = document.getElementById('contact-row');
console.log(contactRow)

cont.addEventListener('submit', (event) => {
  event.preventDefault();

  let name = document.getElementById('contact-form')[0].value;
  let email = document.getElementById('contact-form')[1].value;
  let textField = document.getElementById('contact-form')[2].value;

  console.log(name)
  // removes the form upon submittal
  let form = cont.removeChild(document.getElementById('contact-form'));

  // creates a new element with answer to the input
  let formAnswer = document.createElement('div');
  formAnswer.innerHTML = `<p>Thank you, ${name}! But please visit my <a target='_blank' href='https://kevin-miller-react-portfolio.herokuapp.com/'>real portfolio</a> instead. My up-to-date projects and contact information can be viewed there!</p>`
    + `<p>For reference, the email that you wrote was:</p>`
    + `${textField}`;

  cont.appendChild(formAnswer)

})