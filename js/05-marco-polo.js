// display
document.write('<h3> welcome to the `marco polo app` </h3><br>')

for (let i = 1; i < 101; i++) {
    console.log(i)
    if (i % 3 == 0 && i % 5 ==0) {
        console.log(`marco! polo!`) 
    } else if (i % 5 == 0) {
        console.log(`polo!`)
    } else if (i % 3 == 0 ) {
        console.log('marco!')
    }
}