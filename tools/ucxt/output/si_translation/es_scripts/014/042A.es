#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func08FF 0x8FF ();

void Func042A object#(0x42A) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_schedule_type(0xFFD6);
	var0004 = Func0994();
	if (!(event == 0x0000)) goto labelFunc042A_0097;
	if (!(var0003 == 0x001D)) goto labelFunc042A_0097;
	var0005 = UI_find_nearby(0xFFD6, 0x025F, 0x0002, 0x0010);
	var0006 = UI_get_item_quality(var0005);
	if (!(var0006 == 0x000F)) goto labelFunc042A_0097;
	UI_set_schedule_type(0xFFD6, 0x000F);
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x34, (byte)0x34, (byte)0x34]);
	var0008 = UI_get_npc_id(0xFFD8);
	var0008 = (var0008 + 0x0001);
	UI_set_npc_id(0xFFD8, var0008);
labelFunc042A_0097:
	if (!(event == 0x0001)) goto labelFunc042A_00C5;
	UI_item_say(0xFE9C, "@May we speak?@");
	0xFFD6->Func07D1();
	Func097F(0xFFD6, "@I have little time!@", 0x0002);
	UI_set_schedule_type(0xFFD6, 0x0003);
labelFunc042A_00C5:
	if (!(event == 0x0009)) goto labelFunc042A_09F3;
	UI_run_schedule(0xFFD6);
	UI_clear_item_say(0xFFD6);
	UI_show_npc_face0(0xFFD6, 0x0000);
	var0009 = UI_get_item_flag(0xFFD6, 0x001C);
	if (!(gflags[0x0004] == true)) goto labelFunc042A_0119;
	message("\"So, thou art still alive!\" ~\"I had wondered when thy companion arrived in such a strange state.\"");
	say();
	message("\"I never thought I would live to see mighty Moonshade humbled, but Shamino hath certainly managed it quite handily.\"");
	say();
	message("\"I would be careful in the streets here now, ");
	message(var0000);
	message(". 'Tis somewhat... unsafe.  Oh, and the... fallen Filbercio is searching for thee.\"");
	say();
	UI_add_answer(["strange state", "fallen Filbercio"]);
labelFunc042A_0119:
	if (!(var0009 == false)) goto labelFunc042A_013F;
	if (!gflags[0x01CC]) goto labelFunc042A_012E;
	message("\"The name is Flindo. I own a provisioning shop here in Moonshade and have many important connections here.\"");
	say();
	goto labelFunc042A_0132;
labelFunc042A_012E:
	message("\"The name is Flindo. I own a provisioning shop in Moonshade and have many important connections there.\"");
	say();
labelFunc042A_0132:
	UI_set_item_flag(0xFFD6, 0x001C);
	goto labelFunc042A_0143;
labelFunc042A_013F:
	message("\"Returned again?\"");
	say();
labelFunc042A_0143:
	if (!(var0004 == 0x0009)) goto labelFunc042A_0167;
	message("\"So, art thou another stranded victim of Hawk and his childish fear of storms? Or art thou here to investigate the curious disappearance of Mistress Devra's good husband?\"");
	say();
	UI_add_answer(["Hawk", "storms", "curious disappearance", "connections"]);
	goto labelFunc042A_0186;
labelFunc042A_0167:
	message("\"I understand now why Hawk did not wish to sail the open seas. I do not know how thou wilt leave this island... Unless the tales are true.\"");
	say();
	message("\"I hope that thou dost like our fine city of Moonshade.\"");
	say();
	message("\"If thou wouldst like to know about any place within the city, come to me.\"");
	say();
	UI_add_answer(["tales", "Moonshade", "any place", "connections"]);
labelFunc042A_0186:
	if (!(gflags[0x012F] && (!gflags[0x00D9]))) goto labelFunc042A_0198;
	UI_add_answer("thy promise");
labelFunc042A_0198:
	UI_add_answer(["bye"]);
labelFunc042A_01A2:
	converse attend labelFunc042A_09F2;
	case "strange state" attend labelFunc042A_01BC:
	UI_remove_answer("strange state");
	message("\"He now calls himself Shamino the Anarch.\"");
	say();
	message("\"By his command up may become down, and in may become out. And woe to anyone who disagrees. He hath totally unravelled the strictures... 'Tis a magical madhouse out there!\"");
	say();
labelFunc042A_01BC:
	case "fallen Filbercio" attend labelFunc042A_01DD:
	UI_remove_answer("fallen Filbercio");
	message("\"When Shamino the Anarch took over, he cast Filbercio out of the Palace and made him a beggar.\"");
	say();
	message("\"Needless to say, this did not sit well with the MageLord. Filbercio would speak with thee... Perhaps thou canst, having been Shamino's companion, find a way to overcome his powers.\"");
	say();
	message("\"Look for Filbercio in the streets, ");
	message(var0000);
	message(". Shamino the Anarch hath decreed that none may take Filbercio in or aid him in any way.\"");
	say();
labelFunc042A_01DD:
	case "Hawk" attend labelFunc042A_0205:
	UI_remove_answer("Hawk");
	message("\"That bag of wind! Calls himself a sailor... Ha!\"");
	say();
	message("\"Now, I am asking thee... What manner of Captain would strand me and poor, dumb Kane -- paying passengers, mind thee -- here in this little backwater inn because of some... storm?\"");
	say();
	message("\"So I went to the Pikemen...\"");
	say();
	UI_add_answer(["Kane", "Pikemen"]);
labelFunc042A_0205:
	case "Kane" attend labelFunc042A_022D:
	UI_remove_answer("Kane");
	message("\"Look for a young lad talking to a parrot. That will be him.\"");
	say();
	message("\"Witless lad doth not have enough sense to steer clear of Ensorcio. Comes asking if Ensorcio was a mage, and would Ensorcio help him and Ale find his lost brother!\"");
	say();
	message("\"Kane doth not have the sense of a cat!\"");
	say();
	UI_add_answer(["Ensorcio", "Ale"]);
labelFunc042A_022D:
	case "Ensorcio" attend labelFunc042A_0255:
	UI_remove_answer("Ensorcio");
	message("\"Now there is one to avoid, if ever there was one!\"");
	say();
	message("\"The mages wondered when Vasculio took Ensorcio as an apprentice. Temper like that, 'tis not good in a mage. And when thou considerest Vasculio's interests... Well, 'tis enough to make a body worry.\"");
	say();
	message("\"And then with what happened about that Adept's daughter... No one was surprised when the Council of Mages stepped in and exiled Ensorcio -- except maybe Ensorcio himself!\"");
	say();
	UI_add_answer(["Vasculio", "Adept's daughter"]);
labelFunc042A_0255:
	case "Vasculio" attend labelFunc042A_0273:
	UI_remove_answer("Vasculio");
	message("\"Do not tell me that thou hast not heard that legend!\"");
	say();
	message("\"I was not around for any of this, mind thee. I wasn't even born yet... Ensorcio isn't as young as he appears, being a mage and all. But my father talked about it enough -- it happened when he was a mere boy.\"");
	say();
	UI_add_answer("legend");
labelFunc042A_0273:
	case "legend" attend labelFunc042A_02A3:
	UI_remove_answer("legend");
	message("\"Well, years ago, there was experimenting aplenty amongst the mages. There were not nearly as many restrictions as there are now.\"");
	say();
	message("\"Vasculio specialized in death magic. Not like Mortegro, mind thee. No, Vasculio did not want to speak with the dead... He wanted to cause death.\"");
	say();
	message("\"And he was none too particular if it was a quick death or not. Anyway, soon his 'research' even upset the Council of Mages.\"");
	say();
	message("\"When the Council went to deliver Vasculio an ultimatum, they found him in deeds so horrible that it was determined that he was no longer human.\"");
	say();
	message("\"They put him to death... but his tomb was broken open and empty before a week had passed. And they say that, somehow, he still lives to practice his dark arts.\"");
	say();
	UI_add_answer(["restrictions", "Mortegro"]);
labelFunc042A_02A3:
	case "restrictions" attend labelFunc042A_02C2:
	UI_remove_answer("restrictions");
	message("\"Well, now, there are quite a number of them. And I only know a few... not being a mage.\"");
	say();
	message("\"Let's see... certain creatures cannot be summoned within the confines of the city. This would come to light after some damn fool mage summons a dragon that burns half the city!\"");
	say();
	message("\"Only mages approved of by the Council of Mages may sell death spells. And the Council must be notified of all research and experiments.\"");
	say();
	message("\"There. 'Tis all I can remember. If thou desirest to know more, thou shouldst speak to a mage.\"");
	say();
labelFunc042A_02C2:
	case "Mortegro" attend labelFunc042A_02D9:
	UI_remove_answer("Mortegro");
	message("\"Mortegro is fine. A bit flighty at times, but all mages are if thou dost ask me.\"");
	say();
	message("\"Mortegro's true specialty is speaking with the dead.\"");
	say();
labelFunc042A_02D9:
	case "Adept's daughter" attend labelFunc042A_0301:
	UI_remove_answer("Adept's daughter");
	message("\"Oh, thou wouldst do well not to ask too closely about who she is, ");
	message(var0000);
	message("! Mages are very protective of their privacy AND their pride.\"");
	say();
	message("\"Suffice it to say that Ensorcio took a fancy to the girl and, when she would not give him the time of day, used his magic to... persuade... her to see him.\"");
	say();
	message("\"I was surprised the Council punished him with simple exile. I would have thought he would have gone to the Mountains of Freedom for his crime!\"");
	say();
	UI_add_answer("Mountains of Freedom");
labelFunc042A_0301:
	case "Mountains of Freedom" attend labelFunc042A_0325:
	UI_remove_answer("Mountains of Freedom");
	message("\"Speak that name quietly, ");
	message(var0000);
	message(". And hope that thou never hast reason to learn too much about it.\"");
	say();
	message("\"Long ago, those mountains were full of ore and many spent their lives mining it. But most of the veins were empty when they uncovered the Stoneheart...\"");
	say();
	UI_add_answer("Stoneheart");
labelFunc042A_0325:
	case "Stoneheart" attend labelFunc042A_0353:
	UI_remove_answer("Stoneheart");
	message("\"Hsst! Never repeat that word in public, ");
	message(var0000);
	message("! Or thou wilt find a personal view of the Mountains of Freedom!\"");
	say();
	message("\"Stoneheart can be used to create another mineral, a strange reagent that magnifies magical power, especially death spells. And it is very dangerous.\"");
	say();
	message("\"Anyway, after that was found there, the mines were sealed. Until Filbercio became MageLord, that is.\"");
	say();
	UI_add_answer(["Filbercio", "MageLord"]);
labelFunc042A_0353:
	case "Filbercio" attend labelFunc042A_0378:
	UI_remove_answer("Filbercio");
	message("\"Filbercio is an ambitious man, ");
	message(var0000);
	message(". He is also a man of many... passions, shall we say.\"");
	say();
	message("\"Not all in Moonshade were happy when he became MageLord. And Filbercio would have it that he is a popular ruler. And he would enjoy the powers of his office without fearing rivals.\"");
	say();
	message("\"So Filbercio filled the mines with all manner of magical traps, and made it a prison for his enemies. 'Tis said that if thou canst escape from the depths of stone, thou art free and vindicated of any charges against thee.\"");
	say();
	message("\"But, as of yet, none have proven themselves innocent... If thou takest my meaning.\"");
	say();
labelFunc042A_0378:
	case "MageLord" attend labelFunc042A_0393:
	UI_remove_answer("MageLord");
	message("\"The MageLord must be an Adept, and rules all Moonshade.\"");
	say();
	message("\"Although the MageLord's power is great, it is held in check by the other members of the Council of Mages.\"");
	say();
	message("\"Being that mages are, by nature, egotistical, the Council of Mages is only open to other Adepts. The peers of the MageLord. Their presence on the Council is meant to keep the MageLord from becoming too tyrannical.\"");
	say();
labelFunc042A_0393:
	case "Ale" attend labelFunc042A_03AA:
	UI_remove_answer("Ale");
	message("\"Ale is what Kane calls that parrot of his...\"");
	say();
	message("\"And it certainly shows a great enthusiasm for the brew, to be sure. Not usual for a bird, mind thee, but a trick most likely taught to it by some sailor before the lad found it.\"");
	say();
labelFunc042A_03AA:
	case "Pikemen" attend labelFunc042A_03FA:
	UI_remove_answer("Pikemen");
	if (!(gflags[0x003E] == true)) goto labelFunc042A_03DA;
	message("\"Everyone knows that the Pikemen guard the roads and towns, ");
	message(var0000);
	message(".\"");
	say();
	message("\"They are noted for their honesty. I thought perhaps they could 'persuade' Hawk to abandon his ploy for more money and sail for Moonshade as he should.\"");
	say();
	message("\"I made an appropriately large 'donation' to their coffers. But I did not expect them to waylay Hawk to rot in some jail cell!\"");
	say();
	message("\"I suppose that is what comes of not knowing the difference between Leopards, Bears and Wolves...\"");
	say();
	goto labelFunc042A_03E6;
labelFunc042A_03DA:
	message("\"I thought perhaps the Pikemen could... disturb Hawk enough to abandon his ploy for more money. I thought that if they made his life difficult enough here, Hawk would sail for Moonshade -- as he should have in the first place!\"");
	say();
	message("\"I paid them well enough! But I did not expect them to waylay Hawk to rot in some jail cell!\"");
	say();
	message("\"I suppose that is what comes of not knowing the difference between Leopards, Bears and Wolves...\"");
	say();
labelFunc042A_03E6:
	gflags[0x01CD] = true;
	UI_add_answer(["Leopards", "Bears", "Wolves"]);
labelFunc042A_03FA:
	case "Leopards" attend labelFunc042A_042E:
	UI_remove_answer("Leopards");
	if (!(gflags[0x003E] == true)) goto labelFunc042A_0422;
	message("\"I know what any non-Monitorian knows, ");
	message(var0000);
	message(".\"");
	say();
	message("\"The Leopards are one of the three Commands of Monitor. They control the tower nearest Monitor itself. I know that they share the rule of Monitor.\"");
	say();
	goto labelFunc042A_042E;
labelFunc042A_0422:
	message("\"I know what any non-Monitorian knows...\"");
	say();
	message("\"The Leopards are one of the three Commands of Monitor. They control the tower nearest Monitor itself.\"");
	say();
	message("\"I have also heard that, like all cats, they are a sneaky, conniving lot.\"");
	say();
labelFunc042A_042E:
	case "Bears" attend labelFunc042A_0462:
	UI_remove_answer("Bears");
	if (!(gflags[0x003E] == true)) goto labelFunc042A_0456;
	message("\"I know little about them, ");
	message(var0000);
	message(".\"");
	say();
	message("\"The Bears are one of the three Commands of Monitor. They control the tower near Fawn, where their natural aggressiveness can be put to use against the goblins.\"");
	say();
	goto labelFunc042A_0462;
labelFunc042A_0456:
	message("\"I know little about them...\"");
	say();
	message("\"The Bears are one of the three Commands of Monitor. They control the tower near Fawn, where their natural aggressiveness can be put to use against the goblins.\"");
	say();
	message("\"I have also heard, from a Fawn merchant, that many Fawn citizens would rather face the goblins than the Bears.\"");
	say();
labelFunc042A_0462:
	case "Wolves" attend labelFunc042A_0492:
	UI_remove_answer("Wolves");
	if (!(gflags[0x003E] == true)) goto labelFunc042A_048A;
	message("\"Not being from Monitor, I am afraid I am woefully uninformed, ");
	message(var0000);
	message(".\"");
	say();
	message("\"The Wolves are one of the three Commands of Monitor. They control the tower near here, er... Sleeping Bull. Wolves are regarded as the friendliest of all the Commands...\"");
	say();
	goto labelFunc042A_0492;
labelFunc042A_048A:
	message("\"Not being from Monitor, I am afraid I am woefully uninformed...\"");
	say();
	message("\"The Wolves are one of the three Commands of Monitor. They control the tower near here, er... Sleeping Bull. Wolves are said to be little more than trained dogs...\"");
	say();
labelFunc042A_0492:
	case "storms" attend labelFunc042A_04B4:
	UI_remove_answer("storms");
	message("\"I find it hard to believe that a man such as Hawk, with a ship such as the Arabella, would fear any storm -- magical or otherwise.\"");
	say();
	message("\"I have heard of too many odd events connected to these storms to discount their unusual nature. But all such tales speak of danger on land...\"");
	say();
	message("\"I think Hawk's reluctance to sail lies more at the bottom of an empty mug and an empty coffer...\"");
	say();
	UI_add_answer("Arabella");
labelFunc042A_04B4:
	case "Arabella" attend labelFunc042A_04CB:
	UI_remove_answer("Arabella");
	message("\"The Arabella is a fine ship... Good lines and fast-running before a stiff breeze.\"");
	say();
	message("\"And I have heard that Hawk had some sort of enchantment laid on her so that she can not be sailed without him on board. But that could merely be more of his idle boasts.\"");
	say();
labelFunc042A_04CB:
	case "curious disappearance" attend labelFunc042A_04F6:
	UI_remove_answer("curious disappearance");
	message("\"It occurred immediately after I arrived here...\"");
	say();
	message("\"I recall that one morning Mistress Devra was beside herself with worry because Angus was nowhere to be found.\"");
	say();
	message("\"I told her not to worry herself too much, as sometimes a man will feel too constricted at home and need to wander for a bit. But she would not be dissuaded and sent for Argus.\"");
	say();
	UI_add_answer(["Devra", "Angus", "Argus"]);
labelFunc042A_04F6:
	case "Devra" attend labelFunc042A_051E:
	UI_remove_answer("Devra");
	message("\"Mistress Devra is a sweet-natured lady. Too good-hearted to be an innkeeper sometimes.\"");
	say();
	message("\"I had recently begun making the trips with my father when Donal hired her to do the cooking. That was before she married Angus.\"");
	say();
	message("\"Poor woman, first Theron and then her husband...\"");
	say();
	UI_add_answer(["Donal", "Theron"]);
labelFunc042A_051E:
	case "Donal" attend labelFunc042A_0540:
	UI_remove_answer("Donal");
	message("\"Donal was Angus' father. He was a good, hard-working man.\"");
	say();
	message("\"'Twas a good thing Donal was not anything like his father, Silverpate, or I doubt that Mistress Devra would ever have given Angus a second look.\"");
	say();
	message("\"'Tis hard to think that Angus disappeared exactly like his grandfather did...\"");
	say();
	UI_add_answer("Silverpate");
labelFunc042A_0540:
	case "Silverpate" attend labelFunc042A_056C:
	UI_remove_answer("Silverpate");
	message("\"Why, Silverpate is the one who built this inn!\"");
	say();
	message("\"Everyone said Silverpate was a pirate who grew too old for the sea and went searching for a way to become respectable. He used part of his treasure to construct this place...\"");
	say();
	message("\"There are rumors in Moonshade that he hired a mage for some reason, but I have never been able to confirm it. They say that he was a very suspicious man...\"");
	say();
	message("\"Anyhow, Silverpate disappeared when Donal was still a young man. Everyone thinks the treasure is still hidden here somewhere.\"");
	say();
	UI_add_answer(["treasure", "disappeared"]);
labelFunc042A_056C:
	case "treasure" attend labelFunc042A_0583:
	UI_remove_answer("treasure");
	message("\"Do not ask me! Silverpate was a pirate... Who knows what such a man would have hidden?\"");
	say();
	message("\"Personally, I think that if there were any treasure, it hath long since been found. And if none hath been found, then there never was any hidden treasure!\"");
	say();
labelFunc042A_0583:
	case "disappeared" attend labelFunc042A_059A:
	UI_remove_answer("disappeared");
	message("\"Thou shouldst ask Mistress Devra about that. All I know is that one day no one could find Silverpate, and he was never found.\"");
	say();
	message("\"Donal took over the inn and nothing more untoward happened until Theron disappeared.\"");
	say();
labelFunc042A_059A:
	case "Theron" attend labelFunc042A_05B1:
	UI_remove_answer("Theron");
	message("\"Theron was a worker here. Mistress Devra took him in and gave him work and a place to stay. He was not very bright...\"");
	say();
	message("\"Like I said, sometimes Mistress Devra is too kind for her own good. Anyway, Theron was caught in one of those storms and no one hath been able to find him since.\"");
	say();
labelFunc042A_05B1:
	case "Angus" attend labelFunc042A_05CC:
	UI_remove_answer("Angus");
	message("\"Angus was a big man. I cannot see how any harm could befall him without alerting the whole inn.\"");
	say();
	message("\"I think perhaps he took a notion to leave and go adventuring. He had a strange sense of humor and a powerful temper...\"");
	say();
	message("\"Who knows? Mayhaps he became angry at Mistress Devra and walked away.\"");
	say();
labelFunc042A_05CC:
	case "Argus" attend labelFunc042A_05FA:
	UI_remove_answer("Argus");
	message("\"Argus is Mistress Devra's oldest son, ");
	message(var0000);
	message(".\"");
	say();
	message("\"He inherited more than a little bit of his father's temper, and always dreamed of being a fighter. 'Twas no surprise when he travelled to Monitor to become a Pikeman.\"");
	say();
	message("\"Not all good came of it, however. He found himself some trouble down there, so I have heard. And there hath been bad blood between him and Wilfred ever since he left here.\"");
	say();
	UI_add_answer(["trouble", "Wilfred"]);
labelFunc042A_05FA:
	case "trouble" attend labelFunc042A_0617:
	UI_remove_answer("trouble");
	message("\"If thou dost not want to answer to Argus' steel, ");
	message(var0000);
	message(", thou shouldst not mention this to him.\"");
	say();
	message("\"Seems that Argus' temper found him a duel with a boy from another Command. Argus killed the boy, apparently without giving him any quarter. Sad business for a fighter.\"");
	say();
labelFunc042A_0617:
	case "Wilfred" attend labelFunc042A_0632:
	UI_remove_answer("Wilfred");
	message("\"Wilfred is Argus' younger brother...\"");
	say();
	message("\"After Argus left, Angus raised Wilfred very strictly. So Wilfred holds Argus in no great esteem.\"");
	say();
	message("\"Wilfred was always a willful, snobbish sort of child. In mine own opinion, he needed to have his head knocked a time or two to deflate that ego of his. Angus was stricken when Wilfred left to become a knight.\"");
	say();
labelFunc042A_0632:
	case "connections" attend labelFunc042A_068F:
	UI_remove_answer("connections");
	message("\"Although I am not a mage, I am an influential man in Moonshade because my shop provides the staples of life to that secluded island! Why, I even know the MageLord's mistress.\"");
	say();
	if (!gflags[0x012F]) goto labelFunc042A_065F;
	if (!gflags[0x00D9]) goto labelFunc042A_0658;
	message("\"As thou dost well know, seeing that I did obtain thee an audience with the MageLord. Who else could have done such a thing?\"");
	say();
	goto labelFunc042A_065C;
labelFunc042A_0658:
	message("\"And I shall obtain for thee an audience with the MageLord, have no fear! I am as good as my promise.\"");
	say();
labelFunc042A_065C:
	goto labelFunc042A_0684;
labelFunc042A_065F:
	if (!gflags[0x01CC]) goto labelFunc042A_067A;
	message("\"In fact, this is what I shall do for thee! Since thou didst make it possible for Hawk to sail us here, I shall repay thee --\"");
	say();
	message("\"I shall arrange for thee to meet with the MageLord himself. This is quite an honor, ");
	message(var0002);
	message(". This will take time, but I can arrange this.\"");
	say();
	gflags[0x012F] = true;
	goto labelFunc042A_0684;
labelFunc042A_067A:
	message("\"If we ever leave this forsaken inn, ");
	message(var0000);
	message(", perhaps I can obtain thee an audience with the MageLord himself. He trusts me implicitly. Ask me again when we arrive.\"");
	say();
labelFunc042A_0684:
	message("\"And thou mayest find that some of the mages are very reclusive and will not speak to thee without proper introduction.\"");
	say();
	UI_add_answer("mistress");
labelFunc042A_068F:
	case "mistress" attend labelFunc042A_06C7:
	UI_remove_answer("mistress");
	message("\"Oh, yes! Filbercio is quite a lady's man. And what woman would not jump at the opportunity to win the MageLord's favor?\"");
	say();
	message("\"For now, Frigidazzi holds the MageLord's eye. And, from what I have seen, Filbercio seems to have found a way to thaw the charms of that cold mage...\"");
	say();
	if (!gflags[0x01CC]) goto labelFunc042A_06C3;
	message("\"Though I have heard that Frigidazzi is not always so cool. And I have been told that Filbercio hath not been... faithful... shall we say.\"");
	say();
	UI_add_answer(["Frigidazzi", "heard", "faithful"]);
	goto labelFunc042A_06C7;
labelFunc042A_06C3:
	message("\"Ask me about it again, if we ever sail to Moonshade. I shall relish telling thee more then. But for now, it only makes me angrier with Hawk for stranding me here!\"");
	say();
labelFunc042A_06C7:
	case "Frigidazzi" attend labelFunc042A_06E2:
	UI_remove_answer("Frigidazzi");
	message("\"Frigidazzi specializes in cold-related spells. She is a great beauty, but she is rather cold to everyone.\"");
	say();
	message("\"Perhaps I should not say this, but I think Frigidazzi is using Filbercio to gain status within the ranks of the Adepts.\"");
	say();
	var000A = true;
labelFunc042A_06E2:
	case "heard" attend labelFunc042A_06F9:
	UI_remove_answer("heard");
	message("\"I have heard that Frigidazzi can be quite... warm, to those who catch her fancy. And I am told that she can be very persistent about getting what she wants.\"");
	say();
	message("\"Although I think it would be foolish to catch her eye as long as Filbercio doth have an interest in her... If thou knowest what I mean.\"");
	say();
labelFunc042A_06F9:
	case "faithful" attend labelFunc042A_0727:
	UI_remove_answer("faithful");
	message("\"Filbercio hath been trying to coerce Columna into a dalliance for some time. But she will have nothing to do with him.\"");
	say();
	message("\"As Filbercio doth not take being rebuffed lightly, he hired Stefano to steal something of Columna's from Torrissio, to use as blackmail. So the MageLord may prevail in this intended infidelity -- if Frigidazzi doth not discover him.\"");
	say();
	message("\"Of course, this is not the MageLord's only indiscretion... As I have this story from Julia, who found out from Filbercio, during a night of... ahem... stolen passion.\"");
	say();
	UI_add_answer(["Columna", "Stefano", "Torrissio", "Julia"]);
labelFunc042A_0727:
	case "Columna" attend labelFunc042A_073E:
	UI_remove_answer("Columna");
	message("\"There is not too much to say about Columna. She is one of Moonshade's most reclusive mages. I think that is what makes her so attractive to Filbercio. She seems unattainable.\"");
	say();
	message("\"Why she insists on dallying with that scum Torrissio, I will never know. She would do better with the MageLord... any way thou dost look at it.\"");
	say();
labelFunc042A_073E:
	case "Stefano" attend labelFunc042A_0755:
	UI_remove_answer("Stefano");
	message("\"Stefano is a thief of some skill, with a bit of magical ability. He tends to live from one disaster to another, though he would like to see himself as a great lord somewhere, someday.\"");
	say();
	message("\"Stefano would do better practicing his magic... But he would rather be a skilled thief than a novice mage.\"");
	say();
labelFunc042A_0755:
	case "Torrissio" attend labelFunc042A_077D:
	UI_remove_answer("Torrissio");
	message("\"I hate even to utter his name... It leaves a bitter taste in the mouth!\"");
	say();
	message("\"Torrissio specializes in creating the magical automatons that most mages prefer as their servants. I will grant that he is skilled enough, but he doth have the ethics of a snake!\"");
	say();
	message("\"'Tis a good thing Petra escaped from his sickening clutches and has Rocco to protect her.\"");
	say();
	UI_add_answer(["Petra", "Rocco"]);
labelFunc042A_077D:
	case "Petra" attend labelFunc042A_0794:
	UI_remove_answer("Petra");
	message("\"Petra is the automaton at the Blue Boar. Torrissio created her.\"");
	say();
	message("\"I have only heard a bit of the tale, so thou shouldst go speak to Petra directly to hear the right of it. In short, Torrissio had vile intent for Petra. But she escaped and Rocco took her in and watches over her.\"");
	say();
labelFunc042A_0794:
	case "Rocco" attend labelFunc042A_07AB:
	UI_remove_answer("Rocco");
	message("\"Rocco is the innkeeper at the Blue Boar.\"");
	say();
	message("\"Although Rocco can be quite gruff, he is devoted to Petra... If thou askest me, I would say 'tis a perfect match -- Rocco and Petra. He can complain as much as he wants and she still takes care of him.\"");
	say();
labelFunc042A_07AB:
	case "Julia" attend labelFunc042A_07BE:
	UI_remove_answer("Julia");
	message("\"Julia is a Ranger at the Winery. She is a rather handsome woman. Very no-nonsense sort.\"");
	say();
labelFunc042A_07BE:
	case "tales" attend labelFunc042A_07E2:
	UI_remove_answer("tales");
	message("\"As thou mayest imagine, Moonshade hath its share of tall tales and stories. In fact, many of them are started by the mages in question, to enhance their reputations!\"");
	say();
	message("\"But, if thou dost listen to the tales, there are ancient passages that connect to the other islands. Or, for that matter, some say that the Mad Mage can teleport anywhere he likes.\"");
	say();
	UI_add_answer(["passages", "Mad Mage"]);
labelFunc042A_07E2:
	case "passages" attend labelFunc042A_0800:
	UI_remove_answer("passages");
	message("\"I know nothing other than the fact that they are said to exist, and that they are supposedly fraught with peril.\"");
	say();
	message("\"Perhaps if thou dost ask Fedabiblio, he could confirm it... Or even tell thee where they are.\"");
	say();
	UI_add_answer("Fedabiblio");
labelFunc042A_0800:
	case "Fedabiblio" attend labelFunc042A_0824:
	UI_remove_answer("Fedabiblio");
	message("\"Fedabiblio is the Magister of Moonshade. It is his duty to test the children throughout the land and bring them to Moonshade for training. Thou mayest find him at the Seminarium.\"");
	say();
	message("\"It makes my very skin crawl, ");
	message(var0000);
	message(", to think of the damage an untutored mage could do...\"");
	say();
	UI_add_answer("Seminarium");
labelFunc042A_0824:
	case "Seminarium" attend labelFunc042A_0837:
	UI_remove_answer("Seminarium");
	message("\"That is where all the novice mages are taught. Look for the youngsters in the street and thou wilt find it.\"");
	say();
labelFunc042A_0837:
	case "Mad Mage" attend labelFunc042A_0863:
	UI_remove_answer("Mad Mage");
	message("\"His name is actually Erstam. But everyone here refers to him as the Mad Mage.\"");
	say();
	message("\"'Tis a very complex situation, ");
	message(var0000);
	message(". Erstam trained all of the Adepts in Moonshade. And, as their master, he is a threat to them because he is still more powerful than they are.\"");
	say();
	message("\"As I said before, mages are nothing if not prideful. So it is now forbidden for any to visit Erstam... Which, from what I am told is fine with him!\"");
	say();
	message("\"If thou wishest to try and contact the Mad Mage, thou canst try speaking with Pothos. I believe that they still maintain a contact of sorts.\"");
	say();
	UI_add_answer("Pothos");
labelFunc042A_0863:
	case "Pothos" attend labelFunc042A_0891:
	UI_remove_answer("Pothos");
	message("\"Pothos is the apothecary. He hath some small magical ability, but not enough to enter the ranks of the Adepts. So he makes his living selling them reagents and potions...\"");
	say();
	if (!gflags[0x00D9]) goto labelFunc042A_0891;
	if (!gflags[0x00DD]) goto labelFunc042A_0889;
	message("\"He hath been very cheerful as of late...\"");
	say();
	goto labelFunc042A_0891;
labelFunc042A_0889:
	message("\"There are those who believe that Erstam is Pothos' father. But Pothos will never talk about it, so I do not know.\"");
	say();
	gflags[0x00DC] = true;
labelFunc042A_0891:
	case "Moonshade" attend labelFunc042A_08AB:
	UI_remove_answer("Moonshade");
	message("\"Moonshade, the city of mages! A place where anything thou mayest desire can be thine... If thou dost have enough guilders, and thou canst find a mage with enough skill.\"");
	say();
	UI_add_answer("guilders");
labelFunc042A_08AB:
	case "guilders" attend labelFunc042A_08C8:
	UI_remove_answer("guilders");
	message("\"Guilders are the coins of Moonshade, ");
	message(var0000);
	message(".\"");
	say();
	message("\"None of the artisans or shopkeepers will deal with thee if thou dost not have guilders. Thou canst exchange thine other coins with Bucia, at my shop.\"");
	say();
labelFunc042A_08C8:
	case "any place" attend labelFunc042A_08EF:
	UI_remove_answer("any place");
	message("\"There are many places that thou wilt want to visit while thou art here.\"");
	say();
	message("\"Thou mayest find lodgings at the Blue Boar. Thou shouldst see the Winery. And there's the artist's bazaar...\"");
	say();
	UI_add_answer(["Blue Boar", "Winery", "bazaar"]);
labelFunc042A_08EF:
	case "Blue Boar" attend labelFunc042A_0906:
	UI_remove_answer("Blue Boar");
	message("\"The Blue Boar is a tavern here. It provides food and lodging at a reasonable rate... for Moonshade.\"");
	say();
	message("\"Thou wilt sometimes find some of the less reclusive mages there. Be careful not to offend any of them for they may call thee out to a magical duel!\"");
	say();
labelFunc042A_0906:
	case "Winery" attend labelFunc042A_0919:
	UI_remove_answer("Winery");
	message("\"The Rangers have a magic winepress. It works without need of human assistance. I am sure that thou wilt find it interesting.\"");
	say();
labelFunc042A_0919:
	case "bazaar" attend labelFunc042A_0933:
	UI_remove_answer("bazaar");
	message("\"'Tis where many of the artisans can be found... My shop, the Capessi Canton, is located near the Blue Boar Inn. Be sure to stop and say hello to Bucia, who runs the shop for me.\"");
	say();
	UI_add_answer("Bucia");
labelFunc042A_0933:
	case "Bucia" attend labelFunc042A_094A:
	UI_remove_answer("Bucia");
	message("\"Sometimes I cannot understand why I keep her. Each time I enter the shop, there she is -- babbling with someone. Makes me wonder if she doth do any work at all...\"");
	say();
	message("\"And sometimes I wonder at her sanity, too. She hath developed some far-fetched notions, certis. Why she would have it that poor young Pothos is connected in some way to the Mad Mage! Canst thou imagine?!\"");
	say();
labelFunc042A_094A:
	case "thy promise" attend labelFunc042A_09C5:
	UI_remove_answer("thy promise");
	if (!gflags[0x00E9]) goto labelFunc042A_09BD;
	if (!gflags[0x0130]) goto labelFunc042A_0970;
	message("\"What? Dost thou not trust my word?\"");
	say();
	message("\"Go about thy business, and the MageLord shall certainly summon thee when he is ready.\"");
	say();
	goto labelFunc042A_09BA;
labelFunc042A_0970:
	gflags[0x0130] = true;
	message("\"I have good news for thee, my friend! As promised, I have arranged for thee to meet with MageLord Filbercio.\"");
	say();
	message("\"In fact, he plans to hold a banquet in thine honor. I am certain thou wilt find his means of summoning thee... very unusual...\"");
	say();
	message("\"Go about thy business, and at the appropriate moment, the MageLord shall summon thee.\"");
	say();
	gflags[0x00DA] = true;
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0004), [(byte)0x55, 0x07DC], 0x014A);
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0003), [(byte)0x55, 0x07DC], 0x013B);
labelFunc042A_09BA:
	goto labelFunc042A_09C5;
labelFunc042A_09BD:
	message("\"I am working on securing that appointment for thee to meet with the MageLord, but these things take time...\"");
	say();
	message("\"Ask me again tomorrow. I promise thee that I can accomplish this thing, but not instantly, not immediately.\"");
	say();
labelFunc042A_09C5:
	case "bye" attend labelFunc042A_09EF:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Thanks for thine help.@", 0x0000);
	Func097F(0xFFD6, "@Whatever...@", 0x0005);
	Func08FF();
	goto labelFunc042A_09F2;
labelFunc042A_09EF:
	goto labelFunc042A_01A2;
labelFunc042A_09F2:
	endconv;
labelFunc042A_09F3:
	return;
}


