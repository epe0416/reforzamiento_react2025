
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
    // address: {
    //     postalCode: string;
    //     city: string
    // }
}

interface Address {
    postalCode: string;
    city: string
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode : 'ABC123',
        city: 'New York'
    }
};

console.log(ironman)

// const spiderman = {...ironman}
// const spiderman = structuredClone(ironman)

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;

// spiderman.address.city = 'Chinandega';

// console.log(ironman, spiderman)