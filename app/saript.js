function digitalClock(){
	//получаем текущие дату и время
	let newDate = new Date(); 
	// устанавливаем формат записи времени в div
	let date = newDate.getFullYear() + '/0' + (newDate.getMonth()+1) + '/' +newDate.getDate();
	document.getElementsByClassName("data")[0].innerHTML = date;
	//получаем отдельно часы, минуты, секунды
	let hours = newDate.getHours();
	let minutes = newDate.getMinutes();
	let seconds = newDate.getSeconds();
	//добавляем "0", если цифра меньше 10
	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;
	if (seconds < 10) seconds = '0' + seconds;
	//устанавливаем формат записи времени в div
	let time = hours + ':' + minutes + ':' + seconds;
	document.getElementsByClassName("time")[0].innerHTML = time;
	// получаем div с прогресс-баром, устанавливаем ширину = 0
	let bar = document.getElementById('myBar');
	let widthBar = 0;
	// переводим время в секунды
	let barSeconds = (hours * 3600) + (minutes * 60);
	// высчитываем процент текущего времени
	let n = Math.floor((barSeconds * 100) / 86400) + '%';
	// устанавливаем ширину прогресс-бара пропорционально проценту текущего времени
	if (widthBar >= n) clearInterval(interval);
		else {
			widthBar = n;
			bar.style.width = widthBar;
		}
}
digitalClock();

window.onload = function (){
	setInterval(digitalClock, 1000);
}


	


