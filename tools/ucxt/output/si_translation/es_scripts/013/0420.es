#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func086F 0x86F ();
extern void Func086E 0x86E ();
extern void Func08FF 0x8FF ();

void Func0420 object#(0x420) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = UI_part_of_day();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = UI_part_of_day();
	if (!((var0004 > 0x0001) || (var0004 < 0x0006))) goto labelFunc0420_003C;
	var0004 = "day";
	goto labelFunc0420_0042;
labelFunc0420_003C:
	var0004 = "evening";
labelFunc0420_0042:
	if (!(event == 0x0001)) goto labelFunc0420_0078;
	UI_item_say(0xFE9C, "@Pardon me...@");
	0xFFE0->Func07D1();
	Func097F(0xFFE0, (("@Yes " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFFE0, 0x0003);
labelFunc0420_0078:
	if (!(event == 0x0009)) goto labelFunc0420_07AB;
	UI_run_schedule(0xFFE0);
	UI_clear_item_say(0xFFE0);
	UI_show_npc_face0(0xFFE0, 0x0000);
	var0005 = UI_get_item_flag(0xFFE0, 0x001C);
	if (!(var0005 == false)) goto labelFunc0420_00F3;
	message("\"Allow me to introduce myself. I'm Topo the Artisan, apprenticed to Master Ducio.\"");
	say();
	UI_set_item_flag(0xFFE0, 0x001C);
	if (!Func0942(0xFFF1)) goto labelFunc0420_00DB;
	message("\"I'm a lucky man, to serve such a talented craftsman.\"");
	say();
	Func094E(0xFFF1, "@He's a good boy.@");
	UI_set_conversation_slot(0x0000);
	goto labelFunc0420_00E3;
labelFunc0420_00DB:
	message("\"Someday I hope to be as rich and lazy as my master!\"");
	say();
	message("\"He spends all his time asleep or at the inn, except when he comes here to make me crazy with his nagging.\"");
	say();
labelFunc0420_00E3:
	UI_add_answer(["Artisan", "Ducio"]);
	goto labelFunc0420_0126;
labelFunc0420_00F3:
	if (!Func0942(0xFFF1)) goto labelFunc0420_011B;
	message("\"Again, welcome! Might I be able to help thee today?\"");
	say();
	Func094E(0xFFF1, "@Do not be so wordy.@");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master...\"");
	say();
	goto labelFunc0420_0126;
labelFunc0420_011B:
	message("\"Again, welcome! As thou canst see, Master Ducio is not here at present. Perhaps I can help thee.\"");
	say();
	UI_add_answer("Ducio's whereabouts");
labelFunc0420_0126:
	if (!(gflags[0x010F] && (!gflags[0x028E]))) goto labelFunc0420_0138;
	UI_add_answer("urn");
labelFunc0420_0138:
	if (!(gflags[0x0111] && (!gflags[0x028F]))) goto labelFunc0420_014A;
	UI_add_answer("apparatus");
labelFunc0420_014A:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc0420_015C;
	UI_add_answer("slippers");
labelFunc0420_015C:
	if (!(gflags[0x0116] && (!gflags[0x0296]))) goto labelFunc0420_016E;
	UI_add_answer("strange brush");
labelFunc0420_016E:
	if (!(UI_get_schedule_type(0xFFE0) == 0x000C)) goto labelFunc0420_0183;
	UI_add_answer("buy");
labelFunc0420_0183:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0420_019C;
	UI_add_answer("kidnap");
labelFunc0420_019C:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc0420_01B8;
	UI_add_answer("sell gems");
labelFunc0420_01B8:
	UI_add_answer(["buy", "bye"]);
labelFunc0420_01C5:
	converse attend labelFunc0420_07AA;
	case "kidnap" attend labelFunc0420_01FA:
	UI_remove_answer("kidnap");
	message("\"I am terribly sorry for thee at this sensitive time. Grief is a natural emotion...\"");
	say();
	var0006 = Func0992(0x0001, "@Our friend is missing -- not DEAD!@", "@Canst thou be of aid?@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Thou shouldst bring this matter to the attention of the Rangers. Julia would not let such an injustice stand, I am sure of it.\"");
	say();
	gflags[0x0140] = true;
labelFunc0420_01FA:
	case "Artisan" attend labelFunc0420_0247:
	UI_remove_answer("Artisan");
	message("\"I have worked with Master Ducio for several years now. Soon I'll be able to open a shop of mine own... Topo's Treasures, I'll call it.\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_0233;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("\"Thou art an apprentice, boy! Thou dost not work with me. Thou dost work for me! Understand?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master...\"");
	say();
labelFunc0420_0233:
	message("\"I work with the pottery. The automatons have trouble handling the slip... They generally crush a piece before 'tis fully formed and ready to fire. After firing, they are fine, but before -- that is where I work.\"");
	say();
	UI_add_answer(["automatons", "slip", "firing"]);
labelFunc0420_0247:
	case "automatons" attend labelFunc0420_0275:
	UI_remove_answer("automatons");
	message("\"My Master is one of the wealthiest Mundanes in Moonshade. There is no comparison to the Mages, of course. We have three automatons -- one for sewing, one for blacksmith work, and one for baking.\"");
	say();
	if (!(!Func0942(0xFFF1))) goto labelFunc0420_0268;
	message("\"That is what my Master actually specializes in... making everyone else do his work!\"");
	say();
labelFunc0420_0268:
	UI_add_answer(["Mages", "Mundanes"]);
labelFunc0420_0275:
	case "Mages" attend labelFunc0420_02A7:
	UI_remove_answer("Mages");
	message("\"That is where the true money lies in Moonshade, ");
	message(var0000);
	message(". But if thou dost not possess magic, thou must work for a living...\"");
	say();
	if (!(!Func0942(0xFFF1))) goto labelFunc0420_029C;
	message("\"Unless thou art my Master, that is!\"");
	say();
labelFunc0420_029C:
	message("\"The only thing a lowly Mundane can hope for is to be able to afford an automaton from Torrissio, to help with the work load.\"");
	say();
	UI_add_answer("Torrissio");
labelFunc0420_02A7:
	case "Torrissio" attend labelFunc0420_0301:
	UI_remove_answer("Torrissio");
	message("\"Torrissio is the Adept that makes the automatons. No one knows how he does it...\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_02F6;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("\"Art thou a Mage, Topo?\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"No, master... I am a Mundane apprentice.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"Then thou dost not know what a Mage may or may not know!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master...\"");
	say();
labelFunc0420_02F6:
	message("\"Though most of the automatons Torrissio makes are strictly utilitarian, he is capable of making far more sophisticated models... Thou hast only to look at Petra.\"");
	say();
	UI_add_answer("Adept");
labelFunc0420_0301:
	case "Adept" attend labelFunc0420_0327:
	UI_remove_answer("Adept");
	message("\"Those who are blessed with magical ability are not all equal, ");
	message(var0000);
	message(". Some, like Andrio, are novices who still have yet to learn their craft. And some, like Stefano, have little power to command even after they learn.\"");
	say();
	UI_add_answer(["Andrio", "Stefano"]);
labelFunc0420_0327:
	case "Andrio" attend labelFunc0420_0360:
	UI_remove_answer("Andrio");
	message("\"Andrio is my friend... which is surprising since he is also a novice Mage. Perhaps the outrageous arrogance hath not developed in him yet.\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_0360;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("\"Enough talk! Back to work!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master...\"");
	say();
labelFunc0420_0360:
	case "Stefano" attend labelFunc0420_03BA:
	UI_remove_answer("Stefano");
	message("\"Thou wouldst like Stefano, I'm certain! Although he can cast a spell or two, he is not very good at it. So he makes his living by stealing things from one Mage for another.\"");
	say();
	message("\"'Tis actually very amusing. He shuns his magic and those who would look down on him must deal with him to acquire things they want... Perhaps there is some justice in the world, after all.\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_03B6;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("\"How many times have I told thee to stay away from that thief, boy?! Dost thou think stealing is funny?\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Nooo, master...\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"I should hope not! Or I'd break thine head for thee!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master...\"");
	say();
	goto labelFunc0420_03BA;
labelFunc0420_03B6:
	message("\"Now, if only someone would turn Ducio into a workbench, it would be the most useful he's ever been!\"");
	say();
labelFunc0420_03BA:
	case "Mundanes" attend labelFunc0420_03FD:
	UI_remove_answer("Mundanes");
	message("\"That is the title that Mages give those who cannot cast spells, ");
	message(var0000);
	message(". They assume that there is little to note of a person's life if it is not spent in pursuit of magic and pomposity.\"");
	say();
	message("\"Yet they will never know the thrill of having a fine pot shape itself under their hand from a formless piece of mud...\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_03FD;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("\"Mud?! Mud! Back to work! Thou must lack for things to do...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master... I mean, no, Master...\"");
	say();
labelFunc0420_03FD:
	case "slip" attend labelFunc0420_041E:
	UI_remove_answer("slip");
	message("\"Slip is the wet clay that is formed into cups, or plates, or jugs... Almost anything! If thou hast a patient enough hand, thou canst create a world of goods from mere clay.\"");
	say();
	if (!(!Func0942(0xFFF1))) goto labelFunc0420_041E;
	message("\"And heavens know that I'm patient enough... dealing with my slug of a Master!\"");
	say();
labelFunc0420_041E:
	case "firing" attend labelFunc0420_045B:
	UI_remove_answer("firing");
	message("\"Firing is where a piece of shaped clay is turned into the ceramic utensils thou art familiar with. By heating the clay to a great temperature, the water dries from the piece and it becomes tough and resilient.\"");
	say();
	message("\"But if the piece is heated or cooled too quickly, it becomes brittle and fragile. 'Tis a very exacting task.\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_045B;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("\"Who made thee a teacher, apprentice?! Back to work!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master...\"");
	say();
labelFunc0420_045B:
	case "Ducio" attend labelFunc0420_049E:
	UI_remove_answer("Ducio");
	if (!Func0942(0xFFF1)) goto labelFunc0420_048F;
	message("\"Ducio is my Master. He produces the finest goods in all the city! His pottery is famed throughout the other islands as well...\"");
	say();
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("\"Enough bragging. Humility. Thou must learn humility.@\"");
	say();
	UI_set_conversation_slot(0x0000);
	goto labelFunc0420_049E;
labelFunc0420_048F:
	message("\"If ever I believed in shape changing, I believe it with Ducio! That man is too lazy to be human... a slug, maybe. But a human, no.\"");
	say();
	message("\"If it weren't for me and the automatons, he'd have to join old Mosh out begging!\"");
	say();
	UI_add_answer("Mosh");
labelFunc0420_049E:
	case "Mosh" attend labelFunc0420_04B5:
	UI_remove_answer("Mosh");
	message("\"Mosh is the town beggar. She's very ugly... and crazy, too.\"");
	say();
	message("\"She claims to be Columna's twin sister!\"");
	say();
labelFunc0420_04B5:
	case "Columna" attend labelFunc0420_04C8:
	UI_remove_answer("Columna");
	message("\"She is also known as the Green Enchantress. She's quite pretty, in her own way. For a Mage...\"");
	say();
labelFunc0420_04C8:
	case "Ducio's whereabouts" attend labelFunc0420_0516:
	UI_remove_answer("Ducio's whereabouts");
	if (!(var0001 > 0x0005)) goto labelFunc0420_04F9;
	message("\"The Master doth dine at the inn at this hour. Thou canst find him there.\"");
	say();
	message("\"Canst thou imagine? He doth leave his\tapprentice here, with nothing but a loaf of dry bread, while he doth gorge himself on Petra's baked fish!\"");
	say();
	UI_add_answer(["inn", "Petra"]);
	goto labelFunc0420_0516;
labelFunc0420_04F9:
	if (!(var0001 < 0x0003)) goto labelFunc0420_0512;
	message("\"No doubt the Master is yet at home, getting his rest after a long day.\"");
	say();
	message("\"Yet I, who work far harder and longer than he, must be here promptly at dawn.\"");
	say();
	message("\"'Tis a dirty business, this apprenticeship thing. I despise it.\"");
	say();
	goto labelFunc0420_0516;
labelFunc0420_0512:
	message("\"I haven't a clue, except that I'm here doing all of the work, and he's not.\"");
	say();
labelFunc0420_0516:
	case "inn" attend labelFunc0420_0534:
	UI_remove_answer("inn");
	message("\"The Blue Boar inn. 'Tis in the northern part of the city, just west of the Palace. Many of the Mages eat there as well.\"");
	say();
	message("\"Thou canst bargain Rocco down on his prices, if thou dost try hard enough.\"");
	say();
	UI_add_answer("Rocco");
labelFunc0420_0534:
	case "Rocco" attend labelFunc0420_0547:
	UI_remove_answer("Rocco");
	message("\"Rocco is the innkeeper at the Blue Boar. He's a gruff man, whose sole pleasure in life seems to be haggling. Well, besides Petra, that is.\"");
	say();
labelFunc0420_0547:
	case "Petra" attend labelFunc0420_055E:
	UI_remove_answer("Petra");
	message("\"Petra is an automaton. She is Torrissio's master work... She looks exactly like a real woman, but of metal. She's quite remarkable.\"");
	say();
	message("\"Petra looks after Rocco, and cooks for the inn. In fact, she serves the finest baked fish around. Thou shouldst try it some time.\"");
	say();
labelFunc0420_055E:
	case "urn" attend labelFunc0420_05EC:
	UI_remove_answer("urn");
	message("\"As thou hast probably deduced, I am an expert\tcraftsman -- particularly with pots and urns.\"");
	say();
	message("\"Show me thine urn, and I shall unlock its secrets for thee.\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_0592;
	Func094E(0xFFF1, "@Don't be so boastful. Thou art making a\r\n\t\t\t\t\t\tfool of thyself!@");
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master.\"");
	say();
labelFunc0420_0592:
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000)) goto labelFunc0420_05D1;
	message("\"Indeed. Note the simple scrollwork, the plain\tglazing, the orange hue of the clay...\"");
	say();
	message("\"Now look within. Dost thou see the ashes which fill this urn?\"");
	say();
	message("\"Thou dost carry the funeral remains of one of\tthe good citizens of Monitor, the warrior city.\"");
	say();
	gflags[0x028E] = true;
	Func094E(0xFFF1, "@They'll want it back. Monitorians revere\r\n\t\t\t\t\t\ttheir dead.@");
	UI_set_conversation_slot(0x0000);
	UI_add_answer("Monitor");
	goto labelFunc0420_05EC;
labelFunc0420_05D1:
	var0006 = Func0992(0xFFFD, "@But we don't have it with\r\n\t\t\t\t\t\t\t\tus...@", "@I've not brought it with me.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Bring it by, and I shall give thee thine answer.\"");
	say();
labelFunc0420_05EC:
	case "Monitor" attend labelFunc0420_0633:
	UI_remove_answer("Monitor");
	message("\"I have never left Moonshade, ");
	message(var0000);
	message(", so I don't know much about it. I'm told that all the citizens of Monitor are mighty warriors. Though that sounds a bit odd, to me.\"");
	say();
	message("\"Couldst thou imagine what would happen if thou wert to disagree with a shopkeeper over the prices of his wares? Why, thou couldst find thyself very dead! Or badly hurt at the least...\"");
	say();
	message("\"Thou couldst see if Hawk is at the Blue Boar. He's a sailor and might know more than a man who's never left this island.\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_0633;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("\"Since when art thou a guide? Back to work!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master...\"");
	say();
labelFunc0420_0633:
	case "apparatus" attend labelFunc0420_0646:
	UI_remove_answer("apparatus");
	message("\"Zounds, I don't know... 'Tis like nothing I've seen before.\"");
	say();
labelFunc0420_0646:
	case "slippers" attend labelFunc0420_0664:
	UI_remove_answer("slippers");
	message("\"Definitely do not look like anything that a Mage would have lost. They have much more expensive tastes...\"");
	say();
	message("\"Thou couldst try asking Bucia, though. If anyone might know where these slippers came from, it would be her.\"");
	say();
	UI_add_answer("Bucia");
labelFunc0420_0664:
	case "Bucia" attend labelFunc0420_069D:
	UI_remove_answer("Bucia");
	message("\"Bucia runs the Capessi Canton for Flindo. She is the provisioner here in Moonshade. She will be able to tell thee who buys what, I'm sure. Bucia adores gossip...\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_069D;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("\"Thou art a fine one to talk! Work! Or I shall rip out thy tongue!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master...\"");
	say();
labelFunc0420_069D:
	case "strange brush" attend labelFunc0420_0719:
	UI_remove_answer("strange brush");
	message("\"As an expert craftsman, I can tell thee what most materials are, if I can examine the item.\"");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_06CD;
	Func094E(0xFFF1, "@Thou art a braggart. Thou art trying my\r\n\t\t\t\t\t\tpatience!@");
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master.\"");
	say();
labelFunc0420_06CD:
	if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0005)) goto labelFunc0420_06FE;
	message("\"Odd brush... Certainly doth not seem like anything a lady would want.\"");
	say();
	message("\"Look. See how porous the handle is... This definitely isn't wood. And I don't think it would last with strenuous use.\"");
	say();
	message("\"From the looks of it, ");
	message(var0000);
	message(", I'd say that it was made of bone. Thou couldst ask Mortegro, to be sure though.\"");
	say();
	UI_add_answer("Mortegro");
	goto labelFunc0420_0719;
labelFunc0420_06FE:
	var0006 = Func0992(0xFFFD, "@But it's not here...@", "@I've not brought it with me.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Bring it with thee some time and I shall tell thee what it is made of.\"");
	say();
labelFunc0420_0719:
	case "Mortegro" attend labelFunc0420_0730:
	UI_remove_answer("Mortegro");
	message("\"Mortegro is an Adept that specializes in the realm of the dead. He's a bit eerie, but if that truly is bone, he would be able to tell thee for sure.\"");
	say();
	message("\"Last time I heard, Mortegro was helping Gustacio on some sort of weather experiment. Thou mightest look for him there, or at the Blue Boar.\"");
	say();
labelFunc0420_0730:
	case "buy" attend labelFunc0420_0750:
	if (!(UI_get_schedule_type(0xFFE0) == 0x000C)) goto labelFunc0420_074C;
	Func086F();
	goto labelFunc0420_0750;
labelFunc0420_074C:
	message("\"If thou wouldst talk to me when I am at work, I would gladly sell thee something.\"");
	say();
labelFunc0420_0750:
	case "sell gems" attend labelFunc0420_077D:
	if (!(UI_get_schedule_type(0xFFE0) == 0x000C)) goto labelFunc0420_076C;
	Func086E();
	goto labelFunc0420_0776;
labelFunc0420_076C:
	message("\"I can buy thy gems when I am at work, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0420_0776:
	UI_remove_answer("sell gems");
labelFunc0420_077D:
	case "bye" attend labelFunc0420_07A7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@So long!@", 0x0000);
	Func097F(0xFFE0, "@Come again!@", 0x0002);
	Func08FF();
	goto labelFunc0420_07AA;
labelFunc0420_07A7:
	goto labelFunc0420_01C5;
labelFunc0420_07AA:
	endconv;
labelFunc0420_07AB:
	return;
}


