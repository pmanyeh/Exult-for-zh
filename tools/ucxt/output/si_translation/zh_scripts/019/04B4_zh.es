#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func0952 0x952 (var var0000);
extern void Func07F7 object#(0x7F7) ();
extern void Func09C1 0x9C1 ();
extern var Func0955 0x955 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09BF 0x9BF ();

void Func04B4 object#(0x4B4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!((event == 0x0001) && (gflags[0x01F3] == true))) goto labelFunc04B4_0034;
	UI_show_npc_face0(0xFF4C, 0x0000);
	message("\"No time to talk, Avatar. There is exploring to be done!\"");
	say();
	UI_remove_npc_face0();
	abort;
labelFunc04B4_0034:
	if (!(event == 0x0000)) goto labelFunc04B4_0084;
	if (!Func097D(item, 0xFE99, 0x025C, 0xFE99, 0xFE99)) goto labelFunc04B4_0062;
	Func094F(item, ["@Look!@", "@A glass sword!@", "@So much treasure!@"]);
	goto labelFunc04B4_0084;
labelFunc04B4_0062:
	var0003 = UI_create_new_object(0x025C);
	if (!Func0952(item)) goto labelFunc04B4_0084;
	var0004 = UI_is_readied(item, 0x0001, 0x025C, 0x0000);
labelFunc04B4_0084:
	if (!(event == 0x0003)) goto labelFunc04B4_00A1;
	if (!(gflags[0x01F3] && (!gflags[0x01ED]))) goto labelFunc04B4_009E;
	item->Func07F7();
	goto labelFunc04B4_00A1;
labelFunc04B4_009E:
	Func09C1();
labelFunc04B4_00A1:
	if (!(event == 0x0002)) goto labelFunc04B4_00DA;
	UI_move_object(0xFF4C, [0x00A7, 0x0655, 0x0000]);
	UI_set_new_schedules(0xFF4C, 0x0000, 0x0003, [0x00A6, 0x0664]);
	UI_set_schedule_type(item, 0x0003);
labelFunc04B4_00DA:
	if (!(event == 0x0009)) goto labelFunc04B4_04B4;
	UI_set_new_schedules(0xFF4C, 0x0000, 0x0007, [0x00AB, 0x0631]);
	UI_run_schedule(0xFF4C);
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0005 = UI_find_nearby(0xFE9C, 0x010E, 0x0050, 0x0000);
	enum();
labelFunc04B4_011D:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc04B4_0145;
	var0009 = UI_get_item_quality(var0008);
	if (!(var0009 == 0x0007)) goto labelFunc04B4_0142;
	var000A = var0008;
labelFunc04B4_0142:
	goto labelFunc04B4_011D;
labelFunc04B4_0145:
	if (!var000A) goto labelFunc04B4_0180;
	var000B = UI_get_object_position(var000A);
	var000C = UI_create_new_object(0x0178);
	if (!var000C) goto labelFunc04B4_0180;
	UI_remove_item(var000A);
	UI_set_item_frame(var000C, 0x0016);
	var0003 = UI_update_last_created(var000B);
labelFunc04B4_0180:
	UI_show_npc_face0(0xFF4C, 0x0000);
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F7] == true) && (!(gflags[0x01F8] == true))))) goto labelFunc04B4_01D7;
	message("\"Avatar! Thou must come and look at what I have found! Come now... Zhelkas may not allow thee the time to see this. Wilt thou come look? Thou canst finish off the last Worm when thou dost return.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04B4_01BE;
	message("\"'Tis just through here...\"");
	say();
	Func097F(0xFF4C, "@Follow me!@", 0x0000);
	goto labelFunc04B4_01D2;
labelFunc04B4_01BE:
	message("\"It looks important, though I am no judge of such things. Thou shouldst come look while thou hast the chance...\"");
	say();
	Func097F(0xFF4C, "@'Tis thy loss...@", 0x0000);
	gflags[0x01ED] = true;
labelFunc04B4_01D2:
	gflags[0x01F8] = true;
	abort;
labelFunc04B4_01D7:
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F6] == true) && (!(gflags[0x01F8] == true))))) goto labelFunc04B4_01FD;
	message("\"There is no wine, Avatar. But thou shouldst see the weapons! If thou dost not finish soon, I cannot promise to share...\"");
	say();
	Func097F(0xFF4C, "@This is wonderful!@", 0x0000);
	abort;
labelFunc04B4_01FD:
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F5] == true) && (!(gflags[0x01F8] == true))))) goto labelFunc04B4_0223;
	message("\"Avatar! Thou shouldst see the treasure that I have found! Stay and finish the Game. I shall try to bring some to thee...\"");
	say();
	Func097F(0xFF4C, "@Wait here...@", 0x0000);
	abort;
labelFunc04B4_0223:
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F4] == true) && (!(gflags[0x01F8] == true))))) goto labelFunc04B4_0249;
	message("\"This is boring, indeed. I will leave thee to the Game, Avatar. I am going exploring...\"");
	say();
	Func097F(0xFF4C, "@So long...@", 0x0000);
	abort;
labelFunc04B4_0249:
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F4] == true) && (gflags[0x01F8] == true)))) goto labelFunc04B4_0285;
	message("\"Damn thee, Avatar! Damn thee! Thou hast destroyed the worms. Perhaps with such a weapon, thou dost not have any need for what I have found here...\"");
	say();
	Func097F(0xFF4C, "@Damn thee!@", 0x0000);
	var0003 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F7], 0x0019);
	abort;
labelFunc04B4_0285:
	message("\"Zhelkas hath appointed me moderator of the Game, Avatar. He hath also given me leave to explore...\" *\"Art thou ready to begin?\"");
	say();
	UI_add_answer(["moderator", "Game", "explore", "begin"]);
labelFunc04B4_029C:
	converse attend labelFunc04B4_04B3;
	case "moderator" attend labelFunc04B4_02BF:
	message("\"It is my duty as moderator to see that thou dost know the rules. After I have informed thee, I cannot aid thee... In any way.\"");
	say();
	UI_remove_answer("moderator");
	UI_add_answer(["rules", "aid"]);
labelFunc04B4_02BF:
	case "rules" attend labelFunc04B4_02DF:
	message("\"The rules are few...\" *\"Thou shalt face ten Worms. Thou canst not leave until the last Worm hath been dispatched.\"");
	say();
	UI_remove_answer("rules");
	UI_add_answer(["Worm", "dispatched"]);
labelFunc04B4_02DF:
	case "Worm" attend labelFunc04B4_02F2:
	message("\"Thou shalt face each Worm singly, one after the other. Each Worm shall seek thy death, Avatar. So be prepared.\"");
	say();
	UI_remove_answer("Worm");
labelFunc04B4_02F2:
	case "dispatched" attend labelFunc04B4_030C:
	message("\"The Worms can only be killed by a hammer. Each Worm can be slain only by hammer blows.\"");
	say();
	UI_remove_answer("dispatched");
	UI_add_answer("hammer");
labelFunc04B4_030C:
	case "hammer" attend labelFunc04B4_0326:
	message("\"They are Worms, Avatar! Everyone knows that if thou dost use a sword against a Worm, thou wilt face twice the number of foes after each stroke.\" *\"There is a small hammer on the floor near thee...\"");
	say();
	UI_remove_answer("hammer");
	UI_add_answer("everyone knows");
labelFunc04B4_0326:
	case "everyone knows" attend labelFunc04B4_0339:
	message("\"'Tis common knowledge, Avatar! I am surprised at thee... Cease such questions and put thine attention to the Game!\"");
	say();
	UI_remove_answer("everyone knows");
labelFunc04B4_0339:
	case "aid" attend labelFunc04B4_0359:
	message("\"I cannot assist thee in thy struggle against the Worms, either directly or indirectly.\"");
	say();
	UI_remove_answer("aid");
	UI_add_answer(["directly", "indirectly"]);
labelFunc04B4_0359:
	case "directly" attend labelFunc04B4_036C:
	message("\"I cannot join thy fight against the Worms. If I do, thou wilt lose the Game.\"");
	say();
	UI_remove_answer("directly");
labelFunc04B4_036C:
	case "indirectly" attend labelFunc04B4_037F:
	message("\"I cannot give thee anything I find while exploring. If I give thee anything, thou wilt lose the Game.\"");
	say();
	UI_remove_answer("indirectly");
labelFunc04B4_037F:
	case "Game" attend labelFunc04B4_039F:
	message("\"That is how Zhelkas referred to it, Avatar. Perhaps it is a test of thy skill or versatility as a warrior.\"");
	say();
	UI_remove_answer("Game");
	UI_add_answer(["skill", "versatility"]);
labelFunc04B4_039F:
	case "skill" attend labelFunc04B4_03B9:
	message("\"If thou art the Hero Zhelkas seeks, surely thou art a skilled enough fighter to stand alone against the Worms. If thou canst not best the Worms, how canst thou expect to stop the very destruction of the world?\"");
	say();
	UI_remove_answer("skill");
	UI_add_answer("destruction");
labelFunc04B4_03B9:
	case "destruction" attend labelFunc04B4_03CC:
	message("\"Why dost thou ask me? Everyone fears that the world will end soon if these storms are not stopped...\" *\"Turn thy mind to the task at hand. The sooner thou dost finish this Game, the sooner we can be on our way...\"");
	say();
	UI_remove_answer("destruction");
labelFunc04B4_03CC:
	case "versatility" attend labelFunc04B4_03DF:
	message("\"A true warrior doth not rely on only one weapon, Avatar. What would happen if thou didst not have thy sword and had to battle the Guardian? A true Hero would make anything a weapon if need be...\"");
	say();
	UI_remove_answer("versatility");
labelFunc04B4_03DF:
	case "explore" attend labelFunc04B4_03FF:
	message("\"Zhelkas said there were rooms in this area that I would find interesting. By acting as moderator, perhaps I may find something to benefit our quest.\"");
	say();
	UI_remove_answer("explore");
	UI_add_answer(["interesting", "benefit"]);
labelFunc04B4_03FF:
	case "interesting" attend labelFunc04B4_041F:
	message("\"Well, unless Zhelkas was talking about wine casks... I'd say he might have been referring to weapons.\"");
	say();
	UI_remove_answer("interesting");
	UI_add_answer(["wine casks", "weapons"]);
labelFunc04B4_041F:
	case "wine casks" attend labelFunc04B4_0432:
	message("\"Do not worry, old friend! I shall try to save thee a drop or two.\" *\"But thou shouldst be quick, lest I forget...\"");
	say();
	UI_remove_answer("wine casks");
labelFunc04B4_0432:
	case "weapons" attend labelFunc04B4_0445:
	message("\"If there is time after the Game, perhaps thou canst join me. If I can carry it... Perhaps I'll bring thee something.\"");
	say();
	UI_remove_answer("weapons");
labelFunc04B4_0445:
	case "benefit" attend labelFunc04B4_0458:
	message("\"Information, weapons...\" *\"I bring back what I can... As long as there isn't too much wine!\"");
	say();
	UI_remove_answer("benefit");
labelFunc04B4_0458:
	case "begin" attend labelFunc04B4_04B0:
	Func097F(0xFF4C, "@Then let the Game begin!@", 0x0000);
	gflags[0x01F3] = true;
	UI_set_npc_id(0xFF4C, 0x0001);
	var000D = Func09A0(0x0004, 0x0001);
	var0003 = UI_set_item_quality(var000D, 0x0001);
	var000D = Func09A0(0x0004, 0x0002);
	var0003 = UI_set_item_quality(var000D, 0x0000);
	Func09BF();
	abort;
labelFunc04B4_04B0:
	goto labelFunc04B4_029C;
labelFunc04B4_04B3:
	endconv;
labelFunc04B4_04B4:
	return;
}


