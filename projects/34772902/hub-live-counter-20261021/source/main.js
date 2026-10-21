// SPDX-License-Identifier: MIT
import './style.css';
let count = 0;
const output = document.querySelector('#count');
document.querySelector('#increment').addEventListener('click', () => { output.textContent = String(++count); });
document.querySelector('#reset').addEventListener('click', () => { count = 0; output.textContent = '0'; });
