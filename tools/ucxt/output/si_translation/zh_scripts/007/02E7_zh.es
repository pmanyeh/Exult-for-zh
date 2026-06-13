#game "serpentisle"
// externs
extern void Func0922 0x922 (var var0000);

void Func02E7 shape#(0x2E7) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0002)) goto labelFunc02E7_0039;
	Func0922(0x0009);
	gflags[0x02E3] = true;
	var0000 = UI_find_nearby(item, 0x02E7, 0x002D, 0x0000);
	if (!var0000) goto labelFunc02E7_0039;
	var0001 = UI_set_npc_prop(var0000, 0x0003, 0x0001);
labelFunc02E7_0039:
	return;
}


