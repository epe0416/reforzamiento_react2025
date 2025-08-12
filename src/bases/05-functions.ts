

function greet( name: string ): string {
    return `Hola ${ name }`
    // return 123
}

const greet2 = (name: string): string => `Hola ${name}`


const message = greet('Goku')
const message2 = greet2('Vegeta')

console.log(message, message2)

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23'
    };
}

const getUser2 = (): User => ({
        uid: 'ABC-123',
        username: 'El_Papi23'
    });

const user = getUser()
const user2 = getUser2()
console.log(user, user2);

const myNumbers = [1,2,3,4,5];

// myNumbers.forEach( function(value) {
//     console.log({ value })
// })

// myNumbers.forEach((value) => {
//     console.log(value)
// })

// myNumbers.forEach(console.log)

myNumbers.forEach((value, index, arr) => {
    console.log(value, index, arr)
})