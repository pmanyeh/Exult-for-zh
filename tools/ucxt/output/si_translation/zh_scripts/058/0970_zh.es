#game "serpentisle"
// externs
extern var Func0955 0x955 ();

var Func0970 0x970 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0002 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("\"To be agreeable?\"");
	say();
	if (!(!Func0955())) goto labelFunc0970_0027;
	var0003 = 0x0000;
	goto labelFunc0970_008F;
labelFunc0970_0027:
	if (!(var0002 >= var0001)) goto labelFunc0970_0089;
	var0004 = UI_find_object(0xFE9B, 0x02F9, 0xFE99, 0xFE99);
	if (!var0004) goto labelFunc0970_0080;
	if (!UI_add_spell(var0000, 0x0000, var0004)) goto labelFunc0970_0077;
	var0003 = 0x0001;
	var0005 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0970_007D;
labelFunc0970_0077:
	var0003 = 0x0004;
labelFunc0970_007D:
	goto labelFunc0970_0086;
labelFunc0970_0080:
	var0003 = 0x0002;
labelFunc0970_0086:
	goto labelFunc0970_008F;
labelFunc0970_0089:
	var0003 = 0x0003;
labelFunc0970_008F:
	return var0003;
	return 0;
}


