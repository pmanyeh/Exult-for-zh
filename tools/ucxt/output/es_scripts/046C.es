#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern void Func08D2 0x8D2 (var var0000, var var0001, var var0002);

void Func046C object#(0x46C) ()
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
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;

	if (!(event == 0x0001)) goto labelFunc046C_0452;
	UI_show_npc_face(0xFF94, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = 0xFF94;
	var0003 = false;
	var0004 = false;
	var0005 = Func0931(0xFE9B, 0x0001, 0x03E7, 0xFE99, 0x0004);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0146])) goto labelFunc046C_0064;
	message("The woman greets you with shining eyes.");
	say();
	gflags[0x0146] = true;
	goto labelFunc046C_006E;
labelFunc046C_0064:
	message("\"Hello, ");
	message(var0000);
	message(",\" says Reyna.");
	say();
labelFunc046C_006E:
	var0006 = UI_find_nearest(0xFE9C, 0x02CB, 0xFFFF);
	if (!var0006) goto labelFunc046C_0092;
	if (!(!gflags[0x0128])) goto labelFunc046C_0092;
	UI_add_answer("cemetery");
labelFunc046C_0092:
	if (!var0005) goto labelFunc046C_00A5;
	if (!gflags[0x0128]) goto labelFunc046C_00A5;
	UI_add_answer("brought flowers");
labelFunc046C_00A5:
	if (!gflags[0x0163]) goto labelFunc046C_00B6;
	UI_add_answer("heal");
	var0004 = true;
labelFunc046C_00B6:
	converse attend labelFunc046C_042B;
	case "name" attend labelFunc046C_00CC:
	message("\"I am Reyna,\" she says, brushing the hair out of her face.");
	say();
	UI_remove_answer("name");
labelFunc046C_00CC:
	case "job" attend labelFunc046C_00FE:
	message("\"I am a healer. I have chosen to set up shop here near the forest.\"");
	say();
	gflags[0x0163] = true;
	if (!(!var0004)) goto labelFunc046C_00EA;
	UI_add_answer("heal");
labelFunc046C_00EA:
	UI_add_answer("forest");
	if (!gflags[0x013B]) goto labelFunc046C_00FE;
	UI_add_answer("animals");
labelFunc046C_00FE:
	case "forest" attend labelFunc046C_0121:
	message("\"I wanted to live and work here because the land is very beautiful. I have found many things to do and see. Unfortunately, the forest is so spread out that I have yet to meet many of the others who live in this area. I do know that the Abbey is just across the way from mine house.~~\"And somewhere nearby is a scholar.\" She appears thoughtful for a moment. \"Also, I believe there is a prison just east of the Abbey.");
	say();
	UI_remove_answer("forest");
	UI_add_answer(["Abbey", "scholar", "prison"]);
labelFunc046C_0121:
	case "prison" attend labelFunc046C_0134:
	message("\"I've never actually seen it,\" she laughs, \"but rumor has it that the cells are located right next to the court, for quick, easy imprisonment after the trial.\"");
	say();
	UI_remove_answer("prison");
labelFunc046C_0134:
	case "scholar" attend labelFunc046C_0155:
	message("\"From Aimi I have heard that he is brilliant, and... also a bit overzealous to instruct those interested in increasing their knowledge.\"");
	say();
	if (!(!var0003)) goto labelFunc046C_014E;
	UI_add_answer("Aimi");
labelFunc046C_014E:
	UI_remove_answer("scholar");
labelFunc046C_0155:
	case "Aimi" attend labelFunc046C_0179:
	var0003 = true;
	if (!gflags[0x015A]) goto labelFunc046C_016E;
	message("\"She is the monk who tends the garden at the Abbey.\"");
	say();
	goto labelFunc046C_0172;
labelFunc046C_016E:
	message("\"She is one of the monks who lives at the Abbey. At this time, she is the only other person I have actually met here in the forest.\"");
	say();
labelFunc046C_0172:
	UI_remove_answer("Aimi");
labelFunc046C_0179:
	case "Abbey" attend labelFunc046C_019D:
	message("\"That is how this area -- Empath Abbey -- got its name, from the monks who live at the abbey of the Brotherhood of the Rose. They are said to make delicious wine. One of the monks cares for a beautiful garden in her spare time. In fact, I often buy flowers from her.~~ But,\" she grins, \"as for the other monks, all that I\tever see them do is make wine and wander the countryside.\"");
	say();
	gflags[0x015A] = true;
	UI_remove_answer("Abbey");
	UI_add_answer(["flowers", "others"]);
labelFunc046C_019D:
	case "others" attend labelFunc046C_01BE:
	message("\"Aimi is the only one I have met, but I know there are one or two others who make wine there.\"");
	say();
	if (!(!var0003)) goto labelFunc046C_01B7;
	UI_add_answer("Aimi");
labelFunc046C_01B7:
	UI_remove_answer("others");
labelFunc046C_01BE:
	case "flowers" attend labelFunc046C_01DF:
	message("\"Yes, I get them for my mother.\"");
	say();
	if (!(!gflags[0x0128])) goto labelFunc046C_01D8;
	UI_add_answer("mother");
labelFunc046C_01D8:
	UI_remove_answer("flowers");
labelFunc046C_01DF:
	case "mother", "cemetery" attend labelFunc046C_025A:
	gflags[0x0128] = true;
	if (!var0006) goto labelFunc046C_0230;
	var0007 = "";
	var0008 = UI_find_nearby(0xFF94, 0x03E7, 0x000A, 0x0000);
	enum();
labelFunc046C_020E:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc046C_0230;
	if (!(UI_get_item_frame(var000B) == 0x0004)) goto labelFunc046C_022D;
	var0007 = "I realize there are already \r\n\t\t\t\t\t\tvery beautiful flowers here, \r\n\t\t\t\t\t\tbut there can never be enough \r\n\t\t\t\t\t\tto demonstrate how much she is \r\n\t\t\t\t\t\tmissed. ";
labelFunc046C_022D:
	goto labelFunc046C_020E;
labelFunc046C_0230:
	message("She looks down at her feet, and then back up at you. It is obvious she is fighting an urge to cry.~~ \"Several months ago, my mother passed away in her home town. She was born here in the forests, and had asked to be buried here, near me. Every morning I come out here to visit her and set flowers by her grave.~~ \"But,\" a lone tear escapes and trickles down her cheek, \"I am the only member of our family who lives nearby. No one else is able to visit or leave flowers very often.~~\"Her grave looks so bare sometimes.\" She looks off into the horizon and sighs. \"");
	message(var0007);
	message("It would be nice\tif there were some way to have more flowers brought to her.\"~~She quickly turns and looks at you.~~\"I am terribly sorry for rambling on like that. Please excuse me, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer(["mother", "cemetery"]);
	if (!var0005) goto labelFunc046C_025A;
	UI_add_answer("have flowers");
labelFunc046C_025A:
	case "brought flowers", "have flowers" attend labelFunc046C_02EF:
	message("Her eyes light up as she sees the bouquet of flowers.~~ \"They are lovely! Thou art too kind, ");
	message(var0000);
	message(", to bring flowers for my mother! I cannot wait to set them by her grave.\"");
	say();
	var000C = UI_remove_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	var000D = UI_die_roll(0x0001, 0x0006);
	if (!((var000D == 0x0001) || (var000D == 0x0002))) goto labelFunc046C_02A8;
	var000E = 0x0009;
labelFunc046C_02A8:
	if (!((var000D == 0x0003) || ((var000D == 0x0004) || (var000D == 0x0005)))) goto labelFunc046C_02C8;
	var000E = 0x0013;
labelFunc046C_02C8:
	if (!(var000D == 0x0006)) goto labelFunc046C_02D8;
	var000E = 0x005A;
labelFunc046C_02D8:
	Func0911(var000E);
	gflags[0x0139] = true;
	UI_remove_answer(["have flowers", "brought flowers"]);
labelFunc046C_02EF:
	case "heal" attend labelFunc046C_0358:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc046C_0315;
	gflags[0x013A] = true;
labelFunc046C_0315:
	if (!gflags[0x013A]) goto labelFunc046C_0347;
	if (!gflags[0x0139]) goto labelFunc046C_0338;
	var000F = true;
	message("\"For thy kindly gift of flowers, I will aid thee for half price.\" She smiles at you.");
	say();
	Func08D2(0x000F, 0x0005, 0x00C8);
	goto labelFunc046C_0344;
labelFunc046C_0338:
	Func08D2(0x001E, 0x000A, 0x0190);
labelFunc046C_0344:
	goto labelFunc046C_0358;
labelFunc046C_0347:
	message("\"I am sorry, ");
	message(var0000);
	message(", but, unless this is an emergency, I would prefer to wait until my shop is open.\"");
	say();
	UI_add_answer("emergency");
labelFunc046C_0358:
	case "emergency" attend labelFunc046C_040A:
	var0010 = UI_get_party_list();
	var0011 = 0x0000;
	var0012 = false;
	enum();
labelFunc046C_0372:
	for (var0015 in var0010 with var0013 to var0014) attend labelFunc046C_03BC;
	var0011 = (var0011 + 0x0001);
	var0016 = UI_get_item_flag(var0015, 0x0008);
	if (!var0016) goto labelFunc046C_039E;
	var0012 = true;
labelFunc046C_039E:
	var0017 = UI_get_npc_prop(var0015, 0x0003);
	if (!(var0017 < 0x000A)) goto labelFunc046C_03B9;
	var0012 = true;
labelFunc046C_03B9:
	goto labelFunc046C_0372;
labelFunc046C_03BC:
	if (!(var0011 > 0x0001)) goto labelFunc046C_03CF;
	var0018 = " and your companions";
	goto labelFunc046C_03D5;
labelFunc046C_03CF:
	var0018 = "";
labelFunc046C_03D5:
	message("She quickly examines you");
	message(var0018);
	message(".");
	say();
	if (!(var0012 == true)) goto labelFunc046C_03FF;
	gflags[0x013A] = true;
	message("\"Thou art correct, ");
	message(var0000);
	message(". This is a true emergency!\"");
	say();
	UI_add_answer("heal");
	goto labelFunc046C_0403;
labelFunc046C_03FF:
	message("\"I am sorry, but thy wounds are not mortal. Perhaps thou canst visit me when my shop is open.\"");
	say();
labelFunc046C_0403:
	UI_remove_answer("emergency");
labelFunc046C_040A:
	case "animals" attend labelFunc046C_041D:
	message("She smiles shyly.~~\"I very much love animals. When I was very young, I found an ailing dove that I was unable to nurse back to health. Since that time, I began to study the healing arts, so that I would be able to help other animals who might need healing.~~ \"Of course,\" she laughs, \"now that I have the skills, I use them to help people, too.\"");
	say();
	UI_remove_answer("animals");
labelFunc046C_041D:
	case "bye" attend labelFunc046C_0428:
	goto labelFunc046C_042B;
labelFunc046C_0428:
	goto labelFunc046C_00B6;
labelFunc046C_042B:
	endconv;
	message("\"Goodbye, ");
	message(var0000);
	message(".");
	say();
	if (!gflags[0x0139]) goto labelFunc046C_044A;
	message("\"I thank thee for the bouquet!");
	say();
	if (!var000F) goto labelFunc046C_044A;
	gflags[0x0139] = false;
labelFunc046C_044A:
	message("\"May health always follow thee!\"*");
	say();
	gflags[0x013A] = false;
labelFunc046C_0452:
	if (!(event == 0x0000)) goto labelFunc046C_045B;
	abort;
labelFunc046C_045B:
	return;
}


