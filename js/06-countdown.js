let num = parseInt(prompt('Enter a number between 1 & 100'))
let count

// display
document.write('<h3> welcome to the `countdown app`</h3><br>')

if (num >= 1 && num <=100) {
    document.write(num + '<br>')
    count = num
    for (let i  = 0; i < count; i++) {
        num = num - 1
        document.write(num + '<br>')
    }
} else {
    alert('You must enter a number between 1 & 100')
}