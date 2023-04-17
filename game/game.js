let player = {
    game: {
        points: {
            amount: new Decimal(0),
            change: new Decimal(0.1),
        },
        speed: {
            min: new Decimal(0.99),
            max: new Decimal(1e5), 
            step: new Decimal(0.01),
            value: new Decimal(1)
        },
    },
    settings: {
        fps: new Decimal(30)
    }
};

let points = document.getElementById('points');
let change = document.getElementById('change')
let current = document.getElementById('current');
let real = document.getElementById('real');

function loop() {
    player.game.points.amount = new Decimal(player.game.points.amount.add((player.game.points.change.div(player.settings.fps)).mul(player.game.speed.value)));
    if (player.game.speed.value.eq(0.99)) player.game.speed.value = new Decimal(0);
    updateVisuals();
}

function updateVisuals() {
    if (player.game.points.amount.gte(new Decimal(1e3))) points.innerHTML = player.game.points.amount.toExponential(2);
    else points.innerHTML = player.game.points.amount.toFixed(2);
    if (player.game.points.change.gte(new Decimal(1e3))) change.innerHTML = player.game.points.change.toExponential(2);
    else points.innerHTML = player.game.points.change.toFixed(2);
    if (player.game.points.current.gte(new Decimal(1e3))) current.innerHTML = player.game.points.current.toExponential(2);
    else points.innerHTML = player.game.points.current.toFixed(2);
    real.innerHTML = (player.game.points.change.mul(player.game.speed.value)).toFixed(2);
}

window.onload = () => {
    let speed = document.getElementById('speed');
    speed.min = player.game.speed.min;
    speed.max = player.game.speed.max;
    speed.step = player.game.speed.step;
    speed.value = player.game.speed.value;
    
    speed.addEventListener('input', () => { player.game.speed.value = new Decimal(parseFloat(speed.value)); });
}

setInterval(loop, new Decimal(1000).div(player.settings.fps))
