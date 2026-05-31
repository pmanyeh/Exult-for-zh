#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func04C1 object#(0x4C1) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04C1_01CF;
	UI_show_npc_face(0xFF3F, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x026A])) goto labelFunc04C1_003E;
	message("You are greeted with a stern look on this man's face.");
	say();
	gflags[0x026A] = true;
	goto labelFunc04C1_0048;
labelFunc04C1_003E:
	message("\"^");
	message(var0000);
	message(".\" He nods at you.");
	say();
labelFunc04C1_0048:
	if (!(gflags[0x025E] && (!gflags[0x0276]))) goto labelFunc04C1_005A;
	UI_add_answer("statue");
labelFunc04C1_005A:
	converse attend labelFunc04C1_01C4;
	case "name" attend labelFunc04C1_0070:
	message("\"Thou mayest call me Sir Pendaran.\"");
	say();
	UI_remove_answer("name");
labelFunc04C1_0070:
	case "job" attend labelFunc04C1_0089:
	message("\"I am a knight here in Serpent's Hold. 'Tis my job to help protect the citizens of Britannia.\"");
	say();
	UI_add_answer(["protect", "Serpent's Hold"]);
labelFunc04C1_0089:
	case "protect" attend labelFunc04C1_00AF:
	message("\"Aye, ");
	message(var0000);
	message(". Britannia can be a dangerous place outside town boundaries. Especially now that the ruling faction have gone soft!\"");
	say();
	UI_remove_answer("protect");
	UI_add_answer(["ruling faction", "soft"]);
labelFunc04C1_00AF:
	case "ruling faction" attend labelFunc04C1_00C2:
	message("\"Well, I mean Lord British and his advisors.\"");
	say();
	UI_remove_answer("ruling faction");
labelFunc04C1_00C2:
	case "soft", "worthless" attend labelFunc04C1_00E9:
	message("\"Though I'd follow the land's ideals to the ends of the land, I find it difficult to accept how poor the conditions are in Britannia. Brigands populate the land, disease overruns the towns, and corruption fills the councils. Were it not for The Fellowship, I would be hard pressed to avoid falling on mine own blade, despite how dishonorable an act that may seem.\"");
	say();
	var0001 = true;
	UI_remove_answer(["soft", "worthless"]);
	UI_add_answer("Fellowship");
labelFunc04C1_00E9:
	case "Fellowship" attend labelFunc04C1_0102:
	message("\"A noble group of people who strive to instill a greater sense of spiritual knowledge throughout all of Britannia. 'Twill be but a matter of time, ");
	message(var0000);
	message(", before all people will see the wisdom.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc04C1_0102:
	case "Serpent's Hold" attend labelFunc04C1_011C:
	message("\"I live here in the hold with my lady.\"");
	say();
	UI_add_answer("lady");
	UI_remove_answer("Serpent's Hold");
labelFunc04C1_011C:
	case "lady" attend labelFunc04C1_0135:
	message("\"Her name is Jehanne, ");
	message(var0000);
	message(",\" he says suspiciously. \"She is the provisioner.\"");
	say();
	UI_remove_answer("lady");
labelFunc04C1_0135:
	case "statue" attend labelFunc04C1_015B:
	message("\"Terrible shame, ");
	message(var0000);
	message(".\" He eyes you coldly.");
	say();
	if (!gflags[0x025D]) goto labelFunc04C1_0154;
	UI_add_answer("Thou didst do it!");
labelFunc04C1_0154:
	UI_remove_answer("statue");
labelFunc04C1_015B:
	case "Thou didst do it!" attend labelFunc04C1_0175:
	message("\"What! Thou art accusing me! Preposterous. I had nothing to do with it!\"");
	say();
	UI_remove_answer("Thou didst do it!");
	UI_add_answer("Lady Jehanne");
labelFunc04C1_0175:
	case "Lady Jehanne" attend labelFunc04C1_0196:
	gflags[0x0276] = true;
	message("He shakes his head.~~\"Thou wouldst take the word of a woman over that of a knight of the Hold? Thou art lower than a worm!\" He glares at you for a moment, and then his expression changes.~~\"All right,\" he says, \"I am the one\twho defaced the statue, but only because the government has become so worthless and soft!\" He quickly turns away from\tyou, ashamed.~~\"If thou dost think it best,\" he sighs, \"tomorrow I shall beg forgiveness from my fellow knights.\"");
	say();
	UI_push_answers();
	UI_add_answer(["'tis best", "no need"]);
labelFunc04C1_0196:
	case "'tis best" attend labelFunc04C1_01A3:
	message("Nodding his agreement, he sighs again, and turns away.*");
	say();
	abort;
labelFunc04C1_01A3:
	case "no need" attend labelFunc04C1_01B6:
	message("\"No, no, ");
	message(var0000);
	message(". Thou hast shown me the way. I must repent.\" He turns away from you to reflect on his decision.*");
	say();
	abort;
labelFunc04C1_01B6:
	case "bye" attend labelFunc04C1_01C1:
	goto labelFunc04C1_01C4;
labelFunc04C1_01C1:
	goto labelFunc04C1_005A;
labelFunc04C1_01C4:
	endconv;
	message("\"Good day to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04C1_01CF:
	if (!(event == 0x0000)) goto labelFunc04C1_01DD;
	Func092E(0xFF3F);
labelFunc04C1_01DD:
	return;
}


