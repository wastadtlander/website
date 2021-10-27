let player = {
	wax: {
		have: new Decimal(0),
		gain: new Decimal(0.1),
		max: new Decimal(50)
	}	
}

function onLoad() {
	for (let i = 0; i <= 4; ++i) updateHTML(i);
}

function updateHTML(element) {
	switch(element) {
		/* Wax have value */
		case 1:
			if (player.wax.have.lt(10000)) document.getElementById("waxHave").innerHTML = player.wax.have.toFixed(0);
			else document.getElementById("waxHave").innerHTML = player.wax.have.toExponential(2);
			break;
		/* Wax bar */
		case 2:
			let percent = new Decimal((player.wax.have.div(player.wax.max)).mul(100));
			document.getElementById("waxBar").style.width = percent + '%';
			break;
		/* Wax max value */
		// case 3:
		// 	document.getElementById("waxMax").innerHTML = player.wax.max;
		// 	break;
		/* Wax gain value */
		case 4:
			/* TODO: Clarify how the gain is displayed depending on substraction */
			if (player.wax.gain.lt(10000)) document.getElementById("waxGain").innerHTML = " (+" + player.wax.gain.toFixed(1) + "/s)";
			else document.getElementById("waxGain").innerHTML = " (+" + player.wax.gain.toExponential(2) + "/s)";
		default:
			break;
	}
}

/* Main game loop */
onLoad();
let game = setInterval(() => {
	if (player.wax.have.lt(player.wax.max)) {
		player.wax.have = player.wax.have.add(player.wax.gain);
		updateHTML(1);
		updateHTML(2);
	} else if (player.wax.have.gt(player.wax.max)) {
		player.wax.have = player.wax.max;
		updateHTML(1);
		updateHTML(2);
	}
}, 50);