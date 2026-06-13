#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08BA 0x8BA ();

void Func0453 object#(0x453) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc0453_0009;
	abort;
labelFunc0453_0009:
	UI_show_npc_face(0xFFAD, 0x0000);
	var0000 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00FE]) goto labelFunc0453_0040;
	UI_add_answer(["murders", "Frederico", "Tania"]);
labelFunc0453_0040:
	if (!gflags[0x00FF]) goto labelFunc0453_004D;
	UI_add_answer("Sasha");
labelFunc0453_004D:
	if (!(!gflags[0x010E])) goto labelFunc0453_005F;
	message("You see a young, bewitching gypsy woman with wise, soul-peering eyes.");
	say();
	gflags[0x010E] = true;
	goto labelFunc0453_007B;
labelFunc0453_005F:
	message("\"Thou vishest to speak vith me again?\" Margareta asks.");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0453_0076;
	message("\"Very vell.\"");
	say();
	goto labelFunc0453_007B;
labelFunc0453_0076:
	message("\"Very vell.\"*");
	say();
	abort;
labelFunc0453_007B:
	converse attend labelFunc0453_01A8;
	case "name" attend labelFunc0453_0091:
	message("\"Margareta at thy service,\" she speaks slowly.");
	say();
	UI_remove_answer("name");
labelFunc0453_0091:
	case "job" attend labelFunc0453_00A4:
	message("The gypsy woman smiles slightly. \"To tell thy destiny.\"");
	say();
	UI_add_answer("destiny");
labelFunc0453_00A4:
	case "murders" attend labelFunc0453_00B7:
	message("\"I knew it vould happen. I varned Frederico. He vouldn't listen.\"");
	say();
	UI_remove_answer("murders");
labelFunc0453_00B7:
	case "Frederico" attend labelFunc0453_00D1:
	message("\"He vas my brother-in-law. His death makes me very sad.\"");
	say();
	UI_remove_answer("Frederico");
	UI_add_answer("husband");
labelFunc0453_00D1:
	case "Tania" attend labelFunc0453_00E4:
	message("\"She vas Frederico's vife, but thou dost know that already, no? She vas a good voman.\"");
	say();
	UI_remove_answer("Tania");
labelFunc0453_00E4:
	case "Sasha" attend labelFunc0453_0104:
	message("Margareta is silent a moment.~~\"He has been led astray. It is unfortunate that he vill realize his mistake only as a result ov the death ov his parents.\"");
	say();
	UI_add_answer(["astray", "mistake"]);
	UI_remove_answer("Sasha");
labelFunc0453_0104:
	case "astray" attend labelFunc0453_0117:
	message("\"There are many, many others like Sasha who have been led astray. For them, I see no future.\"");
	say();
	UI_remove_answer("astray");
labelFunc0453_0117:
	case "mistake" attend labelFunc0453_0142:
	message("\"Thou dost know vhat I mean.");
	say();
	if (!gflags[0x0006]) goto labelFunc0453_0130;
	message("\"Thou art a member thyself.\"");
	say();
	goto labelFunc0453_0134;
labelFunc0453_0130:
	message("\"The Fellowship.\"");
	say();
labelFunc0453_0134:
	UI_add_answer("Fellowship");
	UI_remove_answer("mistake");
labelFunc0453_0142:
	case "Fellowship" attend labelFunc0453_0175:
	if (!(var0000 && (!gflags[0x0006]))) goto labelFunc0453_015D;
	message("Margareta sees your medallion and raises her eyes.");
	say();
	message("\"I see thou art vearing vone ov their medallions, but thou art not truly a member, art thou? Bevare -- there are those in The Fellowship that vill see through thy deception.\"");
	say();
labelFunc0453_015D:
	if (!gflags[0x0006]) goto labelFunc0453_016A;
	message("\"Thou vilt soon be enlightened about their true nature.\"");
	say();
	goto labelFunc0453_016E;
labelFunc0453_016A:
	message("\"Thou shalt learn more about them in due time.\"");
	say();
labelFunc0453_016E:
	UI_remove_answer("Fellowship");
labelFunc0453_0175:
	case "destiny" attend labelFunc0453_0187:
	Func08BA();
	UI_remove_answer("destiny");
labelFunc0453_0187:
	case "husband" attend labelFunc0453_019A:
	message("\"Jergi is mine husband, ov course. Now he has the veight ov guiding the gypsy race in these\ttroubled times.\"");
	say();
	UI_remove_answer("husband");
labelFunc0453_019A:
	case "bye" attend labelFunc0453_01A5:
	goto labelFunc0453_01A8;
labelFunc0453_01A5:
	goto labelFunc0453_007B;
labelFunc0453_01A8:
	endconv;
	message("\"Fairvell. Go in peace.\"*");
	say();
	return;
}


