$( document ).ready(function() {
$.backstretch("Images/Movement.jpg");

$(".slide").backstretch([
  "Images/Crowd.jpeg",
  "Images/Cdjs.jpeg"
], {duration: 4000, fade: "slow"});

$.stratus({
  auto_play:true,
  key: "bd21b440af3daa2acde52e61b58902c1",
  links: "https://soundcloud.com/detroitswindle/jill-scot-love-rain-detroit",
  random: true
});


});
