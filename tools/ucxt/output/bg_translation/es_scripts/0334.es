#game "blackgate"
// externs
extern var Func093D 0x93D (var var0000, var var0001);
extern var Func0908 0x908 ();
extern void Func08FF 0x8FF (var var0000);
extern var Func0932 0x932 (var var0000);
extern void Func08FE 0x8FE (var var0000);

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

	var0000 = item;
	var0001 = UI_get_item_quality(var0000);
	if (!(event == 0x0003)) goto labelFunc0334_0154;
	if (!(UI_get_item_shape(item) != 0x0334)) goto labelFunc0334_0049;
	var0000 = UI_find_nearby(var0000, 0x0334, 0x0005, 0x00B0);
	var0000 = Func093D(var0000, var0000);
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
	if (!(var0001 == 0x0009)) goto labelFunc0334_0092;
	var0002 = 0x0280;
labelFunc0334_0092:
	if (!(var0001 == 0x000A)) goto labelFunc0334_00A2;
	var0002 = 0x028E;
labelFunc0334_00A2:
	if (!(var0001 == 0x000B)) goto labelFunc0334_00BB;
	var0002 = [0x0284, 0x0285, 0x0286];
labelFunc0334_00BB:
	var0003 = false;
	enum();
labelFunc0334_00C0:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0334_014C;
	if (!UI_find_nearby(var0000, var0006, 0x0005, 0x00B0)) goto labelFunc0334_0149;
	if (!(var0001 < 0x000B)) goto labelFunc0334_010D;
	var0001 = (var0001 + 0x0001);
	var0007 = UI_set_item_quality(var0000, var0001);
	UI_close_gumps();
	var0003 = true;
	goto labelFunc0334_014C;
	goto labelFunc0334_0149;
labelFunc0334_010D:
	var0008 = UI_get_object_position(var0000);
	UI_sprite_effect(0x0007, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0044);
	UI_remove_item(var0000);
	UI_close_gumps();
	abort;
labelFunc0334_0149:
	goto labelFunc0334_00C0;
labelFunc0334_014C:
	if (!(!var0003)) goto labelFunc0334_0154;
	abort;
labelFunc0334_0154:
	if (!(event == 0x0002)) goto labelFunc0334_0172;
	UI_kill_npc(0xFFE9);
	UI_halt_scheduled(0xFFE9);
	UI_remove_npc(0xFFE9);
	return;
labelFunc0334_0172:
	var0009 = Func0908();
	if (!(var0001 > 0x0041)) goto labelFunc0334_018B;
	var000A = "This is not a valid plaque ";
	goto labelFunc0334_09FA;
labelFunc0334_018B:
	if (!(var0001 == 0x0000)) goto labelFunc0334_01AD;
	var000A = ["important", "event", "to|be", "recorded", "here"];
	goto labelFunc0334_09FA;
labelFunc0334_01AD:
	if (!(var0001 == 0x0001)) goto labelFunc0334_01CF;
	var000A = ["tomb|of", "kronos", "forgotten", "but|not", "forgiven"];
	goto labelFunc0334_09FA;
labelFunc0334_01CF:
	if (!(var0001 == 0x0002)) goto labelFunc0334_01E8;
	var000A = ["royal", "(+tre"];
	goto labelFunc0334_09FA;
labelFunc0334_01E8:
	if (!(var0001 == 0x0003)) goto labelFunc0334_0201;
	var000A = ["FELLOWSHIP", "HALL"];
	goto labelFunc0334_09FA;
labelFunc0334_0201:
	if (!(var0001 == 0x0004)) goto labelFunc0334_021D;
	var000A = ["TEST", "OF", "STRENGTH"];
	goto labelFunc0334_09FA;
labelFunc0334_021D:
	if (!(var0001 == 0x0005)) goto labelFunc0334_0236;
	var000A = ["MEDITATION", "RETREAT"];
	goto labelFunc0334_09FA;
labelFunc0334_0236:
	if (!(var0001 == 0x0006)) goto labelFunc0334_024F;
	var000A = ["SHRINE OF", "THE CODEX"];
	goto labelFunc0334_09FA;
labelFunc0334_024F:
	if (!(var0001 == 0x0007)) goto labelFunc0334_026E;
	var000A = ["hammer", "here", "to", "enter"];
	goto labelFunc0334_09FA;
labelFunc0334_026E:
	if (!(var0001 == 0x0008)) goto labelFunc0334_029C;
	var000A = ["pick|item", "carefully", "to|k)p", "goi*"];
	Func08FF(["By Jove, I think thou art on the right track!", "The sign appears to have changed!", "Look at it now!"]);
	goto labelFunc0334_09FA;
labelFunc0334_029C:
	if (!(var0001 == 0x0009)) goto labelFunc0334_02BB;
	var000A = ["a|golden", "ring|of", "tru(", "faces|()"];
	goto labelFunc0334_09FA;
labelFunc0334_02BB:
	if (!(var0001 == 0x000A)) goto labelFunc0334_02DA;
	var000A = ["grasp", "not", "at", "(r+ds"];
	goto labelFunc0334_09FA;
labelFunc0334_02DA:
	if (!(var0001 == 0x000B)) goto labelFunc0334_02FC;
	var000A = ["(e", "royal|mint", "shall|not", "hold|()", "back"];
	goto labelFunc0334_09FA;
labelFunc0334_02FC:
	if (!(var0001 == 0x000C)) goto labelFunc0334_030F;
	var000A = "GO THIS WAY";
	goto labelFunc0334_09FA;
labelFunc0334_030F:
	if (!(var0001 == 0x000D)) goto labelFunc0334_032B;
	var000A = ["DO NOT", "GO", "THIS WAY"];
	goto labelFunc0334_09FA;
labelFunc0334_032B:
	if (!(var0001 == 0x000E)) goto labelFunc0334_034A;
	var000A = ["DO NOT GO", "IN", "THE", "WOODEN DOOR"];
	goto labelFunc0334_09FA;
labelFunc0334_034A:
	if (!(var0001 == 0x000F)) goto labelFunc0334_036C;
	var000A = ["DO NOT", "GO IN", "THE", "WINDOWED", "DOOR"];
	goto labelFunc0334_09FA;
labelFunc0334_036C:
	if (!(var0001 == 0x0010)) goto labelFunc0334_038E;
	var000A = ["GO", "IN", "THE", "STEEL", "DOOR"];
	goto labelFunc0334_09FA;
labelFunc0334_038E:
	if (!(var0001 == 0x0011)) goto labelFunc0334_03AD;
	var000A = ["DO NOT", "GO", "IN THE", "GREEN DOOR"];
	goto labelFunc0334_09FA;
labelFunc0334_03AD:
	if (!(var0001 == 0x0012)) goto labelFunc0334_03CF;
	var000A = ["ONLY", "ONE", "OF THESE", "SIGNS", "IS TRUE"];
	goto labelFunc0334_09FA;
labelFunc0334_03CF:
	if (!(var0001 == 0x0013)) goto labelFunc0334_03EE;
	var000A = ["AT LEAST", "TWO SIGNS", "ARE", "FALSE"];
	goto labelFunc0334_09FA;
labelFunc0334_03EE:
	if (!(var0001 == 0x0014)) goto labelFunc0334_0407;
	var000A = ["NATIONAL", "BRANCH"];
	goto labelFunc0334_09FA;
labelFunc0334_0407:
	if (!(var0001 == 0x0015)) goto labelFunc0334_0423;
	var000A = ["ART THOU", "AN", "AVATAR?"];
	goto labelFunc0334_09FA;
labelFunc0334_0423:
	if (!(var0001 == 0x0016)) goto labelFunc0334_0442;
	var000A = ["RESERVE", "THY", "SEATS", "NOW!"];
	goto labelFunc0334_09FA;
labelFunc0334_0442:
	if (!(var0001 == 0x0017)) goto labelFunc0334_0464;
	var000A = ["THE BONES OF", "ZOG:", "EARLIEST", "BRITANNIAN", "FOSSIL"];
	goto labelFunc0334_09FA;
labelFunc0334_0464:
	if (!(var0001 == 0x0018)) goto labelFunc0334_0483;
	var000A = ["SWAMP BOOTS", "ONCE WORN", "BY THE", "AVATAR"];
	goto labelFunc0334_09FA;
labelFunc0334_0483:
	if (!(var0001 == 0x0019)) goto labelFunc0334_04A2;
	var000A = ["MANITTZI'S", "HARPSICORD", "USED WHILE", "COMPOSING"];
	goto labelFunc0334_09FA;
labelFunc0334_04A2:
	if (!(var0001 == 0x001A)) goto labelFunc0334_04BE;
	var000A = ["|ANIA", "OF", "SPRING|"];
	goto labelFunc0334_09FA;
labelFunc0334_04BE:
	if (!(var0001 == 0x001B)) goto labelFunc0334_04DD;
	var000A = ["|marney|", "skara|braes", "fine,", "flower"];
	goto labelFunc0334_09FA;
labelFunc0334_04DD:
	if (!(var0001 == 0x001C)) goto labelFunc0334_04F9;
	var000A = ["(e", "wayfarers", "inn"];
	goto labelFunc0334_09FA;
labelFunc0334_04F9:
	if (!(var0001 == 0x001D)) goto labelFunc0334_0515;
	var000A = ["(e", "blue", "boar"];
	goto labelFunc0334_09FA;
labelFunc0334_0515:
	if (!(var0001 == 0x001E)) goto labelFunc0334_052E;
	var000A = ["royal", "museum"];
	goto labelFunc0334_09FA;
labelFunc0334_052E:
	if (!(var0001 == 0x001F)) goto labelFunc0334_054A;
	var000A = ["(e", "music", "hall"];
	goto labelFunc0334_09FA;
labelFunc0334_054A:
	if (!(var0001 == 0x0020)) goto labelFunc0334_0563;
	var000A = ["town", "hall"];
	goto labelFunc0334_09FA;
labelFunc0334_0563:
	if (!(var0001 == 0x0021)) goto labelFunc0334_057C;
	var000A = ["royal", "mint"];
	goto labelFunc0334_09FA;
labelFunc0334_057C:
	if (!(var0001 == 0x0022)) goto labelFunc0334_059E;
	var000A = ["THE", "THRONE", "OF", "MANY", "CHANGES"];
	goto labelFunc0334_09FA;
labelFunc0334_059E:
	if (!(var0001 == 0x0023)) goto labelFunc0334_05BD;
	var000A = ["THE", "THRONE", "OF", "VIRTUE"];
	goto labelFunc0334_09FA;
labelFunc0334_05BD:
	if (!(var0001 == 0x0024)) goto labelFunc0334_05D9;
	var000A = ["LORD", "BRITISH'S", "MUSKET"];
	goto labelFunc0334_09FA;
labelFunc0334_05D9:
	if (!(var0001 == 0x0025)) goto labelFunc0334_05F8;
	var000A = ["THE", "STONES", "OF", "VIRTUE"];
	goto labelFunc0334_09FA;
labelFunc0334_05F8:
	if (!(var0001 == 0x0026)) goto labelFunc0334_061A;
	var000A = ["SILVER", "HORN", "ONCE USED", "BY THE", "GARGOYLES"];
	goto labelFunc0334_09FA;
labelFunc0334_061A:
	if (!(var0001 == 0x0027)) goto labelFunc0334_0639;
	var000A = ["TO SUMMON", "THE", "SILVER", "SNAKES"];
	goto labelFunc0334_09FA;
labelFunc0334_0639:
	if (!(var0001 == 0x0028)) goto labelFunc0334_065B;
	var000A = ["THE ANKH", "", "SYMBOL OF", "THE", "VIRTUES"];
	goto labelFunc0334_09FA;
labelFunc0334_065B:
	if (!(var0001 == 0x0029)) goto labelFunc0334_0674;
	var000A = ["LORD", "BRITISH"];
	goto labelFunc0334_09FA;
labelFunc0334_0674:
	if (!(var0001 == 0x002A)) goto labelFunc0334_068D;
	var000A = ["THE", "AVATAR"];
	goto labelFunc0334_09FA;
labelFunc0334_068D:
	if (!(var0001 == 0x002B)) goto labelFunc0334_06A9;
	var000A = ["THE", "VORTEX", "CUBE"];
	goto labelFunc0334_09FA;
labelFunc0334_06A9:
	if (!(var0001 == 0x002C)) goto labelFunc0334_06CB;
	var000A = ["THE", "RUNES", "OF", "THE", "VIRTUES"];
	goto labelFunc0334_09FA;
labelFunc0334_06CB:
	if (!(var0001 == 0x002D)) goto labelFunc0334_06ED;
	var000A = ["(e", "game", "of", "knights", "bridge"];
	goto labelFunc0334_09FA;
labelFunc0334_06ED:
	if (!(var0001 == 0x002E)) goto labelFunc0334_0706;
	var000A = ["DO NOT", "ENTER"];
	goto labelFunc0334_09FA;
labelFunc0334_0706:
	if (!(var0001 == 0x002F)) goto labelFunc0334_0728;
	var000A = ["blow", "horn", "to", "summon", "ferry"];
	goto labelFunc0334_09FA;
labelFunc0334_0728:
	if (!(var0001 == 0x0030)) goto labelFunc0334_07F7;
	var0008 = UI_get_object_position(item);
	var000B = UI_get_object_position(0xFFE9);
	if (!((Func0932((var0008[0x0001] - var000B[0x0001])) <= 0x0002) && (Func0932((var0008[0x0002] - var000B[0x0002])) <= 0x0002))) goto labelFunc0334_07DC;
	var0007 = UI_execute_usecode_array(item, [(byte)0x55, 0x0609, (byte)0x55, 0x0609, (byte)0x55, 0x0609, (byte)0x2D]);
	var0007 = UI_execute_usecode_array(0xFFE9, [(byte)0x27, 0x0003, (byte)0x58, 0x0013, (byte)0x61, (byte)0x6D, (byte)0x58, 0x0056, (byte)0x01, (byte)0x6E, (byte)0x55, 0x0334]);
	Func08FE(["", "@He's dead, Avatar!@", "@Yancey-Hausman will pay!@"]);
	var0007 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x56, 0x001A]);
	return;
	goto labelFunc0334_07F7;
labelFunc0334_07DC:
	var000A = ["THE", "THRONE", "ROOM", "OF", "LORD", "BRITISH"];
	goto labelFunc0334_09FA;
labelFunc0334_07F7:
	if (!(var0001 == 0x0031)) goto labelFunc0334_0819;
	var000A = ["SEE IF", "THOU ART", "THE NEXT", "LORD OF", "BRITANNIA"];
	goto labelFunc0334_09FA;
labelFunc0334_0819:
	if (!(var0001 == 0x0032)) goto labelFunc0334_083B;
	var000A = ["in", "lovi*", "memory", "of", "mama"];
	goto labelFunc0334_09FA;
labelFunc0334_083B:
	if (!(var0001 == 0x0033)) goto labelFunc0334_0857;
	var000A = ["BEWARE", "THE", "DRAGON"];
	goto labelFunc0334_09FA;
labelFunc0334_0857:
	if (!(var0001 == 0x0034)) goto labelFunc0334_0879;
	var000A = ["for", "(e", "love", "of", "marney"];
	goto labelFunc0334_09FA;
labelFunc0334_0879:
	if (!(var0001 == 0x0035)) goto labelFunc0334_089B;
	var000A = ["|j|r|r|t|", "a|gr+t", "man", "a|gr+t", "writer"];
	goto labelFunc0334_09FA;
labelFunc0334_089B:
	if (!(var0001 == 0x0036)) goto labelFunc0334_08B7;
	var000A = ["THE", "BRITANNIAN", "LENS"];
	goto labelFunc0334_09FA;
labelFunc0334_08B7:
	if (!(var0001 == 0x0037)) goto labelFunc0334_08D3;
	var000A = ["THE", "GARGOYLE", "LENS"];
	goto labelFunc0334_09FA;
labelFunc0334_08D3:
	if (!(var0001 == 0x0038)) goto labelFunc0334_08EC;
	var000A = ["EX", "POR"];
	goto labelFunc0334_09FA;
labelFunc0334_08EC:
	if (!(var0001 == 0x0039)) goto labelFunc0334_090B;
	var000A = ["(e", "te,", "of", "love"];
	goto labelFunc0334_09FA;
labelFunc0334_090B:
	if (!(var0001 == 0x003A)) goto labelFunc0334_092A;
	var000A = ["(e", "te,", "of", "courage"];
	goto labelFunc0334_09FA;
labelFunc0334_092A:
	if (!(var0001 == 0x003B)) goto labelFunc0334_0949;
	var000A = ["nor(", "is", "(e", "way"];
	goto labelFunc0334_09FA;
labelFunc0334_0949:
	if (!(var0001 == 0x003C)) goto labelFunc0334_0965;
	var000A = ["tru(", "is", "tru("];
	goto labelFunc0334_09FA;
labelFunc0334_0965:
	if (!(var0001 == 0x003D)) goto labelFunc0334_0984;
	var000A = ["only", "app+rances", "are", "deceptive"];
	goto labelFunc0334_09FA;
labelFunc0334_0984:
	if (!(var0001 == 0x003E)) goto labelFunc0334_099D;
	var000A = ["well", "done"];
	goto labelFunc0334_09FA;
labelFunc0334_099D:
	if (!(var0001 == 0x003F)) goto labelFunc0334_09BC;
	var000A = ["(e", "keys", "of", "tru("];
	goto labelFunc0334_09FA;
labelFunc0334_09BC:
	if (!(var0001 == 0x0040)) goto labelFunc0334_09DB;
	var000A = ["tru,|not", "always|(e", "obvious", "path"];
	goto labelFunc0334_09FA;
labelFunc0334_09DB:
	if (!(var0001 == 0x0041)) goto labelFunc0334_09FA;
	var000A = ["(ou", "do,|not", "wish|to", "see|(is"];
	goto labelFunc0334_09FA;
labelFunc0334_09FA:
	UI_display_runes(0x0033, var000A);
	return;
}


