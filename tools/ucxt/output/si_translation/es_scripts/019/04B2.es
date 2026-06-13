#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0955 0x955 ();
extern void Func0814 0x814 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AA 0x9AA ();

void Func04B2 object#(0x4B2) ()
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
	var0003 = false;
	if (!(event == 0x0009)) goto labelFunc04B2_0487;
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0004 = UI_find_nearby(0xFE9C, 0x0178, 0x0019, 0x0000);
	if (!var0004) goto labelFunc04B2_0077;
	var0005 = UI_get_object_position(var0004);
	var0006 = UI_create_new_object(0x010E);
	if (!var0006) goto labelFunc04B2_0077;
	UI_remove_item(var0004);
	UI_set_item_frame(var0006, 0x0016);
	var0007 = UI_update_last_created(var0005);
labelFunc04B2_0077:
	UI_run_schedule(0xFF4E);
	UI_set_schedule_type(0xFF4E, 0x000F);
	UI_show_npc_face0(0xFF4E, 0x0000);
	message("\"Thank the heavens I have found thee! Thou didst disappear...\"");
	say();
	message("\"When the Guardian appeared, we feared thou wert taken. Thou must hurry, I have found a way for thee to return home!\"");
	say();
	UI_add_answer(["disappear", "Guardian", "return home"]);
labelFunc04B2_00AA:
	converse attend labelFunc04B2_0486;
	case "disappear" attend labelFunc04B2_00C7:
	message("\"One moment thou wert standing between the pillars... The next, thou wert gone!\" *\"That fiend Zhelkas laughed and said that the land was well rid of thee. Dupre tried to slay him, but he was no match for the gargoyle's strength. And then the Guardian came...\"");
	say();
	UI_remove_answer("disappear");
	UI_add_answer("no match");
labelFunc04B2_00C7:
	case "no match" attend labelFunc04B2_00E7:
	message("\"Dupre fought valiantly, Avatar. But Zhelkas threw him aside and ran into the caverns.\" *\"I heard one of the sliding doors open just before the drums started.\"");
	say();
	UI_remove_answer("no match");
	UI_add_answer(["sliding doors", "drums"]);
labelFunc04B2_00E7:
	case "sliding doors" attend labelFunc04B2_00FA:
	message("\"The drawbridge, Avatar! They were the only thing standing between us and the trolls! Zhelkas must have let them down...\" *\"We must flee, while there is still time!\"");
	say();
	UI_remove_answer("sliding doors");
labelFunc04B2_00FA:
	case "drums" attend labelFunc04B2_01F0:
	message("\"Zhelkas said that the drums were a sign that the trolls were on the move.\" *\"We must escape, Avatar, the drums are growing louder!\"");
	say();
	message("\"Wilt thou flee with thine old friend Iolo?\"");
	say();
	if (!(Func0955() == false)) goto labelFunc04B2_0142;
	if (!(var0003 == false)) goto labelFunc04B2_0121;
	message("\"Thou wilt reconsider when thou dost hear what the Guardian said...\"");
	say();
	goto labelFunc04B2_0125;
labelFunc04B2_0121:
	message("\"Zhelkas said that the land would be better off without thee. The Guardian said that the end is inevitable. Why stay when we shall all die?\"");
	say();
labelFunc04B2_0125:
	gflags[0x01F0] = true;
	if (!(gflags[0x01F0] && (gflags[0x01F1] && gflags[0x01F2]))) goto labelFunc04B2_013F;
	Func0814();
	gflags[0x01EB] = true;
	abort;
labelFunc04B2_013F:
	goto labelFunc04B2_01E9;
labelFunc04B2_0142:
	message("\"Follow me through the gate, Avatar! Thou wilt soon be home...\"");
	say();
	UI_remove_npc_face0();
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_find_nearby(0xFE9C, 0x0360, 0x0019, 0x0000);
	if (!var0008) goto labelFunc04B2_01DE;
	var0005 = UI_get_object_position(var0008);
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(0xFE9C, var0005, 0x000A, var0008, 0x04B2, true);
	var0009 = Func09A0(0x0000, 0x0001);
	var0005[0x0001] = (var0005[0x0001] - 0x0002);
	UI_si_path_run_usecode(0xFF4E, var0005, 0x000B, var0009, 0x04B2, false);
	goto labelFunc04B2_01E8;
labelFunc04B2_01DE:
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc04B2_01E8:
	abort;
labelFunc04B2_01E9:
	UI_remove_answer("drums");
labelFunc04B2_01F0:
	case "Guardian" attend labelFunc04B2_021C:
	message("\"The Guardian spoke to us after thou didst disappear.\"");
	say();
	message("\"The Guardian said that he hath grown tired of the game here on Serpent Isle. The end is inevitable now...\"");
	say();
	message("\"The Guardian said to tell thee that he was changing the venue...\"");
	say();
	var0003 = true;
	UI_remove_answer("Guardian");
	UI_add_answer(["inevitable", "venue"]);
labelFunc04B2_021C:
	case "inevitable" attend labelFunc04B2_0236:
	message("\"The Guardian said that Balance could never be restored now. He said that the land will soon destroy itself... And us with it.\"");
	say();
	UI_remove_answer("inevitable");
	UI_add_answer("destroy itself");
labelFunc04B2_0236:
	case "destroy itself" attend labelFunc04B2_024D:
	message("\"Without Balance, the earthquakes and storms will continue until there is not one rock upon another. Soon the seas will swallow all that remains of the land.\"");
	say();
	message("\"There is nothing that thou canst do here, Avatar! We will be crushed and dragged beneath the waves if we stay!\"");
	say();
	UI_remove_answer("destroy itself");
labelFunc04B2_024D:
	case "venue" attend labelFunc04B2_0267:
	message("\"The Guardian said that he would await thee on Earth, Avatar! Thine home...\" *\"He said he was going to unleash horrible maladies upon thy people.\"");
	say();
	UI_remove_answer("venue");
	UI_add_answer("maladies");
labelFunc04B2_0267:
	case "maladies" attend labelFunc04B2_0281:
	message("\"The Guardian said he would send vile, lingering plagues to all the leaders of thy land. Then he would set minions in their places to destroy all that thou dost hold dear.\" *\"The Guardian even threatened thy family...\"");
	say();
	UI_remove_answer("maladies");
	UI_add_answer("family");
labelFunc04B2_0281:
	case "family" attend labelFunc04B2_0368:
	UI_remove_answer("family");
	message("\"The Guardian told us to tell thee that it would be of no great matter to find out who all thy friends and family were, Avatar. He said that we were to tell thee that he had special plans for them.\"");
	say();
	message("\"Wilt thou follow me? I can help thee escape to save those that thou lovest.\"");
	say();
	if (!(Func0955() == false)) goto labelFunc04B2_02C1;
	message("\"Wilt thou allow the Guardian to slay thy friends as his minions slew poor Spark's father? How canst thou consider staying in a doomed land when thy family is in danger?\"");
	say();
	gflags[0x01F1] = true;
	if (!(gflags[0x01F0] && (gflags[0x01F1] && gflags[0x01F2]))) goto labelFunc04B2_02BE;
	gflags[0x01EB] = true;
	Func0814();
	abort;
labelFunc04B2_02BE:
	goto labelFunc04B2_0368;
labelFunc04B2_02C1:
	message("\"Follow me through the gate, Avatar! Thou wilt soon be home...\"");
	say();
	UI_remove_npc_face0();
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_find_nearby(0xFE9C, 0x0360, 0x0019, 0x0000);
	if (!var0008) goto labelFunc04B2_035D;
	var0005 = UI_get_object_position(var0008);
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(0xFE9C, var0005, 0x000A, var0008, 0x04B2, true);
	var0009 = Func09A0(0x0000, 0x0001);
	var0005[0x0001] = (var0005[0x0001] - 0x0002);
	UI_si_path_run_usecode(0xFF4E, var0005, 0x000B, var0009, 0x04B2, false);
	goto labelFunc04B2_0367;
labelFunc04B2_035D:
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc04B2_0367:
	abort;
labelFunc04B2_0368:
	case "return home" attend labelFunc04B2_0382:
	message("\"When the Guardian disappeared, we began searching for thee. The Guardian's interference into this place hath opened a gate... To thine home, I think.\"");
	say();
	UI_remove_answer("return home");
	UI_add_answer("gate");
labelFunc04B2_0382:
	case "gate" attend labelFunc04B2_039C:
	message("\"It is much like the Moongate that brought thee to Britannia the last time. Shamino thought perhaps the Guardian's passage had not fully closed.\" *\"I do not think it is a trap, Avatar! I do not think the Guardian knows that the gate here still exists...\"");
	say();
	UI_remove_answer("gate");
	UI_add_answer("trap");
labelFunc04B2_039C:
	case "trap" attend labelFunc04B2_0483:
	UI_remove_answer("trap");
	message("\"Why would the Guardian go to such lengths, Avatar? He already has thee trapped here... In a land he says will soon rend its heart out.\"");
	say();
	message("\"Wilt thou come with me now? I am sure that thou canst return home at last.\"");
	say();
	if (!(Func0955() == false)) goto labelFunc04B2_03DC;
	message("\"Reconsider, Avatar! Thou couldst spend the rest of thy life waiting for another chance to return to thine home and family...\"");
	say();
	gflags[0x01F2] = true;
	if (!(gflags[0x01F0] && (gflags[0x01F1] && gflags[0x01F2]))) goto labelFunc04B2_03D9;
	Func0814();
	gflags[0x01EB] = true;
	abort;
labelFunc04B2_03D9:
	goto labelFunc04B2_0483;
labelFunc04B2_03DC:
	message("\"Follow me through the gate, Avatar! Thou wilt soon be home...\"");
	say();
	UI_remove_npc_face0();
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_find_nearby(0xFE9C, 0x0360, 0x0019, 0x0000);
	if (!var0008) goto labelFunc04B2_0478;
	var0005 = UI_get_object_position(var0008);
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(0xFE9C, var0005, 0x000A, var0008, 0x04B2, true);
	var0009 = Func09A0(0x0000, 0x0001);
	var0005[0x0001] = (var0005[0x0001] - 0x0002);
	UI_si_path_run_usecode(0xFF4E, var0005, 0x000B, var0009, 0x04B2, false);
	goto labelFunc04B2_0482;
labelFunc04B2_0478:
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc04B2_0482:
	abort;
labelFunc04B2_0483:
	goto labelFunc04B2_00AA;
labelFunc04B2_0486:
	endconv;
labelFunc04B2_0487:
	if (!(event == 0x000E)) goto labelFunc04B2_04BA;
	var000A = UI_get_item_shape(item);
	if (!(var000A == 0x0360)) goto labelFunc04B2_04A8;
	event = 0x000A;
	goto labelFunc04B2_04BA;
labelFunc04B2_04A8:
	if (!(var000A == 0x01D1)) goto labelFunc04B2_04B9;
	event = 0x000D;
	goto labelFunc04B2_04BA;
labelFunc04B2_04B9:
	abort;
labelFunc04B2_04BA:
	if (!(event == 0x000A)) goto labelFunc04B2_0558;
	var0008 = UI_find_nearby(0xFE9C, 0x0360, 0x000A, 0x0000);
	Func09AA();
	var0005 = UI_get_object_position(0xFF4E);
	UI_sprite_effect(0x001A, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF4E);
	var0005 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x001A, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_polymorph(0xFE9C, 0x00EF);
	var0007 = UI_delayed_execute_usecode_array(var0008, [(byte)0x55, 0x07F7, (byte)0x01, (byte)0x52, "@What the...?@"], 0x0014);
	abort;
labelFunc04B2_0558:
	if (!(event == 0x000D)) goto labelFunc04B2_05A8;
	var0005 = UI_get_object_position(0xFF4E);
	UI_sprite_effect(0x001A, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF4E);
	var0007 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F7], 0x0014);
	abort;
labelFunc04B2_05A8:
	return;
}


