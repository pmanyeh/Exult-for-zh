#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06D1 object#(0x6D1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0003)) goto labelFunc06D1_0033;
	if (!(!gflags[0x0000])) goto labelFunc06D1_0010;
	abort;
labelFunc06D1_0010:
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x06D1], 0x0005);
	UI_remove_item(item);
	abort;
labelFunc06D1_0033:
	if (!(event == 0x0002)) goto labelFunc06D1_017F;
	var0001 = UI_get_object_position(0xFE9C);
	var0000 = UI_find_nearby(0xFE9C, 0x019E, 0x001E, 0x0000);
	var0002 = false;
	enum();
labelFunc06D1_005D:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc06D1_007F;
	if (!(UI_get_item_frame(var0005) == 0x0015)) goto labelFunc06D1_007C;
	var0002 = var0005;
labelFunc06D1_007C:
	goto labelFunc06D1_005D;
labelFunc06D1_007F:
	var0006 = 0x0064;
	if (!var0002) goto labelFunc06D1_0098;
	var0006 = UI_get_distance(var0002, 0xFE9C);
labelFunc06D1_0098:
	if (!((var0001[0x0003] > 0x0005) && ((var0006 < 0x0006) || Func097D(0xFE9B, 0xFE99, 0x019E, 0xFE99, 0x0015)))) goto labelFunc06D1_0162;
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	var0001 = UI_get_object_position(0xFE9C);
	var0001[0x0001] = (var0001[0x0001] + 0x0005);
	UI_sprite_effect(0x0007, (var0001[0x0001] - 0x0003), (var0001[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFF2C, var0001);
	UI_play_sound_effect(0x0051);
	0xFF2C->Func07D1();
	0xFF2C->Func07D2();
	Func097F(0xFF2C, "@Hero...@", 0x0002);
	UI_play_music(0x003F, Func09A0(0x0005, 0x0001));
	var0000 = UI_delayed_execute_usecode_array(0xFF2C, [(byte)0x23, (byte)0x55, 0x04D4], 0x000E);
	goto labelFunc06D1_017F;
labelFunc06D1_0162:
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x06D1], 0x0002);
labelFunc06D1_017F:
	return;
}


