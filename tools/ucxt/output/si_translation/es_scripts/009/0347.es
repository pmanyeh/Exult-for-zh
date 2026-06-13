#game "serpentisle"
// externs
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002);
extern var Func08FC 0x8FC ();
extern void Func07D2 object#(0x7D2) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0347 shape#(0x347) ()
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

	if (!(event == 0x0001)) goto labelFunc0347_015C;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0001)) goto labelFunc0347_015C;
	var0001 = UI_get_object_position(item);
	if (!Func08F8(var0001, [0x0910, 0x0170], [0x093F, 0x019F])) goto labelFunc0347_0063;
	UI_close_gumps();
	UI_play_sound_effect(0x0030);
	UI_obj_sprite_effect(item, 0x0009, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
labelFunc0347_0063:
	var0002 = true;
	var0003 = UI_find_nearby(0xFE9C, 0xFE99, 0x000A, 0x0004);
	enum();
labelFunc0347_007B:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0347_00A1;
	var0007 = UI_get_schedule_type(var0006);
	if (!(var0007 == 0x0000)) goto labelFunc0347_009E;
	var0002 = false;
labelFunc0347_009E:
	goto labelFunc0347_007B;
labelFunc0347_00A1:
	if (!var0002) goto labelFunc0347_013B;
	if (!Func08FC()) goto labelFunc0347_0117;
	var0008 = UI_get_object_position(0xFE9C);
	UI_move_object(0xFF2D, var0008);
	0xFF2D->Func07D2();
	UI_set_schedule_type(0xFF2D, 0x0003);
	UI_obj_sprite_effect(0xFF2D, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var0009 = Func09A0(0x0002, 0x0001);
	if (!var0009) goto labelFunc0347_0110;
	UI_play_music(0x003F, var0009);
labelFunc0347_0110:
	UI_close_gumps();
	goto labelFunc0347_0138;
labelFunc0347_0117:
	UI_play_sound_effect(0x000E);
	UI_obj_sprite_effect(item, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0347_0138:
	goto labelFunc0347_015C;
labelFunc0347_013B:
	UI_play_sound_effect(0x0030);
	UI_obj_sprite_effect(item, 0x0009, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0347_015C:
	return;
}


