#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0876 0x876 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04C7 object#(0x4C7) ()
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

	if (!(event == 0x0001)) goto labelFunc04C7_0431;
	UI_show_npc_face(0xFF39, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFFFC);
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C7_0069;
	if (!gflags[0x0275]) goto labelFunc04C7_004F;
	UI_add_answer("help");
labelFunc04C7_004F:
	if (!gflags[0x0275]) goto labelFunc04C7_0069;
	if (!gflags[0x0259]) goto labelFunc04C7_0069;
	UI_add_answer("got fragments");
	UI_remove_answer("help");
labelFunc04C7_0069:
	if (!var0002) goto labelFunc04C7_0092;
	message("\"Greetings to thee, Sir Dupre. Art thou back again for thy study of wines for Brommer?\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Why, ah, yes, my good friend, Denton. I am, uh, still conducting that study.\" He turns to you and shrugs, grinning sheepishly.");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF39, 0x0000);
labelFunc04C7_0092:
	if (!(!gflags[0x0270])) goto labelFunc04C7_00A4;
	message("The man before you seems to stare at you blankly.");
	say();
	gflags[0x0270] = true;
	goto labelFunc04C7_00AE;
labelFunc04C7_00A4:
	message("\"Hello, ");
	message(var0001);
	message(",\" says Denton.");
	say();
labelFunc04C7_00AE:
	converse attend labelFunc04C7_0426;
	case "name" attend labelFunc04C7_00E7:
	message("\"I am Sir Denton, ");
	message(var0001);
	message(".\"");
	say();
	gflags[0x0275] = true;
	UI_remove_answer("name");
	if (!gflags[0x025E]) goto labelFunc04C7_00E7;
	if (!(!(gflags[0x0259] && (!gflags[0x0261])))) goto labelFunc04C7_00E7;
	UI_add_answer("help");
labelFunc04C7_00E7:
	case "job" attend labelFunc04C7_0109:
	message("\"I am the tavernkeeper, ");
	message(var0001);
	message(". I sell refreshment to the citizens of Britannia, most notably, the knights in Serpent's Hold.\"");
	say();
	UI_add_answer(["sell", "Serpent's Hold", "knights"]);
labelFunc04C7_0109:
	case "knights" attend labelFunc04C7_0132:
	message("\"Almost every resident here is a noble warrior. The exceptions would be Lady Jehanne, the provisioner; Lady Tory; Lady Leigh, the healer; and Menion, the trainer. I can also tell thee about all the other residents.\"");
	say();
	UI_add_answer(["Lady Jehanne", "Lady Tory", "Lady Leigh", "Menion", "residents"]);
	UI_remove_answer("knights");
labelFunc04C7_0132:
	case "sell" attend labelFunc04C7_013D:
	Func0876();
labelFunc04C7_013D:
	case "Serpent's Hold" attend labelFunc04C7_0150:
	message("\"Serpent's Hold is located at precisely 53 degrees east and 165 degrees south.\"");
	say();
	UI_remove_answer("Serpent's Hold");
labelFunc04C7_0150:
	case "residents" attend labelFunc04C7_017F:
	message("\"Yes, ");
	message(var0001);
	message(", I can tell thee about the following people: ");
	say();
	UI_push_answers();
	UI_add_answer(["no one", "Lord John-Paul", "Sir Richter", "Sir Horffe", "Sir Jordan", "Sir Pendaran"]);
labelFunc04C7_017F:
	case "no one" attend labelFunc04C7_0192:
	UI_pop_answers();
	UI_remove_answer("residents");
labelFunc04C7_0192:
	case "Lord John-Paul" attend labelFunc04C7_01A5:
	message("\"He is the Lord of Serpent's Hold. He is a capable leader and a fair man.\"");
	say();
	UI_remove_answer("Lord John-Paul");
labelFunc04C7_01A5:
	case "Lady Leigh" attend labelFunc04C7_01B8:
	message("\"Her healing skills are said to be unparalleled.\"");
	say();
	UI_remove_answer("Lady Leigh");
labelFunc04C7_01B8:
	case "Sir Richter" attend labelFunc04C7_01D2:
	message("\"He is second in command to Lord John-Paul. He is teaching me how to gamble well. In fact, he began increasing the lessons after joining The Fellowship.\"");
	say();
	UI_add_answer("Fellowship");
	UI_remove_answer("Sir Richter");
labelFunc04C7_01D2:
	case "Sir Horffe" attend labelFunc04C7_01F2:
	message("\"Sir Horffe is an excellent warrior. He is a gargoyle that was found by two knights when he was very young. They chose to raise him as their own child. He is very honorable.\"");
	say();
	UI_remove_answer("Sir Horffe");
	if (!gflags[0x026E]) goto labelFunc04C7_01F2;
	UI_add_answer("Gargish accent");
labelFunc04C7_01F2:
	case "Gargish accent" attend labelFunc04C7_0205:
	message("\"Sir Horffe has chosen to use the Gargish syntax of our language so he may better maintain his cultural ties.\"");
	say();
	UI_remove_answer("Gargish accent");
labelFunc04C7_0205:
	case "Sir Jordan" attend labelFunc04C7_0218:
	message("\"Despite his blindness, Sir Jordan perceives objects around him very well. He is an excellent tinkerer, and can repair many items.\"");
	say();
	UI_remove_answer("Sir Jordan");
labelFunc04C7_0218:
	case "Lady Tory" attend labelFunc04C7_022B:
	message("\"I believe she is a druid. She was showing me how to be more compassionate than I was before. She is very good at knowing what others are feeling and why they are experiencing such emotions.\"");
	say();
	UI_remove_answer("Lady Tory");
labelFunc04C7_022B:
	case "Menion" attend labelFunc04C7_023E:
	message("\"He is the fighting instructor. In his spare time, he likes to make swords. Menion has been kind enough to give me one of his creations.\"");
	say();
	UI_remove_answer("Menion");
labelFunc04C7_023E:
	case "Sir Pendaran" attend labelFunc04C7_0251:
	message("\"Sir Pendaran is a knight of the Hold. He is very friendly, but I have been told he can be overbearing at times.\"");
	say();
	UI_remove_answer("Sir Pendaran");
labelFunc04C7_0251:
	case "Lady Jehanne" attend labelFunc04C7_026B:
	message("\"She is the lady of Sir Pendaran. She has been helping me better my sense of humor.\"");
	say();
	UI_add_answer("humor");
	UI_remove_answer("Lady Jehanne");
labelFunc04C7_026B:
	case "humor" attend labelFunc04C7_02FE:
	message("\"My jokes are very bad. If thou wouldst like, I will tell thee one.\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04C7_02F3;
	message("\"Why did the chicken cross the road?\"");
	say();
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc04C7_02B4;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"To get to the other side! Oh, that joke is new,\" he says sarcastically.\"*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc04C7_02B4:
	if (!var0004) goto labelFunc04C7_02D5;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers in your ear.~~\"");
	message(var0000);
	message(", we have heard that one before. 'Tis best we leave him before he indulges in another joke.\"");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04C7_02D5:
	UI_show_npc_face(0xFF39, 0x0000);
	UI_push_answers();
	UI_add_answer(["to get to the other side", "I don't know"]);
	goto labelFunc04C7_02F7;
labelFunc04C7_02F3:
	message("He almost appears disappointed, but it seems more likely that it's your imagination.");
	say();
labelFunc04C7_02F7:
	UI_remove_answer("humor");
labelFunc04C7_02FE:
	case "I don't know" attend labelFunc04C7_033A:
	UI_pop_answers();
	UI_remove_answer("humor");
	message("He gives a partial smile.~~\"To get to the other side. Didst thou think that was funny?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04C7_0328;
	message("He appears confused. \"That is odd, no one else thinks that joke is humorous.~~\"Perhaps I am more funny than I thought...\"");
	say();
	goto labelFunc04C7_032C;
labelFunc04C7_0328:
	message("\"No one else finds it humorous either. I will continue practicing to be funny.\"");
	say();
labelFunc04C7_032C:
	UI_remove_answer("I don't know");
	UI_remove_answer("to get to the other side");
labelFunc04C7_033A:
	case "to get to the other side" attend labelFunc04C7_035F:
	UI_pop_answers();
	UI_remove_answer("humor");
	message("\"Oh. Thou hast heard it before.\"");
	say();
	UI_remove_answer("to get to the other side");
	UI_remove_answer("I don't know");
labelFunc04C7_035F:
	case "Fellowship" attend labelFunc04C7_03CC:
	message("\"The Fellowship is a twenty-year-old organization that holds many festivals, parades, and celebrations. In addition, they maintain a shelter in the town of Paws. They have an underlying philosophy called the Triad of Inner Strength. This triad is broken into the three principles known as `strive for unity,' `trust thy brother,' and `worthiness precedes reward.'I will now explain the meaning of each principple.\"");
	say();
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc04C7_0399;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"This Denton fellow is really long-winded.\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF39, 0x0000);
labelFunc04C7_0399:
	message("\"Strive for unity seems to mean that The Fellowship wants others to work together for the weal of society. Trust thy brother implies that each person should not question the actions of others. Worthiness precedes reward indicates that The Fellowship's attitude towards reward is that one must do well to be rewarded.\"");
	say();
	var0007 = UI_wearing_fellowship();
	if (!var0007) goto labelFunc04C7_03C5;
	message("He looks at your medallion.~~\"Is mine information correct?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04C7_03C1;
	message("\"I thank thee. I always endeavor to be correct.\"");
	say();
	goto labelFunc04C7_03C5;
labelFunc04C7_03C1:
	message("\"I shall attempt to become better informed.\"");
	say();
labelFunc04C7_03C5:
	UI_remove_answer("Fellowship");
labelFunc04C7_03CC:
	case "help" attend labelFunc04C7_03E5:
	message("\"Yes, ");
	message(var0001);
	message(", I can help thee investigate the crime. I believe the best way to begin would be by speaking with Sir Richter, since he is the one who searched the statue after the incident.\"");
	say();
	UI_remove_answer("help");
labelFunc04C7_03E5:
	case "got fragments" attend labelFunc04C7_0405:
	message("\"Perhaps thou shouldst have these stone chips examined by the healer, Lady Leigh.\"");
	say();
	if (!gflags[0x025F]) goto labelFunc04C7_03FE;
	UI_add_answer("gargoyle blood");
labelFunc04C7_03FE:
	UI_remove_answer("got fragments");
labelFunc04C7_0405:
	case "gargoyle blood" attend labelFunc04C7_0418:
	message("\"That behavior does not seem typical of Sir Horffe. Thou mayest wish to report to Lord John-Paul, but I expect there is more to this. It would be a good idea to visit Lady Tory. She is very good at sensing the feelings of others, and may have learned something by observing the residents after the event.\"");
	say();
	UI_remove_answer("gargoyle blood");
labelFunc04C7_0418:
	case "bye" attend labelFunc04C7_0423:
	goto labelFunc04C7_0426;
labelFunc04C7_0423:
	goto labelFunc04C7_00AE;
labelFunc04C7_0426:
	endconv;
	message("\"Good day, ");
	message(var0001);
	message(".\"*");
	say();
labelFunc04C7_0431:
	if (!(event == 0x0000)) goto labelFunc04C7_043F;
	Func092E(0xFF39);
labelFunc04C7_043F:
	return;
}


