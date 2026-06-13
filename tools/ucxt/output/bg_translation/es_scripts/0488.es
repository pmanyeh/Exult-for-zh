#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0488 object#(0x488) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0488_0329;
	UI_show_npc_face(0xFF78, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = Func08F7(0xFF7A);
	var0003 = Func08F7(0xFF79);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x017D]) goto labelFunc0488_004E;
	UI_add_answer("locket");
labelFunc0488_004E:
	if (!(!gflags[0x0191])) goto labelFunc0488_006D;
	message("You see a young man balancing a dagger on the tip of his finger. He tries hard to ignore you.");
	say();
	gflags[0x0191] = true;
	if (!gflags[0x0180]) goto labelFunc0488_006A;
	UI_add_answer("strangers");
labelFunc0488_006A:
	goto labelFunc0488_0071;
labelFunc0488_006D:
	message("Leavell balances his dagger on his fingertip. In a blur of motion, he snatches it out of the air, pointing at you. He stares you in the eye.");
	say();
labelFunc0488_0071:
	converse attend labelFunc0488_0324;
	case "name" attend labelFunc0488_0087:
	message("\"I am Leavell.\"");
	say();
	UI_remove_answer("name");
labelFunc0488_0087:
	case "job" attend labelFunc0488_00A6:
	message("\"Along with Battles, I am a bodyguard for Master Robin. If not for him, I would have landed in prison instead of in New Magincia.\"");
	say();
	UI_add_answer(["Battles", "Robin", "prison", "New Magincia"]);
labelFunc0488_00A6:
	case "strangers" attend labelFunc0488_00B9:
	message("\"I do not know what thou art talking about.\"");
	say();
	UI_remove_answer("strangers");
labelFunc0488_00B9:
	case "Battles" attend labelFunc0488_0101:
	message("\"He has an eye like a hawk, and is quicker than a cat. 'Twould be wise of thee to pay him respect.\"");
	say();
	if (!var0003) goto labelFunc0488_00EA;
	UI_show_npc_face(0xFF79, 0x0000);
	message("\"Har! Har! Thou art too correct, Leavell!\"");
	say();
	UI_remove_npc_face(0xFF79);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_00EA:
	UI_remove_answer("Battles");
	UI_add_answer(["eye", "quick", "respect"]);
labelFunc0488_0101:
	case "eye" attend labelFunc0488_011B:
	message("\"If Battles had not spotted that approaching storm we would have all been dead men for certain!\"");
	say();
	UI_remove_answer("eye");
	UI_add_answer("storm");
labelFunc0488_011B:
	case "storm" attend labelFunc0488_012E:
	message("\"It took a terrible toll on our boat, but if truth be told I have seen far worse.\"");
	say();
	UI_remove_answer("storm");
labelFunc0488_012E:
	case "quick" attend labelFunc0488_0141:
	message("\"I have seen Battles has reflexes faster than a snake.\"");
	say();
	UI_remove_answer("quick");
labelFunc0488_0141:
	case "prison" attend labelFunc0488_0154:
	message("\"Yes, I have done things to be put in prison for. But I am not ashamed of my life. I do not have to be held accountable to thee about it.\"");
	say();
	UI_remove_answer("prison");
labelFunc0488_0154:
	case "respect" attend labelFunc0488_0167:
	message("\"And while thou art about it, thou mayest show respect to me, too.\" Leavell says with a sneer.");
	say();
	UI_remove_answer("respect");
labelFunc0488_0167:
	case "Robin" attend labelFunc0488_01AC:
	message("\"He is a gambler by profession, who earns his winnings at the House of Games's tables on Buccaneer's Den.\"");
	say();
	if (!var0002) goto labelFunc0488_0198;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("\"Soon we shall return and the money will pour like sweet wine once again, eh, Leavell?\"");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_0198:
	UI_add_answer(["profession", "Buccaneer's Den"]);
	UI_remove_answer("Robin");
labelFunc0488_01AC:
	case "profession" attend labelFunc0488_01E8:
	message("\"Gambling is what Robin does for money. But he spends so much time talking about Lord British that thou wouldst think he was royalty or something!\"");
	say();
	if (!var0002) goto labelFunc0488_01E1;
	message("Suddenly Leavell gets an embarrassed look on his face and stops talking.*");
	say();
	UI_show_npc_face(0xFF7A, 0x0000);
	message("\"Enough about that, Leavell!\"*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_01E1:
	UI_remove_answer("profession");
labelFunc0488_01E8:
	case "Buccaneer's Den" attend labelFunc0488_0208:
	message("\"We ran into some misfortune the last time we were there. The Mister at the House of Games learned\tof Master Robin's system and caused him to lose much of his gold.\"");
	say();
	UI_add_answer(["The Mister", "system"]);
	UI_remove_answer("Buccaneer's Den");
labelFunc0488_0208:
	case "system" attend labelFunc0488_021B:
	message("\"He had devised a clever method of cheating at all the various games at the House of Chance. It had earned him several times his weight in gold coins, I am certain.\"");
	say();
	UI_remove_answer("system");
labelFunc0488_021B:
	case "The Mister" attend labelFunc0488_023B:
	message("\"When Master Robin could not pay his debts, The Mister sent his legbreaker, Sintag, and his knaves after us. We had to leave on the first ship out of Buccaneer's Den. I do not know why he is called 'The Mister'.\"");
	say();
	UI_add_answer(["Sintag", "ship"]);
	UI_remove_answer("The Mister");
labelFunc0488_023B:
	case "Sintag" attend labelFunc0488_0277:
	message("\"Battles and myself are more than capable of taking care of Sintag...\" *");
	say();
	if (!var0003) goto labelFunc0488_026C;
	UI_show_npc_face(0xFF79, 0x0000);
	message("\"Yeh, thou art bloody right we coulda handled him! We'd a slit him like a sheep! Har!\" *");
	say();
	UI_remove_npc_face(0xFF79);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_026C:
	message("\"But Gordy had hired a troupe of ruffians to chase after us. 'Tis a pity. I would have liked to teach him a lesson or two. In fact, one day I think I shall.\"");
	say();
	UI_remove_answer("Sintag");
labelFunc0488_0277:
	case "ship" attend labelFunc0488_0297:
	message("\"The ship we sailed on sank, leaving us stranded here. We were lucky to make it to New Magincia with our lives!\"");
	say();
	UI_add_answer(["sank", "stranded"]);
	UI_remove_answer("ship");
labelFunc0488_0297:
	case "sank" attend labelFunc0488_02AA:
	message("\"The crew could not believe it! The vessel was almost new. It had sailed all the way from Minoc without a problem. In fact, that was the first storm that ship had ever encountered. None of the crew survived, poor buggers.\"");
	say();
	UI_remove_answer("sank");
labelFunc0488_02AA:
	case "stranded" attend labelFunc0488_02BD:
	message("\"If thou wouldst have some way of getting us back to Buccaneer's Den, Master Robin would reward thee handsomely.\"");
	say();
	UI_remove_answer("stranded");
labelFunc0488_02BD:
	case "New Magincia" attend labelFunc0488_02DD:
	message("\"Peasant fools and sheep. The only thing worth a second look in this whole town is Constance.\"");
	say();
	UI_add_answer(["fools and sheep", "Constance"]);
	UI_remove_answer("New Magincia");
labelFunc0488_02DD:
	case "fools and sheep" attend labelFunc0488_02F0:
	message("\"Here, what is not one is the other. This place is so isolated that it is backward. What is worse, they prefer it this way!\"");
	say();
	UI_remove_answer("fools and sheep");
labelFunc0488_02F0:
	case "Constance" attend labelFunc0488_0303:
	message("\"She doth put a spring in a man's step! We have our eye on her, we do!\" Leavell quickly clears his throat and he looks away from you momentarily.");
	say();
	UI_remove_answer("Constance");
labelFunc0488_0303:
	case "locket" attend labelFunc0488_0316:
	message("\"While I myself have seen no such locket, perhaps thou shouldst ask Master Robin about it.\"");
	say();
	UI_remove_answer("locket");
labelFunc0488_0316:
	case "bye" attend labelFunc0488_0321:
	goto labelFunc0488_0324;
labelFunc0488_0321:
	goto labelFunc0488_0071;
labelFunc0488_0324:
	endconv;
	message("With that Leavell goes back to playing with his dagger.*");
	say();
labelFunc0488_0329:
	if (!(event == 0x0000)) goto labelFunc0488_0337;
	Func092E(0xFF78);
labelFunc0488_0337:
	return;
}


