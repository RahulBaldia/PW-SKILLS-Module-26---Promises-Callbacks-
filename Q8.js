function fetchAndLogPosts() {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            
            return response.json();
        })
        .then(posts => {
            
            console.log(posts);
        })
        .catch(error => {
            
            console.error("Error fetching posts:", error);
        });
}


fetchAndLogPosts();
