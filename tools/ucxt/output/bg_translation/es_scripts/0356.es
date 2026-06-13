#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func0356 shape#(0x356) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0356_0100;
	if (!gflags[0x0317]) goto labelFunc0356_000F;
	abort;
labelFunc0356_000F:
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0010)) goto labelFunc0356_007E;
	UI_show_npc_face(0xFEE1, 0x0000);
	if (!gflags[0x030C]) goto labelFunc0356_0036;
	message("\"Our gratitude is thine, Avatar. Thou hast saved Britannia from what might have become a second Age of Darkness. Again, thou dost prove thy worthiness to be the instrument of Lord British.\"");
	say();
	abort;
labelFunc0356_0036:
	if (!gflags[0x0318]) goto labelFunc0356_0041;
	message("\"Salutations, Avatar. I can assist thee no more, but remember my words: the Psyche returns to the Core...\"*");
	say();
	abort;
labelFunc0356_0041:
	if (!(!gflags[0x0316])) goto labelFunc0356_0053;
	message("Suddenly, your mind is filled with the crystal-clear resonance of an authoritative voice.~\"Greeting to thee. I am the keeper of Truth. Dost thou seek the wisdom and boon of Truth?\"");
	say();
	gflags[0x0316] = true;
	goto labelFunc0356_0057;
labelFunc0356_0053:
	message("The Shrine of Truth speaks. \"Greetings, seeker. Once again I ask thee, Dost thou seek my enlightenment?\"");
	say();
labelFunc0356_0057:
	if (!Func090A()) goto labelFunc0356_0079;
	message("\"Very well. Prepare thyself.\" The voice falls silent.*");
	say();
	var0001 = UI_execute_usecode_array(item, [(byte)0x27, 0x0001, (byte)0x55, 0x06F9]);
	goto labelFunc0356_007E;
labelFunc0356_0079:
	message("\"I wish thee well, then.\"*");
	say();
	abort;
labelFunc0356_007E:
	if (!(var0000 == 0x000E)) goto labelFunc0356_00BF;
	UI_show_npc_face(0xFEE1, 0x0001);
	if (!gflags[0x030C]) goto labelFunc0356_009D;
	message("\"Thy Love for life is boundless. Thine heart-felt actions are a shining example to all of Britannia.\"*");
	say();
	abort;
labelFunc0356_009D:
	if (!gflags[0x0327]) goto labelFunc0356_00A8;
	message("\"Welcome, Avatar. I can help thee no further, save to offer the advice I gave before: A great evil stirs in Britannia...\"*");
	say();
	abort;
labelFunc0356_00A8:
	if (!(!gflags[0x031A])) goto labelFunc0356_00BA;
	message("An unearthly beautiful voice sighs gently into your conciousness. \"Greetings, Avatar. I represent the embodiment of Love. If thou dost seek enlightenment , thou must take the Test of\tLove. Its path lies through the glowing, blue portal to the south.\"*");
	say();
	gflags[0x031A] = true;
	goto labelFunc0356_00BE;
labelFunc0356_00BA:
	message("\"I welcome thee again, seeker. I cannot aid thee until thy successful completion of the Test of Love.\"*");
	say();
labelFunc0356_00BE:
	abort;
labelFunc0356_00BF:
	if (!(var0000 == 0x000F)) goto labelFunc0356_0100;
	UI_show_npc_face(0xFEE1, 0x0002);
	if (!gflags[0x030C]) goto labelFunc0356_00DE;
	message("\"Thine onus is abated and Britannia is free of Exodus' grasp once more. Thy deeds will long be rembered as the most courageous in the history of this land.\"*");
	say();
	abort;
labelFunc0356_00DE:
	if (!gflags[0x0341]) goto labelFunc0356_00E9;
	message("\"Hail, mighty Avatar! Thou must not fail in thy quest to find the Talisman of Infinity. Remember: the scroll that will unlock its secret lies within this castle.\"*");
	say();
	abort;
labelFunc0356_00E9:
	if (!(!gflags[0x0329])) goto labelFunc0356_00FB;
	message("A strong, vibrant voice rings out in your mind. \"Greetings seeker! I am the Keeper of Courage. If thou hast the will to seek my reward, thou must enter the portal to the south.\"*");
	say();
	gflags[0x0329] = true;
	goto labelFunc0356_00FF;
labelFunc0356_00FB:
	message("\"Again I say to thee, my path lies through the portal to the south. Enter if thou hast the Courage, seeker...\"*");
	say();
labelFunc0356_00FF:
	abort;
labelFunc0356_0100:
	if (!(event == 0x0004)) goto labelFunc0356_01A1;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0010)) goto labelFunc0356_0128;
	UI_show_npc_face(0xFEE1, 0x0000);
	message("\"Thou hast mastered the Test of Truth, and so a boon of great intellect and magical ability will be bestowed upon thee. Use -- and respect -- thy powers well, Avatar.\"");
	say();
labelFunc0356_0128:
	if (!(var0000 == 0x000E)) goto labelFunc0356_0140;
	UI_show_npc_face(0xFEE1, 0x0001);
	message("\"My heart is gladdened to learn that Love is a Principle thou dost hold dear, evident by thy successful completion of the Test of Love. Now, then, shall a blessing of quickness and skill be thine.\"");
	say();
labelFunc0356_0140:
	if (!(var0000 == 0x000F)) goto labelFunc0356_0158;
	UI_show_npc_face(0xFEE1, 0x0002);
	message("\"Well done, mighty warrior! The unsurpassed Courage which flows through thy veins could be none other than that of the Avatar. Thou hast proven thyself worthy of the reward of Courage with Valor, Sacrifice, Honor, and Spirituality... Receive it now\tin Humility.\"*");
	say();
labelFunc0356_0158:
	UI_remove_npc_face(0xFEE1);
	var0002 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x000A, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	var0001 = UI_execute_usecode_array(item, [(byte)0x27, 0x0008, (byte)0x55, 0x0356]);
labelFunc0356_01A1:
	if (!(event == 0x0002)) goto labelFunc0356_04C5;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0010)) goto labelFunc0356_02D9;
	if (!(!gflags[0x0318])) goto labelFunc0356_02C2;
	var0003 = UI_get_object_position(UI_get_npc_object(0xFE9C));
	UI_sprite_effect(0x0007, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	var0004 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0002);
	var0004 = (var0004 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0006));
	var0004 = (var0004 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0005));
	if (!(!(var0004[0x0001] >= 0x001E))) goto labelFunc0356_0262;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0002, (0x001E - var0004[0x0001]));
labelFunc0356_0262:
	if (!(!(var0004[0x0002] >= 0x001E))) goto labelFunc0356_02A6;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0006, (0x001E - var0004[0x0002]));
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0005, (0x001E - var0004[0x0003]));
labelFunc0356_02A6:
	gflags[0x0318] = true;
	var0006 = UI_execute_usecode_array(item, [(byte)0x27, 0x000F, (byte)0x55, 0x0356]);
	goto labelFunc0356_02D9;
labelFunc0356_02C2:
	UI_show_npc_face(0xFEE1, 0x0000);
	message("\"Thou hast now experienced the full meaning of the Principle of Truth. The value of such is beyond measure, for truth shall guide thee throughout thy life's endeavors.\"");
	say();
	message("The statue's voice takes on a warning tone. \"Know this Truth: the Psyche returns to the Core...\" With that said, the statue becomes quiet once more.*");
	say();
	gflags[0x0317] = false;
	abort;
labelFunc0356_02D9:
	if (!(var0000 == 0x000E)) goto labelFunc0356_03D1;
	if (!(!gflags[0x0327])) goto labelFunc0356_03BA;
	var0003 = UI_get_object_position(UI_get_npc_object(0xFE9C));
	UI_sprite_effect(0x0007, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	var0004 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0001);
	var0004 = (var0004 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0004));
	if (!(!(var0004[0x0001] >= 0x001E))) goto labelFunc0356_0375;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0001, (0x001E - var0004[0x0001]));
labelFunc0356_0375:
	if (!(!(var0004[0x0002] >= 0x001E))) goto labelFunc0356_039E;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0004, (0x001E - var0004[0x0002]));
labelFunc0356_039E:
	gflags[0x0327] = true;
	var0006 = UI_execute_usecode_array(item, [(byte)0x27, 0x000F, (byte)0x55, 0x0356]);
	goto labelFunc0356_03D1;
labelFunc0356_03BA:
	UI_show_npc_face(0xFEE1, 0x0001);
	message("\"Now hast thou earnestly experienced all that is Love. 'Tis a benefit never to be taken lightly, for Love is a formidible motivator. Remember always the lessons in Compassion, Sacrifice, and Justice thou hast mastered.\"");
	say();
	message("The voice of the Keeper of Love fills with compassion as she speaks. \"Do have a care, Avatar. For a great evil stirs within Britannia, I know not the source.\"*");
	say();
	gflags[0x0317] = false;
	abort;
labelFunc0356_03D1:
	if (!(var0000 == 0x000F)) goto labelFunc0356_04C5;
	if (!(!gflags[0x0341])) goto labelFunc0356_04B2;
	var0003 = UI_get_object_position(UI_get_npc_object(0xFE9C));
	UI_sprite_effect(0x0007, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	var0004 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0000);
	var0004 = (var0004 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0003));
	if (!(!(var0004[0x0001] >= 0x001E))) goto labelFunc0356_046D;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0000, (0x001E - var0004[0x0001]));
labelFunc0356_046D:
	if (!(!(var0004[0x0002] >= 0x001E))) goto labelFunc0356_0496;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0003, (0x001E - var0004[0x0002]));
labelFunc0356_0496:
	gflags[0x0341] = true;
	var0006 = UI_execute_usecode_array(item, [(byte)0x27, 0x000F, (byte)0x55, 0x0356]);
	goto labelFunc0356_04C5;
labelFunc0356_04B2:
	UI_show_npc_face(0xFEE1, 0x0002);
	message("Urgency breaks into the voice of the statue. \"I lay upon thee a geas, and as thou art the Avatar, thou art bound to respond. Thy quest is to seek the Talisman of Infinity. Within this castle there lies a scroll which can tell thee of its use. Go now, for time grows short.*");
	say();
	gflags[0x0317] = false;
	abort;
labelFunc0356_04C5:
	return;
}


