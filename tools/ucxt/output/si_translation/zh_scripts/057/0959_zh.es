#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);

var Func0959 0x959 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = (UI_get_party_list() & 0x0000);
	var0001 = (UI_get_npc_name(var0000) & "Nobody");
	var0002 = Func0957([var0001]);
	var0003 = var0000[var0002];
	if (!(var0003 == 0x0000)) goto labelFunc0959_003C;
	return 0x0000;
labelFunc0959_003C:
	return UI_get_npc_number(var0003);
	return 0;
}


