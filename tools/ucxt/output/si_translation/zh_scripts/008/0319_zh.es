#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();

void Func0319 shape#(0x319) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0000)) goto labelFunc0319_0070;
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0001)) goto labelFunc0319_003A;
	UI_item_say(item, "@All dead...@");
labelFunc0319_003A:
	if (!(var0003 == 0x0002)) goto labelFunc0319_004C;
	UI_item_say(item, "@Oh, Britannia...@");
labelFunc0319_004C:
	if (!(var0003 == 0x0003)) goto labelFunc0319_005E;
	UI_item_say(item, "@If only the Avatar...@");
labelFunc0319_005E:
	if (!(var0003 == 0x0004)) goto labelFunc0319_0070;
	UI_item_say(item, "@Curse the Guardian!@");
labelFunc0319_0070:
	if (!(event == 0x0009)) goto labelFunc0319_0088;
	UI_item_say(item, "@Ah, there thou art, Avatar!@");
	UI_set_schedule_type(item, 0x0003);
labelFunc0319_0088:
	if (!(event == 0x0007)) goto labelFunc0319_00D5;
	UI_show_npc_face0(0xFEEC, 0x0000);
	message("\"This nightmare hath become too much to bear! The Avatar himself hath turned against me!\" *\"The Guardian's foul deeds have even corrupted our last bastion of virtue. Britannia is lost without its hero! I must awake...\"");
	say();
	UI_remove_npc_face0();
	var0004 = UI_get_object_position(item);
	UI_sprite_effect(0x001A, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x004C);
	UI_kill_npc(item);
labelFunc0319_00D5:
	if (!(event == 0x0001)) goto labelFunc0319_02EB;
	UI_show_npc_face0(0xFEEC, 0x0000);
	message("\"Avatar! At last thou hast come. Seeing thee again hath brought me strength.\"");
	say();
	message("\"Dost thou know that I expected to find thee here, in my dreams? I wish that thou wert truly here to counsel me...");
	say();
	UI_add_answer(["name", "job", "bye"]);
labelFunc0319_00FF:
	converse attend labelFunc0319_02EA;
	case "name" attend labelFunc0319_011F:
	message("\"Dost thou truly have to ask my name? Hast thou suffered from the recent afflictions as has all of Britannia? Canst thou not recognize thine old friend?\"* \"'Tis I, Lord British, ruler of all Britannia. Or at least what is left of it after all of the disasters...\"");
	say();
	UI_remove_answer("name");
	UI_add_answer(["disasters"]);
labelFunc0319_011F:
	case "job" attend labelFunc0319_013C:
	message("\"Thou dost have to ask? Why, I am ruler of Britannia, if thou dost not remember.\" ~\"'Tis sad. Truly thou art suffering from some sort of malady such as the imbalances which are plaguing all of the land. I fear that nature is trying to rend itself apart.\" ~\"Mine only hope is that thou art truly in fair health and that this pale reflection of thee in my dream is only a deceit of thy true fate.\"");
	say();
	UI_remove_answer("job");
	UI_add_answer(["dream"]);
labelFunc0319_013C:
	case "dream" attend labelFunc0319_0156:
	message("\"Of course this is a dream! Thou hast not yet returned from the Serpent Isle to which I sent thee.\" *\"Some days I fear that thou shalt never return... The storms began shortly after thou didst set sail.\"");
	say();
	UI_remove_answer("dream");
	UI_add_answer("storms");
labelFunc0319_0156:
	case "storms" attend labelFunc0319_0176:
	message("\"They are storms unlike anyone has seen before. The scholars can find no mention of such storms in any of the archives.\" *\"How can a mere stroke of lightning rip away the entire royal mint...\"");
	say();
	UI_remove_answer("storms");
	UI_add_answer(["mint", "disturbance"]);
labelFunc0319_0176:
	case "mint" attend labelFunc0319_0190:
	message("\"Thou dost think me slack-witted, I am certain. But I have seen it for myself...\" *\"The royal mint is gone. In its place stands a strange lighthouse.\"");
	say();
	UI_remove_answer("mint");
	UI_add_answer("lighthouse");
labelFunc0319_0190:
	case "lighthouse" attend labelFunc0319_01A3:
	message("\"'Twas clear enough what it was... Its light was still shining after the storm.\" *\"But none of the sailors recognized it.\"");
	say();
	UI_remove_answer("lighthouse");
labelFunc0319_01A3:
	case "disturbance" attend labelFunc0319_01BD:
	message("\"I know not what they mean... But none of the mages in Britannia seem to be able to predict the outcome of the most simple spells.\"");
	say();
	UI_remove_answer("disturbance");
	UI_add_answer("outcome");
labelFunc0319_01BD:
	case "outcome" attend labelFunc0319_01D7:
	message("\"A mage might find his entire house burned to the ground after merely trying to light a candle magically. Or another mage may, in the same instant, find himself unable to light a candle with a great flame spell.\" *\"The mages claim that the ether is unstable...\"");
	say();
	UI_remove_answer("outcome");
	UI_add_answer("ether");
labelFunc0319_01D7:
	case "ether" attend labelFunc0319_01EA:
	message("\"Ether, that which mages call upon to shape their spells. The mages say that the instability is a very bad sign.\" *\"According to the mages, such an imbalance could easily destroy the world -- if it continues to increase in severity.\"");
	say();
	UI_remove_answer("ether");
labelFunc0319_01EA:
	case "disasters" attend labelFunc0319_020D:
	message("\"If it were only the strange storms, or only the magic instability, I would be less concerned. But when thou dost consider it along with the earthquakes, the emps, and the gargoyles, I fear that the world may indeed be ending.\"");
	say();
	UI_remove_answer("disasters");
	UI_add_answer(["earthquakes", "emps", "gargoyles"]);
labelFunc0319_020D:
	case "earthquakes" attend labelFunc0319_0227:
	message("\"The earthquakes started not long after the storms began. At first they were fairly small and infrequent, but now they are growing more powerful and threatening the castle itself.\"");
	say();
	UI_remove_answer("earthquakes");
	UI_add_answer("castle");
labelFunc0319_0227:
	case "castle" attend labelFunc0319_023A:
	message("\"Only this morning did a guard find a crack at the base of the castle's foundation. It hath grown wider during the day...\" *\"If the castle falls, there will be no turning back. There will be nothing I can do to hold back the destruction.\"");
	say();
	UI_remove_answer("castle");
labelFunc0319_023A:
	case "emps" attend labelFunc0319_0254:
	message("\"Thou shouldst remember the emps, Avatar. Thou didst save their trees before I sent thee to find the Serpent Isle.\" *\"I fear that this cataclysm is affecting them the hardest of all.\"");
	say();
	UI_remove_answer("emps");
	UI_add_answer("cataclysm");
labelFunc0319_0254:
	case "cataclysm" attend labelFunc0319_026E:
	message("\"The emps live in closer harmony with the natural world than man does, Avatar. The storms and earthquakes have brought a great illness upon them.\"");
	say();
	UI_remove_answer("cataclysm");
	UI_add_answer("illness");
labelFunc0319_026E:
	case "illness" attend labelFunc0319_0281:
	message("\"Many of the emps have died already. I have little hope that any of that gentle race shall survive, even if the world doth not rend itself apart.\" *\"I am sure that the illness will spread to humans, if something is not done to stop these disasters.\"");
	say();
	UI_remove_answer("illness");
labelFunc0319_0281:
	case "gargoyles" attend labelFunc0319_029B:
	message("\"The gargoyles have also succumbed to these afflictions. They have fallen into a deep state of dreaming.\"");
	say();
	UI_remove_answer("gargoyles");
	UI_add_answer("dreaming");
labelFunc0319_029B:
	case "dreaming" attend labelFunc0319_02B5:
	message("\"Few of the gargoyles can resist the compulsion to sleep, Avatar. Their slumber seems troubled, however. They thrash about and mutter in their sleep.\" *\"Yet when we attempted to wake a sleeping gargoyle, to see if his dreams held any answers, he attacked us. I fear that we will have no answers from dreams...\"");
	say();
	UI_remove_answer("dreaming");
	UI_add_answer("answers");
labelFunc0319_02B5:
	case "answers" attend labelFunc0319_02CE:
	message("\"There are no answers, Avatar. No answers for those who sleep. I must wake and seek what answers I can without thee here.\" *\"I do not know that thou couldst save us if thou wert here, but I would have more hope if thou didst return...\"");
	say();
	UI_remove_npc_face1();
	UI_set_schedule_type(item, 0x0007);
	abort;
labelFunc0319_02CE:
	case "bye" attend labelFunc0319_02E7:
	message("\"Yes, yes. I should not be talking to myself anyway. With Britannia in the grip of these dark events it would be best if the people not fear that I have become afflicted, too. Thank thee, Avatar. Though thou art just a dream thou hast given me hope that Britannia will yet survive these dark days.\"");
	say();
	UI_set_schedule_type(item, 0x0007);
	UI_remove_npc_face1();
	abort;
labelFunc0319_02E7:
	goto labelFunc0319_00FF;
labelFunc0319_02EA:
	endconv;
labelFunc0319_02EB:
	return;
}


