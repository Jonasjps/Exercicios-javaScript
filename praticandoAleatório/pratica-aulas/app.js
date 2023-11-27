//herança entre classes
class Mammal {
    constructor (species, name, age) {
        this.species = species
        this.name = name
        this.age = age
    }

    incrementAge () {
        this.age++
    }
}
// A palavra extendes é usada para criar uma class filha de outra class.
class Lion extends Mammal {
    constructor (species, name, age, manEater) {
        // A palavra chave super é usada aqui para referênciar o contructor da class pai (superior) que no caso é  Mammal.
        super(species, name, age)
        this.manEater = manEater
    }
}

const bumba = new Mammal('bovino', 'bumba', 3)
const mickey = new Mammal('urso', 'mickey', 10)
const pumpa = new Mammal('suricato', 'pumpa', 8)
const munfasa = new Lion('leão', 'munfasa', 7 , false)


console.log(munfasa, bumba)