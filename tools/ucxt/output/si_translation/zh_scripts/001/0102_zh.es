#game "serpentisle"
// externs
extern void Func0949 0x949 (var var0000);
extern void Func0628 object#(0x628) ();

void Func0102 shape#(0x102) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0102_0022;
	if (!UI_in_usecode(item)) goto labelFunc0102_001E;
	UI_halt_scheduled(item);
	Func0949("@'Tis about time!@");
	goto labelFunc0102_0022;
labelFunc0102_001E:
	item->Func0628();
labelFunc0102_0022:
	if (!(event == 0x000B)) goto labelFunc0102_00A5;
	var0000 = UI_get_object_position(item);
	var0000[0x0001] = (var0000[0x0001] - 0x0002);
	var0000[0x0002] = (var0000[0x0002] + 0x0001);
	var0001 = UI_get_cont_items(0xFE9C, 0x032A, 0xFE99, 0xFE99);
	if (!var0001) goto labelFunc0102_008F;
	var0002 = UI_set_last_created(var0001);
	if (!var0002) goto labelFunc0102_008F;
	UI_set_item_frame(var0001, 0x0004);
	var0002 = UI_update_last_created(var0000);
labelFunc0102_008F:
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, 0x0000, (byte)0x01, (byte)0x6C]);
labelFunc0102_00A5:
	return;
}


