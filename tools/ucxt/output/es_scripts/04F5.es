#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04F5 object#(0x4F5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04F5_024A;
	UI_show_npc_face(0xFF0B, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_npc_object(0xFF0B);
	UI_add_answer(["name", "job", "bye"]);
	var0002 = UI_get_alignment(var0001);
	if (!(var0002 == 0x0002)) goto labelFunc04F5_0050;
	UI_set_schedule_type(var0001, 0x0000);
labelFunc04F5_0050:
	if (!(gflags[0x0159] && gflags[0x0148])) goto labelFunc04F5_0061;
	UI_add_answer("Thief!");
labelFunc04F5_0061:
	if (!(!gflags[0x0148])) goto labelFunc04F5_0073;
	message("The friendly-looking monk signals you over to him.");
	say();
	gflags[0x0148] = true;
	goto labelFunc04F5_008A;
labelFunc04F5_0073:
	message("\"Hello, ");
	message(var0000);
	message(".\"");
	say();
	if (!gflags[0x012F]) goto labelFunc04F5_008A;
	UI_add_answer("give potion");
labelFunc04F5_008A:
	converse attend labelFunc04F5_0245;
	case "name" attend labelFunc04F5_00B3:
	message("He smiles. \"My name is Kreg, ");
	message(var0000);
	message(".\"");
	say();
	if (!gflags[0x0159]) goto labelFunc04F5_00AC;
	UI_add_answer("Thief!");
labelFunc04F5_00AC:
	UI_remove_answer("name");
labelFunc04F5_00B3:
	case "job" attend labelFunc04F5_00CC:
	message("\"I am a monk here at the Abbey. I am working on an alchemical mixture.\"");
	say();
	UI_add_answer(["mixture", "Abbey"]);
labelFunc04F5_00CC:
	case "Thief!" attend labelFunc04F5_0124:
	message("\"Ah! Found me out, didst thou? 'Tis too bad... for thee!\"*");
	say();
	Func0911(0x0064);
	var0003 = UI_count_objects(0xFF0B, 0x0231, 0xFE99, 0xFE99);
	if (!(var0003 < 0x0001)) goto labelFunc04F5_010F;
	var0004 = UI_create_new_object(0x0231);
	var0005 = UI_give_last_created(0xFF0B);
labelFunc04F5_010F:
	UI_set_alignment(var0001, 0x0002);
	UI_set_schedule_type(var0001, 0x0000);
	abort;
labelFunc04F5_0124:
	case "Abbey" attend labelFunc04F5_0137:
	message("\"Sadly, I am so involved with my studies that I have no time to visit the surrounding area or learn any new faces.\"");
	say();
	UI_remove_answer("Abbey");
labelFunc04F5_0137:
	case "mixture" attend labelFunc04F5_015D:
	message("\"Well, ");
	message(var0000);
	message(", we here at the Abbey will soon be taking a vow of silence. However, it will take some time for all of us to become accustomed to the sound of silence. Therefore, I am creating a potion that enables the imbiber to become temporarily silent. The concept is very similar to a potion of invisibility.\"");
	say();
	UI_add_answer(["vow", "invisibility"]);
	UI_remove_answer("mixture");
labelFunc04F5_015D:
	case "vow" attend labelFunc04F5_017D:
	message("\"Well,\" he looks embarrassed, \"after reading a book on how we compare to our predecessors, we learned that most people expect us to take a vow of silence.~~ \"So,\" he shrugs, \"we have chosen to do so, once I can make that potion. I realize that it sounds foolish, but I truly believe it will help us produce more wine.\"");
	say();
	UI_remove_answer("vow");
	UI_add_answer(["predecessors", "wine"]);
labelFunc04F5_017D:
	case "predecessors" attend labelFunc04F5_0190:
	message("\"Surely thou knowest of what I speak? Meditation, silence, aesthetics, ascetics, and so forth.\"");
	say();
	UI_remove_answer("predecessors");
labelFunc04F5_0190:
	case "wine" attend labelFunc04F5_01A3:
	message("\"The monks' wine is renowned throughout all of Britannia, or so I thought.\" A puzzled look fills his face.~~\"Ah, well, that is no matter. Regardless, I sincerely recommend to thee to try some of our exquisite drink.\"");
	say();
	UI_remove_answer("wine");
labelFunc04F5_01A3:
	case "invisibility" attend labelFunc04F5_01DE:
	message("\"As a matter of fact, my research has reached an impasse, for I cannot determine the nature of some critical reagents. What I need is a potion of invisibility to analyze. Then I could progress from there.\" He looks at you, hopefully. \"Wouldst thou be willing to obtain a potion for my studies? It is likely that thou couldst find one easily at the mage, Nicodemus'.\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04F5_01CC;
	message("He sighs, obviously relieved. \"Thank thee, ");
	message(var0000);
	message(".\"");
	say();
	gflags[0x012F] = true;
	goto labelFunc04F5_01D7;
labelFunc04F5_01CC:
	message("\"Art thou sure? I will give thee information in return.\"");
	say();
	UI_add_answer("information");
labelFunc04F5_01D7:
	UI_remove_answer("invisibility");
labelFunc04F5_01DE:
	case "information" attend labelFunc04F5_01F5:
	message("\"I will tell thee about Lord British, The Fellowship, or Buccaneer's Den if thou bringest me the potion of invisibility.\"");
	say();
	gflags[0x012F] = true;
	UI_remove_answer("information");
labelFunc04F5_01F5:
	case "give potion" attend labelFunc04F5_0237:
	var0007 = UI_remove_party_items(0x0001, 0x0154, 0xFE99, 0x0007, true);
	if (!var0007) goto labelFunc04F5_022C;
	message("He takes the potion from you and quickly drinks it. \"Thank thee, ");
	message(var0000);
	message(", for helping in mine escape!\" As he fades from view, his laughter fills your ears.*");
	say();
	UI_remove_npc(0xFF0B);
	abort;
	goto labelFunc04F5_0230;
labelFunc04F5_022C:
	message("\"Thou dost not have a potion to give,\" he says sadly. \"My research will again have to wait.\"");
	say();
labelFunc04F5_0230:
	UI_remove_answer("give potion");
labelFunc04F5_0237:
	case "bye" attend labelFunc04F5_0242:
	goto labelFunc04F5_0245;
labelFunc04F5_0242:
	goto labelFunc04F5_008A;
labelFunc04F5_0245:
	endconv;
	message("He nods farewell to you.*");
	say();
labelFunc04F5_024A:
	if (!(event == 0x0000)) goto labelFunc04F5_0258;
	Func092E(0xFF0B);
labelFunc04F5_0258:
	return;
}


