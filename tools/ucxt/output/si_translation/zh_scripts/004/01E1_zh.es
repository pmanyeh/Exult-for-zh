#game "serpentisle"
// externs
extern void Func098A 0x98A (var var0000, var var0001);

void Func01E1 shape#(0x1E1) ()
{
	var var0000;

	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc01E1_0032;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 > 0x0001)) goto labelFunc01E1_002B;
	UI_item_say(item, "Burnt out");
	goto labelFunc01E1_0032;
labelFunc01E1_002B:
	Func098A(item, 0x01B3);
labelFunc01E1_0032:
	return;
}


