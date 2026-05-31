#game "blackgate"
void Func04BB object#(0x4BB) ()
{
	if (!(event == 0x0001)) goto labelFunc04BB_00F4;
	UI_show_npc_face(0xFF45, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x024C])) goto labelFunc04BB_0034;
	message("You see a frowning gargoyle.");
	say();
	gflags[0x024C] = true;
	goto labelFunc04BB_0038;
labelFunc04BB_0034:
	message("\"To ask what you need, human,\" says Silamo.");
	say();
labelFunc04BB_0038:
	converse attend labelFunc04BB_00EF;
	case "name" attend labelFunc04BB_0062:
	message("\"To be named `Silamo.'\"");
	say();
	if (!gflags[0x023D]) goto labelFunc04BB_0054;
	UI_add_answer("wingless status");
labelFunc04BB_0054:
	UI_remove_answer("name");
	UI_add_answer("Silamo");
labelFunc04BB_0062:
	case "Silamo" attend labelFunc04BB_0075:
	message("\"To know my name if I were winged.\" He scowls at you.");
	say();
	UI_remove_answer("Silamo");
labelFunc04BB_0075:
	case "job" attend labelFunc04BB_0081:
	message("\"To be the gardener,\" he shrugs, \"nothing more.\"~~ He does not seem to be interested in speaking with you.");
	say();
labelFunc04BB_0081:
	case "wingless status" attend labelFunc04BB_00A1:
	message("He stares at you for a moment.~~\"To be right, human.~~ \"To feel I am treated less for an absence of wings. To see Quaeven treated better since joining The Fellowship. To be devoted to the altar of singularity. But, perhaps to change if The Fellowship cares not about wings.\"");
	say();
	UI_add_answer(["treated", "Quaeven"]);
	UI_remove_answer("wingless status");
labelFunc04BB_00A1:
	case "Quaeven" attend labelFunc04BB_00B4:
	message("\"To be also without wings, but to be respected as if he were winged.\"");
	say();
	UI_remove_answer("Quaeven");
labelFunc04BB_00B4:
	case "treated" attend labelFunc04BB_00CE:
	message("\"To see many others include him in many events from which I am excluded. To know others include him in many more decision-making councils, too.\"");
	say();
	UI_remove_answer("treated");
	UI_add_answer("others");
labelFunc04BB_00CE:
	case "others" attend labelFunc04BB_00E1:
	message("\"Gargoyles in The Fellowship.\"");
	say();
	UI_remove_answer("others");
labelFunc04BB_00E1:
	case "bye" attend labelFunc04BB_00EC:
	goto labelFunc04BB_00EF;
labelFunc04BB_00EC:
	goto labelFunc04BB_0038;
labelFunc04BB_00EF:
	endconv;
	message("\"To get back to work.\"*");
	say();
labelFunc04BB_00F4:
	if (!(event == 0x0000)) goto labelFunc04BB_00FD;
	abort;
labelFunc04BB_00FD:
	return;
}


