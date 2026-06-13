#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func0879 0x879 (var var0000, var var0001, var var0002);
extern void Func092E 0x92E (var var0000);

void Func04A2 object#(0x4A2) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04A2_01EC;
	UI_show_npc_face(0xFF5E, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0204])) goto labelFunc04A2_003C;
	message("The man looks at you through smiling eyes.");
	say();
	goto labelFunc04A2_0040;
labelFunc04A2_003C:
	message("Elad bows in your direction.~\"My pleasure to see thee again.\"");
	say();
labelFunc04A2_0040:
	converse attend labelFunc04A2_01DB;
	case "name" attend labelFunc04A2_005C:
	message("\"Elad is my name, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc04A2_005C:
	case "job" attend labelFunc04A2_0078:
	message("\"I am the healer of the residents of this community.\"");
	say();
	UI_add_answer(["residents", "heal", "community"]);
labelFunc04A2_0078:
	case "community" attend labelFunc04A2_00A4:
	message("\"Moonglow is mine home. I have lived in this town for mine entire life. But I am weary of my life here. 'Tis time, I think, to move on. If only I did not have such strong ties here.\"~He sighs sadly.");
	say();
	if (!(!gflags[0x01ED])) goto labelFunc04A2_0096;
	message("\"There is a traveller visiting from Yew. He has seen many exciting things in Britannia. I enjoy listening to his many tales of adventure.\"");
	say();
	UI_add_answer("traveller");
labelFunc04A2_0096:
	UI_add_answer("ties");
	UI_remove_answer("community");
labelFunc04A2_00A4:
	case "traveller" attend labelFunc04A2_00B7:
	message("\"His name is Addom. While he is in town, I am letting him stay in one of my beds.\"");
	say();
	UI_remove_answer("traveller");
labelFunc04A2_00B7:
	case "heal" attend labelFunc04A2_00D1:
	message("\"Yes, I sell mine healing services to those who need them.\"");
	say();
	UI_add_answer("services");
	UI_remove_answer("heal");
labelFunc04A2_00D1:
	case "services" attend labelFunc04A2_011C:
	var0002 = UI_part_of_day();
	if (!((var0002 == 0x0002) || ((var0002 == 0x0003) || ((var0002 == 0x0004) || (var0002 == 0x0006))))) goto labelFunc04A2_0111;
	Func0879(0x0019, 0x000A, 0x01A9);
	goto labelFunc04A2_0115;
labelFunc04A2_0111:
	message("\"Perhaps thou couldst come for healing when I am working in my shop.\"");
	say();
labelFunc04A2_0115:
	UI_remove_answer("services");
labelFunc04A2_011C:
	case "ties" attend labelFunc04A2_012F:
	message("\"My patients here in Moonglow. Who will help them if not I?\"");
	say();
	UI_remove_answer("ties");
labelFunc04A2_012F:
	case "residents" attend labelFunc04A2_015B:
	message("\"There are many people in Moonglow. My father once told me that the town was much smaller during his time. In fact, he said that Moonglow used to be separate from the Lycaeum!~~\"But, I digress. Thou didst ask about the people. I know most of the residents here. Dost thou want to know about the Lycaeum, the observatory, The Fellowship, the farmers, the trainer, or the tavern?\"");
	say();
	UI_add_answer(["Lycaeum", "observatory", "Fellowship", "farmers", "trainer", "tavern"]);
	UI_remove_answer("residents");
labelFunc04A2_015B:
	case "Lycaeum" attend labelFunc04A2_016E:
	message("\"The Lycaeum is run by a kind man named Nelson. His advisor is Zelda. Do not break any rules in her presence or thou wilt receive a sharp reprimand!~\"Jillian also studies there. She can teach thee many things. And do not worry about Mariah. She is harmless if thou wilt but leave her be.\"");
	say();
	UI_remove_answer("Lycaeum");
labelFunc04A2_016E:
	case "observatory" attend labelFunc04A2_0181:
	message("\"The head there is Brion. He is the twin of the head of the Lycaeum. I like him, although he and his brother are both a little eccentric.\"");
	say();
	UI_remove_answer("observatory");
labelFunc04A2_0181:
	case "Fellowship" attend labelFunc04A2_0194:
	message("\"I know these people least of all. The branch opened here about five years ago under the direction of a man named Rankin. A few months ago, a clerk joined him. Her name is Balayna.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc04A2_0194:
	case "farmers" attend labelFunc04A2_01A7:
	message("\"Cubolt owns the farm. He manages it with his younger brother Tolemac and their friend Morz. I am not positive, but I believe Tolemac recently joined The Fellowship.\"");
	say();
	UI_remove_answer("farmers");
labelFunc04A2_01A7:
	case "tavern" attend labelFunc04A2_01BA:
	message("\"Phearcy tends the bar there. He is another good person with whom thou shouldst speak about the townspeople. However, he enjoys gossip, and may be a bit single-minded.\"");
	say();
	UI_remove_answer("tavern");
labelFunc04A2_01BA:
	case "trainer" attend labelFunc04A2_01CD:
	message("\"The trainer is named Chad. I believe he specializes in swift, skillful fighting, with knives and swords and such. See him if thou wishest to improve thy skills.\"");
	say();
	UI_remove_answer("trainer");
labelFunc04A2_01CD:
	case "bye" attend labelFunc04A2_01D8:
	goto labelFunc04A2_01DB;
labelFunc04A2_01D8:
	goto labelFunc04A2_0040;
labelFunc04A2_01DB:
	endconv;
	message("\"Leaving so soon, ");
	message(var0001);
	message("? Very well, may thy journeys be filled with prosperity.\"~He sighs. Suddenly, his face brightens.~ \"Wait! Perhaps I could join thee?\"~He quickly stands up, smiling. Then, just as suddenly, his smile fades.~\"No. I cannot. I have far too many things to do, too many people to care for. Perhaps in the future?\"~He forces a smile.~\"I hope when we meet next time, ");
	message(var0001);
	message(", I will have the opportunity to join thee. Pleasant journey, my friend.\"*");
	say();
labelFunc04A2_01EC:
	if (!(event == 0x0000)) goto labelFunc04A2_01FA;
	Func092E(0xFF5E);
labelFunc04A2_01FA:
	return;
}


