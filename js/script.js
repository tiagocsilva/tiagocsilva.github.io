$(document).ready(function() {
	
	//PEGA O TÍTULO DA PÁGINA ATUAL
	var currentPage = document.title;
	
	//PEGA ALTURA E LARGURA DA PÁGINA
	var hg = $(window).height();
	var wd = $(window).width();

	//AJUSTA O TAMANHO DA PÁGINA NOS DIFERENTES TAMANHPS DE TELA
	if(wd > 760) {
		wd -= $("aside").width();
		$("section").width(wd);	
	}

	$("aside").height(hg);
	
	if(currentPage != "Portugol") {
		if(wd > 760) {
			$("section").height(hg);
		}
		else
		{
			$("section").height(hg - 100);
		}
		$("aside").height(hg);
	}

	//VERIFICA SE A PÁGINA É A PORTUGOL E CARREGA A LISTA DE ALGORITMOS
	if(currentPage == "Portugol") {
		$("#portugol").load("alg.html");
	}

	//CONTROLE DE ABERTURA DO MENU
	$("#menuOpen").click(function() {
		$("section").css("transition","height 1.2s");
		$("section").height(hg);
		$("aside > *").hide();
		$("#menuOpen").hide();
		$("aside").width(0);
		$("aside").show();
		$("aside").width(300);
		$("aside > *").show(500);
	});

	//CONTROLE DE FECHAMENTO DO MENU
	$("#menuClose").click(function() {
		$("section").css("transition","none");
		$("section").height(hg - 100);
		$("aside > *").hide(600);
		$("aside").hide(600);
		$("#menuOpen").show(600);		
	});

	//DEFINE A PÁGINA ATUAL NO MENU
	switch(currentPage) {
		case "Tiago Silva":
			$("nav button:eq(0)").css("border-color","#2790B0");
			break;

		case "WebSites":
			$("nav button:eq(1)").css("border-color","#2790B0");
			break;

		case "C/C++":
			$("nav button:eq(2)").css("border-color","#2790B0");
			break;

		case "Portugol":
			$("nav button:eq(3)").css("border-color","#2790B0");
			break;
	}

});

//CONTROLE DO SLID DOS TÍTULOS DA PÁGINA INICIAL
var i = 1;

function contentFadeOut() {
	switch(i) {
		case 1: 
			$("#content-1").hide();
			$("#content-2").fadeIn(1000);
			i++;
		break;

		case 2: 
			$("#content-2").hide();
			$("#content-3").fadeIn(1000);
			i++;
		break;

		case 3: 
			$("#content-3").hide();
			$("#content-4").fadeIn(1000);
			i++;
		break;

		case 4: 
			$("#content-4").hide();
			$("#content-1").fadeIn(1000);
			i = 1;
		break;

	}
}

//CONTROLE DA MOSTRA DE ALGORITMOS
function showAlgorithm(n) {
	$("#portugol").load("alg/" + n + ".html");
}

//VOLTAR A LISTA DE ALGORITMOS
function showList() {
	$("#portugol").load("alg.html");
}