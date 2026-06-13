#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04B0 object#(0x4B0) ()
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

	if (!(event == 0x0001)) goto labelFunc04B0_033D;
	UI_show_npc_face(0xFF50, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF50));
	var0003 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0212]) goto labelFunc04B0_004E;
	UI_add_answer("thief");
labelFunc04B0_004E:
	if (!gflags[0x0218]) goto labelFunc04B0_0062;
	UI_remove_answer("thief");
	UI_add_answer("theft solved");
labelFunc04B0_0062:
	if (!(!gflags[0x0229])) goto labelFunc04B0_0074;
	message("You see a cheerful, handsome young man who gives you a friendly wave as you approach.");
	say();
	gflags[0x0229] = true;
	goto labelFunc04B0_007E;
labelFunc04B0_0074:
	message("\"Greetings, ");
	message(var0000);
	message(",\" says Andrew.");
	say();
labelFunc04B0_007E:
	converse attend labelFunc04B0_0332;
	case "name" attend labelFunc04B0_009A:
	message("\"My name is Andrew. How art thou, ");
	message(var0000);
	message("?\"");
	say();
	UI_remove_answer("name");
labelFunc04B0_009A:
	case "job" attend labelFunc04B0_00B3:
	message("\"I am the owner and proprietor of the dairy here in Paws.\"");
	say();
	UI_add_answer(["dairy", "Paws"]);
labelFunc04B0_00B3:
	case "dairy" attend labelFunc04B0_00D9:
	message("\"Yes, I sell milk and cheese. Thou mayest find the dairy between Camille's farm and the slaughterhouse.\"");
	say();
	UI_remove_answer("dairy");
	UI_add_answer(["Camille", "slaughterhouse", "milk", "cheese"]);
labelFunc04B0_00D9:
	case "milk" attend labelFunc04B0_0185:
	if (!(var0002 == 0x0007)) goto labelFunc04B0_017A;
	message("\"A gallon will cost thee 3 gold. Art thou interested in buying some?\"");
	say();
	if (!Func090A()) goto labelFunc04B0_016D;
labelFunc04B0_00F5:
	var0004 = UI_remove_party_items(0x0003, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc04B0_0160;
	var0005 = UI_add_party_items(0x0001, 0x0268, 0xFE99, 0x0007, true);
	if (!var0005) goto labelFunc04B0_0145;
	message("\"Here it is,\" he says, handing you the jug. \"Wouldst thou like another?\"*");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04B0_013F;
	goto labelFunc04B0_00F5;
	goto labelFunc04B0_0142;
labelFunc04B0_013F:
	goto labelFunc04B0_0332;
labelFunc04B0_0142:
	goto labelFunc04B0_015D;
labelFunc04B0_0145:
	message("\"Thou hast not the room for the jug.\"");
	say();
	var0007 = UI_add_party_items(0x0003, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04B0_015D:
	goto labelFunc04B0_016A;
labelFunc04B0_0160:
	message("\"Thou hast not the gold for this, ");
	message(var0000);
	message(". Perhaps some other time.\"");
	say();
labelFunc04B0_016A:
	goto labelFunc04B0_0177;
labelFunc04B0_016D:
	message("\"Perhaps next time, ");
	message(var0000);
	message(".\"");
	say();
labelFunc04B0_0177:
	goto labelFunc04B0_017E;
labelFunc04B0_017A:
	message("\"I would be more than happy to sell thee a jug of milk, but for now the dairy is closed.\"");
	say();
labelFunc04B0_017E:
	UI_remove_answer("milk");
labelFunc04B0_0185:
	case "cheese" attend labelFunc04B0_0240:
	if (!(var0002 == 0x0007)) goto labelFunc04B0_0235;
	message("\"I sell wedges for 2 gold each. Still interested?\"");
	say();
	if (!Func090A()) goto labelFunc04B0_0228;
	message("\"How many dost thou want?\"");
	say();
	var0008 = UI_input_numeric_value(0x0001, 0x0014, 0x0001, 0x0001);
	var0009 = (var0008 * 0x0002);
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000A >= var0009)) goto labelFunc04B0_021B;
	var000B = UI_add_party_items(var0008, 0x0179, 0xFE99, 0x001B, true);
	if (!var000B) goto labelFunc04B0_0214;
	message("\"Here it is.\"");
	say();
	var000C = UI_remove_party_items(var0009, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04B0_0218;
labelFunc04B0_0214:
	message("\"Thou hast not the room for this cheese.\"");
	say();
labelFunc04B0_0218:
	goto labelFunc04B0_0225;
labelFunc04B0_021B:
	message("\"Thou hast not the gold for this, ");
	message(var0000);
	message(". Perhaps something else.\"");
	say();
labelFunc04B0_0225:
	goto labelFunc04B0_0232;
labelFunc04B0_0228:
	message("\"I understand, ");
	message(var0000);
	message(". Perhaps when thou dost become more hungry.\"");
	say();
labelFunc04B0_0232:
	goto labelFunc04B0_0239;
labelFunc04B0_0235:
	message("\"I would be more than happy to sell thee some cheese, but for now the dairy is closed.\"");
	say();
labelFunc04B0_0239:
	UI_remove_answer("cheese");
labelFunc04B0_0240:
	case "Camille" attend labelFunc04B0_025A:
	message("\"Camille is a good woman. She is still an advocate of the old virtues. She runs the farm by herself. Well, with the help of her son, Tobias.\"");
	say();
	UI_remove_answer("Camille");
	UI_add_answer("Tobias");
labelFunc04B0_025A:
	case "Tobias" attend labelFunc04B0_026D:
	message("\"A rather defensive young lad, I cannot say that I know that much about him.\"");
	say();
	UI_remove_answer("Tobias");
labelFunc04B0_026D:
	case "Paws" attend labelFunc04B0_0280:
	message("\"Of course everyone is up in arms about this business concerning the missing venom.\"");
	say();
	UI_remove_answer("Paws");
labelFunc04B0_0280:
	case "venom" attend labelFunc04B0_0293:
	message("\"It could be hidden anywhere. With all the trade that occurs in this town, it would be easy to hide. I do not know much else about the substance. Perhaps Morfin himself would know what kinds of effects it might produce.\"");
	say();
	UI_remove_answer("venom");
labelFunc04B0_0293:
	case "thief" attend labelFunc04B0_02BF:
	message("\"Be wary, for there is a thief in this town! Some silver serpent venom was stolen from Morfin.\"");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("thief");
	UI_add_answer("venom");
	if (!(!var0003)) goto labelFunc04B0_02BF;
	UI_add_answer("Morfin");
labelFunc04B0_02BF:
	case "theft solved" attend labelFunc04B0_02D2:
	message("\"Thou hast put the people in our town at ease by finding the culprit!\"");
	say();
	UI_remove_answer("theft solved");
labelFunc04B0_02D2:
	case "slaughterhouse" attend labelFunc04B0_02F3:
	message("\"The slaughterhouse is run by Morfin, the merchant. He is always busy, coming and going at all hours, sometimes carrying things.\"");
	say();
	UI_remove_answer("slaughterhouse");
	if (!(!var0003)) goto labelFunc04B0_02F3;
	UI_add_answer("Morfin");
labelFunc04B0_02F3:
	case "Morfin" attend labelFunc04B0_0311:
	message("\"He bought the slaughterhouse a few years ago, soon after he joined The Fellowship. I knew the previous owner.\"");
	say();
	UI_remove_answer("Morfin");
	UI_add_answer("previous owner");
	var0003 = true;
labelFunc04B0_0311:
	case "previous owner" attend labelFunc04B0_0324:
	message("\"I was just a lad when I first saw the old slaughterhouse. The old man who owned it even showed me the storeroom in there once. The door to it is locked. I think Morfin has the key somewhere in his house.\"");
	say();
	UI_remove_answer("previous owner");
labelFunc04B0_0324:
	case "bye" attend labelFunc04B0_032F:
	goto labelFunc04B0_0332;
labelFunc04B0_032F:
	goto labelFunc04B0_007E;
labelFunc04B0_0332:
	endconv;
	message("\"I hope I was of some assistance to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04B0_033D:
	if (!(event == 0x0000)) goto labelFunc04B0_034B;
	Func092E(0xFF50);
labelFunc04B0_034B:
	return;
}


