#game "blackgate"
void Func01F0 shape#(0x1F0) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc01F0_001A;
	UI_item_say(0xFE9C, "@乖狗狗。@");
	UI_set_schedule_type(item, 0x0009);
labelFunc01F0_001A:
	if (!(event == 0x0000)) goto labelFunc01F0_0053;
	var0000 = UI_die_roll(0x0001, 0x0002);
	if (!(var0000 == 0x0001)) goto labelFunc01F0_0041;
	UI_item_say(item, "@汪@");
labelFunc01F0_0041:
	if (!(var0000 == 0x0002)) goto labelFunc01F0_0053;
	UI_item_say(item, "@汪汪@");
labelFunc01F0_0053:
	return;
}


