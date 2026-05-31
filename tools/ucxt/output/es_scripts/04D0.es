#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func04D0 object#(0x4D0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04D0_0185;
	UI_show_npc_face(0xFF30, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x028D])) goto labelFunc04D0_003A;
	message("The man before you narrows his eyes to slits as he sees you.");
	say();
	gflags[0x028D] = true;
	goto labelFunc04D0_0050;
labelFunc04D0_003A:
	message("Blorn sighs heavily. \"Why dost thou bother me now?\"");
	say();
	if (!(gflags[0x0283] && (!gflags[0x0280]))) goto labelFunc04D0_0050;
	UI_add_answer("gargoyles");
labelFunc04D0_0050:
	if (!gflags[0x0281]) goto labelFunc04D0_005E;
	gflags[0x0282] = false;
	gflags[0x0299] = false;
labelFunc04D0_005E:
	if (!gflags[0x0282]) goto labelFunc04D0_006E;
	UI_add_answer("return amulet");
	goto labelFunc04D0_007B;
labelFunc04D0_006E:
	if (!gflags[0x0299]) goto labelFunc04D0_007B;
	UI_add_answer("Lap-Lem");
labelFunc04D0_007B:
	converse attend labelFunc04D0_0180;
	case "name" attend labelFunc04D0_00A3:
	message("\"Blorn, if thou must know.\"");
	say();
	UI_remove_answer("name");
	if (!(gflags[0x0283] && (!gflags[0x0280]))) goto labelFunc04D0_00A3;
	UI_add_answer("gargoyles");
labelFunc04D0_00A3:
	case "job" attend labelFunc04D0_00AF:
	message("\"I don't believe I wish to tell thee.\"");
	say();
labelFunc04D0_00AF:
	case "gargoyles" attend labelFunc04D0_010B:
	message("A growl escapes his throat.~~\"What about the bloody gargoyles? Don't tell me thou art a gargoyle lover.\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04D0_00CF;
	message("\"Thou art disgusting, swine!\" He spits on your boot.*");
	say();
	abort;
	goto labelFunc04D0_0104;
labelFunc04D0_00CF:
	message("\"That is good, my friend.\"~~A sudden inspiration seems to flash across his face.~~\"Perhaps thou canst help me. As thou undoubtedly knowest, I was set upon by a cruel gargoyle not too long ago. He nearly took my life!~~\"'Twould be a great honor, ");
	message(var0000);
	message(", if thou wouldst agree to avenge me! Art thou willing?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04D0_00F6;
	message("\"I thank thee, ");
	message(var0000);
	message(", thank thee. But I must warn thee, he is a very violent gargoyle. His name is Lap-Lem, which means `man slayer.' And, do not mention my name, for he hates me more than any other human and would surely attack thee without provocation if my name were to be mentioned.\"");
	say();
	gflags[0x0299] = true;
	goto labelFunc04D0_0100;
labelFunc04D0_00F6:
	message("\"Fine, ");
	message(var0000);
	message(". Thou art nothing more than a coward.\" He shakes his head.");
	say();
labelFunc04D0_0100:
	gflags[0x0280] = true;
labelFunc04D0_0104:
	UI_remove_answer("gargoyles");
labelFunc04D0_010B:
	case "return amulet" attend labelFunc04D0_0148:
	message("He glares at you for a moment, then shrugs, muttering, \"It's not like he earned it honestly or anything...\"");
	say();
	var0003 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0003, true);
	if (!var0003) goto labelFunc04D0_013C;
	message("\"Here! I hope it strangles him!\" He thrusts the amulet into your palm. \"And I hope he bloody strangles thee, too!\"");
	say();
	gflags[0x0281] = true;
	goto labelFunc04D0_0141;
labelFunc04D0_013C:
	message("\"Thou dost not even have room for it! Get thee away, thou son of a jackal!\"*");
	say();
	abort;
labelFunc04D0_0141:
	UI_remove_answer("return amulet");
labelFunc04D0_0148:
	case "Lap-Lem" attend labelFunc04D0_0172:
	message("\"Thou hast killed the jackal?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04D0_0167;
	message("\"Wonderful! Thou art truly a trusted friend. I thank thee for thine assistance!\" He grins at you.");
	say();
	goto labelFunc04D0_016B;
labelFunc04D0_0167:
	message("\"Well, I am sure thou wilt have time soon enough, for he will surely head this way to attack me again.\"");
	say();
labelFunc04D0_016B:
	UI_remove_answer("Lap-Lem");
labelFunc04D0_0172:
	case "bye" attend labelFunc04D0_017D:
	goto labelFunc04D0_0180;
labelFunc04D0_017D:
	goto labelFunc04D0_007B;
labelFunc04D0_0180:
	endconv;
	message("He gives a slight nod and a quiet grunt, and returns to his business.*");
	say();
labelFunc04D0_0185:
	if (!(event == 0x0000)) goto labelFunc04D0_018E;
	abort;
labelFunc04D0_018E:
	return;
}


