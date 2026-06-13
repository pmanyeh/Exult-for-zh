#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func0882 0x882 (var var0000);

void Func009B shape#(0x9B) ()
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

	if (!(event == 0x0001)) goto labelFunc009B_028C;
	UI_show_npc_face(0xFEE3, 0x0000);
	var0000 = Func08F7(0xFFFE);
	var0001 = Func08F7(0xFFFD);
	var0002 = Func0908();
	if (!(!gflags[0x01B3])) goto labelFunc009B_0036;
	message("The hooded figure in the boat ignores you completely.*");
	say();
	abort;
labelFunc009B_0036:
	if (!gflags[0x0198]) goto labelFunc009B_0043;
	UI_add_answer("sacrifice");
labelFunc009B_0043:
	if (!(!gflags[0x01C3])) goto labelFunc009B_0055;
	message("Before you stands a tall, skeletal figure in a ghostly boat. He holds out his hand to you, and says in a sepulchral voice, \"I am the Ferryman of Skara Brae... Thou must pay two coins... to cross the Misty Channel.\"");
	say();
	gflags[0x01C3] = true;
	goto labelFunc009B_0078;
labelFunc009B_0055:
	if (!(!gflags[0x0197])) goto labelFunc009B_0063;
	message("The Ferryman of Skara Brae stands in his spectral boat, holding out his hand for any who would pay his price.");
	say();
	goto labelFunc009B_006E;
labelFunc009B_0063:
	message("The Ferryman of Skara Brae stands in his spectral boat, holding his pole across his chest. He notices your approach. \"You need not pay... to return to the mainland.\"");
	say();
	UI_add_answer("return");
labelFunc009B_006E:
	if (!gflags[0x01A3]) goto labelFunc009B_0078;
	message("He seems a bit disgruntled. \"I told you I would be here... until the end of eternity.\"");
	say();
labelFunc009B_0078:
	UI_add_answer(["name", "job", "Ferryman", "Misty Channel", "Skara Brae", "bye"]);
	if (!(!gflags[0x0197])) goto labelFunc009B_009F;
	UI_add_answer("pay");
labelFunc009B_009F:
	converse attend labelFunc009B_028B;
	case "name" attend labelFunc009B_00B5:
	message("\"I am... the Ferryman.\" His voice creaks like the rocking\tof the boat.");
	say();
	UI_remove_answer("name");
labelFunc009B_00B5:
	case "job" attend labelFunc009B_00C1:
	message("The Ferryman doesn't respond at first, shaking his head from side to side in puzzlement. \"I am... the Ferryman.\"");
	say();
labelFunc009B_00C1:
	case "Ferryman" attend labelFunc009B_00D4:
	message("\"Yes, if you pay me... I can take you across the Misty Channel.\"");
	say();
	UI_remove_answer("Ferryman");
labelFunc009B_00D4:
	case "Misty Channel" attend labelFunc009B_00E7:
	message("He turns to the side and waves his skeletal hand in a sweeping gesture over the water upon which his boat rests. \"This... is the Misty Channel.\"");
	say();
	UI_remove_answer("Misty Channel");
labelFunc009B_00E7:
	case "Skara Brae" attend labelFunc009B_019A:
	if (!(!gflags[0x0197])) goto labelFunc009B_018F;
	message("He turns all the way around and points across the water to the west. \"There... \"");
	say();
	if (!(var0001 && var0000)) goto labelFunc009B_018C;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Er... ");
	message(var0002);
	message(", art thou sure we need to go over there?\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"What's the matter, Shamino? Art thou -afraid-?\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Of course not! I just... well, I... oh, never mind! Let's go!\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	var0003 = Func08F7(0xFFFF);
	if (!var0003) goto labelFunc009B_0182;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo's eyes narrow as he adopts a patronizing look on his face.~~\"And I suppose thou art without fear?\" he says to Spark.*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"No, sir. I am not afraid of a skeleton,\" he says. As he looks at the ferryman, however, he\tgulps.*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc009B_0182:
	UI_show_npc_face(0xFEE3, 0x0000);
labelFunc009B_018C:
	goto labelFunc009B_0193;
labelFunc009B_018F:
	message("The gaunt figure looks around as if perplexed. \"This... is Skara Brae.\"");
	say();
labelFunc009B_0193:
	UI_remove_answer("Skara Brae");
labelFunc009B_019A:
	case "pay", "return" attend labelFunc009B_024F:
	if (!(!gflags[0x0197])) goto labelFunc009B_01EF;
	message("\"Wilt thou pay my price... for passage to Skara Brae?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc009B_01E8;
	var0005 = UI_remove_party_items(0x0002, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc009B_01E1;
	message("You place the coins in the shade's palm and his bony fingers close over them. \"Step aboard... if thou wouldst go... to the Isle of the Dead.\"");
	say();
	Func0882(item);
	goto labelFunc009B_01E5;
labelFunc009B_01E1:
	message("\"I'll not cross... without proper payment.\"");
	say();
labelFunc009B_01E5:
	goto labelFunc009B_01EC;
labelFunc009B_01E8:
	message("\"Very well.\" He seems a little disappointed.");
	say();
labelFunc009B_01EC:
	goto labelFunc009B_0242;
labelFunc009B_01EF:
	message("\"Dost thou wish... to return to the mainland?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc009B_023E;
	var0006 = UI_get_npc_object(0xFF70);
	var0007 = UI_get_party_list();
	var0008 = UI_get_npc_object(0xFF6D);
	if (!((var0006 in var0007) || (var0008 in var0007))) goto labelFunc009B_0233;
	message("\"I may not carry spirits to the mainland.\" He holds his pole in front of himself, blocking your way onto the boat.");
	say();
	goto labelFunc009B_023B;
labelFunc009B_0233:
	message("The Ferryman seems to smile beneath his hood as he motions for you to once more board his spectral boat.");
	say();
	Func0882(item);
labelFunc009B_023B:
	goto labelFunc009B_0242;
labelFunc009B_023E:
	message("You think you see pale flames flicker in the depths of his cowl where his eyes should be. They fade as he sighs, \"No matter...\"");
	say();
labelFunc009B_0242:
	UI_remove_answer(["pay", "return"]);
labelFunc009B_024F:
	case "sacrifice" attend labelFunc009B_027B:
	if (!(!gflags[0x0199])) goto labelFunc009B_0270;
	message("Just for a moment you think you see a fleeting expression of hope cross the Ferryman's skeletal features, then it's gone. \"I must perform my duty... until the end of eternity.\"");
	say();
	UI_remove_answer("sacrifice");
	gflags[0x0199] = true;
	goto labelFunc009B_027B;
labelFunc009B_0270:
	message("\"Do not taunt me... with hopes of release. I must perform my duty... until the end of eternity.\"");
	say();
	UI_remove_answer("sacrifice");
labelFunc009B_027B:
	case "bye" attend labelFunc009B_0288:
	message("Without acknowledging your goodbye, the Ferryman lowers his head and holds his pole across his chest.*");
	say();
	abort;
labelFunc009B_0288:
	goto labelFunc009B_009F;
labelFunc009B_028B:
	endconv;
labelFunc009B_028C:
	if (!(event == 0x0000)) goto labelFunc009B_0295;
	abort;
labelFunc009B_0295:
	return;
}


