#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func089E 0x89E (var var0000, var var0001, var var0002);
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0405 object#(0x405) ()
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

	if (!(event == 0x0001)) goto labelFunc0405_041C;
	UI_show_npc_face(0xFFFB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_npc_object(0xFFFB);
	var0002 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!(var0001 in UI_get_party_list())) goto labelFunc0405_004A;
	UI_add_answer("leave");
labelFunc0405_004A:
	if (!(!((var0001 in UI_get_party_list()) && gflags[0x0018]))) goto labelFunc0405_0061;
	UI_add_answer("join");
labelFunc0405_0061:
	if (!gflags[0x00E4]) goto labelFunc0405_0074;
	if (!gflags[0x00EF]) goto labelFunc0405_0074;
	UI_add_answer("Lord Heather");
labelFunc0405_0074:
	if (!gflags[0x0028]) goto labelFunc0405_0081;
	UI_add_answer("heal");
labelFunc0405_0081:
	if (!(!gflags[0x0018])) goto labelFunc0405_0093;
	message("You are surprised to see your old companion Jaana, looking only slightly aged since your last visit.");
	say();
	gflags[0x0018] = true;
	goto labelFunc0405_009D;
labelFunc0405_0093:
	message("\"Yes, ");
	message(var0002);
	message("?\" Jaana asks.");
	say();
labelFunc0405_009D:
	converse attend labelFunc0405_0411;
	case "name" attend labelFunc0405_00C4:
	message("\"Why, I am Jaana. Thou shouldst remember me!\"");
	say();
	UI_remove_answer("name");
	if (!gflags[0x00E4]) goto labelFunc0405_00C0;
	UI_add_answer("Lord Heather");
labelFunc0405_00C0:
	gflags[0x00EF] = true;
labelFunc0405_00C4:
	case "job" attend labelFunc0405_00F7:
	message("\"I have been the Cove Healer for some time now, and can provide thee with mine healing services. Since magic is not reliable, I have been yearning to join a party of adventurers, such as mine old friends. I miss the old life!\"");
	say();
	UI_add_answer(["heal", "friends", "magic"]);
	gflags[0x0028] = true;
	if (!(!(var0001 in UI_get_party_list()))) goto labelFunc0405_00F7;
	UI_add_answer("join");
labelFunc0405_00F7:
	case "heal" attend labelFunc0405_014F:
	if (!(var0001 in UI_get_party_list())) goto labelFunc0405_0143;
	if (!gflags[0x0029]) goto labelFunc0405_011D;
	var0003 = UI_get_timer(0x000A);
	goto labelFunc0405_0123;
labelFunc0405_011D:
	var0003 = 0x0005;
labelFunc0405_0123:
	if (!(var0003 < 0x0004)) goto labelFunc0405_0134;
	message("\"I am sorry, I must wait a while before I can heal again.\"");
	say();
	goto labelFunc0405_0140;
labelFunc0405_0134:
	Func089E(0x0000, 0x0000, 0x0000);
labelFunc0405_0140:
	goto labelFunc0405_014F;
labelFunc0405_0143:
	Func089E(0x001E, 0x000F, 0x0190);
labelFunc0405_014F:
	case "friends" attend labelFunc0405_0175:
	message("\"Our old friends -- Iolo, Shamino, and Dupre. The men who conquer evil in the name of Lord British!\"");
	say();
	UI_remove_answer("friends");
	UI_add_answer(["Iolo", "Shamino", "Dupre", "Lord British"]);
labelFunc0405_0175:
	case "join" attend labelFunc0405_01D3:
	var0004 = 0x0000;
	var0005 = UI_get_party_list();
	enum();
labelFunc0405_018B:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0405_01A3;
	var0004 = (var0004 + 0x0001);
	goto labelFunc0405_018B;
labelFunc0405_01A3:
	if (!(var0004 < 0x0008)) goto labelFunc0405_01CF;
	message("\"I would be honored to join thee, ");
	message(var0000);
	message("!\"");
	say();
	UI_add_to_party(0xFFFB);
	UI_add_answer("leave");
	UI_remove_answer("join");
	goto labelFunc0405_01D3;
labelFunc0405_01CF:
	message("\"I do believe thou dost have too many members travelling in thy group. I shall wait until someone leaves and thou dost ask me again.\"");
	say();
labelFunc0405_01D3:
	case "leave" attend labelFunc0405_0233:
	message("\"Dost thou want me to wait here or should I go home?\"");
	say();
	UI_clear_answers();
	var0009 = Func090B(["wait here", "go home"]);
	if (!(var0009 == "wait here")) goto labelFunc0405_0219;
	message("\"Very well. I shall wait until thou dost return.\"*");
	say();
	UI_remove_from_party(0xFFFB);
	UI_set_schedule_type(UI_get_npc_object(0xFFFB), 0x000F);
	abort;
	goto labelFunc0405_0233;
labelFunc0405_0219:
	message("\"I shall obey thy wish. I would be happy to re-join if thou shouldst ask. Goodbye.\"*");
	say();
	UI_remove_from_party(0xFFFB);
	UI_set_schedule_type(UI_get_npc_object(0xFFFB), 0x000B);
	abort;
labelFunc0405_0233:
	case "magic" attend labelFunc0405_0254:
	if (!(!gflags[0x0003])) goto labelFunc0405_0249;
	message("\"My magic has been affected by something in the air, but I have found that my senses are still with me. Hast thou noticed that the mages in the land are afflicted in the head? It is most disconcerting. Nevertheless, I can manage to cast a spell or two most of the time.\"");
	say();
	goto labelFunc0405_024D;
labelFunc0405_0249:
	message("\"I feel that the ether is flowing smoothly now. Magic is alive again!\"");
	say();
labelFunc0405_024D:
	UI_remove_answer("magic");
labelFunc0405_0254:
	case "Lord Heather" attend labelFunc0405_02CD:
	message("Jaana blushes. \"Yes, I have been seeing our Town Mayor for some time now.\"");
	say();
	UI_remove_answer("Lord Heather");
	var000A = Func08F7(0xFFB3);
	if (!var000A) goto labelFunc0405_02CD;
	UI_show_npc_face(0xFFB3, 0x0000);
	message("\"I see that thou art leaving Cove for a while, my dear?\"*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("\"Yes, milord. But I shall return. I promise thee.\"*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("\"I shall try not to worry about thee, but it will be difficult.\"*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("\"Do not worry. I shall be safe with the Avatar.\"*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("\"I do hope so.\" The Mayor embraces Jaana.*");
	say();
	UI_remove_npc_face(0xFFB3);
	UI_show_npc_face(0xFFFB, 0x0000);
labelFunc0405_02CD:
	case "Iolo" attend labelFunc0405_031A:
	var000B = Func08F7(0xFFFF);
	if (!(!var000B)) goto labelFunc0405_02EC;
	message("\"Where is he? 'Twould be good to see him!\"");
	say();
	goto labelFunc0405_0313;
labelFunc0405_02EC:
	message("\"He looks the same to me! Perhaps he has a little more waistline than before... but that is to be expected if one stays away from adventuring for too long!\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"What dost thou mean? 'Little more waistline' indeed!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFB, 0x0000);
	message("\"No offense intended, Iolo!\"");
	say();
labelFunc0405_0313:
	UI_remove_answer("Iolo");
labelFunc0405_031A:
	case "Shamino" attend labelFunc0405_0367:
	var000C = Func08F7(0xFFFD);
	if (!(!var000C)) goto labelFunc0405_0339;
	message("\"Oh, I would love to see him. I wonder where he might be.\"");
	say();
	goto labelFunc0405_0360;
labelFunc0405_0339:
	message("\"Shamino, thou dost not look like a 'kid' anymore! What didst happen? Didst thou reach the venerable age of thirty?\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Hmph. I am still a kid at heart.\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFB, 0x0000);
	message("\"That is a relief.\" She grins cheekily.");
	say();
labelFunc0405_0360:
	UI_remove_answer("Shamino");
labelFunc0405_0367:
	case "Dupre" attend labelFunc0405_03F0:
	var000D = Func08F7(0xFFFC);
	if (!(!var000D)) goto labelFunc0405_0386;
	message("\"I miss having a drink or two with that rogue! Let's go find that knight!\"");
	say();
	goto labelFunc0405_03DF;
labelFunc0405_0386:
	message("\"For someone recently knighted, he has retained his good looks and boyish charm, hasn't he?\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Thou dost mean 'mannish' charm, dost thou not?\"*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("\"Oh, pardon -me-, sir. Thine immaturity confused me for a moment.\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Art thou going to let her get away with that, ");
	message(var0002);
	message("?\"");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc0405_03D4;
	message("Dupre is speechless and turns away in a huff.*");
	say();
	UI_remove_npc_face(0xFFFC);
	goto labelFunc0405_03DF;
labelFunc0405_03D4:
	message("\"Good!\" Jaana winks at you from behind his back.*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0405_03DF:
	UI_remove_answer("Dupre");
	UI_show_npc_face(0xFFFB, 0x0000);
labelFunc0405_03F0:
	case "Lord British" attend labelFunc0405_0403:
	message("\"I have not seen our liege in many years.\"");
	say();
	UI_remove_answer("Lord British");
labelFunc0405_0403:
	case "bye" attend labelFunc0405_040E:
	goto labelFunc0405_0411;
labelFunc0405_040E:
	goto labelFunc0405_009D;
labelFunc0405_0411:
	endconv;
	message("\"Goodbye, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0405_041C:
	if (!(event == 0x0000)) goto labelFunc0405_042A;
	Func092E(0xFFFB);
labelFunc0405_042A:
	return;
}


