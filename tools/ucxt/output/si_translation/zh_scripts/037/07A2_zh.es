#game "serpentisle"
// externs
extern void Func0150 shape#(0x150) ();
extern void Func0253 shape#(0x253) ();
extern void Func0379 shape#(0x379) ();

void Func07A2 object#(0x7A2) ()
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

	if (!(event == 0x0003)) goto labelFunc07A2_008D;
	event = 0x0001;
	UI_play_sound_effect(0x0046);
	var0000 = UI_get_item_quality(item);
	var0001 = UI_find_nearby(item, 0x0150, var0000, 0x0000);
	enum();
labelFunc07A2_002D:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc07A2_0041;
	var0004->Func0150();
	goto labelFunc07A2_002D;
labelFunc07A2_0041:
	var0001 = UI_find_nearby(item, 0x0253, var0000, 0x0000);
	enum();
labelFunc07A2_0053:
	for (var0004 in var0001 with var0005 to var0006) attend labelFunc07A2_0067;
	var0004->Func0253();
	goto labelFunc07A2_0053;
labelFunc07A2_0067:
	var0001 = UI_find_nearby(item, 0x0379, var0000, 0x0000);
	enum();
labelFunc07A2_0079:
	for (var0004 in var0001 with var0007 to var0008) attend labelFunc07A2_008D;
	var0004->Func0379();
	goto labelFunc07A2_0079;
labelFunc07A2_008D:
	return;
}


