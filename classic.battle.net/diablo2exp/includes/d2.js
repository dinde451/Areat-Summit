var	clean=1;
var	objName;
var	pageName;

if (document.images)
{	logo_off = new Image(118,82);
	logo_off.src = "/images/battle/diablo2exp/images/d2-logo-off.gif";
	logo_ovr = new Image(118,82);
	logo_ovr.src = "/images/battle/diablo2exp/images/d2-logo-ovr.gif";

	news_off = new Image(116,37);
	news_off.src = "/images/battle/diablo2exp/images/menu/menu-news-off.gif";
	news_ovr = new Image(116,37);
	news_ovr.src = "/images/battle/diablo2exp/images/menu/menu-news-ovr.gif";
	news_act = new Image(116,37);
	news_act.src = "/images/battle/diablo2exp/images/menu/menu-news-act.gif";

	basics_off = new Image(116,37);
	basics_off.src = "/images/battle/diablo2exp/images/menu/menu-basics-off.gif";
	basics_ovr = new Image(116,37);
	basics_ovr.src = "/images/battle/diablo2exp/images/menu/menu-basics-ovr.gif";
	basics_act = new Image(116,37);
	basics_act.src = "/images/battle/diablo2exp/images/menu/menu-basics-act.gif";

	npcs_off = new Image(116,37);
	npcs_off.src = "/images/battle/diablo2exp/images/menu/menu-npcs-off.gif";
	npcs_ovr = new Image(116,37);
	npcs_ovr.src = "/images/battle/diablo2exp/images/menu/menu-npcs-ovr.gif";
	npcs_act = new Image(116,37);
	npcs_act.src = "/images/battle/diablo2exp/images/menu/menu-npcs-act.gif";

	monsters_off = new Image(116,37);
	monsters_off.src = "/images/battle/diablo2exp/images/menu/menu-monsters-off.gif";
	monsters_ovr = new Image(116,37);
	monsters_ovr.src = "/images/battle/diablo2exp/images/menu/menu-monsters-ovr.gif";
	monsters_act = new Image(116,37);
	monsters_act.src = "/images/battle/diablo2exp/images/menu/menu-monsters-act.gif";
	
	classes_off = new Image(116,37);
	classes_off.src = "/images/battle/diablo2exp/images/menu/menu-classes-off.gif";
	classes_ovr = new Image(116,37);
	classes_ovr.src = "/images/battle/diablo2exp/images/menu/menu-classes-ovr.gif";
	classes_act = new Image(116,37);
	classes_act.src = "/images/battle/diablo2exp/images/menu/menu-classes-act.gif";

	skills_off = new Image(116,37);
	skills_off.src = "/images/battle/diablo2exp/images/menu/menu-skills-off.gif";
	skills_ovr = new Image(116,37);
	skills_ovr.src = "/images/battle/diablo2exp/images/menu/menu-skills-ovr.gif";
	skills_act = new Image(116,37);
	skills_act.src = "/images/battle/diablo2exp/images/menu/menu-skills-act.gif";

	quests_off = new Image(116,38);
	quests_off.src = "/images/battle/diablo2exp/images/menu/menu-quests-off.gif";
	quests_ovr = new Image(116,38);
	quests_ovr.src = "/images/battle/diablo2exp/images/menu/menu-quests-ovr.gif";
	quests_act = new Image(116,38);
	quests_act.src = "/images/battle/diablo2exp/images/menu/menu-quests-act.gif";

	shrines_off = new Image(116,38);
	shrines_off.src = "/images/battle/diablo2exp/images/menu/menu-shrines-off.gif";
	shrines_ovr = new Image(116,38);
	shrines_ovr.src = "/images/battle/diablo2exp/images/menu/menu-shrines-ovr.gif";
	shrines_act = new Image(116,38);
	shrines_act.src = "/images/battle/diablo2exp/images/menu/menu-shrines-act.gif";

	items_off = new Image(116,37);
	items_off.src = "/images/battle/diablo2exp/images/menu/menu-items-off.gif";
	items_ovr = new Image(116,37);
	items_ovr.src = "/images/battle/diablo2exp/images/menu/menu-items-ovr.gif";
	items_act = new Image(116,37);
	items_act.src = "/images/battle/diablo2exp/images/menu/menu-items-act.gif";

	maps_off = new Image(116,38);
	maps_off.src = "/images/battle/diablo2exp/images/menu/menu-maps-off.gif";
	maps_ovr = new Image(116,38);
	maps_ovr.src = "/images/battle/diablo2exp/images/menu/menu-maps-ovr.gif";
	maps_act = new Image(116,38);
	maps_act.src = "/images/battle/diablo2exp/images/menu/menu-maps-act.gif";

	faq_off = new Image(116,38);
	faq_off.src = "/images/battle/diablo2exp/images/menu/menu-faq-off.gif";
	faq_ovr = new Image(116,38);
	faq_ovr.src = "/images/battle/diablo2exp/images/menu/menu-faq-ovr.gif";
	faq_act = new Image(116,38);
	faq_act.src = "/images/battle/diablo2exp/images/menu/menu-faq-act.gif";
	
	files_off = new Image(116,38);
	files_off.src = "/images/battle/diablo2exp/images/menu/menu-files-off.gif";
	files_ovr = new Image(116,38);
	files_ovr.src = "/images/battle/diablo2exp/images/menu/menu-files-ovr.gif";
	files_act = new Image(116,38);
	files_act.src = "/images/battle/diablo2exp/images/menu/menu-files-act.gif";

	prev_off = new Image(44,43);
	prev_off.src = "/images/battle/diablo2exp/images/botmenu-prev-off.gif";
	prev_ovr = new Image(44,43);
	prev_ovr.src = "/images/battle/diablo2exp/images/botmenu-prev-ovr.gif";

	next_off = new Image(45,43);
	next_off.src = "/images/battle/diablo2exp/images/botmenu-next-off.gif";
	next_ovr = new Image(45,43);
	next_ovr.src = "/images/battle/diablo2exp/images/botmenu-next-ovr.gif";

	exit_off = new Image(43,43);
	exit_off.src = "/diablo2exp/images/botmenu-close-off.gif";
	exit_ovr = new Image(43,43);
	exit_ovr.src = "/diablo2exp/images/botmenu-close-ovr.gif";
}

function offImg(objName)
{	imgSrc = eval(objName + "_off.src");
	document[objName].src = imgSrc;
}

function ovrImg(objName)
{	imgSrc = eval(objName + "_ovr.src");
	document[objName].src = imgSrc;
}

function actImg(objName)
{	imgSrc = eval(objName + "_act.src");
	document[objName].src = imgSrc;
}

function pop( pageName ) {
  popup=open ( "/diablo2exp/popup/" + pageName + ".html", "popup", "width=321,height=432,resizeable=no" );
  clean=0;
}

function spop( pageName ) {
  popup=open ( "/diablo2exp/slpopup/" + pageName + ".shtml", "popup", "width=650,height=120,resizeable=no" );
  clean=0;
}

function closeWindow() {
  parent.window.close();
}