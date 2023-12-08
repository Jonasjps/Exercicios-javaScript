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
        // o this nessa classe sempre vai referênciar o objeto criado.
        this.manEater = manEater
    }
}

const bumba = new Mammal('bovino', 'bumba', 3)
const mickey = new Mammal('urso', 'mickey', 10)
const pumpa = new Mammal('suricato', 'pumpa', 8)
const munfasa = new Lion('leão', 'munfasa', 7 , false)


// console.log(munfasa, bumba)

// class Student {
//     constructor (name, email) {
//         this.name = name
//         this.email = email
//     }

//     login () {
//         return `${this.name} fez o login`
//     }

//     static formatToDataBase (aString) {
//         return aString
//         .toUpperCase()
//         .replaceAll(' ', '_')
//     }
// }

    function Student (name, email) {
        this.name = name
        this.email = email

    }

    Student.prototype.login = function login () {
        return `${this.name} fez login`
    }

    Student.prototype.comment = function comment () {
        return `${this.name} comentou`
    }

    function teacherAssistent (name, email, scheduledWeekPost) {
        Student.call(this, name, email)
        this.scheduledWeekPost = scheduledWeekPost 
    }
    //método statico em função contrutora...
    // Student.formatToDataBase = function formatToDataBase  (aString) {
    //     return aString 
    //         .toUpperCase()
    //         .replaceAll(' ', '_')
    // }
    

const JonasPessoa = new Student('Jonas', 'jonaspsjw@hotmail.com')
// const Virginia = new Student('Vivi', 'Virginijfsb@gmail.com')
const ArthurSilva = new teacherAssistent('Arthur Silva', 'arthurSilva@JonasPessoa.com', false)
console.log(JonasPessoa ,ArthurSilva)
// console.log(Student.formatToDataBase('String para o banco de dados'))
// console.dir(Student.formatToDataBase)