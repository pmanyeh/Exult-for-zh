#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func045F object#(0x45F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc045F_000F;
	Func0809();
	abort;
labelFunc045F_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc045F_0051;
	UI_item_say(0xFE9C, "@May we speak?@");
	0xFFA1->Func07D1();
	Func097F(0xFFA1, (("@Yes, " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFFA1, 0x0003);
labelFunc045F_0051:
	if (!(event == 0x0009)) goto labelFunc045F_01FB;
	UI_run_schedule(0xFFA1);
	UI_clear_item_say(0xFFA1);
	UI_show_npc_face0(0xFFA1, 0x0000);
	if (!gflags[0x0233]) goto labelFunc045F_0089;
	message("\"That hath made good use of thy Logic, ");
	message(var0000);
	message(". I would not have believed that one of our fellowship could have done such a thing. I thank thee for finding the traitor in our midst.\"");
	say();
	message("\"Use the key to obtain the waters of Logic. Thou hast well earned that honor.\"");
	say();
	abort;
	goto labelFunc045F_01FB;
labelFunc045F_0089:
	message("\"Thou mayest call me Number 2, ");
	message(var0000);
	message(".\"");
	say();
	message("\"I regret that thou canst not meditate, ");
	message(var0000);
	message(". The strange mage hath damaged the Temple and the key to the fountain room is nowhere to be found!\"");
	say();
	UI_add_answer(["strange mage", "damaged", "key", "accuse", "bye"]);
labelFunc045F_00B3:
	converse attend labelFunc045F_01FA;
	case "strange mage" attend labelFunc045F_00D6:
	UI_remove_answer("strange mage");
	message("\"He was a nasty-looking little man, ");
	message(var0000);
	message(". He and his vile companions came in here without regard for the sanctity of the Temple. It was shocking!\"");
	say();
	UI_add_answer("companions");
labelFunc045F_00D6:
	case "companions" attend labelFunc045F_00ED:
	UI_remove_answer("companions");
	message("\"I could not see them well, for the mage kept my fellows and I locked within an energy field while he went about his evil work.\"");
	say();
	message("\"All I can tell thee is that there were three of them. And one was very large and went heavily-cloaked.\"");
	say();
labelFunc045F_00ED:
	case "damaged" attend labelFunc045F_0107:
	UI_remove_answer("damaged");
	message("\"The mage destroyed the prison container that it was our duty to protect... Why in the name of Order he would ever do such a horrible thing, I do not know.\"");
	say();
	UI_add_answer("prison container");
labelFunc045F_0107:
	case "prison container" attend labelFunc045F_0124:
	UI_remove_answer("prison container");
	message("\"I do not know what great evil was contained there, ");
	message(var0000);
	message(". But I know that it exhausted all of the Order Hierophant's magic to imprison it here.\"");
	say();
	message("\"Who knows what ill is now loose upon the world!\"");
	say();
labelFunc045F_0124:
	case "key" attend labelFunc045F_013B:
	UI_remove_answer("key");
	message("\"It was the duty of Number 7 to keep the key to the fountain room. It hath been quite a while since we last saw Number 7.\"");
	say();
	message("\"All I remember is that I was with Number 1 when last we saw Number 7. I wonder where he hath gone?\"");
	say();
labelFunc045F_013B:
	case "accuse" attend labelFunc045F_01C6:
	message("\"I must warn thee, ");
	message(var0000);
	message(", we are each sworn to protect the other. If thou dost accuse me falsely, we shall attack thee.\"");
	say();
	message("\"If thou hast spoken to each of us and hast determined that one of us is guilty, accuse accordingly. But be not hasty in thy judgment.\"");
	say();
	message("\"Dost thou accuse me?\"");
	say();
	if (!Func0955()) goto labelFunc045F_01BC;
	message("\"Thou art wrong! Number 1 can tell thee where I was when Number 7 disappeared!\"");
	say();
	Func094E(0xFFA2, "@Number 2 was with me, as was Number 6!@");
	UI_set_conversation_slot(0x0000);
	message("\"Thou shalt pay!\"");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc045F_018C:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc045F_01B8;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc045F_018C;
labelFunc045F_01B8:
	abort;
	goto labelFunc045F_01C6;
labelFunc045F_01BC:
	message("\"I hope that thou dost find what hath happened to Number 7, ");
	message(var0000);
	message(". We cannot fulfill our duty without the key.\"");
	say();
labelFunc045F_01C6:
	case "bye" attend labelFunc045F_01F7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(0xFFA1, "@Use thy Logic!@", 0x0002);
	UI_set_schedule_type(0xFFA1, 0x000B);
	goto labelFunc045F_01FA;
labelFunc045F_01F7:
	goto labelFunc045F_00B3;
labelFunc045F_01FA:
	endconv;
labelFunc045F_01FB:
	return;
}


