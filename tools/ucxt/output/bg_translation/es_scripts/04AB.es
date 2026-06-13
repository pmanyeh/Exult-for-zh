#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04AB object#(0x4AB) ()
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

	if (!(event == 0x0001)) goto labelFunc04AB_0340;
	UI_show_npc_face(0xFF55, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x021C]) goto labelFunc04AB_003C;
	UI_add_answer("Tobias");
labelFunc04AB_003C:
	var0002 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0002) goto labelFunc04AB_005E;
	UI_add_answer("found venom");
labelFunc04AB_005E:
	if (!(!gflags[0x0224])) goto labelFunc04AB_0070;
	message("You see a jovial young man who gives you a friendly greeting.");
	say();
	gflags[0x0224] = true;
	goto labelFunc04AB_007A;
labelFunc04AB_0070:
	message("\"A pleasant day to thee, ");
	message(var0000);
	message(",\" says Garritt.");
	say();
labelFunc04AB_007A:
	converse attend labelFunc04AB_0327;
	case "name" attend labelFunc04AB_009D:
	message("\"I am Garritt, the son of Feridwyn and Brita.\"");
	say();
	UI_add_answer(["Feridwyn", "Brita"]);
	UI_remove_answer("name");
labelFunc04AB_009D:
	case "job" attend labelFunc04AB_00B9:
	message("\"I am too young to learn a trade of mine own yet, but I do assist my parents in running the shelter. I hope to be a counselor in The Fellowship one day. Or a professional whistle panpipes player.\"");
	say();
	UI_add_answer(["shelter", "Fellowship", "panpipes"]);
labelFunc04AB_00B9:
	case "Feridwyn" attend labelFunc04AB_00DC:
	message("\"My father works for The Fellowship helping the poor people in Paws. He tries to recruit them, but most refuse.\"");
	say();
	UI_remove_answer("Feridwyn");
	UI_add_answer(["Paws", "recruit", "poor people"]);
labelFunc04AB_00DC:
	case "Paws" attend labelFunc04AB_010F:
	message("\"Actually, I do not like this town very much. The people here are all poor and the only one mine own age is Tobias.\"");
	say();
	if (!(!gflags[0x0218])) goto labelFunc04AB_00F3;
	message("\"And,\" he adds, \"there is a thief here.\"");
	say();
labelFunc04AB_00F3:
	UI_remove_answer("Paws");
	UI_add_answer("Tobias");
	if (!(!gflags[0x0218])) goto labelFunc04AB_010F;
	UI_add_answer("thief");
labelFunc04AB_010F:
	case "panpipes" attend labelFunc04AB_0122:
	message("\"I have been playing panpipes since I was little. I'm pretty good now, if I say so myself! I keep the whistle by my bed and practice every night before going to sleep!\"");
	say();
	UI_remove_answer("panpipes");
labelFunc04AB_0122:
	case "Tobias" attend labelFunc04AB_0150:
	if (!gflags[0x0218]) goto labelFunc04AB_0137;
	message("\"I may not have told the truth about Tobias stealing the venom, but I know that he is up to no good. He shall come to a bad end, just thou wait and see!\"");
	say();
	goto labelFunc04AB_0149;
labelFunc04AB_0137:
	if (!(!gflags[0x021C])) goto labelFunc04AB_0145;
	message("\"He and his mother reject The Fellowship. They are witless and stupid and I do not like them.\"");
	say();
	goto labelFunc04AB_0149;
labelFunc04AB_0145:
	message("\"I have said it a thousand times. Tobias is weak of character! He and his mother are poor because they are lazy. Now I am proven right because Tobias is a thief. A thief who has been caught!\"");
	say();
labelFunc04AB_0149:
	UI_remove_answer("Tobias");
labelFunc04AB_0150:
	case "recruit" attend labelFunc04AB_0163:
	message("\"My father was once the head recruiter in Britain until they moved him here. I once heard him talking to mother about how The Fellowship was wasting its time here.\"");
	say();
	UI_remove_answer("recruit");
labelFunc04AB_0163:
	case "poor people" attend labelFunc04AB_017D:
	message("\"My father says that the poor people reject The Fellowship because the Triad of Inner Strength requires strength of character.\"");
	say();
	UI_remove_answer("poor people");
	UI_add_answer("character");
labelFunc04AB_017D:
	case "character" attend labelFunc04AB_01B4:
	message("\"My father says the poor are weak of character and that is why they are poor. They do not have to be. They are just too lazy to work. Dost thou agree?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04AB_019C;
	message("\"I was not so sure, but since that is what my father says, it must be true.\"");
	say();
	goto labelFunc04AB_01AD;
labelFunc04AB_019C:
	if (!var0001) goto labelFunc04AB_01A9;
	message("\"Hmpf. For a Fellowship member, thou dost lack recognition. Thou dost not understand the teachings of The Fellowship.\"");
	say();
	goto labelFunc04AB_01AD;
labelFunc04AB_01A9:
	message("\"Then thou must be a person of weak character, also.\"");
	say();
labelFunc04AB_01AD:
	UI_remove_answer("character");
labelFunc04AB_01B4:
	case "Brita" attend labelFunc04AB_01C7:
	message("\"Oh, she is just my mother. She does whatever my father doth tell her to do.\"");
	say();
	UI_remove_answer("Brita");
labelFunc04AB_01C7:
	case "shelter" attend labelFunc04AB_01DA:
	message("\"Plenty of beds are available if thou wouldst like to stay in the shelter,\" he says with a condescending tone.");
	say();
	UI_remove_answer("shelter");
labelFunc04AB_01DA:
	case "Fellowship" attend labelFunc04AB_0204:
	if (!var0001) goto labelFunc04AB_01EF;
	message("\"I am a member and I am proud to say I recruit for them as well.\"");
	say();
	goto labelFunc04AB_01FD;
labelFunc04AB_01EF:
	message("\"Oh, I can tell thee all thou dost need to know about us!\"");
	say();
	Func0919();
	UI_add_answer("philosophy");
labelFunc04AB_01FD:
	UI_remove_answer("Fellowship");
labelFunc04AB_0204:
	case "philosophy" attend labelFunc04AB_0232:
	message("\"I am also quite knowledgeable when it comes to our philosophy. We follow the Triad of Inner Strength and do let personal failures get in our way or slow us down.\"");
	say();
	message("\"Dost thou want to join?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04AB_0227;
	message("\"I got another one!\" he says gleefully. \"Thou must speak with my father right away!\"");
	say();
	goto labelFunc04AB_022B;
labelFunc04AB_0227:
	message("\"Contemplate it for the nonce, then.\"");
	say();
labelFunc04AB_022B:
	UI_remove_answer("philosophy");
labelFunc04AB_0232:
	case "found venom" attend labelFunc04AB_025C:
	Func0911(0x0096);
	message("\"Thou hast found me out! Yes, it was I who planted the venom on Tobias. He did deserve it! I beg thee, please do not tell my parents!\"");
	say();
	gflags[0x0218] = true;
	UI_add_answer(["planted", "parents"]);
	UI_remove_answer("found venom");
labelFunc04AB_025C:
	case "planted" attend labelFunc04AB_0276:
	message("\"I stole the venom from Morfin so I could put the blame on Tobias.\"");
	say();
	UI_add_answer("Morfin");
	UI_remove_answer("planted");
labelFunc04AB_0276:
	case "Morfin" attend labelFunc04AB_029A:
	message("\"I do not know why Morfin has it or what he does with it. I only knew that it was valuable and that it would cause everyone worry if it were stolen.\"");
	say();
	message("Garritt does not meet your eyes. You instinctively know he is not telling the truth and may very well be using the venom.");
	say();
	UI_remove_answer("Morfin");
	UI_add_answer(["worry", "using venom?"]);
labelFunc04AB_029A:
	case "using venom?" attend labelFunc04AB_02AD:
	message("Garritt shuffles his feet and frowns. \"Well... I tried it just once. I am sorry. I will never use it again.\"");
	say();
	UI_remove_answer("using venom?");
labelFunc04AB_02AD:
	case "worry" attend labelFunc04AB_02C0:
	message("\"I thought that if Tobias were accused of stealing something that everyone would notice, his mother would join The Fellowship and force him to join, too. It would improve their lives and force them to see the truth about themselves.\"");
	say();
	UI_remove_answer("worry");
labelFunc04AB_02C0:
	case "parents" attend labelFunc04AB_0302:
	message("\"Wilt thou tell my parents?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc04AB_02F3;
	if (!var0001) goto labelFunc04AB_02EC;
	message("\"But I, like thee, am a member of The Fellowship. Thou must stand in unity with me for what I tried to do!\"");
	say();
	UI_remove_answer("parents");
	goto labelFunc04AB_02F0;
labelFunc04AB_02EC:
	message("\"Thou art weak of character! Or otherwise thou wouldst understand what I tried to do!\"");
	say();
labelFunc04AB_02F0:
	goto labelFunc04AB_02FB;
labelFunc04AB_02F3:
	message("\"I thank thee most enthusiastically! It will be our little secret then.\"");
	say();
	gflags[0x0219] = true;
labelFunc04AB_02FB:
	UI_remove_answer("parents");
labelFunc04AB_0302:
	case "thief" attend labelFunc04AB_0319:
	message("\"There is a thief in this town! Our merchant Morfin had some valuable silver serpent venom stolen from him. The culprit is still free. So be wary!\"");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("thief");
labelFunc04AB_0319:
	case "bye" attend labelFunc04AB_0324:
	goto labelFunc04AB_0327;
labelFunc04AB_0324:
	goto labelFunc04AB_007A;
labelFunc04AB_0327:
	endconv;
	message("\"Goodbye, then.\"*");
	say();
	if (!gflags[0x0218]) goto labelFunc04AB_0340;
	UI_set_schedule_type(UI_get_npc_object(0xFF55), 0x000B);
labelFunc04AB_0340:
	if (!(event == 0x0000)) goto labelFunc04AB_03C0;
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFF55));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x0019)) goto labelFunc04AB_03BA;
	if (!(var0007 == 0x0001)) goto labelFunc04AB_037D;
	var0008 = "@Nyah nyah!@";
labelFunc04AB_037D:
	if (!(var0007 == 0x0002)) goto labelFunc04AB_038D;
	var0008 = "@Cannot catch me!@";
labelFunc04AB_038D:
	if (!(var0007 == 0x0003)) goto labelFunc04AB_039D;
	var0008 = "@Catch me if thou can!@";
labelFunc04AB_039D:
	if (!(var0007 == 0x0004)) goto labelFunc04AB_03AD;
	var0008 = "@Tag! Thou art it!@";
labelFunc04AB_03AD:
	UI_item_say(0xFF55, var0008);
	goto labelFunc04AB_03C0;
labelFunc04AB_03BA:
	Func092E(0xFF55);
labelFunc04AB_03C0:
	return;
}


