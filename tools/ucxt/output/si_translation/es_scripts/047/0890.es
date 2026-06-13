#game "serpentisle"
var Func0890 0x890 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_party_list();
	enum();
labelFunc0890_0008:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0890_0036;
	var0004 = UI_get_item_frame(var0003);
	if (!((!(var0004 == 0x000A)) && (!(var0004 == 0x001A)))) goto labelFunc0890_0033;
	return false;
labelFunc0890_0033:
	goto labelFunc0890_0008;
labelFunc0890_0036:
	return true;
	return 0;
}


