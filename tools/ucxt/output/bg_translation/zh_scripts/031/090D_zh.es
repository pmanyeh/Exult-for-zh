#game "blackgate"
// externs
extern var Func08FB 0x8FB ();
extern var Func090C 0x90C (var var0000);

var Func090D 0x90D ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func08FB();
	var0001 = UI_get_party_list();
	var0002 = [0x0000, var0001];
	var0003 = Func090C(["暫時不用", var0000]);
	var0004 = var0002[var0003];
	if (!(var0004 == 0x0000)) goto labelFunc090D_003F;
	return 0x0000;
labelFunc090D_003F:
	return UI_get_npc_number(var0004);
	return 0;
}


