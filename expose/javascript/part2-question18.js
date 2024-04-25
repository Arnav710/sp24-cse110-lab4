// create a function to print the current time
let printTime = () => {
    let d = new Date();
    console.log(d.toLocaleTimeString())
}
// call printTime every second
setInterval(printTime, 1000)
