$(function() {
	$(".straalekrans").hover(function() {
		// $(this).css("border-width", "3px");
		$(this).animate({
			"border-width": "3px"
		}, 100, function() {
			// Animation complete.
		});
	}, function() {
		// $(this).css("border-width", "0px");
		$(this).animate({
			"border-width": "0px"
		}, 100, function() {
			// Animation complete.
		});
	});

    $(".skema")
      .mouseenter(function(e){
$(".skemabillede").fadeIn("fast");
    }).mouseleave(function(e) {
	$(".skemabillede").fadeOut("fast");
    });

	$('.logos').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top left',
			at: 'bottom center',
			adjust: {
				y: 5
			}
		},
		content: {
			text: 'Logos betyder logik og fornuft. I denne appelform tales der til vores logiske sans og vores fornuft.<br /><br />Afsenderen holder sig til sagen, argumenterer og underbygger sine argumenter med logik og fornuft.',
			title: {
				text: 'Logos'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('.etos').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top left',
			at: 'bottom center',
			adjust: {
				y: 5
			}
		},
		content: {
			text: 'Ethos handler om at bruge moral og troværdighed som vigtige elementer. Ethos, altså troværdighed, er et vigtigt element for alle talere, for ingen gider jo lytte til en taler, der ikke har troværdighed.<br /><br />Derfor hører man ofte talere bruge taletid på at opbygge deres egen ethos.<br /><br />Ethos knytter sig ikke blot til personen, men også til det, han repræsenterer.',
			title: {
				text: 'Etos'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('.patos').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top right',
			at: 'bottom center',
			adjust: {
				y: 5
			}
		},
		content: {
			text: 'Pathos betyder lidenskab eller det at være følelsesmæssigt engageret. Når du bruger patos i din kommunikation, taler du til lytterens følelser.<br /><br />Pathos bruges altså, når man ønsker at røre lytteren følelsesmæssigt, og frembringe glæde, medlidenhed, vrede eller frygt.<br /><br />Pathos kan genkendes på mange værdiladede ord, billedsprog, gentagelser, citater, digte og rim.',
			title: {
				text: 'Patos'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('.aristoteles').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom right',
			at: 'top center',
			adjust: {
				y: -3
			}
		},
		content: {
			text: 'Aristoteles, 384-322 f.Kr., græsk filosof, elev af Platon. Forfatter til adskillige værker om politik, retorik, etik, logik og naturvidenskab.',
			title: {
				text: 'Aristoteles'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

});