#game "blackgate"
void Func0903 0x903 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_npc_nearby(var0000)) goto labelFunc0903_005D;
	if (!(var0000 == 0xFE9C)) goto labelFunc0903_001E;
	var0002 = UI_is_pc_female();
	goto labelFunc0903_0024;
labelFunc0903_001E:
	var0002 = 0x0000;
labelFunc0903_0024:
	UI_show_npc_face(var0000, var0002);
	if (!UI_get_item_flag(item, 0x0019)) goto labelFunc0903_0040;
	message("\"Oink\"");
	say();
	goto labelFunc0903_0056;
labelFunc0903_0040:
	enum();
labelFunc0903_0041:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0903_0056;
	message(var0005);
	message("");
	say();
	goto labelFunc0903_0041;
labelFunc0903_0056:
	UI_remove_npc_face(var0000);
labelFunc0903_005D:
	return;
}


