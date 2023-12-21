// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
 
function writeCards(names) {
    let messages = [];
    for (let i = 0; i< names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}
console.log(writeCards(names));

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}
countDown(10);
