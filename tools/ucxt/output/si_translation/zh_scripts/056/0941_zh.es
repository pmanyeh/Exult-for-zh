#game "serpentisle"
var Func0941 0x941 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;

	var0001 = UI_get_npc_object(var0000);
	var0002 = (UI_get_npc_prop(var0001, 0x0008) / 0x0064);
	var0003 = 0x0001;
labelFunc0941_0021:
	if (!(var0002 > 0x0000)) goto labelFunc0941_0042;
	var0003 = (var0003 + 0x0001);
	var0002 = (var0002 / 0x0002);
	goto labelFunc0941_0021;
labelFunc0941_0042:
	return var0003;
	return 0;
}


