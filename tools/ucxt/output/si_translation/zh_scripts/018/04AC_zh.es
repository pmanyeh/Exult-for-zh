#game "serpentisle"
void Func04AC object#(0x4AC) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc04AC_0029;
	if (!(UI_get_schedule_type(0xFF54) == 0x0004)) goto labelFunc04AC_0021;
	UI_item_say(item, "@Later...@");
	goto labelFunc04AC_0029;
labelFunc04AC_0021:
	UI_item_say(item, "@Not the left button!@");
labelFunc04AC_0029:
	if (!(event == 0x0000)) goto labelFunc04AC_005E;
	var0000 = ("@Thou art so manly!@" & ("@Kiss me!@" & ("@Let us do it again...@" & ("@Come closer...@" & ("@Oh, Shamino!@" & "@I am overcome...@")))));
	UI_item_say(item, var0000[UI_get_random(UI_get_array_size(var0000))]);
labelFunc04AC_005E:
	return;
}


