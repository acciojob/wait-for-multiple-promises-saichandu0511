//your JS code here. If required.
const output = document.getElementById("output");

function createPromise() {
    return new Promise(function(resolve) {
        const startTime = Date.now();

        const delay = Math.floor(Math.random() * 3) + 1;

        setTimeout(function() {
            const endTime = Date.now();
            const timeTaken = (endTime - startTime) / 1000;

            resolve(timeTaken);
        }, delay * 1000);
    });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

const start = Date.now();

Promise.all([promise1, promise2, promise3])
    .then(function(results) {

        const totalTime = (Date.now() - start) / 1000;

        output.innerHTML = `
            <tr>
                <td>Promise 1</td>
                <td>${results[0].toFixed(3)}</td>
            </tr>
            <tr>
                <td>Promise 2</td>
                <td>${results[1].toFixed(3)}</td>
            </tr>
            <tr>
                <td>Promise 3</td>
                <td>${results[2].toFixed(3)}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>${totalTime.toFixed(3)}</td>
            </tr>
        `;
    });