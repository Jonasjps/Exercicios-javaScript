// A palavra - chave this
let user = {
    name: 'João',
    age: 27,
    email: 'Joaocardoso@gmail.com',
    city: 'São paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function () {
        console.log('Usuario logado')
    },
    logout: function () {
        console.log('Usuario deslogado')
    },
    logBlogPost: function () {
        console.log(this.blogPosts)
    }
}
user.logBlogPost()