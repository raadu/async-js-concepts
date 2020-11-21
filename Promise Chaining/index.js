//Promise: Promise is a JS object that links producing code to consuming code.
//A promise executes a function with resolve / reject.
//If resolved then do something. If rejected then do another thing.


const getTodos = (resource) => {
    //returns a new Promise object
    //takes resolve and reject as two parameteres
    return new Promise((resolve, reject) => {
        //Request handler
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
            
            const data = JSON.parse(request.responseText);  
            //Pass data to resolve method
            resolve(data);
            }
            else if(request.readyState === 4) {
                //Pass error message as reject method
                reject("Error getting data");
            }
        });

        //XMLHttpRequest.open(request type, API URL);
        //Opens the connection with API
        request.open('GET', resource);
        //Send the request using XMLHttpRequest.send()
        request.send();
    });
};

//If a function returns a promise then only can that function be chained with .then() method.
//Promised can be chained with Promise.all
Promise.all([
    getTodos('/data/animals.json'),
    getTodos('/data/people.json'),
    getTodos('/data/pc.json'),
])
.then((data) => {
    console.log("Promise resolved", data);
})
.catch((err) => {
    console.log("Promise Rejected", err);
});


//ATTENTION: The 'resource' parameter contains a API URL of file of a local folder. 
//It will fire CORS error as the URL is not http. 
//Run it using a server. Then the error will be resolved.
//eg.  use live server vs extension to run server.
