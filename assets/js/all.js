"use strict";

$('.collapse').collapse();
var title = $('h2').text();
console.log(title);

if (title == 'Assignment') {
  $('.sidebar__item:nth-child(3)').addClass('sidebar__item--active');
} else if (title == 'Admin') {
  $('.sidebar__item:nth-child(5)').addClass('sidebar__item--active');
}
//# sourceMappingURL=all.js.map
