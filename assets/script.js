$("#toggler").click(function () {
  $("#nav").slideToggle();
  $(this).toggleClass('active');
});

var $question = $(".accordion__header"); // accordion opener
var $answer = $(".accordion__body"); // accordion content
$answer.hide();
$question.click(function () {
  $answer.slideUp();
  if ($(this).hasClass("open")) {
    $(this).removeClass("open").next($answer).slideUp();
  } else {
    $question.removeClass("open");
    $(this).addClass("open").next($answer).slideDown();
  }
});

// Testimonials Slider
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  }
});


// TABS
var tab_nav = $(".nav-tab");
var tab_content = $(".content");
tab_content.each(function (i) {
  $(this).attr("id", "tab-" + i);
});
tab_nav
  .children("li")
  .children("a")
  .each(function (i) {
    $(this).attr("data-type", "#tab-" + i);
  });
tab_content.hide();
tab_content.first().show();
tab_nav
  .children("li")
  .children("a")
  .on("click", function () {
    tab_nav.children("li").removeClass("active");
    $(this).parent().addClass("active");
    var activeTab = $(this).attr("data-type");

    $(activeTab).siblings().hide().removeClass("active");
    $(activeTab).fadeIn().addClass("active");
  });