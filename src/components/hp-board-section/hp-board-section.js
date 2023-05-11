$(".hp-board__social-wrap .hp-board__social-tab").on("click", function (event) {
  var id = $(this).attr(`"data-id"+tab`);
  $(".hp-board__social-wrap")
    .find(".hp-board__social")
    .removeClass("tab-active")
    .hide();
  $(".hp-board__social-wrap .hp-board__social-tabs")
    .find(".hp-board__social-tab")
    .removeClass("active");
  $(this).addClass("active");
  $("#" + id)
    .addClass("tab-active")
    .fadeIn();
  return false;
});

 