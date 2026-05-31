#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func04AA object#(0x4AA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04AA_0273;
	UI_show_npc_face(0xFF56, 0x0000);
	var0000 = Func0908();
	var0001 = "Avatar";
	var0002 = "None of thy concern";
	var0003 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0212]) goto labelFunc04AA_0047;
	UI_add_answer("thief");
labelFunc04AA_0047:
	if (!gflags[0x0218]) goto labelFunc04AA_005B;
	UI_remove_answer("thief");
	UI_add_answer("theft solved");
labelFunc04AA_005B:
	if (!gflags[0x0215]) goto labelFunc04AA_0075;
	var0004 = var0001;
	if (!(!gflags[0x021E])) goto labelFunc04AA_0075;
	UI_add_answer("apology");
labelFunc04AA_0075:
	if (!gflags[0x022D]) goto labelFunc04AA_0081;
	var0004 = var0000;
labelFunc04AA_0081:
	if (!gflags[0x022E]) goto labelFunc04AA_008D;
	var0004 = var0003;
labelFunc04AA_008D:
	if (!(!gflags[0x0223])) goto labelFunc04AA_00FA;
	message("You see a nervous man who constantly blinks. He sees you and looks like he is in a snit. \"Who art thou?\"");
	say();
	var0005 = Func090B([var0000, var0001, var0002]);
	if (!(var0005 == var0000)) goto labelFunc04AA_00C8;
	message("\"Very well, ");
	message(var0000);
	message(". What dost thou want?\"");
	say();
	var0004 = var0000;
	gflags[0x022D] = true;
labelFunc04AA_00C8:
	if (!(var0005 == var0002)) goto labelFunc04AA_00E0;
	message("\"Fine!\"");
	say();
	var0004 = var0003;
	gflags[0x022E] = true;
labelFunc04AA_00E0:
	if (!(var0005 == var0001)) goto labelFunc04AA_00F7;
	message("\"Thou art a most pathetic little worm. Really, all this Avatar nonsense is nothing more than a sad plea for attention.\"*");
	say();
	gflags[0x0223] = true;
	gflags[0x0215] = true;
	abort;
labelFunc04AA_00F7:
	goto labelFunc04AA_0104;
labelFunc04AA_00FA:
	message("\"Oh, ");
	message(var0004);
	message(". It is thee!\"");
	say();
labelFunc04AA_0104:
	converse attend labelFunc04AA_0268;
	case "name" attend labelFunc04AA_011A:
	message("\"I am Merrick.\"");
	say();
	UI_remove_answer("name");
labelFunc04AA_011A:
	case "job" attend labelFunc04AA_0136:
	message("\"I used to be a farmer here in Paws. Now I suppose I work for the Fellowship. I live in their shelter.\"");
	say();
	UI_add_answer(["farmer", "Paws", "Fellowship"]);
labelFunc04AA_0136:
	case "apology" attend labelFunc04AA_0153:
	message("\"I do most humbly apologize to thee, ");
	message(var0004);
	message(". As I am certain thou art aware, there have been many who have claimed to be the one and only true Avatar ever since thou hast last visited us.\"");
	say();
	gflags[0x021E] = true;
	UI_remove_answer("apology");
labelFunc04AA_0153:
	case "farmer" attend labelFunc04AA_0176:
	message("\"I was a farmer; of course, that was before the seven year drought. Komor, Fenn and myself were reduced to paupers.\"");
	say();
	UI_remove_answer("farmer");
	UI_add_answer(["Komor", "Fenn", "paupers"]);
labelFunc04AA_0176:
	case "theft solved" attend labelFunc04AA_0189:
	message("\"I heard that Garritt was the one who stole the venom. Hmm! And to think I live under the same roof with the hoodlum. I shall have to guard my belongings more.\"");
	say();
	UI_remove_answer("theft solved");
labelFunc04AA_0189:
	case "Paws" attend labelFunc04AA_019C:
	message("\"I have lived here in Paws all my life. I will not leave it now. I shall never leave.\"");
	say();
	UI_remove_answer("Paws");
labelFunc04AA_019C:
	case "Fellowship" attend labelFunc04AA_01C9:
	var0006 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc04AA_01B8;
	message("\"It is good to see that thou art one of us. Having the Avatar as a Fellowship member gives The Fellowship much prestige. Already I am certain that more people have been wanting to join because of it.\"");
	say();
	goto labelFunc04AA_01BB;
labelFunc04AA_01B8:
	Func0919();
labelFunc04AA_01BB:
	UI_remove_answer("Fellowship");
	UI_add_answer("philosophy");
labelFunc04AA_01C9:
	case "philosophy" attend labelFunc04AA_01DB:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc04AA_01DB:
	case "thief" attend labelFunc04AA_01FB:
	message("\"I have heard that some of Morfin's venom hath been stolen. I cannot imagine who would do it, unless it was that brat that lives with the farmer widow.\"");
	say();
	UI_remove_answer("thief");
	UI_add_answer(["brat", "widow"]);
labelFunc04AA_01FB:
	case "brat" attend labelFunc04AA_020E:
	message("\"I believe his name is Tobias.\"");
	say();
	UI_remove_answer("brat");
labelFunc04AA_020E:
	case "widow" attend labelFunc04AA_0221:
	message("\"I believe her name is Camille.\"");
	say();
	UI_remove_answer("widow");
labelFunc04AA_0221:
	case "Komor" attend labelFunc04AA_0234:
	message("\"He once owned one of the largest farms in all of Britannia. He was born to wealthy parents. After he lost his farm he took to sleeping along the road. One night a gang of bullies wanted to steal his gold. He had none so they beat him until he was lame. He is a very bitter man. Tragic.\"");
	say();
	UI_remove_answer("Komor");
labelFunc04AA_0234:
	case "Fenn" attend labelFunc04AA_0247:
	message("\"Fenn was a farm laborer, and one of Komor's most trusted friends. With the farm gone Fenn just did not have any place to go or any way to live.\"");
	say();
	UI_remove_answer("Fenn");
labelFunc04AA_0247:
	case "paupers" attend labelFunc04AA_025A:
	message("\"For years Komor, Fenn and I lived off of the rubbish of others, sleeping by the side of the road. Then I found The Fellowship and my life was changed for the better. I have tried to share my newfound fortune with my friends but I fear they hate me for being more resourceful than they.\"");
	say();
	UI_remove_answer("paupers");
labelFunc04AA_025A:
	case "bye" attend labelFunc04AA_0265:
	goto labelFunc04AA_0268;
labelFunc04AA_0265:
	goto labelFunc04AA_0104;
labelFunc04AA_0268:
	endconv;
	message("\"Good day, ");
	message(var0004);
	message(".\"*");
	say();
labelFunc04AA_0273:
	if (!(event == 0x0000)) goto labelFunc04AA_0281;
	Func092E(0xFF56);
labelFunc04AA_0281:
	return;
}


