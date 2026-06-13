#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern var Func0955 0x955 ();
extern var Func087E 0x87E (var var0000, var var0001);
extern var Func0906 0x906 (var var0000);
extern var Func090A 0x90A (var var0000);
extern void Func087D 0x87D ();

void Func0625 object#(0x625) ()
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
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;

	if (!(event == 0x0001)) goto labelFunc0625_033C;
	var0000 = UI_get_item_shape(item);
	if (!UI_get_npc_prop(item, 0x000A)) goto labelFunc0625_002A;
	var0001 = "her";
	var0002 = "she";
	goto labelFunc0625_0036;
labelFunc0625_002A:
	var0001 = "his";
	var0002 = "he";
labelFunc0625_0036:
	if (!(var0000 == 0x00E4)) goto labelFunc0625_004D;
	UI_show_npc_face(0xFEED, 0x0000);
	goto labelFunc0625_00CB;
labelFunc0625_004D:
	if (!((var0000 == 0x012A) || (var0000 == 0x0210))) goto labelFunc0625_0064;
	UI_attack_avatar();
	return;
labelFunc0625_0064:
	if (!((var0000 == 0x01CD) || (var0000 == 0x0103))) goto labelFunc0625_0083;
	UI_show_npc_face(0xFEEE, 0x0000);
	goto labelFunc0625_00CB;
labelFunc0625_0083:
	if (!(var0000 == 0x02EB)) goto labelFunc0625_009A;
	UI_show_npc_face(0xFED6, 0x0000);
	goto labelFunc0625_00CB;
labelFunc0625_009A:
	if (!((var0000 == 0x017D) || (var0000 == 0x02D0))) goto labelFunc0625_00B9;
	UI_show_npc_face(0xFEF3, 0x0000);
	goto labelFunc0625_00CB;
labelFunc0625_00B9:
	var0003 = UI_get_npc_number(item);
	UI_show_npc_face(var0003, 0x0000);
labelFunc0625_00CB:
	if (!(var0003 == 0xFFDC)) goto labelFunc0625_00DA;
	message("\"Please, I beg thee to stop this or thou wilt anger my master....\"");
	say();
	return;
labelFunc0625_00DA:
	var0004 = 0x0284;
	if (!(Func0994() == 0x000D)) goto labelFunc0625_00F0;
	var0004 = 0x03B7;
labelFunc0625_00F0:
	if (!(Func0994() == 0x000E)) goto labelFunc0625_0100;
	var0004 = 0x03B8;
labelFunc0625_0100:
	if (!(Func0994() == 0x0003)) goto labelFunc0625_0110;
	var0004 = 0x03B4;
labelFunc0625_0110:
	var0005 = UI_count_objects(0xFE9B, var0004, 0xFE99, 0xFE99);
	if (!((UI_die_roll(0x0001, 0x0002) == 0x0001) && var0005)) goto labelFunc0625_0263;
	message("\"Cease and desist immediately!\"~~\"Dost thou wish to avoid the unpleasantries of a lengthy trial?\"");
	say();
	var0006 = Func0955();
	if (!var0006) goto labelFunc0625_0260;
	message("\"What is thy liberty worth?\"");
	say();
	if (!Func087E(var0005, var0004)) goto labelFunc0625_015E;
	goto labelFunc0625_016E;
	goto labelFunc0625_025D;
labelFunc0625_015E:
	message("The guard looks unimpressed by your paltry offer. \"Our jail is populated by some unsavory knaves. Thy freedom should be worth more than that...\"");
	say();
	if (!Func087E(var0005, var0004)) goto labelFunc0625_025A;
labelFunc0625_016E:
	if (!UI_is_pc_female()) goto labelFunc0625_017E;
	var0007 = "woman";
	goto labelFunc0625_0184;
labelFunc0625_017E:
	var0007 = "man";
labelFunc0625_0184:
	if (!(Func0994() == 0x000D)) goto labelFunc0625_019A;
	var0008 = [0x02D0, 0x00E4];
labelFunc0625_019A:
	if (!(Func0994() == 0x0003)) goto labelFunc0625_01B0;
	var0008 = [0x02D0, 0x017D];
labelFunc0625_01B0:
	if (!(Func0994() == 0x000E)) goto labelFunc0625_01C9;
	var0008 = [0x02D0, 0x0103, 0x01CD];
labelFunc0625_01C9:
	var0009 = [];
	enum();
labelFunc0625_01D0:
	for (var000C in var0008 with var000A to var000B) attend labelFunc0625_01F3;
	var0009 = (var0009 & UI_find_nearby(item, var000C, 0x001E, 0x0000));
	goto labelFunc0625_01D0;
labelFunc0625_01F3:
	enum();
labelFunc0625_01F4:
	for (var000F in var0009 with var000D to var000E) attend labelFunc0625_020C;
	UI_set_schedule_type(var000F, 0x000C);
	goto labelFunc0625_01F4;
labelFunc0625_020C:
	var0010 = UI_find_nearby(item, 0xFE99, 0x0041, 0x0008);
	enum();
labelFunc0625_021E:
	for (var0013 in var0010 with var0011 to var0012) attend labelFunc0625_0244;
	if (!(UI_get_schedule_type(var0013) == 0x0000)) goto labelFunc0625_0241;
	UI_set_schedule_type(var0013, 0x000C);
labelFunc0625_0241:
	goto labelFunc0625_021E;
labelFunc0625_0244:
	message("\"I am pleased to see that thou art a thinking ");
	message(var0007);
	message(". I will take care of this disturbance.\"");
	say();
	UI_play_music(0x00FF, item);
	abort;
	goto labelFunc0625_025D;
labelFunc0625_025A:
	goto labelFunc0625_031E;
labelFunc0625_025D:
	goto labelFunc0625_0263;
labelFunc0625_0260:
	goto labelFunc0625_031E;
labelFunc0625_0263:
	message("\"Cease and desist immediately, ruffian!\"");
	say();
	message("\"Wilt thou come quietly?\"");
	say();
	UI_add_answer(["Yes", "No"]);
	var0014 = UI_get_party_list();
	enum();
labelFunc0625_0280:
	for (var0017 in var0014 with var0015 to var0016) attend labelFunc0625_02B1;
	var0018 = UI_find_object(var0017, 0x031D, 0x00BB, 0xFE99);
	if (!var0018) goto labelFunc0625_02AE;
	UI_add_answer("certificate");
	goto labelFunc0625_02B1;
labelFunc0625_02AE:
	goto labelFunc0625_0280;
labelFunc0625_02B1:
	converse attend labelFunc0625_033B;
	case "Yes" attend labelFunc0625_0316:
	message("\"Very well. Thou shalt remain in prison until we see fit to release thee.\"");
	say();
	var0010 = UI_find_nearby(item, 0xFE99, 0x0041, 0x0008);
	enum();
labelFunc0625_02D2:
	for (var0013 in var0010 with var0019 to var001A) attend labelFunc0625_02F8;
	if (!(UI_get_schedule_type(var0013) == 0x0000)) goto labelFunc0625_02F5;
	UI_set_schedule_type(var0013, 0x000C);
labelFunc0625_02F5:
	goto labelFunc0625_02D2;
labelFunc0625_02F8:
	UI_stop_arresting();
	var001B = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0625, (byte)0x6E], 0x0002);
	abort;
labelFunc0625_0316:
	case "No" attend labelFunc0625_0327:
labelFunc0625_031E:
	message("\"An unfortunate decision, my friend.\"");
	say();
	UI_attack_avatar();
	return;
labelFunc0625_0327:
	case "certificate" attend labelFunc0625_0338:
	message("\"Oh, I see. Carry on, carry on.\"");
	say();
	UI_stop_arresting();
	return;
labelFunc0625_0338:
	goto labelFunc0625_02B1;
labelFunc0625_033B:
	endconv;
labelFunc0625_033C:
	if (!(event == 0x0002)) goto labelFunc0625_0421;
	var0014 = UI_get_party_list();
	enum();
labelFunc0625_034C:
	for (var001E in var0014 with var001C to var001D) attend labelFunc0625_036E;
	UI_set_schedule_type(var001E, 0x001F);
	UI_set_item_frame(var001E, 0x0000);
	goto labelFunc0625_034C;
labelFunc0625_036E:
	if (!(Func0994() == 0x000D)) goto labelFunc0625_0387;
	var001F = [0x0427, 0x09D8, 0x0000];
labelFunc0625_0387:
	if (!(Func0994() == 0x0003)) goto labelFunc0625_03A0;
	var001F = [0x03E0, 0x0620, 0x0000];
labelFunc0625_03A0:
	if (!(Func0994() == 0x000E)) goto labelFunc0625_03B9;
	var001F = [0x0931, 0x073A, 0x0000];
labelFunc0625_03B9:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_music(0x00FF, item);
	UI_move_object(0xFE9B, var001F);
	var0020 = UI_find_nearby(0xFE9C, 0x033C, 0x000A, 0x0000);
	if (!(var0020 && (Func0906(var0020) == 0x0001))) goto labelFunc0625_0405;
	var001B = Func090A(var0020);
labelFunc0625_0405:
	Func087D();
	var001B = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0001, (byte)0x55, 0x063C]);
labelFunc0625_0421:
	return;
}


