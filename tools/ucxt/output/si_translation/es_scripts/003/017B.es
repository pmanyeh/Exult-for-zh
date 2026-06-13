#game "serpentisle"
// externs
extern var Func0953 0x953 ();

void Func017B shape#(0x17B) ()
{
	var var0000;
	var var0001;

	if (!(event != 0x0001)) goto labelFunc017B_0009;
	return;
labelFunc017B_0009:
	var0000 = Func0953();
	var0001 = UI_get_item_quality(item);
	if (!(var0001 > 0x0096)) goto labelFunc017B_0037;
	UI_display_runes(0x002C, ["REPORT", "THIS", "SIGN"]);
	goto labelFunc017B_0A93;
labelFunc017B_0037:
	if (!(var0001 == 0x000C)) goto labelFunc017B_0057;
	UI_display_runes(0x002C, ["house", "of", "wares"]);
	goto labelFunc017B_0A93;
labelFunc017B_0057:
	if (!(var0001 == 0x0011)) goto labelFunc017B_0071;
	UI_display_runes(0x002C, ["bakery"]);
	goto labelFunc017B_0A93;
labelFunc017B_0071:
	if (!(var0001 == 0x0012)) goto labelFunc017B_008B;
	UI_display_runes(0x002C, ["jeweler"]);
	goto labelFunc017B_0A93;
labelFunc017B_008B:
	if (!(var0001 == 0x0013)) goto labelFunc017B_00A8;
	UI_display_runes(0x002C, ["farmers'", "market"]);
	goto labelFunc017B_0A93;
labelFunc017B_00A8:
	if (!(var0001 == 0x0014)) goto labelFunc017B_00C2;
	UI_display_runes(0x002C, ["apo(ecary"]);
	goto labelFunc017B_0A93;
labelFunc017B_00C2:
	if (!(var0001 == 0x0015)) goto labelFunc017B_00DF;
	UI_display_runes(0x002C, ["royal", "mint"]);
	goto labelFunc017B_0A93;
labelFunc017B_00DF:
	if (!(var0001 == 0x0016)) goto labelFunc017B_00FF;
	UI_display_runes(0x002C, ["csil", "(e", "h+ler"]);
	goto labelFunc017B_0A93;
labelFunc017B_00FF:
	if (!(var0001 == 0x0017)) goto labelFunc017B_0119;
	UI_display_runes(0x002C, ["provisions"]);
	goto labelFunc017B_0A93;
labelFunc017B_0119:
	if (!(var0001 == 0x0018)) goto labelFunc017B_0139;
	UI_display_runes(0x002C, ["to", "sl)pi*", "bull"]);
	goto labelFunc017B_0A93;
labelFunc017B_0139:
	if (!(var0001 == 0x002C)) goto labelFunc017B_0153;
	UI_display_runes(0x002C, ["go|(is|way"]);
	goto labelFunc017B_0A93;
labelFunc017B_0153:
	if (!(var0001 == 0x002D)) goto labelFunc017B_016A;
	UI_display_runes(0x002C, "DO NOT GO THIS WAY");
	goto labelFunc017B_0A93;
labelFunc017B_016A:
	if (!(var0001 == 0x002E)) goto labelFunc017B_0181;
	UI_display_runes(0x002C, "DO NOT GO IN THE WOODEN DOOR");
	goto labelFunc017B_0A93;
labelFunc017B_0181:
	if (!(var0001 == 0x002F)) goto labelFunc017B_0198;
	UI_display_runes(0x002C, "DO NOT GO IN THE WINDOWED DOOR");
	goto labelFunc017B_0A93;
labelFunc017B_0198:
	if (!(var0001 == 0x0030)) goto labelFunc017B_01AF;
	UI_display_runes(0x002C, "GO IN THE STEEL DOOR");
	goto labelFunc017B_0A93;
labelFunc017B_01AF:
	if (!(var0001 == 0x0031)) goto labelFunc017B_01C6;
	UI_display_runes(0x002C, "DO NOT GO IN THE GREEN DOOR");
	goto labelFunc017B_0A93;
labelFunc017B_01C6:
	if (!(var0001 == 0x0032)) goto labelFunc017B_01DD;
	UI_display_runes(0x002C, "ONLY ONE OF THESE SIGNS IS TRUE");
	goto labelFunc017B_0A93;
labelFunc017B_01DD:
	if (!(var0001 == 0x0033)) goto labelFunc017B_01F4;
	UI_display_runes(0x002C, "AT LEAST TWO SIGNS ARE FALSE");
	goto labelFunc017B_0A93;
labelFunc017B_01F4:
	if (!(var0001 == 0x003D)) goto labelFunc017B_0211;
	UI_display_runes(0x002C, ["we,|gate", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_0211:
	if (!(var0001 == 0x003E)) goto labelFunc017B_022E;
	UI_display_runes(0x002C, ["nor(|gate", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_022E:
	if (!(var0001 == 0x003F)) goto labelFunc017B_024B;
	UI_display_runes(0x002C, ["pikeman's", "road"]);
	goto labelFunc017B_0A93;
labelFunc017B_024B:
	if (!(var0001 == 0x0040)) goto labelFunc017B_0268;
	UI_display_runes(0x002C, ["kosric", "road"]);
	goto labelFunc017B_0A93;
labelFunc017B_0268:
	if (!(var0001 == 0x0041)) goto labelFunc017B_0285;
	UI_display_runes(0x002C, ["pedigar", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_0285:
	if (!(var0001 == 0x0042)) goto labelFunc017B_02A2;
	UI_display_runes(0x002C, ["roland", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_02A2:
	if (!(var0001 == 0x0043)) goto labelFunc017B_02BF;
	UI_display_runes(0x002C, ["town|hall", "road"]);
	goto labelFunc017B_0A93;
labelFunc017B_02BF:
	if (!(var0001 == 0x0044)) goto labelFunc017B_02DC;
	UI_display_runes(0x002C, ["melina", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_02DC:
	if (!(var0001 == 0x0045)) goto labelFunc017B_02F9;
	UI_display_runes(0x002C, ["wolf", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_02F9:
	if (!(var0001 == 0x0046)) goto labelFunc017B_0316;
	UI_display_runes(0x002C, ["leopard", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_0316:
	if (!(var0001 == 0x0047)) goto labelFunc017B_0333;
	UI_display_runes(0x002C, ["b+r", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_0333:
	if (!(var0001 == 0x0048)) goto labelFunc017B_0350;
	UI_display_runes(0x002C, ["dock", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_0350:
	if (!(var0001 == 0x0071)) goto labelFunc017B_036D;
	UI_display_runes(0x002C, ["banquet", ",r)t"]);
	goto labelFunc017B_0A93;
labelFunc017B_036D:
	if (!(var0001 == 0x0072)) goto labelFunc017B_038A;
	UI_display_runes(0x002C, ["warriors'", "road"]);
	goto labelFunc017B_0A93;
labelFunc017B_038A:
	if (!(var0001 == 0x0049)) goto labelFunc017B_03A4;
	UI_display_runes(0x002C, ["undertaker"]);
	goto labelFunc017B_0A93;
labelFunc017B_03A4:
	if (!(var0001 == 0x004B)) goto labelFunc017B_03BE;
	UI_display_runes(0x002C, ["prison"]);
	goto labelFunc017B_0A93;
labelFunc017B_03BE:
	if (!(var0001 == 0x004D)) goto labelFunc017B_03D8;
	UI_display_runes(0x002C, ["armoury"]);
	goto labelFunc017B_0A93;
labelFunc017B_03D8:
	if (!(var0001 == 0x004E)) goto labelFunc017B_03F2;
	UI_display_runes(0x002C, ["blacksmi("]);
	goto labelFunc017B_0A93;
labelFunc017B_03F2:
	if (!(var0001 == 0x004F)) goto labelFunc017B_040F;
	UI_display_runes(0x002C, ["recr+tion", "center"]);
	goto labelFunc017B_0A93;
labelFunc017B_040F:
	if (!(var0001 == 0x0050)) goto labelFunc017B_042F;
	UI_display_runes(0x002C, ["hall", "of", "knowledge"]);
	goto labelFunc017B_0A93;
labelFunc017B_042F:
	if (!(var0001 == 0x0051)) goto labelFunc017B_044F;
	UI_display_runes(0x002C, ["hello", "(ere", "avatar"]);
	goto labelFunc017B_0A93;
labelFunc017B_044F:
	if (!(var0001 == 0x0052)) goto labelFunc017B_0469;
	UI_display_runes(0x002C, ["to fawn"]);
	goto labelFunc017B_0A93;
labelFunc017B_0469:
	if (!(var0001 == 0x0055)) goto labelFunc017B_0486;
	UI_display_runes(0x002C, ["paladin's", "pa("]);
	goto labelFunc017B_0A93;
labelFunc017B_0486:
	if (!(var0001 == 0x0057)) goto labelFunc017B_04A3;
	UI_display_runes(0x002C, ["widow's", "walk"]);
	goto labelFunc017B_0A93;
labelFunc017B_04A3:
	if (!(var0001 == 0x0058)) goto labelFunc017B_04C0;
	UI_display_runes(0x002C, ["harold's", "hallway"]);
	goto labelFunc017B_0A93;
labelFunc017B_04C0:
	if (!(var0001 == 0x0059)) goto labelFunc017B_04DA;
	UI_display_runes(0x002C, ["fool's|way"]);
	goto labelFunc017B_0A93;
labelFunc017B_04DA:
	if (!(var0001 == 0x005A)) goto labelFunc017B_04F7;
	UI_display_runes(0x002C, ["whitsaber", "road"]);
	goto labelFunc017B_0A93;
labelFunc017B_04F7:
	if (!(var0001 == 0x005B)) goto labelFunc017B_0511;
	UI_display_runes(0x002C, [",rand"]);
	goto labelFunc017B_0A93;
labelFunc017B_0511:
	if (!(var0001 == 0x005C)) goto labelFunc017B_052E;
	UI_display_runes(0x002C, ["chalice", "avenue"]);
	goto labelFunc017B_0A93;
labelFunc017B_052E:
	if (!(var0001 == 0x005D)) goto labelFunc017B_054B;
	UI_display_runes(0x002C, ["two", "coves"]);
	goto labelFunc017B_0A93;
labelFunc017B_054B:
	if (!(var0001 == 0x005E)) goto labelFunc017B_056B;
	UI_display_runes(0x002C, ["we,", "wall", "road"]);
	goto labelFunc017B_0A93;
labelFunc017B_056B:
	if (!(var0001 == 0x005F)) goto labelFunc017B_058B;
	UI_display_runes(0x002C, ["+,", "wall", "road"]);
	goto labelFunc017B_0A93;
labelFunc017B_058B:
	if (!(var0001 == 0x0060)) goto labelFunc017B_05AB;
	UI_display_runes(0x002C, ["nor(", "wall", "road"]);
	goto labelFunc017B_0A93;
labelFunc017B_05AB:
	if (!(var0001 == 0x0061)) goto labelFunc017B_05CB;
	UI_display_runes(0x002C, ["sou(", "wall", "road"]);
	goto labelFunc017B_0A93;
labelFunc017B_05CB:
	if (!(var0001 == 0x0062)) goto labelFunc017B_05E8;
	UI_display_runes(0x002C, ["heroes'", "way"]);
	goto labelFunc017B_0A93;
labelFunc017B_05E8:
	if (!(var0001 == 0x0069)) goto labelFunc017B_0605;
	UI_display_runes(0x002C, ["arti,s'", "guild"]);
	goto labelFunc017B_0A93;
labelFunc017B_0605:
	if (!(var0001 == 0x006A)) goto labelFunc017B_0625;
	UI_display_runes(0x002C, ["(e|bunk", "and", ",ool"]);
	goto labelFunc017B_0A93;
labelFunc017B_0625:
	if (!(var0001 == 0x006B)) goto labelFunc017B_0648;
	UI_display_runes(0x002C, ["(e", "library", "of", "scars"]);
	goto labelFunc017B_0A93;
labelFunc017B_0648:
	if (!(var0001 == 0x006C)) goto labelFunc017B_0665;
	UI_display_runes(0x002C, ["carlyn's", "clo(es"]);
	goto labelFunc017B_0A93;
labelFunc017B_0665:
	if (!(var0001 == 0x006D)) goto labelFunc017B_0688;
	UI_display_runes(0x002C, ["wi(in|(ese", "walls", "lies|ma,er", "richard"]);
	goto labelFunc017B_0A93;
labelFunc017B_0688:
	if (!(var0001 == 0x006E)) goto labelFunc017B_06A2;
	UI_display_runes(0x002C, ["ca,le|way"]);
	goto labelFunc017B_0A93;
labelFunc017B_06A2:
	if (!(var0001 == 0x006F)) goto labelFunc017B_06C2;
	UI_display_runes(0x002C, ["lord", "british", "lane"]);
	goto labelFunc017B_0A93;
labelFunc017B_06C2:
	if (!(var0001 == 0x0070)) goto labelFunc017B_06DC;
	UI_display_runes(0x002C, ["noble|road"]);
	goto labelFunc017B_0A93;
labelFunc017B_06DC:
	if (!(var0001 == 0x0073)) goto labelFunc017B_06F9;
	UI_display_runes(0x002C, ["knight's", "te,"]);
	goto labelFunc017B_0A93;
labelFunc017B_06F9:
	if (!(var0001 == 0x007A)) goto labelFunc017B_0716;
	UI_display_runes(0x002C, ["swamp", "ca(edral"]);
	goto labelFunc017B_0A93;
labelFunc017B_0716:
	if (!(var0001 == 0x007B)) goto labelFunc017B_0733;
	UI_display_runes(0x002C, ["k)p", "out"]);
	goto labelFunc017B_0A93;
labelFunc017B_0733:
	if (!(var0001 == 0x007C)) goto labelFunc017B_0753;
	UI_display_runes(0x002C, ["explodi*", "powder", "maker"]);
	goto labelFunc017B_0A93;
labelFunc017B_0753:
	if (!(var0001 == 0x007D)) goto labelFunc017B_0773;
	UI_display_runes(0x002C, ["form", "one", "line"]);
	goto labelFunc017B_0A93;
labelFunc017B_0773:
	if (!(var0001 == 0x007E)) goto labelFunc017B_0796;
	UI_display_runes(0x002C, ["present", "gold", "for", "food"]);
	goto labelFunc017B_0A93;
labelFunc017B_0796:
	if (!(var0001 == 0x007F)) goto labelFunc017B_07B9;
	UI_display_runes(0x002C, ["excha*e", "gold", "for", "potions"]);
	goto labelFunc017B_0A93;
labelFunc017B_07B9:
	if (!(var0001 == 0x0080)) goto labelFunc017B_07DC;
	UI_display_runes(0x002C, ["trade", "gold", "for", "necessities"]);
	goto labelFunc017B_0A93;
labelFunc017B_07DC:
	if (!(var0001 == 0x0081)) goto labelFunc017B_07FC;
	UI_display_runes(0x002C, ["watch", "(y", "h+d"]);
	goto labelFunc017B_0A93;
labelFunc017B_07FC:
	if (!(var0001 == 0x0082)) goto labelFunc017B_081C;
	UI_display_runes(0x002C, ["escape", "is", "impossible"]);
	goto labelFunc017B_0A93;
labelFunc017B_081C:
	if (!(var0001 == 0x0083)) goto labelFunc017B_0839;
	UI_display_runes(0x002C, ["turn", "back|now"]);
	goto labelFunc017B_0A93;
labelFunc017B_0839:
	if (!(var0001 == 0x0084)) goto labelFunc017B_0856;
	UI_display_runes(0x002C, ["wro*", "way"]);
	goto labelFunc017B_0A93;
labelFunc017B_0856:
	if (!(var0001 == 0x0085)) goto labelFunc017B_0873;
	UI_display_runes(0x002C, ["sure", "d+("]);
	goto labelFunc017B_0A93;
labelFunc017B_0873:
	if (!(var0001 == 0x0086)) goto labelFunc017B_0893;
	UI_display_runes(0x002C, ["welcome", "to", "hamlinberg"]);
	goto labelFunc017B_0A93;
labelFunc017B_0893:
	if (!(var0001 == 0x0087)) goto labelFunc017B_08B0;
	UI_display_runes(0x002C, ["hazard's", "lodge"]);
	goto labelFunc017B_0A93;
labelFunc017B_08B0:
	if (!(var0001 == 0x0088)) goto labelFunc017B_08D0;
	UI_display_runes(0x002C, ["l+ve", "animals", "down,airs"]);
	goto labelFunc017B_0A93;
labelFunc017B_08D0:
	if (!(var0001 == 0x0089)) goto labelFunc017B_08F3;
	UI_display_runes(0x002C, ["dispose", "of|blood", "and|parts", "outside"]);
	goto labelFunc017B_0A93;
labelFunc017B_08F3:
	if (!(var0001 == 0x008A)) goto labelFunc017B_0916;
	UI_display_runes(0x002C, ["beware", "of", "water", "cr+tures"]);
	goto labelFunc017B_0A93;
labelFunc017B_0916:
	if (!(var0001 == 0x008B)) goto labelFunc017B_0936;
	UI_display_runes(0x002C, ["(ou", "art", "lo,"]);
	goto labelFunc017B_0A93;
labelFunc017B_0936:
	if (!(var0001 == 0x008C)) goto labelFunc017B_0959;
	UI_display_runes(0x002C, ["|wadley|", "his|soul", "d)per|(an", "his|body"]);
	goto labelFunc017B_0A93;
labelFunc017B_0959:
	if (!(var0001 == 0x008D)) goto labelFunc017B_097C;
	UI_display_runes(0x002C, ["here|lies", "jenna", "kindred", "spirit"]);
	goto labelFunc017B_0A93;
labelFunc017B_097C:
	if (!(var0001 == 0x008E)) goto labelFunc017B_0999;
	UI_display_runes(0x002C, ["d+d", "end"]);
	goto labelFunc017B_0A93;
labelFunc017B_0999:
	if (!(var0001 == 0x008F)) goto labelFunc017B_09B9;
	UI_display_runes(0x002C, ["to", "skara", "brae"]);
	goto labelFunc017B_0A93;
labelFunc017B_09B9:
	if (!(var0001 == 0x0090)) goto labelFunc017B_09DC;
	UI_display_runes(0x002C, ["THE", "THRONE", "OF THE", "GUARDIAN"]);
	goto labelFunc017B_0A93;
labelFunc017B_09DC:
	if (!(var0001 == 0x0091)) goto labelFunc017B_09FC;
	UI_display_runes(0x002C, ["nor(", "to", "britain"]);
	goto labelFunc017B_0A93;
labelFunc017B_09FC:
	if (!(var0001 == 0x0092)) goto labelFunc017B_0A19;
	UI_display_runes(0x002C, ["pull", "lever"]);
	goto labelFunc017B_0A93;
labelFunc017B_0A19:
	if (!(var0001 == 0x0093)) goto labelFunc017B_0A39;
	UI_display_runes(0x002C, ["round", "and", "round"]);
	goto labelFunc017B_0A93;
labelFunc017B_0A39:
	if (!(var0001 == 0x0094)) goto labelFunc017B_0A56;
	UI_display_runes(0x002C, ["way", "out"]);
	goto labelFunc017B_0A93;
labelFunc017B_0A56:
	if (!(var0001 == 0x0095)) goto labelFunc017B_0A76;
	UI_display_runes(0x002C, ["k)p", "doors", "open"]);
	goto labelFunc017B_0A93;
labelFunc017B_0A76:
	if (!(var0001 == 0x0096)) goto labelFunc017B_0A93;
	UI_display_runes(0x002C, ["selwyn's", "tower"]);
	goto labelFunc017B_0A93;
labelFunc017B_0A93:
	return;
}


