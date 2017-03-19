console.log('started');
$(document).ready(function() {   
 var html = ' <div class="item">';
 html += '<div class="col-md-12 text-center" style="vertical-align:middle">';
 html += '<a href="http://www.w3schools.com"  target="_blank">';
 html += '<img src="https://cdn.techinasia.com/wp-content/uploads/2015/11/Top-Funded-India-eCommerce-Feature-Image.png"  /></a>';
 html += '</div></div>';
 $("#innerCarousel").append(html);
});
console.log('finished');
