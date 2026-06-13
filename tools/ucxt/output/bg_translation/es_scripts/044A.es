#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08DB 0x8DB ();
extern void Func08DC 0x8DC ();
extern void Func0911 0x911 (var var0000);

void Func044A object#(0x44A) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc044A_0009;
	abort;
labelFunc044A_0009:
	UI_show_npc_face(0xFFB6, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0065]) goto labelFunc044A_0036;
	UI_add_answer(["blackrock", "Moongates"]);
labelFunc044A_0036:
	if (!(!gflags[0x00E7])) goto labelFunc044A_0048;
	message("This elderly mage looks older and more senile than when you last saw him.");
	say();
	gflags[0x00E7] = true;
	goto labelFunc044A_005A;
labelFunc044A_0048:
	if (!(!gflags[0x0003])) goto labelFunc044A_0056;
	message("\"Who art thou?\" Rudyom asks. \"Oh -- I remember.\"");
	say();
	goto labelFunc044A_005A;
labelFunc044A_0056:
	message("\"Hello again, Avatar!\" Rudyom says, beaming.");
	say();
labelFunc044A_005A:
	converse attend labelFunc044A_01B6;
	case "name" attend labelFunc044A_0070:
	message("\"That I know. My name is Rudyom.\"");
	say();
	UI_remove_answer("name");
labelFunc044A_0070:
	case "job" attend labelFunc044A_00A1:
	if (!(!gflags[0x0003])) goto labelFunc044A_008D;
	message("\"I am not sure anymore. I was a powerful mage at one time! Now nothing works. Magic is afoul! I suppose I could sell thee some reagents and spells if thou dost want. And mind the carpet -- it does not work!\"");
	say();
	UI_add_answer("carpet");
	goto labelFunc044A_0091;
labelFunc044A_008D:
	message("\"I am a powerful mage! Magic is my milieu! I can sell thee spells or reagents.\"");
	say();
labelFunc044A_0091:
	UI_add_answer(["magic", "spells", "reagents"]);
labelFunc044A_00A1:
	case "magic" attend labelFunc044A_00C2:
	if (!(!gflags[0x0003])) goto labelFunc044A_00B7;
	message("\"I do not understand what is wrong. My magic does not work so well anymore.\"");
	say();
	goto labelFunc044A_00BB;
labelFunc044A_00B7:
	message("\"The ether is flowing freely! Magic is with us once again!\"");
	say();
labelFunc044A_00BB:
	UI_remove_answer("magic");
labelFunc044A_00C2:
	case "carpet" attend labelFunc044A_00DD:
	message("\"The big blue carpet. 'Tis a flying carpet. It does not work like it should.\"");
	say();
	message("Rudyom looks around and scratches his head.");
	say();
	message("\"Funny. It was here a while ago. Oh! I remember now. Some adventurers borrowed my flying carpet a few weeks ago. When they returned they said they had lost it near Serpent's Spine. Somewhere in the vicinity of the Lost River. I suppose\tif thou didst want to go and find it, thou couldst keep it. It did not work very well. Perhaps thou canst make it work. I did not like the color, anyway!\"");
	say();
	UI_remove_answer("carpet");
labelFunc044A_00DD:
	case "spells" attend labelFunc044A_00FF:
	message("\"Dost thou wish to buy some spells?\"");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc044A_00FB;
	Func08DB();
	goto labelFunc044A_00FF;
labelFunc044A_00FB:
	message("\"Oh. Never mind, then.\"");
	say();
labelFunc044A_00FF:
	case "reagents" attend labelFunc044A_0121:
	message("\"Dost thou wish to buy some reagents?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc044A_011D;
	Func08DC();
	goto labelFunc044A_0121;
labelFunc044A_011D:
	message("\"Oh. Never mind, then.\"");
	say();
labelFunc044A_0121:
	case "blackrock" attend labelFunc044A_013B:
	message("\"Do not mention that foul mineral's name to me! It hast caused me much frustration! Before my mind lost me I was conducting experiments with the infernal material. But now I cannot for the life of me remember what it was I was trying to do.\"");
	say();
	UI_add_answer("experiments");
	UI_remove_answer("blackrock");
labelFunc044A_013B:
	case "Moongates" attend labelFunc044A_015C:
	if (!(!gflags[0x0004])) goto labelFunc044A_0151;
	message("\"They are a nuisance, are they not? I do believe that blackrock is the solution to the problem. I wish my mind had not lost me, or I could continue my work...\"");
	say();
	goto labelFunc044A_0155;
labelFunc044A_0151:
	message("\"I understand they are gone for good. Do not blame thyself, Avatar. The disaster will only pave the way for a new era in experimentation and discovery. I hope.\"");
	say();
labelFunc044A_0155:
	UI_remove_answer("Moongates");
labelFunc044A_015C:
	case "experiments" attend labelFunc044A_017C:
	message("\"I wrote them all down in my notebook, which is somewhere around here. Thou art welcome to look at it. But stay away from that damned transmuter -- 'tis dangerous!\"");
	say();
	UI_add_answer(["transmuter", "notebook"]);
	UI_remove_answer("experiments");
labelFunc044A_017C:
	case "notebook" attend labelFunc044A_018F:
	message("\"I used it to record mine experiments with blackrock and the blackrock transmuter.\"");
	say();
	UI_remove_answer("notebook");
labelFunc044A_018F:
	case "transmuter" attend labelFunc044A_01A8:
	message("\"'Tis that wand-like thing. It was supposed to magnetize and magically transmute blackrock, but it doth not work correctly. Try pointing it at a piece of blackrock and thou wilt see what I mean. But do not stand too close! Thou art welcome to take it if thou dost want a piece of garbage!\"");
	say();
	Func0911(0x0032);
	UI_remove_answer("transmuter");
labelFunc044A_01A8:
	case "bye" attend labelFunc044A_01B3:
	goto labelFunc044A_01B6;
labelFunc044A_01B3:
	goto labelFunc044A_005A;
labelFunc044A_01B6:
	endconv;
	if (!(!gflags[0x0003])) goto labelFunc044A_01C5;
	message("\"Leaving so soon? Deary me. I hope I remember thee if thou dost come back.\"*");
	say();
	goto labelFunc044A_01C9;
labelFunc044A_01C5:
	message("\"Goodbye, Avatar.\"*");
	say();
labelFunc044A_01C9:
	return;
}


