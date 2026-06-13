#game "serpentisle"
// externs
extern var Func090B 0x90B (var var0000);

void Func034D shape#(0x34D) ()
{
	var var0000;

	if (!((event != 0x0001) && (event != 0x0002))) goto labelFunc034D_000F;
	return;
labelFunc034D_000F:
	if (!(UI_get_item_quality(item) == 0x0000)) goto labelFunc034D_0022;
	var0000 = Func090B(item);
labelFunc034D_0022:
	return;
}


