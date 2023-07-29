// Создаем массив "cities", содержащий список городов
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
// Создаем пустой массив "temperature_of_cities", в который будем сохранять введенные пользователем температуры для каждого города
let temperature_of_cities = [];
// Инициализируем переменную "MaxTemperature" значением минус бесконечности, чтобы убедиться, что первое значение температуры будет больше этой инициализации
let MaxTemperature = -Infinity;
// Инициализируем переменную "MinTemperature" значением плюс бесконечности, чтобы убедиться, что первое значение температуры будет меньше этой инициализации
let MinTemperature = Infinity;

// Получаем ссылку на элемент списка с id "ul" на веб-странице, куда будем добавлять данные о погоде
const spisok = document.getElementById("ul");

for (let i = 0; i < cities.length; i++) {
	// Цикл, который просит пользователя ввести температуру для каждого города из списка
	let entered_temperature = prompt(
		`Введите температуру для города ${cities[i]}`
	); // Запрашиваем у пользователя ввод температуры для текущего города с помощью всплывающего окна prompt
	temperature_of_cities.push(Number(entered_temperature));
	// Преобразуем введенное значение температуры в число с помощью Number и добавляем его в массив "temperature_of_cities"
}

for (let i = 0; i < temperature_of_cities.length; i++) {
	// Цикл, который находит максимальную и минимальную температуру среди введенных значений
	if (temperature_of_cities[i] > MaxTemperature) {
		// Если текущая температура больше значения "MaxTemperature"
		MaxTemperature = temperature_of_cities[i];
		// Присваиваем "MaxTemperature" значение текущей температуры, таким образом, находим максимальную температуру
	}
	if (temperature_of_cities[i] < MinTemperature) {
		// Если текущая температура меньше значения "MinTemperature"
		MinTemperature = temperature_of_cities[i];
		// Присваиваем "MinTemperature" значение текущей температуры, таким образом, находим минимальную температуру
	}
}

for (let i = 0; i < cities.length; i++) {
	// Цикл, который создает элементы списка для каждого города и его температуры
	const temperature_and_cities = document.createElement("li");
	// Создаем элемент списка с помощью метода "createElement"
	temperature_and_cities.textContent = `Температура в ${cities[i]}: ${temperature_of_cities[i]}°C`;
	// Задаем текст элемента списка, содержащий информацию о городе и его температуре
	spisok.appendChild(temperature_and_cities);
	// Добавляем элемент списка внутрь элемента списка "spisok" на веб-странице
}

const maximum_temperature = document.createElement("h4");
// Создаем элемент заголовка h4 для вывода максимальной температуры
maximum_temperature.textContent = `Максимальная температура: ${MaxTemperature}°C`;
// Задаем текст элемента заголовка, содержащий максимальную температуру
spisok.appendChild(maximum_temperature);
// Добавляем элемент заголовка внутрь элемента списка "spisok" на веб-странице

const minimum_temperature = document.createElement("h4");
// Создаем элемент заголовка h4 для вывода минимальной температуры
minimum_temperature.textContent = `Минимальная температура: ${MinTemperature}°C`;
// Задаем текст элемента заголовка, содержащий минимальную температуру
spisok.appendChild(minimum_temperature);
// Добавляем элемент заголовка внутрь элемента списка "spisok" на веб-странице
