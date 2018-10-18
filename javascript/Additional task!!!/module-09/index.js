'use strict';

const jsCounter = $qs('.js-counter');
const jsStart = $qs('.js-start');
const jsStop = $qs('.js-stop');

const timer = {
    value: 0,
    timerId: null,
    isActive: false,
    start(callback) {
        this.isActive = true;
        this.timerId = setInterval(() => {
            this.value += 1;
            callback(this.value);
        }, 1000)
    },
    stop(callback) {
        this.isActive = false;

        clearInterval(this.timerId);
        this.timerId = null;
        this.value = 0;
        callback(this.value);
    }
}

$on(jsStart, 'click', timer.start.bind(timer, updateCounterValue))
$on(jsStop, 'click', timer.stop.bind(timer, updateCounterValue))

function updateCounterValue(val) {
    jsCounter.textContent = val;
};

