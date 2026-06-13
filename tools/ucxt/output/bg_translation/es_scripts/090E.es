#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);

var Func090E 0x90E ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_npc_name(UI_get_party_list2());
	var0001 = UI_get_party_list2();
	var0002 = [0x0000, var0001];
	var0003 = Func090C(["Nobody", var0000]);
	var0004 = var0002[var0003];
	if (!(var0004 == 0x0000)) goto labelFunc090E_0044;
	return 0x0000;
labelFunc090E_0044:
	return UI_get_npc_number(var0004);
	return 0;
}


