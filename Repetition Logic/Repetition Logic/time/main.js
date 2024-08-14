let hrs = document.getElementById('hour')
 let min = document.getElementById('min')
 let sec = document.getElementById('sec')

 setInterval(function () {
    let time = new Date()
    hrs.innerHTML = (time.getHours() + 0<10 ? '0' :' ' )+time.getHours()
    min.innerHTML = (time.getMinutes() + 0<10 ? '0' :' ')+time.getMinutes()
    sec.innerHTML = (time.getSeconds() + 0<10 ? '0' :' ')+time.getSeconds()
 })