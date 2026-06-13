#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04B8 object#(0x4B8) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_npc_id(0xFF48);
	var0001 = Func0954();
	var0002 = Func0953();
	if (!(event == 0x0001)) goto labelFunc04B8_004C;
	UI_item_say(0xFE9C, "@May we speak?@");
	0xFF48->Func07D1();
	Func097F(0xFF48, (("@Yes, " + var0001) + "?@"), 0x0002);
	UI_set_schedule_type(0xFF48, 0x0003);
labelFunc04B8_004C:
	if (!(event == 0x0009)) goto labelFunc04B8_0083;
	UI_run_schedule(0xFF48);
	UI_show_npc_face0(0xFF48, 0x0000);
	message("\"What... hath... happened? Where... am I? Who am I?\"");
	say();
	message("\"I remember! I am Number 7!\"");
	say();
	message("\"Oh, foul betrayal! Number 4 murdered me and took the key!\"");
	say();
	message("\"He must not be allowed to hold the hallowed key!!\"");
	say();
	Func097F(item, "@Stop him!@", 0x0000);
	UI_remove_npc_face0();
labelFunc04B8_0083:
	return;
}


