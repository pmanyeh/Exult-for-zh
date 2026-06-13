#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);
extern void Func0883 0x883 ();
extern void Func0882 0x882 ();

void Func0602 object#(0x602) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x00C9)) goto labelFunc0602_008E;
	if (!(UI_get_item_frame(item) == 0x0007)) goto labelFunc0602_008E;
	if (!(gflags[0x02EB] && gflags[0x02EC])) goto labelFunc0602_008B;
	Func095D(0x0064);
	UI_play_sound_effect(0x0043);
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x02EA] = true;
	var0001 = UI_find_nearby(item, 0x00C8, 0x000A, 0x0010);
	UI_remove_item(var0001);
	var0002 = UI_find_nearby(item, 0x037F, 0x000A, 0x0000);
	UI_remove_item(var0002);
	Func0883();
	goto labelFunc0602_008E;
labelFunc0602_008B:
	Func0882();
labelFunc0602_008E:
	if (!(var0000 == 0x00CA)) goto labelFunc0602_0112;
	if (!(UI_get_item_frame(item) == 0x0007)) goto labelFunc0602_010F;
	if (!(gflags[0x02EC] && (!gflags[0x02EA]))) goto labelFunc0602_010C;
	Func095D(0x0064);
	gflags[0x02EB] = true;
	UI_play_sound_effect(0x0043);
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_find_nearby(item, 0x00C8, 0x000A, 0x0010);
	UI_remove_item(var0001);
	var0002 = UI_find_nearby(item, 0x037F, 0x000A, 0x0000);
	UI_remove_item(var0002);
labelFunc0602_010C:
	goto labelFunc0602_0112;
labelFunc0602_010F:
	Func0882();
labelFunc0602_0112:
	if (!(var0000 == 0x00CB)) goto labelFunc0602_0197;
	if (!(UI_get_item_frame(item) == 0x0009)) goto labelFunc0602_0194;
	if (!((!gflags[0x02EB]) && (!gflags[0x02EA]))) goto labelFunc0602_0191;
	Func095D(0x0064);
	gflags[0x02EC] = true;
	UI_play_sound_effect(0x0043);
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_find_nearby(item, 0x00C8, 0x000A, 0x0010);
	UI_remove_item(var0001);
	var0002 = UI_find_nearby(item, 0x037F, 0x000A, 0x0000);
	UI_remove_item(var0002);
labelFunc0602_0191:
	goto labelFunc0602_0197;
labelFunc0602_0194:
	Func0882();
labelFunc0602_0197:
	return;
}


