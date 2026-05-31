#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func088C 0x88C ();
extern void Func092E 0x92E (var var0000);

void Func0432 object#(0x432) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0432_0179;
	UI_show_npc_face(0xFFCE, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCE));
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00B3])) goto labelFunc0432_004F;
	message("You see a friendly-looking farmer who waves at you as you approach.");
	say();
	gflags[0x00B3] = true;
	goto labelFunc0432_0059;
labelFunc0432_004F:
	message("\"Hello again, ");
	message(var0000);
	message(".\" says Fred.");
	say();
labelFunc0432_0059:
	converse attend labelFunc0432_016E;
	case "name" attend labelFunc0432_006F:
	message("\"My name is Fred.\"");
	say();
	UI_remove_answer("name");
labelFunc0432_006F:
	case "job" attend labelFunc0432_0088:
	message("\"I sell meats here at the Farmer's Market in Britain.\"");
	say();
	UI_add_answer(["meats", "Farmer's Market"]);
labelFunc0432_0088:
	case "meats" attend labelFunc0432_00A2:
	message("\"They are the tastiest meats that thou canst buy. Do thyself a favor and try some.\"");
	say();
	UI_remove_answer("meats");
	UI_add_answer("buy");
labelFunc0432_00A2:
	case "Farmer's Market" attend labelFunc0432_00C2:
	message("\"Here at the Farmer's Market we sell vegetables bought from the farmers just outside of town, as well as meats from the slaughterhouse in Paws.\"");
	say();
	UI_remove_answer("Farmer's Market");
	UI_add_answer(["slaughterhouse", "Paws"]);
labelFunc0432_00C2:
	case "slaughterhouse" attend labelFunc0432_00E2:
	message("\"It is run by a man named Morfin, a very successful merchant from Buccaneer's Den.\"");
	say();
	UI_remove_answer("slaughterhouse");
	UI_add_answer(["Morfin", "Buccaneer's Den"]);
labelFunc0432_00E2:
	case "Morfin" attend labelFunc0432_00F5:
	message("\"Morfin is an unusual character. If I did not know any better I would say he was involved with a number of shady business activities.\"");
	say();
	UI_remove_answer("Morfin");
labelFunc0432_00F5:
	case "Buccaneer's Den" attend labelFunc0432_0108:
	message("\"Morfin left that place because he saw all of the commerce that was developing there as competition to his own business activities and moved to Paws.\"");
	say();
	UI_remove_answer("Buccaneer's Den");
labelFunc0432_0108:
	case "Paws" attend labelFunc0432_011B:
	message("\"Paws is a good place to go to buy things for low prices. Many of the people are rather poor, I am sorry to say. There is little active commerce there, however. In Paws, one must deal with people on a more personal level.\"");
	say();
	UI_remove_answer("Paws");
labelFunc0432_011B:
	case "buy" attend labelFunc0432_0160:
	if (!(!(var0002 == 0x0007))) goto labelFunc0432_0135;
	message("\"Thou must return when the Farmer's Market is open.\"");
	say();
	goto labelFunc0432_0159;
labelFunc0432_0135:
	message("\"Wouldst thou like to buy some meats?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0432_0155;
	message("\"We have a fine selection of meats for thee today, ");
	message(var0000);
	message(".\"");
	say();
	Func088C();
	goto labelFunc0432_0159;
labelFunc0432_0155:
	message("\"Come back when thou art hungry and we shall serve thee then.\"");
	say();
labelFunc0432_0159:
	UI_remove_answer("buy");
labelFunc0432_0160:
	case "bye" attend labelFunc0432_016B:
	goto labelFunc0432_016E;
labelFunc0432_016B:
	goto labelFunc0432_0059;
labelFunc0432_016E:
	endconv;
	message("\"Goodbye, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0432_0179:
	if (!(event == 0x0000)) goto labelFunc0432_0200;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCE));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc0432_01FA;
	if (!(var0004 == 0x0001)) goto labelFunc0432_01BD;
	var0005 = "@Get thy vegetables here!@";
labelFunc0432_01BD:
	if (!(var0004 == 0x0002)) goto labelFunc0432_01CD;
	var0005 = "@Get thy meats here!@";
labelFunc0432_01CD:
	if (!(var0004 == 0x0003)) goto labelFunc0432_01DD;
	var0005 = "@Eggs for sale!@";
labelFunc0432_01DD:
	if (!(var0004 == 0x0004)) goto labelFunc0432_01ED;
	var0005 = "@Best prices in Britannia!@";
labelFunc0432_01ED:
	UI_item_say(0xFFCE, var0005);
	goto labelFunc0432_0200;
labelFunc0432_01FA:
	Func092E(0xFFCE);
labelFunc0432_0200:
	return;
}


