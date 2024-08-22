import './style.css'

import Experience from './Experience/Experience.js'
// import { read, write } from 'ktx-parse';

// const container = read(data /* ← Uint8Array or Buffer */);
// const data = write(container); // → Uint8Array

const experience = new Experience(document.querySelector('canvas.webgl'))
