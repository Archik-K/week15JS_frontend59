let cities = [
	"Воронеж",
	"Москва",
	"Самара",
	"Санкт-Петербург",
	"Вологда",
	"Волгоград",
	"Псков",
	"Челябинск",
];
let temperature_of_cities = [];
let MaxTemperature = -Infinity;
let MinTemperature = Infinity;
for (let i = 0; i < cities.length; i++) {
	let entered_temperature = prompt(
		`Введите температуру для города ${cities[i]}`
	);
	temperature_of_cities.push(parseFloat(entered_temperature));
}
const spisok = document.getElementById("ul");
for (let i = 0; i < cities.length; i++) {
	const list_items = document.createElement("li");
	list_items.textContent = `${temperature_of_cities[i]}`;
}

for (let i = 0; i < temperature_of_cities.length; i++) {
	if (temperature_of_cities[i] > MaxTemperature) {
		MaxTemperature = temperature_of_cities[i];
	}
	if (temperature_of_cities[i] < MinTemperature) {
		MinTemperature = temperature_of_cities[i];
	}
}

for (let i = 0; i < cities.length; i++) {
	const temperature_and_cities = document.createElement("li");
	temperature_and_cities.textContent = `Температура в ${cities[i]}: ${temperature_of_cities[i]}°C`;
	spisok.appendChild(temperature_and_cities);
}
const maximum_temperature = document.createElement("h4");
maximum_temperature.textContent = `Максимальная температура: ${MaxTemperature}°C`;
spisok.appendChild(maximum_temperature);

const minimum_temperature = document.createElement("h4");
minimum_temperature.textContent = `Минимальная температура: ${MinTemperature}°C`;
spisok.appendChild(minimum_temperature);
