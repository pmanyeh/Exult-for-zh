#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func043E object#(0x43E) ()
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

	if (!(event == 0x0001)) goto labelFunc043E_03A7;
	UI_show_npc_face(0xFFC2, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00BF])) goto labelFunc043E_003A;
	message("You see a filthy beggar who flashes you a grin as though you were his best friend in the whole world.");
	say();
	gflags[0x00BF] = true;
	goto labelFunc043E_0044;
labelFunc043E_003A:
	message("\"Hello again, ");
	message(var0000);
	message(",\" says Snaz.");
	say();
labelFunc043E_0044:
	converse attend labelFunc043E_03A2;
	case "name" attend labelFunc043E_005A:
	message("\"I am called Snaz.\"");
	say();
	UI_remove_answer("name");
labelFunc043E_005A:
	case "job" attend labelFunc043E_0073:
	message("\"I have no job for I am a beggar. For a gold coin I shall tell thee a joke.\"");
	say();
	UI_add_answer(["beggar", "tell a joke"]);
labelFunc043E_0073:
	case "beggar" attend labelFunc043E_0086:
	message("\"When I was just a little boy I was made an orphan and left homeless and penniless. That was a joke life played on me. 'Tis a funny joke, eh?~~\"But I would not charge thee a gold piece for that one.\"");
	say();
	UI_remove_answer("beggar");
labelFunc043E_0086:
	case "tell a joke" attend labelFunc043E_00DE:
	message("\"Dost thou wish to hear one?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc043E_00D3;
	var0002 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0002) goto labelFunc043E_00C6;
	message("\"All right, here is one...\"");
	say();
	UI_add_answer("Fellowship joke");
	goto labelFunc043E_00D0;
labelFunc043E_00C6:
	message("\"If thou dost want to hear a joke, thou must pay me, ");
	message(var0000);
	message(". Come back when thy pockets are full. The richer thou art, the funnier I get!\"");
	say();
labelFunc043E_00D0:
	goto labelFunc043E_00D7;
labelFunc043E_00D3:
	message("\"Have a heart, I pray thee! I have a wife and six hungry children to feed.\" He feels your stare upon him. \"Oh, very well. Wouldst thou believe I have a cat and it just had kittens?\"");
	say();
labelFunc043E_00D7:
	UI_remove_answer("tell a joke");
labelFunc043E_00DE:
	case "Fellowship joke" attend labelFunc043E_00FE:
	message("\"I was discussing philosophy with a Fellowship member the other day and he asked me, 'What, in thine opinion, is the height of stupidity?'~~\"So I said, 'I do not know. How tall art thou?'~~\"No, really, I make sport of The Fellowship, but I mean it sincerely...\"");
	say();
	UI_remove_answer("Fellowship joke");
	UI_add_answer(["Fellowship", "Lord British joke"]);
labelFunc043E_00FE:
	case "Fellowship" attend labelFunc043E_0111:
	message("\"That is what I dearly love about The Fellowship. They could always take a joke!~~\"And from what I hear they play funny jokes themselves! Like the joke they played in Trinsic!\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc043E_0111:
	case "Lord British joke" attend labelFunc043E_0178:
	message("\"For a gold coin I will tell thee another. Dost thou wish to hear it?\"");
	say();
	var0003 = Func090A();
	if (!(!var0003)) goto labelFunc043E_0138;
	message("\"I see I have reached the limits of thy sense of humor.\"");
	say();
	UI_remove_answer("Lord British joke");
	goto labelFunc043E_0178;
labelFunc043E_0138:
	var0004 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc043E_016D;
	message("\"I was at the castle of Lord British the other day and I noticed he has three large pools. So I asked why he doth have three of them.~~\"He pointed to the first one and said the first was to swim in cool water. ~~\"The second was for friends to swim in warm water.~~\"I noticed that the third pool was empty and I asked him why.~~\"He said that it was for people who could not swim!\"");
	say();
	UI_remove_answer("Lord British joke");
	UI_add_answer(["Lord British", "Weston joke"]);
	goto labelFunc043E_0178;
labelFunc043E_016D:
	message("\"Thou art more destitute than I! If I tell thee any more jokes now thou mayest steal mine act!\"");
	say();
	UI_remove_answer("Lord British joke");
labelFunc043E_0178:
	case "Lord British" attend labelFunc043E_018B:
	message("\"Poor Lord British! When faced with a gigantic menace that threatens his entire kingdom he is an extremely capable ruler.~~\"But what happens when there are a myriad of smaller things that all threaten the welfare of his people indirectly?~~\"There is a riddle for thee to solve!\"");
	say();
	UI_remove_answer("Lord British");
labelFunc043E_018B:
	case "Weston joke" attend labelFunc043E_01F8:
	message("\"For a gold coin I will tell thee another. Dost thou wish to hear it?\"");
	say();
	var0005 = Func090A();
	if (!(!var0005)) goto labelFunc043E_01B2;
	message("\"Very well. If thou didst not get the first two there is no good reason for me to continue now.\"");
	say();
	UI_remove_answer("Weston joke");
	goto labelFunc043E_01F8;
labelFunc043E_01B2:
	var0006 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc043E_01E7;
	message("\"A man named Weston came to me deep in perplexity.~~\"He told me he wanted to steal some apples from the Royal Orchards but if he did he would feel bad about it in the morning.~~\"So I gave him this advice -- sleep until noon!\"");
	say();
	UI_remove_answer("Weston joke");
	UI_add_answer(["Weston", "mage joke"]);
	goto labelFunc043E_01F8;
labelFunc043E_01E7:
	message("\"Thy pockets are empty, ");
	message(var0000);
	message(". Perhaps it is time to stop laughing and start worrying!\"");
	say();
	UI_remove_answer("Weston joke");
labelFunc043E_01F8:
	case "Weston" attend labelFunc043E_020B:
	message("\"Weston now sits in the castle prison, where he shall most certainly rot for the rest of his life. Heh-heh-heh! ~~\"Try as I might, I cannot best that little jest!\"");
	say();
	UI_remove_answer("Weston");
labelFunc043E_020B:
	case "mage joke" attend labelFunc043E_0272:
	message("\"For a gold coin I will tell thee another. Dost thou wish to hear it?\"");
	say();
	var0007 = Func090A();
	if (!(!var0007)) goto labelFunc043E_0232;
	message("\"Thou art wise. Thou shouldst save thy gold to pay a healer to cure that ache in thy side.\"");
	say();
	UI_remove_answer("mage joke");
	goto labelFunc043E_0272;
labelFunc043E_0232:
	var0008 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc043E_0267;
	message("\"Whilst travelling on the road I came across a mage.~~\"He looked as if he had not eaten for days and complained of a terrible pain in his stomach.~~\"So I told him his stomach was empty. If he put something in it he would feel better.~~\"Later he complained to me of a headache. I said his headache was caused by a similar\tproblem as his stomach.~~\"No doubt it did hurt him so because, being a mage, there was nothing left in it!\"");
	say();
	UI_remove_answer("mage joke");
	UI_add_answer(["mages", "Sullivan joke"]);
	goto labelFunc043E_0272;
labelFunc043E_0267:
	message("\"Now thou art playing a joke on me. Thou art broke!\"");
	say();
	UI_remove_answer("mage joke");
labelFunc043E_0272:
	case "mages" attend labelFunc043E_0285:
	message("\"All of the mages have gone daft or mad! What other proper response is there in a world that is so terrifically funny?!\"");
	say();
	UI_remove_answer("mages");
labelFunc043E_0285:
	case "Sullivan joke" attend labelFunc043E_02E5:
	message("\"Thou art a brave Avatar! Dost thou wish to hear another?\"");
	say();
	var0009 = Func090A();
	if (!(!var0009)) goto labelFunc043E_02AC;
	message("\"Aha! Not as brave as I thought!\"");
	say();
	UI_remove_answer("joke five");
	goto labelFunc043E_02E5;
labelFunc043E_02AC:
	var000A = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000A) goto labelFunc043E_02E1;
	message("\"Didst thou knowest that the notorious Sullivan the Trickster recently became a father?~~\"It is true! They say the baby has his father's eyes and his mother's nose, but they made the baby give them back.\"");
	say();
	UI_remove_answer("Sullivan joke");
	UI_add_answer(["Sullivan", "gold joke"]);
	goto labelFunc043E_02E5;
labelFunc043E_02E1:
	message("\"Thou mayest be laughing but surely thy purse is not, for it is empty.\"");
	say();
labelFunc043E_02E5:
	case "Sullivan" attend labelFunc043E_02F8:
	message("\"Yes, I know the man they call Sullivan the Trickster! In fact thou dost remind me of him!~~\"Or does he remind me of thee?~~\"He is so tricky that just talking about him has caused me to trick myself! Heh-Hee-Haa!\"");
	say();
	UI_remove_answer("Sullivan");
labelFunc043E_02F8:
	case "gold joke" attend labelFunc043E_0394:
	message("\"I have amused thee so far! Wouldst thou like to hear another? It is a joke about gold!\"");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc043E_0389;
	var000C = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000C) goto labelFunc043E_0382;
labelFunc043E_032A:
	UI_play_sound_effect(0x0017);
	message("\"Thank thee very much! Now, goodbye!\"");
	say();
	message("\"Dost thou get it? Ha! Ha! Ha! Ha! If not, it would be my pleasure to repeat it.\"");
	say();
	message("\"Wouldst thou like to hear the gold joke again?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc043E_0374;
	message("\"Now listen carefully...\"");
	say();
	var000E = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000E) goto labelFunc043E_036D;
	goto labelFunc043E_032A;
	goto labelFunc043E_0371;
labelFunc043E_036D:
	message("\"Oh, I am so sorry. I cannot tell thee the joke again for thou art out of money.\"");
	say();
labelFunc043E_0371:
	goto labelFunc043E_037F;
labelFunc043E_0374:
	message("\"I see thou art becoming wise to the ways of show business, ");
	message(var0000);
	message(". Good day to thee!\"");
	say();
	abort;
labelFunc043E_037F:
	goto labelFunc043E_0386;
labelFunc043E_0382:
	message("\"I can see thou art so poor that thou cannot even afford a sense of humor!\"");
	say();
labelFunc043E_0386:
	goto labelFunc043E_038D;
labelFunc043E_0389:
	message("\"Oh, it is a pity that thou dost not wish to hear it! It is the funniest one yet and my personal favorite!\"");
	say();
labelFunc043E_038D:
	UI_remove_answer("gold joke");
labelFunc043E_0394:
	case "bye" attend labelFunc043E_039F:
	goto labelFunc043E_03A2;
labelFunc043E_039F:
	goto labelFunc043E_0044;
labelFunc043E_03A2:
	endconv;
	message("\"I do hope I did amuse thee.\"*");
	say();
labelFunc043E_03A7:
	if (!(event == 0x0000)) goto labelFunc043E_042E;
	var000F = UI_part_of_day();
	var0010 = UI_get_schedule_type(UI_get_npc_object(0xFFC2));
	var0011 = UI_die_roll(0x0001, 0x0004);
	if (!(var0010 == 0x000C)) goto labelFunc043E_0428;
	if (!(var0011 == 0x0001)) goto labelFunc043E_03EB;
	var0012 = "@Spare change?@";
labelFunc043E_03EB:
	if (!(var0011 == 0x0002)) goto labelFunc043E_03FB;
	var0012 = "@Got a coin for me?@";
labelFunc043E_03FB:
	if (!(var0011 == 0x0003)) goto labelFunc043E_040B;
	var0012 = "@Jokes for sale!@";
labelFunc043E_040B:
	if (!(var0011 == 0x0004)) goto labelFunc043E_041B;
	var0012 = "@Handouts accepted!@";
labelFunc043E_041B:
	UI_item_say(0xFFC2, var0012);
	goto labelFunc043E_042E;
labelFunc043E_0428:
	Func092E(0xFFC2);
labelFunc043E_042E:
	return;
}


