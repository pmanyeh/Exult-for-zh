#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func088D 0x88D ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0415 object#(0x415) ()
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

	if (!(event == 0x0001)) goto labelFunc0415_03B4;
	UI_show_npc_face(0xFFEB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFEB));
	UI_add_answer(["name", "job", "murder", "bye"]);
	if (!gflags[0x0040]) goto labelFunc0415_0046;
	UI_add_answer("Crown Jewel");
labelFunc0415_0046:
	if (!gflags[0x003F]) goto labelFunc0415_0053;
	UI_add_answer("Fellowship");
labelFunc0415_0053:
	if (!gflags[0x0043]) goto labelFunc0415_0060;
	UI_add_answer("Hook");
labelFunc0415_0060:
	var0002 = 0x0000;
	if (!(!gflags[0x0055])) goto labelFunc0415_0078;
	message("You see a salty old sailor who reeks of tobacco.");
	say();
	gflags[0x0055] = true;
	goto labelFunc0415_007C;
labelFunc0415_0078:
	message("\"Yes, matey?\" Gargan asks, coughing.");
	say();
labelFunc0415_007C:
	converse attend labelFunc0415_03AF;
	case "name" attend labelFunc0415_00A9:
	message("\"My name is Gargan.\"~He sniffs loudly.");
	say();
	UI_remove_answer("name");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_00A9;
	Func088D();
labelFunc0415_00A9:
	case "job" attend labelFunc0415_00DD:
	message("\"I am the Trinsic shipwright. If thou wouldst like to know about a ship or a sextant, just say so.\"");
	say();
	message("Gargan coughs.");
	say();
	UI_add_answer(["ship", "sextant"]);
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_00DD;
	Func088D();
labelFunc0415_00DD:
	case "ship" attend labelFunc0415_0118:
	message("\"Thou dost want to buy a ship?\" the old man asks, smiling. (Apparently not too many folks buy ships these days.)~\"My ships are sturdy and well built. They may not be built by Owen, but they are fine vessels! But thou must first purchase a deed.\"");
	say();
	message("Gargan wipes his runny nose on his sleeve.");
	say();
	UI_remove_answer("ship");
	UI_add_answer(["Owen", "deed"]);
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_0118;
	Func088D();
labelFunc0415_0118:
	case "sextant" attend labelFunc0415_01A8:
	if (!(!(var0001 == 0x001E))) goto labelFunc0415_0132;
	message("\"Well, ye'll have to come to the shop when it is is open.\"");
	say();
	goto labelFunc0415_01A8;
labelFunc0415_0132:
	message("\"I sell sextants for 80 gold. Want one?\"~Gargan clears his throat.");
	say();
	if (!Func090A()) goto labelFunc0415_0186;
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0003 >= 0x0050)) goto labelFunc0415_017F;
	var0004 = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, true);
	message("\"Here ye are!\"");
	say();
	if (!(!var0004)) goto labelFunc0415_017C;
	message("\"Thine arms are too full to carry the sextant!\"~Gargan sneezes.");
	say();
labelFunc0415_017C:
	goto labelFunc0415_0183;
labelFunc0415_017F:
	message("\"Thou dost not have enough gold, sailor.\" ~Gargan sneezes.");
	say();
labelFunc0415_0183:
	goto labelFunc0415_018A;
labelFunc0415_0186:
	message("\"Suit thyself.\"~Gargan sneezes.");
	say();
labelFunc0415_018A:
	UI_remove_answer("sextant");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_01A8;
	Func088D();
labelFunc0415_01A8:
	case "Owen" attend labelFunc0415_01D2:
	message("\"Thou hast not heard of Owen? Finest shipwright in the land. He lives in Minoc.\"~Gargan coughs.");
	say();
	UI_remove_answer("Owen");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_01D2;
	Func088D();
labelFunc0415_01D2:
	case "deed" attend labelFunc0415_0299:
	if (!(!(var0001 == 0x001E))) goto labelFunc0415_01EC;
	message("\"Well, ye'll have to come to the shop when it is open.\"");
	say();
	goto labelFunc0415_0299;
labelFunc0415_01EC:
	if (!gflags[0x0058]) goto labelFunc0415_01FD;
	message("\"I already sold thee the deed to 'The Scaly Eel'! It was the only ship I had!\"");
	say();
	message("Gargan coughs loudly.");
	say();
	goto labelFunc0415_027B;
labelFunc0415_01FD:
	message("\"The deed I can sell thee is for the ship 'The Scaly Eel.' It goes for 600 gold. Interested?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0415_0277;
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0003 >= 0x0258)) goto labelFunc0415_0270;
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x000E, 0xFE99, true);
	if (!var0006) goto labelFunc0415_0263;
	message("\"All right, then!\" the sailor replies. He hands you the deed and takes your gold.~Gargan sneezes.");
	say();
	var0007 = UI_remove_party_items(0x0258, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0058] = true;
	goto labelFunc0415_026D;
labelFunc0415_0263:
	message("\"Thou'rt already carrying enough to sink a galleon, ");
	message(var0000);
	message("! If thou wilt leave something behind, mayhaps thou wilt be able to sail, and I will be glad, indeed, to sell thee the deed.\"~Gargan sneezes.");
	say();
labelFunc0415_026D:
	goto labelFunc0415_0274;
labelFunc0415_0270:
	message("\"Sorry, matey,\" Gargan says. \"Thou dost not have enough gold!\"~Gargan sneezes.");
	say();
labelFunc0415_0274:
	goto labelFunc0415_027B;
labelFunc0415_0277:
	message("\"Some other time, then,\" the sailor shrugs, disappointed.~Gargan sneezes.");
	say();
labelFunc0415_027B:
	UI_remove_answer("deed");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_0299;
	Func088D();
labelFunc0415_0299:
	case "murder" attend labelFunc0415_02F1:
	message("\"I heard about that. Terrible thing to happen. Can't say I saw or heard anything, though.\"~Gargan coughs, clears his throat loudly, then spits.");
	say();
	var0008 = Func08F7(0xFFFE);
	if (!var0008) goto labelFunc0415_02D3;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Ooooh, yuck!\"");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFEB, 0x0000);
labelFunc0415_02D3:
	UI_remove_answer("murder");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_02F1;
	Func088D();
labelFunc0415_02F1:
	case "Crown Jewel" attend labelFunc0415_031B:
	message("\"Yes, that ship was docked overnight.\" He consults his log. \"She sailed for Britain at sunrise. I do not recall seeing anyone get on or off.\"~Gargan snorts and coughs a couple of times.");
	say();
	UI_remove_answer("Crown Jewel");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_031B;
	Func088D();
labelFunc0415_031B:
	case "Hook" attend labelFunc0415_0377:
	message("\"Matey, I have always seen pirates and sailors with peglegs and hooks. If thou hast seen one, thou hast seen another.\" But the man suddenly frowns. \"Hmm. Now that thou dost mention it, I -did- see a man with a hook late last night after sundown. I was leaving the shop and saw him outside. There was a wingless gargoyle with him. They were walking east.\"");
	say();
	message("Gargan sneezes, then coughs a couple of times.");
	say();
	var0008 = Func08F7(0xFFFE);
	if (!var0008) goto labelFunc0415_0359;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"I told thee! It was him!\"");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFEB, 0x0000);
labelFunc0415_0359:
	UI_remove_answer("Hook");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_0377;
	Func088D();
labelFunc0415_0377:
	case "Fellowship" attend labelFunc0415_03A1:
	message("\"I am too old to pay attention to them.\"~Gargan wipes his runny nose on his sleeve.");
	say();
	UI_remove_answer("Fellowship");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_03A1;
	Func088D();
labelFunc0415_03A1:
	case "bye" attend labelFunc0415_03AC:
	goto labelFunc0415_03AF;
labelFunc0415_03AC:
	goto labelFunc0415_007C;
labelFunc0415_03AF:
	endconv;
	message("\"May thy day have smooth sailing,\" the sailor starts to say, but a coughing spasm interrupts him.*");
	say();
labelFunc0415_03B4:
	if (!(event == 0x0000)) goto labelFunc0415_03C2;
	Func092E(0xFFEB);
labelFunc0415_03C2:
	return;
}


