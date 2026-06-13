#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func0942 0x942 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func082D 0x82D ();

void Func0451 object#(0x451) ()
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
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_item_flag(0xFFAF, 0x001C);
	var0004 = Func0994();
	var0005 = Func0942(0xFFFF);
	var0006 = Func0942(0xFFFE);
	var0007 = Func0942(0xFFFD);
	var0008 = false;
	var0009 = false;
	var000A = false;
	var000B = false;
	var000C = false;
	if (!(event == 0x0000)) goto labelFunc0451_0101;
	var000D = UI_get_random(0x0006);
	if (!(var000D == 0x0001)) goto labelFunc0451_007B;
	UI_item_say(0xFFAF, "@I shall have revenge!@");
labelFunc0451_007B:
	if (!(var000D == 0x0002)) goto labelFunc0451_008F;
	UI_item_say(0xFFAF, "@I am an Adept!@");
labelFunc0451_008F:
	if (!(var000D == 0x0003)) goto labelFunc0451_00A3;
	UI_item_say(0xFFAF, "@Bide thee...@");
labelFunc0451_00A3:
	if (!(var000D == 0x0004)) goto labelFunc0451_00B7;
	UI_item_say(0xFFAF, "@They shall see...@");
labelFunc0451_00B7:
	if (!(var000D == 0x0005)) goto labelFunc0451_00ED;
	if (!Func0942(0xFFD5)) goto labelFunc0451_00E3;
	UI_item_say(0xFFAF, "@Stay thou away from me!@");
	Func097F(0xFFD5, "@Yes, m'lord.@", 0x0002);
	goto labelFunc0451_00ED;
labelFunc0451_00E3:
	UI_item_say(0xFFAF, "@I shall prevail!@");
labelFunc0451_00ED:
	if (!(var000D == 0x0006)) goto labelFunc0451_0101;
	UI_item_say(0xFFAF, "@What do I here?@");
labelFunc0451_0101:
	if (!(event == 0x0001)) goto labelFunc0451_012F;
	UI_item_say(0xFE9C, "@Greetings!@");
	0xFFAF->Func07D1();
	Func097F(0xFFAF, "@Art thou speaking to me?@", 0x0005);
	UI_set_schedule_type(0xFFAF, 0x0003);
labelFunc0451_012F:
	if (!(event == 0x0009)) goto labelFunc0451_095C;
	UI_run_schedule(0xFFAF);
	UI_clear_item_say(0xFFAF);
	UI_show_npc_face0(0xFFAF, 0x0000);
	if (!(UI_get_schedule_type(0xFFAF) == 0x0007)) goto labelFunc0451_0161;
	var000E = true;
labelFunc0451_0161:
	if (!((gflags[0x0004] == true) && (gflags[0x00D4] == false))) goto labelFunc0451_018C;
	message("\"Seest thou, ");
	message(var0002);
	message("? I told thee that I would teach them not to take Ensorcio lightly! I told thee that one day they would welcome me back... Beg for me to return!\"");
	say();
	UI_add_answer(["teach them", "welcome", "bye"]);
	goto labelFunc0451_0213;
labelFunc0451_018C:
	if (!(var0003 == false)) goto labelFunc0451_01E0;
	if (!(gflags[0x003E] == true)) goto labelFunc0451_01BB;
	message("\"Well, if it isn't another petty tyrant!\"");
	say();
	message("\"Thou mayest as well leave now, Pikeman. I have no use for the likes of thee... And thou canst do nothing to avenge the wrongs I have suffered.\"");
	say();
	message("\"So, leave thou before I grow tired of thee and thou dost feel the wrath of Ensorcio the Adept!\"");
	say();
	UI_add_answer(["tyrant", "wrongs", "bye"]);
	goto labelFunc0451_01D3;
labelFunc0451_01BB:
	message("\"Thou mayest as well leave now, hero. I have seen thy kind before and have no use for the likes of thee... And thou canst do nothing to avenge the wrongs I have suffered.\"");
	say();
	message("\"So, leave thou before I grow tired of thee and thou dost feel the wrath of Ensorcio the Adept!\"");
	say();
	UI_add_answer(["hero", "wrongs", "bye"]);
labelFunc0451_01D3:
	UI_set_item_flag(0xFFAF, 0x001C);
	goto labelFunc0451_01F3;
labelFunc0451_01E0:
	if (!(gflags[0x003E] == true)) goto labelFunc0451_01EF;
	message("\"So, thou art returned... Failed in thy puny quest already, Pikeman?\"");
	say();
	goto labelFunc0451_01F3;
labelFunc0451_01EF:
	message("\"So, thou art returned... Failed in thy puny quest already, hero?\"");
	say();
labelFunc0451_01F3:
	if (!var000E) goto labelFunc0451_0200;
	UI_add_answer("spells");
labelFunc0451_0200:
	UI_add_answer(["wrongs", "Devra", "Hawk", "bye"]);
labelFunc0451_0213:
	converse attend labelFunc0451_095B;
	case "teach them" attend labelFunc0451_0229:
	message("\"Shamino the Anarch hath proclaimed me the finest of Adepts! At last someone hath seen my talents and set them for the world to see... No more shall I be Ensorcio the shunned, Ensorcio the exile! Now I am the premier Adept!\"");
	say();
	UI_remove_answer("teach them");
labelFunc0451_0229:
	case "welcome" attend labelFunc0451_0244:
	message("\"Filbercio's unjust rule hath been brought to an end!\"");
	say();
	message("\"Shamino the Anarch, thy wonderful companion, hath cast him from power and I have been welcomed with open arms!\"");
	say();
	message("\"Oh, what joy! To be back in Moonshade and free to experiment as I wish!\"");
	say();
	UI_remove_answer("welcome");
labelFunc0451_0244:
	case "tyrant" attend labelFunc0451_02D2:
	message("\"Yes, tyrant! And I shall say it in front of Argus, too, for all that matters!\"");
	say();
	message("\"You Pikemen wear your @bravery@ marked on your faces for all to see and expect the world to tremble at your feet! Thou demandest tribute like a king, but all thou art worthy of is contempt!\"");
	say();
	if (!(var0005 == true)) goto labelFunc0451_0275;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Thou dost not speak to an ordinary Pikeman!\" *\"This is the Avatar!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_0275:
	if (!(var0006 == true)) goto labelFunc0451_0296;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Thou mayest not judge the Avatar by this mark alone!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_0296:
	if (!(var0007 == true)) goto labelFunc0451_02B7;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Do not let him say such things about thee, Avatar!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_02B7:
	message("\"I see thee draw thyself up... Have I offended thee? And what wilt thou do, Pikeman? Drag me to thy jail as thy comrades did drag Hawk?\"");
	say();
	UI_remove_answer("tyrant");
	UI_add_answer(["Argus", "tribute", "Hawk"]);
labelFunc0451_02D2:
	case "Argus" attend labelFunc0451_02FF:
	message("\"For all that he is Devra's son, he is still a dog!\"");
	say();
	message("\"I will grant that he came home when Devra summoned him, unlike Wilfred. But the two are cut from the same cloth, all the same... Vain, pompous braggarts!\"");
	say();
	UI_remove_answer("Argus");
	UI_add_answer("Wilfred");
	if (!(var0008 == false)) goto labelFunc0451_02FF;
	UI_add_answer("Devra");
labelFunc0451_02FF:
	case "Wilfred" attend labelFunc0451_0337:
	message("\"Wilfred is Devra's youngest whelp. And I'll wager that thou wilt never find a better example of the attitude of which I speak.\"");
	say();
	if (!(var0007 == true)) goto labelFunc0451_032C;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"He's a fine one to talk of attitude...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_032C:
	message("\"Wilfred ran away to prove to the world that he was better than his brother... A better bully, a better ruffian and a better murderer thou shalt not find!\"");
	say();
	UI_remove_answer("Wilfred");
labelFunc0451_0337:
	case "tribute" attend labelFunc0451_034E:
	message("\"Or perhaps I should say @donation@!\"");
	say();
	message("\"Where is the honor in charging even the poorest peasant a ruinous fee to use the only safe road in all the islands? So much for protecting the weak and helping the poor!\"");
	say();
	UI_remove_answer("tribute");
labelFunc0451_034E:
	case "Hawk" attend labelFunc0451_0380:
	message("\"Hawk is the captain of the Arabella.\"");
	say();
	message("\"I am afraid that Flindo was a bit distressed to hear that the good captain had no intention of risking himself or his ship to take that upstanding merchant back to Moonshade in these damnable storms. So he bought the muscle of the Pikemen to @persuade@ Hawk that remaining here would be unhealthy...\"");
	say();
	gflags[0x01CD] = true;
	UI_remove_answer("Hawk");
	UI_push_answers();
	UI_add_answer(["Moonshade", "storms", "Flindo", "change subject"]);
labelFunc0451_0380:
	case "change subject" attend labelFunc0451_0390:
	message("\"As thou dost wish...\"");
	say();
	UI_pop_answers();
labelFunc0451_0390:
	case "Moonshade" attend labelFunc0451_03B4:
	message("\"Moonshade, the city of wonders! And the city of charlatans!\"");
	say();
	message("\"Heaven forfend that thou shouldst try something innovative! It might endanger the incompetent fools led by Filbercio and his trained Council of Mages!\"");
	say();
	UI_remove_answer("Moonshade");
	UI_add_answer(["Filbercio", "Council of Mages"]);
labelFunc0451_03B4:
	case "Filbercio" attend labelFunc0451_03DA:
	message("\"Filbercio is a presumptuous maggot who calls himself MageLord of Moonshade!\"");
	say();
	message("\"I doubt that he could light a candle magically! But he doth have the backing of the Council and the threat of the Mountains of Freedom to support his claim!\"");
	say();
	message("\"The one saving grace for Moonshade is that Filbercio spends all of his time pursuing skirts! His insignificant knowledge of magic hath little effect in the bedchambers of his conquests!\"");
	say();
	var000A = true;
	UI_remove_answer("Filbercio");
	UI_add_answer("Freedom");
labelFunc0451_03DA:
	case "Freedom" attend labelFunc0451_03F5:
	message("\"Freedom! What a farce!\"");
	say();
	message("\"The Mountains of Freedom are a prison, hero! A prison filled with magical traps that none can escape. And that is where Filbercio puts all who anger or oppose him.\"");
	say();
	message("\"'Tis a small wonder that I did not end there...\"");
	say();
	UI_remove_answer("Freedom");
labelFunc0451_03F5:
	case "Council of Mages" attend labelFunc0451_0410:
	message("\"The Council of Mages is a handful of Adepts meant to keep the MageLord from misusing his power. In this case, however, they spend their time making the decisions that the MageLord should be making.\"");
	say();
	message("\"But, as unto myself, they are content to allow Filbercio to continue his @amusements@. With luck, he will be killed by one of his paramours.\"");
	say();
	var000B = true;
	UI_remove_answer("Council of Mages");
labelFunc0451_0410:
	case "storms" attend labelFunc0451_042E:
	message("\"Rather showy, if thou shouldst ask me... But rather spectacular results. Entirely too random for my tastes, however.\"");
	say();
	message("\"Of course, I cannot help wondering which mage is behind them. And I wonder if that double-crossing Batlin has anything to do with them... The storms started after he left here, thou knowest.\"");
	say();
	UI_remove_answer("storms");
	UI_add_answer("Batlin");
labelFunc0451_042E:
	case "Batlin" attend labelFunc0451_0456:
	message("\"I can see that thou knowest of him.\"");
	say();
	message("\"Batlin came here some time ago, he and his tame daemon. He seemed to take an interest in my story and we spent many evenings exchanging arcane lore. Then he left on some errand.\"");
	say();
	message("\"When he returned with his other two thugs, Batlin seemed restless. But we continued our discussions as if nothing had changed. I thought he was my friend...\"");
	say();
	UI_remove_answer("Batlin");
	UI_add_answer(["Daemon", "thugs"]);
labelFunc0451_0456:
	case "Daemon" attend labelFunc0451_0478:
	message("\"Absolutely huge... and ugly!\"");
	say();
	message("\"Batlin called him Palos. And the daemon went about meekly hooded and robed as his master commanded.\"");
	say();
	message("\"I do admit, I was impressed. I could not help but think about the trouble that Rotoluncia was having.\"");
	say();
	UI_remove_answer("Daemon");
	UI_add_answer("Rotoluncia");
labelFunc0451_0478:
	case "Rotoluncia" attend labelFunc0451_0493:
	message("\"Ever since Filbercio replaced Rotoluncia as his playmate, Rotoluncia hath had to find some other interest to occupy her time.\"");
	say();
	message("\"And, from what I have heard, that seems to be daemons... Perhaps I can hope that she doth have designs on revenge. I would be content to think of Filbercio filling a daemon's belly.\"");
	say();
	message("\"So, I am sure that she would take quite an interest in that fat mage's pet daemon. I wish I could send her word...\"");
	say();
	UI_remove_answer("Rotoluncia");
labelFunc0451_0493:
	case "thugs" attend labelFunc0451_04BB:
	message("\"I should have guessed that Batlin intended something shady when I saw those two!\"");
	say();
	message("\"I am sure that Batlin brought them expressly to steal the old jawbone left to me by my mentor.\"");
	say();
	message("\"Between Brunt, the idiot, and Deadeye, the one-eyed pirate, I am lucky still to be alive...\"");
	say();
	UI_remove_answer("thugs");
	UI_add_answer(["jawbone", "mentor"]);
labelFunc0451_04BB:
	case "jawbone" attend labelFunc0451_04E1:
	message("\"'Twas a large serpent jawbone that my mentor received from his mentor, the Mad Mage.\"");
	say();
	message("\"I could never discover what its use was, though it was clearly magical. 'Twas a keepsake -- though I hoped to discover its secret some day.\"");
	say();
	message("\"I think that Batlin found its secret... and created these damned storms.\"");
	say();
	var0009 = true;
	UI_remove_answer("jawbone");
	UI_add_answer("Mad Mage");
labelFunc0451_04E1:
	case "Mad Mage" attend labelFunc0451_04FC:
	message("\"His true name is Erstam. He taught many of the Moonshadian Adepts their craft. But, as is the way with master and apprentice, they eventually surpassed him in skill and scope.\"");
	say();
	message("\"The old mage could not abide the thought that these mages were no longer his malleable students, and went quite mad... He saw them all as thieves intent on stealing his secrets and moved to an island off Moonshade.\"");
	say();
	message("\"He doth refuse to have any dealings with Moonshade to this day. He sits on his island trying to find a way to create life.\"");
	say();
	UI_remove_answer("Mad Mage");
labelFunc0451_04FC:
	case "mentor" attend labelFunc0451_0524:
	message("\"He was a very great man. His name was Vasculio.\"");
	say();
	message("\"Unfortunately, Vasculio was a man that was constantly testing the limits of convention. The Council of Mages found him threatening, and attempted to kill him when he refused to bow to their wishes...\"");
	say();
	message("\"But his experimentation with Stoneheart had given him spells to elude even that monstrous fate. He is out there somewhere still, straining at the chains of accepted wisdom.\"");
	say();
	UI_remove_answer("mentor");
	UI_add_answer(["Stoneheart", "spells"]);
labelFunc0451_0524:
	case "Stoneheart" attend labelFunc0451_0567:
	message("\"Ah, such a wonder to behold! It doth come from the depths of the Mountains of Freedom, and is quite rare...\"");
	say();
	message("\"The Council hath outlawed possession of Stoneheart, because they fear its power. But a small quantity is quietly hidden -- else how would the death spells work?\"");
	say();
	gflags[0x029D] = true;
	UI_remove_answer("Stoneheart");
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc0451_0567;
	message("\"Thou dost have stoneheart! Could I...\"");
	say();
	message("\"No, I shall not succumb to its lure. I shall be strong. But thou shouldst take care, for this reagent has a way of twisting a man's heart so that he cannot bear to part from it.\"");
	say();
	message("\"In its raw form, 'tis useless for spells. For a fee -- sizable, of course -- I could teach thee its secret so that thou mayest also cast death spells.\"");
	say();
	UI_add_answer("secret");
labelFunc0451_0567:
	case "secret" attend labelFunc0451_06EA:
	message("\"This is very valuable information, friend.\"");
	say();
	message("\"How much wouldst thou pay for it?\"");
	say();
	var000F = Func0956(["Guilders", "Gold Coins"]);
	if (!(var000F == "Guilders")) goto labelFunc0451_0596;
	var0010 = 0x03B8;
labelFunc0451_0596:
	if (!(var000F == "Gold Coins")) goto labelFunc0451_05A6;
	var0010 = 0x0284;
labelFunc0451_05A6:
	var0011 = UI_count_objects(0xFE9B, var0010, 0xFE99, 0xFE99);
	if (!(var0011 == 0x0000)) goto labelFunc0451_05D0;
	message("\"Thou dost not have any ");
	message(var000F);
	message("!\"");
	say();
	goto labelFunc0451_06E3;
labelFunc0451_05D0:
	var0012 = UI_input_numeric_value(0x0000, var0011, 0x0001, 0x0000);
	var0013 = var0012;
	if (!(var000F == "Guilders")) goto labelFunc0451_0601;
	var0013 = ((var0012 * 0x0002) / 0x0003);
labelFunc0451_0601:
	if (!(var0013 < 0x0001)) goto labelFunc0451_0612;
	message("\"Imparting such information is risky. Thou dost offer too little in exchange for mine health...\"");
	say();
	goto labelFunc0451_06E3;
labelFunc0451_0612:
	if (!((var0013 >= 0x0001) && (var0013 <= 0x000F))) goto labelFunc0451_062B;
	message("\"Thou couldst not buy even so much as a novice's light spell for that paltry sum! Another offer perhaps...\"");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_062B:
	if (!((var0013 >= 0x0010) && (var0013 <= 0x001E))) goto labelFunc0451_064A;
	message("\"Art thou serious? Thou wouldst offer only ");
	message(var0012);
	message(" for the power of destruction? Think again...\"");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_064A:
	if (!((var0013 >= 0x001F) && (var0013 <= 0x002D))) goto labelFunc0451_0663;
	message("\"Dost thou think me a shopkeeper to haggle with? I am Ensorcio the Adept! Do not trifle with me...\"");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_0663:
	if (!((var0013 >= 0x002E) && (var0013 <= 0x003C))) goto labelFunc0451_067C;
	message("\"Thou canst be more reasonable than that...\"");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_067C:
	if (!((var0013 >= 0x003D) && (var0013 <= 0x004B))) goto labelFunc0451_0695;
	message("\"How can I be sure what use thou wilt make of this? I do not know...\"");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_0695:
	if (!(var0013 > 0x004B)) goto labelFunc0451_06E3;
	message("\"Thou art most wise, indeed! For ");
	message(var0012);
	message(" ");
	message(var000F);
	message(", I shall teach thee how to put thy Stoneheart to use. Agreed?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0451_06DF;
	var0014 = Func0996(0xFE9C, 0xFFAF, var0012, var0010, 0xFE99, 0xFE99, true);
	message("\"First, thou must have a ritual blood-letting device... Most mages possess one, even though they are technically illegal.\"");
	say();
	message("\"Then thou must fill a small container with blood, using this device. The blood can be thine or that of any of thy companions... Whichever thou dost find more convenient.\"");
	say();
	message("\"Once thou hast the blood, thou must use the blood on the Stoneheart. This produces the Bloodspawn that thou wilt need for death spells.\"");
	say();
	goto labelFunc0451_06E3;
labelFunc0451_06DF:
	message("\"Perhaps another time then...\"");
	say();
labelFunc0451_06E3:
	UI_remove_answer("secret");
labelFunc0451_06EA:
	case "spells" attend labelFunc0451_0718:
	if (!(var000C == false)) goto labelFunc0451_0702;
	message("\"Like any apprentice, I learned all that I could from my mentor... Whether he was willing to teach me or not. 'Tis all a matter of not being discovered in the act.\"");
	say();
	var000C = true;
labelFunc0451_0702:
	message("\"Art thou interested in buying a spell perhaps? I could always use more money for ale...\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0451_0714;
	Func082D();
	goto labelFunc0451_0718;
labelFunc0451_0714:
	message("\"If thou art ever interested, find me.\"");
	say();
labelFunc0451_0718:
	case "Flindo" attend labelFunc0451_0736:
	message("\"Flindo would have it that he is a person of note from the fair city of Moonshade, known by one and all. But he is truly little more than a loud shopkeeper with a penchant for gossip.\"");
	say();
	message("\"Flindo flits about here and there, acquiring merchandise for Bucia to sell, and as much information as he can. I think that alone is why the Adepts humor him from time to time with some tidbit of news...\"");
	say();
	UI_remove_answer("Flindo");
	UI_add_answer("Bucia");
labelFunc0451_0736:
	case "Bucia" attend labelFunc0451_074D:
	message("\"Bucia runs Flindo's shop for him. 'Tis called the Capessi Canton -- a pompous name, if thou dost ask me.\"");
	say();
	message("\"Bucia charges a fillip more on everything she sells, for her troubles. And is very careful to show Flindo the altered accounts.\"");
	say();
	UI_remove_answer("Bucia");
labelFunc0451_074D:
	case "hero" attend labelFunc0451_07D8:
	message("\"Yes, hero! And I shall say it in front of Devra, too, for all that matters!\"");
	say();
	message("\"You adventurers swagger around as though you could save the world! Thou dost expect awe and reverence from those thou dost meet... The ones that bury thy dead body when thine arrogance doth meet its match!\"");
	say();
	if (!(var0005 == true)) goto labelFunc0451_077E;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Thou dost not speak to an ordinary adventurer!\" *\"This is the Avatar!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_077E:
	if (!(var0006 == true)) goto labelFunc0451_079F;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Thou mayest not judge the Avatar so!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_079F:
	if (!(var0007 == true)) goto labelFunc0451_07C0;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Do not let him say such things about thee, Avatar!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_07C0:
	message("\"I see thee draw thyself up... Have I offended thee? And what wilt thou do, hero? Imprison me? Or wilt thou simply murder me?\"");
	say();
	UI_remove_answer("hero");
	UI_add_answer(["Devra", "Hawk"]);
labelFunc0451_07D8:
	case "Devra" attend labelFunc0451_0809:
	if (!(var0001 == true)) goto labelFunc0451_07EF;
	message("\"Devra's a fine woman, for all that she is a bit domineering...\"");
	say();
	goto labelFunc0451_07F3;
labelFunc0451_07EF:
	message("\"Devra's a fine woman, for all that she is a bit domineering... But then most women are, are they not?\"");
	say();
labelFunc0451_07F3:
	message("\"She hath taken her loss incredibly well. She hath convinced that worthless son of hers to return and help with some honest work here at the inn. But, if thou askest me, I would say that she is too kind to the rogues and misfits.\"");
	say();
	var0008 = true;
	UI_remove_answer("Devra");
	UI_add_answer("loss");
labelFunc0451_0809:
	case "loss" attend labelFunc0451_084F:
	if (!(var0001 == true)) goto labelFunc0451_0824;
	message("\"Quite sad, actually. I recall that the morning I went to her to report the theft, she was terribly upset.\"");
	say();
	message("\"It seems Angus had a bit of Silverpate in him after all, and disappeared... To think of it, perhaps he was the one that stole the jawbone from me... Though why it would interest him, I shall never know.\"");
	say();
	goto labelFunc0451_082C;
labelFunc0451_0824:
	message("\"Quite pathetic, actually. When I reported the theft to her that morning she was too distraught to even pay attention to my complaint... Not at all professional -- after all, I am a paying guest here.\"");
	say();
	message("\"It seems Angus had a bit of Silverpate in him after all, and disappeared... To think of it, perhaps he was the one that stole the jawbone from me... Though why it would interest him, I shall never know.\"");
	say();
labelFunc0451_082C:
	UI_remove_answer("loss");
	UI_add_answer(["Angus", "Silverpate"]);
	if (!(var0009 == false)) goto labelFunc0451_084F;
	UI_add_answer("jawbone");
labelFunc0451_084F:
	case "Angus" attend labelFunc0451_0866:
	message("\"Angus is... er, was... Devra's husband. Seemed a right enough fellow. Liked a cup or two of ale in the evenings. Worked hard -- But then, with her nagging, he couldn't help but work hard!\"");
	say();
	message("\"Would never have guessed that he had the spine to leave like that. But I suppose that every man doth have his breaking point...\"");
	say();
	UI_remove_answer("Angus");
labelFunc0451_0866:
	case "Silverpate" attend labelFunc0451_0888:
	message("\"Silverpate is the great-grandfather of Angus.\"");
	say();
	message("\"They say that old Silverpate was a bloodthirsty pirate. According to popular tales, he reformed and took his ill-gotten gains and built this inn...\"");
	say();
	message("\"But the Adepts in Moonshade tell a different tale.\"");
	say();
	UI_remove_answer("Silverpate");
	UI_add_answer("tale");
labelFunc0451_0888:
	case "tale" attend labelFunc0451_089F:
	message("\"It seems that Silverpate employed Erstam to do something at the inn -- perhaps hide that fabled treasure, who knows. In any case, the pirate planned to trick Erstam so that he would not have to pay the mage's fees.\"");
	say();
	message("\"But Erstam found him out and trapped the treacherous @innkeeper@ in a pit filled with daemons. No one ever saw Silverpate again, and people learned to fear crossing any mage.\"");
	say();
	UI_remove_answer("tale");
labelFunc0451_089F:
	case "wrongs" attend labelFunc0451_08DB:
	message("\"Thou dost not know the half of it! Here I sit, an Adept in a wretched hovel, exiled from the practice of the magic that is my life's blood!\"");
	say();
	message("\"The Council hath turned its back on Filbercio's exploits for so long that they sought to make me their scapegoat... their public example.\"");
	say();
	UI_remove_answer("wrongs");
	UI_add_answer("example");
	if (!(var000A == false)) goto labelFunc0451_08CC;
	UI_add_answer("Filbercio");
labelFunc0451_08CC:
	if (!(var000B == false)) goto labelFunc0451_08DB;
	UI_add_answer("Council of Mages");
labelFunc0451_08DB:
	case "example" attend labelFunc0451_0903:
	message("\"Filbercio hath hopped from bed to bed throughout the city, using every means of coercion possible. But let it be found that poor Ensorcio used magic to catch the favor of an Adept's daughter, and suddenly I am an unspeakable monster!\"");
	say();
	message("\"Thou canst not know what humiliation is until thou hast been turned out from thine home and told never to return on pain of death!\"");
	say();
	message("\"Thou canst not know the burning shame to hear that thy wrongdoing hath been proclaimed to all. To know that wherever thou goest people will say, @Isn't Ensorcio that exiled mage from Moonshade?@!\"");
	say();
	UI_remove_answer("example");
	UI_add_answer(["coercion", "Adept's daughter"]);
labelFunc0451_0903:
	case "coercion" attend labelFunc0451_091A:
	message("\"The least that I have heard of is blackmail... Who knows to what other means Filbercio will stoop to fulfill his lusts?\"");
	say();
	message("\"But I have no details, for I try not to listen to such stories as they always send me into a near-murderous fit... Thou shalt have to seek thine information elsewhere.\"");
	say();
	UI_remove_answer("coercion");
labelFunc0451_091A:
	case "Adept's daughter" attend labelFunc0451_0931:
	message("\"Oh, no! Thou shalt not have her name to drag through the mud alongside Ensorcio! Never!\"");
	say();
	message("\"I cared enough for her to spend my magics upon her, hoping that she would come to care for me. I'll not have thee blacken her name, for all that's been done to me!\"");
	say();
	UI_remove_answer("Adept's daughter");
labelFunc0451_0931:
	case "bye" attend labelFunc0451_0958:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(0xFFAF, "@Fare well...@", 0x0005);
	goto labelFunc0451_095B;
labelFunc0451_0958:
	goto labelFunc0451_0213;
labelFunc0451_095B:
	endconv;
labelFunc0451_095C:
	if (!(event == 0x0003)) goto labelFunc0451_09A2;
	if (!(var0004 == 0x001F)) goto labelFunc0451_09A2;
	UI_item_say(0xFFEE, "@Save me from this madman!@");
	UI_show_npc_face0(0xFFAF, 0x0000);
	if (!(var0003 == true)) goto labelFunc0451_0995;
	message("\"Do not interfere with me, Avatar!\" ~\"I am the MageLord now...\"");
	say();
	message("\"Thou dost know that Filbercio is lower than swine...\" ~\"He doth deserve to be tortured for all the ill that he hath done.\"");
	say();
	goto labelFunc0451_099D;
labelFunc0451_0995:
	message("\"Do not meddle in that which thou dost not understand, hero!\" ~\"I am the MageLord, and this man is evil.\"");
	say();
	message("\"He hath destroyed the lives of many.\" ~\"He doth deserve to be tortured for all the ill that he hath done.\"");
	say();
labelFunc0451_099D:
	UI_remove_npc_face0();
	abort;
labelFunc0451_09A2:
	return;
}


