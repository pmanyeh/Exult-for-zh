#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func061A object#(0x61A) ()
{
	var var0000;
	var var0001;

	var0000 = false;
	var0001 = UI_get_npc_id(item);
	if (!(var0001 == 0x000C)) goto labelFunc061A_001A;
	var0000 = true;
labelFunc061A_001A:
	if (!(event == 0x0002)) goto labelFunc061A_0253;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEC8, 0x0000);
	if (!(!gflags[0x030F])) goto labelFunc061A_0057;
	message("\"Didst thy mother never tell thee not to speak with strange women then? Hmmmph!");
	say();
	message("\"A fine one thou art to be wasting Rieya's time. Thou shouldst watch thy step, my bonny pawn of prophecy, lest I forget the aid that I was meant to give thee.\"");
	say();
	gflags[0x030F] = true;
	UI_set_npc_id(item, 0x000C);
	goto labelFunc061A_005B;
labelFunc061A_0057:
	message("\"Don't tell me that thou hast come back to Rieya looking for more aid! I've helped thee all I may, pawn of prophecy. Thou needs must look elsewhere...\"");
	say();
labelFunc061A_005B:
	UI_add_answer(["Rieya", "pawn of prophecy", "aid", "bye"]);
labelFunc061A_006E:
	converse attend labelFunc061A_0252;
	case "Rieya" attend labelFunc061A_008F:
	UI_remove_answer("Rieya");
	message("\"Rieya is my name... And I'll thank thee not to smirk so! Thy name is just as strange to me, I assure thee!");
	say();
	message("\"Thou shouldst mind thy manners, else -- Guide or no -- I'll not aid thee!\"");
	say();
	UI_add_answer("Guide");
labelFunc061A_008F:
	case "Guide" attend labelFunc061A_00B3:
	UI_remove_answer("Guide");
	message("\"I shouldn't wonder that thou hadst never heard of the Guide before. Thou art scarcely fit to be the pawn of prophecy. Why clutter up thy mind with other possibilities...");
	say();
	message("Oh, never mind! Thou wouldst not understand!\"");
	say();
	UI_add_answer(["scarcely fit", "other possibilities"]);
labelFunc061A_00B3:
	case "scarcely fit" attend labelFunc061A_00D7:
	UI_remove_answer("scarcely fit");
	message("\"Look at thee! Thou hast no idea what is going on! Thou art as willing to listen to me as to those fools in the keep!");
	say();
	message("\"How canst thou be so trusting? How hast thou lived so long?\"");
	say();
	UI_add_answer(["What is going on?", "fools in the keep"]);
labelFunc061A_00D7:
	case "What is going on?" attend labelFunc061A_00EE:
	UI_remove_answer("What is going on?");
	message("\"What is going on?! Listen to thee! Dunce, there is a war going on!");
	say();
	message("\"People are killing each other over a difference in philosophies! And thou art parading about as if no one wouldst make thee a target!\"");
	say();
labelFunc061A_00EE:
	case "fools in the keep" attend labelFunc061A_0109:
	UI_remove_answer("fools in the keep");
	message("\"Aye, they're fools. They follow the @wisdom@ of beings they have never seen, and believe that extermination of all opposing philosophies will restore Balance!");
	say();
	message("\"I tell thee that they are fools! Fools! This world is doomed. They should let it die and move on...");
	say();
	message("\"Ah well, I can't expect thee to understand. Never mind.\"");
	say();
labelFunc061A_0109:
	case "other possibilities" attend labelFunc061A_0120:
	UI_remove_answer("other possibilities");
	message("\"Not all follow the Teachings of the Serpents, friend. Some believe that it is pointless to hope for Balance on this flawed world.");
	say();
	message("\"But those in the keep refuse to acknowledge that there are others that follow other paths. Fools!\"");
	say();
labelFunc061A_0120:
	case "pawn of prophecy" attend labelFunc061A_0140:
	UI_remove_answer("pawn of prophecy");
	message("\"The pawn of prophecy is thou, needle head! Thou dost wear the Amulet of Balance, which -- according to those fools in the keep -- makes thee the Champion of Balance.\"");
	say();
	UI_add_answer(["Amulet of Balance", "Champion of Balance"]);
labelFunc061A_0140:
	case "Amulet of Balance" attend labelFunc061A_0168:
	UI_remove_answer("Amulet of Balance");
	message("\"Dost thou not know what that bauble is yet? Are all those Ophidians asleep?! How could they not have told thee?");
	say();
	message("\"I'll tell thee, this is service above and beyond the call! Oh well, I shall have to do their job for them.");
	say();
	message("\"The Amulet of Balance once belonged to the Great Hierophant who used it to enforce Balance upon the Ophidians. It is a magical pendant that none but the Champion of Balance may wear, or so it is said.\"");
	say();
	UI_add_answer(["Ophidians", "Great Hierophant"]);
labelFunc061A_0168:
	case "Ophidians" attend labelFunc061A_0186:
	UI_remove_answer("Ophidians");
	message("\"Oooh, thine cup is a bit shy of full, isn't it?");
	say();
	message("\"Ophidians are those who follow the Teachings of the Serpents.\"");
	say();
	UI_add_answer("Teachings of the Serpents");
labelFunc061A_0186:
	case "Teachings of the Serpents" attend labelFunc061A_01A5:
	UI_remove_answer("Teachings of the Serpents");
	message("\"I can't believe I am telling thee this! I should send thee back to the keep, I should!");
	say();
	message("\"The Ophidians worship the Great Earth Serpent, and the Order and Chaos serpents, which supposedly dwell within the Void.");
	say();
	message("\"And before thou dost ask, I cannot explain the Void to thee. Thou shouldst ask those idiots at the keep.");
	say();
	message("\"The values of the Ophidians are called the Teachings. Got it?\"");
	say();
labelFunc061A_01A5:
	case "Great Hierophant" attend labelFunc061A_01C7:
	UI_remove_answer("Great Hierophant");
	message("\"Who would have thought a pawn of prophecy could be so stupid?!");
	say();
	message("\"The Ophidians considered the Great Hierophant to be the Voice of the Great Earth Serpent. Whatever he was, he kept them from killilng each other...");
	say();
	message("\"Until they murdered him that is. THEN they started killing each other. Have to do things right, I guess...\"");
	say();
	UI_add_answer("murdered");
labelFunc061A_01C7:
	case "murdered" attend labelFunc061A_01DE:
	UI_remove_answer("murdered");
	message("\"Chaos said Order was responsible. Order said Chaos did it.");
	say();
	message("\"Who knows? Who cares? They've been trying to destroy each other ever since.\"");
	say();
labelFunc061A_01DE:
	case "Champion of Balance" attend labelFunc061A_01F5:
	UI_remove_answer("Champion of Balance");
	message("\"The Champion of Balance was the muscle behind the Great Hierophant. Guess the Great Hierophant couldn't get his hands dirty... Who knows?");
	say();
	message("\"It was the Champion's job to pound any dissenters of the Teachings into submission. Brute force will do it every time. Guess that explains the lack of brains...\"");
	say();
labelFunc061A_01F5:
	case "aid" attend labelFunc061A_0222:
	UI_remove_answer("aid");
	message("\"I never said that thou needs must like me. I said that I had to aid thee. Dost thou wish to hear it or not?\"");
	say();
	if (!Func0955()) goto labelFunc061A_021D;
	message("\"Take all the help thou canst get, right? Hmmph!");
	say();
	message("\"Beyond this gate lies a room that will block thy progress and try to kill thee. In this room thou shalt find three buttons.");
	say();
	message("\"Press first the middle button, and then the top button. Press the south button last and thou shalt be free.\"");
	say();
	goto labelFunc061A_0222;
labelFunc061A_021D:
	message("\"Then why dost thou waste my time?! Go back to those fool Ophidians, where thou dost belong!\"");
	say();
	abort;
labelFunc061A_0222:
	case "bye" attend labelFunc061A_024F:
	UI_remove_npc_face0();
	UI_set_schedule_type(item, 0x000B);
	Func097F(0xFE9C, "@Good riddance!@", 0x0000);
	Func097F(item, "@Pea brain!@", 0x0002);
	goto labelFunc061A_0252;
labelFunc061A_024F:
	goto labelFunc061A_006E;
labelFunc061A_0252:
	endconv;
labelFunc061A_0253:
	return;
}


