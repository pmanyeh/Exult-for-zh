#game "blackgate"
// externs
extern var Func090B 0x90B (var var0000);
extern var Func0834 0x834 ();

void Func0326 shape#(0x326) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0000)) goto labelFunc0326_0009;
	abort;
labelFunc0326_0009:
	var0000 = UI_get_schedule_type(UI_get_npc_object(item));
	UI_show_npc_face(0xFEFD, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x003D]) goto labelFunc0326_003C;
	UI_add_answer("password");
labelFunc0326_003C:
	message("You see a tough-looking guard who takes his job -very- seriously.");
	say();
labelFunc0326_0040:
	converse attend labelFunc0326_00D5;
	case "name" attend labelFunc0326_0056:
	message("\"My name is not important.\"");
	say();
	UI_remove_answer("name");
labelFunc0326_0056:
	case "job" attend labelFunc0326_0069:
	message("\"I keep villains and knaves out of Trinsic and keep a record of all who leave. Thou must have a password to leave.\"");
	say();
	UI_add_answer("password");
labelFunc0326_0069:
	case "password" attend labelFunc0326_00C7:
	message("\"What is the password?\"");
	say();
	var0001 = ["Uhh, I don't know", "Long live the king", "Please"];
	if (!gflags[0x003D]) goto labelFunc0326_0094;
	var0001 = (var0001 & "Blackbird");
labelFunc0326_0094:
	var0002 = Func090B(var0001);
	if (!(var0002 == "Blackbird")) goto labelFunc0326_00BF;
	var0003 = Func0834();
	var0003 = true;
	if (!var0003) goto labelFunc0326_00BC;
	message("\"Very well, thou mayest pass.\"*");
	say();
	abort;
labelFunc0326_00BC:
	goto labelFunc0326_00C7;
labelFunc0326_00BF:
	message("\"Thou dost not know the password. Sorry. The Mayor can give thee the proper password.\"");
	say();
	gflags[0x0042] = true;
labelFunc0326_00C7:
	case "bye" attend labelFunc0326_00D2:
	goto labelFunc0326_00D5;
labelFunc0326_00D2:
	goto labelFunc0326_0040;
labelFunc0326_00D5:
	endconv;
	message("\"Goodbye.\"*");
	say();
	return;
}


