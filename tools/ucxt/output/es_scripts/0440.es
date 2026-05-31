#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern void Func092E 0x92E (var var0000);

void Func0440 object#(0x440) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0440_0127;
	UI_show_npc_face(0xFFC0, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0099]) goto labelFunc0440_0035;
	UI_add_answer("Nystul");
labelFunc0440_0035:
	if (!(!gflags[0x00C1])) goto labelFunc0440_0047;
	message("You see your former companion and friend, Geoffrey, Captain of the Guard.");
	say();
	gflags[0x00C1] = true;
	goto labelFunc0440_0051;
labelFunc0440_0047:
	message("\"Yes, ");
	message(var0000);
	message("?\" Geoffrey asks.");
	say();
labelFunc0440_0051:
	converse attend labelFunc0440_0122;
	case "name" attend labelFunc0440_0067:
	message("Geoffrey chuckles. \"Art thou joking? I am Geoffrey!\"");
	say();
	UI_remove_answer("name");
labelFunc0440_0067:
	case "job" attend labelFunc0440_007A:
	message("\"These days I remain in my position as Captain of the Guard. I am Lord British's personal bodyguard, and I am in charge of security at the castle. I do not have much time or use for adventuring now.\"");
	say();
	UI_add_answer("adventuring");
labelFunc0440_007A:
	case "adventuring" attend labelFunc0440_009A:
	message("\"I have aged a bit over the last 200 years. I am afraid I shall not be joining thee this time. But my thoughts are with thee, and if I may offer some assistance, I shall be glad to do so.\"");
	say();
	UI_remove_answer("adventuring");
	UI_add_answer(["aged", "assistance"]);
labelFunc0440_009A:
	case "aged" attend labelFunc0440_00AD:
	message("\"Yes, it has been a long time by Britannian reckoning since I have seen mine homeland. When thou hast finished with thy business, do come back and tell me news of what is happening in our homeworld.\"");
	say();
	UI_remove_answer("aged");
labelFunc0440_00AD:
	case "assistance" attend labelFunc0440_00CD:
	message("\"Mine advice to thee is to build up thine experience and skills as soon as possible. Thou hast been away from Britannia for a long time. Thou mightest not be in the same shape thou wert in at the end of thy last adventure here.\"");
	say();
	UI_remove_answer("assistance");
	UI_add_answer(["experience", "shape"]);
labelFunc0440_00CD:
	case "shape" attend labelFunc0440_00E0:
	message("\"It is apparently another difference in our two worlds. Whenever thou shalt return it is as if thy physical body has arrived here for the first time. It is the reason why many of\tthine own companions have chosen to stay here even though they have aged in Britannian time.\"");
	say();
	UI_remove_answer("shape");
labelFunc0440_00E0:
	case "experience" attend labelFunc0440_00F3:
	message("\"Go and search for monsters. Vanquish them. Take their gold! Gain experience! Use that experience when thou dost visit trainers. Increase thy strength, dexterity, and intelligence, as well as thy combat skill and ability to perform magic. Thou wilt be lost without this necessary evolution of experience!\"");
	say();
	UI_remove_answer("experience");
labelFunc0440_00F3:
	case "Nystul" attend labelFunc0440_0114:
	if (!(!gflags[0x0003])) goto labelFunc0440_0109;
	message("\"He is quite looney. If thou dost ask me, I believe all the mages in the land are afflicted. Take a look and find out for thyself.\"");
	say();
	goto labelFunc0440_010D;
labelFunc0440_0109:
	message("\"He is much better now!\"");
	say();
labelFunc0440_010D:
	UI_remove_answer("Nystul");
labelFunc0440_0114:
	case "bye" attend labelFunc0440_011F:
	goto labelFunc0440_0122;
labelFunc0440_011F:
	goto labelFunc0440_0051;
labelFunc0440_0122:
	endconv;
	message("\"Have courage. Have faith. Be strong. Be wise.\"*");
	say();
labelFunc0440_0127:
	if (!(event == 0x0000)) goto labelFunc0440_0135;
	Func092E(0xFFC0);
labelFunc0440_0135:
	return;
}


