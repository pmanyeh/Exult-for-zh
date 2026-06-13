#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04F8 object#(0x4F8) ()
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;

	if (!(event == 0x0001)) goto labelFunc04F8_0424;
	UI_show_npc_face(0xFF08, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x01F7])) goto labelFunc04F8_004C;
	message("You see a scholarly-looking man with a friendly expression.");
	say();
	gflags[0x01F7] = true;
	gflags[0x01F9] = true;
	goto labelFunc04F8_0056;
labelFunc04F8_004C:
	message("\"Salutations, ");
	message(var0001);
	message(".\" Brion smiles.");
	say();
labelFunc04F8_0056:
	if (!gflags[0x0008]) goto labelFunc04F8_0063;
	UI_add_answer("Caddellite");
labelFunc04F8_0063:
	if (!gflags[0x01EE]) goto labelFunc04F8_0070;
	UI_add_answer("crystals");
labelFunc04F8_0070:
	if (!(gflags[0x01ED] && (!gflags[0x01F0]))) goto labelFunc04F8_0082;
	UI_add_answer("have crystal");
labelFunc04F8_0082:
	if (!gflags[0x0209]) goto labelFunc04F8_009A;
	if (!(gflags[0x01DA] && (!var0002))) goto labelFunc04F8_009A;
	UI_add_answer("Zelda's feelings");
labelFunc04F8_009A:
	converse attend labelFunc04F8_0423;
	case "name" attend labelFunc04F8_00C2:
	message("\"Why, thou mayest call me Brion.\"");
	say();
	if (!(gflags[0x01DA] && (!var0002))) goto labelFunc04F8_00BB;
	UI_add_answer("Zelda's feelings");
labelFunc04F8_00BB:
	UI_remove_answer("name");
labelFunc04F8_00C2:
	case "job" attend labelFunc04F8_00E8:
	message("\"I am the head of the observatory here in Moonglow,\" he says proudly. \"This is where the telescope is kept.\"");
	say();
	UI_add_answer(["telescope", "Moonglow"]);
	if (!gflags[0x0100]) goto labelFunc04F8_00E8;
	UI_add_answer("event");
labelFunc04F8_00E8:
	case "Moonglow" attend labelFunc04F8_0102:
	message("\"Why, I love living here in Moonglow. I very much like the people here.\"");
	say();
	UI_add_answer("people");
	UI_remove_answer("Moonglow");
labelFunc04F8_0102:
	case "people" attend labelFunc04F8_0125:
	message("\"Hast thou spoken with my twin, Nelson? He heads the Lycaeum. Or Elad? And surely thou knowest about the mage, Penumbra.\"");
	say();
	UI_add_answer(["Nelson", "Elad", "Penumbra"]);
	UI_remove_answer("people");
labelFunc04F8_0125:
	case "Zelda's feelings" attend labelFunc04F8_0140:
	var0002 = true;
	gflags[0x01DB] = true;
	message("\"Oh, I see,\" he shrugs. \"I never really thought about my brother's assistant in such a manner. That is too bad, for my time permits nothing but mine observations. Ah, well, what else can I help thee with?\"");
	say();
	UI_remove_answer("Zelda's feelings");
labelFunc04F8_0140:
	case "Nelson" attend labelFunc04F8_0153:
	message("\"I do not see him as often as I would like, for we are so heavily involved with our work. He will be easy to recognize shouldst thou see him, for people tell us we look identical. I do not see it, of course, for, not only was he born with the brains, but also the handsome face.\"");
	say();
	UI_remove_answer("Nelson");
labelFunc04F8_0153:
	case "Elad" attend labelFunc04F8_0166:
	message("\"Poor Elad. He sometimes joins me at night to view the heavens. He has been trying to leave Moonglow for many years. He likes the island, but is filled with wanderlust.\" He smiles.");
	say();
	UI_remove_answer("Elad");
labelFunc04F8_0166:
	case "Penumbra" attend labelFunc04F8_0179:
	message("\"Thou hast not heard? Why, two hundred years ago she put herself to sleep.\"");
	say();
	UI_remove_answer("Penumbra");
labelFunc04F8_0179:
	case "telescope" attend labelFunc04F8_0193:
	message("\"I have it upstairs, of course. Thou art welcome to use it as often as thou wishest. In fact, I also have an orrery, shouldst thou desire to see that as well.\"");
	say();
	UI_add_answer("orrery");
	UI_remove_answer("telescope");
labelFunc04F8_0193:
	case "Caddellite" attend labelFunc04F8_01AD:
	message("He looks at you strangely, shrugs, and says, \"Why, Caddellite is a mineral that is not native to Britannia. In fact, it only comes from meteorites.~~ \"And the last known meteor to strike the planet landed somewhere in the North East sea. Why dost thou want to know?\"");
	say();
	UI_add_answer("helmet");
	UI_remove_answer("Caddellite");
labelFunc04F8_01AD:
	case "helmet" attend labelFunc04F8_01C4:
	message("\"Thou dost want a helmet made of Caddellite?\" He thinks carefully. \"Perhaps Zorn in Minoc would have the skills to build a helmet such as thou desirest. If thou findest the Caddellite, take it to him.~~\"I have heard rumors of an island that once existed in the North East sea. Perhaps my brother at the Lycaeum could help with that.\"");
	say();
	UI_remove_answer("helmet");
	gflags[0x01F6] = true;
labelFunc04F8_01C4:
	case "orrery" attend labelFunc04F8_01E9:
	message("The orrery? Why, 'tis a model of all the planets in our solar system, including the two moons of Britannia. The orrery moves to match the actual, current orbits of our real system.");
	say();
	if (!(!var0003)) goto labelFunc04F8_01E2;
	message("\"I am very excited, for shortly a very rare event will occur!\"");
	say();
	UI_add_answer("event");
labelFunc04F8_01E2:
	UI_remove_answer("orrery");
labelFunc04F8_01E9:
	case "event" attend labelFunc04F8_0200:
	message("\"Thou art referring to what we in the business call the Astronomical Alignment. The planets and the moons will all line up perfectly, something that happens only once every 800 years!\"");
	say();
	var0003 = true;
	UI_remove_answer("event");
labelFunc04F8_0200:
	case "bye" attend labelFunc04F8_0246:
	if (!(gflags[0x01E8] && (gflags[0x01E9] && (gflags[0x01EA] && gflags[0x01DD])))) goto labelFunc04F8_0228;
	message("\"Good day, ");
	message(var0001);
	message(". Thou mayest use mine observatory as often as thou wishest.\"*");
	say();
	abort;
	goto labelFunc04F8_0246;
labelFunc04F8_0228:
	message("\"Before thou dost depart, let me show thee a few of my trinkets. Here is my...\"");
	say();
	UI_push_answers();
	UI_add_answer(["moon", "sextant", "kite", "crystals", "nothing"]);
labelFunc04F8_0246:
	case "nothing" attend labelFunc04F8_0252:
	UI_pop_answers();
labelFunc04F8_0252:
	case "moon" attend labelFunc04F8_02AC:
	var0004 = false;
	var0005 = UI_find_nearby(item, 0x0179, 0x0014, 0x0000);
	enum();
labelFunc04F8_0270:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc04F8_0290;
	if (!(UI_get_item_frame(var0008) == 0x001C)) goto labelFunc04F8_028D;
	var0004 = true;
labelFunc04F8_028D:
	goto labelFunc04F8_0270;
labelFunc04F8_0290:
	if (!var0004) goto labelFunc04F8_029D;
	message("\"This represents one of the moons that orbit Britannia.\" He hands the model to you. Taking it, you quickly realize that it is made up entirely of green cheese.~~\"I carved it myself,\" he says as you return it to him.");
	say();
	goto labelFunc04F8_02A1;
labelFunc04F8_029D:
	message("\"Now where did that go?\" he says, scratching his head. \"Well, it is around here somewhere. I can show thee at a later time.\" He seems more distraught than he is willing to convey.");
	say();
labelFunc04F8_02A1:
	UI_remove_answer("moon");
	gflags[0x01E8] = true;
labelFunc04F8_02AC:
	case "sextant" attend labelFunc04F8_0308:
	var0009 = false;
	var000A = UI_find_nearby(0xFE9C, 0x028A, 0x0028, 0x0000);
	enum();
labelFunc04F8_02CC:
	for (var0008 in var000A with var000B to var000C) attend labelFunc04F8_02EC;
	if (!(UI_get_item_frame(var0008) == 0x0001)) goto labelFunc04F8_02E9;
	var0009 = true;
labelFunc04F8_02E9:
	goto labelFunc04F8_02CC;
labelFunc04F8_02EC:
	if (!var0009) goto labelFunc04F8_02F9;
	message("He hands you a solid gold sextant. \"This has been passed on to each and every individual who has ever held a position at the observatory here in Moonglow. 'Tis more than 200 years old.\" He beams as you return it to him.");
	say();
	goto labelFunc04F8_02FD;
labelFunc04F8_02F9:
	message("\"Damn! 'Tis gone! That has been here for more than 200 years.\" He does not seem pleased.");
	say();
labelFunc04F8_02FD:
	UI_remove_answer("sextant");
	gflags[0x01E9] = true;
labelFunc04F8_0308:
	case "kite" attend labelFunc04F8_033C:
	var000D = UI_find_nearest(0xFE9C, 0x0149, 0xFFFF);
	if (!var000D) goto labelFunc04F8_032D;
	message("He shows you a kite. \"I made this myself by reading one of the books in my brother's library.\"");
	say();
	goto labelFunc04F8_0331;
labelFunc04F8_032D:
	message("\"Where did that disappear to?\" He scratches his chin, obviously puzzled. \"I do hope it has not disappeared. I constructed it from a book in my brother's library.\"");
	say();
labelFunc04F8_0331:
	UI_remove_answer("kite");
	gflags[0x01EA] = true;
labelFunc04F8_033C:
	case "crystals" attend labelFunc04F8_037F:
	if (!(!gflags[0x01EE])) goto labelFunc04F8_034F;
	message("\"This,\" he says, presenting a collection of crystals that seem to be attached in some indeterminable fashion, \"is an orrery viewer. It permits one to see mine orrery here from anywhere in Britannia.\"~~He seems thoughtful.~~\"I know thou cannot stay around here to see the alignment.");
	say();
labelFunc04F8_034F:
	message("Wouldst thou like to have this to view mine orrery and better predict the planet's position?\"");
	say();
	gflags[0x01DD] = true;
	var000E = Func090A();
	if (!var000E) goto labelFunc04F8_036A;
	message("He smiles proudly. \"I thought thou wouldst. However, there is one problem. I still need one more crystal to completely finish the viewer. If thou wouldst visit the tavern, thou mightest find one of the merchants or travellers there who sometimes provide me with crystals. If thou canst find another crystal, I will be able to give thee the completed viewer.\"");
	say();
	goto labelFunc04F8_0378;
labelFunc04F8_036A:
	message("\"Very well, ");
	message(var0001);
	message(". I hope thou dost not regret this later.\"");
	say();
	gflags[0x01EE] = true;
labelFunc04F8_0378:
	UI_remove_answer("crystals");
labelFunc04F8_037F:
	case "have crystal" attend labelFunc04F8_03E0:
	var000F = Func0931(0xFE9B, 0x0001, 0x02EA, 0xFE99, 0xFE99);
	if (!var000F) goto labelFunc04F8_03D6;
	message("\"Thou hast the crystal? Excellent.\" He takes the crystal that you got from the adventurer and begins attaching it to his orrery viewer. Shortly he is finished.");
	say();
	gflags[0x01ED] = false;
	UI_remove_npc(0xFF5C);
	UI_remove_answer("have crystal");
	UI_add_answer("want crystal");
	var0010 = UI_remove_party_items(0x0001, 0x02EA, 0xFE99, 0xFE99, false);
	goto labelFunc04F8_03E0;
labelFunc04F8_03D6:
	message("\"I am sorry, ");
	message(var0001);
	message(", but I must have the crystal to complete the viewer.\"");
	say();
labelFunc04F8_03E0:
	case "want crystal" attend labelFunc04F8_0420:
	var0011 = UI_add_party_items(0x0001, 0x0302, 0xFE99, 0x0001, 0x0000);
	if (!var0011) goto labelFunc04F8_0415;
	message("\"Use it well, ");
	message(var0001);
	message(".\" He gives the contraption to you.");
	say();
	gflags[0x01F0] = true;
	goto labelFunc04F8_0419;
labelFunc04F8_0415:
	message("He shakes his head. \"Thou dost not have enough room for it. Perhaps when thou dost return at a later time.\"");
	say();
labelFunc04F8_0419:
	UI_remove_answer("want crystal");
labelFunc04F8_0420:
	goto labelFunc04F8_009A;
labelFunc04F8_0423:
	endconv;
labelFunc04F8_0424:
	if (!(event == 0x0000)) goto labelFunc04F8_0432;
	Func092E(0xFF08);
labelFunc04F8_0432:
	return;
}


