#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08E0 0x8E0 ();
extern var Func090A 0x90A ();

void Func0462 object#(0x462) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0462_0243;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFF9E, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0462_0040;
	if (!(!var0000)) goto labelFunc0462_003D;
	message("The creature ignores you.*");
	say();
	abort;
	goto labelFunc0462_0040;
labelFunc0462_003D:
	Func08E0();
labelFunc0462_0040:
	if (!(!gflags[0x013D])) goto labelFunc0462_0068;
	if (!(!gflags[0x013C])) goto labelFunc0462_005D;
	message("The ape-like female appears nervous.");
	say();
	gflags[0x013C] = true;
	gflags[0x013D] = true;
	goto labelFunc0462_0065;
labelFunc0462_005D:
	message("The female Emp appears nervous.");
	say();
	gflags[0x013D] = true;
labelFunc0462_0065:
	goto labelFunc0462_007D;
labelFunc0462_0068:
	var0001 = false;
	message("Saralek greets you. \"Hello is said to you, human.\"");
	say();
	if (!gflags[0x0132]) goto labelFunc0462_007D;
	UI_add_answer("Trellek");
labelFunc0462_007D:
	if (!(gflags[0x0131] && (!gflags[0x0158]))) goto labelFunc0462_008F;
	UI_add_answer("Salamon's permission");
labelFunc0462_008F:
	UI_add_answer(["name", "job", "bye"]);
labelFunc0462_009F:
	converse attend labelFunc0462_023E;
	case "name" attend labelFunc0462_00C7:
	message("She shies away for a moment, and then cautiously steps forward. \"I am called Saralek.\"");
	say();
	UI_remove_answer("name");
	if (!(gflags[0x0132] && (!var0001))) goto labelFunc0462_00C7;
	UI_add_answer("Trellek");
labelFunc0462_00C7:
	case "job" attend labelFunc0462_00DA:
	message("\"`Job' is not understood. Family is what you mean?\"");
	say();
	UI_add_answer("family");
labelFunc0462_00DA:
	case "family" attend labelFunc0462_00FA:
	message("\"Yes, I am part of a family. The Silverleaf tree is my home. I am bonded with Trellek.\"");
	say();
	UI_remove_answer("family");
	UI_add_answer(["Silverleaf tree", "Trellek"]);
labelFunc0462_00FA:
	case "Trellek" attend labelFunc0462_0129:
	message("\"Trellek is my husband.\"");
	say();
	var0001 = true;
	if (!gflags[0x0132]) goto labelFunc0462_0122;
	if (!(!gflags[0x0130])) goto labelFunc0462_0122;
	message("\"Trellek has been met by you?\" She smiles proudly, and takes another step forward. \"What was said by him?\"");
	say();
	UI_add_answer("join party");
labelFunc0462_0122:
	UI_remove_answer("Trellek");
labelFunc0462_0129:
	case "Silverleaf tree" attend labelFunc0462_0143:
	message("\"There are fewer and fewer Silverleaf trees. Many are cut down often. Soon, no Silverleaf trees will be around for our homes.\"");
	say();
	UI_add_answer("cut down");
	UI_remove_answer("Silverleaf tree");
labelFunc0462_0143:
	case "cut down" attend labelFunc0462_0156:
	message("\"The trees are cut by a human with a shiny, sharp item.\"");
	say();
	UI_remove_answer("cut down");
labelFunc0462_0156:
	case "join party" attend labelFunc0462_018F:
	message("\"To join you is his desire?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0462_0184;
	message("She thinks for a moment. \"His going away is not desired by me.\" She turns to look directly at you. \"But, joining you may be wise action.\" She sighs.");
	say();
	message("\"Permission from Salamon must be gained first. Then permission from me will be granted. Your return to me is necessary for that.\"");
	say();
	gflags[0x0130] = true;
	UI_add_answer("Salamon");
	goto labelFunc0462_0188;
labelFunc0462_0184:
	message("\"That is good!\" She seems very happy and relieved.");
	say();
labelFunc0462_0188:
	UI_remove_answer("join party");
labelFunc0462_018F:
	case "Salamon" attend labelFunc0462_01A2:
	message("\"She is a very wise Emp. Many humans have been met by her. Knowledge and experience are her talents.\"");
	say();
	UI_remove_answer("Salamon");
labelFunc0462_01A2:
	case "Salamon's permission" attend labelFunc0462_01D3:
	message("Her eyes begin to mist over.~~ \"I am sorry. A lie was told by me. Trellek's leaving is not desired by me. Permission will not be given.\"~~ Her expression changes.~~ \"What is the reason you asked him?\"");
	say();
	UI_add_answer(["adventure", "never mind"]);
	if (!gflags[0x0138]) goto labelFunc0462_01C8;
	UI_add_answer("wisps");
labelFunc0462_01C8:
	gflags[0x0158] = true;
	UI_remove_answer("Salamon's permission");
labelFunc0462_01D3:
	case "adventure" attend labelFunc0462_01E6:
	message("\"Adventure is not Trellek's desire.\"");
	say();
	UI_remove_answer("adventure");
labelFunc0462_01E6:
	case "never mind" attend labelFunc0462_01F9:
	message("She shrugs.");
	say();
	UI_remove_answer("never mind");
labelFunc0462_01F9:
	case "wisps" attend labelFunc0462_0230:
	message("She smiles excitedly.~~\"Your wish is to meet wisps?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0462_021C;
	message("\"An idea how you can be helped by Trellek is had by me. Wisps are contacted by Trellek's whistling. A whistle for you can be made by him, perhaps. Talking with him again should be your next action.\"");
	say();
	gflags[0x0155] = true;
	goto labelFunc0462_0220;
labelFunc0462_021C:
	message("\"Oh.\" She appears depressed again.");
	say();
labelFunc0462_0220:
	UI_remove_answer(["adventure", "never mind", "wisps"]);
labelFunc0462_0230:
	case "bye" attend labelFunc0462_023B:
	goto labelFunc0462_023E;
labelFunc0462_023B:
	goto labelFunc0462_009F;
labelFunc0462_023E:
	endconv;
	message("\"Goodbye is said to you, human.\"*");
	say();
labelFunc0462_0243:
	if (!(event == 0x0000)) goto labelFunc0462_024C;
	abort;
labelFunc0462_024C:
	return;
}


