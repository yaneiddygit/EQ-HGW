$(document).ready(function () {
  $(".hamburguesa").click(function () {
    $(".links").toggleClass("open");

    // Cambiar ícono
    const icono = $(".hamburguesa i");
    if (icono.hasClass("fa-bars")) {
      icono.removeClass("fa-bars").addClass("fa-circle-xmark");
    } else {
      icono.removeClass("fa-circle-xmark").addClass("fa-bars");
    }
  });

  // cerrar el menú al dar clic en un link
  $(".links a").click(function () {
    $(".links").removeClass("open");
    $(".hamburguesa i").removeClass("fa-circle-xmark").addClass("fa-bars");
  });
});
