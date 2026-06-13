#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);

void Func00F3 shape#(0xF3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc00F3_025A;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_item_frame(item);
	if (!(var0001 == 0x0000)) goto labelFunc00F3_0031;
	UI_play_sound_effect(0x006A);
	UI_set_item_frame(item, 0x0001);
labelFunc00F3_0031:
	if (!(var0001 == 0x0001)) goto labelFunc00F3_004A;
	UI_play_sound_effect(0x0069);
	UI_set_item_frame(item, 0x0000);
labelFunc00F3_004A:
	if (!((var0001 == 0x0004) && (var0000 == 0x0000))) goto labelFunc00F3_006B;
	UI_play_sound_effect(0x006A);
	UI_set_item_frame(item, 0x0005);
labelFunc00F3_006B:
	if (!(var0001 == 0x0005)) goto labelFunc00F3_0084;
	UI_play_sound_effect(0x0069);
	UI_set_item_frame(item, 0x0004);
labelFunc00F3_0084:
	if (!((var0001 == 0x0004) && (var0000 == 0x0001))) goto labelFunc00F3_00A5;
	UI_play_sound_effect(0x006A);
	UI_set_item_frame(item, 0x0006);
labelFunc00F3_00A5:
	if (!(var0001 == 0x0006)) goto labelFunc00F3_00BE;
	UI_play_sound_effect(0x0069);
	UI_set_item_frame(item, 0x0004);
labelFunc00F3_00BE:
	if (!((var0001 == 0x0004) && (var0000 == 0x0002))) goto labelFunc00F3_0138;
	UI_set_item_frame(item, 0x0005);
	UI_play_sound_effect(0x006A);
	var0002 = UI_set_item_quality(item, 0x0000);
	var0003 = UI_get_object_position(item);
	var0003[0x0001] = (var0003[0x0001] + 0x0002);
	var0004 = UI_create_new_object2(0x01EE, var0003);
	Func09AD(var0004);
	UI_obj_sprite_effect(var0004, 0x000C, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x007B);
labelFunc00F3_0138:
	if (!((var0001 == 0x0004) && (var0000 == 0x0003))) goto labelFunc00F3_01CA;
	if (!gflags[0x0004]) goto labelFunc00F3_01BB;
	UI_set_item_frame(item, 0x0005);
	UI_play_sound_effect(0x006A);
	var0002 = UI_set_item_quality(item, 0x0000);
	var0003 = UI_get_object_position(item);
	var0003[0x0001] = (var0003[0x0001] + 0x0002);
	var0004 = UI_create_new_object2(0x01EE, var0003);
	Func09AD(var0004);
	UI_obj_sprite_effect(var0004, 0x000C, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x007B);
	goto labelFunc00F3_01CA;
labelFunc00F3_01BB:
	UI_play_sound_effect(0x006A);
	UI_set_item_frame(item, 0x0006);
labelFunc00F3_01CA:
	if (!((var0001 == 0x0004) && (var0000 == 0x0005))) goto labelFunc00F3_025A;
	if (!gflags[0x0004]) goto labelFunc00F3_024B;
	UI_set_item_frame(item, 0x0005);
	UI_play_sound_effect(0x006A);
	var0002 = UI_set_item_quality(item, 0x0000);
	var0003 = UI_get_object_position(item);
	var0003[0x0001] = (var0003[0x0001] + 0x0002);
	var0004 = UI_create_new_object2(0x0175, var0003);
	Func09AD(var0004);
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0052);
	goto labelFunc00F3_025A;
labelFunc00F3_024B:
	UI_play_sound_effect(0x006A);
	UI_set_item_frame(item, 0x0006);
labelFunc00F3_025A:
	return;
}


