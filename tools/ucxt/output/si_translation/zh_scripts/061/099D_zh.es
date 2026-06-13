#game "serpentisle"
var Func099D 0x99D (var var0000)
{
	var var0001;

	var0001 = UI_get_container(var0000);
labelFunc099D_000A:
	if (!(!(var0001 == UI_get_npc_object(0xFE9C)))) goto labelFunc099D_0031;
	var0001 = UI_get_container(var0001);
	if (!(!var0001)) goto labelFunc099D_002E;
	return 0x0000;
labelFunc099D_002E:
	goto labelFunc099D_000A;
labelFunc099D_0031:
	return var0001;
	return 0;
}


