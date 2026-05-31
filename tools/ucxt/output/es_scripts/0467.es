#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0467 object#(0x467) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0467_018B;
	UI_show_npc_face(0xFF99, 0x0000);
	var0000 = UI_wearing_fellowship();
	if (!var0000) goto labelFunc0467_0045;
	var0001 = UI_get_npc_object(0xFF99);
	message("The man scowls at you. \"Thou wearest the symbol of that most foul of groups, The Fellowship. Prepare to die!\"*");
	say();
	UI_set_alignment(var0001, 0x0002);
	UI_set_schedule_type(var0001, 0x0000);
	abort;
	goto labelFunc0467_006B;
labelFunc0467_0045:
	var0002 = Func0909();
	var0003 = false;
	if (!(!gflags[0x0141])) goto labelFunc0467_0061;
	message("Eyeing you carefully, the man before you takes an aggressive stance.");
	say();
	gflags[0x0141] = true;
	goto labelFunc0467_006B;
labelFunc0467_0061:
	message("\"Good day, ");
	message(var0002);
	message(",\" Thad says coolly.");
	say();
labelFunc0467_006B:
	UI_add_answer(["name", "job", "bye"]);
labelFunc0467_007B:
	converse attend labelFunc0467_0180;
	case "name" attend labelFunc0467_0097:
	message("He stares at you for a moment. \"Thad is my name, ");
	message(var0002);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc0467_0097:
	case "job" attend labelFunc0467_00B0:
	message("\"Job? I have not the time for a job. I am on a quest to rid this land of that which plagues it!\"");
	say();
	UI_add_answer(["quest", "plague"]);
labelFunc0467_00B0:
	case "quest" attend labelFunc0467_00CA:
	message("\"I have devoted mine entire life to this, nothing will get in my way, not even Batlin.\"");
	say();
	UI_remove_answer("quest");
	UI_add_answer("Batlin");
labelFunc0467_00CA:
	case "Batlin" attend labelFunc0467_00EB:
	message("\"He is the leader of the cursed organization, The Fellowship!\"");
	say();
	if (!(!var0003)) goto labelFunc0467_00E4;
	UI_add_answer("The Fellowship");
labelFunc0467_00E4:
	UI_remove_answer("Batlin");
labelFunc0467_00EB:
	case "plague" attend labelFunc0467_0113:
	message("\"Surely thou hast heard of The Fellowship, a most foul and evil organization. It has even infested the lovely forest of Yew!\"");
	say();
	UI_add_answer("Yew");
	if (!(!var0003)) goto labelFunc0467_010C;
	UI_add_answer("The Fellowship");
labelFunc0467_010C:
	UI_remove_answer("plague");
labelFunc0467_0113:
	case "The Fellowship" attend labelFunc0467_015F:
	message("\"I know little about their practices, but I do know they live outside the bounds of moral decency. They have kidnapped my beloved sister, Millie, and have cast a spell of enchantment. Now she lives as they do. I have vowed to remove this wicked spell and will slay the entire organization should that prove necessary!~~ \"Thou, also, hast taken up a similar cause, I expect. Yes?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0467_0138;
	message("\"Excellent.\" He shakes your hand. \"Thou art indeed a worthy warrior, ");
	message(var0002);
	message(".\"");
	say();
	goto labelFunc0467_0154;
labelFunc0467_0138:
	message("\"No?\" He seems genuinely surprised. \"Then perhaps thou wilt consider taking up my quest in thine own manner.\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0467_014F;
	message("\"I expected as much. Thou art truly an honorable warrior.\"");
	say();
	goto labelFunc0467_0154;
labelFunc0467_014F:
	message("\"What manner of scoundrel art thou? Remove thyself from my presence before I decide to smite thee from thy wretched life!\"*");
	say();
	abort;
labelFunc0467_0154:
	var0003 = true;
	UI_remove_answer("The Fellowship");
labelFunc0467_015F:
	case "Yew" attend labelFunc0467_0172:
	message("\"I know the land, but not the people. There is nothing useful I have to tell thee.\" He appears thoughtful for a moment. \"Perhaps I can aid thee a bit. I do know that there are two hunters who sometimes frequent this area. One, a woman, carries a spear. The other is an archer. That is all I can tell thee.\"");
	say();
	UI_remove_answer("Yew");
labelFunc0467_0172:
	case "bye" attend labelFunc0467_017D:
	goto labelFunc0467_0180;
labelFunc0467_017D:
	goto labelFunc0467_007B;
labelFunc0467_0180:
	endconv;
	message("\"May thine endeavors reach fruition, ");
	message(var0002);
	message(".\"*");
	say();
labelFunc0467_018B:
	if (!(event == 0x0000)) goto labelFunc0467_0194;
	abort;
labelFunc0467_0194:
	return;
}


