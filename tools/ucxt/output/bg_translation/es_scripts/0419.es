#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0862 0x862 ();
extern void Func0861 0x861 ();
extern var Func090B 0x90B (var var0000);

void Func0419 object#(0x419) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0419_026D;
	UI_show_npc_face(0xFFE7, 0x0000);
	if (!(!gflags[0x009A])) goto labelFunc0419_0034;
	message("You are wary of conversing with that trickster Chuckles, but decide to anyway.");
	say();
	gflags[0x009A] = true;
	UI_add_answer(["name", "job", "bye"]);
	goto labelFunc0419_0048;
labelFunc0419_0034:
	message("\"I will speak if thou dost play The Game, friend,\" Chuckles says.");
	say();
	UI_add_answer(["job", "bye", "Game"]);
labelFunc0419_0048:
	converse attend labelFunc0419_025B;
	case "name" attend labelFunc0419_0065:
	message("\"I must not say my name, lest I break the rule of The Game!\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Game");
labelFunc0419_0065:
	case "job" attend labelFunc0419_0078:
	message("\"I was, am, and shall be the Court...Fool! I could give thee a clue if I wish, but for now my job is to play The Game.\"");
	say();
	UI_add_answer("Game");
labelFunc0419_0078:
	case "clue" attend labelFunc0419_00AF:
	if (!(!gflags[0x006F])) goto labelFunc0419_00A4;
	message("\"Art thou sure thou canst play The Game?\"");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0419_009D;
	Func0862();
	goto labelFunc0419_00A1;
labelFunc0419_009D:
	message("\"Thou must play The Game to get the clue!\"");
	say();
labelFunc0419_00A1:
	goto labelFunc0419_00AF;
labelFunc0419_00A4:
	message("\"Oops. I did give thee one!\"");
	say();
	UI_remove_answer("clue");
labelFunc0419_00AF:
	case "Game" attend labelFunc0419_00DD:
	message("\"Thou must play The Game if thou dost want to speak with me.\"");
	say();
	UI_clear_answers();
	UI_add_answer(["I don't understand", "What are the rules?", "I know The Game", "Explain it"]);
	UI_remove_answer("Game");
	gflags[0x0073] = true;
labelFunc0419_00DD:
	case "I don't understand" attend labelFunc0419_00EF:
	Func0861();
	UI_remove_answer("I don't understand");
labelFunc0419_00EF:
	case "Explain it" attend labelFunc0419_0101:
	Func0861();
	UI_remove_answer("Explain it");
labelFunc0419_0101:
	case "What are the rules?" attend labelFunc0419_0114:
	message("\"Thou must just learn The Game and then jump in and play it!\"");
	say();
	UI_remove_answer("What are the rules?");
labelFunc0419_0114:
	case "I know The Game" attend labelFunc0419_0168:
	message("\"Then just play it!\"");
	say();
	UI_remove_answer("I know the Game");
	UI_clear_answers();
	var0001 = Func090B(["What do we converse about?", "About what do we talk?", "Of what do we speak?"]);
	if (!(var0001 == "Of what do we speak?")) goto labelFunc0419_0165;
	message("\"Of what thou wouldst like.\"");
	say();
	UI_clear_answers();
	UI_add_answer(["the weather", "Lord British", "thou", "a joke"]);
	goto labelFunc0419_0168;
labelFunc0419_0165:
	Func0861();
labelFunc0419_0168:
	case "the weather" attend labelFunc0419_017A:
	Func0861();
	UI_remove_answer("weather");
labelFunc0419_017A:
	case "Lord British" attend labelFunc0419_018C:
	Func0861();
	UI_remove_answer("Lord British");
labelFunc0419_018C:
	case "thou" attend labelFunc0419_01B6:
	message("\"Why dost thou want to speak of me? Canst thou not think of a thing much more fun of which to speak?\"");
	say();
	UI_remove_answer("thou");
	UI_clear_answers();
	UI_add_answer(["women", "girls", "food", "supper"]);
labelFunc0419_01B6:
	case "a joke" attend labelFunc0419_01C9:
	message("\"I do not think I can tell a good joke whilst I play The Game! 'Twould be hard! Hmm. Ah! I have one! Why did the hen cross the road? To get to the side she was not on!\"");
	say();
	UI_remove_answer("a joke");
labelFunc0419_01C9:
	case "women" attend labelFunc0419_01DB:
	Func0861();
	UI_remove_answer("women");
labelFunc0419_01DB:
	case "girls" attend labelFunc0419_01EE:
	message("\"There be a lot of fine girls in our fair town! Or is it 'fair girls in our fine town'?\" Chuckles shrugs his shoulders.");
	say();
	UI_remove_answer("girls");
labelFunc0419_01EE:
	case "food" attend labelFunc0419_023B:
	message("\"There is good food at the pub! As for me, I like to eat on the floor of my room!\"");
	say();
	UI_clear_answers();
	var0002 = Func090B(["Where is the tavern?", "Where is the Blue Boar?", "The pub serves mutton?", "Is there liquor?"]);
	if (!(var0002 == "Where is the Blue Boar?")) goto labelFunc0419_0238;
	message("\"Thou canst get a good meal there! But I could give thee a good -clue-!\"");
	say();
	UI_clear_answers();
	UI_add_answer(["clue", "job", "bye"]);
	goto labelFunc0419_023B;
labelFunc0419_0238:
	Func0861();
labelFunc0419_023B:
	case "supper" attend labelFunc0419_024D:
	Func0861();
	UI_remove_answer("supper");
labelFunc0419_024D:
	case "bye" attend labelFunc0419_0258:
	goto labelFunc0419_025B;
labelFunc0419_0258:
	goto labelFunc0419_0048;
labelFunc0419_025B:
	endconv;
	if (!gflags[0x0073]) goto labelFunc0419_0269;
	message("\"So long, my friend! Do not forg... I mean, do not lose how to play The Game!\"*");
	say();
	goto labelFunc0419_026D;
labelFunc0419_0269:
	message("\"Bye for now!\"*");
	say();
labelFunc0419_026D:
	if (!(event == 0x0000)) goto labelFunc0419_02E4;
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFE7));
	if (!(var0003 == 0x0004)) goto labelFunc0419_02E4;
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0004 == 0x0001)) goto labelFunc0419_02AA;
	var0005 = "@Hi!@";
labelFunc0419_02AA:
	if (!(var0004 == 0x0002)) goto labelFunc0419_02BA;
	var0005 = "@Want to play The Game?@";
labelFunc0419_02BA:
	if (!(var0004 == 0x0003)) goto labelFunc0419_02CA;
	var0005 = "@Let us play The Game!@";
labelFunc0419_02CA:
	if (!(var0004 == 0x0004)) goto labelFunc0419_02DA;
	var0005 = "Shall we dance?@";
labelFunc0419_02DA:
	UI_item_say(0xFFE7, var0005);
labelFunc0419_02E4:
	return;
}


