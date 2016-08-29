var runde = 0;
var xmlData;
var score = 0;

var korrekt_Array = new Array();
var tekst_Array = new Array();
var rand_Array = new Array();

var korrekt = "";

var color_Array = ["#fb467b", "#cbbe13", "#1b6278"];

function getXML(xmlLink) {
	$.ajax({
		type: "GET",
		url: xmlLink,
		dataType: "xml",
		success: function(xml) {
			xmlData = xml;
			var tal = 1;
			var data = $(xmlData);
			spm_length = data.find('spm').length;
			for (var i = 0; i < spm_length; i++) {
				tekst_Array.push(data.find('spm').eq(i).attr('tekst'));
				korrekt_Array.push(data.find('spm').eq(i).attr('korrekt'));
				rand_Array.push(i);
			}
			rand_Array = shuffle(rand_Array);
			poseQuestion(rand_Array[runde]);
			//(korrekt_Array);


		},
		error: function() {
			//alert("error loading xml");
		}
	});
}


function feedback(svar) {
	runde++;
	//$("#feedback").show();
	if (runde < tekst_Array.length) {
		$("#feedback").html("Du svarede <b>" + svar + " </b>på spørgsmålet. <br/> <br/> Klik for at gå videre");
	} else {
		//$("#knapper").fadeToggle();
		$(".popud").fadeToggle();
		$("#feedback").html("Du svarede <b>" + svar + " </b>på spørgsmålet. <br>Øvelsen er slut <br/> Du havde <b>" + score + " </b>rigtige svar.<br/><br/>Klik for at prøve forfra");
	}
}

function poseQuestion(number) {
	$("#container").unbind("click");
	$(".btn").removeClass("selected");
	$("#feedback").html("Klik på den appelform du mener bliver anvendt");
	$(".btn").css("background-color", "lightblue");

	$(".popud").animate({
		opacity: 0,
	}, 0, function() {
		$(".popud").html("<span class='popud_txt'>''" + tekst_Array[number] + "''</span>");
		$(".popud").animate({
			opacity: 1,
		}, 1000, function() {
			// Animation complete.
		});
		// Animation complete.
	});
	korrekt = korrekt_Array[number];
	//(korrekt);
	if (korrekt == "P") {
		var korrekt_tal = 0;
	} else if (korrekt == "L") {
		var korrekt_tal = 1;
	} else {
		var korrekt_tal = 2;
	}
	$(".btn").css("opacity", "1");


	$(".btn").click(function() {
		//// ("kører vi?")
		var bruger_svar = $(this).attr("id");
		$(".btn").css("opacity", ".6");

		console.log(number);

		$(".btn").eq(korrekt_tal).css("background-color", color_Array[korrekt_tal]);

		$(".btn").unbind("click");
		$(this).css("opacity", "1");
		$(this).addClass("selected");
		if (bruger_svar == korrekt) {
			score++;
			feedback("korrekt");
		} else {
			feedback("forkert");
		}
		addBodyClick();
	});
}

shuffle = function(o) {
	for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function addBodyClick() {

	setTimeout(function() {
		//// ("body_on");
		$("#container").click(function() {
			if (runde < tekst_Array.length) {
				////("hejsa");
				poseQuestion(rand_Array[runde])
			} else {

				window.location.reload();
			}
		});

	}, 200);
}

function removeBodyClick() {


}