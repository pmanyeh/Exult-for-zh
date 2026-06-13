#game "serpentisle"
// externs
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);

var Func0958 0x958 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = (Func098E() & 0x0000);
	var0001 = (UI_get_npc_name(var0000) & "Nobody");
	var0002 = Func0957([var0001]);
	var0003 = var0000[var0002];
	if (!(var0003 == 0x0000)) goto labelFunc0958_003B;
	return 0x0000;
labelFunc0958_003B:
	return UI_get_npc_number(var0003);
	return 0;
}


