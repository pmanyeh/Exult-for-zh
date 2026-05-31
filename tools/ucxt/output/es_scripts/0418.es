#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func08C5 0x8C5 ();
extern void Func08C6 0x8C6 ();

void Func0418 object#(0x418) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0418_0009;
	abort;
labelFunc0418_0009:
	UI_show_npc_face(0xFFE8, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0099])) goto labelFunc0418_0035;
	message("You see your old friend Nystul, now a decrepit old man in mage's robes. He seems lost in thought, far away.");
	say();
	gflags[0x0099] = true;
	goto labelFunc0418_0047;
labelFunc0418_0035:
	if (!(!gflags[0x0003])) goto labelFunc0418_0043;
	message("\"Do I know thee?\" Nystul asks.");
	say();
	goto labelFunc0418_0047;
labelFunc0418_0043:
	message("\"Yes, Avatar?\" Nystul asks.");
	say();
labelFunc0418_0047:
	converse attend labelFunc0418_0165;
	case "name" attend labelFunc0418_006B:
	if (!(!gflags[0x0003])) goto labelFunc0418_0060;
	message("The mage looks confused a moment. \"My name is Nystul? Yes, that is it!\"");
	say();
	goto labelFunc0418_0064;
labelFunc0418_0060:
	message("\"Why, 'tis Nystul!\"");
	say();
labelFunc0418_0064:
	UI_remove_answer("name");
labelFunc0418_006B:
	case "job" attend labelFunc0418_0092:
	if (!(!gflags[0x0003])) goto labelFunc0418_0081;
	message("\"Well, I used to perform quite a bit of magic,\" he says apologetically. \"At least... I -think- I used to do so. There is a man named Lord British, I think. I work for him.\"");
	say();
	goto labelFunc0418_0085;
labelFunc0418_0081:
	message("\"I am Lord British's personal mage!\"");
	say();
labelFunc0418_0085:
	UI_add_answer(["magic", "Lord British"]);
labelFunc0418_0092:
	case "magic" attend labelFunc0418_00F2:
	if (!(!gflags[0x0003])) goto labelFunc0418_00DA;
	message("\"Sometimes the magic works, sometimes it doth not.\" He waves his hand, and drops his wand. \"Oops!\" he cries, as he bends to pick it up.");
	say();
	var0000 = Func08F7(0xFFFE);
	if (!var0000) goto labelFunc0418_00D7;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Art thou sure this man is not really the jester?\"");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFE8, 0x0000);
	message("\"Anyway, as I was saying, uhm, what was I saying? Oh yes. Magic. I can still sell thee some spells or reagents if thou wouldst like.\"");
	say();
labelFunc0418_00D7:
	goto labelFunc0418_00DE;
labelFunc0418_00DA:
	message("\"The magic is much better now. My spells all work very nicely. I thank thee, Avatar, for clearing the ether. Interested in any spells or reagents?\"");
	say();
labelFunc0418_00DE:
	UI_remove_answer("magic");
	UI_add_answer(["spells", "reagents"]);
labelFunc0418_00F2:
	case "spells" attend labelFunc0418_0114:
	message("\"Dost thou wish to buy some spells?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0418_0110;
	Func08C5();
	goto labelFunc0418_0114;
labelFunc0418_0110:
	message("\"Oh. Never mind, then.\"");
	say();
labelFunc0418_0114:
	case "reagents" attend labelFunc0418_0136:
	message("\"Dost thou wish to buy some reagents?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0418_0132;
	Func08C6();
	goto labelFunc0418_0136;
labelFunc0418_0132:
	message("\"Oh. Never mind, then.\"");
	say();
labelFunc0418_0136:
	case "Lord British" attend labelFunc0418_0157:
	if (!(!gflags[0x0003])) goto labelFunc0418_014C;
	message("\"Lord who? Dost thou mean that old man who sometimes sits on the throne?\"");
	say();
	goto labelFunc0418_0150;
labelFunc0418_014C:
	message("\"He is the greatest ruler this land has ever known and I am proud to serve him.\"");
	say();
labelFunc0418_0150:
	UI_remove_answer("Lord British");
labelFunc0418_0157:
	case "bye" attend labelFunc0418_0162:
	goto labelFunc0418_0165;
labelFunc0418_0162:
	goto labelFunc0418_0047;
labelFunc0418_0165:
	endconv;
	if (!(!gflags[0x0003])) goto labelFunc0418_0174;
	message("\"Are we going somewhere?\"*");
	say();
	goto labelFunc0418_0178;
labelFunc0418_0174:
	message("\"Goodbye, Avatar. Do come see us again soon.\"*");
	say();
labelFunc0418_0178:
	return;
}


