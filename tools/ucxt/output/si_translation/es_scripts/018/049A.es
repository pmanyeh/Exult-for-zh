#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func049A object#(0x49A) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc049A_0028;
	UI_item_say(0xFE9C, "@Hail, Gwani!@");
	Func097F(0xFF66, "@Noocha Ta, Avatar!@", 0x0003);
	UI_set_schedule_type(0xFF66, 0x0003);
labelFunc049A_0028:
	if (!(event == 0x0009)) goto labelFunc049A_013F;
	UI_run_schedule(0xFF66);
	UI_clear_item_say(0xFF66);
	UI_show_npc_face0(0xFF66, 0x0000);
	var0000 = UI_get_item_flag(0xFF66, 0x001C);
	if (!var0000) goto labelFunc049A_0062;
	message("\"Greetings, great hunter.\"");
	say();
	goto labelFunc049A_0066;
labelFunc049A_0062:
	message("\"Our hunt bad.\"");
	say();
labelFunc049A_0066:
	UI_add_answer(["name", "hunt", "bye"]);
labelFunc049A_0076:
	converse attend labelFunc049A_013E;
	case "name" attend labelFunc049A_0096:
	UI_remove_answer("name");
	message("\"Me Kapyundi, mean @little glacier@. Me son of Yenani and Myauri.\"");
	say();
	UI_set_item_flag(0xFF66, 0x001C);
labelFunc049A_0096:
	case "hunt" attend labelFunc049A_00B6:
	UI_remove_answer("hunt");
	message("\"We try to kill Ice Dragon, use blood to save Neyobi. But lair of Ice Dragon is certain death.\"");
	say();
	UI_add_answer(["Ice Dragon lair", "certain death"]);
labelFunc049A_00B6:
	case "Ice Dragon lair" attend labelFunc049A_00C9:
	UI_remove_answer("Ice Dragon lair");
	message("\"Front entrance is too much danger! Must be other entrance!\"");
	say();
labelFunc049A_00C9:
	case "certain death" attend labelFunc049A_00E3:
	UI_remove_answer("certain death");
	message("\"Three of us died in Ice Dragon lair. We two injured. Must return to village in shame.\"");
	say();
	UI_add_answer("three died");
labelFunc049A_00E3:
	case "three died" attend labelFunc049A_00FD:
	UI_remove_answer("three died");
	message("\"We fought by three Gwani hunters who died in Ice Dragon lair. Dragon eat them. Now we never able to take their bodies to Gwani death temple.\"");
	say();
	UI_add_answer("Gwani death temple");
labelFunc049A_00FD:
	case "Gwani death temple" attend labelFunc049A_0110:
	message("\"I do not know where temple. Gwani place of death to west of Ice Dragon's lair. Temple is there somewhere.\"");
	say();
	UI_remove_answer("Gwani death temple");
labelFunc049A_0110:
	case "bye" attend labelFunc049A_013B:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@Safe journey to thee.@", 0x0000);
	Func097F(0xFF66, "@Good luck.@", 0x0003);
	goto labelFunc049A_013E;
labelFunc049A_013B:
	goto labelFunc049A_0076;
labelFunc049A_013E:
	endconv;
labelFunc049A_013F:
	return;
}


