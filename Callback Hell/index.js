//Callback: Callback is a function.
//That function is passed as a parameter to another function.
//And that function will be called inside.

//Callback Hell: Callback functions can be nested into each other. 
//Each and every callback takes an argument that is a result of the previous callbacks.
//This makes them messy and complicated. This is called callback hell.


const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //Readystatechange turns 4 even if the data is not successfully fetched
        //So also check http status codes wit it
        if(request.readyState === 4 && request.status === 200) {
           //Pass undefined as there is no error
           const data = JSON.parse(request.responseText);  
           // Pass data as second argument
           callback(undefined, data);
        }
        else if(request.readyState === 4) {
            //Pass the error text as first argument
            //Pass undefined as second argument as there is no data fetched
            callback("Could not fetch data", undefined);
        }
    });

    //XMLHttpRequest.open(request type, API URL);
    //Opens the connection with API
    request.open('GET', resource);
    //Send the request using XMLHttpRequest.send()
    request.send();
};

//Pass callback function as argument
//Take the first argument as resource. The API URL. 
//Second argument will a callback function.
getTodos('/data/animals.json', (error, data) => {
    console.log("Data1", data);
    getTodos('/data/people.json', (error, data) => {
        console.log("Data2", data);
            getTodos('/data/pc.json', (error, data) => {
                console.log("Data3", data);
            });
    });
});
//Above codes were a callback hell. Functions are called inside another. They are nested.

//ATTENTION: The 'resource' parameter contains a API URL of file of a local folder. 
//It will fire CORS error as the URL is not http. 
//Run it using a server. Then the error will be resolved.
//eg.  use live server vs extension to run server.
