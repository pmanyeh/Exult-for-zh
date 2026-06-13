#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func0885 0x885 ();

void Func0883 0x883 ()
{
	var var0000;

	UI_show_npc_face(0xFFF4, 0x0000);
	var0000 = Func08F7(0xFFF5);
	if (!var0000) goto labelFunc0883_0035;
	message("\"Petre here knows something about all of this.\"*");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	message("The peasant interjects. \"I discovered poor Christopher and the Gargoyle Inamo early this morning.\"*");
	say();
	UI_remove_npc_face(0xFFF5);
	goto labelFunc0883_0043;
labelFunc0883_0035:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("\"Petre the stables caretaker discovered poor Christopher and Inamo early this morning.\"");
	say();
labelFunc0883_0043:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("The Mayor continues. \"Hast thou searched the stables?\"");
	say();
	Func0885();
	return;
}


