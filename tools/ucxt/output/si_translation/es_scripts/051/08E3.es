#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func08E3 0x8E3 ()
{
	var var0000;

	gflags[0x00E3] = true;
	var0000 = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!(var0000 == 0xFE9C)) goto labelFunc08E3_002B;
	UI_item_say(0xFE9C, "@Now I know the secret!@");
	goto labelFunc08E3_0039;
labelFunc08E3_002B:
	UI_show_npc_face0(var0000, 0x0000);
	message("\"Dost thou not see? Red, green and yellow -- and we have observed their properties. Now we can report to Gustacio.\"");
	say();
labelFunc08E3_0039:
	return;
}


