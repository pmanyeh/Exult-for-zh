#game "serpentisle"
// externs
extern var Func090A 0x90A (var var0000);

void Func033C shape#(0x33C) ()
{
	var var0000;

	if (!((event != 0x0001) && (event != 0x0002))) goto labelFunc033C_000F;
	return;
labelFunc033C_000F:
	if (!(UI_get_item_quality(item) == 0x0000)) goto labelFunc033C_0022;
	var0000 = Func090A(item);
labelFunc033C_0022:
	return;
}


