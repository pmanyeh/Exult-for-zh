#game "serpentisle"
// externs
extern var Func09BA 0x9BA ();
extern var Func097E 0x97E (var var0000);
extern void Func09B8 0x9B8 ();

void Func06E7 object#(0x6E7) ()
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

	if (!Func09BA()) goto labelFunc06E7_0007;
	abort;
labelFunc06E7_0007:
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_object_position(item);
	if (!((event == 0x0003) && (Func097E((var0000[0x0003] - var0001[0x0003])) < 0x0003))) goto labelFunc06E7_00C5;
	UI_sprite_effect(0x0015, 0x06C9, 0x0588, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_move_object(0xFEFA, [0x06C9, 0x0588, 0x0000]);
	var0002 = UI_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x34]);
	var0002 = UI_delayed_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x55, 0x06E7], 0x000A);
	var0003 = UI_find_nearby(item, 0x010E, 0x0006, 0x0000);
	if (!var0003) goto labelFunc06E7_00C0;
	var0002 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x010E]);
labelFunc06E7_00C0:
	UI_remove_item(item);
labelFunc06E7_00C5:
	if (!(event == 0x0002)) goto labelFunc06E7_0164;
	UI_show_npc_face0(0xFEE0, 0x0000);
	message("\"Welcome to mine own private shooting gallery, Avatar.\"");
	say();
	UI_remove_npc_face0();
	Func09B8();
	var0004 = UI_find_nearby(item, 0x0178, 0x000A, 0x0000);
	if (!var0004) goto labelFunc06E7_0103;
	UI_set_item_frame(var0004, 0x0002);
labelFunc06E7_0103:
	var0005 = UI_find_nearby(item, 0x00C8, 0x001E, 0x0010);
	enum();
labelFunc06E7_0115:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc06E7_0164;
	var0009 = UI_get_item_frame(var0008);
	if (!(((var0009 > 0x0001) && (var0009 < 0x0006)) || ((var0009 > 0x0008) && (var0009 < 0x000D)))) goto labelFunc06E7_0161;
	var0002 = UI_execute_usecode_array(var0008, [(byte)0x49, 0x0002, 0x000F]);
labelFunc06E7_0161:
	goto labelFunc06E7_0115;
labelFunc06E7_0164:
	return;
}


