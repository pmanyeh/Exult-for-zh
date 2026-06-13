#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0873 0x873 ();

void Func03B3 shape#(0x3B3) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_npc_id(item);
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc03B3_004A;
	if (!(!var0000)) goto labelFunc03B3_002A;
	UI_item_say(0xFE9C, "@Pardon me, Milord.@");
	goto labelFunc03B3_0034;
labelFunc03B3_002A:
	UI_item_say(0xFE9C, "@Pardon me, SubCommander.@");
labelFunc03B3_0034:
	item->Func07D1();
	Func097F(item, "@Dost thou address me?@", 0x0002);
	UI_set_schedule_type(item, 0x0003);
labelFunc03B3_004A:
	if (!(event == 0x0009)) goto labelFunc03B3_0494;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFECB, 0x0000);
	if (!(!var0000)) goto labelFunc03B3_0083;
	message("\"Who art thou?! But wait -- Thou dost wear the Amulet of Balance!");
	say();
	message("\"I am no lord, stranger. I am merely a warrior. Thou mayest address me by name or title. I am SubCommander Tsandar.\"");
	say();
	UI_set_npc_id(item, 0x0001);
	goto labelFunc03B3_00A5;
labelFunc03B3_0083:
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03B3_009B;
	message("\"I am honored to see thee again, Champion of Balance.\"");
	say();
	UI_add_answer("Congratulations");
	goto labelFunc03B3_00A5;
labelFunc03B3_009B:
	message("\"Forgive my rudeness, ");
	message(var0001);
	message(". I fear I am not yet accustomed to the title of SubCommander.\"");
	say();
labelFunc03B3_00A5:
	UI_add_answer(["Train", "SubCommander", "Amulet of Balance", "bye"]);
labelFunc03B3_00B8:
	converse attend labelFunc03B3_0493;
	case "Congratulations" attend labelFunc03B3_00F4:
	UI_remove_answer("Congratulations");
	if (!(gflags[0x02FC] && (!gflags[0x0313]))) goto labelFunc03B3_00EC;
	message("\"It took a mighty warrior to retrieve those Orbs, ");
	message(var0001);
	message(". Thou art truly worthy of carrying the Silver Seed.");
	say();
	message("\"Plant it quickly, ");
	message(var0001);
	message(". It may be the only hope our battered world has of surviving this war.\"");
	say();
	goto labelFunc03B3_00F4;
labelFunc03B3_00EC:
	message("\"Now that the Tree of Balance again graces our world, perhaps we can end this war soon.");
	say();
	message("\"Thou art truly the Champion of Balance.\"");
	say();
labelFunc03B3_00F4:
	case "Train" attend labelFunc03B3_00FF:
	Func0873();
labelFunc03B3_00FF:
	case "SubCommander" attend labelFunc03B3_0129:
	UI_remove_answer("SubCommander");
	message("\"When I was assigned to this garrison, I was Senior File Leader. Then, nine months ago, when those Chaos fiends took Commander Ardiniss, I was was made Garrison Commander.");
	say();
	message("\"Naturally, now that Isstanar is here, I have become the SubCommander.\"");
	say();
	UI_add_answer(["Senior File Leader", "Chaos fiends", "Commander Ardiniss", "Isstanar"]);
labelFunc03B3_0129:
	case "Senior File Leader" attend labelFunc03B3_0149:
	UI_remove_answer("Senior File Leader");
	message("\"Ones rank denotes how many warriors one is responsible for. It is always an even number of men, measured in hands -- or groups of five.\"");
	say();
	UI_add_answer(["rank", "even number"]);
labelFunc03B3_0149:
	case "rank" attend labelFunc03B3_0168:
	UI_remove_answer("rank");
	message("\"A Senior Warrior commands one hand of warriors, and reports to the Junior File Leader.");
	say();
	message("\"A Junior File Leader is in charge of two hands of warriors, and reports to the File Leader.");
	say();
	message("\"A File Leader oversees four hands of warriors, and reports to the Senior File Leader.\"");
	say();
	message("\"A Senior File Leader controls ten hands of warriors, and reports to the SubCommander of the Garrison. The SubCommander acts as the aide to the Garrison Commander.\"");
	say();
labelFunc03B3_0168:
	case "even number" attend labelFunc03B3_017B:
	UI_remove_answer("even number");
	message("\"Of course, even! Dost thou not have two hands? Are there not two forces continually at war within the Void -- Order and vile Chaos?");
	say();
labelFunc03B3_017B:
	case "Chaos fiends" attend labelFunc03B3_018E:
	UI_remove_answer("Chaos fiends");
	message("\"Everyone knows that the followers of Chaos practice unnatural acts! By the two hands of Order, we shall wipe the Chaos abomination from the face of the land!\"");
	say();
labelFunc03B3_018E:
	case "Commander Ardiniss" attend labelFunc03B3_01BC:
	UI_remove_answer("Commander Ardiniss");
	message("\"Commander Ardiniss was a brave man, ");
	message(var0001);
	message(". He was responsible for carving this keep out of hostile Chaos territory.");
	say();
	message("\"No warrior could match the Commander's mind for Logic. Yet even Logic is no match for the sheer number of Chaos followers that fell on us that day...");
	say();
	message("\"I regret that we were unable to wrest his body from those vile murderers. Ardiniss deserved a proper warrior's funeral.\"");
	say();
	UI_add_answer(["What is this place?", "sheer number"]);
labelFunc03B3_01BC:
	case "What is this place?" attend labelFunc03B3_01E4:
	UI_remove_answer("What is this place?");
	message("\"The Order High Command designated this keep as the Serpent's Fang. But our troops call it DeathWatch.");
	say();
	message("\"The battles have long since raged beyond us. It is our sad duty to continue to hold DeathWatch from any retreating Chaos minions.");
	say();
	message("\"We long for word of how the War of Imbalance turns.\"");
	say();
	UI_add_answer(["Order High Command", "battles"]);
labelFunc03B3_01E4:
	case "Order High Command" attend labelFunc03B3_020E:
	UI_remove_answer("Order High Command");
	message("\"All respect to them!");
	say();
	message("\"The High Command are the officers that report directly to the Order Hierophant. It is their wisdom that will fulfill the will of the Order Serpent to unite the world under the Ethicality and Discipline of Order.\"");
	say();
	UI_add_answer(["Order Hierophant", "Order Serpent", "Ethicality", "Discipline"]);
labelFunc03B3_020E:
	case "Order Hierophant" attend labelFunc03B3_022C:
	UI_remove_answer("Order Hierophant");
	message("\"The Order Hierophant is our spiritual leader. She is the Voice of the Order Serpent. I would follow her orders even into the very face of death.");
	say();
	message("\"After those... those... Chaos monsters murdered the Great Hierophant, it was only natural that command of the land fall to Order. We will make them all pay for their crime!\"");
	say();
	UI_add_answer("Great Hierophant");
labelFunc03B3_022C:
	case "Great Hierophant" attend labelFunc03B3_0251:
	UI_remove_answer("Great Hierophant");
	message("\"Sithnos was the last Great Hierophant, ");
	message(var0001);
	message(". He was murdered when I was but a boy, over three hands of years ago now.");
	say();
	message("\"The Great Hierophant was the Voice of the Great Earth Serpent... Only the will of the Great Earth Serpent could keep the animosity of Order and Chaos at bay.");
	say();
	message("\"Only the Great Hierophant's wisdom kept Balance within the land.  The last Acolytes of Balance spirited Ssithnos' body away, and the warriors of Order swore vengeance upon Chaos...");
	say();
	message("\"We have been at war ever since.\"");
	say();
labelFunc03B3_0251:
	case "Order Serpent" attend labelFunc03B3_026C:
	UI_remove_answer("Order Serpent");
	message("\"The Order Serpent dwells within the Void, eternally battling the Chaos Serpent. Only the strength of the Great Earth Serpent could separate these ancient enemies.");
	say();
	message("\"But something happened within the Void... I know not what. The power of the Great Earth Serpent is no longer felt, and we no longer have the wisdom of Sithnos to guide us.");
	say();
	message("\"Our land is doomed unless we can restore it to Order.\"");
	say();
labelFunc03B3_026C:
	case "Ethicality" attend labelFunc03B3_028C:
	UI_remove_answer("Ethicality");
	message("\"Ethicality is one of the major tenets of Order, ");
	message(var0001);
	message(". By forcing those depraved followers of Chaos to conform with the accepted moral standards of Order we shall end the decadence that Tolerance has spread.\"");
	say();
	UI_add_answer("Tolerance");
labelFunc03B3_028C:
	case "Tolerance" attend labelFunc03B3_02A7:
	UI_remove_answer("Tolerance");
	message("\"Wouldst thou allow a thief or a murderer to enter thy home, to dwell alongside thy loved ones?");
	say();
	message("\"Yet this is what insanity Chaos preaches! They would have it thought that even those who practice unnatural acts must be accepted as part of the fabric of life!");
	say();
	message("\"Better that such fabric be unwoven or burned!\"");
	say();
labelFunc03B3_02A7:
	case "Discipline" attend labelFunc03B3_02C5:
	UI_remove_answer("Discipline");
	message("\"Discipline is what gives meaning to my life! Once we have yoked the laggard followers of Chaos to the Discipline of Order, there will be peace in the land!");
	say();
	message("\"It matters not if one has no Enthusiasm for one's orders. Those in command know what must be done, that is enough for a true warrior.\"");
	say();
	UI_add_answer("Enthusiasm");
labelFunc03B3_02C5:
	case "Enthusiasm" attend labelFunc03B3_02E0:
	UI_remove_answer("Enthusiasm");
	message("\"Imagine what would happen if everyone went about doing only what they pleased, only what appealed to them! Nothing would ever work smoothly again, for there are always distasteful tasks to be performed.");
	say();
	message("\"Yet the followers of Chaos feel that no one should be constrained to do anything they do not wish to do! Who then would dig latrines, or collect refuse, or bury the dead?");
	say();
	message("\"The land would soon be overrun by disease and vermin!\"");
	say();
labelFunc03B3_02E0:
	case "battles" attend labelFunc03B3_0308:
	UI_remove_answer("battles");
	message("\"For more than two hands of years, Order has fought only a holding battle against the forces of Chaos. Nothing we did could give us an advantage over their numbers.");
	say();
	message("\"But now that we have the automatons, nothing can stand in our way! DeathWatch was situated on the spear's point in the confrontation... Now we guard the lines of retreat.");
	say();
	message("\"I only wish we knew more than what Commander Isstanar had to tell us when he arrived a few weeks ago.\"");
	say();
	UI_add_answer(["automatons", "DeathWatch"]);
labelFunc03B3_0308:
	case "automatons" attend labelFunc03B3_031F:
	UI_remove_answer("automatons");
	message("\"Are they not a marvel?! Look at how they go about their tasks without complaint! They have no cares, no concerns... only their assigned duty.");
	say();
	message("\"Since our mages discovered the way to imbue their metal bodies with life, Chaos has been without hope! With metal warriors to lead the way, victory will soon be ours!\"");
	say();
labelFunc03B3_031F:
	case "DeathWatch" attend labelFunc03B3_0332:
	UI_remove_answer("DeathWatch");
	message("\"I am sorry. I should refer to the keep as the Serpent's Fang, but I think of it as DeathWatch... even so.\"");
	say();
labelFunc03B3_0332:
	case "sheer number" attend labelFunc03B3_034B:
	UI_remove_answer("sheer number");
	message("\"I could not count them all, ");
	message(var0001);
	message(". They filled all the passageways.  It was all we could do to maintain our hold on the keep.\"");
	say();
labelFunc03B3_034B:
	case "Isstanar" attend labelFunc03B3_0373:
	UI_remove_answer("Isstanar");
	message("\"The epitome of Order warriors, ");
	message(var0001);
	message("! Isstanar has forsaken the cares of the flesh and taken the body of an automaton!");
	say();
	message("\"Eternal life and service to Order are his. It is quite an honor to have him assigned as our new Commander. I am proud that he has allowed me to become his aide.");
	say();
	message("\"Perhaps one day I too will be worthy of a Commander's position... And I shall not have to make these endless circuits of a nearly empty garrison!\"");
	say();
	UI_add_answer("taken the body");
labelFunc03B3_0373:
	case "taken the body" attend labelFunc03B3_038A:
	UI_remove_answer("taken the body");
	message("\"I know not how it is accomplished. It is a secret closely guarded by the Order Hierophant and the High Command. Thou couldst ask Isstanar if thou dost desire, but I doubt that he will tell thee anything.");
	say();
	message("\"In fact, there is a cold arrogance about him. He does not speak with any of the command unless it is in the line of duty. His commitment to Discipline is absolute, but he does little to ease our minds.\"");
	say();
labelFunc03B3_038A:
	case "Amulet of Balance" attend labelFunc03B3_03AE:
	UI_remove_answer("Amulet of Balance");
	message("\"Thou dost not know what thou dost wear?! Couldst thou truly be the warrior of prophecy and not know what it is that thou dost wear?");
	say();
	message("\"Perhaps I should send thee to speak with Surok. He is the closest thing we have to a Keeper of Knowledge. I canst tell thee what I know, but I fear that it will do thee little good.\"");
	say();
	UI_add_answer(["warrior of prophecy", "Surok"]);
labelFunc03B3_03AE:
	case "warrior of prophecy" attend labelFunc03B3_03D0:
	UI_remove_answer("warrior of prophecy");
	message("\"When the Great Hierophant was struck down, tales spread through the land saying that a warrior would arise to avenge the death of Sithnos.");
	say();
	message("\"The Amulet thou dost wear is one that only the Champion of Balance could wear. I do not know how thou couldst wear it and live, if thou art not the chosen Champion.");
	say();
	message("\"But I do not understand how thou couldst not know of thy duty, if thou art the chosen Champion. This is most perplexing... My Logic does not seem equal to the task. Speak with Isstanar or Surok.\"");
	say();
	UI_add_answer("Champion of Balance");
labelFunc03B3_03D0:
	case "Champion of Balance" attend labelFunc03B3_03E7:
	UI_remove_answer("Champion of Balance");
	message("\"In the history of our people there were times when a group of disbelievers refused to accept the authority of the Great Hierophant.");
	say();
	message("\"It would be unseemly for such a holy man to take arms against anyone. So a warrior was chosen from among the Acolytes of Balance to go forth and subdue the renegades. These warriors were without equal and never failed, no matter what the odds.\"");
	say();
labelFunc03B3_03E7:
	case "Surok" attend labelFunc03B3_040B:
	UI_remove_answer("Surok");
	message("\"Surok is our healer. He is very old, and I fear that his resolve is weakening. He has not yet failed in his duty, but I have advised Isstanar to watch him closely nonetheless.");
	say();
	message("\"We cannot allow any lapse in Discipline. I suspect that he has lost sight of the absolute Ethicality.\"");
	say();
	UI_add_answer(["resolve weakening", "lost sight"]);
labelFunc03B3_040B:
	case "resolve weakening" attend labelFunc03B3_0422:
	UI_remove_answer("resolve weakening");
	message("\"Surok has been a fearless warrior in his day, as well as a healer. It is a sign of his aging, assuredly, but he seems... well, less sure of the right of our cause.");
	say();
	message("\"I hope that I die in battle, that no one may doubt my dedication to Order!\"");
	say();
labelFunc03B3_0422:
	case "lost sight" attend labelFunc03B3_0448:
	UI_remove_answer("lost sight");
	message("\"We captured a Chaos monster lurking on the outskirts of the keep nearly a month ago. It was a fearsome beast -- an impossible cross between a man and a cat.");
	say();
	message("\"It was my immediate thought that this creature might be Chaos' answer to our automatons. So I brought the beast to Surok to dissect.");
	say();
	message("\"I have no way to prove this, of course, else I would have gone to Isstanar. But I believe that Surok was taken in with pity for the beast and allowed it to escape.");
	say();
	message("\"The beast fled into the Endless Maze, and we have been unable to recapture it. I could not afford to risk any warriors to hunt it down, and we have not seen the monster again.\"");
	say();
	UI_add_answer("Endless Maze");
labelFunc03B3_0448:
	case "Endless Maze" attend labelFunc03B3_0463:
	UI_remove_answer("Endless Maze");
	message("\"Issik the Architect came to the keep before the start of the war. It was his duty to create an impossible maze to protect the treasures of the Order.");
	say();
	message("\"But when the war started, Issik was told that he only had three months to complete the work. No one knows what became of him, for he never came out.");
	say();
	message("\"The three rescuers who sought to find him never returned. The entrance to the Maze was locked... until the beast stole the key during its escape.\"");
	say();
labelFunc03B3_0463:
	case "bye" attend labelFunc03B3_0490:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(item, "@Have Discipline!@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	goto labelFunc03B3_0493;
labelFunc03B3_0490:
	goto labelFunc03B3_00B8;
labelFunc03B3_0493:
	endconv;
labelFunc03B3_0494:
	return;
}


