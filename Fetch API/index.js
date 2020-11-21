//Fetch is a built in web API to GET, POST, PUT, DELETE data.

fetch('/data/pc.json')
    .then((response) => {
        console.log("Data returned: ", response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error getting data: ", error);
    });


//ATTENTION: The 'resource' parameter contains a API URL of file of a local folder. 
//It will fire CORS error as the URL is not http. 
//Run it using a server. Then the error will be resolved.
//eg.  use live server vs extension to run server.