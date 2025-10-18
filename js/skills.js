import $ from 'jquery';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function createSkillPill(skill) {
    return $(`
        <div class="skill-pill" style="background-color: ${skill.color}15;">
            <div class="skill-icon">
                <img src="./svg/${skill.svg}.svg" alt="${skill.name}" />
            </div>
            <div class="skill-content">
                <h3 class="skill-title">${skill.name}</h3>
            </div>
        </div>
    `);
}

function loadSkills(jsonFile, container) {
    $.getJSON(`/portfolio/json/${jsonFile}`, function(data) {
        const skillsGrid = $('<div class="skills-grid"></div>');
        
        data.forEach(skill => {
            skillsGrid.append(createSkillPill(skill));
        });
        
        $(container).append(skillsGrid);
    }).fail(function() {
        console.error(`Failed to load ${jsonFile}`);
    });
}

// function observeSkillsHeight(containers) {
//     $.each(containers, function(_, container) {
//         const resizeObserver = new ResizeObserver((entries) => {
//             for (let entry of entries) {
//                 ScrollTrigger.refresh();
//             }
//         });
        
//         resizeObserver.observe(container[0]);
//     });
// }

export function skills_events() {
    loadSkills('skills.json', '#skills .main-skills');
    loadSkills('secondary-skills.json', '#skills .secondary-skills');
}
