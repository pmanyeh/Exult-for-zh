#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func090F 0x90F (var var0000, var var0001, var var0002, var var0003);
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func02A3 shape#(0x2A3) ()
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
	var var0021;
	var var0022;
	var var0023;
	var var0024;
	var var0025;
	var var0026;
	var var0027;
	var var0028;
	var var0029;
	var var002A;
	var var002B;

	if (!(event == 0x0001)) goto labelFunc02A3_097B;
	UI_clear_item_say(0xFE9C);
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc02A3_00BA;
	var0001 = UI_click_on_item();
	UI_play_sound_effect2(0x0038, item);
	if (!UI_is_npc(var0001)) goto labelFunc02A3_0045;
	UI_item_say(var0001, "@Yipe! Thou didst strike me!@");
	return;
labelFunc02A3_0045:
	if (!(UI_get_item_shape(var0001) == 0x02A3)) goto labelFunc02A3_00BA;
	if (!(UI_get_item_frame(var0001) == 0x000A)) goto labelFunc02A3_00BA;
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@Dost thou truly think@"]);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@that would work@"], 0x0010);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@this time, Avatar?@"], 0x0020);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@Think again!@"], 0x0030);
labelFunc02A3_00BA:
	if (!(var0000 == 0x000A)) goto labelFunc02A3_01D7;
	var0003 = UI_die_roll(0x0001, 0x0007);
	if (!(var0003 == 0x0001)) goto labelFunc02A3_00ED;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Squawk!@"]);
labelFunc02A3_00ED:
	if (!(var0003 == 0x0002)) goto labelFunc02A3_0109;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Polly want a cracker?@"]);
labelFunc02A3_0109:
	if (!((var0003 == 0x0003) || (var0003 == 0x0004))) goto labelFunc02A3_0142;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@I know where@"]);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@the treasure is!@"], 0x0010);
labelFunc02A3_0142:
	if (!(var0003 == 0x0005)) goto labelFunc02A3_015E;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Gimmee a cracker!@"]);
labelFunc02A3_015E:
	if (!((var0003 == 0x0006) || (var0003 == 0x0007))) goto labelFunc02A3_01D7;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Pretty bird!@"]);
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc02A3_01D7;
	var0002 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFE), [(byte)0x23, (byte)0x52, "@Ugly Bird!@"], 0x0010);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Speak for thyself!@"], 0x0020);
	var0002 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFE), [(byte)0x23, (byte)0x52, "@Hey!!@"], 0x0030);
labelFunc02A3_01D7:
	if (!((var0000 == 0x0011) || ((var0000 == 0x0012) || (var0000 == 0x0013)))) goto labelFunc02A3_023C;
	if (!(!UI_in_usecode(item))) goto labelFunc02A3_023C;
	var0002 = UI_execute_usecode_array(item, [(byte)0x58, 0x0075, (byte)0x46, 0x0011, (byte)0x58, 0x0076, (byte)0x46, 0x0013, (byte)0x0B, 0xFFF8, 0x000C, (byte)0x46, 0x0012]);
	if (!UI_npc_nearby(0xFFB3)) goto labelFunc02A3_023C;
	Func097F(0xFFB3, "@That is truly strange!@", 0x0005);
labelFunc02A3_023C:
	if (!(var0000 == 0x000B)) goto labelFunc02A3_041F;
	var0004 = UI_get_array_size(UI_get_party_list());
	if (!(var0004 > 0x0001)) goto labelFunc02A3_0264;
	var0005 = "we";
	goto labelFunc02A3_026A;
labelFunc02A3_0264:
	var0005 = "I";
labelFunc02A3_026A:
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	var0007 = UI_count_objects(0xFE9B, 0x03B7, 0xFE99, 0xFE99);
	var0008 = UI_count_objects(0xFE9B, 0x03B4, 0xFE99, 0xFE99);
	var0009 = UI_count_objects(0xFE9B, 0x03B8, 0xFE99, 0xFE99);
	var000A = UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0xFE99);
	var000B = UI_count_objects(0xFE9B, 0x0285, 0xFE99, 0xFE99);
	var000C = UI_count_objects(0xFE9B, 0x03A9, 0xFE99, 0xFE99);
	var000D = UI_count_objects(0xFE9B, 0x0286, 0xFE99, 0xFE99);
	var000E = "gold coins";
	if (!(var0006 == 0x0001)) goto labelFunc02A3_0318;
	var000E = "gold coin";
labelFunc02A3_0318:
	var000F = "gems";
	if (!(var000A == 0x0001)) goto labelFunc02A3_032E;
	var000F = "gem";
labelFunc02A3_032E:
	var0010 = "pieces of jewelry";
	if (!(var000C == 0x0001)) goto labelFunc02A3_0344;
	var0010 = "piece of jewelry";
labelFunc02A3_0344:
	var0011 = "guilders";
	if (!(var0009 == 0x0001)) goto labelFunc02A3_035A;
	var0011 = "guilder";
labelFunc02A3_035A:
	var0012 = "bars of gold";
	if (!(var000D == 0x0001)) goto labelFunc02A3_0370;
	var0012 = "bar of gold";
labelFunc02A3_0370:
	var0013 = "gold nuggets";
	if (!(var000B == 0x0001)) goto labelFunc02A3_0386;
	var0013 = "gold nugget";
labelFunc02A3_0386:
	if (!(var0006 || (var0007 || (var0008 || (var0009 || (var000A || (var000B || (var000C || var000D)))))))) goto labelFunc02A3_0417;
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("\"Let's see... ");
	message(var0005);
	message(" have -- ");
	message(var0007);
	message(" monetari, ");
	message(var0006);
	message(" ");
	message(var000E);
	message(", ");
	message(var0009);
	message(" ");
	message(var0011);
	message(", ");
	message(var0008);
	message(" filari, ");
	message(var000B);
	message(" ");
	message(var0013);
	message(", ");
	message(var000A);
	message(" ");
	message(var000F);
	message(", ");
	message(var000C);
	message(" ");
	message(var0010);
	message(", and ");
	message(var000D);
	message(" ");
	message(var0012);
	message("!\"");
	say();
	UI_remove_npc_face0();
	goto labelFunc02A3_041F;
labelFunc02A3_0417:
	UI_item_say(item, "No money in party!");
labelFunc02A3_041F:
	if (!(var0000 == 0x0010)) goto labelFunc02A3_0563;
	var0014 = UI_get_item_flag(0xFFFE, 0x0006);
	var0015 = UI_get_item_flag(0xFFFD, 0x0006);
	var0016 = UI_get_item_flag(0xFFFF, 0x0006);
	var0017 = "him";
	var0018 = "he";
	var0019 = "himself";
	var001A = "handsome";
	if (!UI_is_pc_female()) goto labelFunc02A3_0487;
	var0017 = "her";
	var0018 = "she";
	var0019 = "herself";
	var001A = "beautiful";
labelFunc02A3_0487:
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("\"Hmm... not bad looking!\"");
	say();
	UI_remove_npc_face0();
	if (!var0014) goto labelFunc02A3_04DD;
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("\"Thou art truly ");
	message(var001A);
	message(", Avatar!\"");
	say();
	if (!var0016) goto labelFunc02A3_04D9;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"As thou art not!\"");
	say();
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("\"Thou art dung, Dupre!\"");
	say();
	UI_remove_npc_face1();
labelFunc02A3_04D9:
	UI_remove_npc_face0();
labelFunc02A3_04DD:
	if (!var0015) goto labelFunc02A3_051F;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("\"Avatar, let us proceed. Cease this dallying!\"");
	say();
	if (!var0014) goto labelFunc02A3_051B;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Oh, let ");
	message(var0017);
	message(" be, old man -- ");
	message(var0018);
	message(" is only admiring ");
	message(var0019);
	message("!\"");
	say();
	UI_remove_npc_face1();
labelFunc02A3_051B:
	UI_remove_npc_face0();
labelFunc02A3_051F:
	if (!var0016) goto labelFunc02A3_0563;
	UI_show_npc_face0(0xFFFF, 0x0000);
	message("\"Let us press on, Avatar!\"");
	say();
	if (!var0014) goto labelFunc02A3_055F;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Thou dost not want ");
	message(var0017);
	message(" to show precisely how ugly thou art!\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFFF, 0x0000);
	message("\"Thou impudent snot!\"");
	say();
labelFunc02A3_055F:
	UI_remove_npc_face0();
labelFunc02A3_0563:
	if (!(var0000 == 0x0014)) goto labelFunc02A3_05DE;
	var001B = [0x0001, 0x0001, 0x0001, 0x0000, 0x0000, 0xFFFF, 0xFFFF, 0xFFFF];
	var001C = [0x0001, 0x0000, 0xFFFF, 0x0001, 0xFFFF, 0x0001, 0x0009, 0xFFFF];
	var001D = 0xFFFA;
	if (!(!Func090F(item, var001B, var001C, var001D))) goto labelFunc02A3_05CA;
	UI_flash_mouse(0x0000);
	goto labelFunc02A3_05DE;
labelFunc02A3_05CA:
	Func090D(item, var001B, var001C, var001D, 0x02A3, item, 0x000A);
labelFunc02A3_05DE:
	if (!(var0000 == 0x0015)) goto labelFunc02A3_06B2;
	var001E = UI_game_hour();
	var001F = "am";
	if (!(var001E > 0x000C)) goto labelFunc02A3_060F;
	var001E = (var001E - 0x000C);
	var001F = "pm";
labelFunc02A3_060F:
	if (!(var001E == 0x000C)) goto labelFunc02A3_061F;
	var001F = "pm";
labelFunc02A3_061F:
	if (!(var001E == 0x0000)) goto labelFunc02A3_0635;
	var001E = 0x000C;
	var001F = "am";
labelFunc02A3_0635:
	var0020 = UI_game_minute();
	if (!(var0020 <= 0x0009)) goto labelFunc02A3_0650;
	var0020 = ("0" + var0020);
labelFunc02A3_0650:
	var0021 = ((((" " + var001E) + ":") + var0020) + var001F);
	if (!UI_in_gump_mode()) goto labelFunc02A3_068E;
	var0021 = ((((" " + var001E) + ":") + var0020) + var001F);
	UI_item_say(item, var0021);
	goto labelFunc02A3_06B2;
labelFunc02A3_068E:
	var0021 = ((((("@" + var001E) + ":") + var0020) + var001F) + "@");
	UI_item_say(0xFE9C, var0021);
labelFunc02A3_06B2:
	if (!(var0000 == 0x0016)) goto labelFunc02A3_07B3;
	UI_close_gumps();
	var0003 = UI_die_roll(0x0001, 0x000C);
	Func097F(0xFE9C, "The magic orb reads:", 0x0001);
	if (!((var0003 == 0x0001) || (var0003 == 0x0002))) goto labelFunc02A3_06F7;
	Func097F(0xFE9C, "@My sources say yes.@", 0x0010);
labelFunc02A3_06F7:
	if (!((var0003 == 0x0003) || (var0003 == 0x0004))) goto labelFunc02A3_0715;
	Func097F(0xFE9C, "@I must reply no.@", 0x0010);
labelFunc02A3_0715:
	if (!((var0003 == 0x0005) || (var0003 == 0x0006))) goto labelFunc02A3_0733;
	Func097F(0xFE9C, "@Answer hazy. Thou shouldst try again later.@", 0x0010);
labelFunc02A3_0733:
	if (!((var0003 == 0x0007) || (var0003 == 0x0008))) goto labelFunc02A3_0751;
	Func097F(0xFE9C, "@I would not count on it.@", 0x0010);
labelFunc02A3_0751:
	if (!((var0003 == 0x0009) || (var0003 == 0x000A))) goto labelFunc02A3_076F;
	Func097F(0xFE9C, "@Ask at another time.@", 0x0010);
labelFunc02A3_076F:
	if (!(var0003 == 0x000B)) goto labelFunc02A3_0791;
	Func097F(0xFE9C, "@Trust thy friends not.@", 0x0010);
	Func097F(0xFE9C, "@Slay them instead, Avatar.@", 0x0020);
labelFunc02A3_0791:
	if (!(var0003 == 0x000C)) goto labelFunc02A3_07B3;
	Func097F(0xFE9C, "@Batlin is thy friend.@", 0x0010);
	Func097F(0xFE9C, "@Do his bidding, Avatar.@", 0x0020);
labelFunc02A3_07B3:
	if (!((var0000 == 0x0017) || ((var0000 == 0x0018) || (var0000 == 0x0019)))) goto labelFunc02A3_097B;
	UI_clear_item_say(0xFE9C);
	var0022 = UI_get_item_quality(item);
	var0023 = (var0022 + 0x0001);
	var0024 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc02A3_07F8:
	for (var0027 in var0024 with var0025 to var0026) attend labelFunc02A3_082D;
	if (!((UI_get_item_frame(var0027) > 0x0016) && (UI_get_item_frame(var0027) < 0x001A))) goto labelFunc02A3_082A;
	var0002 = UI_set_item_quality(var0027, var0023);
labelFunc02A3_082A:
	goto labelFunc02A3_07F8;
labelFunc02A3_082D:
	if (!(var0023 == 0x0001)) goto labelFunc02A3_0873;
	Func097F(0xFE9C, "Origin presents...", 0x0001);
	Func097F(0xFE9C, "The few...", 0x0010);
	Func097F(0xFE9C, "The proud...", 0x0020);
	Func097F(0xFE9C, "The well-armed...", 0x0030);
	Func097F(0xFE9C, "Strike Commander!", 0x0040);
labelFunc02A3_0873:
	if (!(var0023 == 0x0002)) goto labelFunc02A3_08AD;
	Func097F(0xFE9C, "Even during war,", 0x0001);
	Func097F(0xFE9C, "some people still", 0x0010);
	Func097F(0xFE9C, "make a profit...", 0x0020);
	Func097F(0xFE9C, "Privateer", 0x0030);
labelFunc02A3_08AD:
	if (!(var0023 == 0x0003)) goto labelFunc02A3_08E7;
	Func097F(0xFE9C, "Ultima 8?", 0x0001);
	Func097F(0xFE9C, "Pagan?", 0x0010);
	Func097F(0xFE9C, "This omen doth not", 0x0020);
	Func097F(0xFE9C, "bode well...", 0x0030);
labelFunc02A3_08E7:
	if (!(var0023 == 0x0004)) goto labelFunc02A3_097B;
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "Curse that Stokes!"], 0x0001);
	var0024 = UI_find_nearby(0xFE9C, 0x02A3, 0x001E, 0x0000);
	enum();
labelFunc02A3_091C:
	for (var0027 in var0024 with var0028 to var0029) attend labelFunc02A3_097B;
	if (!((UI_get_item_frame(var0027) > 0x0016) && (UI_get_item_frame(var0027) < 0x001A))) goto labelFunc02A3_0978;
	var002A = UI_get_object_position(var0027);
	UI_remove_item(var0027);
	UI_sprite_effect(0x0004, var002A[0x0001], var002A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
labelFunc02A3_0978:
	goto labelFunc02A3_091C;
labelFunc02A3_097B:
	if (!((var0000 == 0x001A) || (var0000 == 0x001B))) goto labelFunc02A3_09A5;
	Func097F(0xFE9C, "I cannot read this.", 0x0001);
	Func097F(0xFE9C, "This book is ruined.", 0x0012);
labelFunc02A3_09A5:
	if (!(event == 0x000A)) goto labelFunc02A3_09D6;
	if (!(UI_get_item_frame(item) == 0x0014)) goto labelFunc02A3_09D6;
	var002B = UI_execute_usecode_array(item, [(byte)0x58, 0x001C, (byte)0x27, 0x0005, (byte)0x0B, 0xFFFC, 0x0004]);
labelFunc02A3_09D6:
	return;
}


