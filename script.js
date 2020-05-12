let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://official-joke-api.appspot.com/random_ten`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
document.querySelector("#content123").innerHTML = data[0].setup 
document.querySelector("#content12").innerHTML = data[1].setup
document.querySelector("#content1").innerHTML = data[2].setup
document.querySelector("#content").innerHTML = data[3].setup
document.querySelector("#conten").innerHTML = data[4].setup
document.querySelector("#conte").innerHTML = data[5].setup
document.querySelector("#cont").innerHTML = data[6].setup
document.querySelector("#con").innerHTML = data[7].setup
document.querySelector("#co").innerHTML = data[8].setup
document.querySelector("#c").innerHTML = data[9].setup

}

