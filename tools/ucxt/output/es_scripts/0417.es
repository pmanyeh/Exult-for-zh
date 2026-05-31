#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func08B4 0x8B4 (var var0000, var var0001, var var0002);
extern void Func08B5 0x8B5 ();
extern void Func092E 0x92E (var var0000);
extern var Func092D 0x92D (var var0000);

void Func0417 object#(0x417) ()
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

	var0000 = false;
	if (!(event == 0x0001)) goto labelFunc0417_0735;
labelFunc0417_000C:
	var0001 = Func0908();
	if (!gflags[0x001E]) goto labelFunc0417_0027;
	UI_show_npc_face(0xFFE9, 0x0000);
	message("\"Fool!! What possessed thee to cast that damned Armageddon Spell? I knew it was dangerous! Thou didst know it was dangerous!! Now look at us! We are all alone on the entire planet! Britannia is ruined! What kind of Avatar art thou!?! Now, with no Moongates working, we are both forced to spend eternity in this blasted wasteland!~~\"Of course, it could be viewed as a clever solution to all of our problems. After all, not even this so-called Guardian would want Britannia now!\"*");
	say();
	abort;
labelFunc0417_0027:
	if (!gflags[0x030C]) goto labelFunc0417_004C;
	if (!(!gflags[0x030D])) goto labelFunc0417_0049;
	var0000 = true;
	UI_show_npc_face(0xFFE9, 0x0000);
	message("\"I felt the passing of the remains of Exodus from this realm. It has lifted a great weight from my shoulders. And so Avatar, I cannot let this accomplishment go unrewarded. Please kneel, my friend.\" Lord British holds out his hands as you obey his command.");
	say();
	goto labelFunc0417_0743;
labelFunc0417_0049:
	goto labelFunc0417_005A;
labelFunc0417_004C:
	if (!(!gflags[0x02FE])) goto labelFunc0417_005A;
	UI_add_answer("rumble");
labelFunc0417_005A:
	var0002 = UI_get_party_list();
	var0003 = Func08F7(0xFFFF);
	var0004 = Func08F7(0xFFFC);
	var0005 = Func08F7(0xFFFD);
	UI_show_npc_face(0xFFE9, 0x0000);
	var0006 = false;
	var0007 = false;
	var0008 = false;
	UI_add_answer(["name", "job", "bye", "Fellowship"]);
	if (!(!gflags[0x00DD])) goto labelFunc0417_00B3;
	UI_add_answer("Orb of the Moons");
labelFunc0417_00B3:
	if (!(gflags[0x00CD] && (!gflags[0x00CC]))) goto labelFunc0417_00C5;
	UI_add_answer("Weston");
labelFunc0417_00C5:
	if (!gflags[0x00D3]) goto labelFunc0417_00D2;
	UI_add_answer("heal");
labelFunc0417_00D2:
	if (!gflags[0x0127]) goto labelFunc0417_00DF;
	UI_add_answer("The Guardian");
labelFunc0417_00DF:
	if (!gflags[0x00D4]) goto labelFunc0417_00EC;
	UI_remove_answer("The Guardian");
labelFunc0417_00EC:
	if (!(!gflags[0x0098])) goto labelFunc0417_010B;
	message("You see your old friend Lord British, looking a bit older than when you last saw him. His eyes gleam at the sight of you.~~\"Welcome, my friend,\" he says, embracing you. \"Please. Tell me what brings thee to Britannia! Or, more importantly, what 'brought' thee here?\"");
	say();
	gflags[0x0098] = true;
	UI_add_answer(["red Moongate", "Orb of the Moons"]);
	goto labelFunc0417_0115;
labelFunc0417_010B:
	message("\"Yes, ");
	message(var0001);
	message("?\" Lord British asks.");
	say();
labelFunc0417_0115:
	converse attend labelFunc0417_072A;
	case "name" attend labelFunc0417_012B:
	message("Lord British laughs. \"What, art thou joking, Avatar? Dost thou not recognize thine old friend?\"");
	say();
	UI_remove_answer("name");
labelFunc0417_012B:
	case "job" attend labelFunc0417_0148:
	message("Lord British rolls his eyes. \"Must we go through this formality?\" He laughs, shaking his head.");
	say();
	message("\"Very well. As thou well knowest, I am sovereign of Britannia and have been for some time now. Even though I come from thine homeland, I have chosen to live my life here.\"");
	say();
	UI_add_answer(["Britannia", "homeland"]);
labelFunc0417_0148:
	case "homeland" attend labelFunc0417_0162:
	message("\"I know that it has been many a year since I visited our Earth, but surely thou dost remember that the two of us hail from the same time and place? And, as brothers in origin, thou shouldst also remember that thou canst ask me for aid at any time thou mightest require it.\"");
	say();
	UI_remove_answer("homeland");
	UI_add_answer("aid");
labelFunc0417_0162:
	case "aid" attend labelFunc0417_0194:
	message("\"Do not forget, Avatar, that I have the power to heal thee. That is one bit of magic that still seems to work for me. And I could probably provide thee with some equipment and a spellbook.\"");
	say();
	UI_add_answer(["equipment", "spellbook"]);
	if (!(!gflags[0x00D3])) goto labelFunc0417_0189;
	UI_add_answer("heal");
labelFunc0417_0189:
	gflags[0x00D3] = true;
	UI_remove_answer("aid");
labelFunc0417_0194:
	case "Britannia" attend labelFunc0417_01C5:
	message("\"The state of the land could not be more prosperous. Dost thou realize that thou hast been away for 200 Britannian years?\" Lord British wags a finger at you.~~ \"I am certain that thy friends have rued thine absence. 'Tis a shame thou didst stay away so long! But... I am so very happy to see thee. Britannia is prosperous and abundant. Look around thee. Explore the newly refurbished castle. Travel the land. Peace is prominent in all quarters.~~\"Yes, Britannia has never been better. Well, almost never.\"");
	say();
	UI_remove_answer("Britannia");
	UI_add_answer(["friends", "castle", "almost never"]);
	if (!(!gflags[0x0066])) goto labelFunc0417_01C5;
	UI_add_answer("magic");
labelFunc0417_01C5:
	case "almost never" attend labelFunc0417_01D8:
	message("\"Well, 'things' are indeed fine. It is the 'people' I am concerned about.~~\"There is something wrong in Britannia, but I do not know what it is. Something is hanging over the heads of the Britannian people. They are unhappy. One can see it in their eyes. There is nothing that is unifying the population, since there has been peace for so long.~~\"Perhaps thou couldst determine what is happening. I implore thee to go out amongst the people. Watch them in their daily tasks. Speak with them. Work with them. Break bread with them. Perhaps they need someone like the Avatar to take an interest in their lives.\"");
	say();
	UI_remove_answer("almost never");
labelFunc0417_01D8:
	case "red Moongate" attend labelFunc0417_0207:
	message("You relate the story of how a red Moongate appeared behind your house and mysteriously took you to Trinsic.~~Lord British's brow creases as you speak. Finally he says, \"I did not send the red Moongate to fetch thee. Someone or something must have activated that Moongate. And that is strange indeed, because we have been having a bit of trouble with Moongates as of late. In fact, we have been having trouble with magic in general!\"");
	say();
	UI_remove_answer("red Moongate");
	if (!(!var0007)) goto labelFunc0417_01F9;
	UI_add_answer("Moongates");
labelFunc0417_01F9:
	if (!(!var0008)) goto labelFunc0417_0207;
	UI_add_answer("magic");
labelFunc0417_0207:
	case "Orb of the Moons" attend labelFunc0417_0278:
	message("\"Mine has not worked since the troubles with magic began. In fact, none of the Moongates have been working reliably for quite a while!");
	say();
	message("\"Didst thou bring thine Orb of the Moons?\"");
	say();
	if (!Func090A()) goto labelFunc0417_0224;
	message("\"Really? Where is it? Thou dost not have it on thee! ");
	say();
	goto labelFunc0417_0228;
labelFunc0417_0224:
	message("\"I see. ");
	say();
labelFunc0417_0228:
	message("\"Hmmm. Thou might be stranded in Britannia. Here. Why not try mine? I shall let thee borrow it. Perhaps it will work for thee. Be careful, though. The Moongates have become dangerous.\"");
	say();
	var0009 = UI_add_party_items(0x0001, 0x0311, 0xFE99, 0xFE99, false);
	if (!var0009) goto labelFunc0417_0251;
	message("Lord British hands you his Orb of the Moons.");
	say();
	gflags[0x00DD] = true;
	goto labelFunc0417_0255;
labelFunc0417_0251:
	message("\"Thine hands are too full to take the Orb!\"");
	say();
labelFunc0417_0255:
	UI_remove_answer("Orb of the Moons");
	if (!(!var0007)) goto labelFunc0417_026A;
	UI_add_answer("Moongates");
labelFunc0417_026A:
	if (!(!var0008)) goto labelFunc0417_0278;
	UI_add_answer("magic");
labelFunc0417_0278:
	case "castle" attend labelFunc0417_0292:
	message("\"Yes, it has been redecorated since thy last visit. The architects and workers did a splendid job.\"~~The ruler leans toward you with a sour look on his face.~~ \"The only mar in the entire complex is that damn nursery!\"");
	say();
	UI_remove_answer("castle");
	UI_add_answer("nursery");
labelFunc0417_0292:
	case "nursery" attend labelFunc0417_02A5:
	message("\"I will not go near the place! Kings and dirty diapers do not mix. The Great Council talked me into implementing the nursery after several of my staff started having families. Although it was probably a necessity, I shall pretend it does not exist!\"");
	say();
	UI_remove_answer("nursery");
labelFunc0417_02A5:
	case "Trinsic" attend labelFunc0417_02C9:
	message("\"I have not been down there in many years. Has something happened there?\"");
	say();
	UI_remove_answer("Trinsic");
	UI_push_answers();
	UI_add_answer(["a murder", "nothing much"]);
labelFunc0417_02C9:
	case "nothing much" attend labelFunc0417_02E0:
	message("\"Indeed. Then it seems that Trinsic has not changed much since I saw it last.\" His eyes twinkle.");
	say();
	UI_pop_answers();
	UI_remove_answer("nothing much");
labelFunc0417_02E0:
	case "a murder" attend labelFunc0417_031F:
	message("\"Murder? In Trinsic?\" The ruler looks concerned.~~\"I have heard nothing about it. Art thou investigating it?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0417_02FF;
	message("\"Very good. It pleases me that thou art concerned about my people.\"");
	say();
	goto labelFunc0417_0303;
labelFunc0417_02FF:
	message("\"Ah, but perhaps thou shouldst!\"");
	say();
labelFunc0417_0303:
	message("The king pauses a moment. \"Now that thou dost mention it, I have had reports of other similar murders in the past few months. In fact, there was one here in Britain three or four years ago. The body was mutilated in a ritualistic fashion. Apparently there is a maddened killer on the loose. But I have no doubt that someone such as thee, Avatar, can find him!\"");
	say();
	UI_remove_answer("a murder");
	UI_pop_answers();
	UI_add_answer(["ritualistic", "killer"]);
labelFunc0417_031F:
	case "ritualistic" attend labelFunc0417_0336:
	message("\"I do not recall many details. Thou shouldst ask Patterson, the town mayor, about it. He may remember more.\"");
	say();
	UI_remove_answer("ritualistic");
	gflags[0x00D1] = true;
labelFunc0417_0336:
	case "killer" attend labelFunc0417_0363:
	message("\"That is, of course, only an assumption on my part. But that is all we have had to work with. Unless thou hast already uncovered some useful information?\"");
	say();
	UI_remove_answer("killer");
	if (!gflags[0x0043]) goto labelFunc0417_0356;
	UI_add_answer("Hook");
labelFunc0417_0356:
	if (!gflags[0x0040]) goto labelFunc0417_0363;
	UI_add_answer("Crown Jewel");
labelFunc0417_0363:
	case "Fellowship" attend labelFunc0417_0383:
	message("\"They are an extremely useful and productive group of citizens. Thou shouldst most certainly visit the Fellowship Headquarters here in Britain and speak with Batlin. The Fellowship has done many good deeds throughout Britannia, including feeding the poor, educating and helping those in need, and promoting general good will and peace.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer(["Batlin", "Headquarters"]);
labelFunc0417_0383:
	case "Headquarters" attend labelFunc0417_0396:
	message("\"Yes, it is not far from the castle, to the southwest. It is just south of the theatre.\"");
	say();
	UI_remove_answer("Headquarters");
labelFunc0417_0396:
	case "Batlin" attend labelFunc0417_03A9:
	message("\"He is a druid who began The Fellowship about twenty years ago. He is highly intelligent, and is a warm and gentle human being.\"");
	say();
	UI_remove_answer("Batlin");
labelFunc0417_03A9:
	case "Hook" attend labelFunc0417_03BC:
	message("\"A man with a hook?\" The king rubs his chin.~~\"No, I do not recall ever meeting a man with a hook.\"");
	say();
	UI_remove_answer("Hook");
labelFunc0417_03BC:
	case "Crown Jewel" attend labelFunc0417_03CF:
	message("\"I am afraid I cannot possibly know of every ship that comes through our ports. Thou shouldst check with Clint the Shipwright if thou hast not done so.\"");
	say();
	UI_remove_answer("Crown Jewel");
labelFunc0417_03CF:
	case "friends" attend labelFunc0417_03F2:
	message("\"Thou must mean Iolo, Shamino, and Dupre, of course.\"");
	say();
	UI_remove_answer("friends");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0417_03F2:
	case "Iolo" attend labelFunc0417_0435:
	message("\"I have seen our friend rarely over the years. I understand he has been spending most of his time in Trinsic.\"");
	say();
	if (!var0003) goto labelFunc0417_0427;
	message("\"Hello, Iolo! How art thou?\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"I am well, my liege! 'Tis good to see thee!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_0427:
	UI_remove_answer("Iolo");
	UI_add_answer("Trinsic");
labelFunc0417_0435:
	case "Shamino" attend labelFunc0417_049B:
	message("\"That rascal does not come around very often, though I understand he spends most of his time in Britain these days!\"");
	say();
	if (!var0005) goto labelFunc0417_0494;
	message("\"What dost thou have to say for thyself, Shamino?\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Mine apologies, milord,\" Shamino says.*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("\"What's this I hear of a woman? An actress? Hmmmm?\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino blushes and shuffles his feet.*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("\"I suspected as much!\" the ruler says, laughing.");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_0494:
	UI_remove_answer("Shamino");
labelFunc0417_049B:
	case "Dupre" attend labelFunc0417_04FA:
	message("\"I have not seen that one since I knighted him. Typical -- I do the man a favor and he disappears! I heard he might be in Jhelom.\"");
	say();
	if (!var0004) goto labelFunc0417_04EC;
	message("\"Where hast thou been, Sir Dupre?\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Oh, here and there, milord,\" the fighter replies.*");
	say();
	UI_show_npc_face(0xFFE9, 0x0000);
	message("\"I have very few friends from our homeland here in Britannia. Thou must make a point to visit more often! Especially since thou art a knight!\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"If thou dost wish it, milord,\" Dupre says, bowing.*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFE9, 0x0000);
labelFunc0417_04EC:
	UI_remove_answer("Dupre");
	UI_add_answer("Jhelom");
labelFunc0417_04FA:
	case "Jhelom" attend labelFunc0417_050D:
	message("\"A rather violent place, by all accounts. I have not had the pleasure of a visit in quite a while.\"");
	say();
	UI_remove_answer("Jhelom");
labelFunc0417_050D:
	case "magic" attend labelFunc0417_054E:
	message("\"Something is awry. Magic has not been working for the longest time. I even have trouble creating food with magic! It must be something to do with the magical ether.~~\"There are those who say that magic is dying, what with the trouble with the Moongates and the situation with Nystul. I am beginning to suspect that they might be right!\"");
	say();
	message("Lord British studies you a moment.");
	say();
	message("\"Perhaps magic will work much better for thee. Thou hast not been in Britannia long. It is possible that whatever has affected magic has not made its mark upon thee yet. Please try it. A spellbook is stored with the rest of thine equipment.\"");
	say();
	gflags[0x0066] = true;
	UI_remove_answer("magic");
	UI_add_answer(["Nystul", "spellbook", "equipment"]);
	var0008 = true;
	if (!(!var0007)) goto labelFunc0417_054E;
	UI_add_answer("Moongates");
labelFunc0417_054E:
	case "Nystul" attend labelFunc0417_057D:
	if (!(!gflags[0x0003])) goto labelFunc0417_0572;
	if (!(!gflags[0x0099])) goto labelFunc0417_056B;
	message("\"Er... try talking to him.\"");
	say();
	goto labelFunc0417_056F;
labelFunc0417_056B:
	message("The king lowers his voice.~~\"He is acting oddly, isn't he? Something has happened to his mind. He doesn't seem to be able to concentrate on magic anymore.\"");
	say();
labelFunc0417_056F:
	goto labelFunc0417_0576;
labelFunc0417_0572:
	message("\"He is beginning to act much more normally.\"");
	say();
labelFunc0417_0576:
	UI_remove_answer("Nystul");
labelFunc0417_057D:
	case "Moongates" attend labelFunc0417_05A1:
	message("\"The Moongates are not functioning! We cannot use them as we have in the past. Not only are they dysfunctional, they are, in fact, dangerous! One of my trusted sages used mine own Orb of the Moons to travel to the Shrine of Humility, and his body did shatter upon entering the gate! If only that mage in Cove hadn't gone mad!\"");
	say();
	UI_remove_answer("Moongates");
	UI_add_answer(["mad mage", "Cove"]);
	var0007 = true;
labelFunc0417_05A1:
	case "mad mage" attend labelFunc0417_05C5:
	message("The ruler leans forward and speaks quietly.~~\"There is a mad mage in Cove by the name of Rudyom. Dost thou remember him? Rudyom was working with a magical substance called 'blackrock'. Before he went mad, he claimed that this mineral could solve the problems of the Moongates. I suggest that thou shouldst go to Cove and find him. Try to learn what it was he was doing with this blackrock material. It could be our only hope.\"");
	say();
	gflags[0x0065] = true;
	Func0911(0x0014);
	UI_remove_answer("mad mage");
	UI_add_answer("Rudyom");
labelFunc0417_05C5:
	case "Rudyom" attend labelFunc0417_05E2:
	message("\"He was a brilliant and respected mage. But something happened to him in recent years. He seemed to go completely senile.\"");
	say();
	if (!gflags[0x0099]) goto labelFunc0417_05DB;
	message("Suddenly, something jars Lord British's memory. \"I wonder if there is a connection with what happened to Rudyom and what has befallen Nystul!\"");
	say();
labelFunc0417_05DB:
	UI_remove_answer("Rudyom");
labelFunc0417_05E2:
	case "Cove" attend labelFunc0417_05F5:
	message("\"Surely thou dost remember Cove. It is a very pleasant town to the east of Britain. Quite relaxing.\"");
	say();
	UI_remove_answer("Cove");
labelFunc0417_05F5:
	case "The Guardian" attend labelFunc0417_060C:
	message("\"I do not know of a 'Guardian'. Art thou sure he really exists? Thou shouldst investigate further.\"");
	say();
	gflags[0x00D4] = true;
	UI_remove_answer("The Guardian");
labelFunc0417_060C:
	case "spellbook" attend labelFunc0417_061F:
	message("\"Yes, I have a spellbook stored away with the rest of the equipment.\"");
	say();
	UI_remove_answer("spellbook");
labelFunc0417_061F:
	case "equipment" attend labelFunc0417_063F:
	message("\"Thou art welcome to any of mine equipment. I keep it in a locked storeroom here in the castle. Thou wilt find the key in my study.\"");
	say();
	UI_remove_answer("equipment");
	UI_add_answer(["storeroom", "study"]);
labelFunc0417_063F:
	case "storeroom" attend labelFunc0417_0652:
	message("\"I am sure thou canst find it.\"~~The ruler smiles slyly. \"Consider it something of a game!\"");
	say();
	UI_remove_answer("storeroom");
labelFunc0417_0652:
	case "study" attend labelFunc0417_0665:
	message("\"'Tis in the western end of the castle.\"");
	say();
	UI_remove_answer("study");
labelFunc0417_0665:
	case "heal" attend labelFunc0417_067D:
	Func08B4(0x0000, 0x0000, 0x0000);
	var0006 = true;
labelFunc0417_067D:
	case "Weston" attend labelFunc0417_06A1:
	message("Lord British listens to your story about Weston. He looks concerned.~~\"I do not recall this case. Let me check... Hmmm...\" He quickly scans a large scroll.~~\"Imprisoned for the theft of one apple from the Royal Orchards... Ludicrous! Someone must have usurped mine authority. Thou mayest consider this man pardoned. An investigation will commence immediately into the circumstances surrounding his arrest, and into this fellow, Figg. My thanks to thee, Avatar.\"");
	say();
	gflags[0x00CC] = true;
	Func0911(0x0014);
	UI_remove_npc(0xFFBB);
	UI_remove_answer("Weston");
labelFunc0417_06A1:
	case "rumble" attend labelFunc0417_06BB:
	message("Lord British looks at you gravely, \"The foundation of Britannia was shaken with the rising of an island. This event was no random disaster, it was one of sorcerous intent.\"");
	say();
	UI_add_answer("island");
	UI_remove_answer("rumble");
labelFunc0417_06BB:
	case "island" attend labelFunc0417_06E1:
	message("\"Yes, ");
	message(var0001);
	message(". I felt a great disturbance in the ether when this island arose from the sea. The island is none other than the Isle of Fire where thou defeated the Hellspawn Exodus.\"");
	say();
	UI_add_answer(["Isle of Fire", "Exodus"]);
	UI_remove_answer("island");
labelFunc0417_06E1:
	case "Isle of Fire" attend labelFunc0417_0709:
	message("\"");
	message(var0001);
	message(", thou shouldst know that when I created the shrines of the Virtues, I also set upon this island three great shrines, dedicated to the Priciples of Truth, Love, and Courage.");
	say();
	message("They reside within the walls of the Castle of Fire. I never revealed this to thee before as I thought them forever lost when the Isle of Fire mysteriously sank beneath the waves.");
	say();
	message("The shrines are meant for the use of an Avatar only, and therefore a talisman will be necessary to use one.");
	say();
	message("The talismans are guarded by tests that thou shouldst have no problem passing if thou wishest to seek thier counsel.\"");
	say();
	Func08B5();
	UI_remove_answer("Isle of Fire");
labelFunc0417_0709:
	case "Exodus" attend labelFunc0417_071C:
	message("\"Thy battle with that strange mixture of machine and spirit is now legendary. Do be careful if thou art going to the isle, for the remains of that being now reside in one of the chambers of the Castle of Fire.\"");
	say();
	UI_remove_answer("Exodus");
labelFunc0417_071C:
	case "bye" attend labelFunc0417_0727:
	goto labelFunc0417_072A;
labelFunc0417_0727:
	goto labelFunc0417_0115;
labelFunc0417_072A:
	endconv;
	message("\"Goodbye, ");
	message(var0001);
	message(". Do come back soon.\"*");
	say();
labelFunc0417_0735:
	if (!(event == 0x0000)) goto labelFunc0417_0743;
	Func092E(0xFFE9);
labelFunc0417_0743:
	if (!(var0000 == true)) goto labelFunc0417_07CA;
	var000B = Func092D(item);
	var000C = ((var000B + 0x0004) % 0x0008);
	var000D = UI_execute_usecode_array(item, [(byte)0x59, var000C, (byte)0x27, 0x0001, (byte)0x27, 0x0002, (byte)0x27, 0x0003, (byte)0x55, 0x0417, (byte)0x27, 0x0003, (byte)0x27, 0x0002, (byte)0x27, 0x000B, (byte)0x55, 0x0417]);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var000B, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0006, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61]);
labelFunc0417_07CA:
	if (!(event == 0x0002)) goto labelFunc0417_08BD;
	if (!gflags[0x001E]) goto labelFunc0417_07E0;
	event = 0x0001;
	goto labelFunc0417_000C;
	abort;
labelFunc0417_07E0:
	if (!(!gflags[0x030D])) goto labelFunc0417_08A2;
	gflags[0x030D] = true;
	var000F = UI_get_object_position(UI_get_npc_object(0xFE9C));
	UI_sprite_effect(0x0007, (var000F[0x0001] - 0x0001), (var000F[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	var0010 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0000);
	var0010 = (var0010 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0003));
	if (!(!(var0010[0x0001] >= 0x003C))) goto labelFunc0417_0876;
	var0011 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0000, (0x003C - var0010[0x0001]));
labelFunc0417_0876:
	if (!(!(var0010[0x0002] >= 0x003C))) goto labelFunc0417_089F;
	var0011 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0003, (0x003C - var0010[0x0002]));
labelFunc0417_089F:
	goto labelFunc0417_08BD;
labelFunc0417_08A2:
	UI_show_npc_face(0xFFE9, 0x0000);
	var0001 = Func0908();
	message("\"I congratulate and thank thee, ");
	message(var0001);
	message(". Thy deeds continue to speak well of thee.\"");
	say();
	abort;
labelFunc0417_08BD:
	return;
}


