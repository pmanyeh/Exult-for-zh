#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func03B1 shape#(0x3B1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = "he";
	if (!UI_is_pc_female()) goto labelFunc03B1_001F;
	var0002 = "she";
labelFunc03B1_001F:
	if (!(event == 0x0001)) goto labelFunc03B1_004F;
	UI_item_say(0xFE9C, "@Might I speak with thee?@");
	item->Func07D1();
	Func097F(item, (("@Certainly, " + var0000) + ".@"), 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc03B1_004F:
	if (!(event == 0x0009)) goto labelFunc03B1_0595;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFECE, 0x0000);
	var0003 = UI_get_npc_id(item);
	if (!(var0003 == false)) goto labelFunc03B1_0099;
	UI_set_npc_id(item, 0x0001);
	message("\"So, thou art come as the Order Hierophant foretold. I must admit, even as dedicated as I am, I doubted that there could be another Champion of Balance.");
	say();
	message("\"I am Isstanar, Commander of The Serpent's Fang and its garrison.");
	say();
	message("\"Thou wilt forgive me if I remain skeptical a bit longer. One does not attain a position such as mine by being overly trusting.\"");
	say();
	gflags[0x030D] = true;
	goto labelFunc03B1_00C9;
labelFunc03B1_0099:
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03B1_00BB;
	message("\"I am pleased to see thee, ");
	message(var0001);
	message(".");
	say();
	message("\"How might I aid the Champion of Balance in fulfilling thy duty?\"");
	say();
	UI_add_answer("apologize");
	goto labelFunc03B1_00C9;
labelFunc03B1_00BB:
	message("\"I am pleased to see thee, ");
	message(var0001);
	message(". Thy continued survival does much to convince me that thou art indeed the Champion of Balance.");
	say();
	message("\"How might I aid thee in fulfilling thy duty?\"");
	say();
labelFunc03B1_00C9:
	UI_add_answer(["Order Hierophant", "Champion of Balance", "Serpent's Fang", "bye"]);
labelFunc03B1_00DC:
	converse attend labelFunc03B1_0594;
	case "apologize" attend labelFunc03B1_011C:
	UI_remove_answer("apologize");
	if (!(gflags[0x02FC] && (!gflags[0x0313]))) goto labelFunc03B1_0114;
	message("\"I am now convinced that thou art the Champion of Balance, ");
	message(var0001);
	message(". I apologize for doubting thee.");
	say();
	message("\"Now that thou hast the Silver Seed, thou shouldst plant it. Our only hope is that the Tree of Balance will heal the land.");
	say();
	message("\"Please, ");
	message(var0001);
	message(", I humbly ask that thee to plant it soon.\"");
	say();
	goto labelFunc03B1_011C;
labelFunc03B1_0114:
	message("\"I apologize for doubting thee, Champion of Balance.");
	say();
	message("\"Although it is too late to stop the war, perhaps the Tree of Balance will speed the healing of the land's wounds after this grim business is done.\"");
	say();
labelFunc03B1_011C:
	case "Order Hierophant" attend labelFunc03B1_014A:
	UI_remove_answer("Order Hierophant");
	message("\"Could it be that thou dost not know of Calithiss the Avenger and our holy crusade?");
	say();
	message("\"But, if thou art the Champion of Balance, perhaps thou hast spent thy life as an Acolyte on the Isle of Crypts.");
	say();
	message("\"I shall honor thy title by telling thee the tale. If art an imposter, it shall be apparent soon enough... For thou wilt never survive what lies ahead.\"");
	say();
	UI_add_answer(["Avenger", "holy crusade", "Isle of Crypts", "what lies ahead"]);
labelFunc03B1_014A:
	case "Avenger" attend labelFunc03B1_0171:
	UI_remove_answer("Avenger");
	message("\"Before the War of Imbalance began, Calithiss was known as the Steadfast. But after the foul murder of Ssithnos she named herself the Avenger.\"");
	say();
	UI_push_answers();
	UI_add_answer(["War of Imbalance", "Ssithnos", "nothing more"]);
labelFunc03B1_0171:
	case "War of Imbalance" attend labelFunc03B1_019B:
	UI_remove_answer("War of Imbalance");
	message("\"Those who served Balance were always few in number, ");
	message(var0001);
	message(". I cannot imagine how one could walk the shining path, swayed by neither Order nor Chaos. I do not see how it is humanly possible.");
	say();
	message("\"But there has always been those few called to serve all Ophidians, and they followed the Great Hierophant. But followers of Chaos slew the last Great Hierophant and plunged the land into war, for there was no one to maintain Balance.\"");
	say();
	UI_add_answer(["shining path", "Ophidians"]);
labelFunc03B1_019B:
	case "shining path" attend labelFunc03B1_01B6:
	UI_remove_answer("shining path");
	message("\"Art thou testing my knowledge, Champion of Balance? Dost thou think to find an Order warrior of my status wanting?");
	say();
	message("\"I am no follower of Balance, but even I know that only the Great Hierophant may safely enter the Void to commune with the Serpents, that he walks upon a shining path to receive Their wisdom.");
	say();
	message("\"All others who would venture into the Void have no path to guide them and are doomed to death for their arrogance.\"");
	say();
labelFunc03B1_01B6:
	case "Ophidians" attend labelFunc03B1_01DB:
	UI_remove_answer("Ophidians");
	message("\"Thy questions art most perplexing, ");
	message(var0001);
	message(".  Thou art the Champion of Balance, and yet thou dost ask about things that all people know...");
	say();
	message("\"Art thou trying to discover how far we have fallen since Ssithnos perished? Then thou mayest judge Order by me, one of their ultimate warriors.");
	say();
	message("\"We are Ophidians, followers of Balance, Order and, alas, Chaos. We revere the Serpents that dwell within the Void, for Theirs is the wisdom that guides us all.");
	say();
	message("\"There, thou dost see that Order does not forget the teachings. That is why Order must triumph in this war. Chaos fiends killed the Great Hierophant. It is they who have fallen from the path, not Order.\"");
	say();
labelFunc03B1_01DB:
	case "Ssithnos" attend labelFunc03B1_0208:
	UI_remove_answer("Ssithnos");
	message("\"Ssithnos was the last Great Hierophant. He was a holy man, ");
	message(var0001);
	message(". The wisdom of the Great Earth Serpent shone in him.");
	say();
	message("\"It was my honor to meet him once when I was a young warrior, when he came to the Temple of Discipline. That was long before he met his tragic end.\"");
	say();
	UI_add_answer(["Great Earth Serpent", "young warrior", "Temple of Discipline"]);
labelFunc03B1_0208:
	case "Great Earth Serpent" attend labelFunc03B1_023D:
	UI_remove_answer("Great Earth Serpent");
	message("\"Why wouldst thou ask me? Thou art the Champion of Balance. How could I instruct thee in such a matter?");
	say();
	message("\"But I would venture to ask thee a question, ");
	message(var0001);
	message(". Do not take this amiss, for I do not mean to disparage thee. But...");
	say();
	message("\"What hope is there for thee, the Champion of Balance, to restore Balance if the Great Hierophant is dead? Without him to voice the will of the Great Earth Serpent, how canst thou hope to succeed?\"");
	say();
	UI_push_answers();
	UI_add_answer(["I know not.", "All shall be revealed later.", "There is no hope."]);
labelFunc03B1_023D:
	case "I know not." attend labelFunc03B1_0261:
	UI_remove_answer(["I know not.", "All shall be revealed later.", "There is no hope."]);
	message("\"Alas, I had hoped that thou wouldst know what was to happen. Now I do not know whether to believe that thou art not the Champion of Balance, or whether thou art simply ignorant of thy fate.");
	say();
	message("\"I must consider this... It is not unusual for a warrior to be sent into battle without knowing what he shall face, but I had expected a pawn of prophecy to be more... informed.\"");
	say();
	UI_pop_answers();
labelFunc03B1_0261:
	case "All shall be revealed later." attend labelFunc03B1_028D:
	UI_remove_answer(["I know not.", "All shall be revealed later.", "There is no hope."]);
	message("\"Thou dost answer my question with an easy evasion. This either means that thou knowest not, or that thou wilt not tell me.");
	say();
	message("\"If thou knowest not, it means that thou art either not the Champion of Balance, or that thou art ignorant of thy fate.");
	say();
	message("\"If thou art not the Champion of Balance, I pity thee for thou art not long for this life. If thou art ignorant of thy fate, it is nothing to cause thee shame. Many warriors go to battle uncertain of their fate.");
	say();
	message("\"If, on the other hand, thou knowest and choose not to reveal it to me, I respect thy choice. The Champion of Balance is the pawn of prophecy, and I can wait forever to learn the true answer to my question.\"");
	say();
	UI_pop_answers();
labelFunc03B1_028D:
	case "There is no hope." attend labelFunc03B1_02B7:
	UI_remove_answer(["I know not.", "All shall be revealed later.", "There is no hope."]);
	message("\"Thou art truly worthy of the title Champion of Balance. Only a true warrior understands that duty is all that remains when hope is lost.");
	say();
	message("\"I salute thee, ");
	message(var0001);
	message(", for thy path is difficult, but thy name shall be honored among warriors.\"");
	say();
	UI_pop_answers();
labelFunc03B1_02B7:
	case "young warrior" attend labelFunc03B1_02D1:
	UI_remove_answer("young warrior");
	message("\"I have not always been as thou dost see me now. I have spent a lifetime becoming worthy of this honor.\"");
	say();
	UI_add_answer("honor");
labelFunc03B1_02D1:
	case "honor" attend labelFunc03B1_02EB:
	UI_remove_answer("honor");
	message("\"I was once flesh and blood, like thee, a warrior of Order. I was chosen to be tested shortly before the war began.\"");
	say();
	UI_add_answer("tested");
labelFunc03B1_02EB:
	case "tested" attend labelFunc03B1_0306:
	UI_remove_answer("tested");
	message("\"Only those warriors possessing unswerving Discipline, flawless Ethicality, and the finest Logic are selected for testing.");
	say();
	message("\"Of all of those brought before the Order Hierophant, only a few hands of that number withstand the testing. Of that number, less than a hand make the final sacrifice.");
	say();
	message("\"I am one of the elite... The ultimate Order warrior. I have traded my body for eternal service to Order.\"");
	say();
labelFunc03B1_0306:
	case "Temple of Discipline" attend labelFunc03B1_032A:
	UI_remove_answer("Temple of Discipline");
	message("\"The Temple was once my home, ");
	message(var0001);
	message(". It was my privilege to serve as a guard for the Master of Discipline. It was there that the long road to this keep began.");
	say();
	message("\"The Temple is the primary staging and training area for our efforts in this accursed war. It is the headquarters of the High Command.\"");
	say();
	UI_add_answer("High Command");
labelFunc03B1_032A:
	case "High Command" attend labelFunc03B1_0341:
	UI_remove_answer("High Command");
	message("\"All respect to them!");
	say();
	message("\"The High Command are the highest ranking Order officers who report directly to the Order Hierophant. It is they who are charged with fulfilling the will of the Order Serpent to unite the world under the Ethicality and Discipline of Order.\"");
	say();
labelFunc03B1_0341:
	case "holy crusade" attend labelFunc03B1_035F:
	UI_remove_answer("holy crusade");
	message("\"The followers of Chaos broke the Teaching and plunged the land into war. It is they who murdered the Great Hierophant. It is they who have killed thousands of peaceful followers of Order.");
	say();
	message("\"The followers of Chaos must be held responsible for their crimes. There is no Great Hierophant to oversee justice, so it must fall to Order to see that the shedding of blood is met in kind until Chaos bows before Order, and Balance is restored.\"");
	say();
	UI_add_answer("Teaching");
labelFunc03B1_035F:
	case "Teaching" attend labelFunc03B1_037A:
	UI_remove_answer("Teaching");
	message("\"Before Ssithnos was murdered, this land thrived in Balance. Order and Chaos each knew their duty, their place within the scheme of life. Both factions were equal, held in check by the authority of the Great Hierophant.");
	say();
	message("\"All people were taught that this had always been so, and must remain so. That was the will of the Great Earth Serpent, so that all people would reap the bounty of Balance's peace.");
	say();
	message("\"But the Great Hierophant was murdered and now there is no peace. There is no bounty... only war and bloodshed. It was Chaos that brought us to this crossroad, and it is they who will pay.\"");
	say();
labelFunc03B1_037A:
	case "Isle of Crypts" attend labelFunc03B1_039C:
	UI_remove_answer("Isle of Crypts");
	message("\"How canst thou be the Champion of Balance and not know of the Isle of Crypts?! I suspect thee to be an imposter with each question thou dost utter!");
	say();
	message("\"But I have been taught that it is the duty of all people to aid a pawn of prophecy. I must hold fast to the belief that, if thou art false, thou wilt fall to a fate worse than any I could mete out.");
	say();
	message("\"So I shall tell thee what little a warrior of Order knows. I hope that it instructs thee well, if thou art truly the Champion of Balance, for thou art woefully ignorant of thy duty.\"");
	say();
	UI_add_answer("Tell me.");
labelFunc03B1_039C:
	case "Tell me." attend labelFunc03B1_03BE:
	UI_remove_answer("Tell me.");
	message("\"The Isle of Crypts is the very heart of Balance. It is believed that the island was once the dwelling place of the Great Earth Serpent, before He journeyed into the Void to bring Balance to the universe.");
	say();
	message("\"It is common knowledge that this hallowed ground is the final resting place of all the Great Hierophants... though I know not if this is true of poor Sithnos.");
	say();
	message("\"It is also said that the island is the home of the Acolytes of Balance, though I would have thought that thou wouldst have known more of this than I.\"");
	say();
	UI_add_answer("Where is the island?");
labelFunc03B1_03BE:
	case "Where is the island?" attend labelFunc03B1_03D9:
	UI_remove_answer("Where is the island?");
	message("\"Thou art most certainly not what I would have expected from the Champion of Balance. But it is not my place to judge a pawn of prophecy.");
	say();
	message("\"I regret to inform thee that I do not know the exact location of the Isle of Crypts. It is somewhere in the north-west, but other than that I know not.");
	say();
	message("\"I had always hoped that one day I would be able to make a pilgrimage there, but now it shall have to wait until after the war.\"");
	say();
labelFunc03B1_03D9:
	case "what lies ahead" attend labelFunc03B1_0401:
	UI_remove_answer("what lies ahead");
	message("\"If thou art truly the Champion of Balance, which I begin to doubt more strongly, then thou must have the Silver Seed to restore Balance to the world.");
	say();
	message("\"While I will freely tell thee that it is hidden here within this keep, I shall not tell thee where. Thou must be truly illumined before thou wilt find the Seed... *However, I shall tell thee that the magical orbs have been lost or scattered.");
	say();
	message("\"It shall be up to thee to overcome the hazards of this region to obtain these orbs. If thou dost survive in these attempts, I shall be more disposed to believe that thou art the Champion of Balance.\"");
	say();
	UI_add_answer(["Silver Seed", "magical orbs"]);
labelFunc03B1_0401:
	case "Silver Seed" attend labelFunc03B1_0418:
	UI_remove_answer("Silver Seed");
	message("\"The Silver Seed is the acorn from the Tree of Balance. Only once every one hundred centuries does the Tree of Balance cast an acorn. It is our honor to be the keeper of the Seed.");
	say();
	message("\"When the Great Hierophant was murdered, the Tree of Balance that had existed for time beyond memory withered and died. Once we have crushed Chaos, Calithiss the Avenger shall take a new name -- the Renewer, and plant the seed so that Balance may heal our land.\"");
	say();
labelFunc03B1_0418:
	case "magical orbs" attend labelFunc03B1_043C:
	UI_remove_answer("magical orbs");
	message("\"I am sorry, ");
	message(var0001);
	message(". My conscious will not allow me to tell thee any more on this subject. I still cannot believe that thou art the Champion of Balance. So thou must find thy own answers. I have aided thee enough.");
	say();
	message("\"The only thing I will tell thee is that thou shouldst search the areas adjacent to this keep for the orbs. They have been widely scattered... And, take care for those areas are dangerous.\"");
	say();
	UI_add_answer("dangerous");
labelFunc03B1_043C:
	case "dangerous" attend labelFunc03B1_0465:
	UI_remove_answer("dangerous");
	message("\"I have not been at the keep long, ");
	message(var0001);
	message(", so I cannot yet confirm any of these stories. I shall continue investigating their truth, but I see no reason why the warriors garrisoned here should lie.");
	say();
	message("\"It is said that there is a dragon, and a lich, nearby. This seems unlikely, as one would usually immediately kill or drive away the other... unless they are in league in some way.");
	say();
	message("\"There is also an abandoned outpost that is considered to be inhabited by creatures of Chaos. And, of course, there is the unfinished maze... from which Issik, the architect, never returned to reveal the secret of its interior.");
	say();
	message("\"I am told there is a madman who dwells within one of the caverns near here. The warriors call him the Fiend. They say that he feeds on human flesh.\"");
	say();
	message("\"Use caution, but I fear that thou wilt have to scour these areas in search of the orbs thou dost seek.\"");
	say();
labelFunc03B1_0465:
	case "Champion of Balance" attend labelFunc03B1_049D:
	UI_remove_answer("Champion of Balance");
	message("\"Thou dost possess the lost Amulet of Balance, ");
	message(var0001);
	message(". According to legend, only the Champion of Balance may bear it... all others would perish. However, I am no Mage. I do not know if this is true.");
	say();
	if (!(!gflags[0x0300])) goto labelFunc03B1_0493;
	message("\"It is said that the Champion will restore Balance and heal our land. As it appears that thou art this long-awaited Champion, I have something which should aid thee.\"");
	say();
	UI_add_answer("What is it?");
	goto labelFunc03B1_049D;
labelFunc03B1_0493:
	message("\"I hope thou art finding the key ring to be of use, ");
	message(var0001);
	message(". Thou wilt need all the help thou canst find ere thy quest is finished.\"");
	say();
labelFunc03B1_049D:
	case "What is it?" attend labelFunc03B1_04E6:
	UI_remove_answer("What is it?");
	message("\"It is a key ring, ");
	message(var0001);
	message(". Although it may seem to be a paltry offering, it is no mere trinket. It is a magical item.");
	say();
	message("\"Any key that thou dost put upon it will disappear. It shall never weigh more that what it does now. And if any of the keys thou didst put upon it fits a door thou wishest to open, one of the keys that thou dost see upon the keyring now will open it.");
	say();
	message("\"I hope that thou shall find it useful to thee.\"");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x01E5, 0xFE99, 0x0000, false, true);
	gflags[0x0300] = true;
	UI_add_answer(["Who crafted it?", "Why give it to me?"]);
labelFunc03B1_04E6:
	case "Who crafted it?" attend labelFunc03B1_050D:
	UI_remove_answer("Who crafted it?");
	message("\"I know not who crafted it, ");
	message(var0001);
	message(". It is very old, and once belonged to the Order Hierophant.");
	say();
	message("\"When I made the final sacrifice, Calithiss said, @Give this to ");
	message(var0002);
	message(" who shall heal our land.@");
	say();
	message("\"I know now that she meant thee, Champion. How she knew that I would meet thee I shall never know. But, as always, her wisdom is infallible.\"");
	say();
labelFunc03B1_050D:
	case "Why give it to me?" attend labelFunc03B1_0520:
	UI_remove_answer("Why give it to me?");
	message("\"It is said that the Champion shall need the keys to the land before Balance shall be restored. I think that this was meant symbolically, but the keyring was made for thee anyway. In this way, Order recognizes what thou shalt do for us all.\"");
	say();
labelFunc03B1_0520:
	case "Serpent's Fang" attend labelFunc03B1_0541:
	UI_remove_answer("Serpent's Fang");
	message("\"Serpent's Fang is the name of this keep, ");
	message(var0001);
	message(". It was so designated because this was once the keep from which all Order attacks on Chaos were launched.");
	say();
	message("\"Commander Ardiniss, who I now replace, was a brilliant tactician. He held this keep and its surroundings through some of the most bloody fighting this war has yet seen. It was during that time that the warriors began referring to the keep as DeathWatch.");
	say();
	message("\"Ardiniss' loss was a sad blow as the tides of war turned. Now Serpent's Fang holds the line of retreat, not the forefront of the war, and DeathWatch has taken on another meaning... watching for the fall of Chaos.\"");
	say();
labelFunc03B1_0541:
	case "nothing more" attend labelFunc03B1_0551:
	message("\"As thou dost wish... What else shall we speak of?\"");
	say();
	UI_pop_answers();
labelFunc03B1_0551:
	case "bye" attend labelFunc03B1_0591:
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03B1_056A;
	message("\"I wish thee luck in thy journeys, Champion of Balance. I am sure that thy road will be long...\"");
	say();
	goto labelFunc03B1_056E;
labelFunc03B1_056A:
	message("\"I am still unconvinced that thou art the Champion of Balance. I suppose only time will tell. Thou art free to go, but I shall be watching thee...\"");
	say();
labelFunc03B1_056E:
	UI_remove_npc_face0();
	UI_item_say(0xFE9C, "@Farewell!@");
	Func097F(item, "@Mind thy duty!@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	goto labelFunc03B1_0594;
labelFunc03B1_0591:
	goto labelFunc03B1_00DC;
labelFunc03B1_0594:
	endconv;
labelFunc03B1_0595:
	return;
}


