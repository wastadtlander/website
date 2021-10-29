let player = {
	candles: {

	},
	fuel: {
		have: new Decimal(50),
		gain: new Decimal(-0.1),
		max: new Decimal(50)
	},
	wax: {
		have: new Decimal(0),
		gain: new Decimal(0.1),
		max: new Decimal(50)
	}
}

function onLoad() {
	for (let i = 0; i <= 8; ++i) updateHTML(i);
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
			let waxPercent = new Decimal((player.wax.have.div(player.wax.max)).mul(100));
			document.getElementById("waxBar").style.width = waxPercent + '%';
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
		/* Fuel have value */					
		case 5:
			if (player.wax.have.lt(10000)) document.getElementById("fuelHave").innerHTML = player.fuel.have.toFixed(0);
			else document.getElementById("fuelHave").innerHTML = player.fuel.have.toExponential(2);
			break;
		/* Fuel bar */
		case 6:
			let fuelPercent = new Decimal((player.fuel.have.div(player.fuel.max)).mul(100));
			document.getElementById("fuelBar").style.width = fuelPercent + '%';
			break;
		/* Fuel max value */
		// case 7:
		// 	document.getElementById("fuelMax").innerHTML = player.fuel.max;
		// 	break;
		/* Fuel gain value */
		case 8:
			/* TODO: Clarify how the gain is displayed depending on substraction */
			if (player.fuel.gain.lt(10000)) document.getElementById("fuelGain").innerHTML = " (" + player.fuel.gain.toFixed(1) + "/s)";
			else document.getElementById("fuelGain").innerHTML = " (" + player.fuel.gain.toExponential(2) + "/s)";
		default:
			break;
	}
}

/* Main game loop */
onLoad();
let game = setInterval(() => {
	if (player.wax.have.lt(player.wax.max)) player.wax.have = player.wax.have.add(player.wax.gain);
	else if (player.wax.have.gt(player.wax.max)) player.wax.have = player.wax.max;

	updateHTML(1);
	updateHTML(2);

	if (player.fuel.have.gt(0)) player.fuel.have = player.fuel.have.add(player.fuel.gain);
	else if (player.fuel.have.lt(0)) player.fuel.have = 0;

	updateHTML(5);
	updateHTML(6);
}, 50);