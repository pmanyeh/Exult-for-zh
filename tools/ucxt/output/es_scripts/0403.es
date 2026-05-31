#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0403 object#(0x403) ()
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

	if (!(event == 0x0001)) goto labelFunc0403_04B2;
	UI_show_npc_face(0xFFFD, 0x0000);
	var0000 = UI_is_pc_female();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFD);
	var0003 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x02EC]) goto labelFunc0403_006C;
	if (!(UI_get_timer(0x000B) < 0x0001)) goto labelFunc0403_005C;
	message("\"I am sorry, I do not join thieves.\"");
	say();
	abort;
	goto labelFunc0403_006C;
labelFunc0403_005C:
	message("\"All right, I suppose thou hast learned thy lesson. I shall rejoin.\"");
	say();
	UI_add_to_party(0xFFFD);
	gflags[0x02EC] = false;
	abort;
labelFunc0403_006C:
	if (!gflags[0x006D]) goto labelFunc0403_0079;
	UI_add_answer("Amber");
labelFunc0403_0079:
	if (!gflags[0x006E]) goto labelFunc0403_0086;
	UI_add_answer("settle down");
labelFunc0403_0086:
	if (!(var0002 in var0001)) goto labelFunc0403_0097;
	UI_add_answer("leave");
labelFunc0403_0097:
	if (!(!(var0002 in var0001))) goto labelFunc0403_00A9;
	UI_add_answer("join");
labelFunc0403_00A9:
	if (!(!gflags[0x0016])) goto labelFunc0403_00BB;
	message("Your old friend Shamino stands before you and you marvel that he has finally progressed into what some might call 'middle age'.");
	say();
	gflags[0x0016] = true;
	goto labelFunc0403_00C5;
labelFunc0403_00BB:
	message("\"Yes, ");
	message(var0003);
	message("?\" Shamino asks.");
	say();
labelFunc0403_00C5:
	converse attend labelFunc0403_04AD;
	case "name" attend labelFunc0403_00DB:
	message("Your friend looks at you like you have lost your head. \"'Tis Shamino. -Sha-mi-no-.\"");
	say();
	UI_remove_answer("name");
labelFunc0403_00DB:
	case "job" attend labelFunc0403_0106:
	message("\"I should hope 'twould be adventuring with thee! I am weary of loitering about Britain. There is much we could be accomplishing! Where hast thou been, anyway?\"");
	say();
	if (!(!gflags[0x00D5])) goto labelFunc0403_00F9;
	message("\"But please tell me what brings thee here!\"");
	say();
	UI_add_answer("murder in Trinsic");
labelFunc0403_00F9:
	UI_add_answer(["Britain", "accomplishing"]);
labelFunc0403_0106:
	case "accomplishing" attend labelFunc0403_0126:
	message("\"Well, I do not know if thou art aware, but we are having many problems with magic in general, and with the Moongates.\"");
	say();
	UI_remove_answer("accomplishing");
	UI_add_answer(["magic", "Moongates"]);
labelFunc0403_0126:
	case "Britain" attend labelFunc0403_0146:
	message("\"Yes, I have been in Britain as of late, attempting to find work. Thou dost know that adventuring comes around too infrequently. One must find -other- diversions. Which reminds me... I have thy pocketwatch.\"");
	say();
	UI_remove_answer("Britain");
	UI_add_answer(["diversions", "pocketwatch"]);
labelFunc0403_0146:
	case "pocketwatch" attend labelFunc0403_0196:
	if (!(!gflags[0x00D9])) goto labelFunc0403_0185;
	message("\"Thou didst leave it when thou didst last visit Britannia. Here\tit is.\"");
	say();
	var0004 = UI_add_party_items(0x0001, 0x009F, 0xFE99, 0xFE99, false);
	if (!var0004) goto labelFunc0403_017E;
	message("Shamino hands you the pocketwatch.");
	say();
	gflags[0x00D9] = true;
	goto labelFunc0403_0182;
labelFunc0403_017E:
	message("\"Oops. Thine hands are too full to take it. Ask me about it later.\"");
	say();
labelFunc0403_0182:
	goto labelFunc0403_018F;
labelFunc0403_0185:
	message("\"I already gave thee the pocketwatch, ");
	message(var0003);
	message(". I hope thou didst not lose it again!\"");
	say();
labelFunc0403_018F:
	UI_remove_answer("pocketwatch");
labelFunc0403_0196:
	case "diversions" attend labelFunc0403_0214:
	message("\"The usual. I do not see our old friends often, and Lord British rarely finds work for me. I certainly have no time\tfor wenching or drinking -- I have grown up a bit.\"*");
	say();
	UI_remove_answer("diversions");
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0403_0214;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Ahem, I have heard something about an actress, no?\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"What dost thou know of it?\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"");
	message(var0003);
	message(", ask him about 'Amber'.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Thou art a swine, Iolo.\"");
	say();
	UI_add_answer(["Amber", "friends", "Lord British"]);
labelFunc0403_0214:
	case "Lord British" attend labelFunc0403_0236:
	if (!(!gflags[0x0098])) goto labelFunc0403_022B;
	message("\"I suggest that thou proceed immediately to see him!\"*");
	say();
	abort;
	goto labelFunc0403_022F;
labelFunc0403_022B:
	message("\"I am glad I do not look as aged as -he- does!\"");
	say();
labelFunc0403_022F:
	UI_remove_answer("Lord British");
labelFunc0403_0236:
	case "friends" attend labelFunc0403_0256:
	message("\"Thou dost mean Iolo and Dupre, I presume?\"");
	say();
	UI_remove_answer("friends");
	UI_add_answer(["Iolo", "Dupre"]);
labelFunc0403_0256:
	case "Iolo" attend labelFunc0403_02A2:
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0403_0297;
	message("\"Dost thou mean that miserable excuse for an archer?\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Watch what thou dost say, scoundrel!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Yes, that's Iolo!\"");
	say();
	goto labelFunc0403_029B;
labelFunc0403_0297:
	message("\"Surely he is around somewhere. Where didst thou last leave him?\"");
	say();
labelFunc0403_029B:
	UI_remove_answer("Iolo");
labelFunc0403_02A2:
	case "Dupre" attend labelFunc0403_034C:
	var0006 = Func08F7(0xFFFC);
	if (!var0006) goto labelFunc0403_0333;
	message("\"Dost thou mean that incorrigible wencher and drunkard?\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Do not forget that my mere thumb can squash in thy face like a marshmallow.\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Yes, that's Dupre!\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"That's -Sir- Dupre to thee!\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Sir Dupuke? Didst thou say Sir Dupuke?\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Du-pre-!\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Pardon -me-, Sir Dupuke!\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"I'm not going to listen to this anymore.\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFFD, 0x0000);
	goto labelFunc0403_0345;
labelFunc0403_0333:
	if (!(!gflags[0x0017])) goto labelFunc0403_0341;
	message("\"I believe he is in Jhelom.\"");
	say();
	goto labelFunc0403_0345;
labelFunc0403_0341:
	message("\"He must be around somewhere!\"");
	say();
labelFunc0403_0345:
	UI_remove_answer("Dupre");
labelFunc0403_034C:
	case "join" attend labelFunc0403_03A4:
	var0007 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0403_0362:
	for (var000A in var0001 with var0008 to var0009) attend labelFunc0403_037A;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0403_0362;
labelFunc0403_037A:
	if (!(var0007 < 0x0008)) goto labelFunc0403_0392;
	message("Shamino looks relieved. \"I am -so- glad thou didst ask me that.\" He gathers his gear and prepares to follow you.");
	say();
	UI_add_to_party(0xFFFD);
	goto labelFunc0403_0396;
labelFunc0403_0392:
	message("\"Hmmm. I do not like big crowds. I shall wait until thy group is smaller before joining.\"");
	say();
labelFunc0403_0396:
	UI_add_answer("leave");
	UI_remove_answer("join");
labelFunc0403_03A4:
	case "leave" attend labelFunc0403_0404:
	message("\"Hmmm. Dost thou merely want me to wait here or dost thou want me to go home?\"");
	say();
	UI_clear_answers();
	var000B = Func090B(["wait here", "go home"]);
	if (!(var000B == "wait here")) goto labelFunc0403_03EA;
	message("\"Very well. I shall await thy return.\"*");
	say();
	UI_remove_from_party(0xFFFD);
	UI_set_schedule_type(UI_get_npc_object(0xFFFD), 0x000F);
	abort;
	goto labelFunc0403_0404;
labelFunc0403_03EA:
	message("\"I really hate to, but if thou dost insist.\" Shamino\tgrudgingly gathers his belongings.*");
	say();
	UI_remove_from_party(0xFFFD);
	UI_set_schedule_type(UI_get_npc_object(0xFFFD), 0x000B);
	abort;
labelFunc0403_0404:
	case "murder in Trinsic" attend labelFunc0403_041B:
	message("Shamino listens as you tell him the story. \"I would be honored to join and help thee in investigating this matter.\"");
	say();
	gflags[0x00D5] = true;
	UI_remove_answer("murder in Trinsic");
labelFunc0403_041B:
	case "Moongates" attend labelFunc0403_043C:
	if (!(!gflags[0x0004])) goto labelFunc0403_0431;
	message("\"I am confounded by their inability to function properly.\"");
	say();
	goto labelFunc0403_0435;
labelFunc0403_0431:
	message("\"'Tis a pity that thou art marooned here.\"");
	say();
labelFunc0403_0435:
	UI_remove_answer("Moongates");
labelFunc0403_043C:
	case "magic" attend labelFunc0403_0475:
	if (!(!gflags[0x0003])) goto labelFunc0403_0464;
	if (!(!gflags[0x006C])) goto labelFunc0403_045D;
	message("\"Magic all over Britannia seems to be disturbed. Say, dost thou remember Nicodemus in the great forest? He has gone mad and is terribly silly. Perhaps we should visit him.\"");
	say();
	gflags[0x006C] = true;
	goto labelFunc0403_0461;
labelFunc0403_045D:
	message("\"It does not work well. I do not understand it.\"");
	say();
labelFunc0403_0461:
	goto labelFunc0403_046E;
labelFunc0403_0464:
	message("\"It will probably work extremely well now, ");
	message(var0003);
	message(".\"");
	say();
labelFunc0403_046E:
	UI_remove_answer("magic");
labelFunc0403_0475:
	case "Amber" attend labelFunc0403_048C:
	message("You see a light shine in Shamino's eyes as you mention her name. He is obviously smitten.~~\"She is an actress I know.\"");
	say();
	UI_remove_answer("Amber");
	gflags[0x006B] = true;
labelFunc0403_048C:
	case "settle down" attend labelFunc0403_049F:
	message("\"That woman! She cannot understand that I must have mine adventuring! I cannot settle down. -Yet-! Soon maybe.\"~~Shamino looks concerned. \"I have grown up. A bit.\"");
	say();
	UI_remove_answer("settle down");
labelFunc0403_049F:
	case "bye" attend labelFunc0403_04AA:
	goto labelFunc0403_04AD;
labelFunc0403_04AA:
	goto labelFunc0403_00C5;
labelFunc0403_04AD:
	endconv;
	message("Shamino bows slightly.*");
	say();
labelFunc0403_04B2:
	if (!(event == 0x0000)) goto labelFunc0403_04C0;
	Func092E(0xFFFD);
labelFunc0403_04C0:
	return;
}


