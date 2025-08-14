
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// const[p1,p2,p3] = characterNames
// const[,p2] = characterNames
const[, ,p3] = characterNames
// console.log({p3})

const returnsArrayFn = () => {
    return['ABC', 123] as const;
}

const [ letters, numbers ] = returnsArrayFn();

// console.log( numbers + 100 )
// console.log( letters + 100 )


// Tarea

const useState = (value: string) => {
    return[
        value,
        (newValue: String) => {
            console.log(newValue)
        },
    ] as const;
};

const[ name, setName ] = useState('Goku')
console.log(name)
setName('Vegeta')