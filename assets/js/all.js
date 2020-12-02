"use strict";

var title = $('h2').text();
console.log(title);

if (title == 'Assignment') {
  $('.sidebar__item:nth-child(3)').addClass('sidebar__item--active');
} else if (title == 'Admin') {
  $('.sidebar__item:nth-child(5)').addClass('sidebar__item--active');
}

$('.js-editing').css('display', 'none');
$('.js-onedit').click(function () {
  console.log('test');
  $('.js-editing').css('display', 'block');
  $('.js-reply').css('display', 'none');
  $('.js-disaper').css('opacity', '0');
});
$('.js-cancle').click(function () {
  console.log('test');
  $('.js-editing').css('display', 'none');
  $('.js-reply').css('display', 'flex');
  $('.js-disaper').css('opacity', '1');
});
//# sourceMappingURL=all.js.map
