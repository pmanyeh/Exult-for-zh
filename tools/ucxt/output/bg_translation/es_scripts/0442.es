#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08EC 0x8EC ();

void Func0442 object#(0x442) ()
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

	if (!(event == 0x0001)) goto labelFunc0442_01E3;
	UI_show_npc_face(0xFFBE, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00C3])) goto labelFunc0442_0046;
	message("You see a very large mouse with an air of superior intelligence.~~\"Avatar!\" she exclaims. \"I cannot believe thou art here, ");
	message(var0000);
	message("!\"");
	say();
	gflags[0x00C3] = true;
	goto labelFunc0442_0050;
labelFunc0442_0046:
	message("\"Hello, ");
	message(var0000);
	message("!\" Sherry the Mouse exclaims.");
	say();
labelFunc0442_0050:
	converse attend labelFunc0442_01D8;
	case "name" attend labelFunc0442_006C:
	message("\"Why, dost thou not remember Sherry, ");
	message(var0000);
	message("?\"");
	say();
	UI_remove_answer("name");
labelFunc0442_006C:
	case "job" attend labelFunc0442_00A4:
	var0002 = UI_get_schedule_type(0xFFBE);
	if (!(var0002 == 0x0019)) goto labelFunc0442_0090;
	message("\"I am trying to keep up with these children! We are playing tag through the castle! I must run! Talk to me later in the nursery!\"*");
	say();
	abort;
	goto labelFunc0442_00A4;
labelFunc0442_0090:
	message("\"I mainly assist Nanna in the Royal Nursery during the day. I watch the children alone in the evenings while Nanna has dinner and goes to her Fellowship meeting. Other times I run around the castle looking for mouse food!\"");
	say();
	UI_add_answer(["Royal Nursery", "castle", "mouse food"]);
labelFunc0442_00A4:
	case "Royal Nursery" attend labelFunc0442_00C4:
	message("\"The children are so much fun. I like to read them their favorite story. It happens to be Lord British's favorite children's story, too! He read it to me oh, those many years ago.\"");
	say();
	UI_remove_answer("Royal Nursery");
	UI_add_answer(["children", "story"]);
labelFunc0442_00C4:
	case "children" attend labelFunc0442_00D7:
	message("\"If thou hast not had the chance yet, do look around and meet them. They are most wonderful and amusing.\"");
	say();
	UI_remove_answer("children");
labelFunc0442_00D7:
	case "castle" attend labelFunc0442_00EA:
	message("\"It is much the same as it was when thou wert last here. There has been a bit of remodeling. After all, it has been 200 years since thou wert last here! I believe Lord British has a storeroom with quite a bit of equipment inside.\"");
	say();
	UI_remove_answer("castle");
labelFunc0442_00EA:
	case "mouse food" attend labelFunc0442_019F:
	message("\"Well, cheese is my favorite. If thou dost ever have cheese to give away, I will gladly eat it. But I will generally eat most anything. Dost thou have any cheese for me?\"");
	say();
	if (!Func090A()) goto labelFunc0442_0194;
	var0003 = Func0931(0xFE9B, 0x0001, 0x0179, 0xFE99, 0x001A);
	var0004 = Func0931(0xFE9B, 0x0001, 0x0179, 0xFE99, 0x001B);
	if (!(var0003 || var0004)) goto labelFunc0442_018D;
	message("\"Want to give me some?\"");
	say();
	if (!Func090A()) goto labelFunc0442_0186;
	var0005 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001A, true);
	var0006 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001B, true);
	if (!(var0005 || var0006)) goto labelFunc0442_0179;
	message("\"Thank thee, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0442_0183;
labelFunc0442_0179:
	message("\"I am unable to take thy cheese at the moment, ");
	message(var0001);
	message(".\"");
	say();
labelFunc0442_0183:
	goto labelFunc0442_018A;
labelFunc0442_0186:
	message("\"Well! I thought thou wert my friend!\"");
	say();
labelFunc0442_018A:
	goto labelFunc0442_0191;
labelFunc0442_018D:
	message("\"But thou hast not got any cheese!\"");
	say();
labelFunc0442_0191:
	goto labelFunc0442_0198;
labelFunc0442_0194:
	message("\"Too bad! If thou dost find any, please keep me in mind!\"");
	say();
labelFunc0442_0198:
	UI_remove_answer("mouse food");
labelFunc0442_019F:
	case "story" attend labelFunc0442_01CA:
	message("\"Dost thou want to hear the story? It is called 'Hubert's Hair-Raising Adventure'.\"");
	say();
	if (!Func090A()) goto labelFunc0442_01BF;
	message("Sherry stands on her hind legs, takes a deep breath, and then recites -- from memory -- very, very fast:");
	say();
	UI_push_answers();
	Func08EC();
	goto labelFunc0442_01C3;
labelFunc0442_01BF:
	message("\"Some other time, then!\"");
	say();
labelFunc0442_01C3:
	UI_remove_answer("story");
labelFunc0442_01CA:
	case "bye" attend labelFunc0442_01D5:
	goto labelFunc0442_01D8;
labelFunc0442_01D5:
	goto labelFunc0442_0050;
labelFunc0442_01D8:
	endconv;
	message("\"Farewell, ");
	message(var0001);
	message("!\"*");
	say();
labelFunc0442_01E3:
	if (!(event == 0x0000)) goto labelFunc0442_025A;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFBE));
	if (!(var0002 == 0x0019)) goto labelFunc0442_025A;
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0007 == 0x0001)) goto labelFunc0442_0220;
	var0008 = "@Tag! Thou art it!@";
labelFunc0442_0220:
	if (!(var0007 == 0x0002)) goto labelFunc0442_0230;
	var0008 = "@Cannot catch me!@";
labelFunc0442_0230:
	if (!(var0007 == 0x0003)) goto labelFunc0442_0240;
	var0008 = "@Nyah nyah! Thou art it!@";
labelFunc0442_0240:
	if (!(var0007 == 0x0004)) goto labelFunc0442_0250;
	var0008 = "@Catch me if thou can!@";
labelFunc0442_0250:
	UI_item_say(0xFFBE, var0008);
labelFunc0442_025A:
	return;
}


