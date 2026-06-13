#game "blackgate"
// externs
extern var Func0908 0x908 ();

void Func017B shape#(0x17B) ()
{
	var var0000;
	var var0001;

	if (!(event != 0x0001)) goto labelFunc017B_0009;
	return;
labelFunc017B_0009:
	var0000 = Func0908();
	var0001 = UI_get_item_quality(item);
	if (!(var0001 > 0x0097)) goto labelFunc017B_003A;
	UI_display_runes(0x0031, ["THIS IS", "NOT A", "VALID", "SIGN"]);
	goto labelFunc017B_105D;
labelFunc017B_003A:
	if (!(var0001 == 0x0000)) goto labelFunc017B_005D;
	UI_display_runes(0x0031, ["drink", "at|(e", "gilded", "lizard"]);
	goto labelFunc017B_105D;
labelFunc017B_005D:
	if (!(var0001 == 0x0001)) goto labelFunc017B_0080;
	UI_display_runes(0x0031, ["skara", "brae~", "~population", "47"]);
	goto labelFunc017B_105D;
labelFunc017B_0080:
	if (!(var0001 == 0x0002)) goto labelFunc017B_009A;
	UI_display_runes(0x0031, ["trinsic"]);
	goto labelFunc017B_105D;
labelFunc017B_009A:
	if (!(var0001 == 0x0003)) goto labelFunc017B_00BA;
	UI_display_runes(0x0031, ["(e", "honorable", "hound"]);
	goto labelFunc017B_105D;
labelFunc017B_00BA:
	if (!(var0001 == 0x0004)) goto labelFunc017B_00D7;
	UI_display_runes(0x0031, ["FELLOWSHIP", "HALL"]);
	goto labelFunc017B_105D;
labelFunc017B_00D7:
	if (!(var0001 == 0x0005)) goto labelFunc017B_00F1;
	UI_display_runes(0x0031, ["britain"]);
	goto labelFunc017B_105D;
labelFunc017B_00F1:
	if (!(var0001 == 0x0006)) goto labelFunc017B_0114;
	UI_display_runes(0x0031, ["COMING:", "RAYMUNDO'S", "@TRIALS OF", "THE AVATAR@"]);
	goto labelFunc017B_105D;
labelFunc017B_0114:
	if (!(var0001 == 0x0007)) goto labelFunc017B_0137;
	UI_display_runes(0x0031, ["RESERVE", "THY", "SEATS", "NOW"]);
	goto labelFunc017B_105D;
labelFunc017B_0137:
	if (!(var0001 == 0x0008)) goto labelFunc017B_0154;
	UI_display_runes(0x0031, ["royal", "museum"]);
	goto labelFunc017B_105D;
labelFunc017B_0154:
	if (!(var0001 == 0x0009)) goto labelFunc017B_0174;
	UI_display_runes(0x0031, ["(e", "music", "hall"]);
	goto labelFunc017B_105D;
labelFunc017B_0174:
	if (!(var0001 == 0x000B)) goto labelFunc017B_0194;
	UI_display_runes(0x0031, ["(e", "wayfarer's", "inn"]);
	goto labelFunc017B_105D;
labelFunc017B_0194:
	if (!(var0001 == 0x000C)) goto labelFunc017B_01B1;
	UI_display_runes(0x0031, ["iolos", "bows"]);
	goto labelFunc017B_105D;
labelFunc017B_01B1:
	if (!(var0001 == 0x000D)) goto labelFunc017B_01D1;
	UI_display_runes(0x0031, ["(e", "blue", "boar"]);
	goto labelFunc017B_105D;
labelFunc017B_01D1:
	if (!(var0001 == 0x000E)) goto labelFunc017B_01EE;
	UI_display_runes(0x0031, ["gayes", "clo(iers"]);
	goto labelFunc017B_105D;
labelFunc017B_01EE:
	if (!(var0001 == 0x000F)) goto labelFunc017B_020E;
	UI_display_runes(0x0031, ["nor(", ",ar", "armoury"]);
	goto labelFunc017B_105D;
labelFunc017B_020E:
	if (!(var0001 == 0x0010)) goto labelFunc017B_022E;
	UI_display_runes(0x0031, ["(e", "oaken", "oar"]);
	goto labelFunc017B_105D;
labelFunc017B_022E:
	if (!(var0001 == 0x0011)) goto labelFunc017B_0248;
	UI_display_runes(0x0031, ["bakery"]);
	goto labelFunc017B_105D;
labelFunc017B_0248:
	if (!(var0001 == 0x0012)) goto labelFunc017B_0262;
	UI_display_runes(0x0031, ["jeweler"]);
	goto labelFunc017B_105D;
labelFunc017B_0262:
	if (!(var0001 == 0x0013)) goto labelFunc017B_027F;
	UI_display_runes(0x0031, ["farmers", "market"]);
	goto labelFunc017B_105D;
labelFunc017B_027F:
	if (!(var0001 == 0x0014)) goto labelFunc017B_0299;
	UI_display_runes(0x0031, ["apo(ecary"]);
	goto labelFunc017B_105D;
labelFunc017B_0299:
	if (!(var0001 == 0x0015)) goto labelFunc017B_02B6;
	UI_display_runes(0x0031, ["royal", "mint"]);
	goto labelFunc017B_105D;
labelFunc017B_02B6:
	if (!(var0001 == 0x0016)) goto labelFunc017B_02D6;
	UI_display_runes(0x0031, ["csil", "(e", "h+ler"]);
	goto labelFunc017B_105D;
labelFunc017B_02D6:
	if (!(var0001 == 0x0017)) goto labelFunc017B_02F0;
	UI_display_runes(0x0031, ["provisions"]);
	goto labelFunc017B_105D;
labelFunc017B_02F0:
	if (!(var0001 == 0x0018)) goto labelFunc017B_030D;
	UI_display_runes(0x0031, ["royal", "orchards"]);
	goto labelFunc017B_105D;
labelFunc017B_030D:
	if (!(var0001 == 0x0019)) goto labelFunc017B_032D;
	UI_display_runes(0x0031, ["TEST OF STRENGTH", " -- ", "ART THOU AN AVATAR?"]);
	goto labelFunc017B_105D;
labelFunc017B_032D:
	if (!(var0001 == 0x001A)) goto labelFunc017B_034D;
	UI_display_runes(0x0031, ["punch and", "judy", "show"]);
	goto labelFunc017B_105D;
labelFunc017B_034D:
	if (!(var0001 == 0x001B)) goto labelFunc017B_0367;
	UI_display_runes(0x0031, ["fish|n|chips"]);
	goto labelFunc017B_105D;
labelFunc017B_0367:
	if (!(var0001 == 0x001C)) goto labelFunc017B_0381;
	UI_display_runes(0x0031, ["cove"]);
	goto labelFunc017B_105D;
labelFunc017B_0381:
	if (!(var0001 == 0x001D)) goto labelFunc017B_039E;
	UI_display_runes(0x0031, ["(e", "emerald"]);
	goto labelFunc017B_105D;
labelFunc017B_039E:
	if (!(var0001 == 0x001E)) goto labelFunc017B_03B8;
	UI_display_runes(0x0031, ["out|n|inn"]);
	goto labelFunc017B_105D;
labelFunc017B_03B8:
	if (!(var0001 == 0x001F)) goto labelFunc017B_03D5;
	UI_display_runes(0x0031, ["lovers", "walk"]);
	goto labelFunc017B_105D;
labelFunc017B_03D5:
	if (!(var0001 == 0x0020)) goto labelFunc017B_03F2;
	UI_display_runes(0x0031, ["buccaneers", "den"]);
	goto labelFunc017B_105D;
labelFunc017B_03F2:
	if (!(var0001 == 0x0021)) goto labelFunc017B_0409;
	UI_display_runes(0x0031, "(e|ba(s");
	goto labelFunc017B_105D;
labelFunc017B_0409:
	if (!(var0001 == 0x0022)) goto labelFunc017B_0429;
	UI_display_runes(0x0031, ["house", "of", "games"]);
	goto labelFunc017B_105D;
labelFunc017B_0429:
	if (!(var0001 == 0x0023)) goto labelFunc017B_0449;
	UI_display_runes(0x0031, ["(e", "fallen", "virgin"]);
	goto labelFunc017B_105D;
labelFunc017B_0449:
	if (!(var0001 == 0x0024)) goto labelFunc017B_0460;
	UI_display_runes(0x0031, "budos");
	goto labelFunc017B_105D;
labelFunc017B_0460:
	if (!(var0001 == 0x0025)) goto labelFunc017B_047D;
	UI_display_runes(0x0031, ["MEDITATION", "RETREAT"]);
	goto labelFunc017B_105D;
labelFunc017B_047D:
	if (!(var0001 == 0x002C)) goto labelFunc017B_0497;
	UI_display_runes(0x0031, ["GO THIS WAY"]);
	goto labelFunc017B_105D;
labelFunc017B_0497:
	if (!(var0001 == 0x0034)) goto labelFunc017B_04B1;
	UI_display_runes(0x0031, ["lycaeum"]);
	goto labelFunc017B_105D;
labelFunc017B_04B1:
	if (!(var0001 == 0x0035)) goto labelFunc017B_04D1;
	UI_display_runes(0x0031, ["(e", "hallowed", "dock"]);
	goto labelFunc017B_105D;
labelFunc017B_04D1:
	if (!(var0001 == 0x0036)) goto labelFunc017B_04F1;
	UI_display_runes(0x0031, ["(e", "friendly", "knave"]);
	goto labelFunc017B_105D;
labelFunc017B_04F1:
	if (!(var0001 == 0x0037)) goto labelFunc017B_0511;
	UI_display_runes(0x0031, ["(e", "gilded", "lizard"]);
	goto labelFunc017B_105D;
labelFunc017B_0511:
	if (!(var0001 == 0x0038)) goto labelFunc017B_052B;
	UI_display_runes(0x0031, ["h+ler"]);
	goto labelFunc017B_105D;
labelFunc017B_052B:
	if (!(var0001 == 0x0039)) goto labelFunc017B_0548;
	UI_display_runes(0x0031, ["eldro(s", "provisions"]);
	goto labelFunc017B_105D;
labelFunc017B_0548:
	if (!(var0001 == 0x003A)) goto labelFunc017B_0568;
	UI_display_runes(0x0031, ["house", "of", "items"]);
	goto labelFunc017B_105D;
labelFunc017B_0568:
	if (!(var0001 == 0x003B)) goto labelFunc017B_0588;
	UI_display_runes(0x0031, ["britannian", "mini*", "company"]);
	goto labelFunc017B_105D;
labelFunc017B_0588:
	if (!(var0001 == 0x003C)) goto labelFunc017B_05A5;
	UI_display_runes(0x0031, ["minoc", "branch"]);
	goto labelFunc017B_105D;
labelFunc017B_05A5:
	if (!(var0001 == 0x003D)) goto labelFunc017B_05BF;
	UI_display_runes(0x0031, ["trainer"]);
	goto labelFunc017B_105D;
labelFunc017B_05BF:
	if (!(var0001 == 0x003E)) goto labelFunc017B_05D9;
	UI_display_runes(0x0031, ["scholar"]);
	goto labelFunc017B_105D;
labelFunc017B_05D9:
	if (!(var0001 == 0x003F)) goto labelFunc017B_05F3;
	UI_display_runes(0x0031, ["town|hall"]);
	goto labelFunc017B_105D;
labelFunc017B_05F3:
	if (!(var0001 == 0x0040)) goto labelFunc017B_0610;
	UI_display_runes(0x0031, ["wis-surs", "magics"]);
	goto labelFunc017B_105D;
labelFunc017B_0610:
	if (!(var0001 == 0x0041)) goto labelFunc017B_062A;
	UI_display_runes(0x0031, ["observatory"]);
	goto labelFunc017B_105D;
labelFunc017B_062A:
	if (!(var0001 == 0x0042)) goto labelFunc017B_0644;
	UI_display_runes(0x0031, ["vesper"]);
	goto labelFunc017B_105D;
labelFunc017B_0644:
	if (!(var0001 == 0x0043)) goto labelFunc017B_065E;
	UI_display_runes(0x0031, ["moo*low"]);
	goto labelFunc017B_105D;
labelFunc017B_065E:
	if (!(var0001 == 0x0044)) goto labelFunc017B_0678;
	UI_display_runes(0x0031, ["terfin"]);
	goto labelFunc017B_105D;
labelFunc017B_0678:
	if (!(var0001 == 0x0045)) goto labelFunc017B_0695;
	UI_display_runes(0x0031, ["serpents", "hold"]);
	goto labelFunc017B_105D;
labelFunc017B_0695:
	if (!(var0001 == 0x0046)) goto labelFunc017B_06B2;
	UI_display_runes(0x0031, ["empa(", "abbey"]);
	goto labelFunc017B_105D;
labelFunc017B_06B2:
	if (!(var0001 == 0x0047)) goto labelFunc017B_06CC;
	UI_display_runes(0x0031, ["jhelom"]);
	goto labelFunc017B_105D;
labelFunc017B_06CC:
	if (!(var0001 == 0x0048)) goto labelFunc017B_06E6;
	UI_display_runes(0x0031, ["minoc"]);
	goto labelFunc017B_105D;
labelFunc017B_06E6:
	if (!(var0001 == 0x0049)) goto labelFunc017B_0700;
	UI_display_runes(0x0031, ["undertaker"]);
	goto labelFunc017B_105D;
labelFunc017B_0700:
	if (!(var0001 == 0x004A)) goto labelFunc017B_0723;
	UI_display_runes(0x0031, ["high", "court", "of", "britannia"]);
	goto labelFunc017B_105D;
labelFunc017B_0723:
	if (!(var0001 == 0x004B)) goto labelFunc017B_073D;
	UI_display_runes(0x0031, ["prison"]);
	goto labelFunc017B_105D;
labelFunc017B_073D:
	if (!(var0001 == 0x004C)) goto labelFunc017B_075D;
	UI_display_runes(0x0031, ["(e", "mode,", "damsel"]);
	goto labelFunc017B_105D;
labelFunc017B_075D:
	if (!(var0001 == 0x004D)) goto labelFunc017B_0777;
	UI_display_runes(0x0031, ["armoury"]);
	goto labelFunc017B_105D;
labelFunc017B_0777:
	if (!(var0001 == 0x004E)) goto labelFunc017B_0791;
	UI_display_runes(0x0031, ["blacksmi("]);
	goto labelFunc017B_105D;
labelFunc017B_0791:
	if (!(var0001 == 0x004F)) goto labelFunc017B_07AE;
	UI_display_runes(0x0031, ["recr+tion", "center"]);
	goto labelFunc017B_105D;
labelFunc017B_07AE:
	if (!(var0001 == 0x0050)) goto labelFunc017B_07CE;
	UI_display_runes(0x0031, ["hall", "of", "knowledge"]);
	goto labelFunc017B_105D;
labelFunc017B_07CE:
	if (!(var0001 == 0x0051)) goto labelFunc017B_07EE;
	UI_display_runes(0x0031, ["hello", "(ere", "avatar"]);
	goto labelFunc017B_105D;
labelFunc017B_07EE:
	if (!(var0001 == 0x0052)) goto labelFunc017B_080E;
	UI_display_runes(0x0031, ["tonight|9-12", "in|person", "the|avatars"]);
	goto labelFunc017B_105D;
labelFunc017B_080E:
	if (!(var0001 == 0x0053)) goto labelFunc017B_082E;
	UI_display_runes(0x0031, ["why", "ask", "why?"]);
	goto labelFunc017B_105D;
labelFunc017B_082E:
	if (!(var0001 == 0x0054)) goto labelFunc017B_084E;
	UI_display_runes(0x0031, [",r)t", "of", "honor"]);
	goto labelFunc017B_105D;
labelFunc017B_084E:
	if (!(var0001 == 0x0055)) goto labelFunc017B_086B;
	UI_display_runes(0x0031, ["paladins", "pa("]);
	goto labelFunc017B_105D;
labelFunc017B_086B:
	if (!(var0001 == 0x0056)) goto labelFunc017B_088E;
	UI_display_runes(0x0031, ["AVENUE", "OF", "THE", "FELLOWSHIP"]);
	goto labelFunc017B_105D;
labelFunc017B_088E:
	if (!(var0001 == 0x0057)) goto labelFunc017B_08AB;
	UI_display_runes(0x0031, ["widows", "walk"]);
	goto labelFunc017B_105D;
labelFunc017B_08AB:
	if (!(var0001 == 0x0058)) goto labelFunc017B_08C8;
	UI_display_runes(0x0031, ["harolds", "hallway"]);
	goto labelFunc017B_105D;
labelFunc017B_08C8:
	if (!(var0001 == 0x0059)) goto labelFunc017B_08E2;
	UI_display_runes(0x0031, ["fools|way"]);
	goto labelFunc017B_105D;
labelFunc017B_08E2:
	if (!(var0001 == 0x005A)) goto labelFunc017B_08FF;
	UI_display_runes(0x0031, ["whitsaber", "road"]);
	goto labelFunc017B_105D;
labelFunc017B_08FF:
	if (!(var0001 == 0x005B)) goto labelFunc017B_0919;
	UI_display_runes(0x0031, [",rand"]);
	goto labelFunc017B_105D;
labelFunc017B_0919:
	if (!(var0001 == 0x005C)) goto labelFunc017B_0936;
	UI_display_runes(0x0031, ["chalice", "avenue"]);
	goto labelFunc017B_105D;
labelFunc017B_0936:
	if (!(var0001 == 0x005D)) goto labelFunc017B_0953;
	UI_display_runes(0x0031, ["two", "coves"]);
	goto labelFunc017B_105D;
labelFunc017B_0953:
	if (!(var0001 == 0x005E)) goto labelFunc017B_0973;
	UI_display_runes(0x0031, ["we,", "wall", "road"]);
	goto labelFunc017B_105D;
labelFunc017B_0973:
	if (!(var0001 == 0x005F)) goto labelFunc017B_0993;
	UI_display_runes(0x0031, ["+,", "wall", "road"]);
	goto labelFunc017B_105D;
labelFunc017B_0993:
	if (!(var0001 == 0x0060)) goto labelFunc017B_09B3;
	UI_display_runes(0x0031, ["nor(", "wall", "road"]);
	goto labelFunc017B_105D;
labelFunc017B_09B3:
	if (!(var0001 == 0x0061)) goto labelFunc017B_09D3;
	UI_display_runes(0x0031, ["sou(", "wall", "road"]);
	goto labelFunc017B_105D;
labelFunc017B_09D3:
	if (!(var0001 == 0x0062)) goto labelFunc017B_09F0;
	UI_display_runes(0x0031, ["heroes", "way"]);
	goto labelFunc017B_105D;
labelFunc017B_09F0:
	if (!(var0001 == 0x0063)) goto labelFunc017B_0A0D;
	UI_display_runes(0x0031, ["iolos", "sou("]);
	goto labelFunc017B_105D;
labelFunc017B_0A0D:
	if (!(var0001 == 0x0064)) goto labelFunc017B_0A27;
	UI_display_runes(0x0031, ["paws"]);
	goto labelFunc017B_105D;
labelFunc017B_0A27:
	if (!(var0001 == 0x0065)) goto labelFunc017B_0A44;
	UI_display_runes(0x0031, ["(e", "salty|dog"]);
	goto labelFunc017B_105D;
labelFunc017B_0A44:
	if (!(var0001 == 0x0066)) goto labelFunc017B_0A61;
	UI_display_runes(0x0031, ["FELLOWSHIP", "SHELTER"]);
	goto labelFunc017B_105D;
labelFunc017B_0A61:
	if (!(var0001 == 0x0067)) goto labelFunc017B_0A7E;
	UI_display_runes(0x0031, ["vesper", "branch"]);
	goto labelFunc017B_105D;
labelFunc017B_0A7E:
	if (!(var0001 == 0x0068)) goto labelFunc017B_0A9E;
	UI_display_runes(0x0031, ["(e", "checquered", "cork"]);
	goto labelFunc017B_105D;
labelFunc017B_0A9E:
	if (!(var0001 == 0x0069)) goto labelFunc017B_0ABB;
	UI_display_runes(0x0031, ["artists", "guild"]);
	goto labelFunc017B_105D;
labelFunc017B_0ABB:
	if (!(var0001 == 0x006A)) goto labelFunc017B_0ADB;
	UI_display_runes(0x0031, ["(e bunk", "and", ",ool"]);
	goto labelFunc017B_105D;
labelFunc017B_0ADB:
	if (!(var0001 == 0x006B)) goto labelFunc017B_0AFE;
	UI_display_runes(0x0031, ["(e", "library", "of", "scars"]);
	goto labelFunc017B_105D;
labelFunc017B_0AFE:
	if (!(var0001 == 0x006C)) goto labelFunc017B_0B1B;
	UI_display_runes(0x0031, ["carlyns", "clo(es"]);
	goto labelFunc017B_105D;
labelFunc017B_0B1B:
	if (!(var0001 == 0x006D)) goto labelFunc017B_0B3E;
	UI_display_runes(0x0031, ["wi(in|(ese", "walls", "lies|ma,er", "richard"]);
	goto labelFunc017B_105D;
labelFunc017B_0B3E:
	if (!(var0001 == 0x006E)) goto labelFunc017B_0B58;
	UI_display_runes(0x0031, ["ca,le|way"]);
	goto labelFunc017B_105D;
labelFunc017B_0B58:
	if (!(var0001 == 0x006F)) goto labelFunc017B_0B78;
	UI_display_runes(0x0031, ["lord", "british", "lane"]);
	goto labelFunc017B_105D;
labelFunc017B_0B78:
	if (!(var0001 == 0x0070)) goto labelFunc017B_0B92;
	UI_display_runes(0x0031, ["noble|road"]);
	goto labelFunc017B_105D;
labelFunc017B_0B92:
	if (!(var0001 == 0x0071)) goto labelFunc017B_0BAF;
	UI_display_runes(0x0031, ["we,|end", "avenue"]);
	goto labelFunc017B_105D;
labelFunc017B_0BAF:
	if (!(var0001 == 0x0072)) goto labelFunc017B_0BC9;
	UI_display_runes(0x0031, ["hazle|lane"]);
	goto labelFunc017B_105D;
labelFunc017B_0BC9:
	if (!(var0001 == 0x0073)) goto labelFunc017B_0BE9;
	UI_display_runes(0x0031, ["park", "square", "nor("]);
	goto labelFunc017B_105D;
labelFunc017B_0BE9:
	if (!(var0001 == 0x0074)) goto labelFunc017B_0C09;
	UI_display_runes(0x0031, ["park", "square", "sou("]);
	goto labelFunc017B_105D;
labelFunc017B_0C09:
	if (!(var0001 == 0x0075)) goto labelFunc017B_0C26;
	UI_display_runes(0x0031, ["market", ",r)t"]);
	goto labelFunc017B_105D;
labelFunc017B_0C26:
	if (!(var0001 == 0x0076)) goto labelFunc017B_0C43;
	UI_display_runes(0x0031, ["golden", "way"]);
	goto labelFunc017B_105D;
labelFunc017B_0C43:
	if (!(var0001 == 0x0077)) goto labelFunc017B_0C60;
	UI_display_runes(0x0031, ["center", "avenue"]);
	goto labelFunc017B_105D;
labelFunc017B_0C60:
	if (!(var0001 == 0x0078)) goto labelFunc017B_0C7D;
	UI_display_runes(0x0031, ["spike", "lane"]);
	goto labelFunc017B_105D;
labelFunc017B_0C7D:
	if (!(var0001 == 0x0079)) goto labelFunc017B_0C9A;
	UI_display_runes(0x0031, ["avatar", "avenue"]);
	goto labelFunc017B_105D;
labelFunc017B_0C9A:
	if (!(var0001 == 0x007A)) goto labelFunc017B_0CB7;
	UI_display_runes(0x0031, [",able", "lane"]);
	goto labelFunc017B_105D;
labelFunc017B_0CB7:
	if (!(var0001 == 0x007B)) goto labelFunc017B_0CD7;
	UI_display_runes(0x0031, ["+,", "end", "avenue"]);
	goto labelFunc017B_105D;
labelFunc017B_0CD7:
	if (!(var0001 == 0x007C)) goto labelFunc017B_0CF4;
	UI_display_runes(0x0031, ["farm", "road"]);
	goto labelFunc017B_105D;
labelFunc017B_0CF4:
	if (!(var0001 == 0x007D)) goto labelFunc017B_0D11;
	UI_display_runes(0x0031, ["nugget", ",r)t"]);
	goto labelFunc017B_105D;
labelFunc017B_0D11:
	if (!(var0001 == 0x007E)) goto labelFunc017B_0D2E;
	UI_display_runes(0x0031, ["cool", "cove"]);
	goto labelFunc017B_105D;
labelFunc017B_0D2E:
	if (!(var0001 == 0x007F)) goto labelFunc017B_0D4E;
	UI_display_runes(0x0031, ["nor(", "end", "avenue"]);
	goto labelFunc017B_105D;
labelFunc017B_0D4E:
	if (!(var0001 == 0x0080)) goto labelFunc017B_0D6E;
	UI_display_runes(0x0031, ["golden", "eye", "way"]);
	goto labelFunc017B_105D;
labelFunc017B_0D6E:
	if (!(var0001 == 0x0081)) goto labelFunc017B_0D91;
	UI_display_runes(0x0031, ["to", "(e", "dark", "tower"]);
	goto labelFunc017B_105D;
labelFunc017B_0D91:
	if (!(var0001 == 0x0082)) goto labelFunc017B_0DB1;
	UI_display_runes(0x0031, ["BEWARE", "OF", "LANDSLIDES"]);
	goto labelFunc017B_105D;
labelFunc017B_0DB1:
	if (!(var0001 == 0x0083)) goto labelFunc017B_0DD4;
	UI_display_runes(0x0031, ["DANGER:", "DO", "NOT", "ENTER"]);
	goto labelFunc017B_105D;
labelFunc017B_0DD4:
	if (!(var0001 == 0x0084)) goto labelFunc017B_0DF4;
	UI_display_runes(0x0031, ["old", "number", "one"]);
	goto labelFunc017B_105D;
labelFunc017B_0DF4:
	if (!(var0001 == 0x0085)) goto labelFunc017B_0E17;
	UI_display_runes(0x0031, ["do|not", "free", "(e", "liche"]);
	goto labelFunc017B_105D;
labelFunc017B_0E17:
	if (!(var0001 == 0x0086)) goto labelFunc017B_0E37;
	UI_display_runes(0x0031, ["beware", "mon,ers", "wi(in"]);
	goto labelFunc017B_105D;
labelFunc017B_0E37:
	if (!(var0001 == 0x0087)) goto labelFunc017B_0E54;
	UI_display_runes(0x0031, ["paupers", "graves"]);
	goto labelFunc017B_105D;
labelFunc017B_0E54:
	if (!(var0001 == 0x0088)) goto labelFunc017B_0E77;
	UI_display_runes(0x0031, ["|manrik|", "a|soul", "of|a", "soul"]);
	goto labelFunc017B_105D;
labelFunc017B_0E77:
	if (!(var0001 == 0x0089)) goto labelFunc017B_0E9A;
	UI_display_runes(0x0031, ["here|lies", "jules|no", "words|for", "(e|loss"]);
	goto labelFunc017B_105D;
labelFunc017B_0E9A:
	if (!(var0001 == 0x008A)) goto labelFunc017B_0EBD;
	UI_display_runes(0x0031, ["|morgan|", "her", "dea(|a", "tragedy"]);
	goto labelFunc017B_105D;
labelFunc017B_0EBD:
	if (!(var0001 == 0x008B)) goto labelFunc017B_0EE0;
	UI_display_runes(0x0031, ["here|lies", "ke(ian", "friend|to", "many"]);
	goto labelFunc017B_105D;
labelFunc017B_0EE0:
	if (!(var0001 == 0x008C)) goto labelFunc017B_0F03;
	UI_display_runes(0x0031, ["|wadley|", "his|soul", "deeper|(an", "his|body"]);
	goto labelFunc017B_105D;
labelFunc017B_0F03:
	if (!(var0001 == 0x008D)) goto labelFunc017B_0F26;
	UI_display_runes(0x0031, ["here|lies", "jenna", "kindred", "spirit"]);
	goto labelFunc017B_105D;
labelFunc017B_0F26:
	if (!(var0001 == 0x008E)) goto labelFunc017B_0F43;
	UI_display_runes(0x0031, ["d+d", "end"]);
	goto labelFunc017B_105D;
labelFunc017B_0F43:
	if (!(var0001 == 0x008F)) goto labelFunc017B_0F63;
	UI_display_runes(0x0031, ["to", "skara", "brae"]);
	goto labelFunc017B_105D;
labelFunc017B_0F63:
	if (!(var0001 == 0x0090)) goto labelFunc017B_0F86;
	UI_display_runes(0x0031, ["THE", "THRONE", "OF|THE", "GUARDIAN"]);
	goto labelFunc017B_105D;
labelFunc017B_0F86:
	if (!(var0001 == 0x0091)) goto labelFunc017B_0FA6;
	UI_display_runes(0x0031, ["nor(", "to", "britain"]);
	goto labelFunc017B_105D;
labelFunc017B_0FA6:
	if (!(var0001 == 0x0092)) goto labelFunc017B_0FC3;
	UI_display_runes(0x0031, ["pull", "lever"]);
	goto labelFunc017B_105D;
labelFunc017B_0FC3:
	if (!(var0001 == 0x0093)) goto labelFunc017B_0FE3;
	UI_display_runes(0x0031, ["round", "and", "round"]);
	goto labelFunc017B_105D;
labelFunc017B_0FE3:
	if (!(var0001 == 0x0094)) goto labelFunc017B_1000;
	UI_display_runes(0x0031, ["way", "out"]);
	goto labelFunc017B_105D;
labelFunc017B_1000:
	if (!(var0001 == 0x0095)) goto labelFunc017B_1020;
	UI_display_runes(0x0031, ["keep", "doors", "open"]);
	goto labelFunc017B_105D;
labelFunc017B_1020:
	if (!(var0001 == 0x0096)) goto labelFunc017B_103D;
	UI_display_runes(0x0031, ["selwyns", "tower"]);
	goto labelFunc017B_105D;
labelFunc017B_103D:
	if (!(var0001 == 0x0097)) goto labelFunc017B_105D;
	UI_display_runes(0x0031, ["follow", "(e", "fire"]);
	goto labelFunc017B_105D;
labelFunc017B_105D:
	return;
}


