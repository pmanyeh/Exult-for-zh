#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func0911 0x911 (var var0000);

void Func04B8 object#(0x4B8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04B8_0152;
	UI_show_npc_face(0xFF48, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_npc_object(0xFF48);
	if (!(var0000 == 0x0007)) goto labelFunc04B8_004B;
	var0002 = Func08FC(0xFF48, 0xFF47);
	if (!var0002) goto labelFunc04B8_0046;
	message("The gargoyle turns to you, frowning. He moves his massive hand to his mouth and use one finger to cross his lips. The Fellowship meeting is in progress.*");
	say();
	goto labelFunc04B8_004A;
labelFunc04B8_0046:
	message("The gargoyle, obviously in a hurry, ignores you.*");
	say();
labelFunc04B8_004A:
	abort;
labelFunc04B8_004B:
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!(!gflags[0x0249])) goto labelFunc04B8_0070;
	message("The gargoyle gives you a menacing glare. Judging by his size, he would make a formidable foe.");
	say();
	gflags[0x0249] = true;
	goto labelFunc04B8_0074;
labelFunc04B8_0070:
	message("\"To ask what you need?\" says Runeb.");
	say();
labelFunc04B8_0074:
	if (!gflags[0x0255]) goto labelFunc04B8_0094;
	if (!gflags[0x023F]) goto labelFunc04B8_0087;
	UI_add_answer("altar destruction");
labelFunc04B8_0087:
	if (!gflags[0x0240]) goto labelFunc04B8_0094;
	UI_add_answer("frame Quan");
labelFunc04B8_0094:
	converse attend labelFunc04B8_014D;
	case "name" attend labelFunc04B8_00CF:
	message("\"To be Runeb.\"");
	say();
	gflags[0x0255] = true;
	UI_add_answer("Runeb");
	UI_remove_answer("name");
	if (!gflags[0x023F]) goto labelFunc04B8_00C2;
	UI_add_answer("altar destruction");
labelFunc04B8_00C2:
	if (!gflags[0x0240]) goto labelFunc04B8_00CF;
	UI_add_answer("frame Quan");
labelFunc04B8_00CF:
	case "job" attend labelFunc04B8_00DB:
	message("\"To be Fellowship clerk.\"");
	say();
labelFunc04B8_00DB:
	case "Runeb" attend labelFunc04B8_00EE:
	message("\"To mean `busy one,'\" he says sarcastically.");
	say();
	UI_remove_answer("Runeb");
labelFunc04B8_00EE:
	case "Fellowship" attend labelFunc04B8_0115:
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc04B8_010A;
	message("\"To have a branch here. To meet at usual time each night.\"");
	say();
	goto labelFunc04B8_010E;
labelFunc04B8_010A:
	message("\"To have more important things to do now. To ask me later, human.\"");
	say();
labelFunc04B8_010E:
	UI_remove_answer("Fellowship");
labelFunc04B8_0115:
	case "altar destruction", "frame Quan" attend labelFunc04B8_013F:
	Func0911(0x0064);
	message("\"To be sorry you know that. To need now to kill Sarpling.\" He grins at you.~~\"To need now to kill you!\"*");
	say();
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_alignment(var0001, 0x0002);
	abort;
labelFunc04B8_013F:
	case "bye" attend labelFunc04B8_014A:
	goto labelFunc04B8_014D;
labelFunc04B8_014A:
	goto labelFunc04B8_0094;
labelFunc04B8_014D:
	endconv;
	message("He waits for you to leave before he returns to what he was doing.*");
	say();
labelFunc04B8_0152:
	if (!(event == 0x0000)) goto labelFunc04B8_015B;
	abort;
labelFunc04B8_015B:
	return;
}


