#game "serpentisle"
// externs
extern var Func09BA 0x9BA ();
extern var Func097E 0x97E (var var0000);
extern void Func09B8 0x9B8 ();

void Func06EC object#(0x6EC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!Func09BA()) goto labelFunc06EC_0007;
	abort;
labelFunc06EC_0007:
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_object_position(item);
	if (!((event == 0x0003) && (Func097E((var0000[0x0003] - var0001[0x0003])) < 0x0003))) goto labelFunc06EC_018F;
	if (!(!gflags[0x0259])) goto labelFunc06EC_0186;
	var0002 = 0x0000;
	var0003 = UI_get_item_quality(item);
	if (!(var0003 == 0x0000)) goto labelFunc06EC_008D;
	UI_sprite_effect(0x0015, 0x09A0, 0x0027, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFEFA, [0x09A0, 0x0027, 0x0000]);
	var0004 = (byte)0x32;
labelFunc06EC_008D:
	if (!(var0003 == 0x0001)) goto labelFunc06EC_00CF;
	UI_sprite_effect(0x0015, 0x09C1, 0x0024, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFEFA, [0x09C1, 0x0024, 0x0000]);
	var0004 = (byte)0x34;
labelFunc06EC_00CF:
	if (!(var0003 == 0x0002)) goto labelFunc06EC_0111;
	UI_sprite_effect(0x0015, 0x099F, 0x0035, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFEFA, [0x099F, 0x0035, 0x0000]);
	var0004 = (byte)0x32;
labelFunc06EC_0111:
	if (!(var0003 == 0x0003)) goto labelFunc06EC_0153;
	UI_sprite_effect(0x0015, 0x09C7, 0x0031, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFEFA, [0x09C7, 0x0031, 0x0000]);
	var0004 = (byte)0x34;
labelFunc06EC_0153:
	if (!0xFEFA) goto labelFunc06EC_0186;
	var0005 = UI_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x61, (byte)0x59, var0004]);
	var0005 = UI_delayed_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x55, 0x06EC], 0x000A);
labelFunc06EC_0186:
	gflags[0x0259] = true;
	UI_remove_item(item);
labelFunc06EC_018F:
	if (!(event == 0x0002)) goto labelFunc06EC_01AC;
	UI_show_npc_face0(0xFEE0, 0x0000);
	message("\"Thou'rt not here to sleep, Avatar.\"");
	say();
	UI_remove_npc_face0();
	Func09B8();
labelFunc06EC_01AC:
	return;
}


