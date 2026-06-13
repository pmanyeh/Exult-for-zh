#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0404 object#(0x404) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;

	if (!(event == 0x0001)) goto labelFunc0404_0508;
	UI_show_npc_face(0xFFFC, 0x0000);
	if (!gflags[0x02EB]) goto labelFunc0404_003E;
	if (!(UI_get_timer(0x000B) < 0x0001)) goto labelFunc0404_002E;
	message("\"I am sorry, I do not join thieves.\"");
	say();
	abort;
	goto labelFunc0404_003E;
labelFunc0404_002E:
	message("\"All right, I suppose thou hast learned thy lesson. I shall rejoin.\"");
	say();
	UI_add_to_party(0xFFFC);
	gflags[0x02EB] = false;
	abort;
labelFunc0404_003E:
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFC);
	var0003 = Func0908();
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFD);
	var0006 = Func08F7(0xFFFE);
	var0007 = UI_is_dead(UI_get_npc_object(0xFFFF));
	var0008 = UI_is_dead(UI_get_npc_object(0xFFFD));
	var0009 = UI_is_dead(UI_get_npc_object(0xFFFE));
	var000A = UI_is_dead(UI_get_npc_object(0xFF84));
	var000B = UI_is_dead(UI_get_npc_object(0xFF83));
	var000C = UI_is_dead(UI_get_npc_object(0xFF82));
	var000D = UI_is_dead(UI_get_npc_object(0xFF81));
	var000E = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!(var0002 in var0001)) goto labelFunc0404_0100;
	UI_add_answer("leave");
labelFunc0404_0100:
	if (!gflags[0x0006]) goto labelFunc0404_010D;
	UI_add_answer("Fellowship");
labelFunc0404_010D:
	if (!var0006) goto labelFunc0404_011A;
	UI_add_answer("Spark");
labelFunc0404_011A:
	if (!(!gflags[0x0017])) goto labelFunc0404_012C;
	message("You see the familiar face of your good friend, Dupre. While somewhat older, he still seems full of his usual casual good humor.");
	say();
	gflags[0x0017] = true;
	goto labelFunc0404_0136;
labelFunc0404_012C:
	message("\"How may I assist thee, ");
	message(var0003);
	message("?\" asks Sir Dupre.");
	say();
labelFunc0404_0136:
	converse attend labelFunc0404_0503;
	case "name" attend labelFunc0404_01A7:
	message("\"Why, dost thou not recognize me? It is I, Lord British!\" he laughs. \"Dost thou not know thy friend Dupre when thou seest him, ");
	message(var0003);
	message("?\"");
	say();
	if (!var0005) goto labelFunc0404_0177;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Do not be so modest, Sir Dupre. Thou shouldst tell the Avatar that thou hast been knighted since last you met.\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Sir Dupre looks quite embarrassed. \"Well, yes, I would have gotten around to that.\"");
	say();
	goto labelFunc0404_01A0;
labelFunc0404_0177:
	if (!var0004) goto labelFunc0404_01A0;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Do not be so modest, Sir Dupre. Thou shouldst tell the Avatar that thou hast been knighted since last you met.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Sir Dupre looks quite embarrassed. \"Well, yes, I would have gotten around to that.\"");
	say();
labelFunc0404_01A0:
	UI_remove_answer("name");
labelFunc0404_01A7:
	case "job" attend labelFunc0404_01DE:
	if (!(!gflags[0x016D])) goto labelFunc0404_01D3;
	message("\"I have not seen our old friends in some time. Currently I am conducting a study of all of the various drinking establishments of Britannia. At present I am about halfway through. But it is nothing that could keep me from adventuring with thee, ");
	message(var0003);
	message(".\"");
	say();
	UI_add_answer(["friends", "Jhelom", "join"]);
	goto labelFunc0404_01DE;
labelFunc0404_01D3:
	message("\"My job is currently to try and keep thee and thy friends out of trouble as much as possible!\" He winks and gives you a good-natured grin.");
	say();
	UI_add_answer("friends");
labelFunc0404_01DE:
	case "friends" attend labelFunc0404_01FE:
	message("\"Our old friends -- Iolo and Shamino.\"");
	say();
	UI_remove_answer("friends");
	UI_add_answer(["Iolo", "Shamino"]);
labelFunc0404_01FE:
	case "join" attend labelFunc0404_025A:
	var000F = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0404_0214:
	for (var0012 in var0001 with var0010 to var0011) attend labelFunc0404_022C;
	var000F = (var000F + 0x0001);
	goto labelFunc0404_0214;
labelFunc0404_022C:
	if (!(var000F < 0x0008)) goto labelFunc0404_024F;
	message("\"It would be both an honor and a pleasure to join thee on thine adventures once again.\"");
	say();
	gflags[0x016D] = true;
	UI_add_to_party(0xFFFC);
	UI_add_answer("leave");
	goto labelFunc0404_0253;
labelFunc0404_024F:
	message("\"Hmm. Too crowded for my liking. Come back if thou shouldst diminish thy group by a member or two.\"");
	say();
labelFunc0404_0253:
	UI_remove_answer("join");
labelFunc0404_025A:
	case "leave" attend labelFunc0404_02D0:
	message("\"Dost thou want me to wait here or dost thou truly want me to leave and go home?\"");
	say();
	UI_clear_answers();
	var0013 = Func090B(["wait here", "go home"]);
	if (!(var0013 == "wait here")) goto labelFunc0404_02A4;
	message("\"Very well. I shall await thy return.\"*");
	say();
	UI_remove_from_party(0xFFFC);
	UI_set_schedule_type(UI_get_npc_object(0xFFFC), 0x000F);
	gflags[0x016D] = false;
	abort;
	goto labelFunc0404_02D0;
labelFunc0404_02A4:
	message("\"I shall depart thy company if that is truly thy wish. If thou shouldst ever need me again, thou hast only to ask.\" He turns away from you, obviously disappointed.*");
	say();
	UI_remove_from_party(0xFFFC);
	gflags[0x016D] = false;
	UI_set_schedule_type(UI_get_npc_object(0xFFFC), 0x000B);
	abort;
	UI_add_answer("join");
	UI_remove_answer("leave");
labelFunc0404_02D0:
	case "Jhelom" attend labelFunc0404_02F0:
	message("\"It is something like the old times of Britannia, during the days of thy last visit, only more bloodthirsty. The local sport in Jhelom is duelling.\"");
	say();
	UI_remove_answer("Jhelom");
	UI_add_answer(["old times", "duelling"]);
labelFunc0404_02F0:
	case "old times" attend labelFunc0404_0303:
	message("\"These people still believe that any problem can be solved by hitting something or stabbing someone. They remind me of a more primitive but less complicated time. Perhaps that is why people live here-- to escape their modern problems.\"");
	say();
	UI_remove_answer("old times");
labelFunc0404_0303:
	case "duelling" attend labelFunc0404_0347:
	if (!(!gflags[0x016A])) goto labelFunc0404_033C;
	if (!(!(var000B && (var000C && var000D)))) goto labelFunc0404_0335;
	message("\"Right now the town is buzzing about three local fighters, all of whom have challenged another man to a duel. The challenged one's name is Sprellic.\"");
	say();
	UI_add_answer(["fighters", "Sprellic"]);
	goto labelFunc0404_0339;
labelFunc0404_0335:
	message("\"Perhaps now that several of Jhelom's local ruffians have been well smited things in that town will calm down. Although I doubt they will for long.\"");
	say();
labelFunc0404_0339:
	goto labelFunc0404_0340;
labelFunc0404_033C:
	message("\"Perhaps since thou hast shown the town that disagreements can be settled without bloodshed things will calm down for a while in Jhelom. But I doubt it.\"");
	say();
labelFunc0404_0340:
	UI_remove_answer("duelling");
labelFunc0404_0347:
	case "Sprellic" attend labelFunc0404_0391:
	if (!var000A) goto labelFunc0404_035C;
	message("\"I feel a bit sorry that we never did intercede on behalf of that innkeeper fellow, Sprellic. He did need our help, desperately.\" Dupre eyes look a bit sad.");
	say();
	goto labelFunc0404_038A;
labelFunc0404_035C:
	if (!(!gflags[0x016A])) goto labelFunc0404_038A;
	if (!(!(var000B && (var000C && var000D)))) goto labelFunc0404_0386;
	message("\"I doubt he has ever held a sword in his life. When I bet I usually bet on the underdog, but not even I am so foolhardy with my money as to bet on him. The man is no fighter, he is the innkeeper!\"");
	say();
	UI_add_answer(["foolhardy", "innkeeper"]);
	goto labelFunc0404_038A;
labelFunc0404_0386:
	message("\"Thou didst save the life of that poor little man Sprellic. He certainly got himself in a lot of trouble.\" Dupre cannot keep himself from grinning. \"Still, all's well that ends well.\"");
	say();
labelFunc0404_038A:
	UI_remove_answer("Sprellic");
labelFunc0404_0391:
	case "foolhardy" attend labelFunc0404_03B1:
	message("\"To this Sprellic fellow, foolhardy would be a compliment! He looks like he has never been in a fight in his entire life. I do not know why he would provoke someone into a duel. It is a puzzlement.\"");
	say();
	UI_remove_answer("foolhardy");
	if (!gflags[0x0186]) goto labelFunc0404_03B1;
	UI_add_answer("misunderstanding");
labelFunc0404_03B1:
	case "misunderstanding" attend labelFunc0404_03C4:
	message("You tell Dupre what Sprellic told you. \"Hmmm. I suppose I judged the man too harshly. I think thou, er, we shouldst do something about this!\"");
	say();
	UI_remove_answer("misunderstanding");
labelFunc0404_03C4:
	case "innkeeper" attend labelFunc0404_03E5:
	if (!(!gflags[0x0186])) goto labelFunc0404_03DA;
	message("\"I know not the specifics of his story but thou mayest ask him for thyself. He went back to his house about an hour ago and has not come out. He must be having a very hard time finding something.\"");
	say();
	goto labelFunc0404_03DE;
labelFunc0404_03DA:
	message("\"The poor man has been hiding in his house and will not come out.\"");
	say();
labelFunc0404_03DE:
	UI_remove_answer("innkeeper");
labelFunc0404_03E5:
	case "Iolo" attend labelFunc0404_0445:
	if (!var0007) goto labelFunc0404_03FA;
	message("\"Terrible what happened to our poor friend Iolo. We must try and get his body to a healer while there may still be time to revive him. I do miss him so.\"");
	say();
	goto labelFunc0404_043E;
labelFunc0404_03FA:
	if (!var0004) goto labelFunc0404_043A;
	message("\"");
	message(var0003);
	message(", there is a strange old man following thee, and he bears a vague resemblance to Iolo! It is most odd.\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Thy drinking must have blurred thy vision, Sir Dupre.\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Then thou hadst better join me for one later. It will give thee the chance to catch up to me.\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFC, 0x0000);
	goto labelFunc0404_043E;
labelFunc0404_043A:
	message("\"We should find that rascal Iolo and have him join us as well.\"");
	say();
labelFunc0404_043E:
	UI_remove_answer("Iolo");
labelFunc0404_0445:
	case "fighters" attend labelFunc0404_0458:
	message("\"Two men and a woman. Their names are Timmons, Vokes, and Syria. Respectively.\"");
	say();
	UI_remove_answer("fighters");
labelFunc0404_0458:
	case "Shamino" attend labelFunc0404_04B2:
	if (!var0008) goto labelFunc0404_046D;
	message("\"A sad fate to befall our fine comrade Shamino. He will be sorely missed. We must try and get his remains to a healer. Perhaps he may still be revived.\"");
	say();
	goto labelFunc0404_04AB;
labelFunc0404_046D:
	if (!var0005) goto labelFunc0404_04A7;
	message("Sir Dupre snorts, \"From what I had heard Shamino was all but settled down and retired from the adventuring life.\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"I still have a few wild oats left to sow, thank thee very much.\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Then it is good to see another member of our old sowing circle once again!\"");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	goto labelFunc0404_04AB;
labelFunc0404_04A7:
	message("\"Let us go and find Shamino and make this a proper reunion!\"");
	say();
labelFunc0404_04AB:
	UI_remove_answer("Shamino");
labelFunc0404_04B2:
	case "Fellowship" attend labelFunc0404_04CF:
	if (!var000E) goto labelFunc0404_04C4;
	message("Sir Dupre stares at the Fellowship medallion around your neck for a long moment. \"Thou must be joking,\" he snorts.");
	say();
labelFunc0404_04C4:
	message("\"I still cannot believe that thou hast joined The Fellowship. If thou didst wish to prove that thou wouldst do anything, no matter how ridiculous to fulfill thy quest, then thou hast succeeded.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0404_04CF:
	case "Spark" attend labelFunc0404_04F5:
	if (!var0009) goto labelFunc0404_04E4;
	message("\"Spark, the poor brave lad, is no longer with us. We should endeavor to get his body to a healer so he may be revived.\"");
	say();
	goto labelFunc0404_04EE;
labelFunc0404_04E4:
	message("Dupre points a thumb at Spark. \"He is joining us, as well?\" He mutters at you, \"Art thou trying to make me feel old, ");
	message(var0003);
	message("?\"");
	say();
labelFunc0404_04EE:
	UI_remove_answer("Spark");
labelFunc0404_04F5:
	case "bye" attend labelFunc0404_0500:
	goto labelFunc0404_0503;
labelFunc0404_0500:
	goto labelFunc0404_0136;
labelFunc0404_0503:
	endconv;
	message("\"I shall speak with thee later, then.\"*");
	say();
labelFunc0404_0508:
	if (!(event == 0x0000)) goto labelFunc0404_0516;
	Func092E(0xFFFC);
labelFunc0404_0516:
	return;
}


