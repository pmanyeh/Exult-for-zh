#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08DE 0x8DE ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func045C object#(0x45C) ()
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

	if (!(event == 0x0001)) goto labelFunc045C_02F7;
	UI_show_npc_face(0xFFA4, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA4));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x011F]) goto labelFunc045C_004A;
	UI_add_answer("murders");
labelFunc045C_004A:
	if (!gflags[0x0040]) goto labelFunc045C_0057;
	UI_add_answer("Crown Jewel");
labelFunc045C_0057:
	if (!gflags[0x0043]) goto labelFunc045C_0064;
	UI_add_answer("Hook");
labelFunc045C_0064:
	if (!(!gflags[0x0117])) goto labelFunc045C_0076;
	message("You see a weary-looking man who is missing his right arm. With his one hand he scratches his head and squints in your general direction.");
	say();
	gflags[0x0117] = true;
	goto labelFunc045C_0080;
labelFunc045C_0076:
	message("\"Oy, how ye been, ");
	message(var0000);
	message("?\" Rutherford calls out to you.");
	say();
labelFunc045C_0080:
	converse attend labelFunc045C_02F2;
	case "name" attend labelFunc045C_0096:
	message("He lets out a sharp cough to clear his throat. \"Rutherford's me name. Pleased ta meet 'chur.\"~~ He extends his greasy hand for you to shake and does not retract it until it is clasped.");
	say();
	UI_remove_answer("name");
labelFunc045C_0096:
	case "job" attend labelFunc045C_0106:
	if (!gflags[0x011F]) goto labelFunc045C_00FE;
	message("\"Why I be the barkeep of The Checquered Cork. No better place in Minoc to discuss the events of the day.\"");
	say();
	if (!(var0002 == 0x0017)) goto labelFunc045C_00E8;
	message("He coughs into the rag he had just been using to polish the bar.");
	say();
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc045C_00E8;
	message("\"Hello again, Sir Dupre! Didst thou enjoy mine establishment so much that thou hast returned?\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"My dear Rutherford, this is not a reflection on The Checquered Cork, but I simply like a good drink!\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFA4, 0x0000);
labelFunc045C_00E8:
	UI_add_answer(["Minoc", "events", "buy", "room"]);
	goto labelFunc045C_0106;
labelFunc045C_00FE:
	message("\"'Tis no time for idle chatter! There have been two people murdered over at William's sawmill!\"");
	say();
	gflags[0x011F] = true;
labelFunc045C_0106:
	case "buy" attend labelFunc045C_012D:
	if (!(var0002 == 0x0017)) goto labelFunc045C_0122;
	message("\"We have a cornucopian variety of elixirs to quench thy tongue and gourmet dishes to appease thy palate.\"");
	say();
	Func08DE();
	goto labelFunc045C_0126;
labelFunc045C_0122:
	message("\"As I have finished my workday, I ask thee to come back another time. Thou dost have my thanks.\"");
	say();
labelFunc045C_0126:
	UI_remove_answer("buy");
labelFunc045C_012D:
	case "room" attend labelFunc045C_01F2:
	if (!(var0002 == 0x0017)) goto labelFunc045C_01E7;
	message("\"A room for the night is quite reasonable. Only 8 gold per person. Want one?\"");
	say();
	if (!Func090A()) goto labelFunc045C_01E0;
	var0004 = UI_get_party_list();
	var0005 = 0x0000;
	enum();
labelFunc045C_0157:
	for (var0008 in var0004 with var0006 to var0007) attend labelFunc045C_016F;
	var0005 = (var0005 + 0x0001);
	goto labelFunc045C_0157;
labelFunc045C_016F:
	var0009 = (var0005 * 0x0008);
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000A >= var0009)) goto labelFunc045C_01D9;
	var000B = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000B)) goto labelFunc045C_01BE;
	message("\"Thou art carrying too much to take the room key, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc045C_01D6;
labelFunc045C_01BE:
	message("\"Here is thy room key. It is good only until thou dost leave.\"");
	say();
	var000C = UI_remove_party_items(var0009, 0x0284, 0xFE99, 0xFE99, true);
labelFunc045C_01D6:
	goto labelFunc045C_01DD;
labelFunc045C_01D9:
	message("\"Thou dost not have enough gold, eh? That be right bad.\"");
	say();
labelFunc045C_01DD:
	goto labelFunc045C_01E4;
labelFunc045C_01E0:
	message("\"Mayhaps another night, then.\"");
	say();
labelFunc045C_01E4:
	goto labelFunc045C_01EB;
labelFunc045C_01E7:
	message("\"If thou wouldst please make thy request at a time that was during my normal business hours, I would be most grateful.\"");
	say();
labelFunc045C_01EB:
	UI_remove_answer("room");
labelFunc045C_01F2:
	case "Minoc" attend labelFunc045C_0213:
	message("\"Yep, this town's usually bloody quiet. That was until recently!\" His squinting eye suddenly opens wide and stares straight at you.");
	say();
	if (!(var0002 == 0x0017)) goto labelFunc045C_020C;
	message("\"Say, when exackly again didst thou say thou didst arrive in town, stranger?\"~~After a moment of carefully observing you, he shrugs his shoulders and goes back to wiping off the bar.");
	say();
labelFunc045C_020C:
	UI_remove_answer("Minoc");
labelFunc045C_0213:
	case "events" attend labelFunc045C_0233:
	message("\"Before all this evil at the sawmill, the buzz were all about the monument.\"");
	say();
	UI_remove_answer("events");
	UI_add_answer(["monument", "sawmill"]);
labelFunc045C_0233:
	case "murders" attend labelFunc045C_0246:
	message("\"Well, I suppose that clears thee from the list o' possible murderers. If'n thou wert the murderer, thou wouldst not have to be askin' questions o'people about wha' 'appened regardin' the murders. Thou wouldst already know, havin' been there.\"");
	say();
	UI_remove_answer("murders");
labelFunc045C_0246:
	case "sawmill" attend labelFunc045C_028A:
	message("\"Say, thou be not from around here?\" He looks at you skeptically. \"Thou art not from the Fellowship by any chance, art thou?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc045C_0272;
	message("\"I thought so!\"");
	say();
	UI_add_answer(["murders", "Fellowship"]);
	goto labelFunc045C_0283;
labelFunc045C_0272:
	message("\"Just askin'! Thou dost not have to take any offense!\"");
	say();
	UI_add_answer(["murders", "Fellowship"]);
labelFunc045C_0283:
	UI_remove_answer("sawmill");
labelFunc045C_028A:
	case "Hook" attend labelFunc045C_02AB:
	message("\"I know him! He be a pirate who lives in Buccaneer's Den. They say Hook is so mean he'd kill his own mudder for the right price, an' I would wager they's right.~~\"Why, I got into a fight with this Hook once. I was lucky and I escaped losin' only my right arm and still with one good eye left. It was somewhere around that time that I started having second thoughts about my career as a pirate and now here I be.");
	say();
	message("\"I have not seen him recently, but the description of the murder scene certainly sounds like his handiwork!\"");
	say();
	gflags[0x0104] = true;
	Func0911(0x000A);
	UI_remove_answer("Hook");
labelFunc045C_02AB:
	case "Crown Jewel" attend labelFunc045C_02BE:
	message("\"That ship was, indeed, here of late. In fact, 'twas the night of the murders! Could there be a connection? Hmmm...\"");
	say();
	UI_remove_answer("Crown Jewel");
labelFunc045C_02BE:
	case "Fellowship" attend labelFunc045C_02D1:
	message("\"Thank goodness that with all the town at each others' throats in recent weeks we have the Fellowship tryin' to hold the town together. I be no member or nothin', but I just a'heared of all the good things they done. Feedin' the poor an' such.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc045C_02D1:
	case "monument" attend labelFunc045C_02E4:
	message("\"Oh, thou must mean thet statuer they are goin' ta build of our shipwright. His name is Owen, a local boy. I understan' it is to be as tall as a man on horseback and shows Owen gazin' through a telerscope or some such thing like that.\"");
	say();
	UI_remove_answer("monument");
labelFunc045C_02E4:
	case "bye" attend labelFunc045C_02EF:
	goto labelFunc045C_02F2;
labelFunc045C_02EF:
	goto labelFunc045C_0080;
labelFunc045C_02F2:
	endconv;
	message("\"I shall see thee later... At least I will if thou dost stay in the front o' me good eye.\"*");
	say();
labelFunc045C_02F7:
	if (!(event == 0x0000)) goto labelFunc045C_0305;
	Func092E(0xFFA4);
labelFunc045C_0305:
	return;
}


