#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0456 object#(0x456) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0456_01A0;
	UI_show_npc_face(0xFFAA, 0x0000);
	var0000 = Func0909();
	if (!(!gflags[0x0111])) goto labelFunc0456_002A;
	message("You see a cheerful woman with bright eyes and blonde hair.");
	say();
	gflags[0x0111] = true;
	goto labelFunc0456_0034;
labelFunc0456_002A:
	message("\"Hello again, ");
	message(var0000);
	message(".\" says Xanthia.");
	say();
labelFunc0456_0034:
	UI_add_answer(["name", "job", "bye"]);
labelFunc0456_0044:
	converse attend labelFunc0456_0195;
	case "name" attend labelFunc0456_005A:
	message("\"Hello, my name is Xanthia.\"");
	say();
	UI_remove_answer("name");
labelFunc0456_005A:
	case "job" attend labelFunc0456_008E:
	if (!gflags[0x011F]) goto labelFunc0456_007F;
	message("\"I am a member of the Artist's Guild in Minoc. I make and sell candelabras.\"");
	say();
	UI_add_answer(["Artist's Guild", "Minoc", "candelabras"]);
	goto labelFunc0456_008E;
labelFunc0456_007F:
	message("\"If thou wouldst not mind, we can perhaps get to know each other during a more sociable occasion! Two people have been recently murdered over at William's sawmill! This is hardly the time to get to know someone!\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc0456_008E:
	case "Artist's Guild" attend labelFunc0456_00A1:
	message("\"We are a guild of artists and craftspeople united for the common good and dedicated to the advancement of the arts, as well as showing other artists that it is possible to exist solely by thine own efforts without sacrificing thy creativity.\"");
	say();
	UI_remove_answer("Artist's Guild");
labelFunc0456_00A1:
	case "candelabras" attend labelFunc0456_00BB:
	message("\"I make simple candelabras, but sometimes I will do commissioned work, making more specific ones. I was hired by The Fellowship to make the candelabras for all of their Fellowship halls.\"");
	say();
	UI_remove_answer("candelabras");
	UI_add_answer("Fellowship");
labelFunc0456_00BB:
	case "Fellowship" attend labelFunc0456_00E2:
	message("\"Elynor, the head of the local Fellowship branch, showed me a picture of the Fellowship symbol and I based the design for my candelabra on that.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer("Elynor");
	if (!gflags[0x0122]) goto labelFunc0456_00E2;
	UI_add_answer("candelabra at murder site");
labelFunc0456_00E2:
	case "Elynor" attend labelFunc0456_00FC:
	message("\"Yes, she's quite a recruiter. Why, she got Burnside, our Mayor, to join, as well as Gregor, the local head of the Britannian Mining Company, and Owen, our shipwright. He is soon to be famous, I am sorry to say. She has never asked me to join, thank goodness.\"");
	say();
	UI_remove_answer("Elynor");
	UI_add_answer("Owen");
labelFunc0456_00FC:
	case "candelabra at murder site" attend labelFunc0456_012A:
	message("You describe the candelabra found at the murder scene to Xanthia. Her eyes widen with recognition. \"Yes, that is one of the candelabras I made. 'Twas in the sawmill at the murder site?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0456_011B;
	message("Xanthia looks shocked. \"How horrible! I swear I do not know how it could have gotten there! Thou shouldst certainly ask Elynor about it!\"");
	say();
	goto labelFunc0456_011F;
labelFunc0456_011B:
	message("She gives you a slightly cross look. \"Well, I hope that thou didst not steal it from Elynor.\"");
	say();
labelFunc0456_011F:
	gflags[0x0125] = true;
	UI_remove_answer("candelabra at murder site");
labelFunc0456_012A:
	case "Minoc" attend labelFunc0456_014A:
	message("\"With the success of the mine, Minoc is a prosperous city. Not a place where one is used to having murders happen. A good place for our Artist's Guild to do well. But things have always been hard for us here. Now I fear they may get worse.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["worse", "murders"]);
labelFunc0456_014A:
	case "worse" attend labelFunc0456_015D:
	message("\"That is what Gladstone says. Thou hadst better ask him about it.\"");
	say();
	UI_remove_answer("worse");
labelFunc0456_015D:
	case "murders" attend labelFunc0456_0174:
	message("\"It is so terrible! I never knew Frederico or Tania personally, but I did meet their son, Sasha, once. He was a nice boy, if somewhat misguided. He spent the night with us once at the Artist's Guild, as a guest of Seara.\"");
	say();
	gflags[0x00FE] = true;
	UI_remove_answer("murders");
labelFunc0456_0174:
	case "Owen" attend labelFunc0456_0187:
	message("\"They are to build a monument to Owen for some reason or another. Owen and Elynor refuse to use anyone from the Guild to help build it! Rather rude of them, dost thou not think?\"");
	say();
	UI_remove_answer("Owen");
labelFunc0456_0187:
	case "bye" attend labelFunc0456_0192:
	goto labelFunc0456_0195;
labelFunc0456_0192:
	goto labelFunc0456_0044;
labelFunc0456_0195:
	endconv;
	message("\"Farewell, ");
	message(var0000);
	message(". I hope I was of some assistance to thee.\"*");
	say();
labelFunc0456_01A0:
	if (!(event == 0x0000)) goto labelFunc0456_01AE;
	Func092E(0xFFAA);
labelFunc0456_01AE:
	return;
}


