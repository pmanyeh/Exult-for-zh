#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08B1 0x8B1 ();
extern void Func08B2 0x8B2 ();
extern void Func08AF 0x8AF ();
extern void Func08AD 0x8AD ();
extern void Func08B0 0x8B0 ();

void Func048D object#(0x48D) ()
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

	if (!(event == 0x0001)) goto labelFunc048D_033E;
	if (!(!gflags[0x01B5])) goto labelFunc048D_001E;
	UI_show_npc_face(0xFF73, 0x0000);
	message("You attempt to speak to the undead creature, but it does not, or cannot, respond.*");
	say();
	abort;
labelFunc048D_001E:
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFF70);
	var0003 = false;
	if (!gflags[0x01A3]) goto labelFunc048D_004D;
	if (!(!gflags[0x01AB])) goto labelFunc048D_004A;
	Func08B1();
	goto labelFunc048D_004D;
labelFunc048D_004A:
	Func08B2();
labelFunc048D_004D:
	if (!gflags[0x0198]) goto labelFunc048D_0056;
	Func08AF();
labelFunc048D_0056:
	if (!gflags[0x01AA]) goto labelFunc048D_0062;
	Func08AD();
	goto labelFunc048D_006C;
labelFunc048D_0062:
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_006C:
	var0004 = UI_part_of_day();
	var0005 = UI_get_schedule_type(0xFF73);
	if (!((var0004 == 0x0000) || (var0004 == 0x0001))) goto labelFunc048D_00A3;
	if (!(var0005 == 0x000E)) goto labelFunc048D_009F;
	Func08B0();
	goto labelFunc048D_00A3;
labelFunc048D_009F:
	var0003 = true;
labelFunc048D_00A3:
	if (!(!gflags[0x01C5])) goto labelFunc048D_0164;
	if (!var0003) goto labelFunc048D_00B4;
	message("The Liche practically glows, power coursing visibly through its undead veins.");
	say();
labelFunc048D_00B4:
	message("You step forward to confront this vile-looking creature and he slowly turns to face you. As his intense gaze locks onto your form, you almost wish you hadn't been so bold.~~ \"");
	message(var0000);
	message(".\" A sardonic expression comes to his undead features. \"How may I help thee?\" You get the distinct impression that help is the last thing you'll get from the Liche.");
	say();
	var0006 = Func08F7(0xFFFD);
	var0007 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc048D_00FE;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino steps near you and speaks in a whispered tone.~~\"Do not trust this one, ");
	message(var0001);
	message(". Methinks he'll cause naught but evil.\"");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF73, 0x0000);
	goto labelFunc048D_0129;
labelFunc048D_00FE:
	if (!var0007) goto labelFunc048D_0129;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo steps near you and speaks in a whispered tone.~~\"Do not trust this one, ");
	message(var0001);
	message(". Methinks he'll cause naught but evil.\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_0129:
	var0008 = Func08F7(0xFFFE);
	if (!var0008) goto labelFunc048D_015D;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Uh, ");
	message(var0001);
	message("? I am ready to go now,\" he says to you, cowering from the undead creature.*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_015D:
	gflags[0x01C5] = true;
	goto labelFunc048D_0168;
labelFunc048D_0164:
	message("The Liche performs something akin to a smile and speaks with a sarcastic flair.~~\"Ah, the wondrous Avatar has returned. What have I done to deserve such an honor?\" The word \"honor\" sours on this creature's tongue.");
	say();
labelFunc048D_0168:
	UI_add_answer(["name", "job", "bye"]);
labelFunc048D_0178:
	converse attend labelFunc048D_033D;
	case "name" attend labelFunc048D_019B:
	message("The Liche's dry features take on a haughty appearance. \"Thou mayest call me Lord Horance. It would only be prudent, as I shall one day rule all of Britannia.~~ \"Surprised, Avatar? Come now. Surely thou dost not think that Lord British will stand in my way. I know how to deal with his ilk.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer(["Lord Horance", "Lord British"]);
labelFunc048D_019B:
	case "Lord Horance" attend labelFunc048D_01BB:
	message("\"Ah, it is good to hear such an obeisance from the Avatar. Perhaps thou wilt have a place in my New Order.\" The Liche looks at you with an expression somewhere between malice and humor.");
	say();
	UI_remove_answer("Lord Horance");
	UI_add_answer(["obeisance", "New Order"]);
labelFunc048D_01BB:
	case "obeisance" attend labelFunc048D_01CE:
	message("\"Why, what else wouldst thou call it? Surely thou art truly humbled by my `majestic' presence.\"");
	say();
	UI_remove_answer("obeisance");
labelFunc048D_01CE:
	case "New Order" attend labelFunc048D_01F8:
	message("An expression of zeal lights the dead face of the Liche.~~\"Yes, ");
	message(var0000);
	message(". The dead will rule! I will be their leader and thou canst become an Avatar... to ME!\"");
	say();
	UI_remove_answer("New Order");
	UI_push_answers();
	UI_add_answer(["Over my dead body!", "Fine!"]);
labelFunc048D_01F8:
	case "Over my dead body!" attend labelFunc048D_020E:
	message("\"Why, ");
	message(var0000);
	message(". I thought that was understood. It will be my pleasure to help thee enter the realm of the dead.\"");
	say();
	UI_pop_answers();
labelFunc048D_020E:
	case "Fine!" attend labelFunc048D_021E:
	message("\"Yes, I thought thou wouldst see the wisdom of my vision.\" He looks at you like a cat toying with a mouse.");
	say();
	UI_pop_answers();
labelFunc048D_021E:
	case "Lord British" attend labelFunc048D_023E:
	message("`Evil' is a mild word for the sneer that appears on the Liche's cracked lips. \"It has recently come to my attention that a certain ore found in the Britannian surface can, if fashioned properly, become the bane of the vaunted Lord British.~~\"I know this ore and have used it\tbefore for other purposes. I will use it once again to destroy that so-called Lord.\"");
	say();
	UI_add_answer(["ore", "other purposes"]);
	UI_remove_answer("Lord British");
labelFunc048D_023E:
	case "other purposes" attend labelFunc048D_025F:
	if (!(!gflags[0x0003])) goto labelFunc048D_0254;
	message("He gestures at the walls of the tower. \"How else didst thou expect my tower to withstand the ravaging effect the ether is having\ton my magic?\"");
	say();
	goto labelFunc048D_0258;
labelFunc048D_0254:
	message("He gestures at the walls of the tower. \"It served as an effective barrier against the ravaging effects of the disrupted ether.\"");
	say();
labelFunc048D_0258:
	UI_remove_answer("other purposes");
labelFunc048D_025F:
	case "job" attend labelFunc048D_0297:
	message("A harsh cackle escapes his dry throat. \"I am the illustrious Lord of the Dead, soon to be Lord of all Britannia. Dost thou have any idea of the number of dead people and creatures there are? I thought not.~~\"The dead of the ages are mine to summon and control. The graves of beloved ancestors will spew forth their contents into an army. A special treat for the living, mine undead monsters will be. Imagine a skeletal dragon that cannot be killed. Consider a cabal of everliving mages eternally enthralled to me.~~\"And the most beautiful part of my plot is that, as the living die in these battles, and they will die, they will swell the ranks of the undead host. I will rule supreme -- a world of the dead!\" A terrifying glimpse of his sick and twisted future causes you to shiver\tever so slightly.~~\"And I will have a queen, the lovely Rowena.\"");
	say();
	UI_add_answer("Rowena");
	if (!var0002) goto labelFunc048D_0297;
	UI_show_npc_face(0xFF70, 0x0000);
	message("\"Yes, my Lord. I must be the happiest Lady in all the land.\" Her gaze never wanders from the horrid face of the Liche.");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_0297:
	case "Rowena" attend labelFunc048D_02B7:
	if (!var0002) goto labelFunc048D_02AC;
	message("\"Is she not the most beautiful lady thou hast seen? ~~\"She shall have eternal beauty at my side, and we shall rule together.\"");
	say();
	goto labelFunc048D_02B0;
labelFunc048D_02AC:
	message("\"She is the most beautiful lady I have been witness to. She shall have eternal beauty at my side, and we shall rule together.\" After hearing him speak of his plans for the future, you find this a very unlikely statement.");
	say();
labelFunc048D_02B0:
	UI_remove_answer("Rowena");
labelFunc048D_02B7:
	case "ore" attend labelFunc048D_02CA:
	message("\"Now, now, Avatar, that would be revealing. Then I would have no secret from thee, would I?\"");
	say();
	UI_remove_answer("ore");
labelFunc048D_02CA:
	case "bye" attend labelFunc048D_033A:
	message("\"It is truly sad to see thee go.\" He says with a sardonic smile.*");
	say();
	var0009 = Func08F7(0xFFFC);
	var0007 = Func08F7(0xFFFF);
	if (!var0009) goto labelFunc048D_0310;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Yeah, right.\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF73, 0x0000);
	goto labelFunc048D_0335;
labelFunc048D_0310:
	if (!var0007) goto labelFunc048D_0335;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Yeah, right.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_0335:
	message("\"Feel free to explore mine humble abode. Though, have a care. My guardians are none too intelligent and will most likely assault anything living.\" He smiles with his death's head grin.*");
	say();
	abort;
labelFunc048D_033A:
	goto labelFunc048D_0178;
labelFunc048D_033D:
	endconv;
labelFunc048D_033E:
	return;
}


