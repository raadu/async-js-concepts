const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //XMLHttpRequest.readyState
    // 0 = UNSENT, client created, open not called yet
    // 1 = open() called
    // 2 = send() called
    // 3 = downloading response
    // 4 - response download completed
    // The code will go to state:4 even if there is a status error (like error 404)
    if(request.readyState === 4) {
        console.log(request.responseText);
    }
});

//XMLHttpRequest.open(request type, API URL);
//Opens the connection with API
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//Send the request using XMLHttpRequest.send()
request.send();