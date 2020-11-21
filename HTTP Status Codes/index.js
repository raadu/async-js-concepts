const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //Readystatechange turns 4 even if the data is not successfully fetched
    //So also check http status codes wit it
    if(request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    }
    else if(request.readyState === 4) {
        console.log("Could not fetch the data");
    }
});

//XMLHttpRequest.open(request type, API URL);
//Opens the connection with API
//Remove "s" from the below API URL for success
request.open('GET', 'https://jsonplaceholder.typicode.com/todoss');
//Send the request using XMLHttpRequest.send()
request.send();