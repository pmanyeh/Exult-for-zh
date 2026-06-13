#game "serpentisle"
// externs
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func0969 0x969 (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0003 = Func095C(var0000, 0x0000);
	var0004 = Func095C(var0000, 0x0003);
	var0005 = UI_get_npc_name(var0000);
	if (!(var0003 > var0004)) goto labelFunc0969_005D;
	var0006 = (var0003 - var0004);
	Func095E(var0000, 0x0003, var0006);
	var0007 = UI_remove_party_items(var0002, var0001, 0xFE99, 0xFE99, true);
	message("\"The wounds have been healed.\"");
	say();
	goto labelFunc0969_0078;
labelFunc0969_005D:
	if (!(var0000 == 0xFE9C)) goto labelFunc0969_006E;
	message("\"Thou seemest quite healthy!\"");
	say();
	goto labelFunc0969_0078;
labelFunc0969_006E:
	message("\"");
	message(var0005);
	message(" is already healthy!\"");
	say();
labelFunc0969_0078:
	return;
}


