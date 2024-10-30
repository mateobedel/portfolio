import './css/style.css';
import 'lenis/dist/lenis.css'

import $ from 'jquery';
window.$ = $;

import './js/home.js';
import { header_events } from './js/header.js';
import { anims_events } from './js/anims.js';
import { projects_events } from './js/projects.js';
import { skills_events } from './js/skills.js';
import { contact_events } from './js/contact.js';


function call_js() {
    anims_events();
    header_events();
    projects_events();
    skills_events();
    contact_events();
}
$(document).ready(call_js);