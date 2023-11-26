class animmal {
    constructor (species, name, age ) {
        this.species = species
        this.name = name
        this.age = age
    }

    incrementAge () {
        this.age++
    }
}


class Lion extends animmal {
    constructor (species, name, age, manEater) {
        super(species, name, age)
        this.manEater = manEater
    }

   eatZebras (animals) {
    return this.animals = animals.filter(animal => animal.species !== 'zebra')
    
   }
}

const zeca = new animmal('zebra', 'zeca', 6)
const gango = new animmal('gnu', 'gango', 4)
const timão = new animmal('javali', 'timão', 7)
const munfasa = new Lion('leão', 'munfaza', 8, false)

const animals = [zeca, gango, timão]

console.log(munfasa, gango)
