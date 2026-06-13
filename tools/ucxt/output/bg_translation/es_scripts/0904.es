#game "blackgate"
// externs
extern void Func0933 0x933 (var var0000, var var0001, var var0002);

void Func0904 0x904 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_npc_nearby(var0000)) goto labelFunc0904_004B;
	if (!UI_get_item_flag(item, 0x0019)) goto labelFunc0904_0020;
	UI_item_say(item, "@Oink@");
	goto labelFunc0904_004B;
labelFunc0904_0020:
	var0002 = 0x0000;
	enum();
labelFunc0904_0027:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0904_004B;
	Func0933(var0000, var0005, var0002);
	var0002 = (var0002 + 0x0011);
	goto labelFunc0904_0027;
labelFunc0904_004B:
	return;
}


