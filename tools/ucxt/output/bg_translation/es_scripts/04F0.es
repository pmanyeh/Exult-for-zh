#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func04F0 object#(0x4F0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04F0_02F7;
	UI_show_npc_face(0xFF10, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF24);
	var0002 = Func08F7(0xFF66);
	var0003 = false;
	var0004 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x02E1]) goto labelFunc04F0_0056;
	message("\"I thank thee,");
	message(var0000);
	message(". Truly thou possesseth great honor! I hope one day to be able to repay thee for thy kindness!\"*");
	say();
	abort;
	goto labelFunc04F0_006A;
labelFunc04F0_0056:
	var0005 = UI_get_npc_object(0xFF10);
	UI_set_schedule_type(var0005, 0x000F);
labelFunc04F0_006A:
	if (!(!gflags[0x02C3])) goto labelFunc04F0_007C;
	message("You are greeted by a man with a sour expression.");
	say();
	gflags[0x02C3] = true;
	goto labelFunc04F0_0080;
labelFunc04F0_007C:
	message("\"Harrumph,\" says Anton.");
	say();
labelFunc04F0_0080:
	converse attend labelFunc04F0_02EC;
	case "name" attend labelFunc04F0_00D2:
	message("\"I,\" he says scratching his nose, \"am Anton, not that thou wouldst be concerned with me. Unless, of course, thou art about to put me in the stocks.\"");
	say();
	if (!var0001) goto labelFunc04F0_00BE;
	message("*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"Be polite, Anton. I am sure ");
	message(var0000);
	message(" is truly interested in thy name.\"");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_00BE:
	UI_remove_answer("name");
	UI_add_answer(["concerned", "stocks"]);
labelFunc04F0_00D2:
	case "job" attend labelFunc04F0_01C3:
	message("\"What kind of bloody stupid question is that? I am in the prison! What kind of job could I possibly have?\"");
	say();
	if (!var0002) goto labelFunc04F0_00FD;
	message("*");
	say();
	UI_show_npc_face(0xFF66, 0x0000);
	message("\"Yeah, stupid question.\"");
	say();
	UI_remove_npc_face(0xFF66);
labelFunc04F0_00FD:
	if (!var0001) goto labelFunc04F0_01B9;
	message("*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"Relax, Anton. I am sure that thou wilt have a job again soon enough.\" He turns to you.~~\"He was apprenticed to the sage Alagner who bade him find out information about The Fellowship...\"");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("\"Silence, fool! They will slay me for sure, now!\" He looks at you with despair.*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"Hast thou already forgotten, dear Anton? Thou didst divulge that information to them some time ago.\"*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("\"I did?\"*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("He nods.*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	UI_remove_npc_face(0xFF24);
	if (!var0002) goto labelFunc04F0_0187;
	message("Anton turns to the troll.~~\"I did?\"*");
	say();
	UI_show_npc_face(0xFF66, 0x0000);
	message("The troll nods.*");
	say();
	UI_remove_npc_face(0xFF66);
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_0187:
	message("\"Oh, well, then. Carry on!\"*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"As I was saying, his instructor sent him to observe the Fellowship. Of course, he was discovered and brought here for torturing.\" He turns back to Anton.~~\"Never fear, however, Anton. 'Twill be no time before thou art free again, able to return to thy tutor, Alagner, and resume thy studies,\" he says, smiling.*");
	say();
	UI_remove_npc_face(0xFF24);
	var0004 = true;
	UI_add_answer("Alagner");
	if (!(!var0003)) goto labelFunc04F0_01B9;
	UI_add_answer("Fellowship");
labelFunc04F0_01B9:
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_01C3:
	case "stocks" attend labelFunc04F0_0206:
	if (!var0004) goto labelFunc04F0_01E5;
	message("\"Yes, they are likely to keep me in them the next time until I rot. Or, at the very least, until I die from the troll's lashings.\"");
	say();
	UI_add_answer(["they", "lashings"]);
	goto labelFunc04F0_01FF;
labelFunc04F0_01E5:
	message("\"I am being held here for spying, ");
	message(var0000);
	message(". 'Tis a false accusation, but they will likely kill me anyway....\"");
	say();
	UI_add_answer(["spying", "false", "they"]);
labelFunc04F0_01FF:
	UI_remove_answer("stocks");
labelFunc04F0_0206:
	case "concerned" attend labelFunc04F0_0219:
	message("\"Well, so few people are, really.\"");
	say();
	UI_remove_answer("concerned");
labelFunc04F0_0219:
	case "false" attend labelFunc04F0_022C:
	message("\"Well, I am certainly not guilty of such an act!\"");
	say();
	UI_remove_answer("false");
labelFunc04F0_022C:
	case "spying" attend labelFunc04F0_023F:
	message("\"To think I would seek information for any reason other than to enhance myself with knowledge is more than preposterous! It is... it is... ludicrous is what it is!\"");
	say();
	UI_remove_answer("spying");
labelFunc04F0_023F:
	case "they" attend labelFunc04F0_0266:
	message("\"Why, The Fellowship, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("they");
	if (!(!var0003)) goto labelFunc04F0_0266;
	UI_add_answer("Fellowship");
labelFunc04F0_0266:
	case "lashings" attend labelFunc04F0_02A2:
	message("\"The troll beats me many times during the day. I will not be able to survive for much longer.\"");
	say();
	if (!var0001) goto labelFunc04F0_029B;
	message("*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"Come, come, Anton, surely it cannot be that terrible. After all, The Fellowship is providing us with a place to stay and more food than we could... more food... Well, they are also giving us food!\"*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_029B:
	UI_remove_answer("lashings");
labelFunc04F0_02A2:
	case "Alagner" attend labelFunc04F0_02B5:
	message("\"He is a sage who resides in New Magincia. Perhaps the most learned man in all Britannia! And now,\" he sighs, \"I will no longer have the opportunity to glean knowledge from his voluminous body of wisdom.\"");
	say();
	UI_remove_answer("Alagner");
labelFunc04F0_02B5:
	case "Fellowship" attend labelFunc04F0_02DE:
	message("\"Why, they are a wonderful group of people who are constantly seeking to bring health, happiness, and spirituality to the people of Britannia.\"");
	say();
	var0006 = UI_wearing_fellowship();
	if (!(!var0006)) goto labelFunc04F0_02D3;
	message("With his index finger, he motions you closer to him and lowers his voice.~~\"In a pig's eye, that is! I am departing this den of evil as soon as I get the chance. And I advise thee to do the same!\"");
	say();
labelFunc04F0_02D3:
	var0003 = true;
	UI_remove_answer("Fellowship");
labelFunc04F0_02DE:
	case "bye" attend labelFunc04F0_02E9:
	goto labelFunc04F0_02EC;
labelFunc04F0_02E9:
	goto labelFunc04F0_0080;
labelFunc04F0_02EC:
	endconv;
	message("\"Do not hurry too much, ");
	message(var0000);
	message(", for the world as we know it will soon be no more.\"*");
	say();
labelFunc04F0_02F7:
	if (!(event == 0x0000)) goto labelFunc04F0_0300;
	abort;
labelFunc04F0_0300:
	return;
}


