import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let mouseX, mouseY;


function import_projects_json(project_list) {

    
    $.getJSON('/portfolio/json/projects.json', function(data) {

        var projects = data.projects;

        project_list.append('<div class="spacer"></div>');

        $.each(projects, function(i, project) {
  
            var html_project; 

            if (i === 0) html_project = '<div class="project-card active-project" data-link="'+project.link+'">';
            else html_project = '<div class="project-card" data-link="'+project.link+'">';
            
            html_project += '<div class="img-text-cont"><div class="img-container purple-box">';

            html_project += '<div class="date-cont black-glass">'+project.date+'</div>';

            html_project += '<img src="' + project.image + '" alt="' + project.title + '">';
            html_project += '</div><div class="txt-container">';
            html_project += '<h3 class="purple-box">' + project.title + '</h3>';
            html_project += '<p class="purple-box">'+ project.description +'</p>';
            html_project += '</div></div><div class="language-bar">';

            $.each(project.languages, function(_, language) {
                html_project += '<div class="language-text purple-box">' + language + '</div>';
            });
  
            
            html_project += '<div class="github-button">See on Github</div></div></div>'  
  
            project_list.append($(html_project));
      });
      
      project_list.append('<div class="spacer"></div>');
  });
  
}

function observeProjectHeight(container) {
    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            ScrollTrigger.refresh();
        }
    });
    resizeObserver.observe(container);
}

function clicked_project(project_card) {
    if ($(project_card).hasClass("active-project")) 
        window.open($(project_card).data("link"), '_blank');
}

function horizontall_scroll(project, projectContainer) {

    var screenCenter = window.innerWidth / 2;

    var leftCardPos = project.getBoundingClientRect().left;
    var curCardWidth = project.getBoundingClientRect().right - project.getBoundingClientRect().left;
    var cardCenter = leftCardPos + curCardWidth/2.0;

    //Scroll to clicked card
    projectContainer[0].scrollBy({
        top: 0, 
        left: cardCenter-screenCenter, 
        behavior: 'smooth'
        });
}

function updateActiveCard(projectContainer) {
    var screenCenter = window.innerWidth / 2;
    const cards = projectContainer.find(".project-card")

    let minDiff = Infinity;
    let activeCard = null;

    //Looking for closest card to the screen center
    cards.each(function () {

        const card = $(this);
        var cardCenter = card.offset().left + card.outerWidth()/2;

        //Update active card*
        const diff = Math.abs(screenCenter - cardCenter);
        if (diff < minDiff) {
            minDiff = diff;
            activeCard = card;
        }
    });

    cards.removeClass('active-project');
    if (activeCard) activeCard.addClass('active-project');
}

function change_cursor_icon(card, following_cursor_icons, gitLogo, arrowLeft, arrowRight, screenCenter, cardCenter) {
    following_cursor_icons.hide();
    if ($(card).hasClass("active-project")) gitLogo.show();
    else if (screenCenter > cardCenter) arrowLeft.show();
    else arrowRight.show();

}

function update_cursor() {

    var following_cursor = $('#following-cursor');
    var smallScreen = window.innerWidth <= 768;
    if (smallScreen) following_cursor.css("display","none");


    $(window).on("mousemove", e => {
        //Update cursor position
        mouseX = e.clientX;
        mouseY = e.clientY;
        gsap.to(following_cursor, .2, {x: mouseX, y: mouseY});
    });
}

function update_cursor_icon(projectContainer) {

    var screenCenter = window.innerWidth / 2;
    var following_cursor = $('#following-cursor');


    const following_cursor_icons = following_cursor.find(".cursor-icon"),
    arrowRight = following_cursor.find("#following-cursor-right"),
    arrowLeft = following_cursor.find("#following-cursor-left"),
    gitLogo = following_cursor.find("#following-cursor-git");

    //MOUSEENTER CARD
    projectContainer.on("mouseenter", "div.project-card", function(e) {
        
        $(this).addClass("hovered");

        //Animate cursor on enter
        gsap.to(following_cursor, 1.5, {scale: 1, rotate: 0, ease: "elastic.out(1,0.3)", overwrite: "auto"});
        gsap.to(following_cursor_icons, .4, {scale: 1, ease: "power3.out", overwrite: "auto"});

        //Update cursor depending on the aimed div
        var cardCenter = $(this).offset().left + $(this).outerWidth()/2;
        change_cursor_icon(this, following_cursor_icons, gitLogo, arrowLeft, arrowRight, screenCenter, cardCenter);
    });

    //MOUSELEAVE CARD
    projectContainer.on("mouseleave", "div.project-card", function(e) {
        $(this).removeClass("hovered");
        gsap.to(following_cursor, .2, {scale: 0.2, rotate: 45, ease: "back.in(5)", overwrite: "auto"});
        gsap.to(following_cursor_icons, .4, {scale: 0, ease: "power3.in", overwrite: "true"});
    });


    //MOUSEMOVE
    projectContainer.on("mousemove", "div.project-card", function(e) {
        var cardCenter = $(this).offset().left + $(this).outerWidth()/2;
        change_cursor_icon(this, following_cursor_icons, gitLogo, arrowLeft, arrowRight, screenCenter, cardCenter);
    });
}

function triggerMouseEventsWhileScrolling(projectContainer, mouseX, mouseY) {

    projectContainer.find(".project-card").each(function() {
        const rect = this.getBoundingClientRect();
        const isMouseInside = (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom);

        if (isMouseInside) {
            //Mouse enter
            if (!$(this).hasClass("hovered")) {
                $(this).trigger("mouseenter");
                $(this).addClass("hovered");
                
            }
        } else {
            //Mouse leave
            if ($(this).hasClass("hovered")) {
                $(this).trigger("mouseleave");
                $(this).removeClass("hovered"); 
            }
        }
    });
}

export function projects_events() {


    const project_list = $('.project-list')
    import_projects_json(project_list);
    observeProjectHeight(project_list[0]); //fix misplaced start markers of ScrollTrigger
    
    
    const projectContainer = $(".project-list-container");
    //Scroll to clicked card
    projectContainer.on("click", "div.project-card", function(){
        clicked_project(this);
        horizontall_scroll(this, projectContainer);
    });
    

    projectContainer.on('scroll', function(e) {
        //Update current active card
        updateActiveCard(projectContainer);
        //Prevent cursor animations to not triggering because of the scrolling animation
        triggerMouseEventsWhileScrolling(projectContainer, mouseX, mouseY);
    });


    $( window ).on('resize', function() {
        updateActiveCard(projectContainer);
        horizontall_scroll($(".active-project")[0], projectContainer);
    });

    update_cursor();
    update_cursor_icon(projectContainer);
}