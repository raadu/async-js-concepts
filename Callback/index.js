//Callback: Callback is a function.
//That function is passed as a parameter to another function.
//And that function will be called inside.

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //Readystatechange turns 4 even if the data is not successfully fetched
        //So also check http status codes wit it
        if(request.readyState === 4 && request.status === 200) {
           //Pass undefined as there is no error
           // Pass data as second argument  
           callback(undefined, request.responseText);
        }
        else if(request.readyState === 4) {
            //Pass the error text as first argument
            //Pass undefined as second argument as there is no data fetched
            callback("Could not fetch data", undefined);
        }
    });

    //XMLHttpRequest.open(request type, API URL);
    //Opens the connection with API
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    //Send the request using XMLHttpRequest.send()
    request.send();
};

console.log(1);
console.log(2);


//Pass callback function as argument
getTodos((error, data) => {
    console.log("Callback fired");
    if(error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
