#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08CD 0x8CD ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04B3 object#(0x4B3) ()
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

	if (!(event == 0x0001)) goto labelFunc04B3_0236;
	UI_show_npc_face(0xFF4D, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF4D));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0212]) goto labelFunc04B3_004A;
	UI_add_answer("thief");
labelFunc04B3_004A:
	if (!gflags[0x0218]) goto labelFunc04B3_0057;
	UI_remove_answer("thief");
labelFunc04B3_0057:
	if (!gflags[0x0215]) goto labelFunc04B3_0064;
	UI_add_answer("Merrick");
labelFunc04B3_0064:
	if (!gflags[0x0214]) goto labelFunc04B3_0071;
	UI_add_answer("Morfin");
labelFunc04B3_0071:
	if (!gflags[0x0216]) goto labelFunc04B3_007E;
	UI_add_answer("Thurston");
labelFunc04B3_007E:
	if (!(!gflags[0x022C])) goto labelFunc04B3_0090;
	message("You see the town bartender. She looks very busy, but she obviously takes pride in her work.");
	say();
	gflags[0x022C] = true;
	goto labelFunc04B3_009A;
labelFunc04B3_0090:
	message("Polly smiles. \"What can I do for thee, ");
	message(var0000);
	message("?\"");
	say();
labelFunc04B3_009A:
	converse attend labelFunc04B3_022B;
	case "name" attend labelFunc04B3_00B0:
	message("\"I am Polly. It is a pleasure to meet thee.\"");
	say();
	UI_remove_answer("name");
labelFunc04B3_00B0:
	case "job" attend labelFunc04B3_00E4:
	message("\"The owner and proprietor of the Salty Dog, the finest eating and drinking establishment in all of Paws, at thy service.\"");
	say();
	if (!(var0002 == 0x0017)) goto labelFunc04B3_00D9;
	UI_add_answer(["Paws", "buy", "room"]);
	goto labelFunc04B3_00E4;
labelFunc04B3_00D9:
	message("\"However, the Salty Dog is now closed. Please return during business hours.\"");
	say();
	UI_add_answer("Paws");
labelFunc04B3_00E4:
	case "buy" attend labelFunc04B3_00F6:
	Func08CD();
	UI_remove_answer("buy");
labelFunc04B3_00F6:
	case "room" attend labelFunc04B3_01AF:
	message("\"For but 5 gold thou canst let one of our lovely rooms. Dost thou wish to stay here for the night?\"");
	say();
	if (!Func090A()) goto labelFunc04B3_01A4;
	var0003 = UI_get_party_list();
	var0004 = 0x0000;
	enum();
labelFunc04B3_0116:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc04B3_012E;
	var0004 = (var0004 + 0x0001);
	goto labelFunc04B3_0116;
labelFunc04B3_012E:
	var0008 = (var0004 * 0x0005);
	var0009 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0009 >= var0008)) goto labelFunc04B3_0197;
	var000A = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!var000A) goto labelFunc04B3_018A;
	message("\"Here is thy key for this inn. 'Twill only work once.\"");
	say();
	var000B = UI_remove_party_items(var0008, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04B3_0194;
labelFunc04B3_018A:
	message("\"Sorry, ");
	message(var0000);
	message(", thou must lose some of thy bundles before I can give thee thy key.\"");
	say();
labelFunc04B3_0194:
	goto labelFunc04B3_01A1;
labelFunc04B3_0197:
	message("\"I am truly sorry, ");
	message(var0000);
	message(", but the rooms cost more gold than thou hast.\"");
	say();
labelFunc04B3_01A1:
	goto labelFunc04B3_01A8;
labelFunc04B3_01A4:
	message("\"Perhaps another evening then.\"");
	say();
labelFunc04B3_01A8:
	UI_remove_answer("room");
labelFunc04B3_01AF:
	case "Paws" attend labelFunc04B3_01C2:
	message("\"Actually, there are no other inns or pubs in Paws. It is a small place, but our food and drink here is quite good, honestly.\"");
	say();
	UI_remove_answer("Paws");
labelFunc04B3_01C2:
	case "thief" attend labelFunc04B3_01D9:
	message("\"There is a thief in this town! Silver serpent venom was stolen from Morfin, the merchant who operates the slaughterhouse.\"");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("thief");
labelFunc04B3_01D9:
	case "Merrick" attend labelFunc04B3_01EC:
	message("\"He used to be a farmer. He is not a bad sort. He has just had a bad run of luck. Now he is a devout Fellowship member.\"");
	say();
	UI_remove_answer("Merrick");
labelFunc04B3_01EC:
	case "Morfin" attend labelFunc04B3_0206:
	message("\"Morfin is a very shrewd and successful merchant, and also a Fellowship member, but I cannot help but feel that he would sell his own mother if he could get the right price for her. 'Tis little wonder why the thief chose to steal from him.\"");
	say();
	UI_add_answer("thief");
	UI_remove_answer("Morfin");
labelFunc04B3_0206:
	case "Thurston" attend labelFunc04B3_021D:
	message("You relate to Polly what you heard Thurston say about her. She is taken completely by surprise. \"Thurston really said that about me! I have always liked him, but in truth I have always thought I was not good enough for him!\"");
	say();
	gflags[0x021B] = true;
	UI_remove_answer("Thurston");
labelFunc04B3_021D:
	case "bye" attend labelFunc04B3_0228:
	goto labelFunc04B3_022B;
labelFunc04B3_0228:
	goto labelFunc04B3_009A;
labelFunc04B3_022B:
	endconv;
	message("\"Good day to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04B3_0236:
	if (!(event == 0x0000)) goto labelFunc04B3_0244;
	Func092E(0xFF4D);
labelFunc04B3_0244:
	return;
}


