#game "blackgate"
// externs
extern void Func0843 0x843 ();
extern var Func0844 0x844 (var var0000);
extern var Func090A 0x90A ();
extern void Func0690 object#(0x690) ();
extern var Func0846 0x846 ();
extern void Func0845 0x845 (var var0000);
extern var Func0908 0x908 ();
extern var Func0849 0x849 (var var0000);
extern var Func0848 0x848 (var var0000);
extern var Func0847 0x847 (var var0000);
extern var Func08E7 0x8E7 ();
extern void Func06FC object#(0x6FC) ();
extern var Func092D 0x92D (var var0000);

void Func06F6 object#(0x6F6) ()
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
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;

	if (!(!gflags[0x032F])) goto labelFunc06F6_0357;
	UI_show_npc_face(0xFEDE, 0x0000);
	var0000 = false;
	var0001 = UI_find_nearby(item, 0x009A, 0x000A, 0x0008);
	enum();
labelFunc06F6_0027:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06F6_004E;
	if (!UI_get_cont_items(var0004, 0x031D, 0x00F0, 0x0004)) goto labelFunc06F6_004B;
	var0000 = var0004;
labelFunc06F6_004B:
	goto labelFunc06F6_0027;
labelFunc06F6_004E:
	if (!var0000) goto labelFunc06F6_0093;
	message("\"Yes, Master. How may I serve thee?\" The dark form in the mirror bows deeply.");
	say();
	UI_show_npc_face(0xFEE2, 0x0001);
	var0005 = "Erethian";
	if (!(!gflags[0x0310])) goto labelFunc06F6_0075;
	var0005 = "the mage";
labelFunc06F6_0075:
	message("Suprised, ");
	message(var0005);
	message(" looks around and says, \"I don't recall summoning thee. Nevermind, I have no need of thee at the current time. Begone!\" The old man waves his hand, negligently.");
	say();
	UI_show_npc_face(0xFEDE, 0x0000);
	message("Through a tightly clenched smile, the figure replies, \"Very well...\" And after a significant pause, \"Master.\"*");
	say();
	Func0843();
	goto labelFunc06F6_01B1;
labelFunc06F6_0093:
	if (!gflags[0x0332]) goto labelFunc06F6_0136;
	if (!gflags[0x0333]) goto labelFunc06F6_00A9;
	message("Arcadion appears truly astonished, \"For what dost thou wait?! I beg of thee! Release me!\"");
	say();
	Func0843();
	goto labelFunc06F6_0133;
labelFunc06F6_00A9:
	var0006 = UI_find_nearby(item, 0x02F8, 0x000F, 0x0000);
	var0007 = false;
	if (!var0006) goto labelFunc06F6_00FB;
	var0007 = Func0844(var0006);
	if (!var0007) goto labelFunc06F6_00E1;
	message("\"There is a gem nearby that can free me! It is a small blue stone. Take it, quickly, and use it to free me of this accursed mirror!\" The large daemon seethes with pent up frustration.*");
	say();
	gflags[0x0333] = true;
	Func0843();
	goto labelFunc06F6_00F8;
labelFunc06F6_00E1:
	message("\"Can I be of some small assistance in thy quest to release me. If so, thou hast but to ask.\" Arcadion's smile stretches from ear to ear.");
	say();
	UI_add_answer(["name", "job", "release", "bye"]);
labelFunc06F6_00F8:
	goto labelFunc06F6_0133;
labelFunc06F6_00FB:
	if (!UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0x000C)) goto labelFunc06F6_011C;
	message("\"Thou hast within thy possessions a small blue gem. It can be used to free me! Crack this accursed mirror with it! I'll enter it as I am freed!\"\tArcadion looks prepared to burst from the mirror.*");
	say();
	gflags[0x0333] = true;
	Func0843();
	goto labelFunc06F6_0133;
labelFunc06F6_011C:
	message("\"Can I be of some small assistance in thy quest to release me. If so, thou hast but to ask.\" Arcadion's smile stretches from ear to ear.");
	say();
	UI_add_answer(["name", "job", "release", "bye"]);
labelFunc06F6_0133:
	goto labelFunc06F6_01B1;
labelFunc06F6_0136:
	if (!gflags[0x0331]) goto labelFunc06F6_0171;
	message("\"Run along now little mortal. Do not pester thy betters with the idle rantings of thy tongue.\" He appears at first nonchallant, then his expression becomes intense, \"That is unless thou hast reconsidered my offer... Hast thou?\"");
	say();
	if (!Func090A()) goto labelFunc06F6_0167;
	message("A wicked look of triumph flickers across Arcadion's face to be quickly replaced by a ludicrous semblance of gratitude, \"Thou art truly courageous to vow to release\tme. My eternal thanks are thine.\" An oily grin coats the daemon's face, \"Thou hast made quite a powerful ally this day, mortal.\" His eyes blink in what is possibly meant to be a charming manner.");
	say();
	gflags[0x0332] = true;
	UI_add_answer(["name", "job", "daemon", "release", "bye"]);
	goto labelFunc06F6_016E;
labelFunc06F6_0167:
	message("\"Ah, I see. Still content to run about with the other sheep.\" He waves you off and dims from sight.*");
	say();
	Func0843();
labelFunc06F6_016E:
	goto labelFunc06F6_01B1;
labelFunc06F6_0171:
	if (!(!gflags[0x0313])) goto labelFunc06F6_019A;
	message("\"Yes, Master. How may I serve thee...\" The wavering visage in the mirror hesitates for a moment, \"Thou art not my master.\"");
	say();
	message("He then continues with a small bow, \"Greetings Britannian. What dost thou wish of the great daemon, Arcadion?\"");
	say();
	gflags[0x0313] = true;
	UI_add_answer(["name", "job", "daemon", "bye"]);
	goto labelFunc06F6_01B1;
labelFunc06F6_019A:
	message("\"Greetings once again Britannian. What dost thou wish of me.\" The daemon is the soul of congeniality.");
	say();
	UI_add_answer(["name", "job", "daemon", "bye"]);
labelFunc06F6_01B1:
	var0008 = false;
labelFunc06F6_01B5:
	converse attend labelFunc06F6_0352;
	case "name" attend labelFunc06F6_01E3:
	message("The big daemon smiles ingratiatingly, showing inch long pointed\tteeth. \"As I have said, I am the daemon Arcadion.\"");
	say();
	if (!gflags[0x0332]) goto labelFunc06F6_01CE;
	message("His somewhat polished veneer seems to be unravelling at the edges in his anticipation of freedom.");
	say();
labelFunc06F6_01CE:
	if (!(!var0008)) goto labelFunc06F6_01DC;
	UI_add_answer("daemon");
labelFunc06F6_01DC:
	UI_remove_answer("name");
labelFunc06F6_01E3:
	case "job" attend labelFunc06F6_0218:
	if (!(!gflags[0x0332])) goto labelFunc06F6_0206;
	message("Arcadion attempts to smile, but failing miserably, he gives you a grimace that could turn a dragon to stone. \"I am currently in the service of one mage, Erethian by name.\" He states, rather formally. You get the distinct impression that\tArcadion would just as soon\trip Erethian limb from limb as serve him.");
	say();
	UI_add_answer(["Erethian", "serve"]);
	goto labelFunc06F6_0211;
labelFunc06F6_0206:
	message("\"Well, if thou keepest thy promise to release me, I'll be free of that\tlice-ridden, flea-bitten, old mage.\"");
	say();
	UI_add_answer("release");
labelFunc06F6_0211:
	UI_remove_answer("job");
labelFunc06F6_0218:
	case "Erethian" attend labelFunc06F6_0239:
	message("\"He is my master...\" The daemon's smile contorts into a scarcely hidden scowl of hatred. \"Until other... arrangements can be made.\" Arcadion's toothsome smile appears on his shadowy features.");
	say();
	if (!(!var0008)) goto labelFunc06F6_0232;
	UI_add_answer("daemon");
labelFunc06F6_0232:
	UI_remove_answer("Erethian");
labelFunc06F6_0239:
	case "daemon" attend labelFunc06F6_0250:
	message("\"That is how thy people address those of my race.\" You can't tell from Arcadion's tone of voice whether or not he minds that fact.");
	say();
	UI_remove_answer("daemon");
	var0008 = true;
labelFunc06F6_0250:
	case "serve" attend labelFunc06F6_02B0:
	message("The large daemon's eyes close as he appears to be restraining the force of horrific emotions,");
	say();
	message("\"I have served that blind,\told fool for over two hundred years!\" Arcadion pauses, regaining his composure. A thought visibly crosses his\tdarkened face, \"Perhaps thou mightest assist me to free myself of this unwanted bondage. I could prove an invaluable\tally.\" The daemon pauses to let his offer sink in, then, \"Well, mortal. Wilt thou help me?\"");
	say();
	if (!Func090A()) goto labelFunc06F6_028D;
	message("A wicked look of triumph flickers across Arcadion's face to be quickly replaced by a ludicrous semblance of gratitude, \"Thou art truly courageous to vow to release me. My gratitude hath no bounds.\" An oily grin coats the daemon's face, \"Thou hast made quite a powerful ally this day, mortal.\" His eyes blink in what is possibly meant to be a charming manner.");
	say();
	gflags[0x0332] = true;
	UI_remove_answer("serve");
	if (!(!var0008)) goto labelFunc06F6_0283;
	UI_add_answer("daemon");
labelFunc06F6_0283:
	UI_add_answer("release");
	goto labelFunc06F6_02B0;
labelFunc06F6_028D:
	gflags[0x0331] = true;
	UI_show_npc_face(0xFEDE, 0x0001);
	message("Arcadion looks as if he's about to force his way through the mirror, then once again masters his incredible rage.");
	say();
	UI_show_npc_face(0xFEDE, 0x0000);
	message("He folds massive arms across a broad chest and slowly restores his gruesome smile, \"I can respect thy cowardice in this situation. After all, Erethian is\ta powerful mage, not the sort that a sheep like thyself should be trifling with.\" His contemtuous sneer begins to fade as the daemon takes his leave.*");
	say();
	Func0843();
labelFunc06F6_02B0:
	case "release" attend labelFunc06F6_02CA:
	message("\"I'll need a special gem in which to house my essence when thou crackest this prison of a mirror.\" His eyes are alight with the possibility of his impending freedom.");
	say();
	UI_add_answer("gem");
	UI_remove_answer("release");
labelFunc06F6_02CA:
	case "gem" attend labelFunc06F6_0333:
	var0006 = UI_find_nearby(item, 0x02F8, 0x000F, 0x0000);
	var0007 = false;
	if (!var0006) goto labelFunc06F6_030E;
	var0007 = Func0844(var0006);
	if (!var0007) goto labelFunc06F6_0307;
	message("\"I can sense that the gem is near! Take it! Take it, quickly and use it to free me of this accursed mirror!\" Arcadion is almost drooling in anticipation.*");
	say();
	gflags[0x0333] = true;
	goto labelFunc06F6_030B;
labelFunc06F6_0307:
	message("\"There was one on this island, that much I know. Find it. Bring it to me and together, we shall break this mirror which binds me to that blasted mage.*");
	say();
labelFunc06F6_030B:
	goto labelFunc06F6_0330;
labelFunc06F6_030E:
	if (!UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0x000C)) goto labelFunc06F6_032C;
	message("\"Thou hast the gem! I feel it! Use it now to crack the mirror! I'll enter it as I'm freed!\" The daemon hardly restains his enthusiasm.*");
	say();
	gflags[0x0333] = true;
	goto labelFunc06F6_0330;
labelFunc06F6_032C:
	message("\"There was one on this island, that much I know. Find it. Bring it to me and together, we shall break this mirror which binds me to that blasted mage.*");
	say();
labelFunc06F6_0330:
	Func0843();
labelFunc06F6_0333:
	case "bye" attend labelFunc06F6_034F:
	if (!gflags[0x0332]) goto labelFunc06F6_0348;
	message("Arcadion winks in a very undaemonlike manner, \"Farewell, brave mortal. Thy courage is unsurpassed among humans.\"*");
	say();
	goto labelFunc06F6_034C;
labelFunc06F6_0348:
	message("The smiling daemon bows again, \"Fare thee well, Britannian. Until we meet again.\" The daemon begins to fade even as his last words are spoken.*");
	say();
labelFunc06F6_034C:
	Func0843();
labelFunc06F6_034F:
	goto labelFunc06F6_01B5;
labelFunc06F6_0352:
	endconv;
	return;
	goto labelFunc06F6_0CF4;
labelFunc06F6_0357:
	if (!(!gflags[0x0330])) goto labelFunc06F6_066D;
	if (!(event == 0x0001)) goto labelFunc06F6_036E;
	UI_close_gumps();
	item->Func0690();
labelFunc06F6_036E:
	if (!(!(event == 0x0002))) goto labelFunc06F6_0378;
	return;
labelFunc06F6_0378:
	UI_show_npc_face(0xFEDD, 0x0000);
	var0009 = false;
	if (!(!gflags[0x0313])) goto labelFunc06F6_03BB;
	message("The little gem pulses with energy, \"Now all Britannia shall feel my wrath. I'll make them all pay for every decade I spent within that accursed mirror!\" The gem glows brighter, and you expect the world to come apart at the seams... then, nothing. \"NO!\" The daemon's primal scream sounds a bit crystalline through the medium of the gem. \"This cannot be! That old fool was right. I'm still trapped!\" The daemon's anguished voice falls silent.");
	say();
	gflags[0x0313] = true;
	UI_add_answer(["name", "job", "wrath", "trapped", "bye"]);
	if (!gflags[0x0338]) goto labelFunc06F6_03B8;
	UI_add_answer("black sword");
labelFunc06F6_03B8:
	goto labelFunc06F6_03EC;
labelFunc06F6_03BB:
	message("The gem sparkles up at you, \"Yes, master. How may I serve thee?\" Arcadion's voice is subdued.");
	say();
	UI_add_answer(["name", "job", "master", "bye"]);
	if (!gflags[0x0338]) goto labelFunc06F6_03DF;
	UI_add_answer("black sword");
labelFunc06F6_03DF:
	if (!gflags[0x0334]) goto labelFunc06F6_03EC;
	UI_add_answer("power");
labelFunc06F6_03EC:
	converse attend labelFunc06F6_0669;
	case "black sword" attend labelFunc06F6_0409:
	message("\"If thou dost wish me to bond the gem to the sword, thou hast but to command me, master.\"");
	say();
	UI_add_answer("bond");
	UI_remove_answer("black sword");
labelFunc06F6_0409:
	case "bond" attend labelFunc06F6_04D2:
	if (!Func0846()) goto labelFunc06F6_04C7;
	var000A = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x029C, 0xFE99, 0x000F);
	var000B = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000D);
	UI_remove_item(var000A);
	UI_remove_item(var000B);
	var000C = UI_create_new_object(0x02C3);
	UI_set_item_frame(var000C, 0x0000);
	message("\"It will be done!\"");
	say();
	message("As the gem touches the crosspiece of the sword, the sound of tearing metal screeches through the air. The blade shifts and shimmers almost as if alive.");
	say();
	if (!UI_give_last_created(UI_get_npc_object(0xFE9C))) goto labelFunc06F6_0484;
	message("Slowly, the sword settles into its original shape, except for the blue gem glowing in the hilt.");
	say();
	goto labelFunc06F6_04A0;
labelFunc06F6_0484:
	message("There is a flash of what can only be described as black light and the sword is wrenched out of your grasp and falls to the ground.");
	say();
	var000D = UI_get_object_position(UI_get_npc_object(0xFE9C));
	var000E = UI_update_last_created(var000D);
labelFunc06F6_04A0:
	gflags[0x0330] = true;
	gflags[0x0313] = false;
	var000F = UI_execute_usecode_array(var000C, [(byte)0x2C, (byte)0x23, (byte)0x55, 0x070B, (byte)0x55, 0x06F6]);
	abort;
	goto labelFunc06F6_04CB;
labelFunc06F6_04C7:
	message("\"The sword and gem must be in thy hands for the bonding to be accomplished.\"");
	say();
labelFunc06F6_04CB:
	UI_remove_answer("bond");
labelFunc06F6_04D2:
	case "name" attend labelFunc06F6_04E5:
	message("\"My name is still Arcadion, although my prison has changed.\"");
	say();
	UI_remove_answer("name");
labelFunc06F6_04E5:
	case "job" attend labelFunc06F6_0506:
	message("\"I am now thy servant.\tWhat is thy bidding, master?\"");
	say();
	if (!(!var0009)) goto labelFunc06F6_04FF;
	UI_add_answer("master");
labelFunc06F6_04FF:
	UI_remove_answer("job");
labelFunc06F6_0506:
	case "wrath" attend labelFunc06F6_0527:
	message("Arcadion sounds a bit pensive as he replies, \"Forgive my momentary indiscretion, master. My bitter emotions overcame my reasoning for a brief time. I shall not let it happen again.\"");
	say();
	if (!(!var0009)) goto labelFunc06F6_0520;
	UI_add_answer("master");
labelFunc06F6_0520:
	UI_remove_answer("wrath");
labelFunc06F6_0527:
	case "trapped" attend labelFunc06F6_0565:
	var0005 = false;
	if (!(!gflags[0x0310])) goto labelFunc06F6_0543;
	var0005 = "the mage Erethian";
	goto labelFunc06F6_0549;
labelFunc06F6_0543:
	var0005 = "Erethian";
labelFunc06F6_0549:
	message("\"It would seem that ");
	message(var0005);
	message(" was correct in his assumption that should I enter this gem, my power would not be set free to use as I wish, instead it is at the beck and call of the one who possesses the gem.\"");
	say();
	gflags[0x0334] = true;
	UI_add_answer("power");
	UI_remove_answer("trapped");
labelFunc06F6_0565:
	case "power" attend labelFunc06F6_0628:
	if (!(!gflags[0x0333])) goto labelFunc06F6_05CC;
	message("You hear a faint sigh, then, \"Wouldst thou care to partake of my power?\"");
	say();
	if (!Func090A()) goto labelFunc06F6_059B;
	message("Arcadion sounds disappointed, \"It is as I knew it would be. I am forever meant to be the slave of weak-willed mortals. Very well then, prepare thyself to recieve a portion of my vast eneregy.");
	say();
	gflags[0x0333] = true;
	Func0845(false);
	if (!(!var0009)) goto labelFunc06F6_0598;
	UI_add_answer("master");
labelFunc06F6_0598:
	goto labelFunc06F6_05C9;
labelFunc06F6_059B:
	if (!(!gflags[0x0335])) goto labelFunc06F6_05BB;
	message("\"Perhaps I misjudged thee, master.\" He pauses for a thoughtful moment, \"Mayhap in time thou canst call me friend as well as ally.\"");
	say();
	gflags[0x0335] = true;
	if (!(!var0009)) goto labelFunc06F6_05B8;
	UI_add_answer("master");
labelFunc06F6_05B8:
	goto labelFunc06F6_05C9;
labelFunc06F6_05BB:
	if (!(!var0009)) goto labelFunc06F6_05C9;
	UI_add_answer("master");
labelFunc06F6_05C9:
	goto labelFunc06F6_0621;
labelFunc06F6_05CC:
	message("\"Thou hast need of my energies again?\" Arcadion asks a little petulantly.");
	say();
	if (!Func090A()) goto labelFunc06F6_05EF;
	message("\"Very well, prepare thyself.\" The gem glows.");
	say();
	Func0845(false);
	if (!(!var0009)) goto labelFunc06F6_05EC;
	UI_add_answer("master");
labelFunc06F6_05EC:
	goto labelFunc06F6_0621;
labelFunc06F6_05EF:
	if (!(!gflags[0x0335])) goto labelFunc06F6_060F;
	message("\"What dost thou seek of me...\" A pause, \"Master?\"");
	say();
	gflags[0x0335] = true;
	if (!(!var0009)) goto labelFunc06F6_060C;
	UI_add_answer("master");
labelFunc06F6_060C:
	goto labelFunc06F6_0621;
labelFunc06F6_060F:
	message("\"Dost thou seek to torment me with useless questions, or may I be of some service...\" A long pause, \"Master.\"");
	say();
	if (!(!var0009)) goto labelFunc06F6_0621;
	UI_add_answer("master");
labelFunc06F6_0621:
	UI_remove_answer("power");
labelFunc06F6_0628:
	case "master" attend labelFunc06F6_0646:
	message("The daemon pauses for a moment, \"Thou hast imprisoned my physical form, I am therefore bound to thy will by powers far older than thou or I wield. What wouldst thou have of me?\"");
	say();
	UI_add_answer("bound");
	var0009 = true;
	UI_remove_answer("master");
labelFunc06F6_0646:
	case "bound" attend labelFunc06F6_0659:
	message("\"Long ago, even by my accounting of time, my people were defeated by a powerful race of beings in an attempt to conquer this realm. This race lived here long before the coming of thy sovereign, Lord British. My poeple were defeated and they expected death, but these great and powerful beings were not destroyers. However, they also did not wish futher disruption by my kind. So they weaved enchantments beyond the ken of my race, binding us to the inhabitants of this realm. Thine own people merely use the existing enchantments to keep us enslaved, sometimes without an incling of how this was achieved.\"");
	say();
	UI_remove_answer("bound");
labelFunc06F6_0659:
	case "bye" attend labelFunc06F6_0666:
	message("\"Farewell my master.\" The gem seems to dim a little.*");
	say();
	abort;
labelFunc06F6_0666:
	goto labelFunc06F6_03EC;
labelFunc06F6_0669:
	endconv;
	goto labelFunc06F6_0CF4;
labelFunc06F6_066D:
	if (!(event == 0x0001)) goto labelFunc06F6_067D;
	UI_close_gumps();
	item->Func0690();
labelFunc06F6_067D:
	if (!(event == 0x0002)) goto labelFunc06F6_0CF4;
	if (!(!gflags[0x0313])) goto labelFunc06F6_075D;
	if (!(!gflags[0x0343])) goto labelFunc06F6_06D8;
	var0010 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, 0x0004, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0001, (byte)0x68, (byte)0x27, 0x0001]);
	var000F = UI_execute_usecode_array(item, [(byte)0x27, 0x0007, (byte)0x55, 0x06F6]);
	gflags[0x0343] = true;
	return;
labelFunc06F6_06D8:
	if (!(!gflags[0x0344])) goto labelFunc06F6_0748;
	var000D = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0011, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0x0003);
	UI_sprite_effect(0x0011, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x003E);
	var000F = UI_execute_usecode_array(item, [(byte)0x27, 0x0003, (byte)0x55, 0x06F6]);
	gflags[0x0344] = true;
	return;
labelFunc06F6_0748:
	UI_show_npc_face(0xFEDC, 0x0000);
	message("The sword glimmers darkly as you speak to it. \"Greetings, my master. And how can thy humble servant aid thee?\" The daemon's voice has regained much of its oddly disturbing humor.");
	say();
	gflags[0x0313] = true;
	goto labelFunc06F6_076B;
labelFunc06F6_075D:
	UI_show_npc_face(0xFEDC, 0x0000);
	message("\"Yes, master. What dost thou seek of thy servant?\" Arcadion asks you in a deep, harmonic voice.");
	say();
labelFunc06F6_076B:
	UI_add_answer(["name", "job", "bye", "powers"]);
	if (!(gflags[0x030E] && (!gflags[0x030C]))) goto labelFunc06F6_0790;
	UI_add_answer("help");
labelFunc06F6_0790:
	var0011 = false;
	var0012 = false;
	var0013 = false;
	var0014 = false;
	var0015 = false;
labelFunc06F6_07A4:
	converse attend labelFunc06F6_0B88;
	case "name" attend labelFunc06F6_07BA:
	message("The daemon sword's tone is rather ominous as he says, \"I am, and ever shall be, thy servant Arcadion.\"");
	say();
	UI_remove_answer("name");
labelFunc06F6_07BA:
	case "job" attend labelFunc06F6_07CD:
	message("\"I am the Shade Blade. My destiny is to serve thee until we are...\" The sword pauses, \"parted.\"");
	say();
	UI_remove_answer("job");
labelFunc06F6_07CD:
	case "powers" attend labelFunc06F6_0812:
	if (!(!UI_is_readied(UI_get_npc_object(0xFE9C), 0x0001, 0x02C3, 0xFE99))) goto labelFunc06F6_07F4;
	message("\"I needs must be in thy hand, master, if thou wishest to use my powers.\"");
	say();
	goto labelFunc06F6_0812;
labelFunc06F6_07F4:
	message("\"Which of my powers dost thou seek to use?\"");
	say();
	UI_push_answers();
	UI_add_answer(["Magic", "Fire", "Death", "Return", "none"]);
labelFunc06F6_0812:
	case "help" attend labelFunc06F6_0832:
	message("Arcadion's voice is smug as he replies to your request for assistance. \"Yes, I can help thee if thou wishest to exile what remains of Exodus to the Void. Firstly, thou shalt have need of the lenses of which the doddering, old fool spoke. Next thou needs must have the three Talismans of Principle. And finally, make sure that there are lit torches upon the walls to either side of the pedestal upon which the Dark Core rests.");
	say();
	UI_add_answer(["lenses", "talismans"]);
	UI_remove_answer("help");
labelFunc06F6_0832:
	case "lenses" attend labelFunc06F6_0845:
	message("\"The concave and convex lenses which thou used to place the Codex of Infinite Wisdom within the Void, I believe now sit forgotten in the Museum of Britannia. They must be placed between the Dark Core and the torches on either side of the pedestal\"");
	say();
	UI_remove_answer("lenses");
labelFunc06F6_0845:
	case "talismans" attend labelFunc06F6_0858:
	message("\"The Talismans of Principle must be placed upon the Dark Core like wedges in a pie.\"");
	say();
	UI_remove_answer("talismans");
labelFunc06F6_0858:
	case "none" attend labelFunc06F6_0868:
	message("\"As thou wish, master. I but seek to serve thee.\"");
	say();
	UI_pop_answers();
labelFunc06F6_0868:
	case "Magic" attend labelFunc06F6_089C:
	var0016 = UI_part_of_day();
	if (!((var0016 == 0x0007) || ((var0016 == 0x0000) || (var0016 == 0x0001)))) goto labelFunc06F6_0898;
	Func0845(true);
	goto labelFunc06F6_089C;
labelFunc06F6_0898:
	message("The blade croons quietly, \"Alas, master. My energies seem a trifle low. Perhaps if thou were to find some creature to slay, my power would be sufficient. After all, I have needs just as thou dost.\"");
	say();
labelFunc06F6_089C:
	case "Death" attend labelFunc06F6_0B2A:
	message("\"Where is the corpse of which thou dost speak?\" The dark sword begins to vibrate in your hand.*");
	say();
	UI_remove_npc_face(0xFEDC);
	var0011 = UI_click_on_item();
	var0017 = UI_get_item_shape(var0011);
	var0018 = UI_get_object_position(var0011);
	UI_show_npc_face(0xFEDC, 0x0000);
	if (!UI_is_npc(var0011)) goto labelFunc06F6_0ABC;
	if (!((var0017 == 0x02D1) || (var0017 == 0x03DD))) goto labelFunc06F6_08F7;
	message("The daemon speaks with a sanctimonious tone. \"I could not in honor take the life of my most wondrous master.\"");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_08F7:
	if (!(var0017 == 0x01D2)) goto labelFunc06F6_0988;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0981;
	message("\"Yes! I have long sought the end of Lord British, my traitorous master.\"");
	say();
	var0019 = Func0908();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("\"");
	message(var0019);
	message(", for what reason art thou brandishing that black sword in my presence?\"");
	say();
	UI_remove_npc_face(0xFEDC);
	UI_show_npc_face(0xFE9C, 0x0000);
	message("The daemon responds, using your mouth. \"This blade is thy doom,...\" You spit the words, \"Lord British!\"");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("Lord British looks truly taken aback, his eyes narrow calculatingly. \"What foul treachery is this?\"");
	say();
	UI_show_npc_face(0xFE9C, 0x0000);
	message("You find yourself unable to respond, and your muscles are clenching as if to lash out with the wicked blade in your hand.");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("\"Perhaps when thou art sitting in a dungeon, thy tongue will loosen.");
	say();
	message("\"Guards!\"*");
	say();
	var0014 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0988;
labelFunc06F6_0981:
	message("The Shade Blade lets out a harsh whisper. \"Move a little closer to him, and I'll perform this task for thee, master.\"");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0988:
	if (!((var0017 == 0x01E2) || (var0017 == 0x0193))) goto labelFunc06F6_09A1;
	message("\"Alas master, this one is protected by a power greater than mine. His destiny lies elsewhere.\"");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_09A1:
	if (!Func0849(var0017)) goto labelFunc06F6_09B1;
	message("The sword recoils in something akin to horror. \"That creature is beyond even my power. I suggest that thou hackest it to bits, if possible, then burn the pieces.\" Arcadion offers helpfully.");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_09B1:
	if (!(var0017 == 0x01F8)) goto labelFunc06F6_0A21;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0A1A;
	if (!UI_get_cont_items(var0011, 0x031D, 0x00F1, 0x0004)) goto labelFunc06F6_0A14;
	message("\"Ah, Dracothraxus. We meet once again. 'Tis a pity thou shan't survive our meeting this time. Perhaps if thou hadst given the gem to me when first I asked, none of this unpleasantness would be necessary.\"");
	say();
	UI_show_npc_face(0xFEDB, 0x0000);
	message("The dragon responds with great resignation. \"My will is not mine own in this matter, Arcadion. Mayhap thou art finding too, that thy will is not thine own.\"");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_show_npc_face(0xFEDC, 0x0000);
	message("The daemon, possibly stung by the dragon's repartee, falls silent and goes to its bloody work.*");
	say();
	var0015 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0A17;
labelFunc06F6_0A14:
	goto labelFunc06F6_0A7F;
labelFunc06F6_0A17:
	goto labelFunc06F6_0A21;
labelFunc06F6_0A1A:
	message("The Shade Blade croons sofltly. \"Move a little closer to the dragon, and I'll end its life for thee, master.\"");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0A21:
	if (!(var0017 == 0x009A)) goto labelFunc06F6_0A6E;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0A67;
	if (!UI_get_cont_items(var0011, 0x031D, 0x00F0, 0x0004)) goto labelFunc06F6_0A61;
	message("\"I owe thee quite a favor for this, master. I thank thee for allowing me this, my revenge!\"*");
	say();
	var0015 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0A64;
labelFunc06F6_0A61:
	goto labelFunc06F6_0A7F;
labelFunc06F6_0A64:
	goto labelFunc06F6_0A6E;
labelFunc06F6_0A67:
	message("\"Move closer to him, and I'll see that his life plagues thee no more.\" The\tdark sword sounds almost gleeful at this prospect.");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0A6E:
	if (!(var0017 == 0x03F7)) goto labelFunc06F6_0A7F;
	message("\"This creature is not strictly speaking,... living. Thy best course of action would be to smash it to pieces\" You hear a smile in Arcadion's voice.");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0A7F:
	if (!Func0848(var0017)) goto labelFunc06F6_0AB5;
	if (!(UI_get_distance(UI_get_npc_object(0xFE9C), var0011) < 0x0005)) goto labelFunc06F6_0AAB;
	message("\"Very well, master. If thou cannot dispatch this foe thyself, I shall do it for thee.\"");
	say();
	var0015 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0AB2;
labelFunc06F6_0AAB:
	message("\"I must get closer to this one in order to enjoy its essence.\" The blade hums eagerly as it tugs in the direction of your selected target.");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0AB2:
	goto labelFunc06F6_0ABC;
labelFunc06F6_0AB5:
	message("The daemon sword abruptly ceases its vibration. \"This being is hardly worth a death the likes of which I would visit upon it. Call upon me again when thou art faced with a more worthy opponent.\"");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0ABC:
	if (!Func0847(var0017)) goto labelFunc06F6_0ACC;
	message("\"Perhaps thou misunderstands my meaning. I do not raise the dead... I slay the living.\" The last is spoken in a sibilant whisper.");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0ACC:
	if (!(!var0017)) goto labelFunc06F6_0ADA;
	message("\"Thou wouldst have me destroy the very world around thee. Not a very bright idea for such a virtuous one as thou art thought to be.\" A strangely metallic chuckle escapes from the sword.");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0ADA:
	if (!(var0017 == 0x009B)) goto labelFunc06F6_0AEB;
	message("The sword recoils in something akin to horror. \"That one is beyond even my power.\"");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0AEB:
	if (!((var0017 == 0x031C) || (var0017 == 0x01BF))) goto labelFunc06F6_0B04;
	message("The daemon sword abruptly ceases its vibration. \"This being is hardly worth a death the likes of which I would visit upon it. Call upon me again when thou art faced with a more worthy opponent.\"");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0B04:
	if (!(var0017 == 0x02C3)) goto labelFunc06F6_0B15;
	message("\"Thou shall not be rid of me quite so easily, my master. However, I do not begrudge thine attempt. Quite to the contrary. I respect thy resourcefulness.\"");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0B15:
	if (!(var0017 == 0x03DE)) goto labelFunc06F6_0B26;
	message("\"Would that I had such power. That artifact would allow me to return to my home plane if only I could unlock its secrets.\"");
	say();
	goto labelFunc06F6_0B2A;
labelFunc06F6_0B26:
	message("\"Hast thou such a grudge against this inanimate object that thou wouldst see it perish forever?\" His voice is laden with undisguised sarcasm. \"I cannot take life from that which is already lifeless.\"");
	say();
labelFunc06F6_0B2A:
	case "Return" attend labelFunc06F6_0B5C:
	if (!(!Func08E7())) goto labelFunc06F6_0B58;
	message("\"Ah... home again. I never tire of rocky little islands. Dost thou truly wish to go to the forsaken Isle of Fire?\"");
	say();
	if (!Func090A()) goto labelFunc06F6_0B51;
	message("\"I see. Very well, master. But let us not forget this little favor...\" The gem in the hilt of the sword glows brightly then everything dims.*");
	say();
	var0013 = true;
	goto labelFunc06F6_0B89;
	goto labelFunc06F6_0B55;
labelFunc06F6_0B51:
	message("\"It is good. Sense returns to the Virtuous Wonder. Thou art truly without peer in the arena of thought, master.\"");
	say();
labelFunc06F6_0B55:
	goto labelFunc06F6_0B5C;
labelFunc06F6_0B58:
	message("\"Forgive me, master, but are we not already on or near the Isle of Fire? Though, why one would wish to remain here on this forsaken piece of rock, I have no\tidea.\"");
	say();
labelFunc06F6_0B5C:
	case "Fire" attend labelFunc06F6_0B76:
	message("\"And what, pray tell, is the intended target of thy immense and most puissant wrath, O' Master of Infinite Destruction?\"");
	say();
	UI_remove_npc_face(0xFEDC);
	var0012 = true;
	goto labelFunc06F6_0B89;
labelFunc06F6_0B76:
	case "bye" attend labelFunc06F6_0B85:
	message("\"Forgive me master, but I shan't be leaving. However, thou mayest cease thy speaking... if thou dost wish it.\"*");
	say();
	goto labelFunc06F6_0B89;
labelFunc06F6_0B85:
	goto labelFunc06F6_07A4;
labelFunc06F6_0B88:
	endconv;
labelFunc06F6_0B89:
	if (!var0012) goto labelFunc06F6_0B93;
	item->Func06FC();
labelFunc06F6_0B93:
	if (!var0013) goto labelFunc06F6_0BAE;
	var001A = UI_execute_usecode_array(item, [(byte)0x27, 0x0001, (byte)0x55, 0x06F9]);
labelFunc06F6_0BAE:
	if (!var0014) goto labelFunc06F6_0C4A;
	var001B = Func092D(var0011);
	var0010 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var001B, (byte)0x64, (byte)0x27, 0x0002, (byte)0x68, (byte)0x27, 0x0002, (byte)0x69, (byte)0x27, 0x0001, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x61]);
	if (!(!UI_get_item_flag(var0011, 0x0001))) goto labelFunc06F6_0C33;
	var001C = ((var001B + 0x0004) % 0x0008);
	var001D = UI_execute_usecode_array(var0011, [(byte)0x59, var001C, (byte)0x27, 0x0003, (byte)0x64, (byte)0x27, 0x0007, (byte)0x55, 0x070F]);
	goto labelFunc06F6_0C4A;
labelFunc06F6_0C33:
	var001D = UI_execute_usecode_array(var0011, [(byte)0x27, 0x000C, (byte)0x55, 0x070F]);
labelFunc06F6_0C4A:
	if (!var0015) goto labelFunc06F6_0CF4;
	var001B = Func092D(var0011);
	var0010 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var001B, (byte)0x64, (byte)0x27, 0x0001, (byte)0x68, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0001, (byte)0x6A, (byte)0x27, 0x0002, (byte)0x61]);
	if (!(!UI_get_item_flag(var0011, 0x0001))) goto labelFunc06F6_0CDD;
	var001C = ((var001B + 0x0004) % 0x0008);
	var001D = UI_execute_usecode_array(var0011, [(byte)0x59, var001C, (byte)0x27, 0x0002, (byte)0x64, (byte)0x27, 0x0004, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0001, (byte)0x55, 0x070F]);
	goto labelFunc06F6_0CF4;
labelFunc06F6_0CDD:
	var001D = UI_execute_usecode_array(var0011, [(byte)0x27, 0x000C, (byte)0x55, 0x070F]);
labelFunc06F6_0CF4:
	return;
}


