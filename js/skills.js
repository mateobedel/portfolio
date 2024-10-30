import $ from 'jquery';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function import_skills_json(containers) {

    $.getJSON('ressources/json/skills.json', function(data) {
    
		$.each(containers, function(i, container) {
			var skills = data.skills[i];
			container.append('<h3>'+skills.title+'</h3>');
			
			//Tabs
			var tabs_html = '<ul class="tabs"><li class="hover"></li>';
			$.each(skills.categories, function(j, categorie) {
				if (j==0) tabs_html += '<li class="tab active" data-tab="'+'tab_'+j.toString()+'">'+categorie.name+'</li>';
				else tabs_html += '<li class="tab" data-tab="'+'tab_'+j.toString()+'">'+categorie.name+'</li>';
			});
			container.append($(tabs_html+"</ul>"));

			//Tab slides
			container.append($('<div class="tab-content">'));
			$.each(skills.categories, function(j, categorie) {
				var slide_html = '<div id="'+'tab_'+j.toString()+'" class="tab-slide">';
				$.each(categorie.content, function(k, item) {
					slide_html +='<div class="svg-container">';
					slide_html += '<img src="ressources/svg/language/'+item.svg+'.svg" alt="'+item.name+'">';
					slide_html += '<span class="black-glass">'+item.name+'</span></div>';
				});
				container.append($(slide_html+'</div>'));
			});
		});
	});
}


function setSelectorScalePos(selector, top, left, width, height) {
	selector.css("left", left);
	selector.css("top", top);
	selector.width(width);
	selector.height(height);
}


function updateTabs(clicked_tab, section) {

	var selector = section.find(".hover");
	var tab_contents = section.find(".tab-slide");
	var tabs = section.find(".tab");
		
	
	tabs.removeClass("active");
	clicked_tab.addClass("active");

	setSelectorScalePos(selector, clicked_tab.position().top, clicked_tab.position().left, clicked_tab.outerWidth(), clicked_tab.outerHeight() - 2);

	tab_contents.hide();
	section.find("#" + clicked_tab.data("tab")).show();

	//Animate height

	var heightnow = section.outerHeight();
    var heightfull = section.css({height:'auto'}).outerHeight();
    section.css({height:heightnow}).animate({
        height: heightfull
    }, 300);
	
}


function observeTabAdded(containers) {
	$.each(containers, function(_, section) {

		var observer = new MutationObserver(function(mutations, observer) {

			var active = section.find(".active");
			var selector = section.find(".hover");
			var tab_contents = section.find(".tab-slide");
			var tabs = section.find(".tab");

			if (active.length && selector.length && tab_contents.length && tabs.length) {
				tab_contents.hide();
				setSelectorScalePos(selector, active.position().top, active.position().left, active.outerWidth(), active.outerHeight()- 2);
				section.find("#" + active.data("tab")).show();


				//Update on click
				tabs.on('click', function() {
					section.css("height",section.outerHeight()+"px");
					updateTabs($(this), section);
				});

				//Update on resize
				$( window ).on('resize', function() {
					active = section.find(".active");
					section.css("height",section.css({height:'auto'}).outerHeight()+"px");
					setSelectorScalePos(selector, active.position().top, active.position().left, active.outerWidth(), active.outerHeight());
				});
				observer.disconnect(); 
			}
		});

		observer.observe(section[0], {
			childList: true,
			subtree: true
		});
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

	const containers = [$("#skills").find("#specialization"), $("#skills").find("#others")];

	import_skills_json(containers);
	observeSkillsHeight(containers);
	observeTabAdded(containers);


}
