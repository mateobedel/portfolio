import $ from 'jquery';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function import_skills_json() {
    $.getJSON('/portfolio/json/skills.json', function(data) {
        // Create skills grid container
        const skillsGrid = $('<div class="skills-grid"></div>');
        
        // Generate skill pills from JSON data
        data.forEach(skill => {
            const skillPill = $(`
                <div class="skill-pill" style="background-color: ${skill.color}15;">
                    <div class="skill-icon">
                        <img src="./svg/${skill.svg}.svg" alt="${skill.name}" />
                    </div>
                    <div class="skill-content">
                        <h3 class="skill-title">${skill.name}</h3>
                    </div>
                </div>
            `);
            
            skillsGrid.append(skillPill);
        });
        
        // Add the grid to the skills section
        $('#skills .content-pad').append(skillsGrid);
    }).fail(function() {
        console.error('Failed to load skills data');
    });
}


function observeSkillsHeight(containers) {
	$.each(containers, function(_, container) {
		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				ScrollTrigger.refresh();
			}
		});
		
		resizeObserver.observe(container[0]);
	});
}


export function skills_events() {

	

	import_skills_json();
	//const containers = [$("#skills").find("#specialization"), $("#skills").find("#others")];
	//observeSkillsHeight(containers);


}
