#game "blackgate"
// externs
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0912 0x912 (var var0000, var var0001, var var0002);

void Func091D 0x91D (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0002 = Func0910(var0000, 0x0000);
	var0003 = Func0910(var0000, 0x0003);
	var0004 = UI_get_npc_name(var0000);
	if (!(var0002 > var0003)) goto labelFunc091D_005D;
	var0005 = (var0002 - var0003);
	Func0912(var0000, 0x0003, var0005);
	var0006 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("「傷口已經癒合了。」");
	say();
	goto labelFunc091D_0078;
labelFunc091D_005D:
	if (!(var0000 == 0xFE9C)) goto labelFunc091D_006E;
	message("「你看起來很健康！」");
	say();
	goto labelFunc091D_0078;
labelFunc091D_006E:
	message("「");
	message(var0004);
	message(" 已經很健康了！」");
	say();
labelFunc091D_0078:
	return;
}


