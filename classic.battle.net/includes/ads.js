var d;
var s;
var m;
var se;
var da;
var mo;
var z;
var adseed;
var storeURL;

var randomNum;
var randomAds;
var numberAds = 6;

var adArray = new Array(numberAds);

adArray[1] = "<a href = 'http://www.blizzard.com/books/DayofDragon-excerpt.shtml'><img src = 'http://www.battle.net/images/battle/images/banners/wbanner.gif' width = '468' height = '60' border = '0'></a>";
adArray[2] = "<a href = 'http://www.blizzard.com/books/scliberty-excerpt.shtml'><img src = 'http://www.battle.net/images/battle/images/banners/sbanner.gif' width = '468' height = '60' border = '0'></a>";
adArray[3] = "<a href = 'http://www.blizzard.com/books/legacyofblood.shtml'><img src = 'http://www.battle.net/images/battle/images/banners/dbanner.gif' width = '468' height = '60' border = '0'></a>";
adArray[4] = "<a href = 'http://www.blizzard.com/books/shadow-xelnaga.shtml'><img src = 'http://www.battle.net/images/battle/images/banners/SC-banner-801-2.gif' width = '468' height = '60' border = '0'></a>";
adArray[5] = "<a href = 'http://www.blizzard.com/insider/'><img src = 'http://www.battle.net/images/battle/images/banners/Blizzard-INS-Bannerv31.gif' width = '468' height = '60' border = '0'></a>";
adArray[6] = "<a href = 'http://www.blizzard.com/starcraft/scdvd/'><img src = 'http://www.battle.net/images/battle/images/banners/StarCraft_DVDBanner41.gif' width = '468' height = '60' border = '0'></a>";

<!--
// The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
// See:  http://www.msc.cornell.edu/~houle/javascript/randomizer.html

rnd.today=new Date();
rnd.seed=rnd.today.getTime();

function rnd() {
        rnd.seed = (rnd.seed*9301+49297) % 233280;
        return rnd.seed/(233280.0);
};

function rand(number) {
        return Math.ceil(rnd()*number);
};

// end central randomizer. -->


// Flash Version Detector  v1.1.4
// http://www.dithered.com/javascript/flash_detect/index.html
// code by Chris Nott (chris@NOSPAMdithered.com - remove NOSPAM)
// with VBScript code from Alastair Hamilton

var flashVersion = 0;
function getFlashVersion() {
	var agent = navigator.userAgent.toLowerCase(); 
	
	// NS3+, Opera3+, IE5+ Mac (support plugin array):  check for Flash plugin in plugin array
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		var flashPlugin = navigator.plugins['Shockwave Flash'];
		if (typeof flashPlugin == 'object') { 
			if (flashPlugin.description.indexOf('7.') != -1) flashVersion = 7;
			else if (flashPlugin.description.indexOf('6.') != -1) flashVersion = 6;
			else if (flashPlugin.description.indexOf('5.') != -1) flashVersion = 5;
			else if (flashPlugin.description.indexOf('4.') != -1) flashVersion = 4;
			else if (flashPlugin.description.indexOf('3.') != -1) flashVersion = 3;
		}
	}

	// IE4+ Win32:  attempt to create an ActiveX object using VBScript
	else if (agent.indexOf("msie") != -1 && parseInt(navigator.appVersion) >= 4 && agent.indexOf("win")!=-1 && agent.indexOf("16bit")==-1) {
	  document.write('<scr' + 'ipt language="VBScript"\> \n');
		document.write('on error resume next \n');
		document.write('dim obFlash \n');
		document.write('set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.7") \n');
		document.write('if IsObject(obFlash) then \n');
		document.write('flashVersion = 7 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.6") end if \n');
		document.write('if flashVersion < 7 and IsObject(obFlash) then \n');
		document.write('flashVersion = 6 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.5") end if \n');
		document.write('if flashVersion < 6 and IsObject(obFlash) then \n');
		document.write('flashVersion = 5 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.4") end if \n');
		document.write('if flashVersion < 5 and IsObject(obFlash) then \n');
		document.write('flashVersion = 4 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.3") end if \n');
		document.write('if flashVersion < 4 and IsObject(obFlash) then \n');
		document.write('flashVersion = 3 \n');
		document.write('end if');
		document.write('</scr' + 'ipt\> \n');
  }
		
	// WebTV 2.5 supports flash 3
	else if (agent.indexOf("webtv/2.5") != -1) flashVersion = 3;

	// older WebTV supports flash 2
	else if (agent.indexOf("webtv") != -1) flashVersion = 2;

	// Can't detect in all other cases
	else {
		flashVersion = flashVersion_DONTKNOW;
	}

	return flashVersion;
}

flashVersion_DONTKNOW = -1;

getFlashVersion();


function randAd() {
	d = new Date();
	s = d.getHours()+'';
	m = d.getMinutes()+'';
	se = d.getSeconds()+'';
	da = d.getDate()+'';
	mo = d.getMonth()+1+'';
	z = Math.random()+'';
	adseed = parseInt(s+m+se+'').toString(36)+parseInt(da+mo+z.substring(2,6)+'').toString(36);
	adseed = adseed.substring(0,10);



	if (flashVersion == 0) {

		document.write("<td><IFRAME name='ad_top' SRC='http://ads.battle.net/ad?seed=" + adseed +"' width='468' height='60' FRAMEBORDER=0 frameborder='no' border='0' MARGINWIDTH='0' MARGINHEIGHT='0' SCROLLING='no' target = '_blank'><a href = 'http://www.battle.net/advertising/'><img src = 'http://www.battle.net/images/battle/images/banners/battlenet.gif' border=0 width='468' height='60'></a></IFRAME></td>");
		
	} else {
 

//		document.write("<td><IFRAME name='ad_top' SRC='http://www.battle.net/flashtest.html' width='468' height='60' FRAMEBORDER=0 frameborder='no' border='0' MARGINWIDTH='0' MARGINHEIGHT='0' SCROLLING='no' target = '_blank'><a href = 'http://www.battle.net/advertising/'><img src = 'http://www.battle.net/images/battle/images/banners/battlenet.gif' border=0 width='468' height='60'></a></IFRAME></td>");
		document.write("<td><IFRAME name='ad_top' SRC='http://ads.battle.net/flash?seed=" + adseed +"' width='468' height='60' FRAMEBORDER=0 frameborder='no' border='0' MARGINWIDTH='0' MARGINHEIGHT='0' SCROLLING='no' target = '_blank'><a href = 'http://www.battle.net/advertising/'><img src = 'http://www.battle.net/images/battle/images/banners/battlenet.gif' border=0 width='468' height='60'></a></IFRAME></td>");
	
	}
}

function towerAd() {
	d = new Date();
	s = d.getHours()+'';
	m = d.getMinutes()+'';
	se = d.getSeconds()+'';
	da = d.getDate()+'';
	mo = d.getMonth()+1+'';
	z = Math.random()+'';
	adseed = parseInt(s+m+se+'').toString(36)+parseInt(da+mo+z.substring(2,6)+'').toString(36);
	adseed = adseed.substring(0,10);



	if (flashVersion == 0) {

		document.write("<iframe src = 'http://ads.battle.net/tower?seed=" + adseed + " bgcolor = 'black' width = '162' height = '602' FRAMEBORDER='0' frameborder='no' border='0' MARGINWIDTH='0' MARGINHEIGHT='0' SCROLLING='no' target = '_blank'></iframe>");
		
	} else {


		document.write("<iframe src = 'http://ads.battle.net/flashtower?seed=" + adseed + " bgcolor = 'black' width = '162' height = '602' FRAMEBORDER='0' frameborder='no' border='0' MARGINWIDTH='0' MARGINHEIGHT='0' SCROLLING='no' target = '_blank'></iframe>");	
	}
}

