#game "serpentisle"
// externs
extern void Func060F object#(0x60F) ();

void Func09A5 0x9A5 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_find_nearby(0xFE9C, 0x01E9, 0x0050, 0x00B0);
	enum();
labelFunc09A5_0014:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc09A5_0028;
	var0003->Func060F();
	goto labelFunc09A5_0014;
labelFunc09A5_0028:
	var0004 = UI_get_party_list();
	enum();
labelFunc09A5_0030:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc09A5_0044;
	var0007->Func060F();
	goto labelFunc09A5_0030;
labelFunc09A5_0044:
	return;
}


