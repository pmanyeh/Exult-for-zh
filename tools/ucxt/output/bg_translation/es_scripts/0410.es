#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08AB 0x8AB ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func0410 object#(0x410) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0410_02A5;
	var0000 = Func0908();
	var0001 = UI_part_of_day();
	var0002 = false;
	var0003 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0001 == 0x0007)) goto labelFunc0410_003B;
	Func08AB();
labelFunc0410_003B:
	UI_add_answer(["name", "job", "murder", "bye"]);
	if (!gflags[0x003F]) goto labelFunc0410_0065;
	UI_add_answer(["argument", "test"]);
	var0002 = true;
labelFunc0410_0065:
	if (!gflags[0x0043]) goto labelFunc0410_0072;
	UI_add_answer("Hook");
labelFunc0410_0072:
	if (!gflags[0x003E]) goto labelFunc0410_0088;
	UI_add_answer(["gold", "medallion", "scroll"]);
labelFunc0410_0088:
	if (!gflags[0x0040]) goto labelFunc0410_0095;
	UI_add_answer("Crown Jewel");
labelFunc0410_0095:
	UI_show_npc_face(0xFFF0, 0x0000);
	if (!(!gflags[0x004F])) goto labelFunc0410_00B1;
	message("This man exudes kindness and geniality. \"Ah, Avatar! I recognized thee at once! Word has moved through town quickly. I had heard thou wert here.\"");
	say();
	gflags[0x004F] = true;
	goto labelFunc0410_00BB;
labelFunc0410_00B1:
	message("\"Hello again, ");
	message(var0000);
	message(",\" Klog asks. \"How may I help thee?\"");
	say();
labelFunc0410_00BB:
	converse attend labelFunc0410_029A;
	case "name" attend labelFunc0410_00D1:
	message("\"My name is Klog.\"");
	say();
	UI_remove_answer("name");
labelFunc0410_00D1:
	case "job" attend labelFunc0410_00EA:
	message("\"I am the Trinsic branch leader for The Fellowship. I work here with my wife Ellen.\"");
	say();
	UI_add_answer(["Fellowship", "Ellen"]);
labelFunc0410_00EA:
	case "murder" attend labelFunc0410_0117:
	if (!var0003) goto labelFunc0410_00FF;
	message("The Cube vibrates. \"Hook did a splendid job, did he not? Too bad\tI missed it. Had to keep up appearances and remain at home.\tHad to have an alibi.\"");
	say();
	goto labelFunc0410_0103;
labelFunc0410_00FF:
	message("\"Well,\" the man says, reflecting, \"I was home all night, and my wife Ellen will certainly verify that. But, as we say in The Fellowship, 'Worthiness Precedes Reward'. Christopher must have done something bad. And the poor gargoyle Inamo! 'Tis a pity.\"");
	say();
labelFunc0410_0103:
	UI_remove_answer("murder");
	UI_add_answer(["Christopher", "Inamo"]);
labelFunc0410_0117:
	case "Fellowship" attend labelFunc0410_0142:
	if (!(!gflags[0x0006])) goto labelFunc0410_0137;
	message("\"The Fellowship meets here at the branch office in Trinsic every night at nine. Thou art welcome to attend.");
	say();
	Func0919();
	UI_add_answer("philosophy");
	goto labelFunc0410_013B;
labelFunc0410_0137:
	message("\"Why, thou shouldst know all about our little family by now!\"");
	say();
labelFunc0410_013B:
	UI_remove_answer("Fellowship");
labelFunc0410_0142:
	case "Ellen" attend labelFunc0410_0155:
	message("\"She is my wife and bookkeeper for our branch.\"");
	say();
	UI_remove_answer("Ellen");
labelFunc0410_0155:
	case "philosophy" attend labelFunc0410_0167:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc0410_0167:
	case "Christopher" attend labelFunc0410_0188:
	message("\"Christopher was a valued member of The Fellowship for some time. Unfortunately, we got into a petty argument last week.\"");
	say();
	UI_remove_answer("Christopher");
	if (!(!var0002)) goto labelFunc0410_0188;
	UI_add_answer("argument");
labelFunc0410_0188:
	case "Inamo" attend labelFunc0410_019B:
	message("\"I did not know the gargoyle. It sounds as if he was in the wrong place at the wrong time. 'Tis a pity.\"");
	say();
	UI_remove_answer("Inamo");
labelFunc0410_019B:
	case "argument" attend labelFunc0410_01B5:
	message("\"Last week Christopher stated that he wanted to leave The Fellowship! Canst thou imagine? Well, we simply attempted to speak with him and alter his decision. The man verbally assaulted me and my companions with no provocation!\"");
	say();
	UI_remove_answer("argument");
	UI_add_answer("companions");
labelFunc0410_01B5:
	case "test" attend labelFunc0410_01C8:
	message("\"Batlin in Britain will be happy to administer our test to thee. Thou shouldst certainly take it. Who knows? Thou mayest find something within thee that needs improving.\"");
	say();
	UI_remove_answer("test");
labelFunc0410_01C8:
	case "companions" attend labelFunc0410_01DF:
	message("\"They have gone to Fellowship Headquarters in Britain. They were here delivering Fellowship funds. Their names are Elizabeth and Abraham.\"");
	say();
	gflags[0x0041] = true;
	UI_remove_answer("companions");
labelFunc0410_01DF:
	case "gold" attend labelFunc0410_0206:
	if (!var0003) goto labelFunc0410_01FB;
	message("The Cube vibrates. \"That was payment for delivery of the plans for the Black Gate pedestals.\"");
	say();
	UI_add_answer("Black Gate");
	goto labelFunc0410_01FF;
labelFunc0410_01FB:
	message("\"I do not know what thou art talking about.\"");
	say();
labelFunc0410_01FF:
	UI_remove_answer("gold");
labelFunc0410_0206:
	case "Black Gate" attend labelFunc0410_0219:
	message("\"All I know is that it is being built on the Isle of the Avatar.\"");
	say();
	UI_remove_answer("Black Gate");
labelFunc0410_0219:
	case "medallion" attend labelFunc0410_022C:
	message("\"Christopher had expressed interest in leaving The Fellowship. Perhaps he had stored it for safekeeping.\"");
	say();
	UI_remove_answer("medallion");
labelFunc0410_022C:
	case "scroll" attend labelFunc0410_024C:
	if (!var0003) goto labelFunc0410_0241;
	message("The Cube vibrates. \"Christopher received his reward prior to showing his worthiness. He reneged on delivery of\tthe plans for the pedestal. It was merely a warning.\"");
	say();
	goto labelFunc0410_0245;
labelFunc0410_0241:
	message("\"I do not know anything about that.\"");
	say();
labelFunc0410_0245:
	UI_remove_answer("scroll");
labelFunc0410_024C:
	case "Crown Jewel" attend labelFunc0410_026C:
	if (!var0003) goto labelFunc0410_0261;
	message("The Cube vibrates. \"That is Hook's ship.\"");
	say();
	goto labelFunc0410_0265;
labelFunc0410_0261:
	message("\"I do not know that ship.\"");
	say();
labelFunc0410_0265:
	UI_remove_answer("Crown Jewel");
labelFunc0410_026C:
	case "Hook" attend labelFunc0410_028C:
	if (!var0003) goto labelFunc0410_0281;
	message("The Cube vibrates. \"He is the one who was assigned to kill Christopher. I do not know where he is now.\"");
	say();
	goto labelFunc0410_0285;
labelFunc0410_0281:
	message("\"I am afraid I do not know a man of that description.\"");
	say();
labelFunc0410_0285:
	UI_remove_answer("Hook");
labelFunc0410_028C:
	case "bye" attend labelFunc0410_0297:
	goto labelFunc0410_029A;
labelFunc0410_0297:
	goto labelFunc0410_00BB;
labelFunc0410_029A:
	endconv;
	message("\"If there is anything else I may help thee with, ");
	message(var0000);
	message(", let me know.\"*");
	say();
labelFunc0410_02A5:
	if (!(event == 0x0000)) goto labelFunc0410_02B3;
	Func092E(0xFFF0);
labelFunc0410_02B3:
	return;
}


