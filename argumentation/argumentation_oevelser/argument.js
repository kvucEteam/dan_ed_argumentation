$(document).ready(function() {
	//alert($("#text_container").height());
	alertUser_1();
	var select = false;
	var b_selected;
	var color_Array = Array("#1b6278", "#ffcccc", "#cbbe13", "#2dcbfb", "#867e14", "#fb467b");
	var hjemmel = false;


	$("#model").css("background-image", "url('')");

	$("#korrekt").hide();

	//$('#popud_hjemmel').css("opacity", "0");
	$(".del").click(function() {
		$("#korrekt").fadeOut();
		skjulhjemmel();
		alertUser_2();
		$(".del").removeClass("selected");
		var klasse = $(this).attr('class').split(' ')[1];
		$('.' + klasse + '').addClass("selected");
		select = true;
		$("#model").css("background-image", "url('img/stiplet-valg.png')")
		//activate_bogstaver();
	});

	$(".hjemmel").click(function() {
		$("#korrekt").fadeOut();
		$('#popud_hjemmel').animate({
			opacity: 1,
			left: "60px"
		}, 200, function() {
			// Animation complete.
		});
		alertUser_3();
	});

	$(".hjemmel_del").click(function() {
		$("#korrekt").fadeOut();
		$(".hjemmel_del").css("font-weight", "normal");
		$(this).css("font-weight", "bold");
		//alert ("clicked hje,mmeldel");
		hjemmel = $(this).attr("id");
		if ($(this).attr("value") == "true") {
			$("#hjemmel_valgt").html("Korrekt hjemmel: '" + $(this).html() + "'");
			$("#h").css("color", "#fb467b");
			alertUser_1();
			$("#h").unbind();
			hjemmel = true;
			skjulhjemmel();
			checkScore();
		} else {
			$("#hjemmel_valgt").html("Forkert. Vælg den korrekte hjemmel");
		}
	});


	$(".bogstaver").click(function() {
	
		if (select == false) {
			feedback("Vælg en sætningsdel først");
		} else {
			skjulhjemmel();
			alertUser_1();
			b_selected = $(this).index();
			var valgt = $(".selected").attr("value");
			var bogstaver = $(this).attr("value");
			var korrekt = $(".selected").attr('class').split(' ')[1];
			//alert ("BOG " + bogstaver + ", korrekt" + korrekt)
			//alert (b_selected);
			if (bogstaver == korrekt) {
				bestem();
				$(this).css("color", color_Array[b_selected]);

				feedback("Rigtigt! Flot");

			} else {
				feedback("Forkert, prøv igen");
				$(".selected").removeClass("selected");
				$("#model").css("background-image", "url('')")
			}
			select = false;
		}
	});

	function bestem() {
		$(".selected").css("background-color", color_Array[b_selected]);
		$(".selected").attr("value", b_selected);
		$(".selected").unbind();
		//$('#foo').unbind();
		$(".selected").removeClass("del");
		$(".selected").removeClass("selected");
		$("#model").css("background-image", "url('')");
		checkScore();

	}

	function alertUser_1() {

		$('.instruktion').animate({
			top: "310px",
			left: "120px"

		}, 400, function() {
			// Animation complete.
		});
		//$(".instruktion").css("top", "375px").css("left", "50px");
		$(".instruktion").html("Vælg en sætningsdel herunder");
		$('.instruktion').removeClass("bubble").addClass("bubble2");

	}

	function alertUser_2() {
		$('.instruktion').animate({
			top: "295px",
			left: "300px"

		}, 400, function() {
			// Animation complete.
		});
		$(".instruktion").html("Hvor hører sætningsdelen til?");
		$('.instruktion').removeClass("bubble2").addClass("bubble");
	}

	function alertUser_3() {

		$('.instruktion').animate({
			top: "150px",
			left: "270px"

		}, 400, function() {
			// Animation complete.
		});
		//$(".instruktion").css("top", "375px").css("left", "50px");
		$(".instruktion").html("Vælg den hjemmel der passer");
		$('.instruktion').removeClass("bubble").addClass("bubble2");

	}


	function alertUser_4() {

		$('.instruktion').animate({
			top: "200px",
			left: "100px"

		}, 400, function() {
			// Animation complete.
		});
		//$(".instruktion").css("top", "375px").css("left", "50px");
		$(".instruktion").html("Du er færdig med din analyse af argumentet - flot!");
		$('.instruktion').removeClass("bubble").addClass("bubble2");

	}

	function skjulhjemmel() {
		$('#popud_hjemmel').animate({
			opacity: 1,
			left: "-450px"
			//left : "50px"
		}, 200, function() {
			// Animation complete.
		});
	}


	$("#tjek_svar").click(function() {
		var score = 0;
		$('.del').each(function() {
			var valgt = $(this).attr("value");
			var bogstaver = $(".bogstaver").eq(valgt).attr("value");
			var korrekt = $(this).attr('class').split(' ')[1];
			console.log("valgt:" + valgt + " / den rigtige:" + korrekt + ", valgt: " + bogstaver);

			if (bogstaver == korrekt) {
				score++
			}

			console.log("valgt:" + valgt + " / den rigtige:" + korrekt + ", valgt: " + bogstaver);


			//alert ($(".bogstaver").eq(valgt).attr("value"));
		});
		//alert("Score:" + score + "ud af " + color_Array.length + "mulige");
	});

	function checkScore() {
		//alert ($(".del").length + "Hjemmel " + hjemmel);
		if (hjemmel == true && $(".del").length == 0) {

			alertUser_4();
		}

	}


	function feedback(texten) {
		$("#korrekt").fadeIn();
		$("#korrekt").html(texten);
	}
});