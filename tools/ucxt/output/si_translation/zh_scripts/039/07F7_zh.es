#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func09A6 0x9A6 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern void Func07D7 object#(0x7D7) ();

void Func07F7 object#(0x7F7) ()
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

	UI_set_polymorph(0xFE9C, 0x02D1);
	if (!(gflags[0x0203] && (gflags[0x0204] && gflags[0x0205]))) goto labelFunc07F7_01EB;
	if (!(item == Func09A0(0x0005, 0x0002))) goto labelFunc07F7_016D;
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, (byte)0x34]);
	var0001 = UI_find_nearby(item, 0x0320, 0x002D, 0x0000);
	var0002 = false;
	enum();
labelFunc07F7_004D:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc07F7_006F;
	if (!(UI_get_item_quality(var0005) == 0x003D)) goto labelFunc07F7_006C;
	var0002 = var0005;
labelFunc07F7_006C:
	goto labelFunc07F7_004D;
labelFunc07F7_006F:
	if (!var0002) goto labelFunc07F7_015D;
	var0001 = UI_get_cont_items(var0002, 0xFE99, 0xFE99, 0xFE99);
	if (!var0001) goto labelFunc07F7_00D2;
	var0001 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc07F7_00A2:
	for (var0005 in var0001 with var0006 to var0007) attend labelFunc07F7_00D2;
	if (!(!((UI_get_item_shape(var0005) == 0x01E6) || (UI_get_item_shape(var0005) == 0x025F)))) goto labelFunc07F7_00CF;
	UI_remove_item(var0005);
labelFunc07F7_00CF:
	goto labelFunc07F7_00A2;
labelFunc07F7_00D2:
	var0008 = 0x0000;
	var0001 = UI_get_cont_items(var0002, 0xFE99, 0xFE99, 0xFE99);
labelFunc07F7_00EB:
	if (!(var0008 < 0x0002)) goto labelFunc07F7_015D;
	enum();
labelFunc07F7_00F6:
	for (var0005 in var0001 with var0009 to var000A) attend labelFunc07F7_013D;
	if (!(Func09A6(var0005) || (var0008 == 0x0001))) goto labelFunc07F7_013A;
	if (!(!UI_set_last_created(var0005))) goto labelFunc07F7_0126;
	Func092F(0xFE9C, 0x000D);
labelFunc07F7_0126:
	if (!(!UI_give_last_created(0xFE9C))) goto labelFunc07F7_013A;
	Func092F(0xFE9C, 0x000E);
labelFunc07F7_013A:
	goto labelFunc07F7_00F6;
labelFunc07F7_013D:
	var0008 = (var0008 + 0x0001);
	var0001 = UI_get_cont_items(var0002, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc07F7_00EB;
labelFunc07F7_015D:
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	goto labelFunc07F7_01E8;
labelFunc07F7_016D:
	UI_set_camera(0xFE9C);
	UI_play_music(0x0027, Func09A0(0x0005, 0x0001));
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_sound_effect(0x0082);
	UI_move_object(0xFF56, [0x074A, 0x0A03, 0x0000]);
	UI_set_schedule_type(0xFF56, 0x0003);
	var0000 = UI_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x07F7]);
	UI_move_object(0xFE9C, [0x0747, 0x09ED, 0x0000]);
	0x0000->Func07D7();
labelFunc07F7_01E8:
	goto labelFunc07F7_01FD;
labelFunc07F7_01EB:
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x55, 0x02AF]);
labelFunc07F7_01FD:
	return;
}


