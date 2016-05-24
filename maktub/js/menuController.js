 function openMenu() {
   $("#menuOpen").hide();
   $("#menuClose").show();

   $("nav ul li").show(300);
}

function closeMenu() {
   $("#menuOpen").show();
   $("#menuClose").hide();

   $("nav ul li").hide(300);
}