#game "serpentisle"
// externs
extern var Func0989 0x989 (var var0000, var var0001);

void Func07A5 object#(0x7A5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0003)) goto labelFunc07A5_00AF;
	UI_play_sound_effect(0x0046);
	event = 0x0001;
	var0000 = UI_find_nearby(item, 0x0369, 0x0014, 0x0000);
	var0001 = [];
	enum();
labelFunc07A5_002B:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc07A5_0048;
	var0001 = (var0001 & UI_get_distance(var0004, item));
	goto labelFunc07A5_002B;
labelFunc07A5_0048:
	var0000 = Func0989(var0000, var0001);
	var0004 = var0000[0x0001];
	if (!var0004) goto labelFunc07A5_00AF;
	var0005 = UI_get_item_frame(var0004);
	var0006 = (var0005 % 0x0004);
	if (!(var0006 < 0x0003)) goto labelFunc07A5_0093;
	var0007 = UI_execute_usecode_array(var0004, [(byte)0x4E]);
	goto labelFunc07A5_00AF;
labelFunc07A5_0093:
	var0005 = (var0005 - var0006);
	var0007 = UI_execute_usecode_array(var0004, [(byte)0x46, var0005]);
labelFunc07A5_00AF:
	return;
}


