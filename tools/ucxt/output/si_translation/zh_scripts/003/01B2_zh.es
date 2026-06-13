#game "serpentisle"
// externs
extern void Func0949 0x949 (var var0000);
extern void Func0629 object#(0x629) ();

void Func01B2 shape#(0x1B2) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc01B2_0022;
	if (!UI_in_usecode(item)) goto labelFunc01B2_001E;
	UI_halt_scheduled(item);
	Func0949("@'Tis about time!@");
	goto labelFunc01B2_0022;
labelFunc01B2_001E:
	item->Func0629();
labelFunc01B2_0022:
	if (!(event == 0x000B)) goto labelFunc01B2_00A5;
	var0000 = UI_get_object_position(item);
	var0000[0x0001] = (var0000[0x0001] + 0x0001);
	var0000[0x0002] = (var0000[0x0002] - 0x0001);
	var0001 = UI_get_cont_items(0xFE9C, 0x032A, 0xFE99, 0xFE99);
	if (!var0001) goto labelFunc01B2_008F;
	var0002 = UI_set_last_created(var0001);
	if (!var0002) goto labelFunc01B2_008F;
	UI_set_item_frame(var0001, 0x0003);
	var0002 = UI_update_last_created(var0000);
labelFunc01B2_008F:
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, 0x0000, (byte)0x01, (byte)0x6C]);
labelFunc01B2_00A5:
	return;
}


