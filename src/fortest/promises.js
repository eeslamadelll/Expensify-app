const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('The data resolved from the promise');
    }, 2000);
});

console.log('Before');

promise.then((data) => {
    console.log(data);
});

console.log('After');