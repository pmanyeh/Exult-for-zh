#game "serpentisle"
// externs
extern void Func090E 0x90E (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);

void Func07D0 object#(0x7D0) ()
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

	if (!(item in UI_get_party_list())) goto labelFunc07D0_000A;
	abort;
labelFunc07D0_000A:
	if (!(event == 0x0002)) goto labelFunc07D0_00F5;
	var0000 = UI_direction_from(item, 0xFE9C);
	var0001 = UI_execute_usecode_array(item, [(byte)0x59, var0000]);
	var0002 = [0x0000, 0x0002, 0x0002, 0x0002, 0x0000, 0xFFFE, 0xFFFE, 0xFFFE];
	var0003 = [0xFFFE, 0xFFFE, 0x0000, 0x0002, 0x0002, 0x0002, 0x0000, 0xFFFE];
	var0004 = (var0002 & var0002);
	var0005 = (var0003 & var0003);
	var0000 = (UI_find_direction(0xFE9C, item) + 0x0001);
	var0006 = 0x0001;
	var0007 = var0004[var0000];
	var0008 = var0005[var0000];
labelFunc07D0_00A4:
	if (!(var0006 < 0x0008)) goto labelFunc07D0_00DD;
	var0007 = (var0007 & var0004[(var0000 + var0006)]);
	var0008 = (var0008 & var0005[(var0000 + var0006)]);
	var0006 = (var0006 + 0x0001);
	goto labelFunc07D0_00A4;
labelFunc07D0_00DD:
	Func090E(item, 0xFE9C, var0007, var0008, 0xFFFF, 0x07D0, item, 0x000A, true);
labelFunc07D0_00F5:
	return;
}


