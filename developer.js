console.log('started');
$(document).ready(function() {   
 var html = ' <div class="item">';
 html += '<div class="col-md-12 text-center" style="vertical-align:middle">';
 html += '<a href="http://www.w3schools.com"  target="_blank">';
 html += '<img src="http://lib.virtualdatastore.com/indianstartups.com/img/events/numberz_banner.png"  /></a>';
 html += '</div></div>';
 $("#innerCarousel").append(html);
});
console.log('finished');
