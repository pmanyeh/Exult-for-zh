#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04A0 object#(0x4A0) ()
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

	if (!(event == 0x0001)) goto labelFunc04A0_01FB;
	UI_show_npc_face(0xFF60, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "the Avatar";
	var0003 = UI_is_pc_female();
	var0004 = false;
	var0005 = Func08F7(0xFF61);
	if (!var0003) goto labelFunc04A0_004D;
	var0006 = "woman";
	var0007 = "she";
	goto labelFunc04A0_0059;
labelFunc04A0_004D:
	var0006 = "man";
	var0007 = "he";
labelFunc04A0_0059:
	if (!gflags[0x01F4]) goto labelFunc04A0_0068;
	var0008 = var0000;
	goto labelFunc04A0_006E;
labelFunc04A0_0068:
	var0008 = var0001;
labelFunc04A0_006E:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0202])) goto labelFunc04A0_0090;
	message("You see a man with a sour expression on his face holding a baby boy. As he sees you, his face brightens.");
	say();
	gflags[0x0202] = true;
	goto labelFunc04A0_009A;
labelFunc04A0_0090:
	message("\"Hello again, ");
	message(var0008);
	message(". I am here as usual, taking care of little Mikhail.\" Effrem grimaces.");
	say();
labelFunc04A0_009A:
	converse attend labelFunc04A0_01E2;
	case "name" attend labelFunc04A0_012C:
	message("\"I am Effrem, ");
	message(var0001);
	message(". I am but a simple resident of Moonglow.");
	say();
	if (!(!gflags[0x01F4])) goto labelFunc04A0_0118;
	message("\"What is thy name?\"");
	say();
	var0009 = Func090B([var0000, var0002, var0001]);
	if (!(var0009 == var0000)) goto labelFunc04A0_00EA;
	message("\"Hello, ");
	message(var0000);
	message(".\" He turns to the baby.~~ \"Say `hello' to ");
	message(var0000);
	message(", Mikhail.\"");
	say();
	gflags[0x01F4] = true;
labelFunc04A0_00EA:
	if (!(var0009 == var0001)) goto labelFunc04A0_010A;
	message("\"Fine, ");
	message(var0001);
	message(", if that is the title by which thou dost wish to be called.\" He looks at the infant. \"The ");
	message(var0006);
	message(" is quite a snob is ");
	message(var0007);
	message(" not, Mikhail?\"");
	say();
labelFunc04A0_010A:
	if (!(var0009 == var0002)) goto labelFunc04A0_0118;
	message("\"Aha, the Avatar, thou sayest. Whatever thou thinkest....\" He turns to the baby.~~\"This poor person here wants to be the Avatar. Too bad there is only one Avatar, eh Mikhail?\"");
	say();
labelFunc04A0_0118:
	UI_add_answer(["Mikhail", "Moonglow"]);
	UI_remove_answer("name");
labelFunc04A0_012C:
	case "job" attend labelFunc04A0_0146:
	message("\"Me? I do not have a job. Not a real one like my wife has. All I do all day is watch over my little Mikhail, here.\" He turns to look at the baby, taking on a patronizing tone. \"Yes, I take care of thee, do I not? Yes, I do. I sure do.\" He kisses the boy and then looks back up at you,\tembarrassed.~~\"Where was I? Oh yes. All I do is take care of the boy. What I should be doing is working, not staying at home. That should be Jillian's job. She belongs here at home, not me.\"");
	say();
	if (!(!var0004)) goto labelFunc04A0_0146;
	UI_add_answer("Jillian");
labelFunc04A0_0146:
	case "Mikhail" attend labelFunc04A0_0159:
	message("\"That is the name of my son. 'Tis a good name, yes?\"");
	say();
	UI_remove_answer("Mikhail");
labelFunc04A0_0159:
	case "wife", "Jillian" attend labelFunc04A0_01A8:
	message("\"My wife? Jillian? She's the scholar. She is a very good one, too. Not that I could not have done well. I could have. Better, in fact. But it is not worth arguing about now. She has her occupation, even if I do not have one. I should have a job, though. Dost thou not agree, ");
	message(var0001);
	message("? This is not what a man ought to be doing. Staying at home raising the children, like this. 'Tis a disgrace!\"~~He begins to stroke the infant's small tuft of hair.*");
	say();
	if (!var0005) goto labelFunc04A0_0197;
	UI_show_npc_face(0xFF61, 0x0000);
	message("\"Now Effrem! Thou knowest perfectly well what we agreed when little Mikhail was born. Thou shouldst be ashamed, talking such nonsense.\"*");
	say();
	UI_remove_npc_face(0xFF61);
	UI_show_npc_face(0xFF60, 0x0000);
	message("He raises his shoulders, making him appear quite sheepish.");
	say();
labelFunc04A0_0197:
	UI_remove_answer(["wife", "Jillian"]);
	var0004 = true;
labelFunc04A0_01A8:
	case "Moonglow" attend labelFunc04A0_01D4:
	message("\"What about Moonglow?\" He shrugs, \"'Tis a fair town, but a little too crowded these days. I hear it was a much nicer place back when Moonglow was separate from the Lycaeum. Much smaller.~~\"This place is too large to really get to know anyone. Not that I have had much of an opportunity, having to stay at home and take care of my son.\" He looks down at the boy, smiles, and tickles the baby's nose.");
	say();
	if (!(!var0005)) goto labelFunc04A0_01BF;
	message("\"This is not a job for a man. My wife should be home with the boy, not me. I should be out earning a living. That is what I ought to be doing!\"");
	say();
labelFunc04A0_01BF:
	if (!(!var0004)) goto labelFunc04A0_01CD;
	UI_add_answer("wife");
labelFunc04A0_01CD:
	UI_remove_answer("Moonglow");
labelFunc04A0_01D4:
	case "bye" attend labelFunc04A0_01DF:
	goto labelFunc04A0_01E2;
labelFunc04A0_01DF:
	goto labelFunc04A0_009A;
labelFunc04A0_01E2:
	endconv;
	if (!UI_is_pc_female()) goto labelFunc04A0_01F1;
	message("\"Leaving so soon? Fine, leave me with the baby. Go on, leave me. Just like my wife!\"*");
	say();
	goto labelFunc04A0_01FB;
labelFunc04A0_01F1:
	message("\"Leaving so soon? Ah, that's all right, ");
	message(var0001);
	message(". I understand, thou hast real man things to do.\"*");
	say();
labelFunc04A0_01FB:
	if (!(event == 0x0000)) goto labelFunc04A0_0209;
	Func092E(0xFF60);
labelFunc04A0_0209:
	return;
}


