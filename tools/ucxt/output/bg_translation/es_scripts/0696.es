#game "blackgate"
// externs
extern void Func087D 0x87D ();
extern var Func0881 0x881 ();

void Func0696 object#(0x696) ()
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

	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = UI_get_object_position(item);
	UI_set_schedule_type(item, 0x000F);
	if (!gflags[0x0003]) goto labelFunc0696_00D8;
	if (!(!gflags[0x032B])) goto labelFunc0696_0095;
	var0007 = UI_set_last_created(item);
	if (!(!UI_is_not_blocked(var0006, 0x01F8, 0xFE99))) goto labelFunc0696_005F;
	var0004 = true;
	var0007 = UI_update_last_created(var0006);
	goto labelFunc0696_01A8;
labelFunc0696_005F:
	var0007 = UI_update_last_created(var0006);
	Func087D();
	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian looks irritated by your question, \"'Tis not a hindrance for one sensitive enough to feel the ridges the ink\tmakes on the page.");
	say();
	message("Dost thou think me an invalid? Know that in my searches, I\thave faced dangers that would turn even one such as thee to quivering flesh.\"");
	say();
	message("The mage's eyes begin to glow softly. \"My magic is strong enough to tear down the fabric of reality and reconstruct it as I see fit.");
	say();
	message("To prove this, I'll take on the form of a winged gargoyle noble...\"");
	say();
	message("His hands move in passes you recognize as being magical, then he speaks softly the magic words,");
	say();
	message("\"Rel An-Quas Ailem In Garge\".*");
	say();
	var0000 = true;
	goto labelFunc0696_01A8;
labelFunc0696_0095:
	if (!(!gflags[0x032C])) goto labelFunc0696_00B8;
	UI_show_npc_face(0xFEE2, 0x0003);
	message("\"Even the great dragon's form is not beyond my power.\" Erethian begins speaking softly, then rises to a crescendo with the words,");
	say();
	message("\"Rel An-Quas Ailem In BAL-ZEN\"!*");
	say();
	var0001 = true;
	goto labelFunc0696_01A8;
	goto labelFunc0696_00D5;
labelFunc0696_00B8:
	UI_show_npc_face(0xFEE2, 0x0002);
	message("The dragon looks down its snout menacingly at what you guess is meant to be you. Even in this powerful form, it would seem that Erethian is still blind, however, you get the impression that he is quite capable of taking care of himself.");
	say();
	message("\"Enough of these silly charades, I really am quite busy with my studies.\" He intones the words,");
	say();
	message("\"An Ort Rel\"!*");
	say();
	var0005 = true;
	goto labelFunc0696_01A8;
labelFunc0696_00D5:
	goto labelFunc0696_01A8;
labelFunc0696_00D8:
	UI_show_npc_face(0xFEE2, 0x0001);
	if (!(!gflags[0x032B])) goto labelFunc0696_013F;
	var0007 = UI_set_last_created(item);
	if (!(!UI_is_not_blocked(var0006, 0x01F4, 0x0000))) goto labelFunc0696_0113;
	var0004 = true;
	var0007 = UI_update_last_created(var0006);
	goto labelFunc0696_01A8;
labelFunc0696_0113:
	var0007 = UI_update_last_created(var0006);
	Func087D();
	message("Erethian looks irritated by your question, \"'Tis not a hindrance for one\tsensitive enough to feel the ridges the ink makes on the page.");
	say();
	message("Dost thou think me an invalid? Know that in my searches, I have faced dangers that would turn even one such as thee to quivering flesh.\"");
	say();
	message("The mage's eyes begin to glow softly. \"My magic is strong enough to tear down the fabric of reality and reconstruct it as I see fit.\"");
	say();
	message("To prove this, I'll take on the form of a winged gargoyle noble...\"");
	say();
	message("His hands move in passes you recognize as being magical, then he speaks softly the magic words,");
	say();
	message("\"Rel An-Quas Ailem In Bet-Zen\".*");
	say();
	var0002 = true;
	goto labelFunc0696_01A8;
labelFunc0696_013F:
	if (!(!gflags[0x032C])) goto labelFunc0696_0159;
	message("The elderly mage looks a bit perplexed after his experience as a rodent. \"That spell always used to work, but with all of these damnable ether waves, I can't remember the proper words?");
	say();
	message("'Tis of no consequence, I'll take the form of a great dragon to prove my powers...\" he begins speaking softly, then rises to a crescendo with the words,");
	say();
	message("\"Rel An-Quas Ailem In MOO\"!*");
	say();
	var0003 = true;
	goto labelFunc0696_01A8;
labelFunc0696_0159:
	message("The elderly mage looks quite embarrassed, \"Enough of these silly charades, I really am quite busy with my studies.\" He turns away, his face blushing furiously.*");
	say();
	UI_set_schedule_type(item, 0x001D);
	UI_clear_item_flag(UI_get_npc_object(0xFE9C), 0x0010);
	var0008 = Func0881();
	var0009 = UI_delayed_execute_usecode_array(var0008, [(byte)0x2C, (byte)0x2D], 0x000E);
	var000A = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x000C, (byte)0x55, 0x069D]);
labelFunc0696_01A8:
	if (!var0000) goto labelFunc0696_01EB;
	var000B = UI_execute_usecode_array(item, [(byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x61, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x55, 0x0697]);
labelFunc0696_01EB:
	if (!var0001) goto labelFunc0696_0224;
	var0000 = UI_find_nearest(item, 0x0112, 0x0001);
	var000C = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0006, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x55, 0x0697]);
labelFunc0696_0224:
	if (!var0002) goto labelFunc0696_0260;
	var000B = UI_execute_usecode_array(item, [(byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x55, 0x0697]);
labelFunc0696_0260:
	if (!var0003) goto labelFunc0696_02A3;
	var000B = UI_execute_usecode_array(item, [(byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x55, 0x0697]);
labelFunc0696_02A3:
	if (!var0005) goto labelFunc0696_02F1;
	var0001 = UI_find_nearest(item, 0x01F8, 0x0001);
	var000D = UI_execute_usecode_array(var0001, [(byte)0x27, 0x0003, (byte)0x68, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x68, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x55, 0x0697]);
labelFunc0696_02F1:
	if (!var0004) goto labelFunc0696_0322;
	UI_show_npc_face(0xFEE2, 0x0001);
	if (!(!gflags[0x032A])) goto labelFunc0696_030F;
	message("The old mage seems on the verge of saying something, stops then says, \"Were quarter's not so confined here, I'd show thee that my blindness in no way hampers my abilities.\" His affliction seems to be a touchy subject with the mage.*");
	say();
	goto labelFunc0696_0313;
labelFunc0696_030F:
	message("\"Have you nothing better to do than bother an old man?!\" He seems quite put out with this line of conversation.*");
	say();
labelFunc0696_0313:
	UI_set_schedule_type(var0005, 0x001D);
	gflags[0x032A] = true;
	return;
labelFunc0696_0322:
	return;
}


