#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);

void Func028B shape#(0x28B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x000A)) goto labelFunc028B_0082;
	var0000 = UI_find_nearby(0xFE9C, 0x0369, 0x0001, 0x0000);
	var0001 = 0x0000;
	if (!(UI_get_array_size(var0000) > 0x0000)) goto labelFunc028B_0053;
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, 0x0006, (byte)0x6C, (byte)0x6B, (byte)0x0B, 0xFFFF, 0x000C]);
	var0001 = 0x0003;
labelFunc028B_0053:
	UI_halt_scheduled(item);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x46, 0x0000, (byte)0x4E, (byte)0x01, (byte)0x58, 0x005C, (byte)0x0B, 0xFFFC, 0x000C, (byte)0x55, 0x028B], var0001);
	return;
labelFunc028B_0082:
	if (!(event == 0x0002)) goto labelFunc028B_0112;
	var0003 = UI_get_cont_items(0xFE9C, 0x028D, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc028B_00AA;
	UI_remove_item(var0003);
labelFunc028B_00AA:
	var0004 = UI_create_new_object(0x028E);
	if (!var0004) goto labelFunc028B_0111;
	UI_set_item_flag(var0004, 0x0012);
	UI_set_item_flag(var0004, 0x000B);
	UI_set_item_frame(var0004, UI_die_roll(0x0000, 0x0009));
	var0005 = UI_get_object_position(item);
	var0005[0x0001] = (var0005[0x0001] + 0x0001);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	var0002 = UI_update_last_created(var0005);
labelFunc028B_0111:
	return;
labelFunc028B_0112:
	if (!(event == 0x0001)) goto labelFunc028B_012A;
	var0006 = ("@I suspect spinning the wool will be more fruitful " + "than spinning an empty wheel.@");
	Func094A(var0006);
labelFunc028B_012A:
	return;
}


