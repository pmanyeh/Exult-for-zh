#game "serpentisle"
// externs
extern var Func0989 0x989 (var var0000, var var0001);
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09AB 0x9AB (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0334 shape#(0x334) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;

	var0000 = item;
	var0001 = UI_get_item_quality(var0000);
	if (!(event == 0x0003)) goto labelFunc0334_0172;
	if (!(UI_get_item_shape(item) != 0x0334)) goto labelFunc0334_0049;
	var0000 = UI_find_nearby(var0000, 0x0334, 0x0005, 0x00B0);
	var0000 = Func0989(var0000, var0000);
	if (!(!var0000)) goto labelFunc0334_0049;
	abort;
labelFunc0334_0049:
	var0001 = UI_get_item_quality(var0000);
	var0002 = [];
	if (!(var0001 == 0x0007)) goto labelFunc0334_0072;
	var0002 = [0x0258, 0x026F, 0x022D];
labelFunc0334_0072:
	if (!(var0001 == 0x0008)) goto labelFunc0334_0082;
	var0002 = 0x0273;
labelFunc0334_0082:
	if (!(var0001 == 0x000A)) goto labelFunc0334_0092;
	var0002 = 0x028E;
labelFunc0334_0092:
	if (!(var0001 == 0x000B)) goto labelFunc0334_00AB;
	var0002 = [0x0284, 0x0285, 0x0286];
labelFunc0334_00AB:
	var0003 = false;
	enum();
labelFunc0334_00B0:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0334_016A;
	if (!UI_find_nearby(var0000, var0006, 0x0005, 0x00B0)) goto labelFunc0334_0167;
	if (!(var0001 < 0x000B)) goto labelFunc0334_00FD;
	var0001 = (var0001 + 0x0001);
	var0007 = UI_set_item_quality(var0000, var0001);
	UI_close_gumps();
	var0003 = true;
	goto labelFunc0334_016A;
	goto labelFunc0334_0167;
labelFunc0334_00FD:
	var0008 = UI_get_object_position(var0000);
	var0008[0x0001] = (var0008[0x0001] - (var0008[0x0003] / 0x0002));
	var0008[0x0002] = (var0008[0x0002] - (var0008[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	UI_remove_item(var0000);
	UI_close_gumps();
	abort;
labelFunc0334_0167:
	goto labelFunc0334_00B0;
labelFunc0334_016A:
	if (!(!var0003)) goto labelFunc0334_0172;
	abort;
labelFunc0334_0172:
	var0009 = Func0953();
	if (!(var0001 == 0x0000)) goto labelFunc0334_0194;
	var000A = ["po,|no", "plaques|here", "on|pain|of|d+("];
	goto labelFunc0334_0B45;
labelFunc0334_0194:
	if (!(var0001 == 0x0001)) goto labelFunc0334_01D0;
	var000A = ["choose"];
	var000B = UI_find_nearby(item, 0x010E, 0x0005, 0xFE99);
	var0007 = UI_delayed_execute_usecode_array(var000B, [(byte)0x55, 0x010E], 0x0005);
	goto labelFunc0334_0B45;
labelFunc0334_01D0:
	if (!(var0001 == 0x0002)) goto labelFunc0334_01E9;
	var000A = ["wardrobe", "room"];
	goto labelFunc0334_0B45;
labelFunc0334_01E9:
	if (!(var0001 == 0x0003)) goto labelFunc0334_0202;
	var000A = ["wine", "room"];
	goto labelFunc0334_0B45;
labelFunc0334_0202:
	if (!(var0001 == 0x0014)) goto labelFunc0334_0218;
	var000A = ["1"];
	goto labelFunc0334_0B45;
labelFunc0334_0218:
	if (!(var0001 == 0x0015)) goto labelFunc0334_022E;
	var000A = ["2"];
	goto labelFunc0334_0B45;
labelFunc0334_022E:
	if (!(var0001 == 0x0016)) goto labelFunc0334_0244;
	var000A = ["3"];
	goto labelFunc0334_0B45;
labelFunc0334_0244:
	if (!(var0001 == 0x0017)) goto labelFunc0334_025A;
	var000A = ["4"];
	goto labelFunc0334_0B45;
labelFunc0334_025A:
	if (!(var0001 == 0x0018)) goto labelFunc0334_0270;
	var000A = ["5"];
	goto labelFunc0334_0B45;
labelFunc0334_0270:
	if (!(var0001 == 0x0019)) goto labelFunc0334_0286;
	var000A = ["6"];
	goto labelFunc0334_0B45;
labelFunc0334_0286:
	if (!(var0001 == 0x001A)) goto labelFunc0334_029C;
	var000A = ["7"];
	goto labelFunc0334_0B45;
labelFunc0334_029C:
	if (!(var0001 == 0x001B)) goto labelFunc0334_02B2;
	var000A = ["Throw two up"];
	goto labelFunc0334_0B45;
labelFunc0334_02B2:
	if (!(var0001 == 0x001C)) goto labelFunc0334_02C8;
	var000A = ["3 down gets 8"];
	goto labelFunc0334_0B45;
labelFunc0334_02C8:
	if (!(var0001 == 0x001D)) goto labelFunc0334_02E4;
	var000A = ["(e", "blue", "boar"];
	goto labelFunc0334_0B45;
labelFunc0334_02E4:
	if (!(var0001 == 0x001E)) goto labelFunc0334_02FD;
	var000A = ["royal", "museum"];
	goto labelFunc0334_0B45;
labelFunc0334_02FD:
	if (!(var0001 == 0x001F)) goto labelFunc0334_0319;
	var000A = ["(e", "music", "hall"];
	goto labelFunc0334_0B45;
labelFunc0334_0319:
	if (!(var0001 == 0x0020)) goto labelFunc0334_0332;
	var000A = ["town", "hall"];
	goto labelFunc0334_0B45;
labelFunc0334_0332:
	if (!(var0001 == 0x0021)) goto labelFunc0334_034B;
	var000A = ["royal", "mint"];
	goto labelFunc0334_0B45;
labelFunc0334_034B:
	if (!(var0001 == 0x0022)) goto labelFunc0334_0361;
	var000A = ["4 down"];
	goto labelFunc0334_0B45;
labelFunc0334_0361:
	if (!(var0001 == 0x0023)) goto labelFunc0334_0377;
	var000A = ["First & Last are even"];
	goto labelFunc0334_0B45;
labelFunc0334_0377:
	if (!(var0001 == 0x0024)) goto labelFunc0334_038D;
	var000A = ["3 follows 4"];
	goto labelFunc0334_0B45;
labelFunc0334_038D:
	if (!(var0001 == 0x002E)) goto labelFunc0334_03A6;
	var000A = ["DO NOT", "ENTER"];
	goto labelFunc0334_0B45;
labelFunc0334_03A6:
	if (!(var0001 == 0x0032)) goto labelFunc0334_03C8;
	var000A = ["in", "lovi*", "memory", "of", "mama"];
	goto labelFunc0334_0B45;
labelFunc0334_03C8:
	if (!(var0001 == 0x0033)) goto labelFunc0334_03E4;
	var000A = ["BEWARE", "THE", "DRAGON"];
	goto labelFunc0334_0B45;
labelFunc0334_03E4:
	if (!(var0001 == 0x0034)) goto labelFunc0334_0406;
	var000A = ["for", "(e", "love", "of", "marney"];
	goto labelFunc0334_0B45;
labelFunc0334_0406:
	if (!(var0001 == 0x0035)) goto labelFunc0334_0428;
	var000A = ["|j|r|r|t|", "a|gr+t", "man", "a|gr+t", "writer"];
	goto labelFunc0334_0B45;
labelFunc0334_0428:
	if (!(var0001 == 0x003D)) goto labelFunc0334_0447;
	var000A = ["beware!", "spirits", "prowl", "here!"];
	goto labelFunc0334_0B45;
labelFunc0334_0447:
	if (!(var0001 == 0x003E)) goto labelFunc0334_0460;
	var000A = ["town", "hall"];
	goto labelFunc0334_0B45;
labelFunc0334_0460:
	if (!(var0001 == 0x003F)) goto labelFunc0334_0479;
	var000A = ["provision", "shoppe"];
	goto labelFunc0334_0B45;
labelFunc0334_0479:
	if (!(var0001 == 0x0040)) goto labelFunc0334_048F;
	var000A = ["archives"];
	goto labelFunc0334_0B45;
labelFunc0334_048F:
	if (!(var0001 == 0x0041)) goto labelFunc0334_04AB;
	var000A = ["goblin", "war", "drum"];
	goto labelFunc0334_0B45;
labelFunc0334_04AB:
	if (!(var0001 == 0x0042)) goto labelFunc0334_04C4;
	var000A = ["goblin", "artifacts"];
	goto labelFunc0334_0B45;
labelFunc0334_04C4:
	if (!(var0001 == 0x0043)) goto labelFunc0334_04E3;
	var000A = ["b+trix", "of|(e", "broken", "h+rt"];
	goto labelFunc0334_0B45;
labelFunc0334_04E3:
	if (!(var0001 == 0x0046)) goto labelFunc0334_04FF;
	var000A = ["sarah", "swift|of|blade", ",ro*|of|h+rt"];
	goto labelFunc0334_0B45;
labelFunc0334_04FF:
	if (!(var0001 == 0x0047)) goto labelFunc0334_051E;
	var000A = ["groat", "no|knight", "swifter", "(an|he"];
	goto labelFunc0334_0B45;
labelFunc0334_051E:
	if (!(var0001 == 0x0048)) goto labelFunc0334_053A;
	var000A = ["edmund", "archer", "par|excellence"];
	goto labelFunc0334_0B45;
labelFunc0334_053A:
	if (!(var0001 == 0x0049)) goto labelFunc0334_0553;
	var000A = ["reynald", "valiant|and|glorious"];
	goto labelFunc0334_0B45;
labelFunc0334_0553:
	if (!(var0001 == 0x004A)) goto labelFunc0334_0572;
	var000A = ["pedigar", ",re*(", "and", "valor"];
	goto labelFunc0334_0B45;
labelFunc0334_0572:
	if (!(var0001 == 0x004B)) goto labelFunc0334_0591;
	var000A = ["elena", "wor(y", "of", "immortality"];
	goto labelFunc0334_0B45;
labelFunc0334_0591:
	if (!(var0001 == 0x004C)) goto labelFunc0334_05AD;
	var000A = ["caladin", "golden-to*ued", "knight"];
	goto labelFunc0334_0B45;
labelFunc0334_05AD:
	if (!(var0001 == 0x004D)) goto labelFunc0334_05C9;
	var000A = ["terrence", "(e", "pure"];
	goto labelFunc0334_0B45;
labelFunc0334_05C9:
	if (!(var0001 == 0x004E)) goto labelFunc0334_05E8;
	var000A = ["randall", "intrepid", "and", "brave"];
	goto labelFunc0334_0B45;
labelFunc0334_05E8:
	if (!(var0001 == 0x004F)) goto labelFunc0334_0607;
	var000A = ["samuel", "(ou|wert", "never", "matched"];
	goto labelFunc0334_0B45;
labelFunc0334_0607:
	if (!(var0001 == 0x0050)) goto labelFunc0334_0626;
	var000A = ["kosric", "(underbolts", "from", "above"];
	goto labelFunc0334_0B45;
labelFunc0334_0626:
	if (!(var0001 == 0x0051)) goto labelFunc0334_0642;
	var000A = ["bryan", "his|skill", "knew|no|bounds"];
	goto labelFunc0334_0B45;
labelFunc0334_0642:
	if (!(var0001 == 0x0052)) goto labelFunc0334_0661;
	var000A = ["goff", "renown", "and", "honor"];
	goto labelFunc0334_0B45;
labelFunc0334_0661:
	if (!(var0001 == 0x0053)) goto labelFunc0334_0686;
	var000A = ["melina", "adept", "in|(e", "art", "of", "war"];
	goto labelFunc0334_0B45;
labelFunc0334_0686:
	if (!(var0001 == 0x0054)) goto labelFunc0334_06AB;
	var000A = ["roland", "red)med", "(e", "honor", "of|our", "land"];
	goto labelFunc0334_0B45;
labelFunc0334_06AB:
	if (!(var0001 == 0x0055)) goto labelFunc0334_06C4;
	var000A = ["cellia's", "fine|furs"];
	goto labelFunc0334_0B45;
labelFunc0334_06C4:
	if (!(var0001 == 0x0056)) goto labelFunc0334_06DD;
	var000A = ["li,", "field"];
	goto labelFunc0334_0B45;
labelFunc0334_06DD:
	if (!(var0001 == 0x0057)) goto labelFunc0334_06F6;
	var000A = ["lydia's", "tattoo|parlor"];
	goto labelFunc0334_0B45;
labelFunc0334_06F6:
	if (!(var0001 == 0x0058)) goto labelFunc0334_070C;
	var000A = ["crematorium"];
	goto labelFunc0334_0B45;
labelFunc0334_070C:
	if (!(var0001 == 0x0059)) goto labelFunc0334_0722;
	var000A = ["armoury"];
	goto labelFunc0334_0B45;
labelFunc0334_0722:
	if (!(var0001 == 0x005A)) goto labelFunc0334_0738;
	var000A = ["banquet|hall"];
	goto labelFunc0334_0B45;
labelFunc0334_0738:
	if (!(var0001 == 0x005B)) goto labelFunc0334_074E;
	var000A = ["jail"];
	goto labelFunc0334_0B45;
labelFunc0334_074E:
	if (!(var0001 == 0x005C)) goto labelFunc0334_0764;
	var000A = ["traini*|hall"];
	goto labelFunc0334_0B45;
labelFunc0334_0764:
	if (!(var0001 == 0x005F)) goto labelFunc0334_077D;
	var000A = ["supply", "room"];
	goto labelFunc0334_0B45;
labelFunc0334_077D:
	if (!(var0001 == 0x0075)) goto labelFunc0334_0799;
	var000A = ["enter", "(y|name", "into|log|book"];
	goto labelFunc0334_0B45;
labelFunc0334_0799:
	if (!(var0001 == 0x0076)) goto labelFunc0334_07B5;
	var000A = ["enter|at", "(ine|own", "risk"];
	goto labelFunc0334_0B45;
labelFunc0334_07B5:
	if (!(var0001 == 0x0077)) goto labelFunc0334_07D1;
	var000A = ["warni*", "da*erous|b+,", "wi(in"];
	goto labelFunc0334_0B45;
labelFunc0334_07D1:
	if (!(var0001 == 0x0078)) goto labelFunc0334_07ED;
	var000A = ["f)d", "b+,", "daily"];
	goto labelFunc0334_0B45;
labelFunc0334_07ED:
	if (!(var0001 == 0x0079)) goto labelFunc0334_080C;
	var000A = ["pick", "one", "or", "die"];
	goto labelFunc0334_0B45;
labelFunc0334_080C:
	if (!(var0001 == 0x007A)) goto labelFunc0334_0828;
	var000A = ["inmates", "mu,", "work"];
	goto labelFunc0334_0B45;
labelFunc0334_0828:
	if (!(var0001 == 0x007B)) goto labelFunc0334_0847;
	var000A = ["kn)l", "before", "(e", "ma,er"];
	goto labelFunc0334_0B45;
labelFunc0334_0847:
	if (!(var0001 == 0x007C)) goto labelFunc0334_0866;
	var000A = ["do", "not", "di,urb", "gamema,ers"];
	goto labelFunc0334_0B45;
labelFunc0334_0866:
	if (!(var0001 == 0x007D)) goto labelFunc0334_088D;
	var000A = ["ri*", "bell|for", "service"];
	var0007 = UI_set_item_quality(item, 0x007E);
	goto labelFunc0334_0B45;
labelFunc0334_088D:
	if (!(var0001 == 0x007E)) goto labelFunc0334_08B4;
	var000A = ["r+ch", "bell|for", "fr)dom"];
	var0007 = UI_set_item_quality(item, 0x007D);
	goto labelFunc0334_0B45;
labelFunc0334_08B4:
	if (!(var0001 == 0x007F)) goto labelFunc0334_08DB;
	var000A = ["enter", "(e", "flame"];
	var0007 = UI_set_item_quality(item, 0x0081);
	goto labelFunc0334_0B45;
labelFunc0334_08DB:
	if (!(var0001 == 0x0080)) goto labelFunc0334_08F7;
	var000A = ["t+mwork", "insures", "liberty"];
	goto labelFunc0334_0B45;
labelFunc0334_08F7:
	if (!(var0001 == 0x0081)) goto labelFunc0334_091E;
	var000A = ["to", "end|(y", "dr+m"];
	var0007 = UI_set_item_quality(item, 0x007F);
	goto labelFunc0334_0B45;
labelFunc0334_091E:
	if (!(var0001 == 0x0082)) goto labelFunc0334_0934;
	var000A = ["room 1"];
	goto labelFunc0334_0B45;
labelFunc0334_0934:
	if (!(var0001 == 0x0083)) goto labelFunc0334_094A;
	var000A = ["room 2"];
	goto labelFunc0334_0B45;
labelFunc0334_094A:
	if (!(var0001 == 0x0084)) goto labelFunc0334_0960;
	var000A = ["room 3"];
	goto labelFunc0334_0B45;
labelFunc0334_0960:
	if (!(var0001 == 0x0085)) goto labelFunc0334_0976;
	var000A = ["room 4"];
	goto labelFunc0334_0B45;
labelFunc0334_0976:
	if (!(var0001 == 0x0086)) goto labelFunc0334_098C;
	var000A = ["room 5"];
	goto labelFunc0334_0B45;
labelFunc0334_098C:
	if (!(var0001 == 0x0087)) goto labelFunc0334_09A2;
	var000A = ["room 6"];
	goto labelFunc0334_0B45;
labelFunc0334_09A2:
	if (!(var0001 == 0x0088)) goto labelFunc0334_09B8;
	var000A = ["room 7"];
	goto labelFunc0334_0B45;
labelFunc0334_09B8:
	if (!(var0001 == 0x0089)) goto labelFunc0334_09CE;
	var000A = ["palace"];
	goto labelFunc0334_0B45;
labelFunc0334_09CE:
	if (!(var0001 == 0x008A)) goto labelFunc0334_09EA;
	var000A = ["temple", "of", "b+uty"];
	goto labelFunc0334_0B45;
labelFunc0334_09EA:
	if (!(var0001 == 0x008B)) goto labelFunc0334_0A03;
	var000A = ["royal", "gardens"];
	goto labelFunc0334_0B45;
labelFunc0334_0A03:
	if (!(var0001 == 0x008C)) goto labelFunc0334_0A1C;
	var000A = ["broken", "oar"];
	goto labelFunc0334_0B45;
labelFunc0334_0A1C:
	if (!(var0001 == 0x008D)) goto labelFunc0334_0A32;
	var000A = ["re,house"];
	goto labelFunc0334_0B45;
labelFunc0334_0A32:
	if (!(var0001 == 0x008E)) goto labelFunc0334_0A4B;
	var000A = ["donations", "welcome"];
	goto labelFunc0334_0B45;
labelFunc0334_0A4B:
	if (!(var0001 == 0x008F)) goto labelFunc0334_0A64;
	var000A = ["magic", "wine"];
	goto labelFunc0334_0B45;
labelFunc0334_0A64:
	if (!(var0001 == 0x009E)) goto labelFunc0334_0A80;
	var000A = ["gannt", "(e|bard", "wanders|no|more"];
	goto labelFunc0334_0B45;
labelFunc0334_0A80:
	if (!(var0001 == 0x009F)) goto labelFunc0334_0B45;
	var000A = ["gannt", "(e|bard", "wanders|no|more"];
	UI_display_runes(0x002E, var000A);
	var0007 = UI_set_item_quality(item, 0x009E);
	Func097F(0xFE9C, "@Stand back!@", 0x0002);
	Func097F(0xFE9C, "@It dropped a scroll!@", 0x0014);
	var0008 = [0x0138, 0x07EF, 0x0000];
	UI_sprite_effect(0x0004, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0007 = Func09AB(0x031D, 0x0004, 0x0096, false, var0008);
	var0008 = UI_get_object_position(item);
	var000C = UI_create_new_object2(0x0151, [(var0008[0x0001] + 0x0001), (var0008[0x0002] + 0x0001), 0x0002]);
	UI_set_schedule_type(var000C, 0x0014);
	UI_play_sound_effect(0x003A);
	abort;
labelFunc0334_0B45:
	UI_display_runes(0x002E, var000A);
	return;
}


