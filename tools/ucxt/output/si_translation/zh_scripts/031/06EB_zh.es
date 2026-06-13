#game "serpentisle"
// externs
extern void Func09B8 0x9B8 ();

void Func06EB object#(0x6EB) ()
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

	if (!(event == 0x0003)) goto labelFunc06EB_012D;
	var0000 = UI_find_nearby(item, 0x0113, 0x000F, 0x0010);
	var0001 = 0x0000;
	enum();
labelFunc06EB_0020:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc06EB_0048;
	var0005 = UI_get_item_frame(var0004);
	if (!(var0005 == 0x0000)) goto labelFunc06EB_0045;
	var0001 = var0004;
labelFunc06EB_0045:
	goto labelFunc06EB_0020;
labelFunc06EB_0048:
	if (!var0001) goto labelFunc06EB_00B0;
	UI_sprite_effect(0x0015, 0x09B3, 0x0027, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFEFA, [0x09B3, 0x0027, 0x0000]);
	var0006 = UI_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x32]);
	var0006 = UI_delayed_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x55, 0x06EB], 0x000A);
	goto labelFunc06EB_012D;
labelFunc06EB_00B0:
	var0007 = UI_find_nearby(item, 0x0370, 0x0014, 0x0000);
	var0007 = (var0007 & UI_find_nearby(item, 0x038A, 0x0014, 0x0000));
	var0007 = (var0007 & UI_find_nearby(item, 0x013D, 0x0014, 0x0000));
	enum();
labelFunc06EB_00EC:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc06EB_012A;
	var000B = UI_get_object_position(var000A);
	UI_sprite_effect(0x001A, var000B[0x0001], var000B[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	goto labelFunc06EB_00EC;
labelFunc06EB_012A:
	Func09B8();
labelFunc06EB_012D:
	if (!(event == 0x0002)) goto labelFunc06EB_019F;
	var0000 = UI_find_nearby(item, 0x0113, 0x000F, 0x0010);
	var0001 = 0x0000;
	enum();
labelFunc06EB_014D:
	for (var0004 in var0000 with var000C to var000D) attend labelFunc06EB_0184;
	var0005 = UI_get_item_frame(var0004);
	if (!(var0005 == 0x0000)) goto labelFunc06EB_0181;
	var0006 = UI_execute_usecode_array(var0004, [(byte)0x48]);
	var0001 = var0004;
labelFunc06EB_0181:
	goto labelFunc06EB_014D;
labelFunc06EB_0184:
	if (!var0001) goto labelFunc06EB_019C;
	UI_show_npc_face0(0xFEE0, 0x0000);
	message("\"Hurry, Avatar, I am waiting for thee...\"");
	say();
	UI_remove_npc_face0();
labelFunc06EB_019C:
	Func09B8();
labelFunc06EB_019F:
	return;
}


