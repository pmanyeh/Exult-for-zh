#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0408 object#(0x408) ()
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

	if (!(event == 0x0001)) goto labelFunc0408_0482;
	UI_show_npc_face(0xFFF8, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFF8);
	var0003 = Func0908();
	var0004 = Func08F7(0xFFFE);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x010B]) goto labelFunc0408_0055;
	UI_add_answer("plans");
labelFunc0408_0055:
	if (!var0004) goto labelFunc0408_0069;
	if (!(!gflags[0x0121])) goto labelFunc0408_0069;
	UI_add_answer("Spark");
labelFunc0408_0069:
	if (!(var0002 in var0001)) goto labelFunc0408_007A;
	UI_add_answer("leave");
labelFunc0408_007A:
	if (!gflags[0x0101]) goto labelFunc0408_0087;
	UI_add_answer("join");
labelFunc0408_0087:
	if (!(!gflags[0x001B])) goto labelFunc0408_0099;
	message("You see Julia, a member of your party of adventurers from one of your previous visits to Britannia.");
	say();
	gflags[0x001B] = true;
	goto labelFunc0408_00A3;
labelFunc0408_0099:
	message("\"It is good to speak with thee again, ");
	message(var0003);
	message(",\" Julia greets you.");
	say();
labelFunc0408_00A3:
	converse attend labelFunc0408_0477;
	case "name" attend labelFunc0408_00BF:
	message("\"Has it really been that long, ");
	message(var0003);
	message("? 'Tis I, Julia!\"");
	say();
	UI_remove_answer("name");
labelFunc0408_00BF:
	case "job" attend labelFunc0408_010E:
	if (!gflags[0x011F]) goto labelFunc0408_00F3;
	message("\"Since accompanying thee on thine adventures when thou wast last in Britannia, I have become the tinker of Minoc. I repair things for the people of the town. But my duties and obligations are not so pressing as to prevent me from joining thee again shouldst thou wish it. After all, when thou art in Britannia, thou hast usually come to repair very important things and help put the world to rights.\"");
	say();
	UI_add_answer(["tinker", "Minoc"]);
	if (!(!(var0002 in var0001))) goto labelFunc0408_00F0;
	UI_add_answer("join");
labelFunc0408_00F0:
	goto labelFunc0408_010E;
labelFunc0408_00F3:
	message("\"Now is not the proper time for a joyous reunion, ");
	message(var0003);
	message(". This town has been touched by a mysterious evil. There have been murders committed in Minoc.\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer(["murders", "Minoc"]);
labelFunc0408_010E:
	case "tinker" attend labelFunc0408_0121:
	message("\"It is not really what I wish to do with the rest of my life. I do not have the patience to be a proper tinkerer. If thou didst ask me, I would say I have sacrificed enough!\"");
	say();
	UI_remove_answer("tinker");
labelFunc0408_0121:
	case "join" attend labelFunc0408_019D:
	var0005 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0408_0137:
	for (var0008 in var0001 with var0006 to var0007) attend labelFunc0408_014F;
	var0005 = (var0005 + 0x0001);
	goto labelFunc0408_0137;
labelFunc0408_014F:
	if (!(var0005 < 0x0006)) goto labelFunc0408_0192;
	if (!gflags[0x0101]) goto labelFunc0408_0166;
	message("\"Well... All right. But I did not like thee telling me to leave!\"");
	say();
	goto labelFunc0408_016A;
labelFunc0408_0166:
	message("\"Aye! It would be my pleasure!\"");
	say();
labelFunc0408_016A:
	gflags[0x0108] = true;
	UI_add_to_party(0xFFF8);
	UI_add_answer(["Iolo", "Shamino", "Dupre", "leave"]);
	UI_remove_answer("join");
	goto labelFunc0408_0196;
labelFunc0408_0192:
	message("\"I believe thou hast enough travellers for one group.\"");
	say();
labelFunc0408_0196:
	UI_remove_answer("join");
labelFunc0408_019D:
	case "leave" attend labelFunc0408_0225:
	message("\"Art thou sure thou dost want me to leave?\"");
	say();
	if (!Func090A()) goto labelFunc0408_021A;
	message("\"Dost thou want me to wait here or should I go home?\"");
	say();
	UI_clear_answers();
	var0009 = Func090B(["wait here", "go home"]);
	if (!(var0009 == "wait here")) goto labelFunc0408_01F5;
	message("\"Very well. I shall wait here until thou dost return.\"*");
	say();
	gflags[0x0101] = true;
	gflags[0x0108] = false;
	UI_remove_from_party(0xFFF8);
	UI_set_schedule_type(UI_get_npc_object(0xFFF8), 0x000F);
	abort;
	goto labelFunc0408_0217;
labelFunc0408_01F5:
	message("\"Well! Fine, if that is thy wish, I shall leave!\"*");
	say();
	gflags[0x0101] = true;
	gflags[0x0108] = false;
	UI_remove_from_party(0xFFF8);
	UI_set_schedule_type(UI_get_npc_object(0xFFF8), 0x000B);
	abort;
labelFunc0408_0217:
	goto labelFunc0408_021E;
labelFunc0408_021A:
	message("\"Then I shall stay.\"");
	say();
labelFunc0408_021E:
	UI_remove_answer("leave");
labelFunc0408_0225:
	case "Minoc" attend labelFunc0408_0245:
	message("\"'Tis a terrible thing to be happening in our town, these murders. Minoc was once a safe and quiet place.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["safe and quiet", "murders"]);
labelFunc0408_0245:
	case "safe and quiet" attend labelFunc0408_0265:
	message("\"Well, at least safe, if not necessarily quiet. Especially with all the commotion caused by Owen and his monument.\"");
	say();
	UI_remove_answer("safe and quiet");
	UI_add_answer(["Owen", "monument"]);
labelFunc0408_0265:
	case "Owen" attend labelFunc0408_0278:
	message("\"Owen is our local shipwright. Frankly, I think he is something of a fool.\"");
	say();
	UI_remove_answer("Owen");
labelFunc0408_0278:
	case "monument" attend labelFunc0408_0295:
	message("\"The Fellowship wanted to build a statue of Owen. That way they can use him as an example of the success of the Fellowship philosophy. It would also increase Owen's business to the point of upsetting the local economy and driving the Artist's Guild out of business!\"");
	say();
	if (!gflags[0x00F7]) goto labelFunc0408_028E;
	message("\"And it would have worked if thou hadst not put a stop to their plans.\"");
	say();
labelFunc0408_028E:
	UI_remove_answer("monument");
labelFunc0408_0295:
	case "murders" attend labelFunc0408_02B5:
	message("\"Frederico and Tania were killed at the Minoc sawmill in a manner most gruesome.\"");
	say();
	UI_remove_answer("murders");
	UI_add_answer(["Frederico and Tania", "gruesome"]);
labelFunc0408_02B5:
	case "Frederico and Tania" attend labelFunc0408_02C8:
	message("\"Frederico was the leader of the Gypsies, and Tania was his wife. They lived outside of town. I know nothing more about them.\"");
	say();
	UI_remove_answer("Frederico and Tania");
labelFunc0408_02C8:
	case "gruesome" attend labelFunc0408_02DB:
	message("\"The manner in which Frederico and Tania were murdered suggests a ritual killing. From what I have been hearing it is similar to one that thou hast run across in Trinsic\tand one that occurred in Britain a while ago. 'Tis a most puzzling mystery.\"");
	say();
	UI_remove_answer("gruesome");
labelFunc0408_02DB:
	case "plans" attend labelFunc0408_0314:
	var000A = Func0931(0xFE9B, 0x0001, 0x031D, 0x000B, 0xFE99);
	if (!var000A) goto labelFunc0408_0309;
	message("\"May I see them?\" She examines every line of the plans carefully. \"These designs are unsound. Ships built to these specifications will easily capsize and sink. Thou shouldst show these plans to the Mayor.\"");
	say();
	gflags[0x00FD] = true;
	goto labelFunc0408_030D;
labelFunc0408_0309:
	message("\"Karl has the plans to the ships Owen built that sank?! I would very much like see them. Perhaps I could help discover why those tragedies occurred.\"");
	say();
labelFunc0408_030D:
	UI_remove_answer("plans");
labelFunc0408_0314:
	case "Iolo" attend labelFunc0408_035D:
	var000B = Func08F7(0xFFFF);
	if (!(!var000B)) goto labelFunc0408_0333;
	message("\"Perhaps we should go find Iolo and have him join us as well.\"");
	say();
	goto labelFunc0408_0356;
labelFunc0408_0333:
	message("\"Hello, Iolo.\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"'Tis a pleasure to see thee again, Julia.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF8, 0x0000);
labelFunc0408_0356:
	UI_remove_answer("Iolo");
labelFunc0408_035D:
	case "Shamino" attend labelFunc0408_03A6:
	var000C = Func08F7(0xFFFD);
	if (!(!var000C)) goto labelFunc0408_037C;
	message("\"Perhaps we should go find Shamino and have him join us as well.\"");
	say();
	goto labelFunc0408_039F;
labelFunc0408_037C:
	message("\"Hello, Shamino!\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Oh, Julia! Good of thee to be joining us again!\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFF8, 0x0000);
labelFunc0408_039F:
	UI_remove_answer("Shamino");
labelFunc0408_03A6:
	case "Dupre" attend labelFunc0408_0411:
	var000D = Func08F7(0xFFFC);
	if (!(!var000D)) goto labelFunc0408_03C5;
	message("\"Perhaps we should go find Sir Dupre and have him join us as well.\"");
	say();
	goto labelFunc0408_040A;
labelFunc0408_03C5:
	message("\"Once again our paths cross, Sir Dupre!\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Julia! I was just wondering if we would ever see thee again!\"*");
	say();
	UI_show_npc_face(0xFFF8, 0x0000);
	message("\"Well, thou canst wonder no more, Dupre.\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"");
	message(var0003);
	message(", just between thou, myself and the lamppost, thou hadst better watch Julia. She hath a temper.\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF8, 0x0000);
labelFunc0408_040A:
	UI_remove_answer("Dupre");
labelFunc0408_0411:
	case "Spark" attend labelFunc0408_0469:
	message("\"And who is this fine young lad?\"");
	say();
	if (!var0004) goto labelFunc0408_0462;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"My name is Spark, milady.\"*");
	say();
	UI_show_npc_face(0xFFF8, 0x0000);
	message("\"He is a cute one! And so well-mannered!\"");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark turns beet red.");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFF8, 0x0000);
	gflags[0x0121] = true;
labelFunc0408_0462:
	UI_remove_answer("Spark");
labelFunc0408_0469:
	case "bye" attend labelFunc0408_0474:
	goto labelFunc0408_0477;
labelFunc0408_0474:
	goto labelFunc0408_00A3;
labelFunc0408_0477:
	endconv;
	message("\"Goodbye, ");
	message(var0003);
	message(".\"*");
	say();
labelFunc0408_0482:
	if (!(event == 0x0000)) goto labelFunc0408_0490;
	Func092E(0xFFF8);
labelFunc0408_0490:
	return;
}


