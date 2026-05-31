#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092F 0x92F (var var0000);

void Func04D3 object#(0x4D3) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04D3_01CD;
	UI_show_npc_face(0xFF2D, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0290])) goto labelFunc04D3_0034;
	message("You are greeted with a smile from this gargoyle.");
	say();
	gflags[0x0290] = true;
	goto labelFunc04D3_0038;
labelFunc04D3_0034:
	message("\"To be pleased to again see you, human.\" Lap-Lem smiles.");
	say();
labelFunc04D3_0038:
	var0000 = Func0931(0xFE9B, 0x0001, 0x03BB, 0xFE99, 0x0003);
	if (!(gflags[0x0281] || var0000)) goto labelFunc04D3_0065;
	if (!(!gflags[0x02DF])) goto labelFunc04D3_0065;
	UI_add_answer("give amulet");
labelFunc04D3_0065:
	converse attend labelFunc04D3_01C8;
	case "name" attend labelFunc04D3_0094:
	message("\"To be known to you as Lap-Lem.\"");
	say();
	UI_add_answer("Lap-Lem");
	UI_remove_answer("name");
	if (!(gflags[0x0280] && (!gflags[0x02DF]))) goto labelFunc04D3_0094;
	UI_add_answer("Blorn");
labelFunc04D3_0094:
	case "Lap-Lem" attend labelFunc04D3_00A7:
	message("\"To mean `rock one.'\"");
	say();
	UI_remove_answer("Lap-Lem");
labelFunc04D3_00A7:
	case "job" attend labelFunc04D3_00C3:
	message("\"To be a miner. To be now the only miner of my race in this town.\"");
	say();
	UI_add_answer(["only miner", "race", "town"]);
labelFunc04D3_00C3:
	case "race" attend labelFunc04D3_00D6:
	message("\"To know of many gargoyles who work in the other mines, but to see the Vesper mine has only humans now.\"");
	say();
	UI_remove_answer("race");
labelFunc04D3_00D6:
	case "town" attend labelFunc04D3_00F6:
	message("\"To be called Vesper. To be the only place, other than parts of Britain, where gargoyles live with humans. To tell you that here are more conflicts.\" He sighs.~~\"To wonder if Terfin would be a better choice to maintain a home.\"");
	say();
	UI_remove_answer("town");
	UI_add_answer(["conflicts", "Terfin"]);
labelFunc04D3_00F6:
	case "conflicts" attend labelFunc04D3_0109:
	message("\"To see the humans grow in hostility to us. Sadly, to also see many gargoyles begin to show mutual feelings. To hope the situation never becomes violent.\"");
	say();
	UI_remove_answer("conflicts");
labelFunc04D3_0109:
	case "Terfin" attend labelFunc04D3_011C:
	message("\"To be the gargoyle home city. To have been constructed two hundred years ago when the codex was placed in the void and the gargoyles were without places to live. Though not prohibited, no humans reside there.\"");
	say();
	UI_remove_answer("Terfin");
labelFunc04D3_011C:
	case "only miner" attend labelFunc04D3_012F:
	message("\"To tell you that there was another -- Anmanivas. To have left because of racial hatred. To sit now in tavern all day with brother, Foranamo. To feel bad for Anmanivas and brother, but to need job.\" He shrugs.~~ \"To put up with hatred.\"");
	say();
	UI_remove_answer("only miner");
labelFunc04D3_012F:
	case "Blorn" attend labelFunc04D3_0161:
	message("\"To know of incident?");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc04D3_014F;
	message("\"To be very sorry for attack, but was in defense of possession.\" He lowers his head as if ashamed.");
	say();
	goto labelFunc04D3_0153;
labelFunc04D3_014F:
	message("\"To be ashamed. To want nothing more than return of my possession from human.\"");
	say();
labelFunc04D3_0153:
	UI_add_answer("possession");
	UI_remove_answer("Blorn");
labelFunc04D3_0161:
	case "possession" attend labelFunc04D3_0178:
	message("\"To have had an amulet with sentimental value. To have been stolen by the human.\" He looks down at his feet. \"To want it back.\"");
	say();
	UI_remove_answer("possession");
	gflags[0x0282] = true;
labelFunc04D3_0178:
	case "give amulet" attend labelFunc04D3_01BA:
	message("\"To have returned with amulet?\"");
	say();
	var0002 = UI_remove_party_items(0x0001, 0x03BB, 0xFE99, 0x0003, false);
	if (!var0002) goto labelFunc04D3_01AF;
	Func0911(0x0032);
	message("He grins widely as you return the jewelry to him.~~ \"To thank you, human! To be an example for your race!\"");
	say();
	gflags[0x02DF] = true;
	goto labelFunc04D3_01B3;
labelFunc04D3_01AF:
	message("\"Oh. To not have amulet with you.\" He perks up and smiles. \"To return later with amulet!\"");
	say();
labelFunc04D3_01B3:
	UI_remove_answer("give amulet");
labelFunc04D3_01BA:
	case "bye" attend labelFunc04D3_01C5:
	goto labelFunc04D3_01C8;
labelFunc04D3_01C5:
	goto labelFunc04D3_0065;
labelFunc04D3_01C8:
	endconv;
	message("\"To hope to see you again soon.\"*");
	say();
labelFunc04D3_01CD:
	if (!(event == 0x0000)) goto labelFunc04D3_01DB;
	Func092F(0xFF2D);
labelFunc04D3_01DB:
	return;
}


