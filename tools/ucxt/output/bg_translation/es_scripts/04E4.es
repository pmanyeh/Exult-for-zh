#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08B6 0x8B6 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func04E4 object#(0x4E4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04E4_0116;
	UI_show_npc_face(0xFF1C, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1C));
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02B1])) goto labelFunc04E4_0049;
	message("You see a man whose sinewy body is like steel. The glint in his eye tells you that he is no fool.");
	say();
	gflags[0x02B1] = true;
	goto labelFunc04E4_004D;
labelFunc04E4_0049:
	message("\"What dost thou want with Lucky?\" the pirate asks.");
	say();
labelFunc04E4_004D:
	converse attend labelFunc04E4_0111;
	case "name" attend labelFunc04E4_0063:
	message("\"I am Lucky... in all things.\"");
	say();
	UI_remove_answer("name");
labelFunc04E4_0063:
	case "job" attend labelFunc04E4_007C:
	message("\"I make my living off the world! It gives... and I take!\" The pirate laughs boisterously. \"I am a worldly gentleman, friends -- that is my 'job'! Oh, and I train initiates for a bit of pocket change.\"");
	say();
	UI_add_answer(["world", "train"]);
labelFunc04E4_007C:
	case "world" attend labelFunc04E4_009C:
	message("\"The ways of the world, is what I mean. I am a man of the road; I am a seasoned traveller. I travel through the world as a hundred different men.\"");
	say();
	UI_add_answer(["traveller", "different"]);
	UI_remove_answer("world");
labelFunc04E4_009C:
	case "traveller" attend labelFunc04E4_00AF:
	message("\"In truth there are few places where I have not been and little that I have not done.\"");
	say();
	UI_remove_answer("traveller");
labelFunc04E4_00AF:
	case "different" attend labelFunc04E4_00C2:
	message("\"Thou canst be a different person just by assumption. 'Tis an attitude. I am an expert in the art of charismatic communication for the purposes of deception. It gives one many skills. For example, I can walk into any shop and make a purchase. But I will walk away with much more than I bought, for I know how to fool the shopkeeper. Little things like that.\"");
	say();
	UI_remove_answer("different");
labelFunc04E4_00C2:
	case "train" attend labelFunc04E4_0103:
	if (!(var0001 == 0x0007)) goto labelFunc04E4_00F8;
	message("\"I charge 35 gold for a training session. Doth this meet with thine approval?\"");
	say();
	if (!Func090A()) goto labelFunc04E4_00EA;
	Func08B6(0x0002, 0x0023);
	goto labelFunc04E4_00F5;
labelFunc04E4_00EA:
	message("Lucky shrugs. \"Thou wilt not find another trainer on the island!\"");
	say();
	UI_remove_answer("train");
labelFunc04E4_00F5:
	goto labelFunc04E4_0103;
labelFunc04E4_00F8:
	message("\"I shall be happy to show thee my ways of the world during normal business hours at my residence -- afternoons and evenings.\"");
	say();
	UI_remove_answer("train");
labelFunc04E4_0103:
	case "bye" attend labelFunc04E4_010E:
	goto labelFunc04E4_0111;
labelFunc04E4_010E:
	goto labelFunc04E4_004D;
labelFunc04E4_0111:
	endconv;
	message("\"Be careful, my friend.\"*");
	say();
labelFunc04E4_0116:
	if (!(event == 0x0000)) goto labelFunc04E4_0196;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1C));
	if (!(var0001 == 0x000B)) goto labelFunc04E4_0190;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc04E4_0153;
	var0003 = "@Har!@";
labelFunc04E4_0153:
	if (!(var0002 == 0x0002)) goto labelFunc04E4_0163;
	var0003 = "@Avast!@";
labelFunc04E4_0163:
	if (!(var0002 == 0x0003)) goto labelFunc04E4_0173;
	var0003 = "@Blast!@";
labelFunc04E4_0173:
	if (!(var0002 == 0x0004)) goto labelFunc04E4_0183;
	var0003 = "@Damn parrot droppings...@";
labelFunc04E4_0183:
	UI_item_say(0xFF1C, var0003);
	goto labelFunc04E4_0196;
labelFunc04E4_0190:
	Func092E(0xFF1C);
labelFunc04E4_0196:
	return;
}


