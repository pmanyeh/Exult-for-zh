#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0994 0x994 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08FC 0x8FC ();
extern void Func08FE 0x8FE ();
extern var Func0942 0x942 (var var0000);
extern void Func08F5 0x8F5 (var var0000);

void Func04D1 object#(0x4D1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0994();
	var0003 = "son";
	if (!var0001) goto labelFunc04D1_0025;
	var0003 = "daughter";
labelFunc04D1_0025:
	var0004 = Func0953();
	if (!(event == 0x0001)) goto labelFunc04D1_007A;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04D1_004C;
	UI_item_say(0xFF2F, "@Be silent...@");
	abort;
labelFunc04D1_004C:
	UI_item_say(0xFE9C, "@A moment, monk!@");
	0xFF2F->Func07D1();
	Func097F(0xFF2F, (("@Yes, my " + var0003) + "?@"), 0x0002);
	UI_set_schedule_type(0xFF2F, 0x0003);
labelFunc04D1_007A:
	if (!(event == 0x0009)) goto labelFunc04D1_0489;
	UI_run_schedule(0xFF2F);
	UI_clear_item_say(0xFF2F);
	UI_show_npc_face0(0xFF2F, 0x0000);
	var0005 = UI_get_item_flag(0xFF2F, 0x001C);
	if (!(var0002 == 0x0009)) goto labelFunc04D1_00D6;
	message("\"My name is Miggim. I am the librarian on Monk Isle.\"");
	say();
	message("\"I have been awaiting thine arrival...\"");
	say();
	UI_set_item_flag(0xFF2F, 0x001C);
	UI_add_answer(["librarian", "Monk Isle", "arrival"]);
	goto labelFunc04D1_0114;
labelFunc04D1_00D6:
	if (!(var0005 == false)) goto labelFunc04D1_0103;
	message("\"So, thou art the one whose arrival we have been awaiting.\"");
	say();
	message("\"I am Miggim, the librarian here on Monk Isle.\"");
	say();
	UI_set_item_flag(0xFF2F, 0x001C);
	UI_add_answer(["arrival", "librarian", "Monk Isle"]);
	goto labelFunc04D1_0114;
labelFunc04D1_0103:
	message("\"Welcome to Monk Isle, ");
	message(var0004);
	message(". Feel free to visit me in the library whilst thou art here.\"");
	say();
	UI_add_answer("library");
labelFunc04D1_0114:
	if (!((!gflags[0x0038]) && (gflags[0x002D] && (!gflags[0x00A5])))) goto labelFunc04D1_012F;
	message("\"I have this strange foreboding...\"");
	say();
	UI_add_answer("foreboding");
labelFunc04D1_012F:
	if (!Func08FC()) goto labelFunc04D1_0144;
	message("\"Oh! One of thy friends hath met an untimely end. This should not be...\"");
	say();
	message("\"If thou art ready to see thy friend again, thou hast merely to ask and I will return them to thee.\"");
	say();
	UI_add_answer("resurrection");
labelFunc04D1_0144:
	UI_add_answer("Amulet of Balance");
	UI_add_answer(["aid", "bye"]);
labelFunc04D1_0158:
	converse attend labelFunc04D1_0488;
	case "Amulet of Balance" attend labelFunc04D1_017C:
	UI_remove_answer("Amulet of Balance");
	message("\"It was quite a find, ");
	message(var0000);
	message("! I have been uncovering many small things over the years in the passages beneath the abbey. But this is the first time I have found something as large as a chest.");
	say();
	message("\"It was a pity that the scroll that accompanied the Amulet was so fragile. It was one of the oldest I have yet found. All I was able to make out before it disintegrated was the name of the amulet and that it was used near the Serpent gates.");
	say();
	message("\"Perhaps this means that there is more yet to be discovered. I shall certainly continue my search.\"");
	say();
labelFunc04D1_017C:
	case "resurrection" attend labelFunc04D1_018E:
	UI_remove_answer("resurrection");
	Func08FE();
labelFunc04D1_018E:
	case "aid" attend labelFunc04D1_01BF:
	UI_remove_answer("aid");
	if (!(!gflags[0x0078])) goto labelFunc04D1_01B5;
	message("\"I must be cautious in aiding thee, ");
	message(var0000);
	message(". But I can say that thou shouldst strive to keep thy three stalwart companions at thy side.\"");
	say();
	message("\"Thy friend -- the master of song and mirth -- must be found before thou dost venture on.\"");
	say();
	goto labelFunc04D1_01BF;
labelFunc04D1_01B5:
	message("\"I must be cautious in aiding thee, ");
	message(var0000);
	message(". But rest assured that I will prompt thee as much as possible.\"");
	say();
labelFunc04D1_01BF:
	case "foreboding" attend labelFunc04D1_020A:
	UI_remove_answer("foreboding");
	message("\"I see that thou hast earned the enmity of the leader of warriors, ");
	message(var0000);
	message(". Without his favor, and the might of Monitor, thou canst not hope to further thy quest.\"");
	say();
	message("\"Only by renouncing thy friend and patron, the ruler who sent thee here, canst thou hope to continue on.\"");
	say();
	if (!Func0942(0xFFFF)) goto labelFunc04D1_020A;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Why, that is unthinkable! I have never heard of such a preposterous thing!\"");
	say();
	UI_remove_npc_face1();
	Func097F(0xFFFF, "@Rubbish!@", 0x0000);
	UI_set_conversation_slot(0x0000);
labelFunc04D1_020A:
	case "librarian" attend labelFunc04D1_022E:
	UI_remove_answer("librarian");
	message("\"'Tis my duty to transcribe and care for the prophecies of Xenka.\"");
	say();
	message("\"It was I that found the passages that told of thy coming.\"");
	say();
	UI_add_answer(["Xenka", "passage"]);
labelFunc04D1_022E:
	case "Xenka" attend labelFunc04D1_0259:
	UI_remove_answer("Xenka");
	message("\"She was a very wise woman, ");
	message(var0000);
	message(".\"");
	say();
	message("\"She foretold the storms that brought thee to our land, and saw the end of the world.\"");
	say();
	message("\"Those who believed in her visions banded together to study her words so that we might help avert the fate she foresaw.\"");
	say();
	UI_add_answer(["end of the world"]);
labelFunc04D1_0259:
	case "end of the world" attend labelFunc04D1_0279:
	UI_remove_answer("end of the world");
	message("\"Within Xenka's holy writings is the passage -- 'When at last the great scales unhinge, the overburdened world shall be torn asunder by the opposing forces.'\"");
	say();
	UI_add_answer(["great scales", "opposing forces"]);
labelFunc04D1_0279:
	case "great scales" attend labelFunc04D1_0292:
	UI_remove_answer("great scales");
	message("\"It could mean anything, ");
	message(var0004);
	message(". Music scales, map scales, snake scales, or weight scales...\"");
	say();
labelFunc04D1_0292:
	case "opposing forces" attend labelFunc04D1_02A5:
	UI_remove_answer("opposing forces");
	message("\"I know not... Though I would hazard a guess that it refers to the forces of good and evil.\"");
	say();
labelFunc04D1_02A5:
	case "passage" attend labelFunc04D1_02C9:
	UI_remove_answer("passage");
	message("\"Alas, Xenka's writings follow no order and are convoluted and vague.\"");
	say();
	message("\"We have spent the years since her disappearance trying to decide if some passage hath already happened or if one event will follow another.\"");
	say();
	UI_add_answer(["disappearance", "event"]);
labelFunc04D1_02C9:
	case "disappearance" attend labelFunc04D1_02E6:
	UI_remove_answer("disappearance");
	message("\"Xenka was not a young woman, ");
	message(var0004);
	message(". After she disappeared from our midst, we found a freshly-inked passage that promised her return when the end was near.\"");
	say();
	message("\"I always thought that she had discovered some way to ensure that she would live to see her prophecies revealed. Though I know not how.\"");
	say();
labelFunc04D1_02E6:
	case "event" attend labelFunc04D1_02FD:
	UI_remove_answer("event");
	message("\"The events in the prophecies are wild and connected by no frame that we have been able to discover...\"");
	say();
	message("\"'Great storms, the containers of hope smashed, lost love forgiven and restored' -- we still seek their meanings.\"");
	say();
labelFunc04D1_02FD:
	case "Monk Isle" attend labelFunc04D1_031A:
	UI_remove_answer("Monk Isle");
	message("\"Monk Isle is where the followers of Xenka dwell, ");
	message(var0004);
	message(".\"");
	say();
	message("\"Only a few believers remain to study and contemplate the mystery of her words. Few are now willing to devote their life to waiting on events that may take centuries to unfold. Faith is not an\teasy thing...\"");
	say();
labelFunc04D1_031A:
	case "arrival" attend labelFunc04D1_034C:
	UI_remove_answer("arrival");
	message("\"Yes, ");
	message(var0004);
	message(", 'tis written that a hero from another world will come to right the disorder in our land. That is thee...\"");
	say();
	if (!(var0002 == 0x0009)) goto labelFunc04D1_034C;
	message("\"'Tis also written that treachery will stalk thy steps at the beginning of thy quest. That is why I am here...\"");
	say();
	message("\"Not all of Xenka's followers believe that we should take direct action in aiding thee. However, Thoxa and I disagree.\"");
	say();
	UI_add_answer("action");
labelFunc04D1_034C:
	case "action" attend labelFunc04D1_0374:
	UI_remove_answer("action");
	message("\"I believe that an attempt will be made on thy life soon. Perhaps, by being forewarned, thou wilt be able to avoid it.\"");
	say();
	message("\"I cannot tell thee who to avoid here, ");
	message(var0004);
	message(". I arrived here only a few days ago and have remained in the barn for much of the time. I thought it wise to attract as little notice as possible.\"");
	say();
	message("\"But, now that thou art here, feel assured that I will remain vigilant against anything that would deter thee from thy destiny.\"");
	say();
	UI_add_answer("destiny");
labelFunc04D1_0374:
	case "destiny" attend labelFunc04D1_0387:
	UI_remove_answer("destiny");
	message("\"I am not in power to tell thee more of the quest that lies before thee. If I were to tell thee, thou mightest be prejudiced by my words and overlook a crucial event.\"");
	say();
labelFunc04D1_0387:
	case "library" attend labelFunc04D1_03AB:
	UI_remove_answer("library");
	message("\"We have quite a collection of diverse books and scrolls -- all meant to help us aid thee on thy quest.\"");
	say();
	message("\"Feel free to look at anything in the library, even if I am attending to my chores.\"");
	say();
	UI_add_answer(["diverse books and scrolls", "chores"]);
labelFunc04D1_03AB:
	case "diverse books and scrolls" attend labelFunc04D1_03D0:
	UI_remove_answer("diverse books and scrolls");
	message("\"Poetry, astronomical observations, tide charts, and maps... Everything that might provide some insight into the meaning of the prophecies.\"");
	say();
	if (!(gflags[0x0269] && (!gflags[0x0220]))) goto labelFunc04D1_03D0;
	UI_add_answer("maps");
labelFunc04D1_03D0:
	case "maps" attend labelFunc04D1_041A:
	UI_remove_answer("maps");
	var0006 = UI_find_nearby(0xFE9C, 0x0282, 0x000A, 0x0000);
	if (!var0006) goto labelFunc04D1_0407;
	message("\"We have no maps to aid thee, I fear. But I know that there is a book describing the old temples here in the abbey.\"");
	say();
	message("\"It is written in the Ophidian runes, of course. But thou canst use the Lens of Translating to aid thee in reading it.\"");
	say();
	message("\"Go thou and find it. I am certain that it will help thee.\"");
	say();
	goto labelFunc04D1_0413;
labelFunc04D1_0407:
	message("\"We have no maps to aid thee, I fear. But I know that there is a book describing the old temples in the abbey.\"");
	say();
	message("\"It is written in the Ophidian runes, of course. But thou canst use the Lens of Translating to aid thee in reading it.\"");
	say();
	message("\"Go thou and find it. I am certain that it will help thee.\"");
	say();
labelFunc04D1_0413:
	UI_add_answer("Lens of Translating");
labelFunc04D1_041A:
	case "Lens of Translating" attend labelFunc04D1_042D:
	UI_remove_answer("Lens of Translating");
	message("\"It is the large device that stands in the center of the library. Using it will allow thee to decipher the difficult Ophidian runes, but only for a short period of time.\"");
	say();
labelFunc04D1_042D:
	case "chores" attend labelFunc04D1_044D:
	UI_remove_answer("chores");
	message("\"We are a self-sufficient community, ");
	message(var0004);
	message(". We share the work in growing all that we need to eat. So I am as often in the field as I am in the library.\"");
	say();
	UI_add_answer("growing");
labelFunc04D1_044D:
	case "growing" attend labelFunc04D1_0460:
	UI_remove_answer("growing");
	message("\"We have berries, pumpkins and other vegetables. Thou mayest take some, if thou dost wish.\"");
	say();
labelFunc04D1_0460:
	case "bye" attend labelFunc04D1_0485:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@So long!@", 0x0000);
	Func097F(item, "@Fare thee well!@", 0x0002);
	goto labelFunc04D1_0488;
labelFunc04D1_0485:
	goto labelFunc04D1_0158;
labelFunc04D1_0488:
	endconv;
labelFunc04D1_0489:
	if (!(event == 0x0007)) goto labelFunc04D1_0497;
	Func08F5(0xFF2F);
labelFunc04D1_0497:
	return;
}


