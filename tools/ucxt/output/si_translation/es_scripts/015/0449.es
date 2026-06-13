#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0449 object#(0x449) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = "He";
	if (!UI_is_pc_female()) goto labelFunc0449_0013;
	var0000 = "She";
labelFunc0449_0013:
	if (!(event == 0x0001)) goto labelFunc0449_0041;
	UI_item_say(0xFE9C, "@Greetings, sir.@");
	0xFFB7->Func07D1();
	Func097F(0xFFB7, "@What?@", 0x0002);
	UI_set_schedule_type(0xFFB7, 0x0003);
labelFunc0449_0041:
	if (!(event == 0x0009)) goto labelFunc0449_0410;
	UI_run_schedule(0xFFB7);
	UI_clear_item_say(0xFFB7);
	UI_show_npc_face0(0xFFB7, 0x0000);
	var0001 = UI_get_item_flag(0xFFB7, 0x001C);
	if (!(!gflags[0x0032])) goto labelFunc0449_007A;
	message("\"Say here! I'm Renfry the Cremator and there is a funeral in progress. Lords Marsten, Spektor, Brendann and Caladin are all in the crypts paying their last respects.\"");
	say();
	abort;
labelFunc0449_007A:
	if (!(!gflags[0x0048])) goto labelFunc0449_00A5;
	message("\"I say, I say who is that? Art thou a stranger?\"");
	say();
	if (!Func0955()) goto labelFunc0449_009E;
	message("\"No, no, I do not speak with strangers... I only care to speak with my fellow Knights.\"");
	say();
	Func097F(0xFFB7, "@Be gone...@", 0x0000);
	goto labelFunc0449_00A2;
labelFunc0449_009E:
	message("\"Pardon me for not recognizing thee, Sir Knight. I be an old man, and mine eyesight is not what it once was.\"");
	say();
labelFunc0449_00A2:
	goto labelFunc0449_00A9;
labelFunc0449_00A5:
	message("\"What? What? Oh, 'tis thee again.\"");
	say();
labelFunc0449_00A9:
	UI_add_answer(["name", "duties"]);
	if (!gflags[0x00BE]) goto labelFunc0449_00C3;
	UI_add_answer("Payment");
labelFunc0449_00C3:
	if (!(gflags[0x00A3] && (!gflags[0x029B]))) goto labelFunc0449_00D5;
	UI_add_answer("severed hand");
labelFunc0449_00D5:
	UI_add_answer("bye");
	var0002 = Func0942(0xFFFD);
	var0003 = Func0942(0xFFFE);
	var0004 = Func0942(0xFFFF);
labelFunc0449_00F7:
	converse attend labelFunc0449_040F;
	case "name" attend labelFunc0449_0148:
	UI_remove_answer("name");
	message("\"Flame? Oh, yes, we keep the fires going constantly.\"");
	say();
	var0005 = Func0992(0x0001, (("@@" + var0000) + " said NAME, old man. Not FLAME.@"), 0x0000, false);
	if (!(var0005 != 0xFE9C)) goto labelFunc0449_0148;
	UI_set_conversation_slot(0x0000);
	message("\"Oh. As thou canst tell, mine hearing is not what it once was. 'Tis the roar of the fires which hath done it...\"");
	say();
	message("\"I am Renfry, Knight and Cremator.\"");
	say();
	UI_set_item_flag(0xFFB7, 0x001C);
labelFunc0449_0148:
	case "duties" attend labelFunc0449_0168:
	UI_remove_answer("duties");
	message("\"What? Why, I am the undertaker of Monitor. Didst thou not know that? I thought everyone knew that. Do not forget, Knight, that one day I shall cremate thee!\"");
	say();
	UI_add_answer(["undertaker", "Body"]);
labelFunc0449_0168:
	case "undertaker" attend labelFunc0449_0188:
	UI_remove_answer("undertaker");
	message("\"I take care of the dead. I am in charge of the Crematorium. I prepare bodies for cremation and oversee the chamber that houses the Ashes of the Dead.\"");
	say();
	UI_add_answer(["The Cremator", "Ashes of the Dead"]);
labelFunc0449_0188:
	case "Ashes of the Dead" attend labelFunc0449_01CF:
	UI_remove_answer("Ashes of the Dead");
	if (!(!gflags[0x0048])) goto labelFunc0449_01C0;
	message("\"'Tis mighty curious for thee to know so little of our customs -- art thou certain thou art a Knight?\"");
	say();
	if (!Func0955()) goto labelFunc0449_01AF;
	message("\"Then thou hast spent too much time on the list fields, and not enough time pondering the traditions of our people. Pay attention!\"");
	say();
	goto labelFunc0449_01C0;
labelFunc0449_01AF:
	message("\"I don't speak with strangers!\"");
	say();
	Func097F(0xFFB7, "@To blazes!@", 0x0000);
	abort;
labelFunc0449_01C0:
	message("\"'Tis the Monitorian custom to cremate our dead. The ashes of a dead Knight are sacred. They represent the essence of that person's life, distilled by the mystical processes of the Cremator.\"");
	say();
	message("\"In the Crypts of the Dead are urns filled with the ashes of generations of Knights. The Ashes of the Dead are our heritage.\"");
	say();
	UI_add_answer("mysticism");
labelFunc0449_01CF:
	case "The Cremator" attend labelFunc0449_01FB:
	UI_remove_answer("The Cremator");
	message("\"Be reverent when thou art in the presence of the Machine of Cremation, as it represents Death itself.\"");
	say();
	message("\"After I throw the switch, the pumps begin to churn. When the heat builds, the trapdoor on top opens. The body then falls into the fires below.\"");
	say();
	message("\"The mechanism retrieves the Ashes of the Dead, and places them in an urn. A travelling belt carries the urn out of the fiery belly of the machine, so that I may collect it and take it to the Crypts of the Dead.\"");
	say();
	message("\"Careful with what thou wouldst put near the thing! It hath the capacity to destroy practically any object in the world!\"");
	say();
	UI_add_answer(["the Dead", "urn"]);
labelFunc0449_01FB:
	case "the Dead" attend labelFunc0449_0221:
	UI_remove_answer("the Dead");
	message("\"I am glad thou didst mention that. Remember that, if thou shouldst ever stumble across the remains of a brave departed pikeman, thou must bring his body home for cremation.\"");
	say();
	message("\"If thou dost not do this, the ghost of the dead will torment thee until thy dying day!\"");
	say();
	message("\"I have been given authority by Lord Marsten to pay 100 monetari for every pikeman's body brought home again. That way they can be properly entombed within the crypts.\"");
	say();
	gflags[0x0057] = true;
	UI_add_answer("crypts");
labelFunc0449_0221:
	case "crypts" attend labelFunc0449_0234:
	UI_remove_answer("crypts");
	message("\"They are just beyond the curtain in the crematorium.\"");
	say();
labelFunc0449_0234:
	case "urn" attend labelFunc0449_024E:
	UI_remove_answer("urn");
	message("\"Andral, our town sculptor, makes them.\"");
	say();
	UI_add_answer("Andral");
labelFunc0449_024E:
	case "Andral" attend labelFunc0449_0268:
	UI_remove_answer("Andral");
	message("\"Talented but very solitary person, he is. Never leaves his house, except to go to his workplace. He was especially upset by the recent theft at his shop.\"");
	say();
	UI_add_answer("theft");
labelFunc0449_0268:
	case "theft" attend labelFunc0449_02B4:
	UI_remove_answer("theft");
	message("\"Had something to do with that sage who was in town recently. Andral will know more about it. Talk to him.\"");
	say();
	gflags[0x0056] = true;
	var0005 = Func0992(0x0001, "@Dost thou know the name of this sage?@", 0x0000, false);
	if (!(var0005 != 0xFE9C)) goto labelFunc0449_02B4;
	UI_set_conversation_slot(0x0000);
	message("\"I have a perfect memory for names. 'Twas Badwin, I think. A very large man, with a hooded companion.\"");
	say();
	Func094E(var0005, "@Must be Batlin!@");
	UI_set_conversation_slot(0x0000);
labelFunc0449_02B4:
	case "mysticism" attend labelFunc0449_02E0:
	UI_remove_answer("mysticism");
	message("\"We are a community of Knights. For us, the world is a harsh place in which only the valiant survive.\"");
	say();
	message("\"We do not trust magic -- thou couldst not sell a magical weapon in this town at any price! Yet there are powers greater than mere magic...\"");
	say();
	message("\"One of these mysteries concerns the Ashes of the Dead. As we all know, the Ashes of Gurnordir lie at the end of Knight's Test. What is the power which causes the totem animal to appear? Not even I can say!\"");
	say();
	message("\"And no one can explain the Serpent Gate, yet we have built our city above it.\"");
	say();
	UI_add_answer(["Gurnordir", "Serpent Gate"]);
labelFunc0449_02E0:
	case "Gurnordir" attend labelFunc0449_02FF:
	UI_remove_answer("Gurnordir");
	message("\"I can hardly do justice to the tale -- thou shouldst speak to Lord Marsten.\"");
	say();
	message("\"Suffice it to say that when our blood is mixed with the ashes of the dead Goblin king Gurnordir, the totem animal of a Monitor knight appears.\"");
	say();
	message("\"Gurnordir was our greatest foe! Do his ashes stand for hatred, and thus the animals are produced to try to slay us?\"");
	say();
	message("\"Or do his ashes symbolize Courage? If so, this suggests that the Goblins have more in common with Monitorians than many would like to believe...\"");
	say();
labelFunc0449_02FF:
	case "Serpent Gate" attend labelFunc0449_031A:
	UI_remove_answer("Serpent Gate");
	message("\"A stone platform hidden in the Crypts...\"");
	say();
	message("\"The inscribed serpent marks the stonework as being the product of the Daemons. Such daemons once dwelt throughout this land, but for as long as the Knights have been here, the Daemons have confined themselves to the dungeon called Furnace.\"");
	say();
	message("\"By legend, the platform is called the Gate of the Serpent. But a gate to where? To what?\"");
	say();
labelFunc0449_031A:
	case "Payment" attend labelFunc0449_034C:
	UI_remove_answer("Payment");
	message("\"For thy service to Monitor and to the community of Knights I shall pay thee for thy trouble.\"");
	say();
	message("\"I thank thee for cremating that once proud warrior.\"");
	say();
	gflags[0x00BE] = false;
	var0006 = Func099B(0xFE9C, 0x0064, 0x03B7, 0xFE99, 0xFE99, true, true);
labelFunc0449_034C:
	case "Body" attend labelFunc0449_03D2:
	message("\"Dost thou carry a pikeman's body for cremation?\"");
	say();
	var0007 = 0x0000;
	if (!Func0955()) goto labelFunc0449_03D2;
	var0007 = UI_count_objects(0xFE9B, 0x0192, 0xFE99, 0x000B);
	var0007 = (var0007 + UI_count_objects(0xFE9B, 0x0190, 0xFE99, 0x0005));
	var0007 = (var0007 + UI_count_objects(0xFE9B, 0x0190, 0xFE99, 0x0006));
	if (!(var0007 > 0x0000)) goto labelFunc0449_03C7;
	if (!(var0007 == 0x0001)) goto labelFunc0449_03C0;
	message("\"Ah, place it there on the trapdoor on top of the Cremator. I will pay thee after thou hast performed the last rites for the fallen one.\"");
	say();
	goto labelFunc0449_03C4;
labelFunc0449_03C0:
	message("\"Ah, place them one at a time on the trapdoor on top of the Cremator.\" *\"I will pay thee after each one receives the final rites.\"");
	say();
labelFunc0449_03C4:
	goto labelFunc0449_03CB;
labelFunc0449_03C7:
	message("\"Thou dost not carry a pikeman! I can only pay thee for bringing me the bodies of fallen knights. Only they deserve such respect...\"");
	say();
labelFunc0449_03CB:
	UI_remove_answer("Body");
labelFunc0449_03D2:
	case "severed hand" attend labelFunc0449_03E5:
	UI_remove_answer("severed hand");
	message("\"I deduce that the severed hand found in thy possession is not dead. What manner of magic could do this? I have never seen its like.\"");
	say();
labelFunc0449_03E5:
	case "bye" attend labelFunc0449_040C:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Bye!@", 0x0000);
	Func097F(0xFFB7, "@What? Oh, goodbye.@", 0x0002);
	goto labelFunc0449_040F;
labelFunc0449_040C:
	goto labelFunc0449_00F7;
labelFunc0449_040F:
	endconv;
labelFunc0449_0410:
	return;
}


