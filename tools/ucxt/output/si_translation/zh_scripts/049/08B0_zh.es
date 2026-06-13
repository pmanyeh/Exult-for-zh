#game "serpentisle"
var Func08B0 0x8B0 (var var0000, var var0001, var var0002)
{
	var var0003;

	if (!var0002) goto labelFunc08B0_0033;
	var0003 = 0x0000;
	if (!var0000) goto labelFunc08B0_001C;
	var0003 = UI_set_last_created(var0000);
labelFunc08B0_001C:
	if (!var0001) goto labelFunc08B0_002C;
	var0003 = UI_set_last_created(var0001);
labelFunc08B0_002C:
	return var0003;
	goto labelFunc08B0_005B;
labelFunc08B0_0033:
	var0003 = false;
	if (!var0000) goto labelFunc08B0_0047;
	var0003 = UI_give_last_created(0xFE9C);
labelFunc08B0_0047:
	if (!var0001) goto labelFunc08B0_0057;
	var0003 = UI_give_last_created(0xFE9C);
labelFunc08B0_0057:
	return var0003;
labelFunc08B0_005B:
	return 0;
}


