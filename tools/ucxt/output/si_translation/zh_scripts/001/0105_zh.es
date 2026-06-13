#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);
extern void Func094A 0x94A (var var0000);

void Func0105 shape#(0x105) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x000A)) goto labelFunc0105_0062;
	UI_halt_scheduled(item);
	var0000 = UI_execute_usecode_array(item, [(byte)0x46, 0x0000, (byte)0x4E, (byte)0x01, (byte)0x58, 0x005C, (byte)0x0B, 0xFFFC, 0x0020, (byte)0x55, 0x0105]);
	var0001 = Func090C(0xFE9C, item);
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0001, (byte)0x01, (byte)0x67, (byte)0x61, (byte)0x27, 0x0001, (byte)0x0B, 0xFFFB, 0x0009]);
labelFunc0105_0062:
	if (!(event == 0x0002)) goto labelFunc0105_00F1;
	var0002 = UI_get_cont_items(0xFE9C, 0x028E, 0xFE99, 0xFE99);
	if (!var0002) goto labelFunc0105_008A;
	UI_remove_item(var0002);
labelFunc0105_008A:
	var0003 = UI_create_new_object(0x0353);
	if (!var0003) goto labelFunc0105_00F1;
	UI_set_item_flag(var0003, 0x0012);
	UI_set_item_flag(var0003, 0x000B);
	UI_set_item_frame(var0003, UI_die_roll(0x0000, 0x0004));
	var0004 = UI_get_object_position(item);
	var0004[0x0001] = (var0004[0x0001] + 0x0001);
	var0004[0x0002] = (var0004[0x0002] + 0x0001);
	var0000 = UI_update_last_created(var0004);
labelFunc0105_00F1:
	if (!(event == 0x0001)) goto labelFunc0105_00FF;
	Func094A("@I believe that one threads a loom before using it.@");
labelFunc0105_00FF:
	return;
}


