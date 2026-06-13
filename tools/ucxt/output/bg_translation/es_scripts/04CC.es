#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04CC object#(0x4CC) ()
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

	if (!(event == 0x0001)) goto labelFunc04CC_01F6;
	UI_show_npc_face(0xFF34, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "the Avatar";
	var0003 = UI_get_npc_object(0xFF34);
	var0004 = UI_get_npc_object(0xFF35);
	UI_add_answer(["name", "job", "bye"]);
	var0005 = UI_part_of_day();
	var0006 = UI_get_schedule_type(var0003);
	var0007 = UI_get_alignment(var0003);
	if (!(var0007 == 0x0002)) goto labelFunc04CC_0081;
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
labelFunc04CC_0081:
	if (!(!gflags[0x0289])) goto labelFunc04CC_0093;
	message("You see a well-muscled woman who lifts her head in acknowledgement of your presence.");
	say();
	gflags[0x0289] = true;
	goto labelFunc04CC_009D;
labelFunc04CC_0093:
	message("\"Yes, ");
	message(var0000);
	message("?\"");
	say();
labelFunc04CC_009D:
	converse attend labelFunc04CC_01F1;
	case "name" attend labelFunc04CC_0111:
	message("The woman grabs your hand and shakes vigorously. \"Hello. M'name's Mara.\"");
	say();
	if (!(var0006 == 0x001A)) goto labelFunc04CC_010A;
	message("\"What is thine?\"");
	say();
	var0008 = Func090B([var0001, var0002, var0000]);
	if (!(var0008 == var0002)) goto labelFunc04CC_0106;
	message("\"The Avatar!\" she shouts angrily. \"Why thou art the one responsible for bringing those wretched gargoyles into our fine land!\"*");
	say();
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_alignment(var0004, 0x0002);
	abort;
	goto labelFunc04CC_010A;
labelFunc04CC_0106:
	message("\"'Tis good to meet thee!\"");
	say();
labelFunc04CC_010A:
	UI_remove_answer("name");
labelFunc04CC_0111:
	case "job" attend labelFunc04CC_0124:
	message("She flexes proudly, \"I am a miner in Vesper.\"");
	say();
	UI_add_answer("Vesper");
labelFunc04CC_0124:
	case "Vesper" attend labelFunc04CC_0144:
	message("\"This used to be a pleasant town,\" she looks around, apparently checking if anyone is near, \"'til the gargoyles became so unruly. Now most of us have to spend far too much time wondering when the gargoyles will decide they want to kill us.\"");
	say();
	UI_add_answer(["gargoyles", "us"]);
	UI_remove_answer("Vesper");
labelFunc04CC_0144:
	case "gargoyles" attend labelFunc04CC_0157:
	message("She shrugs. \"There is naught to say, except that they are a menace. This town would be a much better place without them.\"");
	say();
	UI_remove_answer("gargoyles");
labelFunc04CC_0157:
	case "us" attend labelFunc04CC_017D:
	message("\"Well, I know Cador feels as I do, as does his wife. I have heard the mayor express his concern about them. I don't really know his clerk, Liana.\"");
	say();
	UI_add_answer(["Cador", "wife", "mayor", "Liana"]);
	UI_remove_answer("us");
labelFunc04CC_017D:
	case "wife" attend labelFunc04CC_0190:
	message("\"Yvella is a lovely woman. She spends her days caring for their daughter, Catherine.\"");
	say();
	UI_remove_answer("wife");
labelFunc04CC_0190:
	case "Liana" attend labelFunc04CC_01A3:
	message("\"I have only seen her a few times. I do not know her well enough to say this, but I think she is angry about something, for she is always in a bad mood.\"");
	say();
	UI_remove_answer("Liana");
labelFunc04CC_01A3:
	case "Cador" attend labelFunc04CC_01BD:
	message("\"He is in charge of managing the mines. Does a fair job, too. He usually joins me at the Gilded Lizard.\"");
	say();
	UI_add_answer("Gilded Lizard");
	UI_remove_answer("Cador");
labelFunc04CC_01BD:
	case "mayor" attend labelFunc04CC_01D0:
	message("\"His name is Auston. I like him, but I suspect that Liana is the one who truly keeps Vesper in order.\"");
	say();
	UI_remove_answer("mayor");
labelFunc04CC_01D0:
	case "Gilded Lizard" attend labelFunc04CC_01E3:
	message("\"That is the tavern here in Vesper. Yongi's the barkeeper. He serves a passing fair tankard of ale.\"");
	say();
	UI_remove_answer("Gilded Lizard");
labelFunc04CC_01E3:
	case "bye" attend labelFunc04CC_01EE:
	goto labelFunc04CC_01F1;
labelFunc04CC_01EE:
	goto labelFunc04CC_009D;
labelFunc04CC_01F1:
	endconv;
	message("Mara shakes your hand and slaps you on the back, saying, \"Fare thee well, friend!\"*");
	say();
labelFunc04CC_01F6:
	if (!(event == 0x0000)) goto labelFunc04CC_0204;
	Func092E(0xFF34);
labelFunc04CC_0204:
	return;
}


