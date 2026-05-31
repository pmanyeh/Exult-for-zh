#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04E3 object#(0x4E3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04E3_020D;
	UI_show_npc_face(0xFF1D, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_get_npc_object(0xFF1D);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x02A7]) goto labelFunc04E3_004C;
	if (!gflags[0x02A5]) goto labelFunc04E3_004C;
	UI_add_answer("He misses thee");
labelFunc04E3_004C:
	if (!(!gflags[0x02B0])) goto labelFunc04E3_005E;
	message("You see an aging pirate who might have looked extremely dangerous at one time.");
	say();
	gflags[0x02B0] = true;
	goto labelFunc04E3_0062;
labelFunc04E3_005E:
	message("\"What is it?\" Mole asks.");
	say();
labelFunc04E3_0062:
	converse attend labelFunc04E3_0208;
	case "name" attend labelFunc04E3_007F:
	message("\"My name be Mole, it be! Do not ask me how I came by it. 'Tis a long story.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("story");
labelFunc04E3_007F:
	case "job" attend labelFunc04E3_0098:
	message("\"For years and years I roamed the seas, pillaging and raping and terrorizing. Now that I am past the age of fifty, I want to live the rest of my life in relative peace and quiet here on Buccaneer's Den.\"");
	say();
	UI_add_answer(["peace and quiet", "Buccaneer's Den"]);
labelFunc04E3_0098:
	case "story" attend labelFunc04E3_00EE:
	message("\"Thou dost really want to hear it? 'Tis very long.\"");
	say();
	if (!Func090A()) goto labelFunc04E3_00DF;
	message("\"All right. I was born in a cave. So my mother named me Mole.\"*");
	say();
	var0003 = Func08F7(0xFFFF);
	if (!var0003) goto labelFunc04E3_00DC;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"I thought thou said it was a long story.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF1D, 0x0000);
labelFunc04E3_00DC:
	goto labelFunc04E3_00E3;
labelFunc04E3_00DF:
	message("\"Very well. How 'bout if I just say that I was born in a cave, so my mother named me Mole.\"");
	say();
labelFunc04E3_00E3:
	message("Mole shrugs. \"I thought I would make a long story short.\"");
	say();
	UI_remove_answer("story");
labelFunc04E3_00EE:
	case "peace and quiet" attend labelFunc04E3_0101:
	message("\"It is a good life. I grew weary of pirating. I grew weary of the salt water and the raw meat and the sewage on deck and the parrot droppings and the fact that every other word one heard was 'Har!'\"");
	say();
	UI_remove_answer("peace and quiet");
labelFunc04E3_0101:
	case "Buccaneer's Den" attend labelFunc04E3_011B:
	message("\"I spend my time at the House of Games or the Fallen Virgin. I love the sound of the die as it bounces against the felt. I love the taste of warm ale as it splashes down my throat! And... I have The Fellowship.\"");
	say();
	UI_remove_answer("Buccaneer's Den");
	UI_add_answer("Fellowship");
labelFunc04E3_011B:
	case "Fellowship" attend labelFunc04E3_0149:
	message("\"The group has given me a new lease on life. I thought I had mates when I was an active pirate, but they were nothing compared to my brothers in The Fellowship.");
	say();
	if (!var0001) goto labelFunc04E3_0131;
	message("\"Say, I see that thou art a member! Thou must be of sound character!");
	say();
labelFunc04E3_0131:
	message("\"Mine old mates, like my friend Blacktooth, have fallen by the wayside.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer(["Blacktooth", "mates"]);
labelFunc04E3_0149:
	case "Blacktooth" attend labelFunc04E3_015C:
	message("\"Blacktooth lives here on the island. We used to be the same link on a chain, knowest what I mean? But since I joined The Fellowship, he does not give me the shadow of a sundial! He acts as though I had the plague or something. I do not understand it. Makes me want to cut something up into mincemeat!\"");
	say();
	UI_remove_answer("Blacktooth");
labelFunc04E3_015C:
	case "mates" attend labelFunc04E3_0176:
	message("\"Blacktooth was like my brother. Not like my brothers in The Fellowship, but a 'real' brother, knowest what I mean? We did 'everything' together. We would share booty! We would share wenches! We did it all!\"");
	say();
	UI_remove_answer("mates");
	UI_add_answer("brother");
labelFunc04E3_0176:
	case "brother" attend labelFunc04E3_0196:
	message("\"Well, he is not a brother now! He hates me! If he wants nothing to do with me, so be it!\" But Mole quickly adds, \"He does not realize what I did for him. I made his life livable! Who was it that nursed him when he had scurvy? Me! Who was it that patched him up when he was sliced to bits by that butcher Silverbeard? Me!\"");
	say();
	UI_remove_answer("brother");
	UI_add_answer(["life", "Silverbeard"]);
labelFunc04E3_0196:
	case "Silverbeard" attend labelFunc04E3_01A9:
	message("\"Oh, he was some old pirate with a temper. He's probably dead now, if he knows what's good for him!\"");
	say();
	UI_remove_answer("Silverbeard");
labelFunc04E3_01A9:
	case "life" attend labelFunc04E3_01DC:
	message("\"Yes, it was a different life in those days...\" Mole reflects on some past memory as his eyes glaze over temporarily. Finally he says, \"I may have dwelt too strongly on my Fellowship business. Perhaps I pushed him too hard. I am sorry. If he would give me another chance I would probably leave The Fellowship. They are not as wonderful as I made them sound. They are more crooked than the pirates I used to sail with!\" Mole frowns. \"Thou hast put me in a foul mood.\"");
	say();
	UI_remove_answer("life");
	gflags[0x02A7] = true;
	if (!gflags[0x02A5]) goto labelFunc04E3_01D7;
	UI_add_answer("He misses thee");
	UI_remove_answer("life");
	goto labelFunc04E3_01DC;
labelFunc04E3_01D7:
	message("*");
	say();
	abort;
labelFunc04E3_01DC:
	case "He misses thee" attend labelFunc04E3_01FA:
	message("You tell Mole what Blacktooth said. A change comes over the salty pirate, as if you had just given him a bouquet of flowers.~~\"Thou must be kidding me! Blackie misses me? I thought he hated mine innards! I shall have to go for a little walk and maybe I will run across that old dog! I thank thee, stranger, for imparting this information to me.\"~~With that, Mole turns away from you, doing a little jaunt.*");
	say();
	UI_remove_answer("He misses thee");
	UI_set_schedule_type(var0002, 0x000C);
	abort;
labelFunc04E3_01FA:
	case "bye" attend labelFunc04E3_0205:
	goto labelFunc04E3_0208;
labelFunc04E3_0205:
	goto labelFunc04E3_0062;
labelFunc04E3_0208:
	endconv;
	message("\"Goodbye, stranger.\"*");
	say();
labelFunc04E3_020D:
	if (!(event == 0x0000)) goto labelFunc04E3_028D;
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFF1D));
	if (!(var0004 == 0x000B)) goto labelFunc04E3_0287;
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0001)) goto labelFunc04E3_024A;
	var0006 = "@Har!@";
labelFunc04E3_024A:
	if (!(var0005 == 0x0002)) goto labelFunc04E3_025A;
	var0006 = "@Avast!@";
labelFunc04E3_025A:
	if (!(var0005 == 0x0003)) goto labelFunc04E3_026A;
	var0006 = "@Blast!@";
labelFunc04E3_026A:
	if (!(var0005 == 0x0004)) goto labelFunc04E3_027A;
	var0006 = "@Damn parrot droppings...@";
labelFunc04E3_027A:
	UI_item_say(0xFF1D, var0006);
	goto labelFunc04E3_028D;
labelFunc04E3_0287:
	Func092E(0xFF1D);
labelFunc04E3_028D:
	return;
}


