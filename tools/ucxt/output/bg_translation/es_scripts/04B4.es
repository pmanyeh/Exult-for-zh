#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();

void Func04B4 object#(0x4B4) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04B4_027B;
	UI_show_npc_face(0xFF4C, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0239]) goto labelFunc04B4_003C;
	if (!(!gflags[0x0238])) goto labelFunc04B4_003C;
	UI_add_answer("Inamo");
labelFunc04B4_003C:
	if (!gflags[0x0004]) goto labelFunc04B4_0049;
	UI_add_answer("Moongates");
labelFunc04B4_0049:
	if (!(!gflags[0x0245])) goto labelFunc04B4_005B;
	message("You see an aged gargoyle, bent and withered, with a regal bearing. He smiles gently.");
	say();
	gflags[0x0245] = true;
	goto labelFunc04B4_005F;
labelFunc04B4_005B:
	message("\"To be good to see you again, old friend. To be needing Draxinusom again so soon?\"");
	say();
labelFunc04B4_005F:
	converse attend labelFunc04B4_0276;
	case "name" attend labelFunc04B4_007B:
	message("\"To have been many years. To be your old acquaintance, ");
	message(var0000);
	message(", Draxinusom.\"");
	say();
	UI_remove_answer("name");
labelFunc04B4_007B:
	case "job" attend labelFunc04B4_0094:
	message("\"To ask about Job? To be unable to say that I truly have one at this time. To notice how the young ones no longer look to me for guidance any more. To look more to Teregus, or, more often, to those in The Fellowship.\"");
	say();
	UI_add_answer(["Teregus", "Fellowship"]);
labelFunc04B4_0094:
	case "Terfin" attend labelFunc04B4_00AE:
	message("\"To be quite comfortable for our needs. To be, however, unfortunate that it was thought necessary to isolate us from the humans. To have engendered resentment and tension in our younger generations. To remember not the old days, my friend -- the days when we had to work together to survive.\" He smiles, reliving old memories, then shakes his head.~~\"To have had to give up many much when we moved.\"");
	say();
	UI_add_answer("give up");
	UI_remove_answer("Terfin");
labelFunc04B4_00AE:
	case "give up" attend labelFunc04B4_00D8:
	message("\"To have been many favorite possessions. To be too much trouble to move so much.\" He sighs.");
	say();
	if (!gflags[0x01E0]) goto labelFunc04B4_00D1;
	message("~\"To especially regret selling my Ethereal Ring.\"");
	say();
	UI_add_answer(["selling", "Ethereal Ring"]);
labelFunc04B4_00D1:
	UI_remove_answer("give up");
labelFunc04B4_00D8:
	case "Ethereal Ring" attend labelFunc04B4_00EB:
	message("\"Ah. To be, indeed, a lovely treasure. To have been quite useful. A shame to have been, really, to have had to sell it. To have been one of my favorites.\"");
	say();
	UI_remove_answer("Ethereal Ring");
labelFunc04B4_00EB:
	case "selling" attend labelFunc04B4_0105:
	message("\"To have sold most of my treasures when we were... uh... asked, shall to say, to move to the island. To have all happened rather quickly, you see. To have sold most to the Sultan of Spektran.\"");
	say();
	UI_add_answer("Sultan");
	UI_remove_answer("selling");
labelFunc04B4_0105:
	case "Sultan" attend labelFunc04B4_0129:
	message("\"To have seemed nice enough, for a human. To be a bit mad, he is, even for a human. To tell you he lives on an island just to the west of us. To know, at least, that my prized possessions would be safe in his hands.\"");
	say();
	UI_add_answer("safe");
	gflags[0x023B] = true;
	Func0911(0x0032);
	UI_remove_answer("Sultan");
labelFunc04B4_0129:
	case "safe" attend labelFunc04B4_013C:
	message("He nods his head. \"To be rumored to have one of the best-guarded vaults in all of Britannia. To be supposedly enchanted. To know not details.\"");
	say();
	UI_remove_answer("safe");
labelFunc04B4_013C:
	case "Inamo" attend labelFunc04B4_017E:
	UI_remove_answer("Inamo");
	message("\"To be a fine young gargoyle. To have been raised by Teregus, keeper of the altars. To have left town because of the tension between the altar worshippers and The Fellowship. To have been angry and distrustful of The Fellowship. To have news of him?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04B4_017A;
	message("\"To be excellent! To have seen him? To know how he is faring? To be well?\"");
	say();
	gflags[0x0238] = true;
	UI_push_answers();
	UI_add_answer(["murdered", "not well", "well"]);
	goto labelFunc04B4_017E;
labelFunc04B4_017A:
	message("\"Ah. To be too bad. To tell you Teregus wanted to know how he was doing.\"");
	say();
labelFunc04B4_017E:
	case "well" attend labelFunc04B4_018E:
	message("\"To be very good. To know Teregus will be pleased to learn that, as well!\"");
	say();
	UI_pop_answers();
labelFunc04B4_018E:
	case "murdered" attend labelFunc04B4_019E:
	message("\"To be terrible news! To have been such a fine gargoyle. To know Teregus will be heartbroken. To be wishing not for him to grieve, but to take to him the news immediately. To be better to hear it from you.\"");
	say();
	UI_pop_answers();
labelFunc04B4_019E:
	case "Moongates" attend labelFunc04B4_01B1:
	message("\"Mine own Orb of the Moons exploded recently! To no longer be able to travel via Moongates. To be strange!\"");
	say();
	UI_remove_answer("Moongates");
labelFunc04B4_01B1:
	case "not well" attend labelFunc04B4_01C1:
	message("\"To be a shame. To be taking the news to Teregus of his youngling. To be wondering why we had not heard from Inamo recently.\"");
	say();
	UI_pop_answers();
labelFunc04B4_01C1:
	case "Teregus" attend labelFunc04B4_01EA:
	message("\"To be truly a fine young gargoyle. To be one of the most sensible, too. To have seen fit to adhere to the old ways, the ways of the altars. To see that some of the youngest still look up to him, but the majority seem to have been wooed away by the glamor of The Fellowship.\"");
	say();
	if (!(!gflags[0x0238])) goto labelFunc04B4_01E3;
	message("\"To tell you that his weanling, Inamo, is in Trinsic at this time.\"");
	say();
	gflags[0x0239] = true;
	UI_add_answer("Inamo");
labelFunc04B4_01E3:
	UI_remove_answer("Teregus");
labelFunc04B4_01EA:
	case "Fellowship" attend labelFunc04B4_020A:
	message("\"To know not what to think of them and their tenets. To seem not dangerous, but not to be following the old ways, the ways of Passion, Diligence, and Control. To feign worship to the shrines here in Terfin, of course, especially to Control, but not yet to trust them. To wait and see. To have forceful leaders who espouse doctrines of submission.\" He shrugs.~~\"To be genuinely inspired, perhaps, and perhaps not.\"");
	say();
	UI_add_answer(["Terfin", "leaders"]);
	UI_remove_answer("Fellowship");
labelFunc04B4_020A:
	case "leaders" attend labelFunc04B4_022A:
	message("\"To inform you that The Fellowship is directed by two winged brethren. To be called Runeb and Quan.\"");
	say();
	UI_add_answer(["Runeb", "Quan"]);
	UI_remove_answer("leaders");
labelFunc04B4_022A:
	case "Runeb" attend labelFunc04B4_0255:
	message("\"To mean, in your language, `Red Mist'. To have been given that name because that is all he leaves behind of an adversary in battle. Before his conversion by The Fellowship, to have been known as a particularly cruel and dangerous gargoyle.\"");
	say();
	var0002 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0002) goto labelFunc04B4_024E;
	message("\"To be gone -- dead -- now.\"");
	say();
labelFunc04B4_024E:
	UI_remove_answer("Runeb");
labelFunc04B4_0255:
	case "Quan" attend labelFunc04B4_0268:
	message("\"Ah, to be an interesting one. To be a strong, powerful personality, to be from one of the families most able to claim noble lineage in our society. To have been always most self-serving, striving only to gain status and wealth for himself. To have certainly changed his tune since joining The Fellowship. To have my doubts, however, that his goals have changed as well.\"");
	say();
	UI_remove_answer("Quan");
labelFunc04B4_0268:
	case "bye" attend labelFunc04B4_0273:
	goto labelFunc04B4_0276;
labelFunc04B4_0273:
	goto labelFunc04B4_005F;
labelFunc04B4_0276:
	endconv;
	message("\"To bid farewell, old friend. To not be hesitating to return if there is aught else I can do for you. To be lonely here now for an old gargoyle dedicated to the ancient ways...\"*");
	say();
labelFunc04B4_027B:
	if (!(event == 0x0000)) goto labelFunc04B4_0284;
	abort;
labelFunc04B4_0284:
	return;
}


