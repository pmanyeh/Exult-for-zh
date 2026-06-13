#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func090C 0x90C (var var0000, var var0001);

void Func01AF shape#(0x1AF) ()
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

	if (!(event == 0x0001)) goto labelFunc01AF_003F;
	UI_halt_scheduled(item);
	var0000 = [0x0001, 0x0001];
	var0001 = [0x0000, 0x0000];
	var0002 = 0xFFFF;
	Func090D(item, var0000, var0001, var0002, 0x01AF, item, 0x000A);
labelFunc01AF_003F:
	if (!(event == 0x000A)) goto labelFunc01AF_011E;
	UI_halt_scheduled(item);
	var0003 = UI_execute_usecode_array(item, [(byte)0x58, 0x0007, (byte)0x01, (byte)0x46, 0x0000, (byte)0x4D, (byte)0x27, 0x0001, (byte)0x4D, (byte)0x27, 0x0001, (byte)0x4F, (byte)0x27, 0x0001, (byte)0x4F, (byte)0x27, 0x0001, (byte)0x4D, (byte)0x27, 0x0001, (byte)0x4D, (byte)0x27, 0x0001, (byte)0x4F, (byte)0x27, 0x0001, (byte)0x4F]);
	var0004 = Func090C(0xFE9C, item);
	UI_halt_scheduled(0xFE9C);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0004, (byte)0x61, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61, (byte)0x61, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61]);
	var0005 = UI_find_nearby(item, 0x02E3, 0x0004, 0x00B0);
	enum();
labelFunc01AF_00E1:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc01AF_011E;
	var0003 = UI_execute_usecode_array(var0008, [(byte)0x23, (byte)0x58, 0x0007, (byte)0x4D, (byte)0x4D, (byte)0x4D, (byte)0x27, 0x000E, (byte)0x4F, (byte)0x27, 0x0003, (byte)0x4F, (byte)0x27, 0x0003, (byte)0x4F]);
	goto labelFunc01AF_00E1;
labelFunc01AF_011E:
	return;
}


