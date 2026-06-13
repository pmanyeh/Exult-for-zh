#game "serpentisle"
// externs
extern var Func098E 0x98E ();
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func063F object#(0x63F) ()
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
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	if (!(event == 0x0002)) goto labelFunc063F_012E;
	var0000 = Func098E();
	enum();
labelFunc063F_000F:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc063F_0044;
	if (!UI_npc_nearby(var0003)) goto labelFunc063F_0041;
	var0004 = UI_direction_from(var0003, item);
	var0005 = UI_execute_usecode_array(var0003, [(byte)0x59, var0004]);
labelFunc063F_0041:
	goto labelFunc063F_000F;
labelFunc063F_0044:
	var0006 = [(byte)0x55, 0x063F];
	var0004 = UI_direction_from(item, 0xFE9C);
	var0007 = UI_execute_usecode_array(item, [(byte)0x59, var0004]);
	var0008 = [0x0000, 0x0002, 0x0002, 0x0002, 0x0000, 0xFFFE, 0xFFFE, 0xFFFE];
	var0009 = [0xFFFE, 0xFFFE, 0x0000, 0x0002, 0x0002, 0x0002, 0x0000, 0xFFFE];
	var000A = (var0008 & var0008);
	var000B = (var0009 & var0009);
	var0004 = (UI_find_direction(item, 0xFE9C) + 0x0001);
	var000C = 0x0001;
	var000D = var000A[var0004];
	var000E = var000B[var0004];
labelFunc063F_00E1:
	if (!(var000C < 0x0008)) goto labelFunc063F_011A;
	var000D = (var000D & var000A[(var0004 + var000C)]);
	var000E = (var000E & var000B[(var0004 + var000C)]);
	var000C = (var000C + 0x0001);
	goto labelFunc063F_00E1;
labelFunc063F_011A:
	Func090D(item, var000D, var000E, 0xFFFF, 0x063F, item, 0x000A);
labelFunc063F_012E:
	return;
}


