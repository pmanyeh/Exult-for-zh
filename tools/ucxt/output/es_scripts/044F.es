#game "blackgate"
// externs
extern void Func0951 0x951 ();
extern void Func092E 0x92E (var var0000);

void Func044F object#(0x44F) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc044F_012E;
	UI_show_npc_face(0xFFB1, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFB1));
	if (!gflags[0x00E4]) goto labelFunc044F_0043;
	if (!gflags[0x00F1]) goto labelFunc044F_0043;
	UI_add_answer("De Maria");
labelFunc044F_0043:
	if (!(!gflags[0x00EC])) goto labelFunc044F_0055;
	message("This beautiful, earthy woman in her forties gives you a friendly smile.");
	say();
	gflags[0x00EC] = true;
	goto labelFunc044F_0059;
labelFunc044F_0055:
	message("\"Hello,\" Zinaida says.");
	say();
labelFunc044F_0059:
	converse attend labelFunc044F_0129;
	case "name" attend labelFunc044F_0080:
	message("\"I am Zinaida,\" she says with a curtsey.");
	say();
	UI_remove_answer("name");
	if (!gflags[0x00E4]) goto labelFunc044F_007C;
	UI_add_answer("De Maria");
labelFunc044F_007C:
	gflags[0x00F1] = true;
labelFunc044F_0080:
	case "job" attend labelFunc044F_00B1:
	message("\"I am the owner and manager of The Emerald.\"");
	say();
	if (!(var0000 == 0x0017)) goto labelFunc044F_00AD;
	message("\"If I can help thee with food or drink, please say so. I have never had a dissatisfied customer.\"");
	say();
	UI_add_answer(["drink", "food", "buy"]);
	goto labelFunc044F_00B1;
labelFunc044F_00AD:
	message("\"Please come to the pub when it is open and I shall be happy to serve thee!\"");
	say();
labelFunc044F_00B1:
	case "food" attend labelFunc044F_00C4:
	message("\"The Emerald is pleased to serve thee the finest cuisine this side of Britain. Thou mightest wish to try the special -- Silverleaf.\"");
	say();
	UI_add_answer("Silverleaf");
labelFunc044F_00C4:
	case "Silverleaf" attend labelFunc044F_00D7:
	message("She winks at you. \"Some say it is a powerful aphrodisiac... It is delicious, regardless. It comes from the root of an exotic tree growing somewhere in Britannia.\"");
	say();
	UI_remove_answer("Silverleaf");
labelFunc044F_00D7:
	case "drink" attend labelFunc044F_00EA:
	message("\"The Emerald serves only the best wine and ale. I cannot recommend the water, however. Thanks to Lock Lake.\"");
	say();
	UI_add_answer("Lock Lake");
labelFunc044F_00EA:
	case "buy" attend labelFunc044F_00F5:
	Func0951();
labelFunc044F_00F5:
	case "De Maria" attend labelFunc044F_0108:
	message("\"He is the light of my life. A finer man does not exist.\" She beams.");
	say();
	UI_remove_answer("De Maria");
labelFunc044F_0108:
	case "Lock Lake" attend labelFunc044F_011B:
	message("\"The stench has made our water taste terrible. That mining company must cease pouring their sewage into what was once a fine lake!\"");
	say();
	UI_remove_answer("Lock Lake");
labelFunc044F_011B:
	case "bye" attend labelFunc044F_0126:
	goto labelFunc044F_0129;
labelFunc044F_0126:
	goto labelFunc044F_0059;
labelFunc044F_0129:
	endconv;
	message("\"Come again soon!\"*");
	say();
labelFunc044F_012E:
	if (!(event == 0x0000)) goto labelFunc044F_013C;
	Func092E(0xFFB1);
labelFunc044F_013C:
	return;
}


