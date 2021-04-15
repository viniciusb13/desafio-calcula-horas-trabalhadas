//calcula o total de horas trabalhadas
function calcDiffHours(initialHourValue, finalHourValue) {
	let clockIn = initialHourValue.split(':');
	let clockOut = finalHourValue.split(':');

	let initialDate = new Date();
	initialDate.setHours(clockIn[0]);
	initialDate.setMinutes(clockIn[1]);
	
	let finalDate = new Date();
	finalDate.setHours(clockOut[0]);
	finalDate.setMinutes(clockOut[1]);

	let timeDiff = finalDate.getTime() - initialDate.getTime(); //in ms
	let minDiff = timeDiff / 60 / 1000; //in minutes
	let hDiff = timeDiff / 3600 / 1000; //in hours

	let totalHours = Math.floor(hDiff);
	let totalMinutes = minDiff - 60 * totalHours;

	return `Total trabalhado: ${totalHours} horas e ${totalMinutes} minutos.`;
}

//chama a função que calcula as horas e chama a função que seta o resultado no HTML
function calcHour(){
	let result = calcDiffHours(getHoraInicial(),getHoraFinal());
	setTotalHoras(result);
}
//pega hora inicial
function getHoraInicial(){
	return document.getElementById('entranceTime').value;	
}

//pega hora final
function getHoraFinal(){
	return document.getElementById('exitTime').value;
}

//seta o valor do resultado no HTML
function setTotalHoras(value) {
	document.getElementById('result').textContent = value;
}
