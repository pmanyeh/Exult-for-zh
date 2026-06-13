#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0853 0x853 ();
extern void Func092F 0x92F (var var0000);

void Func04BE object#(0x4BE) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04BE_01DC;
	UI_show_npc_face(0xFF42, 0x0000);
	var0000 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x024F])) goto labelFunc04BE_0038;
	message("The gargoyle welcomes you by making a sweeping motion with his open hand.");
	say();
	gflags[0x024F] = true;
	goto labelFunc04BE_003C;
labelFunc04BE_0038:
	message("\"To welcome you again, human,\" says Betra.");
	say();
labelFunc04BE_003C:
	if (!gflags[0x0251]) goto labelFunc04BE_004F;
	if (!gflags[0x023E]) goto labelFunc04BE_004F;
	UI_add_answer("Quaeven");
labelFunc04BE_004F:
	converse attend labelFunc04BE_01D7;
	case "name" attend labelFunc04BE_009F:
	message("\"To be named Betra. To be new to Terfin?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04BE_0071;
	message("\"To tell you to talk to Teregus, the sage or Forbrak, the tavernkeeper, for information about town. To help with building locations and residents.\"");
	say();
	goto labelFunc04BE_0075;
labelFunc04BE_0071:
	message("\"To welcome you back to Terfin.\"");
	say();
labelFunc04BE_0075:
	UI_remove_answer("name");
	UI_add_answer(["Terfin", "Betra"]);
	gflags[0x0251] = true;
	if (!(gflags[0x023E] && (!var0000))) goto labelFunc04BE_009F;
	UI_add_answer("Quaeven");
labelFunc04BE_009F:
	case "Betra" attend labelFunc04BE_00B2:
	message("\"To be the word for `small valor.'\"");
	say();
	UI_remove_answer("Betra");
labelFunc04BE_00B2:
	case "job" attend labelFunc04BE_00C5:
	message("\"To be the seller of provisions.\"");
	say();
	UI_add_answer("buy");
labelFunc04BE_00C5:
	case "Terfin" attend labelFunc04BE_00E5:
	message("\"To be the town set aside for us gargoyles who wish to reside in our own culture.\"");
	say();
	UI_remove_answer("Terfin");
	UI_add_answer(["set aside", "culture"]);
labelFunc04BE_00E5:
	case "culture" attend labelFunc04BE_00F8:
	message("\"To have many things unique to our race -- other than our appearance -- that distinguish us from humans. To be different, but also equal.\"");
	say();
	UI_remove_answer("culture");
labelFunc04BE_00F8:
	case "set aside" attend labelFunc04BE_0112:
	message("\"To have been put here by the humans. To be permitted to leave, and also to reside elsewhere, but to know that many humans do not like us.\"");
	say();
	UI_remove_answer("set aside");
	UI_add_answer("dislike");
labelFunc04BE_0112:
	case "dislike" attend labelFunc04BE_0125:
	message("\"To be very ironic. To say that the only town with an equal number of humans and gargoyles is the one where most racial conflicts occur.\" ~~He shrugs. \"To have been unwise, perhaps, to put so many differences together. To be sad times.\"");
	say();
	UI_remove_answer("dislike");
labelFunc04BE_0125:
	case "buy" attend labelFunc04BE_014F:
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF42));
	if (!(var0002 == 0x0007)) goto labelFunc04BE_014B;
	Func0853();
	goto labelFunc04BE_014F;
labelFunc04BE_014B:
	message("\"To sell to you during the hours of 9 in the morning and 6 in the evening. To be sorry, but to sell nothing before or after those hours.\"");
	say();
labelFunc04BE_014F:
	case "Quaeven" attend labelFunc04BE_016D:
	message("He smiles at the mention of the name.~~ \"To be a likable young gargoyle.\"");
	say();
	var0000 = true;
	UI_add_answer("join Fellowship?");
	UI_remove_answer("Quaeven");
labelFunc04BE_016D:
	case "join Fellowship?" attend labelFunc04BE_0190:
	message("\"To join The Fellowship?\" He shakes his head. \"To be an organization not for me. To be quite happy as I am, devoted to the altars. To believe Quaeven to have been misled by the others in The Fellowship. To not trust them, especially Sarpling.\"");
	say();
	UI_add_answer(["misled", "Sarpling", "altars"]);
	UI_remove_answer("join Fellowship?");
labelFunc04BE_0190:
	case "misled" attend labelFunc04BE_01A3:
	message("\"To believe that there is deceit from The Fellowship, and to expect that is not what it appears. To believe promises of happiness made when Quaeven first joined came true from Quaeven, himself, not The Fellowship.\"");
	say();
	UI_remove_answer("misled");
labelFunc04BE_01A3:
	case "Sarpling" attend labelFunc04BE_01B6:
	message("\"To trust him as far as I could throw him, and to certainly throw him as far as I could.\"");
	say();
	UI_remove_answer("Sarpling");
labelFunc04BE_01B6:
	case "altars" attend labelFunc04BE_01C9:
	message("\"To have heard the rumors about destroying the altars. To be upset, but to have no evidence.~~ \"To know that only two gargoyles have easy access to such weapons. To be one of those gargoyles, and to know Sarpling is the other.\"");
	say();
	UI_remove_answer("altars");
labelFunc04BE_01C9:
	case "bye" attend labelFunc04BE_01D4:
	goto labelFunc04BE_01D7;
labelFunc04BE_01D4:
	goto labelFunc04BE_004F;
labelFunc04BE_01D7:
	endconv;
	message("\"To wish you safe travels, human.\"*");
	say();
labelFunc04BE_01DC:
	if (!(event == 0x0000)) goto labelFunc04BE_01EA;
	Func092F(0xFF42);
labelFunc04BE_01EA:
	return;
}


