'use strict';

const body = document.body;

class Stopwatch {
    constructor(parent) {
        this.parent = parent;
        this.arrLapsValues = []
        this.currentLap;
        this.isActive = false;
        this.deltatime = null;
        this.pausetime = 0;
        this.id = null;

    }
    createStopwatchElements(parent) {
        // CREATE ELEMENTS
        this.stopwatch = document.createElement('div')
        this.stopwatch.classList.add("stopwatch");

        this.jsTime = document.createElement('p');
        this.jsTime.classList.add('time', "js-time")
        this.jsTime.textContent = '00:00.0';

        this.jsStart = document.createElement('button');
        this.jsStart.classList.add('btn', 'js-start');
        this.jsStart.textContent = "Start"

        this.jsTakeLap = document.createElement('button');
        this.jsTakeLap.classList.add('btn', 'js-take-lap');
        this.jsTakeLap.textContent = 'Lap';

        this.jsReset = document.createElement('button')
        this.jsReset.classList.add('btn', 'js-reset');
        this.jsReset.textContent = 'Reset';
        this.jsReset.disabled = true;

        this.jsLaps = document.createElement('ul');
        this.jsLaps.classList.add('laps', 'js-laps')


        // PUSH in PAGE ELEMENTS
        this.stopwatch.append(this.jsTime, this.jsStart, this.jsTakeLap, this.jsReset);
        parent.append(this.stopwatch, this.jsLaps);

    }

    formatedTime(time) {
        let minute = parseInt((time / 1000 / 60) % 60);
        let second = parseInt((time / 1000) % 60);
        let millisecond = parseInt((time % 1000) / 100);

        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        return (`${minute}:${second}.${millisecond}`);
    }

    writeInPage(elem, time) {
        elem.textContent = this.formatedTime(time);
    }

    startTimer() {

        if (!this.isActive) {
            this.isActive = true;
            this.jsStart.textContent = 'Pause';
            this.jsReset.disabled = false;
            this.starttime = Date.now();
            this.id = setInterval(() => {
                this.currenttime = Date.now();
                this.deltatime = this.currenttime - this.starttime + this.pausetime;
                this.writeInPage(this.jsTime, this.deltatime)

            }, 100)
        } else {
            clearInterval(this.id)
            this.isActive = false;
            this.pausetime = this.deltatime;
            this.jsStart.textContent = "Continue"
        }
    }

    stopTimer() {
        clearInterval(this.id);
        this.isActive = false;
        this.jsReset.disabled = true;
        this.pausetime = 0;
        this.deltatime = 0;
        this.jsStart.textContent = 'Start'
        this.writeInPage(this.jsTime, this.deltatime)
    }

    createElementLi(value) {
        this.li = document.createElement('li');
        this.li.textContent = value;
        this.jsLaps.appendChild(this.li);

    }

    saveLap() {
        this.currentLap = this.jsTime.textContent;
        this.arrLapsValues.push(this.currentLap);
        this.createElementLi(this.currentLap)
    }

    createStopwatch(parent) {
        this.createStopwatchElements(this.parent)

        this.jsStart.addEventListener('click', this.startTimer.bind(this));
        this.jsReset.addEventListener('click', this.stopTimer.bind(this));
        this.jsTakeLap.addEventListener('click', this.saveLap.bind(this));
    }


}

const timerA = new Stopwatch(body)

timerA.createStopwatch()

const timer1 = new Stopwatch(body)
const timer2 = new Stopwatch(body)

timer1.createStopwatch()
timer2.createStopwatch()


// const jsTime = document.querySelector('.js-time');
// const jsStart = document.querySelector('.js-start');
// const jsTakeLap = document.querySelector('.js-take-lap');
// const jsReset = document.querySelector('.js-reset');
// const jsLaps = document.querySelector('.js-laps');
// const arrLapsValues = []
// let currentLap;

// let isActive = false;
// let deltatime = null;
// let pausetime = 0;
// let id = null;

// function startTimer() {

//     if (!isActive) {
//         isActive = true;
//         jsStart.textContent = 'Pause';
//         jsReset.disabled = false;
//         const starttime = Date.now();
//         id = setInterval(() => {
//             const currenttime = Date.now();
//             deltatime = currenttime - starttime + pausetime;
//             writeInPage(jsTime, deltatime)

//         }, 100)
//     } else {
//         clearInterval(id)
//         isActive = false;
//         pausetime = deltatime;
//         jsStart.textContent = "Continue"
//     }
// }

// function stopTimer() {
//     clearInterval(id);
//     isActive = false;
//     jsReset.disabled = true;
//     pausetime = 0;
//     deltatime = 0;
//     jsStart.textContent = 'Start'
//     writeInPage(jsTime, deltatime)
// }

// function saveLap() {
//     currentLap = jsTime.textContent;
//     arrLapsValues.push(currentLap);
//     createElementLi(currentLap)
// }

// function createElementLi(value) {
//     const li = document.createElement('li');
//     li.textContent = value;
//     jsLaps.appendChild(li);

// }

// function formatedTime(time) {
//     let minute = parseInt((time / 1000 / 60) % 60);
//     let second = parseInt((time / 1000) % 60);
//     let millisecond = parseInt((time % 1000) / 100);

//     minute = minute < 10 ? "0" + minute : minute;
//     second = second < 10 ? "0" + second : second;

//     return (`${minute}:${second}.${millisecond}`);
// }

// function writeInPage(elem, time) {
//     elem.textContent = formatedTime(time);
// }

// jsStart.addEventListener('click', startTimer);
// jsReset.addEventListener('click', stopTimer);
// jsTakeLap.addEventListener('click', saveLap);

