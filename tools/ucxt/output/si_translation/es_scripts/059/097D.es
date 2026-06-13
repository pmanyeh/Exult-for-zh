#game "serpentisle"
var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004)
{
	var var0005;

	var0005 = UI_count_objects(var0000, var0002, var0003, var0004);
	if (!((var0005 >= var0001) && (var0005 != 0x0000))) goto labelFunc097D_002A;
	return true;
	goto labelFunc097D_002C;
labelFunc097D_002A:
	return false;
labelFunc097D_002C:
	return 0;
}


