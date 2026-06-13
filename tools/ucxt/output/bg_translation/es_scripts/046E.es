#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0632 object#(0x632) ();

void Func046E object#(0x46E) ()
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

	if (!(event == 0x0000)) goto labelFunc046E_0009;
	abort;
labelFunc046E_0009:
	UI_show_npc_face(0xFF92, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x02CA]) goto labelFunc046E_0030;
	UI_add_answer("Brother Wayne");
labelFunc046E_0030:
	if (!(!gflags[0x02CE])) goto labelFunc046E_0054;
	if (!(!gflags[0x0003])) goto labelFunc046E_0049;
	message("You see a mage with a wild look in his eyes.");
	say();
	gflags[0x02CE] = true;
	goto labelFunc046E_0051;
labelFunc046E_0049:
	message("You see a mage with a peaceful look in his eyes.");
	say();
	gflags[0x02CE] = true;
labelFunc046E_0051:
	goto labelFunc046E_0058;
labelFunc046E_0054:
	message("\"Thou art talking to me?\" Garok asks, suspiciously.");
	say();
labelFunc046E_0058:
	converse attend labelFunc046E_02EE;
	case "name" attend labelFunc046E_009B:
	message("The mage stares at you a moment. \"Art thou from the Britannian Tax Council?\"");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc046E_007B;
	message("\"Then I am nobody!\"*");
	say();
	abort;
	goto labelFunc046E_008D;
labelFunc046E_007B:
	if (!(!gflags[0x0003])) goto labelFunc046E_0089;
	message("\"Good for thee. I would have had to kill thee. I am Garok Al-Mat. At least, the last time I looked in the mirror, that was who I was!\"");
	say();
	goto labelFunc046E_008D;
labelFunc046E_0089:
	message("\"I like thee already! I am Garok Al-Mat.\"");
	say();
labelFunc046E_008D:
	UI_remove_answer("name");
	UI_add_answer("Tax Council");
labelFunc046E_009B:
	case "job" attend labelFunc046E_00CF:
	if (!(!gflags[0x0003])) goto labelFunc046E_00BE;
	message("Garok looks as if he might suddenly tear out his hair, but he restrains himself.~~\"I am... -was-... a mage. Until it all went wrong. I am attempting to correct things.\"");
	say();
	UI_add_answer(["mage", "correct"]);
	goto labelFunc046E_00CF;
labelFunc046E_00BE:
	message("\"I am, and always have been, a mage. I was down here trying to locate what was amiss with the ethereal waves, but they seem to be all right now.\"");
	say();
	UI_add_answer(["mage", "ethereal waves"]);
labelFunc046E_00CF:
	case "mage" attend labelFunc046E_0104:
	if (!(!gflags[0x0003])) goto labelFunc046E_00F2;
	message("Garok suddenly hits himself on the side of the head.~~ \"Get out! Damn thee! Out of there! No one invited thee into mine head! Away with thee!\"~~Garok hits himself again, shakes his head like a wet dog and makes a blubbering sound with his lips.~~Garok looks at you and smiles. \"That's better. Now, what was it... oh yes, I remember. Thou dost not believe I am a mage? Well, I am. I live in the mountains. But now I am lost in this wretched dungeon.\"");
	say();
	UI_add_answer(["thine head", "lost"]);
	goto labelFunc046E_00FD;
labelFunc046E_00F2:
	message("\"I usually live in the mountains, but I am lost in this dungeon.\"");
	say();
	UI_add_answer("lost");
labelFunc046E_00FD:
	UI_remove_answer("mage");
labelFunc046E_0104:
	case "correct", "ethereal waves" attend labelFunc046E_0132:
	if (!(!gflags[0x0003])) goto labelFunc046E_011D;
	message("\"My magic is not working!");
	say();
	goto labelFunc046E_0121;
labelFunc046E_011D:
	message("\"My magic was not working!");
	say();
labelFunc046E_0121:
	message("\"I attributed it to a disturbance in the ethereal waves! I had to find out what was happening. So here I am!\"");
	say();
	UI_remove_answer(["correct", "ethereal waves"]);
labelFunc046E_0132:
	case "thine head" attend labelFunc046E_014C:
	message("\"There is a voice in mine head. Some demon of some sort. It is always congratulating me on things. And then other times it scolds me for things. I -know- it is not my conscience. I -know- what -he- sounds like! This is... someone else.\"");
	say();
	UI_remove_answer("thine head");
	UI_add_answer("voice");
labelFunc046E_014C:
	case "voice" attend labelFunc046E_015F:
	message("\"I started hearing it around the time my magic began to fail. I do not find it amusing.\"");
	say();
	UI_remove_answer("voice");
labelFunc046E_015F:
	case "lost" attend labelFunc046E_0194:
	if (!(!gflags[0x0003])) goto labelFunc046E_0175;
	message("\"My crystal ball told me that the source of my problems was in a dungeon, but it did not say which one. This was the first dungeon I had ever explored. I have not found anything that might help me, and I cannot find my way out!\"");
	say();
	goto labelFunc046E_0179;
labelFunc046E_0175:
	message("\"I came down here to find the source of my problems. My crystal ball told me that it was in a dungeon, but did not say which one. This is my first dungeon expedition, and now I am lost.\"");
	say();
labelFunc046E_0179:
	UI_remove_answer("lost");
	if (!gflags[0x0000]) goto labelFunc046E_018D;
	UI_add_answer("wrong dungeon");
labelFunc046E_018D:
	UI_add_answer("way out");
labelFunc046E_0194:
	case "wrong dungeon" attend labelFunc046E_01A7:
	message("You explain to Garok that the Tetrahedron Generator is located in Dungeon Deceit.~~\"Hmmmm. Correct idea. Wrong dungeon.\"");
	say();
	UI_remove_answer("wrong dungeon");
labelFunc046E_01A7:
	case "way out" attend labelFunc046E_02BA:
	message("\"Dost thou know the way out?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc046E_02AF;
	message("You tell Garok how to get out of the dungeon.~~\"Why, it sounds so simple! My marbles must be losing me!~~ \"I thank thee! Now I must be on my way. In fact, now that I know the way, I can use what little magic I have going for me to teleport. One must know the direction thou art travelling if one wishes to teleport!~~\"Say, for helping me, wouldst thou like to have some useless reagents? By useless, I mean they are useless to me. They are probably perfectly good reagents. Thou art welcome to have them. Dost thou want them?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc046E_029F;
	var0003 = UI_add_party_items(0x0006, 0x034A, 0xFE99, 0x0000, false);
	var0004 = UI_add_party_items(0x0004, 0x034A, 0xFE99, 0x0001, false);
	var0005 = UI_add_party_items(0x0008, 0x034A, 0xFE99, 0x0004, false);
	var0006 = UI_add_party_items(0x0008, 0x034A, 0xFE99, 0x0005, false);
	var0007 = UI_add_party_items(0x0006, 0x034A, 0xFE99, 0x0003, false);
	var0008 = UI_add_party_items(0x0007, 0x034A, 0xFE99, 0x0002, false);
	var0009 = UI_add_party_items(0x0006, 0x034A, 0xFE99, 0x0006, false);
	var000A = UI_add_party_items(0x0008, 0x034A, 0xFE99, 0x0007, false);
	if (!(var0003 && (var0004 && (var0005 && (var0006 && (var0007 && (var0008 && (var0009 && var000A)))))))) goto labelFunc046E_0298;
	message("\"Good. One less thing I have to carry.\"");
	say();
	goto labelFunc046E_029C;
labelFunc046E_0298:
	message("\"Oh. Thou dost not have the room. Too bad.\"");
	say();
labelFunc046E_029C:
	goto labelFunc046E_02A3;
labelFunc046E_029F:
	message("Garok shrugs. \"Suit thyself. Thanks anyway.\"");
	say();
labelFunc046E_02A3:
	message("You watch as Garok turns, intones a spell, and vanishes.*");
	say();
	item->Func0632();
	abort;
	goto labelFunc046E_02B3;
labelFunc046E_02AF:
	message("\"Oh. Thou art as lost as I, eh? Then we shall surely die in here.\"");
	say();
labelFunc046E_02B3:
	UI_remove_answer("way out");
labelFunc046E_02BA:
	case "Tax Council" attend labelFunc046E_02CD:
	message("\"Grrrr! They are a thorn in my side! They have been seeking me for the past three years! I neglected to report a certain amount of income for reagent distribution, and somehow they found me out. By the way, if thou shouldst ever care to visit me in the mountains, I can sell thee reagents at reduced prices!\"");
	say();
	UI_remove_answer("Tax Council");
labelFunc046E_02CD:
	case "Brother Wayne" attend labelFunc046E_02E0:
	message("\"Yes, I remember him! He is lost, too! Dost thou know if he found his way out? Give him my best when thou dost speak to him.\"");
	say();
	UI_remove_answer("Brother Wayne");
labelFunc046E_02E0:
	case "bye" attend labelFunc046E_02EB:
	goto labelFunc046E_02EE;
labelFunc046E_02EB:
	goto labelFunc046E_0058;
labelFunc046E_02EE:
	endconv;
	message("\"Goodbye.\"*");
	say();
	return;
}


