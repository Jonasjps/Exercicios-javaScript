// break 

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
console.log(`Sua pontuação: ${scores[i]}`)

if (scores[i] === 100) {
    console.log('Parabens você atingio a pontuação maxíma de 100 pontos.')

    break
}

}