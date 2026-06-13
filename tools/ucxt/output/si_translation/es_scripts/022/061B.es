#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func061B object#(0x61B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_is_pc_female();
	var0001 = "handsome";
	if (!var0000) goto labelFunc061B_0019;
	var0001 = "beautiful";
labelFunc061B_0019:
	var0002 = false;
	var0003 = UI_get_npc_id(item);
	if (!(var0003 == 0x000D)) goto labelFunc061B_0033;
	var0002 = true;
labelFunc061B_0033:
	if (!(event == 0x0002)) goto labelFunc061B_02A2;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEC7, 0x0000);
	if (!(!gflags[0x0311])) goto labelFunc061B_0072;
	message("\"Well hello, ");
	message(var0001);
	message(". I'm glad I did not give up on thee. Thou art worth the wait, assuredly.\"");
	say();
	gflags[0x0311] = true;
	UI_set_npc_id(item, 0x000D);
	goto labelFunc061B_007C;
labelFunc061B_0072:
	message("\"Nice to see thee again, ");
	message(var0001);
	message(".\"");
	say();
labelFunc061B_007C:
	UI_add_answer(["Give up on me?", "wait", "bye"]);
labelFunc061B_008C:
	converse attend labelFunc061B_02A1;
	case "Give up on me?" attend labelFunc061B_00B3:
	UI_remove_answer("Give up on me?");
	message("\"Well, I would not have done that, really. After all, it's not often a girl gets the chance to play a part in prophecy.");
	say();
	message("\"If I had given up, how would I have been able to help thee?\"");
	say();
	UI_add_answer(["prophecy", "help"]);
labelFunc061B_00B3:
	case "prophecy" attend labelFunc061B_00D9:
	UI_remove_answer("prophecy");
	message("\"Thy coming was foretold long ago, ");
	message(var0001);
	message("... though thou wert expected much earlier. I fear that the task before thee shall be much more difficult now.\"");
	say();
	UI_add_answer(["foretold", "task"]);
labelFunc061B_00D9:
	case "foretold" attend labelFunc061B_0106:
	UI_remove_answer("foretold");
	message("\"I suppose that the Ophidians learned of it through their Hierophants. We were told by our Guide...");
	say();
	message("\"I was told to await thee here. And so I have waited... Thou hast been quite tardy, thou knowest, ");
	message(var0001);
	message(".\"");
	say();
	UI_add_answer(["Ophidians", "Hierophants", "Guide"]);
labelFunc061B_0106:
	case "Ophidians" attend labelFunc061B_011D:
	UI_remove_answer("Ophidians");
	message("\"Thou dost not know who the Ophidians are? How strange.");
	say();
	message("\"They are the people that hold the keep. Quite warlike, really. I don't have much to do with them...\"");
	say();
labelFunc061B_011D:
	case "Hierophants" attend labelFunc061B_0138:
	UI_remove_answer("Hierophants");
	message("\"At least I think that is what they are called.");
	say();
	message("\"The Hierophants are the holy men -- and women -- of the Ophidians. I understand that they are also the political leaders...");
	say();
	message("\"Personally, I think that anyone possessing that much power is a bad idea.\"");
	say();
labelFunc061B_0138:
	case "Guide" attend labelFunc061B_0158:
	UI_remove_answer("Guide");
	message("\"The Guide is who I follow, ");
	message(var0001);
	message(". I would love to stand and tell thee all about it, but thou shouldst really be on thy way... Thou art quite late, thou knowest.\"");
	say();
	UI_add_answer("late");
labelFunc061B_0158:
	case "late" attend labelFunc061B_0175:
	UI_remove_answer("late");
	message("\"The Ophidian's war has gone on for many years now, ");
	message(var0001);
	message(". I don't think that Chaos will be able to hold off Order much longer.");
	say();
	message("\"If thou art going to restore Balance thou wilt have to act quickly.\"");
	say();
labelFunc061B_0175:
	case "task" attend labelFunc061B_0199:
	UI_remove_answer("task");
	message("\"The task of the pawn of prophecy -- or, as the Ophidians call thee, the Champion of Balance -- is to restore Balance to the world.");
	say();
	message("\"I fear that the tide of battle may have turned so far that even thou canst not pull it back. If Order destroys Chaos, there will be nothing to bring Balance to, ");
	message(var0001);
	message(".\"");
	say();
	UI_add_answer("destroys Chaos");
labelFunc061B_0199:
	case "destroys Chaos" attend labelFunc061B_01B7:
	UI_remove_answer("destroys Chaos");
	message("\"The Ophidians who follow Order believe that those who follow Chaos are responsible for the murder of one of their holy men. They have sworn to rid the world of Chaos...");
	say();
	message("\"And now that they have created the automatons, they may succeed.\"");
	say();
	UI_add_answer("automatons");
labelFunc061B_01B7:
	case "automatons" attend labelFunc061B_01DA:
	UI_remove_answer("automatons");
	message("\"Thou canst not miss seeing them anywhere near the keep, ");
	message(var0001);
	message(". They are the men of metal that does swell the ranks of Order.");
	say();
	message("\"With the added strength of the automatons, Order shall swiftly overcome Chaos... Thy time to complete thy task grows short, ");
	message(var0001);
	message(".\"");
	say();
labelFunc061B_01DA:
	case "help" attend labelFunc061B_01FA:
	UI_remove_answer("help");
	message("\"I have been charged with the task of aiding thee, ");
	message(var0001);
	message(". Beyond this gate lies a threat to thee. It is I who must give thee the key to escaping its snare.\"");
	say();
	UI_add_answer("key");
labelFunc061B_01FA:
	case "key" attend labelFunc061B_021B:
	UI_remove_answer("key");
	message("\"Not a physical key, ");
	message(var0001);
	message(", but a hint... if thou wilt.");
	say();
	message("\"Thou shalt come to a room in which thy passage is blocked. To win thy freedom, thou shalt have to know which of the many levers must be moved.");
	say();
	message("\"Pull every other lever down to break free of the trap.\"");
	say();
labelFunc061B_021B:
	case "wait" attend labelFunc061B_0245:
	UI_remove_answer("wait");
	message("\"It has been quite a while... But it does not matter, now that thou art here, ");
	message(var0001);
	message(".");
	say();
	message("\"Perhaps, after thou hast completed thy task, I couldst think of a way for thee to make it up to me.\"");
	say();
	UI_add_answer(["think of a way", "make it up to thee"]);
labelFunc061B_0245:
	case "think of a way" attend labelFunc061B_0258:
	UI_remove_answer("think of a way");
	message("\"Let us just say that thou dost inspire me... I can promise thee that I shall be... creative.\"");
	say();
labelFunc061B_0258:
	case "make it up to thee" attend labelFunc061B_0271:
	UI_remove_answer("make it up to thee");
	message("\"Oh, do not tempt me, ");
	message(var0001);
	message("! We have duties yet to fulfill, thou and I. Perhaps we can find time later, in a more... romantic spot, shall we say?\"");
	say();
labelFunc061B_0271:
	case "bye" attend labelFunc061B_029E:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell!@", 0x0000);
	Func097F(item, "@Take care!@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	goto labelFunc061B_02A1;
labelFunc061B_029E:
	goto labelFunc061B_008C;
labelFunc061B_02A1:
	endconv;
labelFunc061B_02A2:
	return;
}


