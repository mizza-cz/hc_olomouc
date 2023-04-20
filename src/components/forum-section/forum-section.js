$("#myModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data("whatever");
  var modal = $(this);
  modal.find(".modal-title").text("Přidat příspěvek ");
  //   modal.find(".modal-body input").val(recipient);
  if (modal.find(".c-forum__reaction").length > 0) {
    modal.find(".c-forum__reaction").text("Reakce na příspěvek:  " + recipient);
  }
});
