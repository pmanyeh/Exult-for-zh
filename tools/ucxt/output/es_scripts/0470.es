#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func0911 0x911 (var var0000);

void Func0470 object#(0x470) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0470_01E1;
	UI_show_npc_face(0xFF90, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = "Nystul";
	var0004 = "Geoffrey";
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x014A])) goto labelFunc0470_0050;
	message("You see a rough-looking man with a bitter expression on his face.");
	say();
	gflags[0x014A] = true;
	goto labelFunc0470_0054;
labelFunc0470_0050:
	message("D'Rel scowls at you. \"What in the blazes do ye want?\"");
	say();
labelFunc0470_0054:
	converse attend labelFunc0470_01DC;
	case "name" attend labelFunc0470_0077:
	message("\"What do ye care about the name of a wretch?\"");
	say();
	UI_add_answer(["wretch", "care"]);
	UI_remove_answer("name");
labelFunc0470_0077:
	case "wretch" attend labelFunc0470_0097:
	message("\"They've put me in here to rot, they have!\"");
	say();
	UI_remove_answer("wretch");
	UI_add_answer(["they", "rot"]);
labelFunc0470_0097:
	case "they" attend labelFunc0470_00C5:
	message("\"The Britannian Tax Council done it. They and the two here -- Sir Jeff and Goth.\"");
	say();
	UI_remove_answer("they");
	UI_add_answer(["Sir Jeff", "Goth"]);
	if (!(!var0002)) goto labelFunc0470_00C5;
	UI_add_answer("Britannian Tax Council");
labelFunc0470_00C5:
	case "rot" attend labelFunc0470_00D8:
	message("\"They told me I'd be here for the rest of my life. I have no reason to doubt them either!\"");
	say();
	UI_remove_answer("rot");
labelFunc0470_00D8:
	case "Sir Jeff" attend labelFunc0470_00EB:
	message("\"That stuffed cock believes he's above everyone in Britannia. Just because he presides over the High Court he thinks he can pass judgement over any and everyone.\"");
	say();
	UI_remove_answer("Sir Jeff");
labelFunc0470_00EB:
	case "Goth" attend labelFunc0470_00FE:
	message("\"That thieving scoundrel belongs in here more than I do! Don't trust him if ye've gotta choice.\"");
	say();
	UI_remove_answer("Goth");
labelFunc0470_00FE:
	case "Britannian Tax Council" attend labelFunc0470_0115:
	message("\"Thieves, the whole lot of 'em! Tryin' to take a person's hard-earned gold. Mayhaps they wouldn't need to take all of our money if they would go out and earn their own!\"");
	say();
	var0002 = true;
	UI_remove_answer("Britannian Tax Council");
labelFunc0470_0115:
	case "care" attend labelFunc0470_0157:
	message("\"Ye care, do ye? All right, then. I'll tell ye my name if ye tell me thine, deal?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0470_014C;
	var0006 = Func090B([var0000, var0003, var0004]);
	message("\"");
	message(var0006);
	message(", eh. Very well, a deal's a deal. I'm D'Rel.\"");
	say();
	goto labelFunc0470_0150;
labelFunc0470_014C:
	message("\"I thought as much.\"");
	say();
labelFunc0470_0150:
	UI_remove_answer("care");
labelFunc0470_0157:
	case "job" attend labelFunc0470_0170:
	message("\"None now. But 'til I made this mine home, I was a sailor, a... privateer, out of Buccaneer's Den.\"");
	say();
	UI_add_answer(["thine home", "Buccaneer's Den"]);
labelFunc0470_0170:
	case "thine home" attend labelFunc0470_0191:
	message("\"Well, actually I am in here for not paying my taxes. After all, I... earned the money, why should I give it to the Britannian Tax Council?\"");
	say();
	UI_remove_answer("thine home");
	if (!(!var0002)) goto labelFunc0470_0191;
	UI_add_answer("Britannian Tax Council");
labelFunc0470_0191:
	case "Buccaneer's Den" attend labelFunc0470_01B1:
	message("\"Thou hast heard of Buccaneer's Den, hast thou not? 'Tis the island due east of the mainland. Home of the sort of men who walk with peg-legs, have hooks for hands, and carry parrots on their shoulders! Har! Har!\"");
	say();
	UI_remove_answer("Buccaneer's Den");
	if (!gflags[0x0043]) goto labelFunc0470_01B1;
	UI_add_answer("Hook");
labelFunc0470_01B1:
	case "Hook" attend labelFunc0470_01CE:
	message("\"Yeah, I know Hook. Lookin' for him, are ye? He be from Buccaneer's Den. He usually travels with some gargoyle named Forskis or something like that. If ye see him, give him my... hello, for me.\" He gestures to his clenched fist.");
	say();
	UI_remove_answer("Hook");
	gflags[0x0135] = true;
	Func0911(0x000A);
labelFunc0470_01CE:
	case "bye" attend labelFunc0470_01D9:
	goto labelFunc0470_01DC;
labelFunc0470_01D9:
	goto labelFunc0470_0054;
labelFunc0470_01DC:
	endconv;
	message("\"Aye, get thy face from my sight!\"*");
	say();
labelFunc0470_01E1:
	if (!(event == 0x0000)) goto labelFunc0470_01EA;
	abort;
labelFunc0470_01EA:
	return;
}


