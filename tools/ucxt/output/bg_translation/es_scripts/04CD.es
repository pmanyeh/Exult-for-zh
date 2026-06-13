#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func094F 0x94F (var var0000, var var0001);

void Func04CD object#(0x4CD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04CD_019B;
	UI_show_npc_face(0xFF33, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF33));
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x028A])) goto labelFunc04CD_004A;
	message("A strong, powerful man looks at you and nods acknowledgment.");
	say();
	goto labelFunc04CD_004E;
labelFunc04CD_004A:
	message("\"What can I do for thee?\" asks Zaksam.");
	say();
labelFunc04CD_004E:
	converse attend labelFunc04CD_0196;
	case "name" attend labelFunc04CD_0064:
	message("\"I am Zaksam,\" he states proudly.");
	say();
	UI_remove_answer("name");
labelFunc04CD_0064:
	case "job" attend labelFunc04CD_007D:
	message("\"I teach others to be strong fighters. I am a trainer here in Vesper.\"");
	say();
	UI_add_answer(["Vesper", "train"]);
labelFunc04CD_007D:
	case "Vesper" attend labelFunc04CD_009D:
	message("\"I have taught here for many years. I like the town, but I am not too fond of some of the residents.\"");
	say();
	UI_add_answer(["town", "residents"]);
	UI_remove_answer("Vesper");
labelFunc04CD_009D:
	case "town" attend labelFunc04CD_00B0:
	message("\"The land to the northeast is a bit dry, but the oasis and nearby shores give us plenty of water for drinking and bathing.\"");
	say();
	UI_remove_answer("town");
labelFunc04CD_00B0:
	case "residents" attend labelFunc04CD_00D0:
	message("\"Most of us are respectable, but there are a few that I wonder about. Blorn and the mayor, for example.");
	say();
	UI_add_answer(["mayor", "Blorn"]);
	UI_remove_answer("residents");
labelFunc04CD_00D0:
	case "mayor" attend labelFunc04CD_00E3:
	message("\"'Tis not that I do not trust him. I just wonder about his ability to run the town. His name is Auston. Talk to him and see for thyself what thou thinkest. Better yet, talk to his clerk, Liana.\"");
	say();
	UI_remove_answer("mayor");
labelFunc04CD_00E3:
	case "Blorn" attend labelFunc04CD_00FD:
	message("\"That one I do not like a bit. I do not trust him. He reminds me of those gargoyles.\"");
	say();
	UI_add_answer("gargoyles");
	UI_remove_answer("Blorn");
labelFunc04CD_00FD:
	case "gargoyles" attend labelFunc04CD_011D:
	message("\"What is there to say, but do not let them get too close or they will rob thee. Any day now they may try to use violence to take over the town. The mayor himself has asked that I fight if necessary. Though I have no fear of death, that is a battle I do not look forward to.\"");
	say();
	UI_remove_answer("gargoyles");
	UI_add_answer(["rob", "violence"]);
labelFunc04CD_011D:
	case "rob" attend labelFunc04CD_0130:
	message("\"I have already heard that some of my fellow residents have had things stolen by those wretched creatures.\"");
	say();
	UI_remove_answer("rob");
labelFunc04CD_0130:
	case "violence" attend labelFunc04CD_0143:
	message("\"As thou must surely know, all gargoyles are prone to senseless fits of violence. 'Twould be quite natural to expect them to use it for their own selfish gain.\"");
	say();
	UI_remove_answer("violence");
labelFunc04CD_0143:
	case "train" attend labelFunc04CD_0188:
	if (!(var0002 == 0x0007)) goto labelFunc04CD_017E;
	message("\"I can train thee for 40 gold. Is this all right?\"");
	say();
	if (!Func090A()) goto labelFunc04CD_0171;
	Func094F([0x0000, 0x0004], 0x0028);
	goto labelFunc04CD_017B;
labelFunc04CD_0171:
	message("\"Perhaps next time, ");
	message(var0001);
	message(".\"");
	say();
labelFunc04CD_017B:
	goto labelFunc04CD_0188;
labelFunc04CD_017E:
	message("\"I can train thee when I am at my training hall, ");
	message(var0001);
	message(". Please feel free to see me when it is open.\"");
	say();
labelFunc04CD_0188:
	case "bye" attend labelFunc04CD_0193:
	goto labelFunc04CD_0196;
labelFunc04CD_0193:
	goto labelFunc04CD_004E;
labelFunc04CD_0196:
	endconv;
	message("\"May thy strength be thy guide.\"*");
	say();
labelFunc04CD_019B:
	if (!(event == 0x0000)) goto labelFunc04CD_026F;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF33));
	var0003 = UI_part_of_day();
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!((var0003 == 0x0007) || ((var0003 == 0x0000) || (var0003 == 0x0001)))) goto labelFunc04CD_01EF;
	if (!(var0002 == 0x000E)) goto labelFunc04CD_01EF;
	var0005 = "@Zzzzz . . .@";
labelFunc04CD_01EF:
	if (!((var0003 >= 0x0002) && (var0003 <= 0x0005))) goto labelFunc04CD_024B;
	if (!(var0002 == 0x0007)) goto labelFunc04CD_024B;
	if (!(var0004 == 0x0001)) goto labelFunc04CD_021B;
	var0005 = "@Increase thy skill here!@";
labelFunc04CD_021B:
	if (!(var0004 == 0x0002)) goto labelFunc04CD_022B;
	var0005 = "@Increase thy strength here!@";
labelFunc04CD_022B:
	if (!(var0004 == 0x0003)) goto labelFunc04CD_023B;
	var0005 = "@Fight better, be stronger!@";
labelFunc04CD_023B:
	if (!(var0004 == 0x0004)) goto labelFunc04CD_024B;
	var0005 = "@Defend thyself against gargoyles!@";
labelFunc04CD_024B:
	if (!(var0003 == 0x0006)) goto labelFunc04CD_0265;
	if (!(var0002 == 0x001A)) goto labelFunc04CD_0265;
	var0005 = "@Mmmmm, excellent wine!@";
labelFunc04CD_0265:
	UI_item_say(0xFF33, var0005);
labelFunc04CD_026F:
	return;
}


