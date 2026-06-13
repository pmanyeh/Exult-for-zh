#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);

void Func02BA shape#(0x2BA) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc02BA_004A;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000[0x0001]);
	if (!(var0001 == 0x0353)) goto labelFunc02BA_0044;
	UI_set_item_shape(var0000, 0x033B);
	UI_set_item_frame(var0000, UI_die_roll(0x0000, 0x0002));
	goto labelFunc02BA_004A;
labelFunc02BA_0044:
	Func094A("@Might not those come in handy for cutting cloth into bandages?@");
labelFunc02BA_004A:
	return;
}


