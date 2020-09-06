Player = {
	num: 10,
	isRunning: false
}

function updateHTML() {
	document.getElementById('num').innerHTML = Player.num;
}

function exit() {
	Player.isRunning = false;
}

function main() {
	Player.isRunning = true;
	updateHTML();
	if (!Player.isRunning)
		main();
}