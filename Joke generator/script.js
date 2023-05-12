const btn = document.getElementById("btn")
const api = "r9M40EC7Mn6xWdzt/uGUFA==4tMySRWfXgcIGdwk";
const joke = document.getElementById("joke");
const headers = {
    "x-api-key": api
  };

const url = "https://api.api-ninjas.com/v1/dadjokes?limit="




async function displayJoke(){
    const response = await fetch(url, {headers})
    var data = await response.json()

    joke.innerHTML = data[0].joke
}
