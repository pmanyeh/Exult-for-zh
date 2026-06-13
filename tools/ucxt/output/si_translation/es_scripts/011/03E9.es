#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func03E9 shape#(0x3E9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!((event == 0x0005) || (event == 0x0006))) goto labelFunc03E9_0048;
	var0000 = UI_get_container(item);
labelFunc03E9_0016:
	if (!((var0000 != 0x0000) && (!UI_is_npc(var0000)))) goto labelFunc03E9_0036;
	var0000 = UI_get_container(var0000);
	goto labelFunc03E9_0016;
labelFunc03E9_0036:
	if (!(var0000 == 0x0000)) goto labelFunc03E9_0048;
	UI_flash_mouse(0x0000);
	return;
labelFunc03E9_0048:
	if (!(event == 0x0005)) goto labelFunc03E9_00C3;
	if (!UI_get_readied(UI_get_container(item), 0x0005)) goto labelFunc03E9_00C3;
	if (!(!gflags[0x02F9])) goto labelFunc03E9_0070;
	Func095D(0x03E8);
	gflags[0x02F9] = true;
labelFunc03E9_0070:
	if (!(!gflags[0x0302])) goto labelFunc03E9_00C3;
	var0001 = UI_get_npc_prop(var0000, 0x0001);
	var0002 = (0x001E - var0001);
	if (!(var0002 > 0x000A)) goto labelFunc03E9_009E;
	var0002 = 0x000A;
labelFunc03E9_009E:
	var0003 = UI_set_item_quality(item, var0002);
	var0004 = UI_set_npc_prop(var0000, 0x0001, var0002);
	if (!var0004) goto labelFunc03E9_00C3;
	gflags[0x0302] = true;
labelFunc03E9_00C3:
	if (!(event == 0x0006)) goto labelFunc03E9_00FD;
	if (!gflags[0x0302]) goto labelFunc03E9_00FD;
	var0005 = UI_get_item_quality(item);
	var0006 = (0xFFFF * var0005);
	var0004 = UI_set_npc_prop(var0000, 0x0001, var0006);
	if (!var0004) goto labelFunc03E9_00FD;
	gflags[0x0302] = false;
labelFunc03E9_00FD:
	return;
}


