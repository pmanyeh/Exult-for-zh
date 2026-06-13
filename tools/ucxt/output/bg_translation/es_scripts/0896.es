#game "blackgate"
void Func0896 0x896 ()
{
	UI_show_npc_face(0xFEDF, 0x0000);
	message("The golem seems to have regained his staid composure. However, life is still evident within his gem-like eyes.");
	say();
	UI_add_answer(["name", "job", "bye"]);
labelFunc0896_001E:
	converse attend labelFunc0896_0068;
	case "name" attend labelFunc0896_0045:
	UI_remove_answer("name");
	if (!gflags[0x031D]) goto labelFunc0896_003D;
	message("He tilts his head and stares at you quizzicaly.~ \"I apologize. Did I not already tell thee my master called me Bollux?\"");
	say();
	goto labelFunc0896_0045;
labelFunc0896_003D:
	message("\"My master named me Bollux.");
	say();
	gflags[0x031D] = true;
labelFunc0896_0045:
	case "job" attend labelFunc0896_0058:
	message("\"I am here to guard....\" He pauses, obviously deep in thought.\"I am without a duty now.\"");
	say();
	UI_remove_answer("job");
labelFunc0896_0058:
	case "bye" attend labelFunc0896_0065:
	message("\"Good... bye.\"*");
	say();
	abort;
labelFunc0896_0065:
	goto labelFunc0896_001E;
labelFunc0896_0068:
	endconv;
	return;
}


