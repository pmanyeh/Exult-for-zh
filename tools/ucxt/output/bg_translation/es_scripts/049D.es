#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func049D object#(0x49D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc049D_01F0;
	UI_show_npc_face(0xFF63, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!gflags[0x01D5]) goto labelFunc049D_003D;
	message("\"Get thee away! I'll hear no more of thy lies!\"*");
	say();
	abort;
labelFunc049D_003D:
	if (!(var0001 == 0x0007)) goto labelFunc049D_006B;
	var0002 = Func08FC(0xFF63, 0xFF06);
	if (!var0002) goto labelFunc049D_0060;
	message("\"I am trying to pay attention!\" he says, glaring at you.");
	say();
	goto labelFunc049D_006A;
labelFunc049D_0060:
	message("\"Sorry, ");
	message(var0000);
	message(", I cannot talk now. I must get to the Fellowship meeting!\"");
	say();
labelFunc049D_006A:
	abort;
labelFunc049D_006B:
	if (!(!gflags[0x01FE])) goto labelFunc049D_007D;
	message("You see a friendly-looking farmer.");
	say();
	gflags[0x01FE] = true;
	goto labelFunc049D_0087;
labelFunc049D_007D:
	message("\"Good day, ");
	message(var0000);
	message(".\"");
	say();
labelFunc049D_0087:
	if (!(gflags[0x01D6] && gflags[0x01FE])) goto labelFunc049D_0098;
	UI_add_answer("reconvert");
labelFunc049D_0098:
	converse attend labelFunc049D_01E5;
	case "name" attend labelFunc049D_00C1:
	message("\"I am called Tolemac, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
	if (!gflags[0x01D6]) goto labelFunc049D_00C1;
	UI_add_answer("reconvert");
labelFunc049D_00C1:
	case "job" attend labelFunc049D_00DA:
	message("\"I help my brother tend our farm here in Moonglow.\"");
	say();
	UI_add_answer(["brother", "Moonglow"]);
labelFunc049D_00DA:
	case "brother" attend labelFunc049D_00ED:
	message("\"My brother is Cubolt.\" He frowns for a moment. \"He can be a bit overbearing at times, trying to `take care' of me. But,\" he shrugs, \"he means well, perhaps. I know I've caused him a bit of trouble every now and then,\" he says with a grin, \"but he deserves it.\"");
	say();
	UI_remove_answer("brother");
labelFunc049D_00ED:
	case "Moonglow" attend labelFunc049D_010D:
	message("\"Yes, ");
	message(var0000);
	message(". That is the name of the town thou art in. Dost thou have questions about the townspeople?\"");
	say();
	UI_add_answer("townspeople");
	UI_remove_answer("Moonglow");
labelFunc049D_010D:
	case "townspeople" attend labelFunc049D_0139:
	message("\"I know only a few people here, ");
	message(var0000);
	message(". My brother, Cubolt, runs the farm with me. Morz helps us, too -- we've known him for many years. And now that I've joined The Fellowship, I've met a few more people. Rankin is branch head here in Moonglow, and Balayna is his assistant. If thou dost want to know about other people, thou mayest want to ask the bartender. His name is Phearcy.\"");
	say();
	UI_add_answer(["Morz", "Balayna", "Rankin", "Fellowship"]);
	UI_remove_answer("townspeople");
labelFunc049D_0139:
	case "Rankin" attend labelFunc049D_014C:
	message("\"Rankin is very intelligent. He is the one who persuaded me to join The Fellowship. I have much respect for him.\"");
	say();
	UI_remove_answer("Rankin");
labelFunc049D_014C:
	case "Balayna" attend labelFunc049D_015F:
	message("\"She is the branch clerk. Most of the time, she is friendly. Sometimes, however, she seems a little cold.\"");
	say();
	UI_remove_answer("Balayna");
labelFunc049D_015F:
	case "Morz" attend labelFunc049D_0179:
	message("\"Morz and I grew up together. He is very sensitive about his stutter, though, so I would not bring it up.\"");
	say();
	UI_add_answer("stutter");
	UI_remove_answer("Morz");
labelFunc049D_0179:
	case "stutter" attend labelFunc049D_018C:
	message("\"It is difficult to get him to talk about it. I think it was caused by an accident he had when he was a child. I barely remember the incident. My brother might remember more.\"");
	say();
	UI_remove_answer("stutter");
labelFunc049D_018C:
	case "Fellowship" attend labelFunc049D_01AB:
	message("\"Rankin or Balayna would be the best ones to ask, ");
	message(var0000);
	message(", but I can tell thee our main tenets.~~\"We believe strongly in neo-realism, which is a form of optimistic outlook which may be reached through the triad of inner strength.~~\"I am hoping that soon I will be able to hear the    voice that comes with meeting one's higher potential.~~\"Also, ");
	message(var0000);
	message(", The Fellowship sponsors many feasts and festivals. I strongly recommend that thou ask Rankin about joining.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc049D_01AB:
	case "reconvert" attend labelFunc049D_01D7:
	message("\"Reconvert? Why would I want to do that? Did my brother request this? He has always had a problem with letting me make mine own decisions. Nay, ");
	message(var0000);
	message(". I will not abandon my beliefs. The Fellowship has done too much for my life.\"");
	say();
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc049D_01CE;
	message("\"And to think thou art a fellow member. There is no unity in thy speech!\"");
	say();
labelFunc049D_01CE:
	message("*");
	say();
	gflags[0x01D5] = true;
	abort;
labelFunc049D_01D7:
	case "bye" attend labelFunc049D_01E2:
	goto labelFunc049D_01E5;
labelFunc049D_01E2:
	goto labelFunc049D_0098;
labelFunc049D_01E5:
	endconv;
	message("\"'Til next time, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc049D_01F0:
	if (!(event == 0x0000)) goto labelFunc049D_01FE;
	Func092E(0xFF63);
labelFunc049D_01FE:
	return;
}


