#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0486 object#(0x486) ()
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

	if (!(event == 0x0001)) goto labelFunc0486_0388;
	UI_show_npc_face(0xFF7A, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_npc_object(0xFF7A);
	var0002 = UI_get_npc_object(0xFF78);
	var0003 = UI_get_npc_object(0xFF79);
	var0004 = Func0931(0xFE9C, 0x0001, 0x03BB, 0xFE99, 0x0002);
	var0005 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x017D]) goto labelFunc0486_006F;
	UI_add_answer("locket");
labelFunc0486_006F:
	if (!var0004) goto labelFunc0486_007C;
	UI_add_answer("show locket");
labelFunc0486_007C:
	if (!var0005) goto labelFunc0486_0089;
	UI_add_answer("Fellowship");
labelFunc0486_0089:
	if (!(!gflags[0x018F])) goto labelFunc0486_00A8;
	message("You see a roguish man dressed in what appears to be some nobleman's ratty hand-me-downs.");
	say();
	gflags[0x018F] = true;
	if (!gflags[0x0180]) goto labelFunc0486_00A5;
	UI_add_answer("strangers");
labelFunc0486_00A5:
	goto labelFunc0486_00AC;
labelFunc0486_00A8:
	message("\"Greetings, and how may I be of service to thee?\" asks Robin.");
	say();
labelFunc0486_00AC:
	converse attend labelFunc0486_037D;
	case "name" attend labelFunc0486_00D3:
	message("\"My name, ");
	message(var0000);
	message(", is Robin. A pleasure to meet thee. I have come to New Magincia only recently.\"");
	say();
	gflags[0x018F] = true;
	UI_remove_answer("name");
	UI_add_answer("New Magincia");
labelFunc0486_00D3:
	case "job" attend labelFunc0486_00E6:
	message("\"My father, a well-respected nobleman whose name I will not defame by mentioning, bastardized and disowned me. But he did teach me mine occupation.\"");
	say();
	UI_add_answer("occupation");
labelFunc0486_00E6:
	case "occupation" attend labelFunc0486_00FF:
	message("\"Why, that most glamorous and respected of occupations, ");
	message(var0000);
	message(". Winning at games of chance.\"");
	say();
	UI_remove_answer("occupation");
labelFunc0486_00FF:
	case "New Magincia" attend labelFunc0486_0125:
	message("\"I am not from here. My colleagues and I had to quickly leave Buccaneer's Den after a dispute with the casino owner. And a rough voyage it was, too.\"");
	say();
	UI_add_answer(["colleagues", "Buccaneer's Den", "dispute", "voyage"]);
	UI_remove_answer("New Magincia");
labelFunc0486_0125:
	case "colleagues" attend labelFunc0486_0145:
	message("\"My friends are Battles and Leavell. Their job is to protect me and my winnings. In exchange they share in my profits.\"");
	say();
	UI_add_answer(["Battles", "Leavell"]);
	UI_remove_answer("colleagues");
labelFunc0486_0145:
	case "Battles" attend labelFunc0486_0158:
	message("\"I rescued him from his captain who was about to make him walk the plank. I diced with that Captain for the lad's life. Later, Battles led a mutiny that took the ship, and... well, that is another story.\"");
	say();
	UI_remove_answer("Battles");
labelFunc0486_0158:
	case "Leavell" attend labelFunc0486_016B:
	message("\"I rescued him from a gaggle of angry noblemen's daughters who had just discovered he was courting all of them simultaneously. If not for me he would have certainly perished! But I am ahead of myself.\"");
	say();
	UI_remove_answer("Leavell");
labelFunc0486_016B:
	case "Buccaneer's Den" attend labelFunc0486_0185:
	message("\"It is where we live most of the year. There are a lot of rough characters there and it is not a place to be seen carrying large amounts of money.\"");
	say();
	UI_add_answer("rough characters");
	UI_remove_answer("Buccaneer's Den");
labelFunc0486_0185:
	case "dispute" attend labelFunc0486_019F:
	message("\"I won a vulgar amount of the casino's gold and 'The Mister' of the place, Gordy, accused me of cheating. He sent his legbreaker, Sintag, after us. Pirates do not like to lose!\"");
	say();
	UI_remove_answer("dispute");
	UI_add_answer("The Mister");
labelFunc0486_019F:
	case "The Mister" attend labelFunc0486_01B2:
	message("\"Do not ask me why he is called that! Everyone there calls him that, though!\"");
	say();
	UI_remove_answer("The Mister");
labelFunc0486_01B2:
	case "voyage" attend labelFunc0486_01CC:
	message("\"We took the first ship out, but before we got back to the mainland it had sunk. The three of us barely managed to make it to New Magincia with our lives. Now we are marooned here.\"");
	say();
	UI_remove_answer("voyage");
	UI_add_answer("marooned");
labelFunc0486_01CC:
	case "strangers" attend labelFunc0486_01DF:
	message("\"I do not know of any. I only just arrived here myself.\"");
	say();
	UI_remove_answer("strangers");
labelFunc0486_01DF:
	case "rough characters" attend labelFunc0486_01F9:
	message("\"One rough character in particular to stay away from is a man called Hook. He would kill thee for a trifle. Thou canst tell him by the hook he has for a hand.\"");
	say();
	UI_add_answer("Hook");
	UI_remove_answer("rough characters");
labelFunc0486_01F9:
	case "Hook" attend labelFunc0486_020C:
	message("\"I know nothing more. If thou thinkest that I would willingly cross paths with the likes of him thou must have me mistaken for someone else!\"");
	say();
	UI_remove_answer("Hook");
labelFunc0486_020C:
	case "locket" attend labelFunc0486_021F:
	message("\"We are trying to return to Buccaneer's Den. I was hoping to sell a gold locket which came into my possession to buy our passage back, but I fear it is lost. If thou dost come across it be sure to let me know.\"");
	say();
	UI_remove_answer("locket");
labelFunc0486_021F:
	case "Fellowship" attend labelFunc0486_0249:
	message("\"Thou art a member of The Fellowship! For years I have been seeing Fellowship members winning heavy stakes at the House of Games. Canst thou tell me their secret?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0486_023E;
	message("\"Of course thou canst. But I do not suspect that thou wilt.\" Robin shrugs his shoulders.");
	say();
	goto labelFunc0486_0242;
labelFunc0486_023E:
	message("\"Forgive me if I do not believe thee.\"");
	say();
labelFunc0486_0242:
	UI_remove_answer("Fellowship");
labelFunc0486_0249:
	case "marooned" attend labelFunc0486_027E:
	message("\"That is right. We cannot afford the stinking ship sold by the shipwright.");
	say();
	message("\"But say, thou must have gotten here in some manner! Dost thou have some manner of ship on which we could leave the island?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0486_0273;
	message("\"I could pay thee well if thou wouldst\ttake us back to Buccaneer's Den.\"");
	say();
	UI_add_answer("pay");
	goto labelFunc0486_0277;
labelFunc0486_0273:
	message("\"If thou shouldst come across a way off this island please permit us to leave with thee.\"");
	say();
labelFunc0486_0277:
	UI_remove_answer("marooned");
labelFunc0486_027E:
	case "pay" attend labelFunc0486_0298:
	message("\"Of course, I cannot pay thee right now at this moment.\tBut when we reach Buccaneer's Den, I promise thee, I shall be able to get mine hands on a lot of money.\"");
	say();
	UI_remove_answer("pay");
	UI_add_answer("money");
labelFunc0486_0298:
	case "money" attend labelFunc0486_02B2:
	message("\"Yes, money! For I have found something here in New Magincia that will be worth more than gold in Buccaneer's Den.\"");
	say();
	UI_remove_answer("money");
	UI_add_answer("something");
labelFunc0486_02B2:
	case "something" attend labelFunc0486_02E8:
	message("\"Before I tell thee what it is, wilt thou promise to take me and my mates back to Buccaneer's Den?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0486_02DC;
	var0009 = true;
	message("Robin looks you in the eye. \"Thou art truly a kind friend. I suppose then I should tell thee what it is we are planning on bringing back from New Magincia.\"");
	say();
	UI_add_answer("bringing back");
	goto labelFunc0486_02E1;
labelFunc0486_02DC:
	message("\"Then I cannot trust thee enough to tell thee of my plans. Go away.\"");
	say();
	abort;
labelFunc0486_02E1:
	UI_remove_answer("something");
labelFunc0486_02E8:
	case "bringing back" attend labelFunc0486_0309:
	if (!(!var0004)) goto labelFunc0486_02FE;
	message("\"Since thou art truly a friend then I know that I can ask a favor of thee. Why dost thou not bring back that lost locket to me and we shall speak of these things some more.\" He flashes you a wicked grin.");
	say();
	goto labelFunc0486_0302;
labelFunc0486_02FE:
	message("\"Since thou hast brought my locket back here, I suppose that I can trust thee. I intend to take Constance back with us and sell her to the operator of the baths.\"");
	say();
labelFunc0486_0302:
	UI_remove_answer("bringing back");
labelFunc0486_0309:
	case "show locket" attend labelFunc0486_032D:
	message("\"Now that I know I can trust thee, I can let thee in on our plan. I intend to take another passenger in thy boat back with us to Buccaneer's Den. Her name is Constance and she should fetch a goodly price from Glenno, operator of the baths. Enough to pay my debts, pay thee for passage and still have plenty left over for another go at the House of Games!\"");
	say();
	Func0911(0x0064);
	gflags[0x0184] = true;
	UI_add_answer("boat");
	UI_remove_answer("show locket");
labelFunc0486_032D:
	case "boat" attend labelFunc0486_036F:
	message("\"Thou must get thy boat ready to leave this place immediately. My lads and I shall get Constance and then we shall join thee. But wilt thou tell me where thy boat is located?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0486_034C;
	message("You give Robin the location of your boat. He slowly breaks into an evil laugh. \"I thank thee, friend. All that is left for us is to eliminate one remaining loose end. Now that we know where thy boat is we will collect more on our investment by simply killing thee and taking it.\"*");
	say();
	goto labelFunc0486_0350;
labelFunc0486_034C:
	message("\"Thou hast lost thy stomach for our game, eh? If that is the case then my lads and I have no choice but to kill thee dead to protect our secret!\"*");
	say();
labelFunc0486_0350:
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
labelFunc0486_036F:
	case "bye" attend labelFunc0486_037A:
	goto labelFunc0486_037D;
labelFunc0486_037A:
	goto labelFunc0486_00AC;
labelFunc0486_037D:
	endconv;
	message("\"It has been a pleasure speaking with thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0486_0388:
	if (!(event == 0x0000)) goto labelFunc0486_0396;
	Func092E(0xFF7A);
labelFunc0486_0396:
	return;
}


