import { heroes, type Hero, Owner } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if(!hero){
    //     throw new Error(`No existe un héroe con es ${id}`)
    // }

    return hero;
};

// console.log(getHeroById(5))

export const getHeroesByOwner = (owner: Owner): Hero[] | undefined => {
    // const heroesByOwner = heroes.filter((hero) => {
    //     return hero.owner === owner
    // })
    const heroesByOwner = heroes.filter((hero) => hero.owner === owner)
    return heroesByOwner;
}