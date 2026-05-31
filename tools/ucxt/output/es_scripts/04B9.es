#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08CE 0x8CE ();
extern void Func092F 0x92F (var var0000);

void Func04B9 object#(0x4B9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04B9_02E3;
	UI_show_npc_face(0xFF47, 0x0000);
	var0000 = Func0908();
	var0001 = UI_part_of_day();
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0001 == 0x0007)) goto labelFunc04B9_0045;
	message("The gargoyle seems to be too busy conducting the Fellowship meeting to speak with you now.");
	say();
	Func08CE();
labelFunc04B9_0045:
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!gflags[0x01EF]) goto labelFunc04B9_0065;
	UI_add_answer("Elizabeth and Abraham");
labelFunc04B9_0065:
	if (!(!gflags[0x024A])) goto labelFunc04B9_0077;
	message("You see a winged gargoyle. Noticing you, he turns and says, \"To be welcome, human. To need assistance?\"");
	say();
	gflags[0x024A] = true;
	goto labelFunc04B9_007B;
labelFunc04B9_0077:
	message("\"To ask how I may assist, human.\"");
	say();
labelFunc04B9_007B:
	converse attend labelFunc04B9_02D4;
	case "name" attend labelFunc04B9_0098:
	message("\"To be the one named Quan.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Quan");
labelFunc04B9_0098:
	case "Quan" attend labelFunc04B9_00AB:
	message("\"To have no meaning in Gargish. To be a special name, specific to me,\" he smiles.");
	say();
	UI_remove_answer("Quan");
labelFunc04B9_00AB:
	case "job" attend labelFunc04B9_00CB:
	message("\"To head The Fellowship in Terfin.\"");
	say();
	UI_add_answer("Terfin");
	if (!gflags[0x01F5]) goto labelFunc04B9_00CB;
	UI_add_answer("voice");
labelFunc04B9_00CB:
	case "voice" attend labelFunc04B9_00DE:
	message("\"To be the inner voice of guidance that lives in all creatures. To become more distinct and frequent with stronger Fellowship ties.\"");
	say();
	UI_remove_answer("voice");
labelFunc04B9_00DE:
	case "Terfin" attend labelFunc04B9_00FE:
	message("\"To be the only gargoyle city in Britannia. To have fewer gargoyles in the land than during your last visit to Britannia, human.\" He shakes his head.");
	say();
	UI_add_answer(["fewer", "gargoyles"]);
	UI_remove_answer("Terfin");
labelFunc04B9_00FE:
	case "fewer" attend labelFunc04B9_0111:
	message("\"To have succumbed to the effects of disease and famine that have recently struck Britannia. To tell you that gargoyles breed less frequently, and we have not had the time to make up for losses in our population.~~\"To have new hope, however,\" he grins, \"with The Fellowship.\"");
	say();
	UI_remove_answer("fewer");
labelFunc04B9_0111:
	case "gargoyles" attend labelFunc04B9_0124:
	message("\"To suggest talking to Runeb, the Fellowship clerk, or Quaeven. To have jobs needing knowledge of others in Terfin.\" He grins apologetically.~~ \"To be too busy to know all in Terfin.\"");
	say();
	UI_remove_answer("gargoyles");
labelFunc04B9_0124:
	case "Fellowship" attend labelFunc04B9_0178:
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc04B9_0154;
	if (!gflags[0x0006]) goto labelFunc04B9_0146;
	message("\"To hold meetings at 9 p.m., in unity with other branches, human. To be welcome at our meetings.\"");
	say();
	goto labelFunc04B9_0151;
labelFunc04B9_0146:
	message("\"To be a boon to gargoyles and humans alike. To have a philosophy to help all creatures of all races reach their highest level of potential.\"");
	say();
	UI_add_answer("philosophy");
labelFunc04B9_0151:
	goto labelFunc04B9_015F;
labelFunc04B9_0154:
	message("\"To be a boon to gargoyles and humans alike. To have a philosophy to help all creatures of all races reach their highest level of potential.\"");
	say();
	UI_add_answer("philosophy");
labelFunc04B9_015F:
	if (!(gflags[0x023C] && (!gflags[0x0242]))) goto labelFunc04B9_0171;
	UI_add_answer("altar conflicts");
labelFunc04B9_0171:
	UI_remove_answer("Fellowship");
labelFunc04B9_0178:
	case "Elizabeth and Abraham" attend labelFunc04B9_019D:
	if (!(!gflags[0x0264])) goto labelFunc04B9_0192;
	message("\"To have just missed the human Fellowship officials who were here collecting funds. To have left for the Meditation Retreat near Serpent's Hold. To be sorry.\"");
	say();
	gflags[0x0243] = true;
	goto labelFunc04B9_0196;
labelFunc04B9_0192:
	message("\"To have not seen human Fellowship officials in many days.\"");
	say();
labelFunc04B9_0196:
	UI_remove_answer("Elizabeth and Abraham");
labelFunc04B9_019D:
	case "philosophy" attend labelFunc04B9_01B0:
	message("An almost gleeful expression fills his visage.~~ \"To be very similar to the altar of singularity. To have three principles called the Triad of Inner Strength. To apply three principles in unison to be more creative and happy.~~ \"To see the similarity? To have control, passion, and diligence mesh into one -- singularity. To have Triad -- Strive for Unity, Trust your Brother, and Worthiness Precedes Reward -- applied in unison!\"");
	say();
	UI_remove_answer("philosophy");
labelFunc04B9_01B0:
	case "altar conflicts" attend labelFunc04B9_01D0:
	message("\"To understand not,\" he says, puzzled.");
	say();
	if (!gflags[0x0253]) goto labelFunc04B9_01C9;
	UI_add_answer("altar destruction");
labelFunc04B9_01C9:
	UI_remove_answer("altar conflicts");
labelFunc04B9_01D0:
	case "altar destruction" attend labelFunc04B9_020A:
	message("\"To know nothing of this! To believe it not! To be not possible.~~ \"To know that all members are content with their lives, and incapable of such acts, even if the altars be outdated.~~ \"To tell you to speak with members themselves to see and believe.\"");
	say();
	UI_add_answer(["outdated", "members"]);
	UI_remove_answer("altar destruction");
	if (!gflags[0x023F]) goto labelFunc04B9_01FD;
	UI_add_answer("Sarpling's note");
labelFunc04B9_01FD:
	if (!gflags[0x0240]) goto labelFunc04B9_020A;
	UI_add_answer("Runeb assassinate");
labelFunc04B9_020A:
	case "outdated" attend labelFunc04B9_021D:
	message("\"To need the Triad for proper application to the individual gargoyle -- or person!\"");
	say();
	UI_remove_answer("outdated");
labelFunc04B9_021D:
	case "members" attend labelFunc04B9_0240:
	message("\"To talk to Runeb, Sarpling, and Quaeven.\"");
	say();
	UI_add_answer(["Runeb", "Sarpling", "Quaeven"]);
	UI_remove_answer("members");
labelFunc04B9_0240:
	case "Runeb" attend labelFunc04B9_026E:
	var0004 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0004) goto labelFunc04B9_0263;
	message("\"To have been the clerk of The Fellowship here.\"");
	say();
	goto labelFunc04B9_0267;
labelFunc04B9_0263:
	message("\"To be the clerk of The Fellowship here.\"");
	say();
labelFunc04B9_0267:
	UI_remove_answer("Runeb");
labelFunc04B9_026E:
	case "Sarpling" attend labelFunc04B9_0285:
	message("\"To sell magics and such at his shop.\"");
	say();
	UI_remove_answer("Sarpling");
	gflags[0x0241] = true;
labelFunc04B9_0285:
	case "Quaeven" attend labelFunc04B9_0298:
	message("\"To be in charge of the learning center.\"");
	say();
	UI_remove_answer("Quaeven");
labelFunc04B9_0298:
	case "Sarpling's note" attend labelFunc04B9_02AF:
	message("\"To be impossible for Runeb to be responsible.\" He smiles kindly. \"To be a practical joke.\"");
	say();
	UI_remove_answer("Sarpling's note");
	gflags[0x0242] = true;
labelFunc04B9_02AF:
	case "Runeb assassinate" attend labelFunc04B9_02C6:
	message("\"To be too heinous a plot for Runeb.\" He frowns. \"To be some kind of bad joke.\"");
	say();
	UI_remove_answer("Runeb assassinate");
	gflags[0x0242] = true;
labelFunc04B9_02C6:
	case "bye" attend labelFunc04B9_02D1:
	goto labelFunc04B9_02D4;
labelFunc04B9_02D1:
	goto labelFunc04B9_007B;
labelFunc04B9_02D4:
	endconv;
	message("\"To hope you find unity.\"*");
	say();
	if (!var0002) goto labelFunc04B9_02E3;
	message("The Cube did not vibrate once while speaking with Quan. You realize he is totally innocent of the dangerous powers above him.*");
	say();
labelFunc04B9_02E3:
	if (!(event == 0x0000)) goto labelFunc04B9_02F1;
	Func092F(0xFF47);
labelFunc04B9_02F1:
	return;
}


