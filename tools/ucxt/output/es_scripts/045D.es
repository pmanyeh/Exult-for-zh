#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func045D object#(0x45D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc045D_01B0;
	UI_show_npc_face(0xFFA3, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFA3));
	var0001 = UI_part_of_day();
	if (!(var0001 == 0x0007)) goto labelFunc045D_005E;
	if (!(!(var0000 == 0x0010))) goto labelFunc045D_003F;
	goto labelFunc045D_005E;
labelFunc045D_003F:
	var0002 = Func08FC(0xFFA3, 0xFFAF);
	if (!var0002) goto labelFunc045D_0059;
	message("William does not want to avert his attention from the Fellowship meeting.*");
	say();
	abort;
	goto labelFunc045D_005E;
labelFunc045D_0059:
	message("\"I must not stop to speak with thee now! I am late for the Fellowship meeting at the hall!\"*");
	say();
	abort;
labelFunc045D_005E:
	var0003 = UI_wearing_fellowship();
	var0004 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0118])) goto labelFunc045D_008D;
	message("You see a man with a very worried look on his face.");
	say();
	gflags[0x0118] = true;
	goto labelFunc045D_0091;
labelFunc045D_008D:
	message("\"Avatar! What is it? Why dost thou want to talk to me again? What is wrong now?!\" says William.");
	say();
labelFunc045D_0091:
	converse attend labelFunc045D_01AB;
	case "name" attend labelFunc045D_00AD:
	message("\"I am called William, ");
	message(var0004);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc045D_00AD:
	case "job" attend labelFunc045D_00DE:
	if (!gflags[0x011F]) goto labelFunc045D_00CF;
	message("\"I work in the sawmill here in Minoc.\"");
	say();
	UI_add_answer(["sawmill", "Minoc"]);
	goto labelFunc045D_00DE;
labelFunc045D_00CF:
	message("\"What a ludicrous question at a time like this! Why, I have just been given the fright of my life when I entered my sawmill and saw those two who have not only been killed quite dead, but torn apart nearly beyond recognition!\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc045D_00DE:
	case "sawmill" attend labelFunc045D_00F1:
	message("\"I take the logs that are made from all the trees that are cut down by the logger in Yew, and cut them into planks in the local sawmill. Then I sell the planks - mostly to Owen the shipwright, and some to the Artist's Guild as well.\"");
	say();
	UI_remove_answer("sawmill");
labelFunc045D_00F1:
	case "Minoc" attend labelFunc045D_010B:
	message("\"It was such a quiet town until these murders happened. I cannot believe it.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer("murders");
labelFunc045D_010B:
	case "murders" attend labelFunc045D_0137:
	if (!(!gflags[0x010A])) goto labelFunc045D_0125;
	message("\"I found the bodies first thing this morning when I went to open the sawmill. It took all of the discipline I have gained from the Triad of Inner Strength and the teachings of The Fellowship to keep from going mad at the sight of it. It must have happened sometime last night but I swear to thee I never heard a thing!\"");
	say();
	gflags[0x010A] = true;
	goto labelFunc045D_0129;
labelFunc045D_0125:
	message("\"I swear by The Fellowship I have already told thee all I know concerning the murders!\"");
	say();
labelFunc045D_0129:
	UI_remove_answer("murders");
	UI_add_answer("Fellowship");
labelFunc045D_0137:
	case "Fellowship" attend labelFunc045D_0178:
	message("\"I have been a member of The Fellowship for only a short time. I have only of late begun attending Elynor's meetings. Only since they announced the monument was to be built.\"");
	say();
	if (!var0003) goto labelFunc045D_0150;
	message("\"I am so glad thou art my brother in The Fellowship; I know I may trust thee. It is all of the others in this town that I worry about.\"");
	say();
	goto labelFunc045D_016A;
labelFunc045D_0150:
	message("\"Wouldst thou like to know more of The Fellowship?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc045D_0166;
	Func0919();
	goto labelFunc045D_016A;
labelFunc045D_0166:
	message("\"Trust me, thou canst not possibly understand how cruel and terrible life can be! Thou dost need The Fellowship! I am lucky to have found it in time to face mine own moment of truth! I hope thou dost realize that thou dost need The Fellowship before it is too late!\"");
	say();
labelFunc045D_016A:
	UI_remove_answer("Fellowship");
	UI_add_answer("monument");
labelFunc045D_0178:
	case "philosophy" attend labelFunc045D_018A:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc045D_018A:
	case "monument" attend labelFunc045D_019D:
	message("\"Thou dost know! The monument of Owen the shipwright standing on the bow of a tall ship. Everyone in town doth know of it!\"");
	say();
	UI_remove_answer("monument");
labelFunc045D_019D:
	case "bye" attend labelFunc045D_01A8:
	goto labelFunc045D_01AB;
labelFunc045D_01A8:
	goto labelFunc045D_0091;
labelFunc045D_01AB:
	endconv;
	message("As soon as he has dismissed you, the overwrought William hides his face in his hands.*");
	say();
labelFunc045D_01B0:
	if (!(event == 0x0000)) goto labelFunc045D_01BE;
	Func092E(0xFFA3);
labelFunc045D_01BE:
	return;
}


