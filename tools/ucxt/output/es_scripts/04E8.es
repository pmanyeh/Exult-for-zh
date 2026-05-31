#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04E8 object#(0x4E8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04E8_0130;
	UI_show_npc_face(0xFF18, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF18));
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02B5])) goto labelFunc04E8_004F;
	message("You see a well-dressed pirate with oil in his hair.");
	say();
	gflags[0x02B5] = true;
	goto labelFunc04E8_0053;
labelFunc04E8_004F:
	message("\"May I help thee?\" Smithy asks.");
	say();
labelFunc04E8_0053:
	converse attend labelFunc04E8_0125;
	case "name" attend labelFunc04E8_0069:
	message("\"I am Smithy.\"");
	say();
	UI_remove_answer("name");
labelFunc04E8_0069:
	case "job" attend labelFunc04E8_0097:
	message("\"I run the games at the House of Games.");
	say();
	if (!(var0002 == 0x000A)) goto labelFunc04E8_0093;
	message("\"I can explain the rules and how to play for thee. I also make sure that one does not cheat.\"");
	say();
	UI_add_answer(["games", "cheat"]);
	goto labelFunc04E8_0097;
labelFunc04E8_0093:
	message("\"Please do come and try thy skill when the facility is open for business.\"");
	say();
labelFunc04E8_0097:
	case "cheat" attend labelFunc04E8_00AA:
	message("\"If thou art caught cheating, thou wilt be arrested. And we do prosecute!\"");
	say();
	UI_remove_answer("cheat");
labelFunc04E8_00AA:
	case "games" attend labelFunc04E8_0117:
	message("\"There are three games that thou canst play. The first is Virtue Roulette. The second is The Rat Race. The third is Triples. Wouldst thou like to hear any rules?\"");
	say();
	if (!Func090A()) goto labelFunc04E8_0113;
	message("\"For which game dost thou want to hear the rules?\"");
	say();
	var0003 = Func090B(["None", "Virtue Roulette", "The Rat Race", "Triples"]);
	if (!(var0003 == "None")) goto labelFunc04E8_00E6;
	message("\"That is all right.\"");
	say();
	goto labelFunc04E8_0125;
labelFunc04E8_00E6:
	if (!(var0003 == "Virtue Roulette")) goto labelFunc04E8_00F4;
	message("\"Simply place the amount of gold coins thou dost wish to bet on one or more colors. Use the wheel and thy money will be increased if thou hast bet correctly.\"");
	say();
labelFunc04E8_00F4:
	if (!(var0003 == "The Rat Race")) goto labelFunc04E8_0102;
	message("\"Place thy bet on the green spot at the end of the lane which corresponds to the trough in which thy rat is running.\"");
	say();
labelFunc04E8_0102:
	if (!(var0003 == "Triples")) goto labelFunc04E8_0110;
	message("\"Thou canst bet on a triple, that is, three ones, three twos, or three threes. This has the highest payback. A '1, 2, 3' pays slightly less. A sum total of '4', '5', '7', or '8' pays the least. Do not place thy money in between numbers, especially the '4' and '5'. A '6' made up of anything other than three twos loses. After placing thy bet, spin the wheel.\"");
	say();
labelFunc04E8_0110:
	goto labelFunc04E8_0117;
labelFunc04E8_0113:
	message("\"Fine then. Thou art on thine own.\"");
	say();
labelFunc04E8_0117:
	case "bye" attend labelFunc04E8_0122:
	goto labelFunc04E8_0125;
labelFunc04E8_0122:
	goto labelFunc04E8_0053;
labelFunc04E8_0125:
	endconv;
	message("\"See thee again, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04E8_0130:
	if (!(event == 0x0000)) goto labelFunc04E8_01B7;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF18));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000A)) goto labelFunc04E8_01B1;
	if (!(var0004 == 0x0001)) goto labelFunc04E8_0174;
	var0005 = "@Place thy bets.@";
labelFunc04E8_0174:
	if (!(var0004 == 0x0002)) goto labelFunc04E8_0184;
	var0005 = "@No more bets.@";
labelFunc04E8_0184:
	if (!(var0004 == 0x0003)) goto labelFunc04E8_0194;
	var0005 = "@Winner takes all.@";
labelFunc04E8_0194:
	if (!(var0004 == 0x0004)) goto labelFunc04E8_01A4;
	var0005 = "@The House wins.@";
labelFunc04E8_01A4:
	UI_item_say(0xFF18, var0005);
	goto labelFunc04E8_01B7;
labelFunc04E8_01B1:
	Func092E(0xFF18);
labelFunc04E8_01B7:
	return;
}


