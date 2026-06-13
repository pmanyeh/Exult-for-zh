#game "serpentisle"
// externs
extern void Func0152 shape#(0x152) ();
extern void Func02BD shape#(0x2BD) ();
extern void Func020E shape#(0x20E) ();

void Func07A3 object#(0x7A3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(event == 0x0003)) goto labelFunc07A3_008D;
	UI_play_sound_effect(0x0046);
	event = 0x0001;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_find_nearby(item, 0x0152, var0000, 0x0000);
	enum();
labelFunc07A3_002D:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc07A3_0041;
	var0004->Func0152();
	goto labelFunc07A3_002D;
labelFunc07A3_0041:
	var0001 = UI_find_nearby(item, 0x02BD, var0000, 0x0000);
	enum();
labelFunc07A3_0053:
	for (var0004 in var0001 with var0005 to var0006) attend labelFunc07A3_0067;
	var0004->Func02BD();
	goto labelFunc07A3_0053;
labelFunc07A3_0067:
	var0001 = UI_find_nearby(item, 0x020E, var0000, 0x0000);
	enum();
labelFunc07A3_0079:
	for (var0004 in var0001 with var0007 to var0008) attend labelFunc07A3_008D;
	var0004->Func020E();
	goto labelFunc07A3_0079;
labelFunc07A3_008D:
	return;
}


