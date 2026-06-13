#game "serpentisle"
var Func096F 0x96F (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0003 = UI_count_objects(0xFE9B, var0001, 0xFE99, 0xFE99);
	if (!(var0003 >= var0002)) goto labelFunc096F_0075;
	var0004 = UI_find_object(0xFE9B, 0x02F9, 0xFE99, 0xFE99);
	if (!var0004) goto labelFunc096F_006C;
	if (!UI_add_spell(var0000, 0x0000, var0004)) goto labelFunc096F_0063;
	var0005 = 0x0001;
	var0006 = UI_remove_party_items(var0002, var0001, 0xFE99, 0xFE99, true);
	goto labelFunc096F_0069;
labelFunc096F_0063:
	var0005 = 0x0004;
labelFunc096F_0069:
	goto labelFunc096F_0072;
labelFunc096F_006C:
	var0005 = 0x0002;
labelFunc096F_0072:
	goto labelFunc096F_007B;
labelFunc096F_0075:
	var0005 = 0x0003;
labelFunc096F_007B:
	return var0005;
	return 0;
}


