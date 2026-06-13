#game "serpentisle"
// externs
extern void Func010E shape#(0x10E) ();

void Func091D 0x91D ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_find_nearby(0xFE9C, 0x0210, 0x0028, 0x0008);
	if (!var0000) goto labelFunc091D_0121;
	var0001 = UI_get_object_position(var0000);
	if (!((var0001[0x0001] >= 0x0432) && ((var0001[0x0001] <= 0x0439) && ((var0001[0x0002] >= 0x03E4) && ((var0001[0x0002] <= 0x03EB) && (var0001[0x0003] == 0x0000)))))) goto labelFunc091D_0121;
	UI_set_alignment(var0000, 0x0002);
	UI_set_schedule_type(var0000, 0x0000);
	UI_set_oppressor(0xFE9C, var0000);
	UI_sprite_effect(0x000D, (var0001[0x0001] - 0x0002), (var0001[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	UI_clear_item_say(var0000);
	UI_halt_scheduled(var0000);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x52, "@Thank thee!@", (byte)0x27, 0x000A, (byte)0x52, "@Now I feed!!@"], 0x0000);
	var0002 = UI_find_nearby(var0000, 0x0113, 0x0000, 0x0010);
	if (!var0002) goto labelFunc091D_00F7;
	UI_remove_item(var0002);
labelFunc091D_00F7:
	var0003 = UI_find_nearest(var0000, 0x010E, 0x0005);
	if (!var0003) goto labelFunc091D_0121;
	UI_set_item_frame(var0003, 0x0004);
	event = 0x0001;
	var0003->Func010E();
labelFunc091D_0121:
	return;
}


