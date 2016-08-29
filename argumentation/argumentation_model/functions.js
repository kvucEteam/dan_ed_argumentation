$(function() {
	$(".straalekrans").hover(function() {
		$(this).animate({
			borderColor: "rgba(255,255,255,1)"
		}, 300, function() {
			// Animation complete.
		});
	}, function() {

		$(this).animate({
			"border-color": "rgba(255,255,255,0)"
		}, 300, function() {
			// Animation complete.
		});
	});


	$('#b').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom left',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'Belægget er den begrundelse der støtter afsenderens påstand. Belæggene findes ved at spørge: Hvad bygger afsenderen påstanden på?',
			title: {
				text: 'Belæg'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('#s').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom center',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'Argumentets styrkemarkør viser hvor sikker afsenderen er på påstanden. Det er tit et adverbium som “måske”, “sikkert”, “formentlig” osv.<br /><br />Styrkemarkøren kan enten optone argumentet (“helt sikkert”, “uden tvivl” etc.) eller nedtone argumentet (“måske”, “for det meste” etc.)',
			title: {
				text: 'Styrkemarkør'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('#p').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom right',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'Påstanden er det centrale i argumentationen, det som afsender vil overbevise modtageren om.<br /><br />Påstanden findes ved at spørge: Hvad vil afsenderen have modtagerens tilslutning til?',
			title: {
				text: 'Påstand'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('#h').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'right center',
			at: 'left center',
			viewport: $("body")
		},
		content: {
			text: 'Hjemmel kaldes også for “underliggende belæg”. Hjemlen er en uddybende begrundelse der underbygger afsenderens belæg og dermed påstanden.<br /><br />Hjemlen findes ved at spørge: Hvad er det for en begrundelse der underbygger belægget, så belægget virker som en fornuftig begrundelse for påstanden?',
			title: {
				text: 'Hjemmel'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('#g').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top center',
			at: 'bottom center',
			viewport: $("body")
		},
		content: {
			text: 'Gendrivelsen i et argument gør opmærksom på svaghederne i ens egen argumentation.<br /><br />Man lukker hullet før modtageren gør det, og på den måde styrker man sin argumentation. Bruges til at imødegå kritik fra modtageren.<br /><br />Gendrivelse findes ved at spørge: I hvilke tilfælde gælder påstanden ikke.',
			title: {
				text: 'Gendrivelse'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('#r').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top left',
			at: 'bottom center',
			viewport: $("body")
		},
		content: {
			text: "Rygdækning er en slags belæg for hjemlen.<br /><br />Rygdækningen bruges til at dokumentere hjemlens gyldighed i de tilfælde, hvor modtageren ikke accepterer hjemlen uden forbehold.<br /><br />Rygdækningen findes ved at spørge: Hvilke holdepunkter har afsender for at sige at hjemlen er korrekt.",
			title: {
				text: 'Rygdækning'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('.one').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom left',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'Pilen her fra belægget hen mod styrkemarkøren viser at belægget understøtter påstanden.'
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	$('.two').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom right',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'Styrkemarkøren hører sammen med påstanden fordi den enten kan svække (nedtone) eller styrke (optone) påstandens udsagn.?'
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	$('.three').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'right center',
			at: 'left center'
		},
		content: {
			text: 'Gendrivelsen står under styrkemarkøren fordi gendrivelsen også handler om at svække påstandens udsagn (men styrke afsenderens troværdighed og argumentets samlede udsagn)'
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded',
			width: "245px"
		}
	});
	$('.four').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'left center',
			at: 'right center'
		},
		content: {
			text: 'Rygdækning står under hjemlen i modellen fordi den bruges til at dokumentere hjemlens gyldighed.'
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});


});