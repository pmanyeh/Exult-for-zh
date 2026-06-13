#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0937 0x937 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007)
{
	var var0008;

	if (!(var0000 == UI_get_npc_object(0xFE9C))) goto labelFunc0937_0036;
	Func090D(var0001, var0002, var0003, var0004, var0005, var0006, var0007);
	UI_set_path_failure(var0005, var0006, 0x000E);
	goto labelFunc0937_007A;
labelFunc0937_0036:
	var0008 = UI_get_object_position(var0001);
	var0008 = [(var0008[0x0001] + var0002[0x0001]), (var0008[0x0002] + var0003[0x0001]), var0008[0x0003]];
	UI_si_path_run_usecode(var0000, var0008, var0007, var0006, var0005, true);
labelFunc0937_007A:
	return;
}


