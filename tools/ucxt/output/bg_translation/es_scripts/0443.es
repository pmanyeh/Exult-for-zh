#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0854 0x854 ();
extern void Func092E 0x92E (var var0000);

void Func0443 object#(0x443) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0443_0147;
	UI_show_npc_face(0xFFBD, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x0072] == true)) goto labelFunc0443_0031;
	UI_add_answer("mutton");
labelFunc0443_0031:
	if (!(!gflags[0x00C4])) goto labelFunc0443_0043;
	message("This is an elderly woman who epitomizes 'grandmotherly'.");
	say();
	gflags[0x00C4] = true;
	goto labelFunc0443_0047;
labelFunc0443_0043:
	message("\"Hello, again!\" Boots says.");
	say();
labelFunc0443_0047:
	converse attend labelFunc0443_0142;
	case "name" attend labelFunc0443_005D:
	message("\"All my brothers and sisters called me 'Boots' when I was a baby, and it hath remained my name ever since.\"");
	say();
	UI_remove_answer("name");
labelFunc0443_005D:
	case "job" attend labelFunc0443_0070:
	message("\"Why, I am Lord British's personal cook! I prepare meals for the entire castle.\"");
	say();
	UI_add_answer("meals");
labelFunc0443_0070:
	case "meals" attend labelFunc0443_0093:
	message("\"Just go to the dining room at breakfast or supper time and mine husband Bennie will serve thee!\"");
	say();
	UI_add_answer(["breakfast", "supper", "Bennie"]);
	UI_remove_answer("meals");
labelFunc0443_0093:
	case "breakfast" attend labelFunc0443_00A6:
	message("\"For breakfast I usually prepare a dish that my Liege brought with him from his homeland. Here we call it Eggs British. It is served with assorted fruits and tea, of course. It is the King's favorite.\"");
	say();
	UI_remove_answer("breakfast");
labelFunc0443_00A6:
	case "supper" attend labelFunc0443_00B9:
	message("\"This meal is usually whatever meat or game or fish Lord British requests, accompanied by several additional courses and a fine dessert.\"");
	say();
	UI_remove_answer("supper");
labelFunc0443_00B9:
	case "Bennie" attend labelFunc0443_00DD:
	message("\"He's a dear, but he has become a little absent-minded in his later years. He never remembers to bring enough meat from the slaughterhouse in Paws. In fact, we are short this week!\"");
	say();
	UI_add_answer(["absent-minded", "short"]);
	UI_remove_answer("Bennie");
	gflags[0x0071] = true;
labelFunc0443_00DD:
	case "absent-minded" attend labelFunc0443_00F0:
	message("\"Last week I asked him to put a little garlic into some soup. He put in the garlic and then forgot about it. So he went and put some more in. Then he forgot he did that. So he put in more. Well, thou canst imagine the look on Lord British's face when he finally did taste that soup! It is a good thing we live and work in the castle of such a just ruler.\"");
	say();
	UI_remove_answer("absent-minded");
labelFunc0443_00F0:
	case "short" attend labelFunc0443_011E:
	message("\"That is right, we do not have enough. If thou couldst bring me mutton from the slaughterhouse, I will pay thee 5 gold for every portion thou canst bring. All right?\"");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0443_0113;
	message("\"Good, I will be awaiting thy return!\"");
	say();
	gflags[0x0072] = true;
	goto labelFunc0443_0117;
labelFunc0443_0113:
	message("\"Oh dear. Well, I know thou art busy. Some other time, then.\"");
	say();
labelFunc0443_0117:
	UI_remove_answer("short");
labelFunc0443_011E:
	case "mutton" attend labelFunc0443_0134:
	message("\"Splendid! Let's see, we agreed on 5 gold per portion, if I remember correctly.\"");
	say();
	Func0854();
	UI_remove_answer("mutton");
labelFunc0443_0134:
	case "bye" attend labelFunc0443_013F:
	goto labelFunc0443_0142;
labelFunc0443_013F:
	goto labelFunc0443_0047;
labelFunc0443_0142:
	endconv;
	message("\"Bye now!\"*");
	say();
labelFunc0443_0147:
	if (!(event == 0x0000)) goto labelFunc0443_0155;
	Func092E(0xFFBD);
labelFunc0443_0155:
	return;
}


