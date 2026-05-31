#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04A6 object#(0x4A6) ()
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

	if (!(event == 0x0001)) goto labelFunc04A6_0301;
	UI_show_npc_face(0xFF5A, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF5A));
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x0212] && (!gflags[0x0218]))) goto labelFunc04A6_0056;
	UI_add_answer("thief");
labelFunc04A6_0056:
	if (!gflags[0x021A]) goto labelFunc04A6_006A;
	if (!(!gflags[0x021D])) goto labelFunc04A6_006A;
	UI_add_answer("delivery");
labelFunc04A6_006A:
	if (!gflags[0x021B]) goto labelFunc04A6_0077;
	UI_add_answer("Polly");
labelFunc04A6_0077:
	if (!(!gflags[0x021F])) goto labelFunc04A6_0089;
	message("You see a man covered in the sweat of a hard day's work.");
	say();
	gflags[0x021F] = true;
	goto labelFunc04A6_0093;
labelFunc04A6_0089:
	message("\"Greetings, ");
	message(var0000);
	message(",\" says Thurston.");
	say();
labelFunc04A6_0093:
	converse attend labelFunc04A6_02F6;
	case "name" attend labelFunc04A6_00A9:
	message("\"I am Thurston.\"");
	say();
	UI_remove_answer("name");
labelFunc04A6_00A9:
	case "job" attend labelFunc04A6_00C2:
	message("\"I operate the mill here in Paws.\"");
	say();
	UI_add_answer(["mill", "Paws"]);
labelFunc04A6_00C2:
	case "mill" attend labelFunc04A6_00E2:
	message("\"The local economy depends upon the mill for flour. So I ensure that the mill runs. Sometimes, I feel that keeping the wheels turning is the only reason to live.\"");
	say();
	UI_add_answer(["flour", "reason to live"]);
	UI_remove_answer("mill");
labelFunc04A6_00E2:
	case "flour" attend labelFunc04A6_0197:
	if (!(var0002 == 0x0007)) goto labelFunc04A6_018C;
	message("\"A sack will cost thee 12 gold. Art thou interested in purchasing some?\"");
	say();
	if (!Func090A()) goto labelFunc04A6_017F;
labelFunc04A6_00FE:
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x000C)) goto labelFunc04A6_0172;
	var0005 = UI_add_party_items(0x0001, 0x035F, 0xFE99, 0x000E, true);
	if (!var0005) goto labelFunc04A6_016B;
	var0006 = UI_remove_party_items(0x000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc04A6_0168;
	message("\"Here it is,\" he says, handing you the sack. \"Wouldst thou wish another?\"*");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc04A6_0165;
	goto labelFunc04A6_00FE;
	goto labelFunc04A6_0168;
labelFunc04A6_0165:
	goto labelFunc04A6_02F6;
labelFunc04A6_0168:
	goto labelFunc04A6_016F;
labelFunc04A6_016B:
	message("\"Thou hast not the room for this sack.\"");
	say();
labelFunc04A6_016F:
	goto labelFunc04A6_017C;
labelFunc04A6_0172:
	message("\"Thou hast not the gold for this, ");
	message(var0000);
	message(". Perhaps some other time.\"");
	say();
labelFunc04A6_017C:
	goto labelFunc04A6_0189;
labelFunc04A6_017F:
	message("\"Perhaps next time, ");
	message(var0000);
	message(".\"");
	say();
labelFunc04A6_0189:
	goto labelFunc04A6_0190;
labelFunc04A6_018C:
	message("\"The mill is closed at present. If thou wouldst please return when it is open again I would gladly sell thee all the flour thou canst carry.\"");
	say();
labelFunc04A6_0190:
	UI_remove_answer("flour");
labelFunc04A6_0197:
	case "Paws" attend labelFunc04A6_01B8:
	message("\"In case thou hadst not noticed, the people who live here are not so well off as their cousins who live in Britain. In fact, we have even had a theft recently.\"");
	say();
	UI_remove_answer("Paws");
	if (!(!gflags[0x0218])) goto labelFunc04A6_01B8;
	UI_add_answer("theft");
labelFunc04A6_01B8:
	case "thief", "theft" attend labelFunc04A6_01E5:
	message("\"Indeed, thou shouldst be wary, ");
	message(var0000);
	message(". There is a thief in this town! Morfin, a merchant, had several vials of valuable silver snake venom stolen.\"");
	say();
	gflags[0x0212] = true;
	UI_remove_answer(["theft", "thief"]);
	UI_add_answer("snake venom");
labelFunc04A6_01E5:
	case "snake venom" attend labelFunc04A6_01F8:
	message("\"It is procured from the Silver Serpent. I believe Gargoyles used it habitually in the old days. I am not so sure what it might do to a human. Perhaps Morfin can tell thee more.\"");
	say();
	UI_remove_answer("snake venom");
labelFunc04A6_01F8:
	case "delivery" attend labelFunc04A6_025B:
	if (!gflags[0x021D]) goto labelFunc04A6_020D;
	message("\"I have paid thee once for thy delivery. I shall not do so again.\"");
	say();
	goto labelFunc04A6_0254;
labelFunc04A6_020D:
	var0008 = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc04A6_0250;
	message("You give the sack over to Thurston. He opens it and reaches inside. His hand comes back out filled with wheat. He sifts through it with his fingers. \"I know Camille is oft quite busy running her farm. Thanks to thee for making the delivery.\"");
	say();
	var0009 = UI_add_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc04A6_024D;
	message("\"This should compensate thee for thy trouble.\" He hands you ten gold pieces.");
	say();
	gflags[0x021D] = true;
labelFunc04A6_024D:
	goto labelFunc04A6_0254;
labelFunc04A6_0250:
	message("\"'Tis a puzzlement! Camille promised to make a delivery of wheat to me sometime today and it is late. I wonder where it could be.\"");
	say();
labelFunc04A6_0254:
	UI_remove_answer("delivery");
labelFunc04A6_025B:
	case "reason to live" attend labelFunc04A6_027B:
	message("\"I have no wife or family. I have thought about joining The Fellowship, but I refuse. I have nothing but my work, and a drink at the Salty Dog now and then.\"");
	say();
	UI_remove_answer("reason to live");
	UI_add_answer(["Fellowship", "Salty Dog"]);
labelFunc04A6_027B:
	case "Fellowship" attend labelFunc04A6_029E:
	message("\"I know they do good work here in town, but there is just something about them that makes me uncomfortable.\"");
	say();
	if (!var0003) goto labelFunc04A6_0297;
	message("He notices your Fellowship medallion and hurriedly clears his throat. \"No offense intended, ");
	message(var0000);
	message(".\"");
	say();
labelFunc04A6_0297:
	UI_remove_answer("Fellowship");
labelFunc04A6_029E:
	case "Salty Dog" attend labelFunc04A6_02C3:
	if (!(!gflags[0x0216])) goto labelFunc04A6_02B8;
	message("\"In truth, I go there more to be near Polly, the innkeeper, than for the wine. But she is always busy tending bar and has no time for me, I am sure.\"");
	say();
	gflags[0x0216] = true;
	goto labelFunc04A6_02BC;
labelFunc04A6_02B8:
	message("\"I should go to the Salty Dog and see Polly.\" Thurston stares off into space for a few moments, his eyes are big and he has a moony expression on his face. Suddenly, he snaps back to reality. \"Excuse me, thou wert saying something?\"");
	say();
labelFunc04A6_02BC:
	UI_remove_answer("Salty Dog");
labelFunc04A6_02C3:
	case "Polly" attend labelFunc04A6_02E8:
	if (!(!gflags[0x0231])) goto labelFunc04A6_02DD;
	message("You relate to Thurston what Polly had said about him. He looks at you with joyous surprise. \"Did Polly really say these things?! It is ridiculous that she believes I am too good for her!\" Suddenly he forgets his work and starts hurrying around in excitement. \"For years I have loved this woman from afar. I will begin courting her immediately!\"");
	say();
	gflags[0x0231] = true;
	goto labelFunc04A6_02E1;
labelFunc04A6_02DD:
	message("\"I want to thank thee for telling me the truth about Polly's feelings about me. I can be such a stick in the mud running this bloody mill all of the time that I would never have noticed it if she were wearing a sign on her back! This is just what I needed to help me start enjoying my life!\"");
	say();
labelFunc04A6_02E1:
	UI_remove_answer("Polly");
labelFunc04A6_02E8:
	case "bye" attend labelFunc04A6_02F3:
	goto labelFunc04A6_02F6;
labelFunc04A6_02F3:
	goto labelFunc04A6_0093;
labelFunc04A6_02F6:
	endconv;
	message("\"Good day to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04A6_0301:
	if (!(event == 0x0000)) goto labelFunc04A6_030F;
	Func092E(0xFF5A);
labelFunc04A6_030F:
	return;
}


