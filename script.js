'use strict'

const btn = document.getElementById('btn')
const input = document.getElementById('text')
const square = document.getElementById('square')
const eBtn = document.getElementById('e_btn')
const range = document.getElementById('range')
const circle = document.getElementById('circle')

const colorChange = function (e) {

    const styleChange = function () {
        square.style.backgroundColor = e.target.value
    }
    btn.addEventListener('click', styleChange)
}
input.addEventListener('input', colorChange)

eBtn.style.display = 'none'

const fInput = function (e) {
    const value = e.target.value + '%'
    circle.style.width = value
    circle.style.height = value
}

range.addEventListener('input', fInput)
