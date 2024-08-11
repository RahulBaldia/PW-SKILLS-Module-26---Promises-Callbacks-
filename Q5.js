function greet(name) {
    return new Promise((resolve, reject) => {
        if (typeof name === 'string' && name.trim() !== '') {
            const greeting = `Hello,${name.trim()}!`;
            resolve(greeting);
        } else {
            reject('Invalid name input');
        }
    });
}


greet("Mithun")
    .then(message => console.log(message))
    .catch(error => console.error(error));
