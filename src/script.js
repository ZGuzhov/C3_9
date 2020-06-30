const city = document.querySelector('.city')
const city_text = document.querySelector('.city-text')
const city_form = document.querySelector('.form-group')
const btn_city = document.querySelector('.btn-city')
const btn_city_clr = document.querySelector('.btn-city-clr')

const btn_checkbox = document.querySelector('.btn-checkbox')
const ch1 = document.querySelector('input[id=Check1]')
const ch2 = document.querySelector('input[id=Check2]')
const ch3 = document.querySelector('input[id=Check3]')
const ch4 = document.querySelector('input[id=Check4]')
const ch5 = document.querySelector('input[id=Check5]')
const ch6 = document.querySelector('input[id=Check6]')


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

btn_checkbox.onclick = () =>{
	let key = ""
	if (ch1.checked) {key="1"} else {key="0"}
	if (ch2.checked) {key+="1"} else {key+="0"}
	if (ch3.checked) {key+="1"} else {key+="0"}
	if (ch4.checked) {key+="1"} else {key+="0"}
	if (ch5.checked) {key+="1"} else {key+="0"}
	if (ch6.checked) {key+="1"} else {key+="0"}
	document.cookie = "ch=" + key
	btn_checkbox.style.cssText = "display: none;"
	ch1.disabled = true
	ch2.disabled = true
	ch3.disabled = true
	ch4.disabled = true
	ch5.disabled = true
	ch6.disabled = true
}

let ch_cookie = getCookie("ch")

if (ch_cookie) {
	if (ch_cookie[0] === "0") {ch1.checked = False} else {ch1.checked = True}
	if (ch_cookie[1] === "0") {ch2.checked = False} else {ch2.checked = True}
	if (ch_cookie[2] === "0") {ch3.checked = False} else {ch3.checked = True}
	if (ch_cookie[3] === "0") {ch4.checked = False} else {ch4.checked = True}
	if (ch_cookie[4] === "0") {ch5.checked = False} else {ch5.checked = True}
	if (ch_cookie[5] === "0") {ch6.checked = False} else {ch6.checked = True}
	btn_checkbox.style.cssText = "display: none;"
	ch1.disabled = true
	ch2.disabled = true
	ch3.disabled = true
	ch4.disabled = true
	ch5.disabled = true
	ch6.disabled = true
}