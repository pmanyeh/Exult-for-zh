#game "serpentisle"
void Func094E 0x94E (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(var0000 == 0xFED3)) goto labelFunc094E_0043;
	UI_show_npc_face1(var0000, 0x0000);
	if (!UI_get_item_flag(var0000, 0x0019)) goto labelFunc094E_0028;
	message("\"Slurp\"");
	say();
	goto labelFunc094E_003E;
labelFunc094E_0028:
	enum();
labelFunc094E_0029:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc094E_003E;
	message(var0004);
	message("");
	say();
	goto labelFunc094E_0029;
labelFunc094E_003E:
	UI_remove_npc_face1();
	return;
labelFunc094E_0043:
	if (!UI_npc_nearby(var0000)) goto labelFunc094E_0099;
	if (!(UI_get_item_shape(var0000) == 0x02EB)) goto labelFunc094E_0061;
	var0000 = 0xFED6;
labelFunc094E_0061:
	UI_show_npc_face1(var0000, 0x0000);
	if (!UI_get_item_flag(var0000, 0x0019)) goto labelFunc094E_007F;
	message("\"Slurp\"");
	say();
	goto labelFunc094E_0095;
labelFunc094E_007F:
	enum();
labelFunc094E_0080:
	for (var0004 in var0001 with var0005 to var0006) attend labelFunc094E_0095;
	message(var0004);
	message("");
	say();
	goto labelFunc094E_0080;
labelFunc094E_0095:
	UI_remove_npc_face1();
labelFunc094E_0099:
	return;
}


