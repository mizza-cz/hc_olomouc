$(document).ready(function () {
  $(".topstory__article").mouseover(function () {
    (idTopstoryCurrent = $(".topstory__content").data("topstory_current")),
      (idTopstory = $(this).data("topstory")),
      $(".topstory__article").removeClass("on"),
      $(this).addClass("on"),
      $("#topstory_content_" + idTopstoryCurrent).removeClass("on"),
      $("#topstory_image_" + idTopstoryCurrent).removeClass("on"),
      $("#topstory_content_" + idTopstory).addClass("on"),
      $("#topstory_image_" + idTopstory).addClass("on"),
      $(".topstory__content").data("topstory_current", idTopstory);
  });
});

