//manually create the element 
//create header1
const header1 = document.createElement('h1');
header1.innerText = "Hello Coder"
header1.style.backgroundColor='green'
header1.style.color='black'
header1.style.fontSize='40px'

//create header2
const header2 = document.createElement('h2')
header2.innerText="Whats Up Future Coder"
header2.style.backgroundColor="black"
header2.style.color="white";
header2.style.fontSize="30px"




const roots= document.getElementById('root');
roots.append(header1)
roots.append(header2)