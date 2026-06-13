#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04C8 object#(0x4C8) ()
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

	if (!(event == 0x0001)) goto labelFunc04C8_031B;
	UI_show_npc_face(0xFF38, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0271])) goto labelFunc04C8_0044;
	message("The woman smiles at you compassionately.");
	say();
	gflags[0x0271] = true;
	goto labelFunc04C8_004E;
labelFunc04C8_0044:
	message("Tory smiles and reaches out to you. \"Hello, ");
	message(var0000);
	message(". I sense thou art troubled.\"");
	say();
labelFunc04C8_004E:
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C8_0060;
	UI_add_answer("statue");
labelFunc04C8_0060:
	if (!(gflags[0x0277] && (!gflags[0x0278]))) goto labelFunc04C8_0072;
	UI_add_answer("Riky");
labelFunc04C8_0072:
	converse attend labelFunc04C8_0316;
	case "name" attend labelFunc04C8_00A0:
	message("\"I am Lady Tory, ");
	message(var0001);
	message(".\"");
	say();
	if (!(!gflags[0x0277])) goto labelFunc04C8_0099;
	message("\"Mother of Riky,\" she says, sobbing.");
	say();
	UI_add_answer("Riky");
labelFunc04C8_0099:
	UI_remove_answer("name");
labelFunc04C8_00A0:
	case "job" attend labelFunc04C8_00B9:
	message("\"My job is to provide counsel for Lord John-Paul and anyone else in need of guidance here at the Hold.\"");
	say();
	UI_add_answer(["Lord John-Paul", "Hold"]);
labelFunc04C8_00B9:
	case "Riky" attend labelFunc04C8_0170:
	if (!gflags[0x0277]) goto labelFunc04C8_0140;
	message("\"Hast thou found my child?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04C8_0139;
	var0004 = Func0931(0xFE9B, 0x0001, 0x02DA, 0xFE99, 0x0002);
	if (!var0004) goto labelFunc04C8_0109;
	Func0911(0x0064);
	message("\"I cannot begin to express my gratitude, ");
	message(var0001);
	message(". Thank thee ever so much!\"~She begins sobbing for joy. \"Pl-please set him back gently in the cradle.\"");
	say();
	gflags[0x0278] = true;
	goto labelFunc04C8_0136;
labelFunc04C8_0109:
	var0005 = Func0931(0xFE9B, 0x0001, 0x02DA, 0xFE99, 0xFE99);
	if (!var0005) goto labelFunc04C8_0131;
	message("\"Why, that's not my little Riky, ");
	message(var0001);
	message(". Thou hast someone else's child. Oh, where could my boy have been taken?\" she says, crying.");
	say();
	goto labelFunc04C8_0136;
labelFunc04C8_0131:
	message("\"But, I see no child with thee. Thine humor is quite dark. Please return when thou art carrying my baby boy!\"*");
	say();
	abort;
labelFunc04C8_0136:
	goto labelFunc04C8_013D;
labelFunc04C8_0139:
	message("\"Please, I beseech thee, continue thine hunt!\"");
	say();
labelFunc04C8_013D:
	goto labelFunc04C8_0169;
labelFunc04C8_0140:
	gflags[0x0277] = true;
	message("\"My poor baby boy. He -- he was taken one night by cruel harpies who wanted a child for their own. I -- I know not where they have taken him, but I have heard some of the knights mention that a group of the vile women-birds cluster around the shrine of Honor. But, they have not yet been able to defeat them.\" She sniffs. \"But thou ");
	message(var0001);
	message(", thou wilt help me get my child back. Oh, please, wilt thou?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04C8_0161;
	message("\"I cannot thank thee enough for helping me!\" She appears to have cheered up greatly.");
	say();
	goto labelFunc04C8_0169;
labelFunc04C8_0161:
	message("\"Thou art a no more than a coward. Get thee gone, coward!\"");
	say();
	gflags[0x0278] = true;
labelFunc04C8_0169:
	UI_remove_answer("Riky");
labelFunc04C8_0170:
	case "statue" attend labelFunc04C8_0183:
	message("\"Hmm,\" she appears thoughtful, \"when the incident was brought up to everyone here at the hold, I remember Sir Jordan becoming a bit nervous. Perhaps thou shouldst speak with him.\"");
	say();
	UI_remove_answer("statue");
labelFunc04C8_0183:
	case "Hold" attend labelFunc04C8_01CF:
	message("\"I sense that thou wishest to know about the residents here at Serpent's Hold. Is this correct?\"");
	say();
	var0007 = Func090A();
	if (!(!var0007)) goto labelFunc04C8_01A3;
	message("\"Very well. Come to me if thou changest thy mind.\"");
	say();
	goto labelFunc04C8_01C8;
labelFunc04C8_01A3:
	message("\"As counselor for the Hold, I can tell thee about many people. Hast thou met the healer or the provisioner? And, as a warrior thyself, thou mayest wish to visit the trainer and the armourer.\"");
	say();
	if (!(!var0002)) goto labelFunc04C8_01B5;
	UI_add_answer("Lord John-Paul");
labelFunc04C8_01B5:
	UI_add_answer(["healer", "armourer", "trainer", "provisioner"]);
labelFunc04C8_01C8:
	UI_remove_answer("Hold");
labelFunc04C8_01CF:
	case "Lord John-Paul" attend labelFunc04C8_01ED:
	message("\"He is an extraordinary leader. Everyone looks up to him. Thou hast only to ask his captain.\"");
	say();
	UI_remove_answer("Lord John-Paul");
	UI_add_answer("captain");
	var0002 = true;
labelFunc04C8_01ED:
	case "healer" attend labelFunc04C8_0200:
	message("\"Lady Leigh is very skilled as a healer. I have yet to see her lose a patient.\"");
	say();
	UI_remove_answer("healer");
labelFunc04C8_0200:
	case "armourer" attend labelFunc04C8_021A:
	message("\"Hmmm. Well, Sir Richter has changed much recently -- ever since he joined The Fellowship. He seems a little less compassionate.\"");
	say();
	UI_add_answer("Fellowship");
	UI_remove_answer("armourer");
labelFunc04C8_021A:
	case "tavernkeeper" attend labelFunc04C8_022D:
	message("\"Sir Denton is the most astute man I have ever met. He is the only one I cannot sense. And I have never seen him remove his armour....\" She shrugs.");
	say();
	UI_remove_answer("tavernkeeper");
labelFunc04C8_022D:
	case "trainer" attend labelFunc04C8_0247:
	message("\"I know Menion least of all. He is very quiet, spending most of his spare time weaponsmithing. The tavernkeeper may know more about him.\"");
	say();
	UI_add_answer("tavernkeeper");
	UI_remove_answer("trainer");
labelFunc04C8_0247:
	case "provisioner" attend labelFunc04C8_0261:
	message("\"Her name is Lady Jehanne. She is the Lady of Sir Pendaran,\" she says with a gleam in her eye.");
	say();
	UI_add_answer("Sir Pendaran");
	UI_remove_answer("provisioner");
labelFunc04C8_0261:
	case "captain" attend labelFunc04C8_0281:
	message("\"The Captain of the guard, Sir Horffe, is a gargoyle. He was found by two humans who raised him to be a valiant knight. He is a very dedicated warrior, and rarely leaves Lord John-Paul's side.\"");
	say();
	if (!gflags[0x026E]) goto labelFunc04C8_027A;
	UI_add_answer("Gargish accent");
labelFunc04C8_027A:
	UI_remove_answer("captain");
labelFunc04C8_0281:
	case "Gargish accent" attend labelFunc04C8_0294:
	message("\"Despite his human upbringing, Horffe has struggled to maintain his Gargish identity. By speaking in the same manner as his brethren, he feels he can better hold on to his background.\"");
	say();
	UI_remove_answer("Gargish accent");
labelFunc04C8_0294:
	case "Sir Pendaran" attend labelFunc04C8_02A7:
	message("\"He is a brave and hearty fighter, and,\" she smiles, \"he is also a bit on the attractive side.\"");
	say();
	UI_remove_answer("Sir Pendaran");
labelFunc04C8_02A7:
	case "Fellowship" attend labelFunc04C8_02C1:
	message("\"The Fellowship does not have a branch here, but two of our knights are members: Sir Richter and Sir Pendaran. I know they are interested in having Sir Jordan join as well.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer("Sir Jordan");
labelFunc04C8_02C1:
	case "Sir Jordan" attend labelFunc04C8_0308:
	message("\"He is a wonder. Despite his blindness, he fights with amazing deftness. In fact, he also enjoys toying with mechanical items, and his loss of eyesight does not seem to affect that, either.~~\"However, I sense in him a very recent change, remarkably like that in Sir Richter. He would be an interesting one to speak with. Thou mayest find him at Iolo's South.\"*");
	say();
	var0008 = Func08F7(0xFFFF);
	if (!var0008) goto labelFunc04C8_0301;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo smiles proudly.~~\"My shop has, er, grown a bit since thou wert here last, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF38, 0x0000);
labelFunc04C8_0301:
	UI_remove_answer("Sir Jordan");
labelFunc04C8_0308:
	case "bye" attend labelFunc04C8_0313:
	goto labelFunc04C8_0316;
labelFunc04C8_0313:
	goto labelFunc04C8_0072;
labelFunc04C8_0316:
	endconv;
	message("\"I sense thou hast pressing engagements elsewhere. I bid thee farewell.\"*");
	say();
labelFunc04C8_031B:
	if (!(event == 0x0000)) goto labelFunc04C8_0329;
	Func092E(0xFF38);
labelFunc04C8_0329:
	return;
}


