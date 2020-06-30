const city = document.querySelector('.city')
const city_text = document.querySelector('.city-text')
const city_form = document.querySelector('.form-group')
const btn_city = document.querySelector('.btn-city')
const btn_city_clr = document.querySelector('.btn-city-clr')

btn_city.onclick = () =>{
	if (city.value != "") {
		document.cookie = "city=" + city.value
		btn_city.style.cssText = "display: none;"
		btn_city_clr.style.cssText = "display: inline-block;"
		city_form.style.cssText = "display: none;"
		city_text.style.cssText = "display: block;"
		city_text.textContent = "Ваш город: " + city.value
	} else {
		alert("Введите название города!")
	}
}

btn_city_clr.onclick = () =>{
	document.cookie = "city=none; max-age=0";
	btn_city.style.cssText = "display: inline-block;"
	btn_city_clr.style.cssText = "display: none;"
	city_form.style.cssText = "display: block;"
	city_text.style.cssText = "display: none;"
	city.value = ""
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
 return matches ? decodeURIComponent(matches[1]) : undefined;
}

let city_cookie = getCookie("city")

if (city_cookie) {
	btn_city.style.cssText = "display: none;"
	btn_city_clr.style.cssText = "display: inline-block;"
	city_form.style.cssText = "display: none;"
	city_text.style.cssText = "display: block;"
	city_text.textContent = "Ваш город: " + city_cookie	
} else {
	btn_city.style.cssText = "display: inline-block;"
	btn_city_clr.style.cssText = "display: none;"
	city_form.style.cssText = "display: block;"
	city_text.style.cssText = "display: none;"
	city.value = ""	
}