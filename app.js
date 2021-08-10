const button = document.querySelector('#button')
const name = document.querySelector('#name')
const form = document.querySelector('form')
const input = document.querySelector('#searchTerm')
const height = document.querySelector('#height')
const mass = document.querySelector('#mass')
const birth_year = document.querySelector('#birth_year')



//form.addEventListener('submit,formSubmitted');
async function formSubmitted(event) {
    event.preventDefault();
    const searchTerm = input.value;
    try {
      const results = await getInfo(searchTerm);
      getInfo(results);
    } catch(error) {
      showError(error);
    }
  }
 
function getInfo(){
    axios.get('https://swapi.dev/api/people/1').then(function(response){
        updateInfo(response.data)
    })
}
function updateInfo(data){
    name.innerText = data.name
    height.innerText = data.height
    massinnerText = data.mass
    birthyear.innerText = data.birthyear
}
form.addEventListener('click', getInfo)
