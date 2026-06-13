#game "serpentisle"
// externs
extern var Func0989 0x989 (var var0000, var var0001);
extern var Func0906 0x906 (var var0000);
extern void Func010E shape#(0x10E) ();
extern void Func0178 shape#(0x178) ();

void Func07A4 object#(0x7A4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0003)) goto labelFunc07A4_00BE;
	event = 0x0001;
	var0000 = UI_find_nearby(item, 0x010E, 0x0028, 0x0000);
	var0000 = (var0000 & UI_find_nearby(item, 0x0178, 0x0028, 0x0000));
	var0001 = [];
	enum();
labelFunc07A4_0039:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc07A4_0056;
	var0001 = (var0001 & UI_get_distance(item, var0004));
	goto labelFunc07A4_0039;
labelFunc07A4_0056:
	var0000 = Func0989(var0000, var0001);
	var0005 = 0x0001;
labelFunc07A4_0068:
	var0004 = var0000[var0005];
	if (!var0004) goto labelFunc07A4_00BE;
	if (!(Func0906(var0004) == 0x0002)) goto labelFunc07A4_0094;
	var0005 = (var0005 + 0x0001);
	goto labelFunc07A4_0068;
	goto labelFunc07A4_00BE;
labelFunc07A4_0094:
	var0006 = UI_get_item_shape(var0004);
	if (!(var0006 == 0x010E)) goto labelFunc07A4_00AE;
	var0004->Func010E();
labelFunc07A4_00AE:
	if (!(var0006 == 0x0178)) goto labelFunc07A4_00BE;
	var0004->Func0178();
labelFunc07A4_00BE:
	return;
}


