#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0826 0x826 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern void Func0827 0x827 ();
extern void Func08FF 0x8FF ();

void Func040F object#(0x40F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	var0004 = false;
	var0005 = UI_find_nearby(0xFFF1, 0x02E3, 0x001E, 0x0000);
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc040F_004C;
	var0003 = "day";
	goto labelFunc040F_0052;
labelFunc040F_004C:
	var0003 = "evening";
labelFunc040F_0052:
	if (!(event == 0x000A)) goto labelFunc040F_005E;
	Func0826(event);
labelFunc040F_005E:
	if (!(event == 0x0001)) goto labelFunc040F_0094;
	UI_item_say(0xFE9C, "@Hello!@");
	0xFFF1->Func07D1();
	Func097F(0xFFF1, (("@Good " + var0003) + ".@"), 0x0002);
	UI_set_schedule_type(0xFFF1, 0x0003);
labelFunc040F_0094:
	if (!(event == 0x0009)) goto labelFunc040F_0635;
	UI_run_schedule(0xFFF1);
	UI_clear_item_say(0xFFF1);
	UI_show_npc_face0(0xFFF1, 0x0000);
	var0006 = UI_get_item_flag(0xFFF1, 0x001C);
	if (!(var0006 == false)) goto labelFunc040F_00E1;
	message("\"I am Ducio, the Master Artisan.\"");
	say();
	UI_set_item_flag(0xFFF1, 0x001C);
	UI_add_answer("Master Artisan");
	goto labelFunc040F_0100;
labelFunc040F_00E1:
	if (!gflags[0x0004]) goto labelFunc040F_00F5;
	message("\"Thou art alive! Thou hast survived the holocaust! So many are dead...\"");
	say();
	UI_add_answer("holocaust");
	goto labelFunc040F_0100;
labelFunc040F_00F5:
	message("\"Welcome back...\"");
	say();
	UI_add_answer("Master Artisan");
labelFunc040F_0100:
	if (!var0005) goto labelFunc040F_0114;
	message("\"What is thy business?\"");
	say();
	UI_add_answer("business");
	goto labelFunc040F_0118;
labelFunc040F_0114:
	message("\"How may I be of use to thee?\"");
	say();
labelFunc040F_0118:
	if (!(gflags[0x0234] && (!gflags[0x00CE]))) goto labelFunc040F_012A;
	UI_add_answer("Daemon Sword");
labelFunc040F_012A:
	if (!(gflags[0x0111] && (!gflags[0x028F]))) goto labelFunc040F_013C;
	UI_add_answer("apparatus");
labelFunc040F_013C:
	if (!(gflags[0x0268] == true)) goto labelFunc040F_014B;
	UI_add_answer("Worm Gem");
labelFunc040F_014B:
	if (!(gflags[0x0113] && (!gflags[0x0291]))) goto labelFunc040F_015D;
	UI_add_answer("lost ring");
labelFunc040F_015D:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc040F_0176;
	UI_add_answer("kidnap");
labelFunc040F_0176:
	UI_add_answer(["bye"]);
labelFunc040F_0180:
	converse attend labelFunc040F_0634;
	case "kidnap" attend labelFunc040F_01A7:
	UI_remove_answer("kidnap");
	message("\"Do not involve me in such matters, stranger! Canst thou not see that I am a Mundane?\"");
	say();
	message("\"This matter smacks of wizardry, and I want no part of it!\"");
	say();
	Func097F(0xFFF1, "@No part!@", 0x0000);
	abort;
labelFunc040F_01A7:
	case "holocaust" attend labelFunc040F_01BA:
	UI_remove_answer("holocaust");
	message("\"Thy companion Shamino did return to this place, and he was in a killing rage. Despite all efforts to stop him, he did murder everyone in our town, save for Torrissio, Andrio and myself.\"");
	say();
labelFunc040F_01BA:
	case "Master Artisan" attend labelFunc040F_01F2:
	UI_remove_answer("Master Artisan");
	if (!gflags[0x0004]) goto labelFunc040F_01D6;
	message("\"I have the talented hands that come from a long line of craftsmen. But I live in a world with no one but the dead to create for! A most funny joke, no?!\"");
	say();
	goto labelFunc040F_01F2;
labelFunc040F_01D6:
	message("\"I have an apprentice. I have automatons to help the work progress. That makes me a Master.\"");
	say();
	message("\"I am able to create or repair anything. I make what the Mages need. That makes me an Artisan.\"");
	say();
	message("\"If thou hast need of the Master, ask me. If not, ask Topo.\"");
	say();
	UI_add_answer(["automatons", "anything", "Topo"]);
labelFunc040F_01F2:
	case "automatons" attend labelFunc040F_020C:
	UI_remove_answer("automatons");
	message("\"One that bakes. One that sews. One that smiths. All from Torrissio. They work hard... do not talk back like Topo.\"");
	say();
	UI_add_answer("Torrissio");
labelFunc040F_020C:
	case "Torrissio" attend labelFunc040F_0230:
	UI_remove_answer("Torrissio");
	message("\"Torrissio is an Adept. He makes automaton guards and servants. He does good work... almost like a Master Artisan. But he needs magic to make everything work.\"");
	say();
	message("\"I gave him a good deal on the metal he needs. Now I've got three hard workers made of metal. Not a bad deal.\"");
	say();
	UI_add_answer(["magic", "deal"]);
labelFunc040F_0230:
	case "magic" attend labelFunc040F_0252:
	UI_remove_answer("magic");
	message("\"Torrissio doth not ask about my work. I do not ask about his.\"");
	say();
	message("\"All I know is that his spells are old. Not anything created by these Mages.\"");
	say();
	message("\"Thou wishest to ask more, ask Torrissio... If he will speak with thee.\"");
	say();
	UI_add_answer("old");
labelFunc040F_0252:
	case "old" attend labelFunc040F_026C:
	UI_remove_answer("old");
	message("\"Very old. Maybe as old as the Serpent ruins, maybe not. I'm not a Mage.\"");
	say();
	UI_add_answer("Serpent Ruins");
labelFunc040F_026C:
	case "Serpent Ruins" attend labelFunc040F_0294:
	UI_remove_answer("Serpent Ruins");
	message("\"What dost thou think I am, a teacher like Fedabiblio?!\"");
	say();
	message("\"If thou wishest a history lesson, go to him like any novice. If thou wishest the work of a Master Artisan, stay.\"");
	say();
	message("\"I do not have time for such questions!\"");
	say();
	UI_add_answer(["Fedabiblio", "novice"]);
labelFunc040F_0294:
	case "Fedabiblio" attend labelFunc040F_02A7:
	UI_remove_answer("Fedabiblio");
	message("\"Fedabiblio teaches the young mages. He keeps the library of magic. He knows the history. Speak to him, do not bother me!\"");
	say();
labelFunc040F_02A7:
	case "novice" attend labelFunc040F_02BA:
	UI_remove_answer("novice");
	message("\"If thou seekest knowledge, thou art a novice. One who seeks to be taught. I am a Master. I do not teach. I do not need teaching. I am not a novice.\"");
	say();
labelFunc040F_02BA:
	case "deal" attend labelFunc040F_02D1:
	UI_remove_answer("deal");
	message("\"Art thou a Master?\"");
	say();
	message("\"No. Then do not ask what deal I give to others. Bad manners.\"");
	say();
labelFunc040F_02D1:
	case "anything" attend labelFunc040F_02F5:
	UI_remove_answer("anything");
	message("\"If the Mages can speak plain enough to explain what they need, I can make it.\"");
	say();
	message("\"Magical apparatus. Swords. Whatever. I can make it. They enchant it. 'Tis fair.\"");
	say();
	UI_add_answer(["Magical apparatus", "Swords"]);
labelFunc040F_02F5:
	case "Magical apparatus" attend labelFunc040F_0322:
	UI_remove_answer("Magical apparatus");
	message("\"I make all the apparatus for the Mages. All different. Every Mage wants something a little different than the next.\"");
	say();
	message("\"I can tell thee who a piece belongs to just by looking at it. I remember everything I've made.\"");
	say();
	message("\"Dost thou have something thou wishest me to look at?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc040F_031E;
	goto labelFunc040F_032A;
	goto labelFunc040F_0322;
labelFunc040F_031E:
	message("\"Fine.\"");
	say();
labelFunc040F_0322:
	case "apparatus" attend labelFunc040F_0384:
labelFunc040F_032A:
	UI_remove_answer("apparatus");
	if (!var0005) goto labelFunc040F_0380;
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc040F_0362;
	message("\"Hmmmm. This is a piece of lab apparatus that the mages use. In fact, this one was one of my first masterpieces. I thought it had been destroyed.\"");
	say();
	message("\"I might ask how thou didst come by this. But I won't. I do not want to know. Vasculio hath been dead for years...\"");
	say();
	var0007 = true;
	UI_add_answer("Vasculio");
	goto labelFunc040F_037D;
labelFunc040F_0362:
	message("\"Thou hast no such object! Do not waste my time, for I am a busy man...\"");
	say();
	Func097F(0xFFF1, "@Must work...@", 0x0000);
	UI_set_schedule_type(0xFFF1, 0x0014);
	abort;
labelFunc040F_037D:
	goto labelFunc040F_0384;
labelFunc040F_0380:
	message("\"If thou wouldst bring the object to my shop, I would be glad to examine it there. I do not have my tools with me now.\"");
	say();
labelFunc040F_0384:
	case "Vasculio" attend labelFunc040F_03A8:
	UI_remove_answer("Vasculio");
	message("\"Not good, that one. Sought to reach beyond life and rule death. Not good.\"");
	say();
	message("\"The Council killed him years ago. I thought they had destroyed all his equipment after they found the grave empty... But mayhaps Ensorcio took it.\"");
	say();
	UI_add_answer(["grave empty", "Ensorcio"]);
labelFunc040F_03A8:
	case "grave empty" attend labelFunc040F_03BF:
	UI_remove_answer("grave empty");
	message("\"They say he rose from the dead. They think he is looking for revenge.\"");
	say();
	message("\"I think the Council secretly decided to burn him. No one can bring back the dead from ashes.\"");
	say();
labelFunc040F_03BF:
	case "Ensorcio" attend labelFunc040F_03D6:
	UI_remove_answer("Ensorcio");
	message("\"Ensorcio was Vasculio's apprentice. Too much like his Master, that one.\"");
	say();
	message("\"Exiled now. Hear he spends his time drinking away his sorrows on another island.\"");
	say();
labelFunc040F_03D6:
	case "Swords" attend labelFunc040F_03ED:
	UI_remove_answer("Swords");
	message("\"Do not have much call for them. Not magic ones anyway. But I have made a few.\"");
	say();
	message("\"Unless it is a special order, mine automaton makes it. For something non-magic, talk to Topo. If it's magic, talk to me.\"");
	say();
labelFunc040F_03ED:
	case "Topo" attend labelFunc040F_0408:
	UI_remove_answer("Topo");
	message("\"Mine apprentice. Scrawny boy. Large ambitions. Big mouth.\"");
	say();
	message("\"But he doth work hard... when I yell at him. Shows promise.\"");
	say();
	message("\"Tends to be a bit lazy, though. Must teach him better. Make certain he learns as much as he thinks he knows.\"");
	say();
labelFunc040F_0408:
	case "business" attend labelFunc040F_0465:
	UI_remove_answer("business");
	message("\"What dost thou need? To buy? To look? To talk?\"");
	say();
	var0008 = Func0956(["buy", "look", "talk"]);
	if (!(var0008 == "buy")) goto labelFunc040F_0441;
	UI_add_answer("buy");
	goto labelFunc040F_046D;
labelFunc040F_0441:
	if (!(var0008 == "look")) goto labelFunc040F_0457;
	message("\"Looking is free. Inspect the automaton-made goods.\"");
	say();
	message("\"I have everything from cloaks to baked goods. Ceramics to swords. And many things between.\"");
	say();
	message("\"Let me know if thou dost wish to buy anything.\"");
	say();
labelFunc040F_0457:
	if (!(var0008 == "talk")) goto labelFunc040F_0465;
	message("\"Talk is free, too. But I'm a busy man.\"");
	say();
labelFunc040F_0465:
	case "buy" attend labelFunc040F_048D:
labelFunc040F_046D:
	if (!(var0004 == false)) goto labelFunc040F_048A;
	if (!gflags[0x0004]) goto labelFunc040F_0482;
	message("\"If thou seest something thou dost like, tell me. If thou desirest something I do not have, let me know. I can either make it for thee or direct thee to someone who can.\"");
	say();
	goto labelFunc040F_0486;
labelFunc040F_0482:
	message("\"If thou seest something thou dost like, tell Topo or me. If thou desirest something I do not have, let me know. I can either make it for thee or direct thee to someone who can.\"");
	say();
labelFunc040F_0486:
	var0004 = true;
labelFunc040F_048A:
	Func0827();
labelFunc040F_048D:
	case "lost ring" attend labelFunc040F_04DE:
	UI_remove_answer("lost ring");
	if (!var0005) goto labelFunc040F_04DA;
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc040F_04D3;
	message("\"May I see it? Ah, thank thee...\"");
	say();
	message("\"Too plain for a Mage... But wait, I remember this!\"");
	say();
	message("\"I made it for a sailor from Fawn. I'll wager that it cost him half a year's wages. He wanted it for an engagement ring.\"");
	say();
	UI_add_answer(["Fawn", "sailor"]);
	goto labelFunc040F_04D7;
labelFunc040F_04D3:
	message("\"So where is this ring? How can I tell thee anything about this ring, if thou dost not bring it to me?\"");
	say();
labelFunc040F_04D7:
	goto labelFunc040F_04DE;
labelFunc040F_04DA:
	message("\"If thou wouldst bring thy ring to my shop, I would be glad to examine it there. I do not have my tools with me now.\"");
	say();
labelFunc040F_04DE:
	case "Fawn" attend labelFunc040F_04F5:
	UI_remove_answer("Fawn");
	message("\"Fawn is on the other island. Somewhere on the far side, I think. 'Tis a port. Filled with sailors.\"");
	say();
	message("\"That is all I know.\"");
	say();
labelFunc040F_04F5:
	case "sailor" attend labelFunc040F_050C:
	UI_remove_answer("sailor");
	message("\"I remember the piece, not the man. Wasn't a Mage. Not worth recalling, I imagine.\"");
	say();
	message("\"Ask in Fawn. He was proud enough about the ring. Someone will know who it belongs to.\"");
	say();
labelFunc040F_050C:
	case "Daemon Sword" attend labelFunc040F_0563:
	UI_remove_answer("Daemon Sword");
	message("\"Magical swords are very difficult to deal with. In some cases, I can be of aid, but other cases require the assistance of a Mage.\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0326, 0xFE99, 0xFE99)) goto labelFunc040F_055F;
	message("\"'Tis a magic sword, right enough. I'll take thy word about the Daemon...\"");
	say();
	message("\"The structure of the blade is not damaged. It is not a problem that I can repair.\"");
	say();
	if (!UI_get_item_flag(0xFFEA, 0x0004)) goto labelFunc040F_0554;
	message("\"Thou must seek out a Mage to aid thee, if there are any left among the living...\"");
	say();
	message("\"If Gustacio's flux analyzer had not been stolen, I would have sent thee to his lab. It was the only thing that might have helped thee.\"");
	say();
	goto labelFunc040F_055C;
labelFunc040F_0554:
	message("\"Thou mightest check with Gustacio. He might be able to help thee. I have heard that he is working on something called the flux analyzer. It might be of aid to thee.\"");
	say();
	gflags[0x00FE] = true;
labelFunc040F_055C:
	goto labelFunc040F_0563;
labelFunc040F_055F:
	message("\"If thou wouldst bring me the sword, I could examine it for thee.\"");
	say();
labelFunc040F_0563:
	case "Worm Gem" attend labelFunc040F_05D9:
	UI_remove_answer("Worm Gem");
	if (!var0005) goto labelFunc040F_05D5;
	message("\"What a strange request... Yes, I can make thee a Worm Gem, if thou dost desire.\"");
	say();
	UI_add_answer("strange request");
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000A)) goto labelFunc040F_05C7;
	if (!Func097D(0xFE9B, 0x0003, 0x034A, 0xFE99, 0x000A)) goto labelFunc040F_05B9;
	message("\"'Tis a simple matter, when thou dost know the secret...\"");
	say();
	Func0826(event);
	abort;
	goto labelFunc040F_05C4;
labelFunc040F_05B9:
	message("\"Thou must bring me three Worm Hearts -- no less!\"");
	say();
	UI_add_answer("Worm Hearts");
labelFunc040F_05C4:
	goto labelFunc040F_05D2;
labelFunc040F_05C7:
	message("\"But first, thou must bring me the Hearts of three Ice Worms.\"");
	say();
	UI_add_answer("Worm Hearts");
labelFunc040F_05D2:
	goto labelFunc040F_05D9;
labelFunc040F_05D5:
	message("\"I will make thee a Worm Gem if thou wilt come to my shop when I am there...\"");
	say();
labelFunc040F_05D9:
	case "strange request" attend labelFunc040F_05F0:
	UI_remove_answer("strange request");
	message("\"'Twas Torrissio who told me the secret of making these gems. He said he learned of it from ancient scrolls written in some strange runic lettering.\"");
	say();
	message("\"For years, he hath been mine only customer for such gems. But then the stranger named Batlin asked me to craft some for him, and now thou dost request them...\"");
	say();
labelFunc040F_05F0:
	case "Worm Hearts" attend labelFunc040F_0607:
	UI_remove_answer("Worm Hearts");
	message("\"Why, the hearts of Ice Worms, of course! Kill an Ice Worm, strip it of its heart, and kill another.\"");
	say();
	message("\"The Ice Worms are found in the cold northern lands, I am told. I have not been there myself. Heard stories. Very cold.\"");
	say();
labelFunc040F_0607:
	case "bye" attend labelFunc040F_0631:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell!@", 0x0000);
	Func097F(0xFFF1, "@Come again!@", 0x0002);
	Func08FF();
	goto labelFunc040F_0634;
labelFunc040F_0631:
	goto labelFunc040F_0180;
labelFunc040F_0634:
	endconv;
labelFunc040F_0635:
	return;
}


