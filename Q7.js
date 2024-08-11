async function fetchAndCombineData() {
    try {
       
        const [todoResponse, postResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/1")
        ]);

        
        const todo = await todoResponse.json();
        const post = await postResponse.json();

        
        const combinedData = {
            todo,
            post
        };

       
        console.log(combinedData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


fetchAndCombineData();
