#game "serpentisle"
// externs
extern var Func08FB 0x8FB ();
extern void Func086C 0x86C (var var0000);

void Func086D 0x86D ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func08FB();
	enum();
labelFunc086D_0007:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc086D_0058;
	if (!(var0003 != UI_get_npc_object(0xFE9C))) goto labelFunc086D_0055;
	var0004 = UI_get_body_npc(var0003);
	if (!((var0004 == 0xFFFD) || ((var0004 == 0xFFFE) || (var0004 == 0xFFFF)))) goto labelFunc086D_0055;
	var0005 = UI_resurrect(var0003);
	UI_add_to_party(var0004);
labelFunc086D_0055:
	goto labelFunc086D_0007;
labelFunc086D_0058:
	Func086C(0xFFFF);
	Func086C(0xFFFE);
	Func086C(0xFFFD);
	return;
}


