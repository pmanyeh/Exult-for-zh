#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0452 object#(0x452) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0452_0230;
	UI_show_npc_face(0xFFAE, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFAE));
	if (!(var0000 == 0x0007)) goto labelFunc0452_005E;
	if (!(!(var0001 == 0x0010))) goto labelFunc0452_003F;
	goto labelFunc0452_005E;
labelFunc0452_003F:
	var0002 = Func08FC(0xFFAE, 0xFFAF);
	if (!var0002) goto labelFunc0452_0059;
	message("Gregor is busy concentrating on the Fellowship meeting and cannot talk now.*");
	say();
	abort;
	goto labelFunc0452_005E;
labelFunc0452_0059:
	message("\"No time for idle chatter! I must get to the Fellowship Meeting! I am late!\"*");
	say();
	abort;
labelFunc0452_005E:
	var0003 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	var0004 = Func08F7(0xFFAF);
	if (!var0004) goto labelFunc0452_009E;
	if (!(var0000 == 0x0000)) goto labelFunc0452_009E;
	if (!(var0001 == 0x0010)) goto labelFunc0452_009E;
	UI_add_answer("Elynor");
labelFunc0452_009E:
	if (!(!gflags[0x010D])) goto labelFunc0452_00B0;
	message("You see an old man whose domineering disposition matches the hardened physique of his aged body.");
	say();
	gflags[0x010D] = true;
	goto labelFunc0452_00B4;
labelFunc0452_00B0:
	message("\"Art thou addressing me?\" Gregor scowls.");
	say();
labelFunc0452_00B4:
	converse attend labelFunc0452_022B;
	case "name" attend labelFunc0452_00CA:
	message("\"My name is Gregor.\"");
	say();
	UI_remove_answer("name");
labelFunc0452_00CA:
	case "job" attend labelFunc0452_0101:
	if (!gflags[0x011F]) goto labelFunc0452_00EC;
	message("\"I am in charge of the Minoc branch of the Britannian Mining Company.\"");
	say();
	UI_add_answer(["Minoc", "Britannian Mining Company"]);
	goto labelFunc0452_0101;
labelFunc0452_00EC:
	message("\"Art thou fevered, ");
	message(var0003);
	message("? Dost thou not realize why we have gathered at this spot? 'Tis shameful, thine unaffected manner in the presence of such tragedy!\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc0452_0101:
	case "Minoc" attend labelFunc0452_0121:
	message("\"Our town is a major center of trade in Britannia, and it is a place of social change.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["trade", "social change"]);
labelFunc0452_0121:
	case "Britannian Mining Company" attend labelFunc0452_0134:
	message("\"The Britannian Mining Company produces a wide variety of minerals that are essential to the continuation of progress in\tBritannia.\"");
	say();
	UI_remove_answer("Britannian Mining Company");
labelFunc0452_0134:
	case "trade" attend labelFunc0452_015A:
	message("\"Here in Minoc we have one of the largest mining operations in Britannia, a sawmill, an inn, the Artist's Guild, and a shipwright.\"");
	say();
	UI_add_answer(["sawmill", "inn", "Artist's Guild", "shipwright"]);
	UI_remove_answer("trade");
labelFunc0452_015A:
	case "social change" attend labelFunc0452_017A:
	message("\"Here in Minoc we are erecting a monument to our good shipwright Owen, a master craftsman whose name will soon be known throughout Britannia. We also have a very active Fellowship branch.\"");
	say();
	UI_remove_answer("social change");
	UI_add_answer(["monument", "Fellowship"]);
labelFunc0452_017A:
	case "sawmill" attend labelFunc0452_018D:
	message("\"A long-standing and profitable business. A shame it will become more renowned for the murders that were committed there than for any of the fine work it does.\"");
	say();
	UI_remove_answer("sawmill");
labelFunc0452_018D:
	case "inn" attend labelFunc0452_01A0:
	message("\"The Checquered Cork is famous for its rustic character and atmosphere. It is a fine place. Do not be put off by its apparent uncleanliness.\"");
	say();
	UI_remove_answer("inn");
labelFunc0452_01A0:
	case "Artist's Guild" attend labelFunc0452_01B3:
	message("\"The Artist's Guild is a small collection of craftspeople who have huddled together to sell their little trinkets. They pride themselves on being the local dissenters of everything.\"");
	say();
	UI_remove_answer("Artist's Guild");
labelFunc0452_01B3:
	case "shipwright" attend labelFunc0452_01C6:
	message("\"I may have already mentioned Owen, the shipwright. He builds the finest ships that have ever set sail.\"");
	say();
	UI_remove_answer("shipwright");
labelFunc0452_01C6:
	case "monument" attend labelFunc0452_01E4:
	message("\"I helped to organize things with Mayor Burnside to get the monument built.\"");
	say();
	if (!(!gflags[0x00F7])) goto labelFunc0452_01DD;
	message("\"It will be huge and made of the finest ore from our mine.\"");
	say();
labelFunc0452_01DD:
	UI_remove_answer("monument");
labelFunc0452_01E4:
	case "Fellowship" attend labelFunc0452_01F7:
	message("\"They have done immeasurable good for Minoc, helping to counter the disunity that can plague a town such as ours where so many people are fixated upon monetary gain.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0452_01F7:
	case "murders" attend labelFunc0452_020A:
	message("\"It is terrible! The gypsies Frederico and Tania have been found murdered in William's sawmill!\"");
	say();
	UI_remove_answer("murders");
labelFunc0452_020A:
	case "Elynor" attend labelFunc0452_021D:
	message("\"Leave us in peace, damn thee! Elynor and I are in love and we wish to be alone together! Find thy cheap excitations elsewhere!\"");
	say();
	UI_remove_answer("Elynor");
labelFunc0452_021D:
	case "bye" attend labelFunc0452_0228:
	goto labelFunc0452_022B;
labelFunc0452_0228:
	goto labelFunc0452_00B4;
labelFunc0452_022B:
	endconv;
	message("\"Be on thy way then.\"*");
	say();
labelFunc0452_0230:
	if (!(event == 0x0000)) goto labelFunc0452_023E;
	Func092E(0xFFAE);
labelFunc0452_023E:
	return;
}


