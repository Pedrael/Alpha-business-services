import $ from 'jquery';

function parallax(event) {
  this.querySelectorAll('.parallax').forEach(element => {
    var mode = element.getAttribute("data-parallax");

    if(mode == "move")
      element.style.transform = `translateY(${-2 * window.scrollY}px)`;
    else if (mode == "color") {
      var viewportOffset = element.getBoundingClientRect()
      var top = viewportOffset.top
      var h = document.documentElement.clientHeight
      element.style.color = "rgba(91, 220, 218, "+(h - top)/3000+")"
    }
    else if (mode == "b-color") {
      var json = element.getAttribute("data-s-color");
      var s_color = JSON.parse(json);
      var json = element.getAttribute("data-e-color");
      var e_color = JSON.parse(json);
      var viewportOffset = element.getBoundingClientRect()
      var top = viewportOffset.top
      var h = document.documentElement.clientHeight
      var percent = (h - top)/h;
      var red = s_color.r > e_color.r ? s_color.r - Math.abs(s_color.r - e_color.r) * percent : s_color.r + Math.abs(s_color.r - e_color.r) * percent
      var green = s_color.g > e_color.g ? s_color.g - Math.abs(s_color.g - e_color.g) * percent : s_color.g + Math.abs(s_color.g - e_color.g) * percent
      var blue = s_color.b > e_color.b ? s_color.b - Math.abs(s_color.b - e_color.b) * percent : s_color.b + Math.abs(s_color.b - e_color.b) * percent
      var alpha = s_color.a > e_color.a ? s_color.a - Math.abs(s_color.a - e_color.a) * percent : s_color.a + Math.abs(s_color.a - e_color.a) * percent
      element.style.background = "rgba("+red+","+green+","+blue+","+alpha+")"
    }
  });
}

/*

element.style.background = "rgba(91, 220, 218, "+((h - top)/top)+")"
export default function Parallax() {
  $(document).ready(function(jQuery) {
    document.addEventListener('scroll', parallax);
  })
}

function parallax(event) {
  this.querySelectorAll('.parallax').forEach(element => {
    var viewportOffset = element.getBoundingClientRect()
    var top = viewportOffset.top
    var h = document.documentElement.clientHeight
    element.style.color = "rgba(91, 220, 218, "+(h - top)/3000+")"
  })

}
*/

export default function Parallax() {
  document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener('scroll', parallax)
  })
}
