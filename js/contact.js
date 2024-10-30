import $ from 'jquery';

function hover_contact() {

    var circle_text = $('#circle-text');
    var circle_text_path = $('#circle-text textPath');
    $('.social-link').hover(function() {
        circle_text.css('fill', 'var(--yg)');
        circle_text_path.text((this.id + " ").repeat(Math.floor(100 / (this.id.length+1))));
    });

      $('.contact-info').hover(function() {}, function() {
        circle_text.css('fill', 'var(--purple)');
        circle_text_path.text("cont@ct cont@ct cont@ct cont@ct cont@ct cont@ct cont@ct cont@ct");
      });
}

export function contact_events() {
    hover_contact();
}