#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0452 object#(0x452) ()
{
	var var0000;
	var var0001;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0452_000E;
	Func0809();
labelFunc0452_000E:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0452_0048;
	UI_item_say(0xFE9C, "@Speak, automaton!@");
	0xFFAE->Func07D1();
	Func097F(0xFFAE, "@Obedience... Failed...@", 0x0002);
	UI_set_schedule_type(0xFFAE, 0x0003);
labelFunc0452_0048:
	if (!(event == 0x0009)) goto labelFunc0452_007D;
	UI_run_schedule(0xFFAE);
	UI_clear_item_say(0xFFAE);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Unfinished... Discipline...\"");
	say();
	message("\"Master... Punishment... No Order...\"");
	say();
	message("\"Alcoves... Pain... Cannot succeed...\"");
	say();
	message("\"Failed... Duty... Punishment...\"");
	say();
	UI_remove_npc_face0();
	abort;
labelFunc0452_007D:
	return;
}


