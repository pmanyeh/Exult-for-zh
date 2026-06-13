#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func04E1 object#(0x4E1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04E1_01FC;
	UI_show_npc_face(0xFF1F, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1F));
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x0104] || gflags[0x0135])) goto labelFunc04E1_005D;
	UI_add_answer("Hook");
labelFunc04E1_005D:
	if (!(!gflags[0x02AE])) goto labelFunc04E1_006F;
	message("You see the meanest, toughest-looking guard you have ever seen in Britannia.");
	say();
	gflags[0x02AE] = true;
	goto labelFunc04E1_0073;
labelFunc04E1_006F:
	message("\"What?\" Sintag grunts.");
	say();
labelFunc04E1_0073:
	converse attend labelFunc04E1_01F7;
	case "name" attend labelFunc04E1_0089:
	message("\"Sintag,\" the man grunts.");
	say();
	UI_remove_answer("name");
labelFunc04E1_0089:
	case "job" attend labelFunc04E1_00A2:
	message("\"I am the guard at the House of Games. I rid the place of trouble-makers.\"");
	say();
	UI_add_answer(["House of Games", "trouble-makers"]);
labelFunc04E1_00A2:
	case "House of Games" attend labelFunc04E1_00BC:
	message("\"I have worked for the House of Games since The Mister agreed to pay me and asked me to stay. I know all who go in or out. I see everything.\"");
	say();
	UI_remove_answer("House of Games");
	UI_add_answer("The Mister");
labelFunc04E1_00BC:
	case "The Mister" attend labelFunc04E1_00CF:
	message("\"That would be Mister Gordy, the overseer of the House of Games. Thou might find him in his office during business hours.\"");
	say();
	UI_remove_answer("The Mister");
labelFunc04E1_00CF:
	case "trouble-makers" attend labelFunc04E1_00EF:
	message("\"We see all sorts of trouble-makers in this place. I especially do not like people who claim that they are the Avatar. I find it blasphemous. The last fellow who claimed to be an Avatar was caught cheating. He'll not be doin' that again!\"");
	say();
	UI_remove_answer("trouble-makers");
	UI_add_answer(["all sorts", "not again"]);
labelFunc04E1_00EF:
	case "all sorts" attend labelFunc04E1_0102:
	message("\"There is a man named Robin who used to come in here and cheat at the games. He had his two varlets named Battles and Leavell intimidate anyone who tried to stop him. One day my brothers came to visit and we ran Robin, Battles and Leavell all the way off the island! We have not seen them since!\"");
	say();
	UI_remove_answer("all sorts");
labelFunc04E1_0102:
	case "not again" attend labelFunc04E1_0133:
	if (!var0002) goto labelFunc04E1_0124;
	message("The Cube vibrates a little. \"He is in the caverns, in the torture chamber. What's left of him.\"");
	say();
	UI_add_answer(["torture chamber", "left of him"]);
	goto labelFunc04E1_012C;
labelFunc04E1_0124:
	message("\"Thou dost not need to know any more.\"");
	say();
	message("Sintag glares at you.");
	say();
labelFunc04E1_012C:
	UI_remove_answer("not again");
labelFunc04E1_0133:
	case "torture chamber" attend labelFunc04E1_0153:
	if (!var0002) goto labelFunc04E1_0148;
	message("The Cube vibrates. \"It is where The Fellowship interrogates their prisoners.\"");
	say();
	goto labelFunc04E1_014C;
labelFunc04E1_0148:
	message("\"What torture chamber? Did I say torture chamber?\"");
	say();
labelFunc04E1_014C:
	UI_remove_answer("torture chamber");
labelFunc04E1_0153:
	case "left of him" attend labelFunc04E1_0166:
	message("\"He has been in our care for a while now.\" Sintag smiles enigmatically.");
	say();
	UI_remove_answer("left of him");
labelFunc04E1_0166:
	case "Hook" attend labelFunc04E1_019E:
	if (!(var0001 == 0x0007)) goto labelFunc04E1_0193;
	if (!var0002) goto labelFunc04E1_018C;
	message("The Cube vibrates as Sintag speaks. \"Hook lives in the cavern behind the House of Games. There is a locked door from the gaming room which leads there. I have the key. There is also a secret door in Gordy's office which Hook uses to get home.\"");
	say();
	UI_add_answer("key");
	goto labelFunc04E1_0190;
labelFunc04E1_018C:
	message("\"I do not know any man by that description.\"");
	say();
labelFunc04E1_0190:
	goto labelFunc04E1_0197;
labelFunc04E1_0193:
	message("\"Do I look like I am working now? Leave me alone. Come to the House of Games during normal business hours.\"");
	say();
labelFunc04E1_0197:
	UI_remove_answer("Hook");
labelFunc04E1_019E:
	case "key" attend labelFunc04E1_01E9:
	message("\"Dost thou want the key?\"");
	say();
	if (!Func090A()) goto labelFunc04E1_01DE;
	var0003 = UI_add_party_items(0x0001, 0x0281, 0x00EA, 0x000A, false);
	if (!var0003) goto labelFunc04E1_01D7;
	message("\"Here it is.\"");
	say();
	Func0911(0x012C);
	goto labelFunc04E1_01DB;
labelFunc04E1_01D7:
	message("\"Thou art carrying too much!\"");
	say();
labelFunc04E1_01DB:
	goto labelFunc04E1_01E2;
labelFunc04E1_01DE:
	message("\"Suit thyself.\"");
	say();
labelFunc04E1_01E2:
	UI_remove_answer("key");
labelFunc04E1_01E9:
	case "bye" attend labelFunc04E1_01F4:
	goto labelFunc04E1_01F7;
labelFunc04E1_01F4:
	goto labelFunc04E1_0073;
labelFunc04E1_01F7:
	endconv;
	message("Sintag grunts.*");
	say();
labelFunc04E1_01FC:
	if (!(event == 0x0000)) goto labelFunc04E1_0277;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1F));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc04E1_0276;
	if (!(var0004 == 0x0001)) goto labelFunc04E1_0239;
	var0005 = "@I am watching thine hands!@";
labelFunc04E1_0239:
	if (!(var0004 == 0x0002)) goto labelFunc04E1_0249;
	var0005 = "@No cheating!@";
labelFunc04E1_0249:
	if (!(var0004 == 0x0003)) goto labelFunc04E1_0259;
	var0005 = "@Keep thine hands where I can see 'em.@";
labelFunc04E1_0259:
	if (!(var0004 == 0x0004)) goto labelFunc04E1_0269;
	var0005 = "@No funny stuff with the games.@";
labelFunc04E1_0269:
	UI_item_say(0xFF1F, var0005);
	goto labelFunc04E1_0277;
labelFunc04E1_0276:
	abort;
labelFunc04E1_0277:
	return;
}


