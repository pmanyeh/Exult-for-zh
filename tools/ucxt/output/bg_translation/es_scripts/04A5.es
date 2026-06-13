#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func04A5 object#(0x4A5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04A5_0250;
	UI_show_npc_face(0xFF5B, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0207]) goto labelFunc04A5_0043;
	message("\"I think thou dost ask too many questions.\"");
	say();
	var0002 = true;
	goto labelFunc04A5_004B;
labelFunc04A5_0043:
	message("You see a fox standing on his hind legs, staring directly at you.");
	say();
	gflags[0x0207] = true;
labelFunc04A5_004B:
	converse attend labelFunc04A5_024B;
	case "name" attend labelFunc04A5_0079:
	message("\"My name is Frank, devout follower of honesty.\" He makes a slight bow.");
	say();
	UI_remove_answer("name");
	if (!(!var0002)) goto labelFunc04A5_0079;
	message("\"And who wouldst thou be?\"");
	say();
	UI_add_answer(["won't tell", var0000]);
labelFunc04A5_0079:
	case var0000 attend labelFunc04A5_0092:
	message("\"It is good that thou didst tell me. One should always be honest in one's dealings with others. By the by, thy voice crackles too much.\"");
	say();
	UI_remove_answer(["won't tell", var0000]);
labelFunc04A5_0092:
	case "won't tell" attend labelFunc04A5_00AB:
	message("\"I am sorry to see that thou art not trusting enough to reveal thy name.\" He shrugs. \"By the by, thy voice crackles too much.\"");
	say();
	UI_remove_answer(["won't tell", var0000]);
labelFunc04A5_00AB:
	case "job" attend labelFunc04A5_00C4:
	message("\"I,\" he says, \"am on a quest. A quest for honesty.\" He sniffs the air, and then turns to you.~~ \"By the by, thou mightest have more friends if thou didst bathe a little more often.\"");
	say();
	UI_add_answer(["bathed", "friends"]);
labelFunc04A5_00C4:
	case "bathed" attend labelFunc04A5_00D7:
	message("\"Yes, as in `take a bath.' I must inform thee that thou dost truly stink!\"");
	say();
	UI_remove_answer("bathed");
labelFunc04A5_00D7:
	case "friends" attend labelFunc04A5_0123:
	message("\"Speaking of thy friends, I have heard that thy companion, Dupre, is a drunken sot.\"");
	say();
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc04A5_0111;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Hey, I don't think --\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF5B, 0x0000);
labelFunc04A5_0111:
	message("\"Yes, from what I have been told, that Dupre has no will when confronted by a tankard of, well, anything.~~\"As a matter of fact, thou hast fairly poor taste in companions overall.\"");
	say();
	UI_add_answer("companions");
	UI_remove_answer("friends");
labelFunc04A5_0123:
	case "companions" attend labelFunc04A5_0175:
	message("\"I am glad thou didst ask, ");
	message(var0001);
	message(". Thy friend, Iolo, charges far too much for his bows. Perhaps thou couldst have a chat with him.\"");
	say();
	var0004 = Func08F7(0xFFFF);
	if (!var0004) goto labelFunc04A5_0163;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Too much? What dost thou mean, too --\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF5B, 0x0000);
labelFunc04A5_0163:
	message("\"His bows and crossbows just aren't of the quality that is worth the kind of gold he charges.\"~~He takes a step back.~~\"Gads! Thy breath could gag an ox. Thou shouldst consider taking better care of thy teeth, or thy fellows will leave thee.\"");
	say();
	UI_add_answer("teeth");
	UI_remove_answer("companions");
labelFunc04A5_0175:
	case "teeth" attend labelFunc04A5_01D2:
	message("\"That is the reason for thine offensive mouth odor. I have not seen anything that yellow since the time thy fellow Shamino ran away from a battle in fear.\"");
	say();
	var0005 = Func08F7(0xFFFD);
	if (!var0005) goto labelFunc04A5_01C0;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Thou must be mad!\" Shamino turns to you. \"This rogue needs to be taught a lesson.\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF5B, 0x0000);
	message("\"And thy friend, Shamino, ");
	message(var0000);
	message(", has quite a bellicose temper.\"");
	say();
	UI_add_answer("bellicose");
labelFunc04A5_01C0:
	message("\"And,\" he pauses, peering very closely at your face, \"I never noticed how large thy nose is. 'Tis amazing thou canst find enough air to breathe.\"");
	say();
	UI_add_answer("nose");
	UI_remove_answer("teeth");
labelFunc04A5_01D2:
	case "bellicose" attend labelFunc04A5_01EC:
	message("\"Yes, bellicose, warlike, angry. If thou dost not know that, I believe thou needest to improve thy vocabulary. Thou art too unschooled.\"");
	say();
	UI_remove_answer("bellicose");
	UI_add_answer("unschooled");
labelFunc04A5_01EC:
	case "unschooled" attend labelFunc04A5_022A:
	message("\"Trust me, ");
	message(var0001);
	message(", thou art too ignorant to argue with me.\"");
	say();
	if (!var0003) goto labelFunc04A5_0223;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Oh, this is too much!\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF5B, 0x0000);
labelFunc04A5_0223:
	UI_remove_answer("unschooled");
labelFunc04A5_022A:
	case "nose" attend labelFunc04A5_023D:
	message("\"Truly quite large, and not in the least bit attractive.\"");
	say();
	UI_remove_answer("nose");
labelFunc04A5_023D:
	case "bye" attend labelFunc04A5_0248:
	goto labelFunc04A5_024B;
labelFunc04A5_0248:
	goto labelFunc04A5_004B;
labelFunc04A5_024B:
	endconv;
	message("\"Thou hast the manners of a pig. 'Tis not polite to break conversation so abruptly.\"*");
	say();
labelFunc04A5_0250:
	if (!(event == 0x0000)) goto labelFunc04A5_0259;
	abort;
labelFunc04A5_0259:
	return;
}


