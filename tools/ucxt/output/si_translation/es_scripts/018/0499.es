#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0499 object#(0x499) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0499_002E;
	UI_item_say(0xFE9C, "@Hail, Gwani hunter!@");
	0xFF67->Func07D1();
	Func097F(0xFF67, "@Noo Koomba!@", 0x0003);
	UI_set_schedule_type(0xFF67, 0x0003);
labelFunc0499_002E:
	if (!(event == 0x0009)) goto labelFunc0499_0158;
	UI_set_new_schedules(0xFF67, [0x0000, 0x0003, 0x0004], [0x000E, 0x0005, 0x000C], [0x03A6, 0x035F, 0x03A6, 0x035F, 0x03A6, 0x035F]);
	UI_run_schedule(0xFF67);
	UI_clear_item_say(0xFF67);
	UI_show_npc_face0(0xFF67, 0x0000);
	var0000 = UI_get_item_flag(0xFF67, 0x001C);
	if (!var0000) goto labelFunc0499_009C;
	message("\"Greetings again.\"");
	say();
	goto labelFunc0499_00A0;
labelFunc0499_009C:
	message("\"Beware claws of Ice Dragon!\"");
	say();
labelFunc0499_00A0:
	UI_add_answer(["name", "Ice Dragon", "bye"]);
labelFunc0499_00B0:
	converse attend labelFunc0499_0157;
	case "name" attend labelFunc0499_00DD:
	UI_remove_answer("name");
	if (!var0000) goto labelFunc0499_00CF;
	message("\"Am still Gilwoyai.\"");
	say();
	goto labelFunc0499_00DD;
labelFunc0499_00CF:
	message("\"Am Gilwoyai, means @Of the Wind@.\"");
	say();
	UI_set_item_flag(0xFF67, 0x001C);
labelFunc0499_00DD:
	case "Ice Dragon" attend labelFunc0499_00FD:
	UI_remove_answer("Ice Dragon");
	message("\"We tried to kill Ice Dragon, to bring its blood and cure Neyobi. We failed. It hit with claws, I smash into cave wall. I need Baiyanda to heal.\"");
	say();
	UI_add_answer(["claws", "cave"]);
labelFunc0499_00FD:
	case "claws" attend labelFunc0499_0110:
	UI_remove_answer("claws");
	message("\"Vicious beast! This Ice Dragon is mother protecting its babies.\"");
	say();
labelFunc0499_0110:
	case "cave" attend labelFunc0499_0123:
	UI_remove_answer("cave");
	message("\"To find Ice Dragon lair walk north. Take ice raft to cross channel. Beware front opening!\"");
	say();
labelFunc0499_0123:
	case "bye" attend labelFunc0499_0154:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	UI_set_schedule_type(item, 0x0014);
	Func097F(0xFE9C, "@Go home now!@", 0x0000);
	Func097F(0xFF67, "@Kill Ice Dragon!@", 0x0003);
	abort;
labelFunc0499_0154:
	goto labelFunc0499_00B0;
labelFunc0499_0157:
	endconv;
labelFunc0499_0158:
	return;
}


