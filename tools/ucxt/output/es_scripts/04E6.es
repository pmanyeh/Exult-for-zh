#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04E6 object#(0x4E6) ()
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

	if (!(event == 0x0001)) goto labelFunc04E6_0241;
	UI_show_npc_face(0xFF1A, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_wearing_fellowship();
	var0002 = Func0909();
	var0003 = Func0908();
	var0004 = "Avatar";
	var0005 = "a pseudonym";
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x0104] || gflags[0x0135])) goto labelFunc04E6_0059;
	UI_add_answer("Hook");
labelFunc04E6_0059:
	if (!(!gflags[0x02B3])) goto labelFunc04E6_006B;
	message("You see a pirate who is elegantly dressed and obviously rich. He reeks of pomade.");
	say();
	gflags[0x02B3] = true;
	goto labelFunc04E6_006F;
labelFunc04E6_006B:
	message("\"Yes?\" Gordy asks.");
	say();
labelFunc04E6_006F:
	converse attend labelFunc04E6_023C;
	case "name" attend labelFunc04E6_0085:
	message("\"I am Gordy.\" He grins widely offering you his hand. You notice that it is none too clean.");
	say();
	UI_remove_answer("name");
labelFunc04E6_0085:
	case "job" attend labelFunc04E6_0138:
	message("\"I am 'The Mister' of the House of Games. Inside mine House thou mayest challenge thy skill at games of chance.\" He eyes you carefully, measuring your worth and gullibility.");
	say();
	if (!((var0000 == 0x0005) || ((var0000 == 0x0006) || ((var0000 == 0x0007) || (var0000 == 0x0000))))) goto labelFunc04E6_011A;
	message("\"Enter and enjoy! But first thou must register. Please sign the book so that we may verify thy proclaimed worth.\" Which name do you sign?");
	say();
	var0006 = [var0003, var0004, var0005];
	var0007 = Func090B(var0006);
	if (!(var0007 == var0003)) goto labelFunc04E6_00E3;
	message("You sign your name. \"Very good, ");
	message(var0003);
	message(". Welcome to the House of Games!\" Gordy spreads his arms in an expansive gesture, obviously pleased to welcome your money to his gambling parlour.");
	say();
labelFunc04E6_00E3:
	if (!(var0007 == var0004)) goto labelFunc04E6_0103;
	message("Gordy frowns when he sees what you wrote. \"Avatar, eh? We just had one of them a week ago. He was caught cheating at the tables!\" He takes a step back and glowers. \"Art thou going to give us trouble?\"");
	say();
	if (!Func090A()) goto labelFunc04E6_00FF;
	message("\"Then thou canst not enter!\"*");
	say();
	abort;
	goto labelFunc04E6_0103;
labelFunc04E6_00FF:
	message("\"We shall see about that!\"");
	say();
labelFunc04E6_0103:
	if (!(var0007 == var0005)) goto labelFunc04E6_0117;
	message("You sign in a false name. \"Fine, ");
	message(var0002);
	message(". I be glad to welcome thee!\" Gordy spreads his arms in an expansive gesture, obviously pleased to welcome your money to his gambling parlour.");
	say();
labelFunc04E6_0117:
	goto labelFunc04E6_011E;
labelFunc04E6_011A:
	message("\"I hope to see thee there during business hours.\"");
	say();
labelFunc04E6_011E:
	if (!gflags[0x0006]) goto labelFunc04E6_0128;
	message("\"Ah, thou art a Fellowship member. Thou wilt surely find thy reward at these tables!\" Gordy winks and nudges you, then guffaws loudly.");
	say();
labelFunc04E6_0128:
	UI_add_answer(["The Mister", "House of Games", "skill"]);
labelFunc04E6_0138:
	case "House of Games" attend labelFunc04E6_0158:
	message("\"The House of Games was established six years ago with the funds of... an interested party. It attracts people from all over Britannia who wish to live dangerously with their money. The business is very profitable.\" He pats his pouch, and coins clink. \"Very profitable.\" He grins.");
	say();
	UI_remove_answer("House of Games");
	UI_add_answer(["party", "profitable"]);
labelFunc04E6_0158:
	case "The Mister" attend labelFunc04E6_0176:
	message("\"It refers to my being the overseer, but everyone here has always called me 'The Mister'. I am not sure why. But it appeals to me.\" He puffs up like a bantam rooster, trying to look important. He almost succeeds.");
	say();
	message("\"And that is 'Mister' Gordy, to thee!\"");
	say();
	UI_remove_answer("The Mister");
	UI_add_answer("Mister Gordy");
labelFunc04E6_0176:
	case "Mister Gordy" attend labelFunc04E6_018D:
	message("\"Yes, what can I do for thee?\"");
	say();
	message("He grins, very pleased with himself.");
	say();
	UI_remove_answer("Mister Gordy");
labelFunc04E6_018D:
	case "skill" attend labelFunc04E6_01B0:
	message("\"Each game requires a definite skill in determining the most profitable way to place a bet. Many visitors to the House of Games find that they have a skill. Others, sadly, do not.\"");
	say();
	if (!gflags[0x0006]) goto labelFunc04E6_01A9;
	if (!var0001) goto labelFunc04E6_01A9;
	message("He gestures toward your Fellowship medallion. \"Thou shouldst not have any problem.\" He winks and wiggles his eyebrows.");
	say();
labelFunc04E6_01A9:
	UI_remove_answer("skill");
labelFunc04E6_01B0:
	case "profitable" attend labelFunc04E6_01C3:
	message("\"Well, Buccaneer's Den is not in the jurisdiction of the Britannian Tax Council. We are not subject to Britannia's taxes.\" Gordy smiles wickedly. \"And that... is very profitable!\"");
	say();
	UI_remove_answer("profitable");
labelFunc04E6_01C3:
	case "Hook" attend labelFunc04E6_01F8:
	var0008 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc04E6_01ED;
	message("The Cube vibrates a moment. \"Yes, I know Hook very well. He lives beneath the House of Games. Talk to Sintag. He can direct thee.\"");
	say();
	goto labelFunc04E6_01F1;
labelFunc04E6_01ED:
	message("\"I do not know anyone of that description.\" Gordy looks around nervously and loosens his collar as though it has suddenly gotten too tight.");
	say();
labelFunc04E6_01F1:
	UI_remove_answer("Hook");
labelFunc04E6_01F8:
	case "party" attend labelFunc04E6_022E:
	var0008 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc04E6_0222;
	message("The Cube vibrates a moment. \"That would be The Fellowship, of course.\"");
	say();
	goto labelFunc04E6_0227;
labelFunc04E6_0222:
	message("\"Well, now,... that would be revealin' the secret of my business and profit, now wouldn't it?\" His demeanor becomes threatening as he leans closer to you and snarls, \"Find thine own backers, whelp!\"*");
	say();
	abort;
labelFunc04E6_0227:
	UI_remove_answer("party");
labelFunc04E6_022E:
	case "bye" attend labelFunc04E6_0239:
	goto labelFunc04E6_023C;
labelFunc04E6_0239:
	goto labelFunc04E6_006F;
labelFunc04E6_023C:
	endconv;
	message("\"Farewell, friend. I look forward to thy return.\"*");
	say();
labelFunc04E6_0241:
	if (!(event == 0x0000)) goto labelFunc04E6_024F;
	Func092E(0xFF1A);
labelFunc04E6_024F:
	return;
}


