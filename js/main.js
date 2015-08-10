$( document ).ready(function() {
    $("#mobile_menu_ul").jNav({
		clickbar : "#toggle_click"
	});
    $("#another_mobile_menu_ul").jNav({
		clickbar : "#another_toggle_click",
		closedSymbol : "-",
		openedSymbol : "+",
		speed : "slow",
		skin : "green"
	});
});