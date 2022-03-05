let coinFlip 
let times = parseInt(prompt('Enter a number between 1 & 10'))

// display
document.write('<h3> welcome to the `coin flip app`</h3><br>')

if (times >= 1 && times <=10) {
    for (let i  = 0; i < times; i++) {
        coinFlip = Math.round(Math.random(1))
        if (coinFlip === 0) {
            console.log('heads')
        } else {
            console.log('tails')
        }
    }
} else {
    alert('You must enter a number between 1 & 10')
}