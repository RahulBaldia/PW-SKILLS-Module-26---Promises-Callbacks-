function fetchDataAndHandleError() {
    
    fetch("https://jsonplaceholder.typicode.com/posts/123456789")
        .then(response => {
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
           
            console.log(data);
        })
        .catch(error => {
           
            console.error("Error fetching data:", error);

            
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "An error occurred while fetching data. Please try again later.";
            errorMessage.style.color = "red"; 
            document.body.appendChild(errorMessage);
        });
}


fetchDataAndHandleError();
