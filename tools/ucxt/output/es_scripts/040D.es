#game "blackgate"
// externs
extern var Func090B 0x90B (var var0000);
extern var Func0834 0x834 ();

void Func040D object#(0x40D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0000)) goto labelFunc040D_0009;
	abort;
labelFunc040D_0009:
	UI_show_npc_face(0xFFF3, 0x0000);
	var0000 = UI_part_of_day();
	UI_add_answer(["name", "job", "murder", "bye"]);
	if (!gflags[0x003D]) goto labelFunc040D_003A;
	UI_add_answer("password");
labelFunc040D_003A:
	if (!gflags[0x003F]) goto labelFunc040D_004D;
	UI_add_answer(["Fellowship", "Klog"]);
labelFunc040D_004D:
	if (!((var0000 == 0x0007) || ((var0000 == 0x0000) || (var0000 == 0x0001)))) goto labelFunc040D_006E;
	UI_add_answer("ship");
labelFunc040D_006E:
	if (!gflags[0x0043]) goto labelFunc040D_007B;
	UI_add_answer("Hook");
labelFunc040D_007B:
	if (!(!gflags[0x004D])) goto labelFunc040D_009B;
	message("You see a grumpy fellow with a bloody bandage on his head.");
	say();
	gflags[0x004D] = true;
	UI_set_schedule_type(UI_get_npc_object(0xFFF3), 0x0010);
	goto labelFunc040D_009F;
labelFunc040D_009B:
	message("\"Dost thou need something else?\" Gilberto asks. You notice his wound is healing nicely.");
	say();
labelFunc040D_009F:
	converse attend labelFunc040D_0249;
	case "name" attend labelFunc040D_00B5:
	message("\"I am Gilberto.\"");
	say();
	UI_remove_answer("name");
labelFunc040D_00B5:
	case "job" attend labelFunc040D_00C1:
	message("\"I have the night watch at the dock gate.\"");
	say();
labelFunc040D_00C1:
	case "murder" attend labelFunc040D_00DB:
	message("\"It must have occurred shortly before I was knocked out.\"");
	say();
	UI_add_answer("knocked");
	UI_remove_answer("murder");
labelFunc040D_00DB:
	case "knocked" attend labelFunc040D_00FB:
	message("\"It was just about sunrise. I was looking out to the sea. All of a sudden, I felt a blow on the back of mine head.\"~~ He winces in pain.");
	say();
	UI_add_answer(["blow", "pain"]);
	UI_remove_answer("knocked");
labelFunc040D_00FB:
	case "pain" attend labelFunc040D_010E:
	message("Gilberto still seems a little wobbly, but his gesture indicates that he does not desire your aid.~\"My skull is still ringing, but I shall be all right momentarily.\"");
	say();
	UI_remove_answer("pain");
labelFunc040D_010E:
	case "blow" attend labelFunc040D_012E:
	message("\"The next thing I knew, I was on the ground. Johnson, the guard for the next watch, was shaking me. I had been out about ten minutes. I knew that because the sun had just peeked over the horizon. And 'The Crown Jewel' had gone and sailed!\"");
	say();
	UI_add_answer(["Johnson", "Crown Jewel"]);
	UI_remove_answer("blow");
labelFunc040D_012E:
	case "Crown Jewel" attend labelFunc040D_0152:
	message("\"Did I forget to say? That is a ship that was docked here all night. I believe it was about to sail for Britain. Thou couldst ask Gargan the Shipwright to make sure. Anyway, I did not see mine attackers,\" the guard grumbles.");
	say();
	gflags[0x0040] = true;
	UI_add_answer(["attackers", "Gargan"]);
	UI_remove_answer("Crown Jewel");
labelFunc040D_0152:
	case "attackers" attend labelFunc040D_0165:
	message("\"Hmmm. I wonder if they jumped onto the ship! They could be all the way to Britain by now!\"");
	say();
	UI_remove_answer("attackers");
labelFunc040D_0165:
	case "Gargan" attend labelFunc040D_0178:
	message("\"He is a good man but thou mayest not wish to stand too close to him. Thou mayest catch something.\"");
	say();
	UI_remove_answer("Gargan");
labelFunc040D_0178:
	case "ship" attend labelFunc040D_0192:
	message("\"If thou dost want a ship, thou must get a deed from the shipwright. Thou must also have the password to leave town.\"");
	say();
	UI_remove_answer("ship");
	UI_add_answer("password");
labelFunc040D_0192:
	case "password" attend labelFunc040D_01EF:
	message("\"What is it?\"");
	say();
	var0001 = ["Uhh, I don't know", "Long live the king", "Please"];
	if (!gflags[0x003D]) goto labelFunc040D_01BD;
	var0001 = (var0001 & "Blackbird");
labelFunc040D_01BD:
	var0002 = Func090B(var0001);
	if (!(var0002 == "Blackbird")) goto labelFunc040D_01EB;
	var0003 = Func0834();
	if (!var0003) goto labelFunc040D_01E3;
	message("\"All right. Thou mayest pass.\"*");
	say();
	goto labelFunc040D_01E7;
labelFunc040D_01E3:
	message("\"Thou mayest not pass.\"*");
	say();
labelFunc040D_01E7:
	abort;
	goto labelFunc040D_01EF;
labelFunc040D_01EB:
	message("\"Thou dost not know the password. The Mayor can give thee the proper password.\"");
	say();
labelFunc040D_01EF:
	case "Johnson" attend labelFunc040D_0202:
	message("\"He takes the morning watch at the dock.\"");
	say();
	UI_remove_answer("Johnson");
labelFunc040D_0202:
	case "Fellowship" attend labelFunc040D_0215:
	message("He shrugs.~~\"Thou art asking the wrong man. I suppose they are all right. I have never had trouble with them.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc040D_0215:
	case "Hook" attend labelFunc040D_0228:
	message("The guard thinks a moment.~~\"No. I cannot say that I saw a man with a hook.\"");
	say();
	UI_remove_answer("Hook");
labelFunc040D_0228:
	case "Klog" attend labelFunc040D_023B:
	message("\"I have not had many dealings with him.\"");
	say();
	UI_remove_answer("Klog");
labelFunc040D_023B:
	case "bye" attend labelFunc040D_0246:
	goto labelFunc040D_0249;
labelFunc040D_0246:
	goto labelFunc040D_009F;
labelFunc040D_0249:
	endconv;
	message("\"Goodbye. Watch thy back.\"*");
	say();
	return;
}


