#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04AF object#(0x4AF) ()
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

	if (!(event == 0x0001)) goto labelFunc04AF_0344;
	UI_show_npc_face(0xFF51, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0212]) goto labelFunc04AF_0035;
	UI_add_answer("thief");
labelFunc04AF_0035:
	if (!(!gflags[0x0228])) goto labelFunc04AF_0047;
	message("You see a beggar. You cannot tell from the look on his face whether he is about to laugh or cry.");
	say();
	gflags[0x0228] = true;
	goto labelFunc04AF_0051;
labelFunc04AF_0047:
	message("\"Beg thy pardon, ");
	message(var0000);
	message(",\" Fenn says.");
	say();
labelFunc04AF_0051:
	converse attend labelFunc04AF_0339;
	case "name" attend labelFunc04AF_006D:
	message("\"My name is Fenn, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc04AF_006D:
	case "thief" attend labelFunc04AF_009E:
	if (!gflags[0x0218]) goto labelFunc04AF_0082;
	message("After you tell him about finding the venom vial, he says, \"Thou didst our town a service when thou didst uncover that no good brat Garritt as the thief! Perhaps now some people will start to realize the hypocrisy of the Fellowship!\"");
	say();
	goto labelFunc04AF_0097;
labelFunc04AF_0082:
	if (!gflags[0x0213]) goto labelFunc04AF_008F;
	message("\"I know that boy Tobias is innocent of any wrong doing, no matter what Feridwyn and his Fellowship says.\"");
	say();
	goto labelFunc04AF_0097;
labelFunc04AF_008F:
	message("\"Be wary for there is a thief in this town! Some silver serpent venom was stolen from the merchant Morfin, who runs the slaughterhouse.\"");
	say();
	gflags[0x0212] = true;
labelFunc04AF_0097:
	UI_remove_answer("thief");
labelFunc04AF_009E:
	case "job" attend labelFunc04AF_00B7:
	message("He looks away from you shamefully. \"I have none, ");
	message(var0000);
	message(".\"");
	say();
	UI_add_answer("none");
labelFunc04AF_00B7:
	case "none" attend labelFunc04AF_00DA:
	message("\"I used to be a farmer in more prosperous times. I used to work with Komor and Merrick.\"");
	say();
	UI_add_answer(["Komor", "Merrick", "give"]);
	UI_remove_answer("none");
labelFunc04AF_00DA:
	case "Komor" attend labelFunc04AF_011F:
	message("\"He is my best friend and the bravest man I know.\"");
	say();
	var0001 = Func08F7(0xFF52);
	if (!var0001) goto labelFunc04AF_0118;
	message("*");
	say();
	UI_show_npc_face(0xFF52, 0x0000);
	message("\"Oh, please! Thou art making mine eyes leak!\"*");
	say();
	UI_remove_npc_face(0xFF52);
	UI_show_npc_face(0xFF51, 0x0000);
labelFunc04AF_0118:
	UI_remove_answer("Komor");
labelFunc04AF_011F:
	case "Merrick" attend labelFunc04AF_013F:
	message("\"Merrick joined The Fellowship so he could live in their shelter, the poor sod.\"");
	say();
	UI_add_answer(["shelter", "Fellowship"]);
	UI_remove_answer("Merrick");
labelFunc04AF_013F:
	case "Fellowship" attend labelFunc04AF_0159:
	message("\"If The Fellowship truly wants to help people, why would they let us starve just because we do not want to join? They cannot answer that one!\"");
	say();
	UI_add_answer("starve");
	UI_remove_answer("Fellowship");
labelFunc04AF_0159:
	case "shelter" attend labelFunc04AF_0173:
	message("\"Hmf! If thou art so unfortunate as to want to live there, thou wouldst do better on the corner with Komor and I.\"");
	say();
	UI_remove_answer("shelter");
	UI_add_answer("corner");
labelFunc04AF_0173:
	case "corner" attend labelFunc04AF_018D:
	message("\"Even when pockets are light, there is still some mercy left in this world. Begging for money is not a proud profession, but there are worse ones.\"");
	say();
	UI_add_answer("worse");
	UI_remove_answer("corner");
labelFunc04AF_018D:
	case "worse" attend labelFunc04AF_01A0:
	message("\"At least we do not have to do what Merrick does. He recruits for The Fellowship.\"");
	say();
	UI_remove_answer("worse");
labelFunc04AF_01A0:
	case "starve" attend labelFunc04AF_01C0:
	message("\"Do not worry. We shall not starve. Camille sends her son Tobias with food and clothing for us every so often.\"");
	say();
	UI_add_answer(["Camille", "Tobias"]);
	UI_remove_answer("starve");
labelFunc04AF_01C0:
	case "Camille" attend labelFunc04AF_01D3:
	message("\"Camille is a good woman. She lives at the farm bordering the dairy.\"");
	say();
	UI_remove_answer("Camille");
labelFunc04AF_01D3:
	case "Tobias" attend labelFunc04AF_01FA:
	message("\"He is a fine lad, always willing to give us a hand. Unlike that rude urchin, Garritt.\"");
	say();
	if (!gflags[0x0213]) goto labelFunc04AF_01EC;
	UI_add_answer("venom");
labelFunc04AF_01EC:
	UI_add_answer("Garritt");
	UI_remove_answer("Tobias");
labelFunc04AF_01FA:
	case "venom" attend labelFunc04AF_0214:
	message("\"Tobias would not become involved with that sort of affair. I know for certain he is no thief.\"");
	say();
	UI_remove_answer("venom");
	UI_add_answer("involved");
labelFunc04AF_0214:
	case "involved" attend labelFunc04AF_022E:
	message("\"If thou art seeking out this venom thief, thou wouldst do well to ask Andrew about it.\"");
	say();
	UI_add_answer("Andrew");
	UI_remove_answer("involved");
labelFunc04AF_022E:
	case "Andrew" attend labelFunc04AF_0241:
	message("\"Andrew owns the dairy and lives across from Camille's farm and the slaughterhouse. He might have seen something.\"");
	say();
	UI_remove_answer("Andrew");
labelFunc04AF_0241:
	case "Garritt" attend labelFunc04AF_0286:
	message("\"He is the son of Feridwyn and Brita, who run the shelter. Garritt crosses the road to avoid us.\"");
	say();
	var0001 = Func08F7(0xFF52);
	if (!var0001) goto labelFunc04AF_027F;
	message("*");
	say();
	UI_show_npc_face(0xFF52, 0x0000);
	message("\"We would not want the likes of him walking down our side of the road anyway!\"*");
	say();
	UI_remove_npc_face(0xFF52);
	UI_show_npc_face(0xFF51, 0x0000);
labelFunc04AF_027F:
	UI_remove_answer("Garritt");
labelFunc04AF_0286:
	case "give" attend labelFunc04AF_032B:
	message("\"Wilt thou give me a bit of money?\"");
	say();
	if (!Func090A()) goto labelFunc04AF_0320;
	message("How much?");
	say();
	UI_push_answers();
	var0002 = Func090B(["O", "1", "2", "3", "4", "5"]);
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!((var0003 >= var0002) && (var0002 != "0"))) goto labelFunc04AF_0301;
	var0004 = UI_remove_party_items(var0002, 0x0284, 0xFE99, 0xFE99, true);
	message("\"Thank thee, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc04AF_0305;
labelFunc04AF_0301:
	message("\"It appears thou dost not have any money either!\"");
	say();
labelFunc04AF_0305:
	if (!(var0003 == 0x0000)) goto labelFunc04AF_0319;
	message("\"I am truly sorry if I have bothered thee, ");
	message(var0000);
	message(".\"");
	say();
labelFunc04AF_0319:
	UI_pop_answers();
	goto labelFunc04AF_0324;
labelFunc04AF_0320:
	message("Fenn hangs his head low.");
	say();
labelFunc04AF_0324:
	UI_remove_answer("give");
labelFunc04AF_032B:
	case "bye" attend labelFunc04AF_0336:
	goto labelFunc04AF_0339;
labelFunc04AF_0336:
	goto labelFunc04AF_0051;
labelFunc04AF_0339:
	endconv;
	message("\"Good fortune to ye, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04AF_0344:
	if (!(event == 0x0000)) goto labelFunc04AF_03CB;
	var0005 = UI_part_of_day();
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFF51));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x000B)) goto labelFunc04AF_03C5;
	if (!(var0007 == 0x0001)) goto labelFunc04AF_0388;
	var0008 = "@A coin for some food?@";
labelFunc04AF_0388:
	if (!(var0007 == 0x0002)) goto labelFunc04AF_0398;
	var0008 = "@Please aid a poor beggar!@";
labelFunc04AF_0398:
	if (!(var0007 == 0x0003)) goto labelFunc04AF_03A8;
	var0008 = "@Show some generosity!@";
labelFunc04AF_03A8:
	if (!(var0007 == 0x0004)) goto labelFunc04AF_03B8;
	var0008 = "@Help one less fortunate!@";
labelFunc04AF_03B8:
	UI_item_say(0xFF51, var0008);
	goto labelFunc04AF_03CB;
labelFunc04AF_03C5:
	Func092E(0xFF51);
labelFunc04AF_03CB:
	return;
}


