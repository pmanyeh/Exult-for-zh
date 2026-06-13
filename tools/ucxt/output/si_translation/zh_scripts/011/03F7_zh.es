#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern var Func0956 0x956 (var var0000);
extern void Func082A 0x82A ();
extern void Func082C 0x82C ();

void Func03F7 shape#(0x3F7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc03F7_003C;
	UI_item_say(0xFE9C, "@Might I speak with thee?@");
	item->Func07D1();
	Func097F(item, (("@Certainly, " + var0000) + ".@"), 0x0002);
	UI_set_schedule_type(item, 0x0003);
labelFunc03F7_003C:
	if (!(event == 0x0009)) goto labelFunc03F7_05F3;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFECD, 0x0000);
	var0002 = UI_get_npc_id(item);
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03F7_007F;
	message("\"I am pleased to see thee, Champion of Balance.");
	say();
	message("\"How might I be of service to thee?\"");
	say();
	UI_add_answer("service");
	goto labelFunc03F7_00EF;
labelFunc03F7_007F:
	if (!(var0002 == false)) goto labelFunc03F7_00B0;
	message("\"I do not believe I have had the pleasure of meeting thee, ");
	message(var0000);
	message(". I think it would be wise for thee to prove that thou art not a foul Chaos spy.");
	say();
	message("\"Make no untoward moves, I warn thee, for I am Elissa, Order Mage of the First Rank.\"");
	say();
	UI_set_npc_id(item, 0x0002);
	UI_add_answer(["prove", "Chaos spy", "Mage of the First Rank"]);
	goto labelFunc03F7_00EF;
labelFunc03F7_00B0:
	if (!(var0002 == 0x0002)) goto labelFunc03F7_00DE;
	if (!gflags[0x030D]) goto labelFunc03F7_00D6;
	message("\"Ah, thou hast spoken with our Commander! Very good. What can I do for thee?\"");
	say();
	UI_set_npc_id(item, 0x0001);
	UI_add_answer("service");
	goto labelFunc03F7_00DB;
labelFunc03F7_00D6:
	message("\"Begone from my sight, miscreant!\"");
	say();
	abort;
labelFunc03F7_00DB:
	goto labelFunc03F7_00EF;
labelFunc03F7_00DE:
	message("\"How good it is to see thee again, ");
	message(var0001);
	message("! How might I be of service to thee this day?\"");
	say();
	UI_add_answer("service");
labelFunc03F7_00EF:
	UI_add_answer("bye");
labelFunc03F7_00F6:
	converse attend labelFunc03F7_05F2;
	case "prove" attend labelFunc03F7_0119:
	UI_remove_answer("prove");
	message("\"Unless thou canst prove to me that thou dost not mean harm to DeathWatch, I shall have to turn thee over to Isstanar.  Thou wouldst find the experience most unpleasant.\"");
	say();
	UI_add_answer(["DeathWatch", "Isstanar"]);
labelFunc03F7_0119:
	case "DeathWatch" attend labelFunc03F7_0141:
	UI_remove_answer("DeathWatch");
	message("\"'Tis not what our High Command calls it, but then they are not here. To them this is the Serpent's Fang keep. To those of us who have held back the mindless hordes of Chaos, this is DeathWatch keep...");
	say();
	message("\"Or, now that the war has passed us by, perhaps we should call it DeathWait.");
	say();
	message("\"But I must have assurances of thy identity, ");
	message(var0000);
	message(", or things will go badly for thee.\"");
	say();
	UI_add_answer("assurances");
labelFunc03F7_0141:
	case "assurances" attend labelFunc03F7_0240:
	UI_remove_answer("assurances");
	message("\"Thou must have some proof of thy identity...\"");
	say();
	if (!((!Func0942(0xFFFD)) || ((!Func0942(0xFFFE)) || (!Func0942(0xFFFF))))) goto labelFunc03F7_0181;
	UI_add_answer(["I need no proof!", "I am the Avatar!", "Amulet"]);
	goto labelFunc03F7_0240;
labelFunc03F7_0181:
	if (!Func0942(0xFFFD)) goto labelFunc03F7_01B3;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"");
	message(var0001);
	message(" is the Avatar! Thou dost not need any further proof than the fact that the Amulet didst bring us here!\"");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFD, "@Nosey biddy!@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_01B3:
	if (!Func0942(0xFFFE)) goto labelFunc03F7_01F5;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"What about the Amulet that Karnax didst give thee, Avatar? It brought us here. Perhaps this Mage would recognize it.\"");
	say();
	UI_remove_npc_face1();
	if (!Func0942(0xFFFD)) goto labelFunc03F7_01E4;
	UI_item_say(0xFFFE, "@Mind thy manners, Iolo!@");
	goto labelFunc03F7_01EE;
labelFunc03F7_01E4:
	UI_item_say(0xFFFE, "@I am sick of these rules!@");
labelFunc03F7_01EE:
	UI_set_conversation_slot(0x0000);
labelFunc03F7_01F5:
	if (!Func0942(0xFFFF)) goto labelFunc03F7_0225;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Beware how thou dost speak to the Avatar!");
	say();
	message("\"Avatar, let us use the Amulet to return to where we were. We have enough to worry with on this quest without such presumptuous women!\"");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFF, "@Arrogant wench!@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_0225:
	message("\"I have no idea what it is that thy friends speak of, ");
	message(var0000);
	message(". I mean no disrespect, but I have never heard of @the Avatar@ before.");
	say();
	message("\"But if I might see the Amulet that they speak about, perhaps I can end this questioning now.\"");
	say();
	UI_add_answer(["Amulet", "questioning"]);
labelFunc03F7_0240:
	case "I need no proof!" attend labelFunc03F7_025D:
	UI_remove_answer(["I need no proof!", "I am the Avatar!"]);
	message("\"Art thou a member of the High Command? Art thou a Hierophant? I think not!");
	say();
	message("\"Thine attitude dost seriously endanger thy freedom. I suggest that thou change it quickly.\"");
	say();
labelFunc03F7_025D:
	case "I am the Avatar!" attend labelFunc03F7_0276:
	UI_remove_answer(["I am the Avatar!", "I need no proof!"]);
	message("\"I mean no disrespect, but I have never heard of @the Avatar@ before.\"");
	say();
labelFunc03F7_0276:
	case "Amulet" attend labelFunc03F7_02B8:
	UI_remove_answer(["Amulet", "I am the Avatar!", "I need no proof!"]);
	message("\"No, it cannot be! There has not been a Champion of Balance since before Ssithnos was murdered!");
	say();
	message("\"I can scarcely believe my eyes! But the item is authentic, that much I am sure of...");
	say();
	message("\"Forgive my doubts, ");
	message(var0001);
	message(". I gave little credit to the stories. I thought that they were no more than folk tales born on the eve of war. I did not mean to offend thee.\"");
	say();
	UI_set_npc_id(item, 0x0001);
	UI_add_answer(["Champion of Balance", "Ssithnos", "stories"]);
labelFunc03F7_02B8:
	case "Champion of Balance" attend labelFunc03F7_02D3:
	UI_remove_answer("Champion of Balance");
	message("\"Law required that the Great Hierophant remain an impartial judge of the people. No matter what the offense, he could not raise his hand to dispense justice.");
	say();
	message("\"Only four times in history was there any who dared to defy the word of the Great Hierophant. As these people lived outside of Order and Chaos, neither group could act upon them without usurping the power of Balance.");
	say();
	message("\"So it fell to the Great Hierophant to choose one among his Acolytes to go and battle these unlawful ones. The Champion was given all the power of Balance and never failed to restore harmony to the land.\"");
	say();
labelFunc03F7_02D3:
	case "Ssithnos" attend labelFunc03F7_02EA:
	UI_remove_answer("Ssithnos");
	message("\"Ssithnos was the last Great Hierophant of Balance. But he was foully murdered by the followers of Chaos.");
	say();
	message("\"He was unable to choose a Champion, but only the Great Hierophant knew the location of the Amulet. Even though thou art ignorant of thy duty, thou art certainly the Champion of Balance.\"");
	say();
labelFunc03F7_02EA:
	case "stories" attend labelFunc03F7_0305:
	UI_remove_answer("stories");
	message("\"With the death of the Great Hierophant, the land soon fell into confusion. Order vowed vengeance upon Chaos, and those followers of Chaos fled in panic into much of the countryside.");
	say();
	message("\"During that time, the people began telling of the coming of a Champion of Balance who would see justice done and restore Balance to the world.");
	say();
	message("\"I thought that it was the prattling of cowards who wished to avoid the coming war. But now that I have seen thee and the Amulet, I am uncertain.\"");
	say();
labelFunc03F7_0305:
	case "questioning" attend labelFunc03F7_040A:
	UI_remove_answer("questioning");
	message("\"If thou wilt not answer to me, I shall be forced to bespell thee and take thee to the Commander of the keep.");
	say();
	if (!Func0942(0xFFFD)) goto labelFunc03F7_033A;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Thou dost take too much upon thyself, woman!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc03F7_033A:
	if (!Func0942(0xFFFE)) goto labelFunc03F7_0360;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"I doubt it shall be as easy as thou dost imagine. Thou dost not speak to an ordinary warrior...");
	say();
	message("\"This is the Avatar thou dost question!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc03F7_0360:
	if (!Func0942(0xFFFF)) goto labelFunc03F7_0382;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"If she tries anything, Avatar, I shall gladly lop her head off for the effort!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc03F7_0382:
	message("\"This is a time of war! Thou canst not think to wander about unchallenged. 'Twould be a breach of duty if I did not stop and question thee.\"");
	say();
	if (!Func0942(0xFFFD)) goto labelFunc03F7_03B2;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"I am sorry, good Mage. Thou art quite right.\"");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFD, "@My apologies.@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_03B2:
	if (!Func0942(0xFFFE)) goto labelFunc03F7_03DE;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"We are strangers here. Thou dost well in questioning us. We wrong thee with our demands to be unaccountable.\"");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFE, "@Remain vigilant.@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_03DE:
	if (!Func0942(0xFFFF)) goto labelFunc03F7_040A;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Thou must honor thy duty. I apologize for speaking ill of a honorable warrior such as thyself.\"");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFF, "@Duty is our honor...@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_040A:
	case "Isstanar" attend labelFunc03F7_042A:
	UI_remove_answer("Isstanar");
	message("\"Thou wouldst know him, if thou hadst met him. He is the ultimate Order warrior! Nothing touches him. He is bound only by his duty.\"");
	say();
	UI_add_answer(["ultimate warrior", "nothing touches him"]);
labelFunc03F7_042A:
	case "ultimate warrior" attend labelFunc03F7_0452:
	UI_remove_answer("ultimate warrior");
	message("\"Isstanar is invincible! He cannot die. He does not need food or rest. His strength makes even a weapon unnecessary.");
	say();
	message("\"What army, if filled with warriors such as Isstanar, could not march easily to victory? Soon this accursed war will be over, and I shall retire to a life of research.");
	say();
	message("\"Who knows, perhaps some day -- once I am sure that I would still have the use of my magic -- I shall make the final sacrifice and become one such as Isstanar.\"");
	say();
	UI_add_answer(["How can this be?", "final sacrifice"]);
labelFunc03F7_0452:
	case "How can this be?" attend labelFunc03F7_0469:
	UI_remove_answer("How can this be?");
	message("\"Oh, no! Even if I knew how this was accomplished, which I do not, I would not tell thee!");
	say();
	message("\"My honor is worth more than that! I shall not have it said that I betrayed Order!\"");
	say();
labelFunc03F7_0469:
	case "final sacrifice" attend labelFunc03F7_0480:
	UI_remove_answer("final sacrifice");
	message("\"To forsake the needs and desires of the body, what more dost thou ask?");
	say();
	message("\"I know nothing further than what I have told thee. I have not yet attained that level.\"");
	say();
labelFunc03F7_0480:
	case "nothing touches him" attend labelFunc03F7_0497:
	UI_remove_answer("nothing touches him");
	message("\"Isstanar has transcended the restraints of the body. All that remains is his iron will and the fine Logic of his mind.");
	say();
	message("\"Nothing can distract him from his duty. He does not fear, he does not worry. Unlike the rest of us here, he is not consumed by boredom or impatience. He just... is.\"");
	say();
labelFunc03F7_0497:
	case "Chaos spy" attend labelFunc03F7_04B7:
	UI_remove_answer("Chaos spy");
	message("\"Everyone knows that the tides of battle have turned since the High Command unleashed our secret weapon. Chaos would do anything to learn how to neutralize our advantage.\"");
	say();
	UI_add_answer(["secret weapon", "neutralize"]);
labelFunc03F7_04B7:
	case "secret weapon" attend labelFunc03F7_04CA:
	UI_remove_answer("secret weapon");
	message("\"If thou art observant, thou wilt know the answer to thy question. If not, I shall not aid thee... No matter who thou art.\"");
	say();
labelFunc03F7_04CA:
	case "neutralize" attend labelFunc03F7_04DD:
	UI_remove_answer("neutralize");
	message("\"The only secret that spies need learn is that there is no way to neutralize our advantage. Order cannot fail now... The sooner that those wretched Chaos followers realize this, the sooner this war shall end!\"");
	say();
labelFunc03F7_04DD:
	case "Mage of the First Rank" attend labelFunc03F7_0503:
	UI_remove_answer("Mage of the First Rank");
	message("\"Thou canst always tell the quality of a Mage by how rank he is... Thou canst smell his superiority for leagues!");
	say();
	message("\"But I should not jest so... Thou art a stranger and may mistake me. In truth, a Mage's rank reflects his ability.");
	say();
	message("\"Those of the First Rank have mastered all spells. Those of the Second Rank have mastered the next lowest level of spells, and so on.");
	say();
	message("\"Although our titles are different, I am equal in rank to SubCommander Tsandar.\"");
	say();
	UI_add_answer("SubCommander Tsandar");
labelFunc03F7_0503:
	case "SubCommander Tsandar" attend labelFunc03F7_0521:
	UI_remove_answer("SubCommander Tsandar");
	message("\"Tsandar is now Isstanar's aide, though he commanded the garrison after Commander Ardiniss' death. Tsandar did not take his replacement very well, I fear.");
	say();
	message("\"Tsandar's devotion to Order is strong, to be sure. But how could he expect to command now that Isstanar is here?\"");
	say();
	UI_add_answer("Commander Ardiniss");
labelFunc03F7_0521:
	case "Commander Ardiniss" attend labelFunc03F7_053E:
	UI_remove_answer("Commander Ardiniss");
	message("\"Ardiniss was an old man, ");
	message(var0000);
	message(". It was he who founded this keep. He was a loyal servant of Order, but he did not keep Discipline as he should have.");
	say();
	message("\"Fortunately, he was honored by a clean death in battle before anyone could question the strictness of his command.\"");
	say();
labelFunc03F7_053E:
	case "service" attend labelFunc03F7_05C2:
	UI_remove_answer("service");
	message("\"I have little to do these days. I do not know if I long to be at the front, or if I simply yearn for reassignment elsewhere. It is quite depressing being in a nearly deserted keep.");
	say();
	if (!gflags[0x00DB]) goto labelFunc03F7_05AD;
	message("\"I canst tell thou art a Mage, though I cannot perceive what Rank. If thou desirest, I will teach thee a few spells... for a small fee, of course.");
	say();
	message("\"Or, if thou dost not desire spells, perhaps I could train thee in the use of magic... for a small fee, naturally. It will help pass the time.\"");
	say();
	message("\"What dost thou desire?\"");
	say();
	var0003 = Func0956(["Nothing", "Spells", "Training"]);
	if (!(var0003 == "Nothing")) goto labelFunc03F7_0590;
	message("\"Another time, perhaps. I should go and make my rounds now anyway...\"");
	say();
	UI_remove_npc_face0();
	UI_item_say(item, "@Until later...@");
	abort;
labelFunc03F7_0590:
	if (!(var0003 == "Spells")) goto labelFunc03F7_059D;
	Func082A();
labelFunc03F7_059D:
	if (!(var0003 == "Training")) goto labelFunc03F7_05AA;
	Func082C();
labelFunc03F7_05AA:
	goto labelFunc03F7_05C2;
labelFunc03F7_05AD:
	message("\"If thou wert a Mage, I would have been willing to teach thee a few spells. Or I could have trained thee in the use of magic... All for a small fee, naturally. It would have helped to pass the time.");
	say();
	message("\"Ah well, I shall have to content myself with making rounds. I suppose it would be too much to hope for that I might encounter a Chaos monster this time...\"");
	say();
	UI_remove_npc_face0();
	UI_item_say(item, "@Duty calls!@");
	abort;
labelFunc03F7_05C2:
	case "bye" attend labelFunc03F7_05EF:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(item, "@Farewell!@", 0x0002);
	UI_set_schedule_type(item, 0x0015);
	goto labelFunc03F7_05F2;
labelFunc03F7_05EF:
	goto labelFunc03F7_00F6;
labelFunc03F7_05F2:
	endconv;
labelFunc03F7_05F3:
	return;
}


