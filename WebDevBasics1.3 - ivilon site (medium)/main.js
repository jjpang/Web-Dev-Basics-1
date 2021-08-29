// const image = document.querySelectorAll('.item-img')

// image.forEach(function (i) {
//     i.addEventListener("mouseover", function (e) {
//         e.target.src = 'img/rod21.jpg'
//         console.log('TEST')
//     })
// })

// var collection = document.getElementById("about-us")
// zenscroll.to(collection, 2000)
// zenscroll.toY(50)

// document.location.reload(true)

var image = document.getElementsByClassName('background-img');
new simpleParallax(image, {
	scale: 2.0
});