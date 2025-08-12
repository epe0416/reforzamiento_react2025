

const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

const { name: ironmanName, age: ironmanAge, key} = person

console.log(ironmanName, ironmanAge, key)

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({name, age, key, rank = 'Sin rango'}: Hero) => {



    return{
        keyName: key,
        user: {
            name,
            age,
        },
        rank
    };
};

const { rank, keyName, user: {name, age} } = useContext(person)
console.log({rank, keyName, name, age})

