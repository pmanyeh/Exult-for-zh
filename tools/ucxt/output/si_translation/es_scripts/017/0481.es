#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();

void Func0481 object#(0x481) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0481_000F;
	Func0809();
	abort;
labelFunc0481_000F:
	if (!(event == 0x000E)) goto labelFunc0481_001B;
	event = 0x000A;
labelFunc0481_001B:
	if (!(event == 0x0001)) goto labelFunc0481_005C;
	Func097F(0xFE9C, "@Hail, metal servant!@", 0x0000);
	Func097F(item, "@Halt, stranger!@", 0x0001);
	UI_set_schedule_type(0xFF7F, 0x000A);
	UI_si_path_run_usecode(item, [0x0766, 0x027C, 0x0000], 0x000A, item, 0x0481, true);
labelFunc0481_005C:
	if (!(event == 0x000A)) goto labelFunc0481_008D;
	UI_set_schedule_type(0xFF7F, 0x001D);
	UI_set_item_frame(0xFF7F, 0x0010);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0481], 0x0003);
labelFunc0481_008D:
	if (!(event == 0x0002)) goto labelFunc0481_019B;
	UI_run_schedule(item);
	UI_clear_item_say(0xFE9C);
	UI_clear_item_say(item);
	UI_set_schedule_type(0xFF7F, 0x001D);
	var0001 = UI_get_item_flag(0xFFFF, 0x0006);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"I am the guardian of the city of Order. Dost thou wish to enter the great city of Spinebreaker?\"");
	say();
	var0002 = Func0955();
	if (!var0002) goto labelFunc0481_0129;
	message("\"I cannot allow thee to enter until thou dost tell me the password. Canst thou tell me what the password is?\"");
	say();
	var0003 = Func0955();
	if (!var0003) goto labelFunc0481_0121;
	if (!var0001) goto labelFunc0481_010D;
	UI_show_npc_face1(0xFFFF, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"But Avatar, surely thou dost not know the password! How canst thou fool this infernal thing?\"");
	say();
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
labelFunc0481_010D:
	message("\"I am waiting to receive the password.\"");
	say();
	UI_add_answer(["I don't know the password.", "try to guess the password"]);
	goto labelFunc0481_0126;
labelFunc0481_0121:
	message("\"Then thou canst not enter the underground city.\"");
	say();
	abort;
labelFunc0481_0126:
	goto labelFunc0481_012E;
labelFunc0481_0129:
	message("\"Then thou shouldst not loiter about this place. By the authority of those who once lived and ruled here, I order thee to leave this place immediately.\"");
	say();
	abort;
labelFunc0481_012E:
	converse attend labelFunc0481_019A;
	case "I don't know the password." attend labelFunc0481_013E:
	message("\"Then thou canst not enter the underground city. By the authority of those who once lived and ruled here, I order thee to leave this place immediately!\"");
	say();
	abort;
labelFunc0481_013E:
	case "try to guess the password" attend labelFunc0481_0197:
	UI_show_npc_face1(0xFE9C, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("Having no idea what the password actually is, you take a wild guess, saying something that sounds like it might make a proper password.");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"That is not the correct password! Thou art forbidden to enter!\"");
	say();
	message("\"Thou shouldst not loiter about here. Thou must leave this place immediately.\"");
	say();
	var0001 = UI_get_item_flag(0xFFFF, 0x0006);
	if (!var0001) goto labelFunc0481_0196;
	UI_show_npc_face1(0xFFFF, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"I take it that was a guess! Ha! I knew thou couldst not know the proper password! I suggest we cease trying to guess the password and find a better way of entering this place. Simply guessing could take forever!\"");
	say();
labelFunc0481_0196:
	abort;
labelFunc0481_0197:
	goto labelFunc0481_012E;
labelFunc0481_019A:
	endconv;
labelFunc0481_019B:
	return;
}


