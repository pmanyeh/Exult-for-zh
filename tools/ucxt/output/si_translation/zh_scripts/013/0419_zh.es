#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0419 object#(0x419) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0419_000F;
	Func0809();
	abort;
labelFunc0419_000F:
	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0419_0052;
	UI_item_say(0xFE9C, "@Excuse me...@");
	Func097F(0xFFE7, (("@At thy service, " + var0000) + "!@"), 0x0002);
	UI_set_schedule_type(0xFFE7, 0x0003);
labelFunc0419_0052:
	if (!(event == 0x0000)) goto labelFunc0419_00DC;
	var0003 = UI_get_random(0x0006);
	if (!(var0003 == 0x0001)) goto labelFunc0419_0078;
	UI_item_say(0xFFE7, "@Please leave...@");
labelFunc0419_0078:
	if (!(var0003 == 0x0002)) goto labelFunc0419_008C;
	UI_item_say(0xFFE7, "@Rangers!@");
labelFunc0419_008C:
	if (!(var0003 == 0x0003)) goto labelFunc0419_00A0;
	UI_item_say(0xFFE7, "@Leave!@");
labelFunc0419_00A0:
	if (!(var0003 == 0x0004)) goto labelFunc0419_00B4;
	UI_item_say(0xFFE7, "@Beware!@");
labelFunc0419_00B4:
	if (!(var0003 == 0x0005)) goto labelFunc0419_00C8;
	UI_item_say(0xFFE7, "@Do not touch that!@");
labelFunc0419_00C8:
	if (!(var0003 == 0x0006)) goto labelFunc0419_00DC;
	UI_item_say(0xFFE7, "@Go quickly!@");
labelFunc0419_00DC:
	if (!(event == 0x0009)) goto labelFunc0419_02DA;
	UI_run_schedule(0xFFE7);
	UI_clear_item_say(0xFFE7);
	UI_show_npc_face0(0xFED6, 0x0000);
	if (!(!gflags[0x00E9])) goto labelFunc0419_0150;
	if (!gflags[0x00D7]) goto labelFunc0419_0116;
	message("\"Again we meet, ");
	message(var0000);
	message(". My mistress hath dispatched me to see if thou hast yet read the scroll she sent?\"");
	say();
	goto labelFunc0419_013D;
labelFunc0419_0116:
	message("\"Pardon, ");
	message(var0000);
	message(". I bring thee greetings from my mistress, the sorceress Rotoluncia. This scroll is from her.\"");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x02C3, 0x001F, 0x0006, 0x0012, true);
	gflags[0x00D7] = true;
labelFunc0419_013D:
	UI_add_answer(["Rotoluncia", "scroll", "servant"]);
	goto labelFunc0419_01C1;
labelFunc0419_0150:
	var0005 = UI_get_object_position(item);
	if (!((var0005[0x0001] < 0x09C2) && ((var0005[0x0001] > 0x0992) && ((var0005[0x0002] < 0x0750) && (var0005[0x0002] > 0x0700))))) goto labelFunc0419_01AA;
	message("\"This is the manor of the Enchantress Rotoluncia! Thou canst not enter without permission!\"");
	say();
	UI_add_answer(["Rotoluncia"]);
	if (!gflags[0x00EA]) goto labelFunc0419_01A7;
	UI_add_answer(["kidnap", "Where is she?"]);
labelFunc0419_01A7:
	goto labelFunc0419_01C1;
labelFunc0419_01AA:
	message("\"I must be about my duties.\"");
	say();
	Func097F(item, "@Pardom me...@", 0x0000);
	UI_set_schedule_type(item, 0x000C);
	abort;
labelFunc0419_01C1:
	UI_add_answer("bye");
labelFunc0419_01C8:
	converse attend labelFunc0419_02D9;
	case "Rotoluncia" attend labelFunc0419_01F0:
	UI_remove_answer("Rotoluncia");
	message("\"My mistress commands many powerful and strange magics, and sits upon the Council of Mages.\"");
	say();
	if (!(!gflags[0x00EA])) goto labelFunc0419_01EC;
	message("\"She is terrible to her enemies, but tolerant of those who aid her.\"");
	say();
	goto labelFunc0419_01F0;
labelFunc0419_01EC:
	message("\"As thou now knowest, she is most terrible to those who do not bend to her will.\"");
	say();
labelFunc0419_01F0:
	case "kidnap" attend labelFunc0419_0207:
	UI_remove_answer("kidnap");
	message("\"I am forbidden to discuss this subject with thee!\"");
	say();
	var0006 = true;
labelFunc0419_0207:
	case "Where is she?" attend labelFunc0419_021E:
	UI_remove_answer("Where is she?");
	message("\"I must not tell! In fact, thou shouldst leave here at once.\"");
	say();
	var0006 = true;
labelFunc0419_021E:
	case "scroll" attend labelFunc0419_0231:
	message("\"'Tis not an ordinary scroll, but one of the magical variety. I assure thee that it is entirely free of harmful magic.\"");
	say();
	UI_remove_answer("scroll");
labelFunc0419_0231:
	case "servant" attend labelFunc0419_0248:
	message("\"The Mages of Moonshade are quite powerful, and have found the way to acquire servants such as myself.\"");
	say();
	message("\"My mistress says that automatons are more trustworthy, since we can neither be corrupted nor tortured.\"");
	say();
	UI_remove_answer("servant");
labelFunc0419_0248:
	case "bye" attend labelFunc0419_02D6:
	if (!gflags[0x00EA]) goto labelFunc0419_025A;
	gflags[0x00EB] = true;
labelFunc0419_025A:
	if (!((!gflags[0x00E9]) && (!gflags[0x00EA]))) goto labelFunc0419_0285;
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Good day.@", 0x0000);
	Func097F(0xFFE7, "@Do not forget the scroll.@", 0x0002);
	goto labelFunc0419_02D3;
labelFunc0419_0285:
	if (!(gflags[0x00EA] && var0006)) goto labelFunc0419_02C5;
	message("\"Thou dost look at me oddly... I think I have said too much!\"");
	say();
	message("\"Now I must kill thee...\"");
	say();
	UI_set_alignment(0xFFE7, 0x0003);
	Func097F(0xFFE7, "@Must kill!@", 0x0000);
	UI_set_schedule_type(0xFFE7, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFFE7);
	abort;
	goto labelFunc0419_02D3;
labelFunc0419_02C5:
	message("\"If thou dost not leave quickly, I must call the Rangers!\"");
	say();
	UI_set_schedule_type(0xFFE7, 0x0007);
labelFunc0419_02D3:
	goto labelFunc0419_02D9;
labelFunc0419_02D6:
	goto labelFunc0419_01C8;
labelFunc0419_02D9:
	endconv;
labelFunc0419_02DA:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0419_0334;
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0419_031D;
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Rotoluncia shall avenge my loss...\"");
	say();
	gflags[0x00EB] = true;
	UI_set_alignment(0xFFE1, 0x0003);
	UI_remove_npc_face0();
labelFunc0419_031D:
	UI_clear_item_flag(0xFFE7, 0x001D);
	UI_reduce_health(0xFFE7, 0x0037, 0x0000);
labelFunc0419_0334:
	return;
}


