function pecas(peca) {

  $(".fotosPecas").show();

  /*Esconde o display menos ele*/
  function subDisplay(name) {
    $('.fotosPecas').children().hide();
    $(name).show();
  };
  subDisplay($("#peca"+(peca)))

  /*each item will open a slider*/
  $(function(){
    $("#pec"+(peca)).slidesjs({
      width: 890,
      height: 528,
      navigation: false,
      play: {
        active: false,
        auto: true,
        interval: 4000,
        swap: true
      }
    });
  });
}