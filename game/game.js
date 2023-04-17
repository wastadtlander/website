let player = {
    game: {
        points: {
            amount: 0,
            change: 0.1,
        },
        speed: {
            min: 1,
            max: 1.5, 
            step: 0.01,
            value: 1
        },
    },
    settings: {
        fps: 144
    }
};

window.onload = () => {
    let speed = document.getElementById('speed');
    speed.min = player.game.speed.min;
    speed.max = player.game.speed.max;
    speed.step = player.game.speed.step;
    speed.value = player.game.speed.value;
    
    speed.addEventListener('input', () => {
      player.game.speed.value = parseFloat(speed.value);
    });
}

let points = document.getElementById('points');
let change = document.getElementById('change')
let current = document.getElementById('current');
let real = document.getElementById('real');

function loop() {
    player.game.points.amount += (player.game.points.change / player.settings.fps) * player.game.speed.value;
    updateVisuals();
}

function updateVisuals() {
    points.innerHTML = player.game.points.amount.toFixed(2);
    change.innerHTML = player.game.points.change.toFixed(2);
    current.innerHTML = player.game.speed.value.toFixed(2);
    real.innerHTML = (player.game.points.change *  player.game.speed.value).toFixed(2);
}


setInterval(loop, 1000 / player.settings.fps)
