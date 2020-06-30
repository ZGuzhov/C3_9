const city = document.querySelector('.city')
const btn_city = document.querySelector('.btn-city')

btn_city.onclick = () =>{
	document.cookie = "city=${city.textContent}";
	console.log(document.cookie);
}






// b_cats.onclick = () =>{
// 	vote('cats')
// 	voteDone()
// }


// ES.onmessage = message => {
//     const votes = JSON.parse(message.data)
//     const sum = votes["cats"] + votes["parrots"] + votes["dogs"]
//     let cats_p = votes["cats"]/sum*100
//     cats_p = cats_p.toFixed(2)
//     let parrots_p = votes["parrots"]/sum*100
//     parrots_p = parrots_p.toFixed(2)
//     let dogs_p = votes["dogs"]/sum*100
//     dogs_p = dogs_p.toFixed(2)
//     cats.style.cssText = `width: ${cats_p}%;`
//     cats.textContent = `${votes["cats"]}${make_russian(votes["cats"])} - ${cats_p}%`
//     parrots.style.cssText = `width: ${parrots_p}%;`
//     parrots.textContent = `${votes["parrots"]}${make_russian(votes["parrots"])} - ${parrots_p}%`
//     dogs.style.cssText = `width: ${dogs_p}%;`
//     dogs.textContent = `${votes["dogs"]}${make_russian(votes["dogs"])} - ${dogs_p}%`
// }