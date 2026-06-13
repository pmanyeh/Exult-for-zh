#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func042B object#(0x42B) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = UI_get_schedule_type(0xFFD5);
	if (!(event == 0x0000)) goto labelFunc042B_0093;
	if (!(var0004 == 0x001D)) goto labelFunc042B_0093;
	var0005 = UI_find_nearby(0xFFD5, 0x025F, 0x0002, 0x0010);
	var0006 = UI_get_item_quality(var0005);
	if (!(var0006 == 0x000F)) goto labelFunc042B_0093;
	UI_set_schedule_type(0xFFD5, 0x000F);
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x34]);
	var0008 = UI_get_npc_id(0xFFD8);
	var0008 = (var0008 + 0x0001);
	UI_set_npc_id(0xFFD8, var0008);
labelFunc042B_0093:
	if (!(event == 0x0001)) goto labelFunc042B_00C1;
	UI_item_say(0xFE9C, "@A moment, young sir!@");
	0xFFD5->Func07D1();
	Func097F(0xFFD5, "@Who, me?@", 0x0002);
	UI_set_schedule_type(0xFFD5, 0x0003);
labelFunc042B_00C1:
	if (!(event == 0x0009)) goto labelFunc042B_0430;
	UI_run_schedule(0xFFD5);
	UI_clear_item_say(0xFFD5);
	var0009 = UI_get_item_flag(0xFFD5, 0x001C);
	UI_show_npc_face0(0xFFD5, 0x0000);
	if (!(var0009 == false)) goto labelFunc042B_018A;
	if (!(gflags[0x003E] == true)) goto labelFunc042B_0141;
	message("\"I am not in trouble, am I?\" ~\"I did not do anything!\"");
	say();
	message("\"M'name's Kane. I be a sheepherder...\"");
	say();
	if (!gflags[0x01CC]) goto labelFunc042B_0133;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_0125;
	message("\"Edrin is returned, ");
	message(var0000);
	message("!\" ~\"Edrin was Ale!\" *\"I mean, the storm trans... er, changed, Edrin into that parrot I found!\" ~\"All that time I was searchin' for him, and I had him right there wit me!\"");
	say();
	message("\"I knew one of them Mages could help me!\" *\"We be goin' home soon...\" ~\"After Edrin finds a ship to return on.\"");
	say();
	goto labelFunc042B_0129;
labelFunc042B_0125:
	message("\"I be searchin' for a Mage to help me find my brother what was lost in the storms, if thou pleasest.\"");
	say();
labelFunc042B_0129:
	UI_add_answer("storms");
	goto labelFunc042B_013E;
labelFunc042B_0133:
	message("\"I am waitin' for passage to Moonshade, if thou pleasest.\"");
	say();
	UI_add_answer("passage");
labelFunc042B_013E:
	goto labelFunc042B_017D;
labelFunc042B_0141:
	message("\"How may I serve thee, ");
	message(var0000);
	message("?\"");
	say();
	if (!gflags[0x01CC]) goto labelFunc042B_0172;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_0164;
	message("\"Edrin is returned! Edrin was Ale!\" *\"I mean, the storm trans... er, changed, Edrin into that parrot I found!\" ~\"All that time I was searchin' for him, and I had him right there wit me!\"");
	say();
	message("\"I knew one of them Mages could help me!\" *\"We be goin' home soon...\" ~\"After Edrin finds a ship to return on.\"");
	say();
	goto labelFunc042B_0168;
labelFunc042B_0164:
	message("\"M'name's Kane. I be searchin' for a Mage to help me find my brother what was lost in the storms, if thou pleasest.\"");
	say();
labelFunc042B_0168:
	UI_add_answer("storms");
	goto labelFunc042B_017D;
labelFunc042B_0172:
	message("\"M'name's Kane. I be a sheepherder...\" ~\"I be waitin' for passage to Moonshade, if thou pleasest.\"");
	say();
	UI_add_answer("passage");
labelFunc042B_017D:
	UI_set_item_flag(0xFFD5, 0x001C);
	goto labelFunc042B_01CF;
labelFunc042B_018A:
	message("\"Welcome back, ");
	message(var0000);
	message(".\"");
	say();
	if (!gflags[0x01CC]) goto labelFunc042B_01CF;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_01BA;
	message("\"Edrin is returned, ");
	message(var0000);
	message("!\" ~\"Edrin was Ale!\" *\"I mean, the storm trans... er, changed, Edrin into that parrot I found!\" ~\"All that time I was searchin' for him, and I had him right there wit me!\"");
	say();
	message("\"Did I not tell thee that one of them Mages could help me?\" ~\"I knew it!\" *\"We be goin' home soon...\" ~\"After Edrin finds a ship to return on.\"");
	say();
	UI_add_answer("storms");
	goto labelFunc042B_01CF;
labelFunc042B_01BA:
	message("\"Is not this place marvelous, ");
	message(var0000);
	message("? There be so much to see... Everything is so fancy! I wish Edrin was here wit me. I be certain he could show me around.\"");
	say();
	message("\"I hope some of these powerful Mages will help me find him.\"");
	say();
	UI_add_answer("passage");
labelFunc042B_01CF:
	UI_add_answer("bye");
labelFunc042B_01D6:
	converse attend labelFunc042B_042F;
	case "passage" attend labelFunc042B_0213:
	if (!gflags[0x01CC]) goto labelFunc042B_01EE;
	message("\"Now that we are here in Moonshade it seems that thou canst not find passage to go elsewhere. Not even Captain Hawk will brave those Teleport Storms again.\"");
	say();
	goto labelFunc042B_01FF;
labelFunc042B_01EE:
	message("\"I was told by Mistress Devra that I could buy passage with Captain Hawk to Moonshade.\" ~\"But when the Cap'n came to the dock, he swore that he'd not go out in these storms again.\" *\"I do not blame him, to tell thee the honest truth, ");
	message(var0000);
	message(".\" ~\"But I do wish there was some way for me to talk to the mages there.\"");
	say();
	UI_add_answer("Devra");
labelFunc042B_01FF:
	UI_remove_answer("passage");
	UI_add_answer(["Hawk", "storms"]);
labelFunc042B_0213:
	case "Devra" attend labelFunc042B_023D:
	if (!gflags[0x01CC]) goto labelFunc042B_0228;
	message("\"I wish Edrin and I were back with Mistress Devra. She was nice to me, and said that I could return to Sleeping Bull and be her helper. I'd like that.\"");
	say();
	goto labelFunc042B_0236;
labelFunc042B_0228:
	message("\"Oh, she be a nice lady, ");
	message(var0000);
	message("!\" ~\"Mistress Devra helped me to count my money when I came.\"");
	say();
	message("\"She put part of it in a little sack and told me that I was to give it to Captain Hawk to buy passage.\" ~\"And when she counted the rest I could not afford to stay here until the Captain decided it was safe to sail.\" *\"But she said if I helped by choppin' wood and such I could stay as a servant, like.\" ~\"That was terrible kind of her.\"");
	say();
labelFunc042B_0236:
	UI_remove_answer("Devra");
labelFunc042B_023D:
	case "Hawk" attend labelFunc042B_027D:
	if (!gflags[0x01CC]) goto labelFunc042B_0252;
	message("\"After that terrible crossing, Hawk swore he'd drink all of Moonshade dry. I doubt that thou wilt find him far from a mug of strong spirits.\"");
	say();
	goto labelFunc042B_0276;
labelFunc042B_0252:
	message("\"Cap'n Hawk sails the Arabella, that's the ship at the dock out there a ways.\" ~\"He was staying here until he got in a fight and the Pikemen took him away...\"");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc042B_0265;
	message("\"Thou art not here to take me too, art thou?\" ~\"I didn't fight, honest. I hid under the table when Cap'n Hawk and Master Flindo started shoutin' at one another.\"");
	say();
	goto labelFunc042B_0269;
labelFunc042B_0265:
	message("\"I didn't fight, honest. I hid under the table when Cap'n Hawk and Master Flindo started shoutin' at one another.\" ~\"I hope they don't think I did anything...\"");
	say();
labelFunc042B_0269:
	UI_add_answer(["Pikemen", "Flindo"]);
labelFunc042B_0276:
	UI_remove_answer("Hawk");
labelFunc042B_027D:
	case "Pikemen" attend labelFunc042B_02BC:
	if (!(gflags[0x003E] == true)) goto labelFunc042B_02A2;
	message("\"Beggin' thy pardon, ");
	message(var0000);
	message(".\" ~\"I don't mean any disrespect...\"");
	say();
	message("\"Master Flindo came in with several Pikemen and said something to Cap'n Hawk that I didn't hear.\" ~\"Then the two of them began yellin', and well, then someone began swinging...\" ~\"I did not see who, bein' under the table and all.\"");
	say();
	message("\"Someone clouted Captain Hawk pretty hard and then the Pikemen were draggin' him away.\" ~\"Master Argus shouted at them to leave him be, but, thy pardon, they told him to mind his own innkeepin' and nothin' else.\" *\"Master Argus was mighty angry, and was for goin' after them. But Mistress Devra stopped him.\" ~\"He said words I ain't never heard before...\"");
	say();
	goto labelFunc042B_02AA;
labelFunc042B_02A2:
	message("\"Master Flindo came in with several Pikemen and said something to Captain Hawk that I didn't hear.\" ~\"Then the two of them began shoutin', and well, then someone began swinging...\" ~\"I didn't see who, bein' under the table and all.\"");
	say();
	message("\"Someone clouted Cap'n Hawk pretty hard and then the Pikemen were draggin' him away.\" ~\"Master Argus yelled at them to leave him be, but they told him to mind his innkeepin' and nothin' else.\" *\"Master Argus was mighty angry, and was for goin' after them. But Mistress Devra stopped him.\" ~\"He said words I ain't never heard before...\"");
	say();
labelFunc042B_02AA:
	gflags[0x01CD] = true;
	UI_remove_answer("Pikemen");
	UI_add_answer("Argus");
labelFunc042B_02BC:
	case "Argus" attend labelFunc042B_02D3:
	message("\"Ain't he big and strong, though? I'll wager he could lift even more than my brother.\" ~\"And Edrin can lift two full-grown ewes all by himself!\"");
	say();
	message("\"I can tell that Master Argus is... or was... a Pikeman.\" ~\"He doth have those marks on his face.\" *\"But I do not understand why those other fellows treated him like they did.\" ~\"Mayhaps they were angry at him for talkin' like that in front of his mother...\"");
	say();
	UI_remove_answer("Argus");
labelFunc042B_02D3:
	case "Flindo" attend labelFunc042B_02FB:
	if (!gflags[0x01CC]) goto labelFunc042B_02E8;
	message("\"First this Flindo was unhappy that we would not sail to Moonshade, now he is unhappy that we will not sail back! I have had enough of him and his lust for commerce. Let us change the subject.\"");
	say();
	goto labelFunc042B_02F4;
labelFunc042B_02E8:
	message("\"Master Flindo is a merchant of some sort, I think.\" ~\"He is not very nice.\"");
	say();
	message("\"All he doth do is complain about Cap'n Hawk not wantin' to sail to Moonshade.\" ~\"He says that Cap'n Hawk only wants more money... But the Cap'n refused all his offers of more money.\"");
	say();
	message("\"I think the Cap'n doth not want to put any of us in danger, is all.\" ~\"And Master Flindo was not very happy when the Pikemen took Cap'n Hawk away.\"");
	say();
labelFunc042B_02F4:
	UI_remove_answer("Flindo");
labelFunc042B_02FB:
	case "storms" attend labelFunc042B_0345:
	if (!gflags[0x01CC]) goto labelFunc042B_032D;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_0322;
	message("\"'Tis strange what them storms can do, ");
	message(var0000);
	message(". To think that they could change mine own brother into a bird -- wondrous strange!\"");
	say();
	message("\"I am most glad to have Edrin back.\"");
	say();
	goto labelFunc042B_032A;
labelFunc042B_0322:
	message("\"I was frightened during that storm when Edrin disappeared. But it weren't nothing compared to that sea crossing in Hawk's ship.\"");
	say();
	message("\"I am not looking forward to sailing again, I can tell thee.\"");
	say();
labelFunc042B_032A:
	goto labelFunc042B_0337;
labelFunc042B_032D:
	message("\"Enough to make a man's blood turn to ice, ");
	message(var0000);
	message("!\" ~\"Why one moment Edrin was not more than five paces from me, and then he weren't nowhere to be found.\" *\"'Course it took a minute or two for mine eyes to clear and mine ears to cease ringing, after that lightnin' strike.\" ~\"But I went searchin' right away, and I couldn't find hide nor hair of him.\"");
	say();
labelFunc042B_0337:
	UI_remove_answer("storms");
	UI_add_answer("Edrin");
labelFunc042B_0345:
	case "Edrin" attend labelFunc042B_038F:
	if (!gflags[0x01CC]) goto labelFunc042B_0371;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_0366;
	message("\"He is doing fine now that he's not a parrot any more. Though he says that he hath been having bad dreams of late. I do not blame him.\"");
	say();
	message("\"I'll wager being a bird would give anyone nightmares...\"");
	say();
	goto labelFunc042B_036E;
labelFunc042B_0366:
	message("\"I have not yet spoken with any of them Mages. I'll admit that they frighten me...\"");
	say();
	message("\"But I know that I have to do it sometime. They are mine only hope of finding Edrin again.\"");
	say();
labelFunc042B_036E:
	goto labelFunc042B_0388;
labelFunc042B_0371:
	message("\"Edrin is mine older brother, ");
	message(var0000);
	message(".\" ~\"We were herdin' the sheep into the pen one night when one of these strange storms hit outta a clear sky.\" *\"I looked and looked and looked, but ain't no one seen him.\" ~\"All I found was this here parrot, which I brought along for the company to Moonshade.\"");
	say();
	UI_add_answer(["parrot", "Moonshade"]);
labelFunc042B_0388:
	UI_remove_answer("Edrin");
labelFunc042B_038F:
	case "parrot" attend labelFunc042B_03AD:
	message("\"I'd been searchin' for Edrin a little over a day, I suppose, when I found this here parrot sittin' under a tree, all pitiful like.\" ~\"Well, now I was awful lonesome, so I asked the bird what it was doin' out in the forest instead of home in a cage.\" *\"Like to leapt out of my skin when the thing croaked 'Ale!'.\" ~\"But Cap'n Hawk said that's the way of such birds.\"");
	say();
	message("\"Still and all, I think Ale -- 'tis his name now -- is smarter than some of the folks I know.\" ~\"And he doth have a powerful fondness for ale.\" *\"I hope Edrin will allow me to keep Ale...\" ~\"After all, he doth have his crystal and I do not have nothin'.\"");
	say();
	UI_remove_answer("parrot");
	UI_add_answer("crystal");
labelFunc042B_03AD:
	case "crystal" attend labelFunc042B_03C4:
	message("\"When I was not very old, Da took Edrin to Moonshade with him.\" ~\"I remember I cried and cried, but Mother said I was too young to go. She promised I'd be allowed to go the next time.\"");
	say();
	message("\"Only there wasn't a next time because Da died that fall, and Edrin and I have been too busy with the sheep to go since then.\" ~\"But sometimes, when I was scared at night, Edrin would let me hold the crystal until I fell asleep...\" *\"And I never had any dreams then.\" ~\"Who would've thought I'd travel all alone to Moonshade like this one day?\"");
	say();
	UI_remove_answer("crystal");
labelFunc042B_03C4:
	case "Moonshade" attend labelFunc042B_03E8:
	message("\"Well, ");
	message(var0000);
	message(", as near as I can surmise, if these storms ain't natural then that means they must be magic-like.\" ~\"And ever'one knows that if thou dost want anything magic-like, thou shouldst go to Moonshade.\" *\"If these storms took Edrin away and they're magic-like, then one of them mages must be able to tell me how to find him.\" ~\"All I have to do is go there and ask...\"");
	say();
	message("\"Mistress Devra told me I might ask Master Ensorcio if he could help me.\" ~\"She said he was one of them mages.\" *\"I wondered a little about that... because ever'one doth know that all mages live in Moonshade.\" ~\"But I asked anyhow...\"");
	say();
	UI_remove_answer("Moonshade");
	UI_add_answer("Ensorcio");
labelFunc042B_03E8:
	case "Ensorcio" attend labelFunc042B_0405:
	message("\"I do not like to speak ill of anyone, ");
	message(var0000);
	message(".\" ~\"But Master Ensorcio doth have the worst temper I've ever seen!\" *\"All I did was ask if he was a mage and could he help me...\" ~\"And he threatened to change me to a frog!\"");
	say();
	message("\"All he would have had to do was tell me to go away and leave him alone.\" ~\"And I would've not bothered him no more.\" ~\"Now I know why Da used to say if we were bad the mages would come and take us away...\" ~\"Mayhap Master Ensorcio never had a Da to teach him manners.\"");
	say();
	UI_remove_answer("Ensorcio");
labelFunc042B_0405:
	case "bye" attend labelFunc042B_042C:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Good luck, Kane!@", 0x0000);
	Func097F(0xFFD5, "@Luck to thee, too!@", 0x0002);
	goto labelFunc042B_042F;
labelFunc042B_042C:
	goto labelFunc042B_01D6;
labelFunc042B_042F:
	endconv;
labelFunc042B_0430:
	if (!(event == 0x0007)) goto labelFunc042B_0458;
	Func097F(0xFFD5, "@Yowie!@", 0x0000);
	UI_set_oppressor(0xFE9C, 0xFFD5);
	UI_set_attack_mode(0xFFD5, 0x0007);
labelFunc042B_0458:
	return;
}


