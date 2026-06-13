#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0624 object#(0x624) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0624_0074;
	UI_close_gumps();
	var0000 = [0xFFFF, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001, 0x0001];
	var0001 = [0x0001, 0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF];
	UI_halt_scheduled(0xFE9C);
	Func090D(item, var0000, var0001, 0xFFFF, 0x0624, item, 0x000A);
	UI_set_path_failure(0x0624, item, 0x0002);
labelFunc0624_0074:
	if (!(event == 0x0002)) goto labelFunc0624_008C;
	UI_set_item_shape(item, 0x0247);
	UI_set_item_frame(item, 0x0000);
labelFunc0624_008C:
	if (!(event == 0x000A)) goto labelFunc0624_00CD;
	UI_close_gumps();
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, (byte)0x30, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61]);
	if (!var0002) goto labelFunc0624_00CD;
	var0002 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x55, 0x0624]);
labelFunc0624_00CD:
	return;
}


