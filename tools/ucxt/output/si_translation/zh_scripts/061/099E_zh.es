#game "serpentisle"
var Func099E 0x99E (var var0000)
{
	var var0001;
	var var0002;

	var0001 = UI_get_container(var0000);
	var0002 = var0001;
labelFunc099E_0010:
	if (!var0001) goto labelFunc099E_0029;
	var0002 = var0001;
	var0001 = UI_get_container(var0001);
	goto labelFunc099E_0010;
labelFunc099E_0029:
	return var0002;
	return 0;
}


