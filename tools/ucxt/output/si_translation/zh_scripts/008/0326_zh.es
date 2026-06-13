#game "serpentisle"
// externs
extern var Func099D 0x99D (var var0000);
extern void Func08AF 0x8AF (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func0922 0x922 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0326 shape#(0x326) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	UI_close_gumps();
	if (!(event == 0x0006)) goto labelFunc0326_002A;
	if (!((gflags[0x023A] == false) && (gflags[0x00CF] == true))) goto labelFunc0326_0029;
	if (!(!Func099D(item))) goto labelFunc0326_0029;
	Func08AF(item, 0x0000);
labelFunc0326_0029:
	abort;
labelFunc0326_002A:
	if (!(event == 0x0001)) goto labelFunc0326_0260;
	if (!(gflags[0x00CF] == false)) goto labelFunc0326_00CA;
	if (!(gflags[0x00D0] || (gflags[0x00D2] || gflags[0x00D1]))) goto labelFunc0326_00C9;
	var0000 = UI_click_on_item();
	if (!(!var0000)) goto labelFunc0326_0057;
	return;
labelFunc0326_0057:
	var0001 = UI_get_item_shape(var0000);
	if (!(var0001 == 0x01BD)) goto labelFunc0326_00C9;
	var0002 = UI_get_item_frame(var0000);
	if (!(gflags[0x00D0] && (var0002 == 0x0004))) goto labelFunc0326_0091;
	gflags[0x00D0] = false;
	UI_set_item_frame(var0000, 0x0007);
labelFunc0326_0091:
	if (!(gflags[0x00D2] && (var0002 == 0x0002))) goto labelFunc0326_00AD;
	gflags[0x00D2] = false;
	UI_set_item_frame(var0000, 0x0005);
labelFunc0326_00AD:
	if (!(gflags[0x00D1] && (var0002 == 0x0003))) goto labelFunc0326_00C9;
	gflags[0x00D1] = false;
	UI_set_item_frame(var0000, 0x0006);
labelFunc0326_00C9:
	abort;
labelFunc0326_00CA:
	if (!(!gflags[0x0006])) goto labelFunc0326_00F3;
	UI_close_gumps();
	UI_show_npc_face0(0xFEFF, 0x0000);
	message("\"Where hast thou taken me, Avatar?!\"");
	say();
	message("\"I served thee well upon the Isle of Fire! Why hast thou brought me to this cold place?\"");
	say();
	message("\"I gave thee the power of life and death over thine enemies! And see how thou hast repaid me?! I remain bound within this jewel... In a land where I cannot feed! The veins of power have been disrupted! Release me! Release me...\"");
	say();
	UI_remove_npc_face0();
	abort;
	goto labelFunc0326_0260;
labelFunc0326_00F3:
	UI_close_gumps();
	UI_show_npc_face0(0xFEFF, 0x0000);
	message("\"I shall offer thee mine aid once again, Avatar... Thou dost not possess the skill or power enough to overcome the madman Lorthondo thou must face. I do, but not within the constraints of this gem in which thou didst bind me.\"");
	say();
	message("\"Free me and I shall help thee win free of this place!\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0326_0140;
	UI_play_sound_effect(0x004C);
	message("\"Free! Free! Free at last!\"");
	say();
	UI_play_sound_effect(0x0074);
	message("\"Thou art a fool, Avatar! Thou hast no idea what thou hast lost!\"");
	say();
	message("\"I thank thee for thine ignorance...\"");
	say();
	UI_remove_npc_face0();
	Func0922(0x0017);
	gflags[0x023A] = true;
	gflags[0x00CF] = false;
	goto labelFunc0326_014C;
labelFunc0326_0140:
	message("\"Beware! The energy of the stones here is drawing away thy power to keep me imprisoned...\"");
	say();
	message("\"But thou wilt accept mine offer yet...\"");
	say();
	UI_remove_npc_face0();
labelFunc0326_014C:
	if (!(UI_npc_nearby(0xFF5D) && (gflags[0x023A] == true))) goto labelFunc0326_0260;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0003 = UI_find_nearby(0xFF5D, 0x0113, 0x0000, 0x0010);
	if (!var0003) goto labelFunc0326_0186;
	UI_remove_item(var0003);
labelFunc0326_0186:
	UI_clear_item_say(0xFF5D);
	Func097F(0xFF5D, "@No, wait!...@", 0x0000);
	var0004 = UI_find_nearby(0xFF5D, 0x0341, 0x0005, 0x0000);
	var0004 = (var0004 & UI_find_nearby(0xFF5D, 0x0349, 0x0005, 0x0000));
	var0005 = UI_execute_usecode_array(var0004[0x0001], [(byte)0x27, 0x0005, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0003], [(byte)0x27, 0x0008, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0002], [(byte)0x27, 0x000A, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0004], [(byte)0x27, 0x000E, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0006 = UI_find_nearest(0xFF5D, 0x031F, 0x000A);
	if (!var0006) goto labelFunc0326_0260;
	var0005 = UI_execute_usecode_array(var0006, [(byte)0x27, 0x0010, (byte)0x55, 0x04A3]);
labelFunc0326_0260:
	if (!(event == 0x0002)) goto labelFunc0326_0396;
	if (!(gflags[0x00CF] == false)) goto labelFunc0326_037A;
	if (!(UI_get_distance(0xFE9C, 0xFF5D) < 0x002D)) goto labelFunc0326_0379;
	UI_show_npc_face(0xFF00, 0x0000);
	message("\"Avatar! Because thou didst keep thy promise to release me\"");
	say();
	message("\"now shall I return the favor.\"");
	say();
	message("\"This dark sorcerer will trouble thee no more...\"");
	say();
	UI_remove_npc_face0();
	UI_clear_item_say(0xFF5D);
	Func097F(0xFF5D, "@No, wait! Please...@", 0x0000);
	var0004 = UI_find_nearby(0xFF5D, 0x0341, 0x0005, 0x0000);
	var0004 = (var0004 & UI_find_nearby(0xFF5D, 0x0349, 0x0005, 0x0000));
	var0005 = UI_execute_usecode_array(var0004[0x0001], [(byte)0x27, 0x0005, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0003], [(byte)0x27, 0x0008, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0002], [(byte)0x27, 0x000A, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0004], [(byte)0x27, 0x000E, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0006 = UI_find_nearest(0xFF5D, 0x031F, 0x000A);
	if (!var0006) goto labelFunc0326_0375;
	var0005 = UI_execute_usecode_array(var0006, [(byte)0x27, 0x0010, (byte)0x55, 0x04A3]);
labelFunc0326_0375:
	abort;
	goto labelFunc0326_037A;
labelFunc0326_0379:
	abort;
labelFunc0326_037A:
	if (!gflags[0x0006]) goto labelFunc0326_0396;
	UI_close_gumps();
	UI_show_npc_face0(0xFEFF, 0x0000);
	message("\"Avatar, thou must set me free now! The stone's power is quickly diminishing, and this evil wizard will take thee before long.\" ~\"If thou wilt but liberate me from this crystal prison I shall serve thee once more before departing from thy side...\"");
	say();
	UI_remove_npc_face0();
labelFunc0326_0396:
	return;
}


