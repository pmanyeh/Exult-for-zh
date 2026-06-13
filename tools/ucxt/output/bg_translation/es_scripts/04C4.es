#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern void Func08D4 0x8D4 ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func08D3 0x8D3 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04C4 object#(0x4C4) ()
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

	if (!(event == 0x0001)) goto labelFunc04C4_0366;
	UI_show_npc_face(0xFF3C, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "the Avatar";
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF3C));
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!gflags[0x0266]) goto labelFunc04C4_0051;
	var0004 = var0001;
labelFunc04C4_0051:
	if (!gflags[0x0267]) goto labelFunc04C4_005D;
	var0004 = var0000;
labelFunc04C4_005D:
	if (!(!gflags[0x026D])) goto labelFunc04C4_00B4;
	message("You see a dashing young man, who turns to greet you.~~\"I am Richter, a knight of the Hold. Who wouldst thou be?\"");
	say();
	var0005 = Func090B([var0001, var0002]);
	if (!(var0005 == var0001)) goto labelFunc04C4_0098;
	message("\"I am happy to meet thee, ");
	message(var0001);
	message(".\"");
	say();
	var0004 = var0001;
	gflags[0x0266] = true;
	goto labelFunc04C4_00AD;
labelFunc04C4_0098:
	message("\"I see,\" he eyes you suspiciously. \"Thou art back for more, then? Thou'lt not trick me again, I warn thee.\"");
	say();
	var0004 = var0000;
	gflags[0x0267] = true;
	UI_add_answer("more");
labelFunc04C4_00AD:
	gflags[0x026D] = true;
	goto labelFunc04C4_00BE;
labelFunc04C4_00B4:
	message("\"Hello, ");
	message(var0004);
	message(",\" says Richter.");
	say();
labelFunc04C4_00BE:
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C4_00D0;
	UI_add_answer("statue");
labelFunc04C4_00D0:
	if (!(gflags[0x025F] && (!gflags[0x0265]))) goto labelFunc04C4_00EF;
	if (!gflags[0x027B]) goto labelFunc04C4_00EF;
	if (!(!gflags[0x0279])) goto labelFunc04C4_00EF;
	UI_add_answer("gargoyle blood");
labelFunc04C4_00EF:
	converse attend labelFunc04C4_0361;
	case "name" attend labelFunc04C4_0122:
	message("\"As I have told thee, I am called Richter.\"");
	say();
	gflags[0x027B] = true;
	UI_remove_answer("name");
	if (!(gflags[0x025F] && (!gflags[0x0265]))) goto labelFunc04C4_0122;
	if (!(!gflags[0x0279])) goto labelFunc04C4_0122;
	UI_add_answer("gargoyle blood");
labelFunc04C4_0122:
	case "more" attend labelFunc04C4_0142:
	message("He clears his throat and examines you more closely.~~\"Ah, thou shouldst not mind my mumblings, ");
	message(var0004);
	message(".\"");
	say();
	UI_add_answer("I mind");
	UI_remove_answer("more");
labelFunc04C4_0142:
	case "job" attend labelFunc04C4_015E:
	message("\"I am the armourer of the Hold.\"");
	say();
	UI_add_answer(["armour", "weapons", "Hold"]);
labelFunc04C4_015E:
	case "Hold" attend labelFunc04C4_0178:
	message("\"Yes, thou art in Serpent's Hold, home to many noble and valiant knights.\"");
	say();
	UI_remove_answer("Hold");
	UI_add_answer("knights");
labelFunc04C4_0178:
	case "knights" attend labelFunc04C4_019B:
	message("\"Lord John-Paul is charged with overseeing the Hold, though Sir Horffe is actually the captain of the guard. The rest of us, of course, are here to serve Lord British and the needs of Britannia.\"");
	say();
	UI_remove_answer("knights");
	UI_add_answer(["John-Paul", "Horffe", "needs"]);
labelFunc04C4_019B:
	case "gargoyle blood" attend labelFunc04C4_01B2:
	message("\"I should have known 'twould be Horffe.\" His eyes narrow. \"He has continually demonstrated an overall lack of morals and sense of unity. I will speak with John-Paul about this.\"");
	say();
	var0006 = true;
	UI_remove_answer("gargoyle blood");
labelFunc04C4_01B2:
	case "John-Paul" attend labelFunc04C4_01C5:
	message("\"I trust his ability as I trust no other. I cannot tell thee how proud I was when he chose me to be his second in command!\"");
	say();
	UI_remove_answer("John-Paul");
labelFunc04C4_01C5:
	case "Horffe" attend labelFunc04C4_01E5:
	message("He appears thoughtful. \"I know the others trust him, and I, myself, do not doubt his fighting skills. But I cannot escape this feeling that he needs more moral discipline. I feel obligated to watch him at times.\"");
	say();
	UI_remove_answer("Horffe");
	UI_add_answer(["others", "watch"]);
labelFunc04C4_01E5:
	case "watch" attend labelFunc04C4_01F8:
	message("\"I am not certain what it is that I am watching for. However, I expect him to fall into ways either aggressive or thieving. He simply does not seem to truly believe in the unity of the Hold.\"");
	say();
	UI_remove_answer("watch");
labelFunc04C4_01F8:
	case "others" attend labelFunc04C4_0218:
	message("\"Well, it is obvious that John-Paul respects his abilities. Lady Tory has told me that she can sense his honesty, but I am not without skepticism.\"");
	say();
	UI_remove_answer("others");
	UI_add_answer(["Tory", "sense"]);
labelFunc04C4_0218:
	case "sense" attend labelFunc04C4_022B:
	message("\"Lady Tory has the uncanny ability to empathize with others. She can determine another's intentions and emotions by doing nothing more than passing a simple greeting.\"");
	say();
	UI_remove_answer("sense");
labelFunc04C4_022B:
	case "Tory" attend labelFunc04C4_023E:
	message("\"She is the Hold advisor, often giving guidance to the knights.\" His expression becomes wistful. \"She is also quite, quite beautiful.\"");
	say();
	UI_remove_answer("Tory");
labelFunc04C4_023E:
	case "needs" attend labelFunc04C4_0251:
	message("\"Well, obviously there is many a vile beast looking to terrorize the countryside on the mainland. 'Tis our duty to protect the common man. In addition, we are here to provide examples of proper behavior to the general populace.\"");
	say();
	UI_remove_answer("needs");
labelFunc04C4_0251:
	case "I mind" attend labelFunc04C4_0264:
	message("Looking down, he shifts his weight from foot to foot for a moment. Glancing back up, eyes narrowed, he says, ~~\"Not long ago a man entered mine armoury who claimed to be the Avatar, just as thou dost claim. When I turned to reach for a weapon he had requested, he purloined several items and ran away.~~\"I assume,\" he says carefully, \"thou art not that rogue.\"");
	say();
	UI_remove_answer("I mind");
labelFunc04C4_0264:
	case "armour" attend labelFunc04C4_028F:
	if (!((var0003 == 0x0007) || (var0003 == 0x000D))) goto labelFunc04C4_0284;
	Func08D4();
	goto labelFunc04C4_0288;
labelFunc04C4_0284:
	message("\"I am sorry. A better time to discuss this would be when my shop is open.\"");
	say();
labelFunc04C4_0288:
	UI_remove_answer("armour");
labelFunc04C4_028F:
	case "Fellowship" attend labelFunc04C4_02BC:
	var0007 = UI_wearing_fellowship();
	if (!var0007) goto labelFunc04C4_02AB;
	message("\"Why, yes, I see thou art a member too.\"");
	say();
	goto labelFunc04C4_02AE;
labelFunc04C4_02AB:
	Func0919();
labelFunc04C4_02AE:
	UI_remove_answer("Fellowship");
	UI_add_answer("philosophy");
labelFunc04C4_02BC:
	case "philosophy" attend labelFunc04C4_02CE:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc04C4_02CE:
	case "weapons" attend labelFunc04C4_02F9:
	if (!((var0003 == 0x0007) || (var0003 == 0x000D))) goto labelFunc04C4_02EE;
	Func08D3();
	goto labelFunc04C4_02F2;
labelFunc04C4_02EE:
	message("\"I am sorry. A better time to discuss this would be when my shop is open.\"");
	say();
labelFunc04C4_02F2:
	UI_remove_answer("weapons");
labelFunc04C4_02F9:
	case "statue" attend labelFunc04C4_0353:
	message("A look of disgust appears on his face.~~\"Obviously, someone who doth not seek unity did this! He is not worthy of reward!\"~~After a moment, he calms down.");
	say();
	if (!(!gflags[0x0259])) goto labelFunc04C4_034C;
	message("\"Art thou investigating this crime against mankind?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04C4_0348;
	message("\"Then let me give thee these.\" He holds up some stone chips. \"They were found at the base of the statue. Thou wilt notice that they are stained red in some places. I believe it to be blood.\"");
	say();
	var0009 = UI_add_party_items(0x0001, 0x032F, 0xFE99, 0x0004, false);
	if (!var0009) goto labelFunc04C4_0341;
	gflags[0x0259] = true;
	goto labelFunc04C4_0345;
labelFunc04C4_0341:
	message("\"Mayhap when thou hast more room I can give them to thee.\"");
	say();
labelFunc04C4_0345:
	goto labelFunc04C4_034C;
labelFunc04C4_0348:
	message("\"I see.\"");
	say();
labelFunc04C4_034C:
	UI_remove_answer("statue");
labelFunc04C4_0353:
	case "bye" attend labelFunc04C4_035E:
	goto labelFunc04C4_0361;
labelFunc04C4_035E:
	goto labelFunc04C4_00EF;
labelFunc04C4_0361:
	endconv;
	message("\"Pleasant journeys. Remember, trust thy brother.\"*");
	say();
labelFunc04C4_0366:
	if (!(event == 0x0000)) goto labelFunc04C4_0374;
	Func092E(0xFF3C);
labelFunc04C4_0374:
	return;
}


