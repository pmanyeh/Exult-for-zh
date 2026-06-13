#game "blackgate"
// externs
extern var Func090A 0x90A ();

var Func0923 0x923 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0002 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("「可以嗎？」");
	say();
	if (!(!Func090A())) goto labelFunc0923_0027;
	var0003 = 0x0000;
	goto labelFunc0923_008F;
labelFunc0923_0027:
	if (!(var0002 >= var0001)) goto labelFunc0923_0089;
	var0004 = UI_find_object(0xFE9B, 0x02F9, 0xFE99, 0xFE99);
	if (!var0004) goto labelFunc0923_0080;
	if (!UI_add_spell(var0000, 0x0000, var0004)) goto labelFunc0923_0077;
	var0003 = 0x0001;
	var0005 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0923_007D;
labelFunc0923_0077:
	var0003 = 0x0004;
labelFunc0923_007D:
	goto labelFunc0923_0086;
labelFunc0923_0080:
	var0003 = 0x0002;
labelFunc0923_0086:
	goto labelFunc0923_008F;
labelFunc0923_0089:
	var0003 = 0x0003;
labelFunc0923_008F:
	return var0003;
	return 0;
}


