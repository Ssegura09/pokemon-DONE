// Obtain the img element, and assign it to the image variable
let image = document.getElementById('pokemon')

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById('shrink-grow')

//bonus FAQ
let body = document.querySelector('body') //grabbing the body
let newDiv = document.createElement('div') //creating the new div
newDiv.setAttribute('class', 'faq-section') //added class to newDiv div

let newHeader = document.createElement('h2')
newHeader.innerText = 'FAQ Section'

let newOl = document.createElement('ol') //created the new ol

let newLi1 = document.createElement('li') //created li (1)
let newLi2 = document.createElement('li') //created li (2)
let newLi3 = document.createElement('li') //created li (3)

newLi1.innerHTML = ('<strong>What to feed my pokemon? </strong>It depends on the pokemon type. Please reference your pokidex for more info')
newLi2.innerHTML = ('<strong>How to train my pokemon? </strong> Go to your local pokemon gym and connect to their training program!')
newLi3.innerHTML = ('<strong>What to do if my pokemon gets hurt? </strong> Contact Nurse joy immediately!')


body.append(newDiv) //appending, or attaching the new div to the body
newDiv.append(newHeader, newOl) //appending, or attaching header and ol to the div
newOl.append(newLi1, newLi2, newLi3) //appending, or attaching li's to ol

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "150px"
  }
  else {
    image.style.height = "100px"
  }
})