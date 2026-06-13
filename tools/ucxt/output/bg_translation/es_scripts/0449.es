#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0449 object#(0x449) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0449_01E2;
	UI_show_npc_face(0xFFB7, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0076]) goto labelFunc0449_002F;
	UI_add_answer("Nell");
labelFunc0449_002F:
	if (!gflags[0x007D]) goto labelFunc0449_003C;
	UI_add_answer("Jeanette");
labelFunc0449_003C:
	if (!gflags[0x007E]) goto labelFunc0449_0049;
	UI_add_answer("Thou art in luck");
labelFunc0449_0049:
	if (!(!gflags[0x00CA])) goto labelFunc0449_005B;
	message("You see a young peasant with a tray of wine glasses.");
	say();
	gflags[0x00CA] = true;
	goto labelFunc0449_005F;
labelFunc0449_005B:
	message("\"Hello, Avatar.\"");
	say();
labelFunc0449_005F:
	converse attend labelFunc0449_01DD;
	case "name" attend labelFunc0449_0075:
	message("\"I am Charles.\"");
	say();
	UI_remove_answer("name");
labelFunc0449_0075:
	case "job" attend labelFunc0449_008E:
	message("\"I am a servant in Lord British's castle. I serve as a gentleman's gentleman, among other things. Right now I am serving wine.\"");
	say();
	UI_add_answer(["servant", "wine"]);
labelFunc0449_008E:
	case "servant" attend labelFunc0449_00AE:
	message("\"My family has been employed by Lord British for many years. My father, Bennie, once held the position I now hold. He is the head servant. I shall be head servant one day, I suppose. Then perhaps my sweetheart will love me.\"");
	say();
	UI_remove_answer("servant");
	UI_add_answer(["family", "sweetheart"]);
labelFunc0449_00AE:
	case "family" attend labelFunc0449_00C1:
	message("\"Thou wilt encounter them. My mother cooks in the kitchen. My prudish sister is the chambermaid.\"");
	say();
	UI_remove_answer("family");
labelFunc0449_00C1:
	case "sweetheart" attend labelFunc0449_00DF:
	message("Charles sighs. He is clearly smitten. \"She is Jeanette. She works in the Blue Boar. But I am afraid I am not 'up to her standards'. I believe she has her eye set on someone else. I do not know what to do about it.\"");
	say();
	gflags[0x007B] = true;
	UI_remove_answer("sweetheart");
	UI_add_answer("Jeanette");
labelFunc0449_00DF:
	case "Jeanette" attend labelFunc0449_00F2:
	message("\"She does not love me, I know. She would rather marry a rich man. I have not a chance.\"");
	say();
	UI_remove_answer("Jeanette");
labelFunc0449_00F2:
	case "Thou art in luck" attend labelFunc0449_0103:
	message("You tell Charles what Jeanette said.");
	say();
	message("\"Really? Thou dost mean I have a chance?\" Charles becomes so excited he nearly drops his tray. \"Oh, I thank thee, Avatar, for giving me this hopeful news! I must run and send her flowers or some gift! I must declare my love!\" He turns away from you, obviously walking on clouds.*");
	say();
	abort;
labelFunc0449_0103:
	case "Nell" attend labelFunc0449_0127:
	message("\"She is engaged to the carousel manager. It is hard to get used to. I have always been overly protective of my little sister. I would wager she has never even been kissed! Not even by Carrocio! That is mainly because I have looked after her all this time. I would smite anyone who laid a hand on her! Besides, Nell has always been chaste and prudish. She would never think to allow a man to kiss her.\"");
	say();
	UI_remove_answer("Nell");
	gflags[0x007C] = true;
	if (!gflags[0x007A]) goto labelFunc0449_0127;
	UI_add_answer("child");
labelFunc0449_0127:
	case "child" attend labelFunc0449_015E:
	message("You remember what Nell told you about her 'condition'. Do you mention it to Charles?");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0449_0153;
	message("You tell Charles what Nell revealed in confidence.");
	say();
	message("Charles is wide-eyed and shocked. \"Why, that hussy! My sister! She is nothing more than a tramp! And wait until I get mine hands on Carrocio!\"");
	say();
	message("Charles turns away. There is murder in his eyes.*");
	say();
	gflags[0x0089] = true;
	abort;
	goto labelFunc0449_015E;
labelFunc0449_0153:
	message("Your conscience rests easy, knowing that you resisted the temptation to carry tales.");
	say();
	UI_remove_answer("child");
labelFunc0449_015E:
	case "wine" attend labelFunc0449_01CF:
	message("\"Wouldst thou like some wine?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0449_01C4;
	var0002 = UI_get_party_list();
	var0003 = 0x0000;
	enum();
labelFunc0449_0184:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0449_019C;
	var0003 = (var0003 + 0x0001);
	goto labelFunc0449_0184;
labelFunc0449_019C:
	var0007 = UI_add_party_items(var0003, 0x0274, 0xFE99, 0x0000, true);
	if (!var0007) goto labelFunc0449_01BD;
	message("\"'Tis on the house.\" Charles hands you and your friends glasses of wine.");
	say();
	goto labelFunc0449_01C1;
labelFunc0449_01BD:
	message("\"Oops. Thou art carrying too much. Ask me again when thou dost not have thine hands full!\"");
	say();
labelFunc0449_01C1:
	goto labelFunc0449_01C8;
labelFunc0449_01C4:
	message("\"Some other time, then.\"");
	say();
labelFunc0449_01C8:
	UI_remove_answer("wine");
labelFunc0449_01CF:
	case "bye" attend labelFunc0449_01DA:
	goto labelFunc0449_01DD;
labelFunc0449_01DA:
	goto labelFunc0449_005F;
labelFunc0449_01DD:
	endconv;
	message("Charles nods his head at you, then goes about his business.*");
	say();
labelFunc0449_01E2:
	if (!(event == 0x0000)) goto labelFunc0449_01F0;
	Func092E(0xFFB7);
labelFunc0449_01F0:
	return;
}


