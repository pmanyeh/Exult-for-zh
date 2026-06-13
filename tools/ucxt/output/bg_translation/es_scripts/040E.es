#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func0834 0x834 ();

void Func040E object#(0x40E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc040E_0009;
	abort;
labelFunc040E_0009:
	UI_show_npc_face(0xFFF2, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc040E_0042;
	var0001 = Func08FC(0xFFF2, 0xFFF0);
	if (!var0001) goto labelFunc040E_003D;
	message("\"I will speak with thee after the Fellowship meeting.\"*");
	say();
	goto labelFunc040E_0041;
labelFunc040E_003D:
	message("\"I must get to the Fellowship meeting! I am late! May we speak tomorrow?\"*");
	say();
labelFunc040E_0041:
	abort;
labelFunc040E_0042:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x003D]) goto labelFunc040E_005F;
	UI_add_answer("password");
labelFunc040E_005F:
	if (!gflags[0x003C]) goto labelFunc040E_006C;
	UI_add_answer("murder");
labelFunc040E_006C:
	if (!gflags[0x003F]) goto labelFunc040E_0082;
	UI_add_answer(["Fellowship", "Klog", "Hook"]);
labelFunc040E_0082:
	if (!gflags[0x0040]) goto labelFunc040E_008F;
	UI_add_answer("Crown Jewel");
labelFunc040E_008F:
	if (!(!gflags[0x004E])) goto labelFunc040E_00A1;
	message("You see an alert and no-nonsense guard.");
	say();
	gflags[0x004E] = true;
	goto labelFunc040E_00A5;
labelFunc040E_00A1:
	message("\"What is it?\" Johnson asks, sternly.");
	say();
labelFunc040E_00A5:
	converse attend labelFunc040E_01E6;
	case "name" attend labelFunc040E_00BB:
	message("\"Johnson.\"");
	say();
	UI_remove_answer("name");
labelFunc040E_00BB:
	case "job" attend labelFunc040E_00CE:
	message("\"I have the morning watch guarding the dock. I authorize the comings and goings of every ship.\"");
	say();
	UI_add_answer("ship");
labelFunc040E_00CE:
	case "murder" attend labelFunc040E_00E1:
	message("\"I did hear of this. When I arrived at my post at sunrise, I found Gilberto lying felled on the ground. If thou art asking if I saw anything -- I did not. No one hath passed by me since I arrived at the dock.\"");
	say();
	UI_remove_answer("murder");
labelFunc040E_00E1:
	case "Crown Jewel" attend labelFunc040E_00F4:
	message("\"The boat left just after sunrise. It did sail to Britain, I believe. Thou canst ask Gargan the Shipwright about that.\"");
	say();
	UI_remove_answer("Crown Jewel");
labelFunc040E_00F4:
	case "Fellowship" attend labelFunc040E_011E:
	message("\"Yes, I am a member. Wouldst thou like to join?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc040E_0113;
	message("\"Then thou shouldst go to see Batlin in Britain.\"");
	say();
	goto labelFunc040E_0117;
labelFunc040E_0113:
	message("\"'Tis thy loss.\"");
	say();
labelFunc040E_0117:
	UI_remove_answer("Fellowship");
labelFunc040E_011E:
	case "Klog" attend labelFunc040E_0131:
	message("\"Good man. He is our branch leader here in Trinsic.\"");
	say();
	UI_remove_answer("Klog");
labelFunc040E_0131:
	case "ship" attend labelFunc040E_0151:
	message("\"If thou dost want a ship, thou must get a deed from the shipwright. Thou must also have the password to leave town.\"");
	say();
	UI_add_answer(["password", "deed"]);
	UI_remove_answer("ship");
labelFunc040E_0151:
	case "password" attend labelFunc040E_01B2:
	message("\"What is it?\"");
	say();
	var0003 = ["Uhh, I don't know", "Long live the king", "Please"];
	if (!gflags[0x003D]) goto labelFunc040E_017C;
	var0003 = (var0003 & "Blackbird");
labelFunc040E_017C:
	var0002 = Func090B(var0003);
	if (!(var0002 == "Blackbird")) goto labelFunc040E_01AA;
	var0004 = Func0834();
	if (!var0004) goto labelFunc040E_01A2;
	message("\"Very well, thou mayest pass.\"*");
	say();
	goto labelFunc040E_01A6;
labelFunc040E_01A2:
	message("\"Thou mayest not pass.\"*");
	say();
labelFunc040E_01A6:
	abort;
	goto labelFunc040E_01B2;
labelFunc040E_01AA:
	message("\"Thou dost not know the password. I am sorry. The Mayor may give thee the proper password.\"");
	say();
	gflags[0x0042] = true;
labelFunc040E_01B2:
	case "Hook" attend labelFunc040E_01C5:
	message("\"A man with a hook? No, I saw no one all night or all morning.\"");
	say();
	UI_remove_answer("Hook");
labelFunc040E_01C5:
	case "deed" attend labelFunc040E_01D8:
	message("\"Thou canst purchase that from Gargan the Shipwright.\"");
	say();
	UI_remove_answer("deed");
labelFunc040E_01D8:
	case "bye" attend labelFunc040E_01E3:
	goto labelFunc040E_01E6;
labelFunc040E_01E3:
	goto labelFunc040E_00A5;
labelFunc040E_01E6:
	endconv;
	message("\"Good day.\"*");
	say();
	return;
}


