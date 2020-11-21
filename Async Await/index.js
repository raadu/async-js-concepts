//Function with async before returns a promise
const getTodos = async() => {
    //JS code will wait for the fetch API to finish getting data
    //The data will be assigned to response const after done retrieving from API
    const response = await fetch('/data/pc.json');

    //Error handling
    //This error is caught in .catch() block
    if(response.status !== 200) {
        throw new Error("Cannot Fetch Data");
    }

    const data = await response.json();

    return data;
}

console.log(1);
console.log(2);

//This is an async function. It does not block other codes.
getTodos()
    .then((data) => {
        console.log("Promise resolved and data found: ", data);
    })
    .catch((error) => {
        console.log("Error getting data: ", error.message);
    });

console.log(3);
console.log(4);

//ATTENTION: The 'resource' parameter contains a API URL of file of a local folder. 
//It will fire CORS error as the URL is not http. 
//Run it using a server. Then the error will be resolved.
//eg.  use live server vs extension to run server.