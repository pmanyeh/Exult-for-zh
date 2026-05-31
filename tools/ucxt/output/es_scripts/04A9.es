#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func04A9 object#(0x4A9) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04A9_019A;
	UI_show_npc_face(0xFF57, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0222])) goto labelFunc04A9_0041;
	message("You see a simple peasant woman. Her face is etched with sorrow.");
	say();
	gflags[0x0222] = true;
	goto labelFunc04A9_004B;
labelFunc04A9_0041:
	message("\"Good day, ");
	message(var0000);
	message(",\" says Alina.");
	say();
labelFunc04A9_004B:
	converse attend labelFunc04A9_018F;
	case "name" attend labelFunc04A9_0061:
	message("\"I am Alina.\"");
	say();
	UI_remove_answer("name");
labelFunc04A9_0061:
	case "job" attend labelFunc04A9_0080:
	message("\"I have none, ");
	message(var0000);
	message(", save for being the mother of my child. I am waiting for mine husband, Weston, to return from Britain.\"");
	say();
	UI_add_answer(["child", "Weston"]);
labelFunc04A9_0080:
	case "child" attend labelFunc04A9_0093:
	message("\"Cassie is my daughter. Just a wee babe, she is mine only joy.\"");
	say();
	UI_remove_answer("child");
labelFunc04A9_0093:
	case "Weston" attend labelFunc04A9_00C0:
	if (!gflags[0x00CC]) goto labelFunc04A9_00AE;
	message("\"Good news, ");
	message(var0000);
	message("! Mine husband was pardoned by Lord British. He even provided Weston with short-term employment so that he may return to me with money enough in his pockets to feed us for some time!~~\"Excellent news, no?\"");
	say();
	goto labelFunc04A9_00B9;
labelFunc04A9_00AE:
	message("\"Mine husband is imprisoned in Britain for stealing fruit from the Royal Orchards.\"");
	say();
	UI_add_answer("stealing");
labelFunc04A9_00B9:
	UI_remove_answer("Weston");
labelFunc04A9_00C0:
	case "stealing" attend labelFunc04A9_00E0:
	message("\"Mine husband is no thief, ");
	message(var0000);
	message(". He went there to buy fruit for the child and me so that we would have enough to eat. He has been wrongfully accused, I am certain of it!\"");
	say();
	UI_add_answer("eat");
	UI_remove_answer("stealing");
labelFunc04A9_00E0:
	case "eat" attend labelFunc04A9_0100:
	message("\"We are very poor. My baby and I are presently living in the Fellowship shelter because we have nowhere else to go.\"");
	say();
	UI_add_answer(["Fellowship", "shelter"]);
	UI_remove_answer("eat");
labelFunc04A9_0100:
	case "Fellowship" attend labelFunc04A9_012E:
	if (!(!var0001)) goto labelFunc04A9_0123;
	message("\"It was a member of The Fellowship that has accused mine husband. Now they wish for me to join them.\"");
	say();
	UI_add_answer(["join them", "accused"]);
	goto labelFunc04A9_0127;
labelFunc04A9_0123:
	message("\"Mine husband is innocent, I know it!. He intended to buy the fruit. Why must I join thy society in order for me to be taken at my word?\"");
	say();
labelFunc04A9_0127:
	UI_remove_answer("Fellowship");
labelFunc04A9_012E:
	case "shelter" attend labelFunc04A9_0148:
	message("\"We are fortunate that we are able to live by The Fellowship's good graces, but I do not know how long we will be allowed to stay.\"");
	say();
	UI_add_answer("allowed");
	UI_remove_answer("shelter");
labelFunc04A9_0148:
	case "join them" attend labelFunc04A9_015B:
	message("\"I cannot join The Fellowship without feeling that I am betraying mine husband. How could I become one of those who have falsely accused him? Yet, if I do not, they will not allow my child and me to live here.\"~~She sobs and covers her face with her hands. \"It is so unfair. I must choose between starvation and betrayal. If only Weston were here. I do not know what to do!\"");
	say();
	UI_remove_answer("join them");
labelFunc04A9_015B:
	case "accused" attend labelFunc04A9_016E:
	message("\"They say if I join they will attempt to free mine husband. But it was they who unjustly accused him. I cannot trust them, but I fear I may have no choice.\"");
	say();
	UI_remove_answer("accused");
labelFunc04A9_016E:
	case "allowed" attend labelFunc04A9_0181:
	message("\"They tell me the shelter is only for members of The Fellowship. Unless I join soon, I shall be asked to leave. And I have nowhere else to go.\"");
	say();
	UI_remove_answer("allowed");
labelFunc04A9_0181:
	case "bye" attend labelFunc04A9_018C:
	goto labelFunc04A9_018F;
labelFunc04A9_018C:
	goto labelFunc04A9_004B;
labelFunc04A9_018F:
	endconv;
	message("\"Pleasant day to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04A9_019A:
	if (!(event == 0x0000)) goto labelFunc04A9_01A8;
	Func092E(0xFF57);
labelFunc04A9_01A8:
	return;
}


