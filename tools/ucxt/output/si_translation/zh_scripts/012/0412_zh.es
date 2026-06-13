#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0830 0x830 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0412 object#(0x412) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "his";
	var0003 = "him";
	var0004 = "he";
	var0005 = "man";
	if (!UI_is_pc_female()) goto labelFunc0412_0044;
	var0002 = "her";
	var0004 = "she";
	var0003 = "her";
	var0005 = "woman";
labelFunc0412_0044:
	var0006 = Func0953();
	var0007 = UI_part_of_day();
	var0008 = 0x0000;
	if (!(UI_get_npc_id(0xFFEC) > 0x0001)) goto labelFunc0412_006B;
	var0008 = 0x0002;
labelFunc0412_006B:
	if (!((var0007 > 0x0001) || (var0007 < 0x0006))) goto labelFunc0412_0086;
	var0007 = "day";
	goto labelFunc0412_008C;
labelFunc0412_0086:
	var0007 = "evening";
labelFunc0412_008C:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0412_00AF;
	var0009 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0412_00AF:
	if (!(event == 0x0001)) goto labelFunc0412_00DD;
	UI_item_say(0xFE9C, "@Greetings!@");
	0xFFEE->Func07D1();
	Func097F(0xFFEE, "@Ah, yes...@", 0x0002);
	UI_set_schedule_type(0xFFEE, 0x0003);
labelFunc0412_00DD:
	if (!(event == 0x0009)) goto labelFunc0412_0649;
	UI_run_schedule(0xFFEE);
	UI_halt_scheduled(0xFFEE);
	UI_show_npc_face0(0xFFEE, 0x0000);
	var000A = UI_get_item_flag(0xFFEE, 0x001C);
	message("\"'Tis thee again. Hast thou good news?\"");
	say();
	UI_add_answer(["duties", "politics"]);
	if (!(gflags[0x00EA] && ((!gflags[0x00EB]) && (!UI_get_item_flag(0xFFE1, 0x0004))))) goto labelFunc0412_0139;
	UI_add_answer("kidnap");
labelFunc0412_0139:
	if (!(gflags[0x00EB] && (!UI_is_dead(0xFFE1)))) goto labelFunc0412_014F;
	UI_add_answer("search");
labelFunc0412_014F:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc0412_0161;
	UI_add_answer("apparatus");
labelFunc0412_0161:
	if (!(gflags[0x0114] && (!gflags[0x0293]))) goto labelFunc0412_0173;
	UI_add_answer("slippers");
labelFunc0412_0173:
	UI_add_answer(["bye"]);
labelFunc0412_017D:
	converse attend labelFunc0412_0648;
	case "change subject" attend labelFunc0412_0190:
	message("\"But we were only beginning! Very well, if thou dost insist...\"");
	say();
	UI_pop_answers();
labelFunc0412_0190:
	case "duties" attend labelFunc0412_01C0:
	UI_remove_answer("duties");
	message("\"As thou hast no doubt noticed, the burden of being MageLord wears heavily upon me. I spend all of mine hours in the palace. I have no life of mine own. I seldom even research new spells.\"");
	say();
	Func0830();
	UI_push_answers();
	UI_add_answer(["burden", "palace", "life", "spells", "change subject"]);
labelFunc0412_01C0:
	case "spells" attend labelFunc0412_01D7:
	UI_remove_answer("spells");
	message("\"Hmmpf...\"");
	say();
	message("\"'Tis beneath my station to teach thee, or any other, the awesome knowledge that is mine alone. Go and badger Melino or Columna, if thou dost wish to learn the arcane arts.\"");
	say();
labelFunc0412_01D7:
	case "burden" attend labelFunc0412_01F1:
	UI_remove_answer("burden");
	message("\"Indeed. Sometimes I think that my subjects do not appreciate me. They have given me wealth and power, but I have given them my life! Now is that a fair exchange?\"");
	say();
	message("\"Perhaps I shall go live in a hut on the coast. That would be less stressful...\"");
	say();
	Func0830();
labelFunc0412_01F1:
	case "palace" attend labelFunc0412_020B:
	UI_remove_answer("palace");
	message("\"Is this not a grand old building? Most of the downstairs chambers are used for business of the court, while the remaining rooms are mine own.\"");
	say();
	message("\"Never mind the legends of hidden treasure chambers here. If there were gold here, I would have it by now!\"");
	say();
	Func0830();
labelFunc0412_020B:
	case "life" attend labelFunc0412_024B:
	UI_remove_answer("life");
	message("\"It is lonely to be MageLord. I have the needs of a normal man, yet I am overwhelmed by the demands of the citizens...\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc0412_0234;
	message("\"I am grateful for thy sympathy, madam. I too am attracted to thee. Aha, thou didst not think I noticed thy glances!\"");
	say();
	message("\"But alas, I am spoken for! The sorceress Frigidazzi is my current love, and she allows me no trespasses.\"");
	say();
	message("\"And I am jealous of her affections, as well. I have found that women are notoriously fickle...\"");
	say();
	goto labelFunc0412_0248;
labelFunc0412_0234:
	message("\"No doubt thou hast heard tales of my romantic conquests! This is the answer I have found to the pressures of being MageLord.\"");
	say();
	message("\"I know that the citizens talk of me all the time, behind my back. They say that I am a great lover, and indeed, I am!\"");
	say();
	message("\"But I have never found true love. Romance is like the fog that dissolves in the sunlight.\"");
	say();
	message("\"Do not speak of this to the Sorceress Frigidazzi! She is my current passion, and I fear that she doth love me too much.\"");
	say();
	message("\"I am supremely jealous of her affections, as well. Though I do not truly love her, I will not be made a fool of!\"");
	say();
labelFunc0412_0248:
	Func0830();
labelFunc0412_024B:
	case "politics" attend labelFunc0412_02B0:
	UI_remove_answer("politics");
	message("\"Is there no end to the bickering among the Mages? We have three factions here, and each elects its favorite to the Council of Moonshade.\"");
	say();
	message("\"As the voice of compromise and experience, I have always been selected MageLord by the Adepts.\"");
	say();
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0412_0276;
	message("\"My fellow Lords are Gustacio and Mortegro.\"");
	say();
	goto labelFunc0412_027A;
labelFunc0412_0276:
	message("\"My fellow Lords are Rotoluncia and Gustacio.\"");
	say();
labelFunc0412_027A:
	Func0830();
	UI_push_answers();
	UI_add_answer(["Adept Gustacio"]);
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0412_02A2;
	UI_add_answer("Adept Mortegro");
	goto labelFunc0412_02A9;
labelFunc0412_02A2:
	UI_add_answer("Adept Rotoluncia");
labelFunc0412_02A9:
	UI_add_answer("change subject");
labelFunc0412_02B0:
	case "Adept Rotoluncia" attend labelFunc0412_02CE:
	UI_remove_answer("Adept Rotoluncia");
	message("\"The Sorceress Rotoluncia is the heart of dissension. She is ambitious beyond measure, and causes all manner of trouble.\"");
	say();
	message("\"She was not always this way. I remember the summer of my last apprenticeship year. She was two years younger than I, and asked me to be her tutor...\"");
	say();
	message("\"Ah, but she did tutor me as well, that summer! There have been many loves, before and since, but I shall always remember Rotoluncia.\"");
	say();
	Func0830();
labelFunc0412_02CE:
	case "Adept Gustacio" attend labelFunc0412_02F3:
	UI_remove_answer("Adept Gustacio");
	message("\"Gustacio doth\tadhere too strictly to outdated codes of ethics. Why, we could accomplish nothing in Moonshade if we followed his advice!\"");
	say();
	if (!(!gflags[0x00E2])) goto labelFunc0412_02F0;
	message("\"I doubt that he shall even deign to speak with thee. He is of the old school, and speaks only to those he considers worthy of his time.\"");
	say();
	message("\"Until thou hast proven thyself, he shall have little to do with thee.\"");
	say();
labelFunc0412_02F0:
	Func0830();
labelFunc0412_02F3:
	case "Adept Mortegro" attend labelFunc0412_0311:
	UI_remove_answer("Adept Mortegro");
	message("\"Now that Rotoluncia is dead -- and I shall miss her, for she and I were once lovers -- I hope for greater harmony.\"");
	say();
	message("\"The Black Mage, Mortegro, hath been selected to take Rotoluncia's seat on the Council.\"");
	say();
	message("\"They say that he is crazy, but I think there is prejudice everywhere against necromancers. He is not that bad.\"");
	say();
	Func0830();
labelFunc0412_0311:
	case "apparatus" attend labelFunc0412_03A4:
	UI_remove_answer("apparatus");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc0412_0382;
	message("\"Allow me to see what thou hast -- it had better not be one of mine own!\"");
	say();
	if (!UI_npc_nearby(0xFFF6)) goto labelFunc0412_0360;
	UI_show_npc_face1(0xFED6, 0x0000);
	message("\"Thieves could not take thy goods, MageLord. I protect them well.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"That had best be true, or thou wilt find thyself on the scrap heap!\"");
	say();
labelFunc0412_0360:
	var000B = Func0992(0x0001, "@This be it.@", "@Here it is.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Ah, good! 'Tis not mine at all. Thou must understand that every item of magical equipment must be custom-made for each Mage.\"");
	say();
	message("\"I do not know to whom this belongs, but it is not mine.\"");
	say();
	goto labelFunc0412_03A1;
labelFunc0412_0382:
	message("\"Hast thou brought this object with thee?\"");
	say();
	var000B = Func0992(0x0001, "@No, we do not have it with us.@", "@No, I have not.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Then I can tell thee nothing. But if thou hast stolen this from me, I shall not pay ransom for it!\"");
	say();
labelFunc0412_03A1:
	Func0830();
labelFunc0412_03A4:
	case "slippers" attend labelFunc0412_03F8:
	UI_remove_answer("slippers");
	message("\"Slippers! What business is my footwear to thee! Dost thou think to have a laugh at mine expense?\"");
	say();
	message("\"Begone with thee, fool...\"");
	say();
	var000C = UI_get_object_position(0xFFEE);
	UI_sprite_effect(0x001A, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFEE, [0x05F2, 0x078F, 0x0000]);
	abort;
labelFunc0412_03F8:
	case "kidnap" attend labelFunc0412_0444:
	UI_remove_answer("kidnap");
	message("\"Thy friend hath been taken! How foul! And by magical means! Indeed...\"");
	say();
	message("\"Whom dost thou suspect of this terrible crime?\"");
	say();
	UI_push_answers();
	UI_add_answer(["Batlin"]);
	if (!gflags[0x013F]) goto labelFunc0412_042A;
	UI_add_answer("Mortegro");
labelFunc0412_042A:
	if (!gflags[0x0142]) goto labelFunc0412_0437;
	UI_add_answer("Torrissio");
labelFunc0412_0437:
	UI_add_answer(["Rotoluncia", "unknown"]);
labelFunc0412_0444:
	case "Mortegro" attend labelFunc0412_0458:
	message("\"Nonsense! That man is an honest and an upright Mage, though he doth have unsettling habits...\"");
	say();
	message("\"Withdraw thy suspicions -- I vouch for his integrity. Mortegro did not steal thy friend.\"");
	say();
	UI_pop_answers();
labelFunc0412_0458:
	case "Torrissio" attend labelFunc0412_0468:
	message("\"Hmm... He is very young, but also clever and devious. Perhaps thou shouldst confront him with thy suspicions, and see what he doth have to say.\"");
	say();
	UI_pop_answers();
labelFunc0412_0468:
	case "Batlin" attend labelFunc0412_0483:
	UI_remove_answer("Batlin");
	message("\"That name is familiar to me... he came to Moonshade many weeks ago, a large man in a brown cloak of a very common quality.\"");
	say();
	message("\"Perhaps thou shouldst inquire of Bucia at the Provisioner's Shop -- if there is anything to be known in this city, she would know it.\"");
	say();
	UI_pop_answers();
labelFunc0412_0483:
	case "Rotoluncia" attend labelFunc0412_04C7:
	UI_remove_answer("Rotoluncia");
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0412_04AA;
	message("\"A tragedy that the two of thee were unable to settle thy differences amicably.\"");
	say();
	UI_pop_answers();
	goto labelFunc0412_04C7;
labelFunc0412_04AA:
	message("\"I have heard that she believes thee to consort with Daemons, and to be a partner of the one called Batlin.\"");
	say();
	message("\"Thou shouldst search her manor for clues. Open every door, for thy friend might be hidden anywhere.\"");
	say();
	message("\"Thou canst find her mansion in the northeast part of town, built into the face of the southern mountains.\"");
	say();
	message("\"Be careful -- the Red Witch is most powerful, and I cannot protect thee from her enchantments!\"");
	say();
	Func097F(0xFFEE, "@Report thy findings.@", 0x0000);
	abort;
labelFunc0412_04C7:
	case "unknown" attend labelFunc0412_04DE:
	UI_remove_answer("unknown");
	message("\"If thou hast no suspects, then thou surely art clueless! I mourn for thee and thy lost friend.\"");
	say();
	UI_pop_answers();
labelFunc0412_04DE:
	case "search" attend labelFunc0412_0516:
	UI_remove_answer("search");
	if (!gflags[0x00EC]) goto labelFunc0412_04FA;
	message("\"I have already given thee my permission. Go! Do not trouble me further! I can do no more in this matter.\"");
	say();
	goto labelFunc0412_0516;
labelFunc0412_04FA:
	message("\"So thou hast searched Rotoluncia's manor, and there is no sign of thy friend, or of Rotoluncia? How interesting...\"");
	say();
	message("\"I have one last hope for thee, but I must first share a secret with thee...\"");
	say();
	UI_push_answers();
	UI_add_answer(["last hope", "secret", "change subject"]);
labelFunc0412_0516:
	case "last hope" attend labelFunc0412_052D:
	UI_remove_answer("last hope");
	message("\"If I am wrong this time, then thine enemy must not be Rotoluncia, but rather some other Mage.\"");
	say();
	message("\"If this is so, I cannot aid thee.\"");
	say();
labelFunc0412_052D:
	case "secret" attend labelFunc0412_0555:
	UI_remove_answer("secret");
	message("\"I am reluctant to admit this, but under the circumstances, I think that I must.\"");
	say();
	message("\"A year ago, the Red Sorceress and I renewed that passionate affair which we began in our youth. This was none of mine idea, but I could not resist her advances...\"");
	say();
	message("\"She demanded that our love-making be done in secret, and so I built a secluded love palace.\"");
	say();
	UI_add_answer(["love palace", "love-making"]);
labelFunc0412_0555:
	case "love palace" attend labelFunc0412_0577:
	UI_remove_answer("love palace");
	message("\"Oh, it is a modest place -- not like this great masterpiece! A mere cottage.\"");
	say();
	message("\"Perhaps Rotoluncia hath gone there to hide, and taken thy friend as well. If so, then she hath betrayed me.\"");
	say();
	message("\"Go quickly! See if she is there, and if so, flush her out!\"");
	say();
	UI_add_answer("Where is it?");
labelFunc0412_0577:
	case "Where is it?" attend labelFunc0412_059D:
	UI_remove_answer("Where is it?");
	message("\"It is located in the center of the Lake of Enchantment, south and west of where we now stand.\"");
	say();
	message("\"Thou shalt need a boat to reach this place. Take my yacht. I give thee permission.\"");
	say();
	message("\"The royal yacht is moored at the pier which can only be reached from within my palace. Thou wilt note that my yacht will not move unless the mystic engine is engaged.\"");
	say();
	gflags[0x00EC] = true;
	UI_add_answer("betrayed");
labelFunc0412_059D:
	case "betrayed" attend labelFunc0412_0607:
	UI_remove_answer("betrayed");
	message("\"Did she make love to me, only thinking to use me? Was her passion false, a mere pretense in order to coerce me into building that hidden citadel?\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0412_05BC;
	message("\"Women are fickle! Never give thine heart to one of their kind, stranger. Better to love them and then leave them...\"");
	say();
labelFunc0412_05BC:
	message("\"I am undone! Mine heart grieves. I must go away to be with my thoughts...\"");
	say();
	var000C = UI_get_object_position(0xFFEE);
	UI_sprite_effect(0x0007, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFFEE);
	UI_set_schedule_type(0xFFEE, 0x0004);
	Func097F(0xFE9C, "@Gosh!@", 0x0003);
	abort;
labelFunc0412_0607:
	case "love-making" attend labelFunc0412_061E:
	UI_remove_answer("love-making");
	message("\"Aha, but I cannot speak of this with thee! It is a private matter...\"");
	say();
	message("\"But let me say this -- in the years since our youth, the Red Sorceress learned many strange and difficult practices. Why, she even taught me a thing or two!\"");
	say();
labelFunc0412_061E:
	case "bye" attend labelFunc0412_0645:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Must be going...@", 0x0000);
	Func097F(0xFFEE, "@Good fortune!@", 0x0002);
	goto labelFunc0412_0648;
labelFunc0412_0645:
	goto labelFunc0412_017D;
labelFunc0412_0648:
	endconv;
labelFunc0412_0649:
	return;
}


