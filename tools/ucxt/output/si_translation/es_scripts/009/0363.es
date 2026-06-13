#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func098C 0x98C ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func094F 0x94F (var var0000, var var0001);

void Func0363 shape#(0x363) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_is_pc_female();
	var0001 = Func0994();
	var0002 = "son";
	var0003 = UI_get_npc_object(0xFF2D);
	if (!var0000) goto labelFunc0363_0029;
	var0002 = "daughter";
labelFunc0363_0029:
	if (!((event == 0x0003) && (var0001 == 0x001F))) goto labelFunc0363_00BA;
	UI_show_npc_face0(0xFF2D, 0x0000);
	message("Greetings, hero from another world!\"");
	say();
	message("\"I foretold that we would meet again, though I had not expected thee in the realm of dreams.\" *\"That which thou dost see before thee is the Moon's Eye. It is thy goal in the waking world.\"");
	say();
	message("\"Seek out the true Moon's Eye in the Temple of the Ancient Ones in the icy wastes to the north. It will show thee what thou must know...\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF2D, "@Seek the Moon's Eye...@", 0x0002);
	Func097F(0xFE9C, "@Wait...@", 0x000C);
	var0004 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var0005 = UI_set_item_quality(item, 0x0005);
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x06D9], 0x000A);
	abort;
labelFunc0363_00BA:
	if (!(event == 0x0002)) goto labelFunc0363_042F;
	if (!((item == var0003) && (var0001 == 0x0018))) goto labelFunc0363_0161;
	var0006 = UI_get_object_position(0xFF2D);
labelFunc0363_00DC:
	if (!(var0006[0x0003] > 0x0000)) goto labelFunc0363_011C;
	var0006[0x0001] = (var0006[0x0001] - 0x0001);
	var0006[0x0002] = (var0006[0x0002] - 0x0001);
	var0006[0x0003] = (var0006[0x0003] - 0x0002);
	goto labelFunc0363_00DC;
labelFunc0363_011C:
	UI_sprite_effect(0x0007, var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF2D);
	UI_clear_item_flag(0xFFFF, 0x0001);
	UI_clear_item_flag(0xFFFE, 0x0001);
	UI_clear_item_flag(0xFFFD, 0x0001);
	abort;
labelFunc0363_0161:
	if (!(var0001 == 0x001B)) goto labelFunc0363_042F;
	UI_init_conversation();
	UI_show_npc_face0(0xFF2D, 0x0000);
	message("\"Even as was foretold! I have travelled a great distance to meet with thee. My name is Thoxa.\"");
	say();
	message("\"But wait! I proceed too quickly. Perhaps thou art not the promised Hero... I must test thee, lest I give mine assistance in error.\"");
	say();
	if (!Func098C()) goto labelFunc0363_0407;
	message("\"Thou art truly the one I seek! Here is the Hourglass of Fate. Keep it with thee always, for through it the Monks of Xenka can aid thee.\"");
	say();
	var0005 = Func099B(0xFE9C, 0x0001, 0x0347, 0xFE99, 0x0001, false, true);
	UI_add_answer(["foretold", "promised Hero", "assistance", "Hourglass"]);
	UI_add_answer("bye");
labelFunc0363_01BC:
	converse attend labelFunc0363_0403;
	case "Hourglass" attend labelFunc0363_01DA:
	UI_remove_answer("Hourglass");
	message("\"As long as the Hourglass of Fate is with thee, if thou art killed, thou shalt be resurrected on Monk Isle.\"");
	say();
	message("\"And if one of thy companions is killed, thou canst summon one of us to resurrect him or her, by use of the Hourglass.\"");
	say();
	message("\"The monk shall come soon, when thou art in a safe place, without strangers or distractions.\"");
	say();
labelFunc0363_01DA:
	case "foretold" attend labelFunc0363_0208:
	UI_remove_answer("foretold");
	message("\"I am a Xenkan monk, my ");
	message(var0002);
	message(". As such, I have devoted my life to studying the prophecies of Xenka.\"");
	say();
	message("\"The writings are clear: the Hero shall come in the last days, with Three Companions, to battle against the Evil which is in the land.\"");
	say();
	message("\"Further, the Hero shall be given guidance from a Power that dwells in the Void.\"");
	say();
	UI_add_answer(["Companions", "Power"]);
labelFunc0363_0208:
	case "Companions" attend labelFunc0363_0227:
	UI_remove_answer("Companions");
	message("\"The writings of Xenka speak of the Three which shall travel with thee. Without them, thou canst not succeed.\"");
	say();
	message("\"They shall be thine oldest and most trusted friends, and it is their part to share thine adventure with thee.\"");
	say();
	message("\"Thou must find them, Hero! And then never let them leave thy side...\"");
	say();
	gflags[0x02C3] = true;
labelFunc0363_0227:
	case "Power" attend labelFunc0363_0246:
	UI_remove_answer("Power");
	message("\"The writings are vague on this point, so that it is not certain whether the Power lives in the Void now, or merely came from that place.\"");
	say();
	message("\"However, I know that thou shalt need to seek out three artifacts -- a Ring, a Necklace, and an Earring.\"");
	say();
	message("\"Through these ancient items, the Power shall communicate with thee. More than this, I know not.\"");
	say();
	gflags[0x02C2] = true;
labelFunc0363_0246:
	case "Xenka" attend labelFunc0363_0259:
	UI_remove_answer("Xenka");
	message("\"How can I explain Xenka in the short time we have? Xenka is the prophetess who receives wisdom from beyond the Void...\"");
	say();
labelFunc0363_0259:
	case "promised Hero" attend labelFunc0363_0284:
	UI_remove_answer("promised Hero");
	message("\"The land is in dire need of a Hero, for the end of the world draws nigh!\"");
	say();
	message("\"There are storms which lash out with magical lightnings, and strange illnesses which plague the innocent.\"");
	say();
	message("\"Lastly, there is the growing sense that something is wrong in the land...\"");
	say();
	UI_add_answer(["storms", "illnesses", "wrong"]);
labelFunc0363_0284:
	case "storms" attend labelFunc0363_029F:
	UI_remove_answer("storms");
	message("\"The storms are one of the signs that the end of the world is at hand. I know not what causes them, or how they may be stopped.\"");
	say();
	message("\"Most ships have ceased to sail, for the storms strike any vessel which leaves harbor.\"");
	say();
	message("\"The lightning doth have the power to kill or to teleport, and sometimes it changes the nature of that which it strikes.\"");
	say();
labelFunc0363_029F:
	case "illnesses" attend labelFunc0363_02B6:
	UI_remove_answer("illnesses");
	message("\"The prophecies mention that a plague will come among us, to sicken the meek and the innocent.\"");
	say();
	message("\"Hast thou noticed the dying birds? They are only the first victims. At first the disease shall strike the wildest races, and lastly, the race of Men.\"");
	say();
labelFunc0363_02B6:
	case "wrong" attend labelFunc0363_02CD:
	UI_remove_answer("wrong");
	message("\"I cannot explain further. Dost thou not feel it? The sense that something is... not right?\"");
	say();
	message("\"Xenka speaks of these days as the Time of Imbalance.\"");
	say();
labelFunc0363_02CD:
	case "assistance" attend labelFunc0363_02E8:
	UI_remove_answer("assistance");
	message("\"My time with thee is short, so take careful heed of mine advice --\"");
	say();
	message("\"There is a cave further south by a large red bush -- its entrance is invisible. If thou canst find thy way in, it may provide more clues.\"");
	say();
	message("\"Follow the coast until thou dost come to a great city. The name of the city is Monitor. An old friend of thine awaits thee there.\"");
	say();
labelFunc0363_02E8:
	case "aid" attend labelFunc0363_02FB:
	UI_remove_answer("aid");
	message("\"With it, thou wilt know how long thou hast to complete thy quest before we are all doomed! And as long as the sands run within the Hourglass of Fate, we may intercede if thou art slain before thy quest is completed -- Thou wilt be resurrected on Monk Isle.\"");
	say();
labelFunc0363_02FB:
	case "Sands of Time" attend labelFunc0363_0315:
	UI_remove_answer("Sands of Time");
	message("\"Within the Hourglass of Fate lie the Sands of Time. As each grain doth fall, so doth another moment hasten us to our doom.\"");
	say();
	UI_add_answer("doom");
labelFunc0363_0315:
	case "doom" attend labelFunc0363_0328:
	UI_remove_answer("doom");
	message("\"If thou dost fail in thy quest, our world will end... ripped apart by the earthquakes that will soon plague it.\"");
	say();
labelFunc0363_0328:
	case "bye" attend labelFunc0363_0400:
	message("\"I must go now, before those who oppose me find that I have been here.\"");
	say();
	var0005 = ("@Farewell!@" & "@No!@");
	Func094F(0xFF2D, var0005);
	UI_end_conversation();
	UI_remove_npc_face0();
	var0007 = UI_get_object_position(0xFF2D);
	var0007[0x0001] = (var0007[0x0001] + 0x000C);
	var0007[0x0002] = (var0007[0x0002] - 0x0003);
	UI_move_object(0xFF31, var0007);
	UI_play_sound_effect(0x0051);
	UI_sprite_effect(0x001A, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0005 = UI_delayed_execute_usecode_array(0xFF31, [(byte)0x23, (byte)0x55, 0x0109], 0x0014);
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x59, (byte)0x32, (byte)0x01, (byte)0x64], 0x0007);
	var0005 = ("@Thoxa!@" & ("" & ("@Vex Ort!@" & ("@Mas Ort!@" & ("@Vex Ort!@" & ("" & "@She lives!@"))))));
	Func094F(0xFF31, var0005);
	abort;
labelFunc0363_0400:
	goto labelFunc0363_01BC;
labelFunc0363_0403:
	endconv;
	goto labelFunc0363_042F;
labelFunc0363_0407:
	UI_set_schedule_type(0xFF2D, 0x0014);
	UI_clear_item_say(0xFF2D);
	Func097F(0xFF2D, "@An impostor!@", 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0010);
	abort;
labelFunc0363_042F:
	return;
}


