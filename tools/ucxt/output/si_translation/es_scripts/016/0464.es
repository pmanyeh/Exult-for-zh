#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func09AA 0x9AA ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func082F 0x82F ();

void Func0464 object#(0x464) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_clear_item_flag(0xFE9C, 0x0010);
	if (!UI_get_item_flag(0xFF9C, 0x001E)) goto labelFunc0464_001B;
	Func0809();
	abort;
labelFunc0464_001B:
	if (!(event == 0x0002)) goto labelFunc0464_0790;
	Func09AA();
	UI_play_music(0x0040, Func09A0(0x0005, 0x0001));
	UI_show_npc_face0(0xFED6, 0x0000);
	var0000 = UI_get_item_flag(0xFF9C, 0x001C);
	if (!(var0000 == false)) goto labelFunc0464_0286;
	message("\"I am the Educator here, seeker. It is my task to determine how far thine Ethicality hath already progressed before the test may begin.\"");
	say();
	message("\"Dost thou wish to begin the test?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0464_01F9;
	message("\"Very well... Consider each question carefully before answering.\"");
	say();
	message("\"Question One: If thou didst come upon one who was sure to die, would it be Ethical to risk death trying to save the doomed person? Or would it be more Ethical to flee before the same fate befell thee?\"");
	say();
	UI_add_answer(["Risk Death", "Flee"]);
labelFunc0464_007A:
	converse attend labelFunc0464_0168;
	case "Risk Death" attend labelFunc0464_009E:
	message("\"Thou art correct. Ethicality demands that thou must seek to preserve the life of others, as thou wouldst thine own.\" *\"No man's fate is certain while he yet lives. Thine actions can change the course of fate...\"");
	say();
	UI_push_answers();
	message("\"Question Two: If thou didst come upon a room of untold wealth within a structure where thou didst not know if the owner lived, would it be Ethical to take the money if thou wert in sore need? Or wouldst thou leave the money to possibly be used for evil ends?\"");
	say();
	UI_add_answer(["Take the Money", "Leave the Money"]);
labelFunc0464_009E:
	case "Take the Money" attend labelFunc0464_00B1:
	message("\"No matter what the need, seeker, Ethicality demands that thou not takest anything without permission. It is difficult to weigh these things at times, but thou shalt find it easier as time passes...\"");
	say();
	UI_pop_answers();
	goto labelFunc0464_0169;
labelFunc0464_00B1:
	case "Leave the Money" attend labelFunc0464_00D2:
	message("\"Thou art correct, seeker. Thou wouldst have no idea what the money was to be used for.\" *\"Ethicality demands that thou not takest anything without permission, no matter what the need. If thou wouldst stand in judgment of another, thou must be sure of thine Ethicality.\"");
	say();
	UI_push_answers();
	message("\"Finally, Question Three: If thou wert faced with the certainty of thy death at the hands of an unethical man, wouldst thou yield to him to save thy life? Or would Ethicality demand that thou shouldst continue the struggle unto death?\"");
	say();
	UI_add_answer(["Yield", "Continue"]);
labelFunc0464_00D2:
	case "Yield" attend labelFunc0464_00ED:
	message("\"No, seeker. If thou shouldst yield to one who is evil, even to save thy life, then thou art admitting the dominion of that evil.\"");
	say();
	message("\"Thy life doth have little value if thou dost abandon thy virtue. Ethicality demands that thou wilt oppose evil in all ways, even at the cost of thine own life.\"");
	say();
	UI_pop_answers();
	UI_pop_answers();
	goto labelFunc0464_0169;
labelFunc0464_00ED:
	case "Continue" attend labelFunc0464_0152:
	message("\"Thou art correct, and brave as well, seeker. Thou dost know that yielding to evil is to admit the dominion of that evil.\" *\"Ethicality demands that thou shouldst maintain thy virtue and oppose evil, even at the cost of thy life.\"");
	say();
	message("\"Thou hast answered well... Of all virtues, Ethicality is often the most subjective and tenuous.\" *\"Thou art worthy to begin the test...\"");
	say();
	UI_pop_answers();
	UI_pop_answers();
	UI_set_item_flag(0xFF9C, 0x001C);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x09AE, 0x036F, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	gflags[0x021A] = true;
	abort;
labelFunc0464_0152:
	case "Flee" attend labelFunc0464_0165:
	message("\"Thou art incorrect, seeker. While thou must never seek to throw thy life away, Ethicality demands that thou must seek to preserve the life of others as thou wouldst thine own.\" *\"No man's fate is certain while he yet lives. Thine actions can change the course of fate...\"");
	say();
	UI_pop_answers();
	goto labelFunc0464_0169;
labelFunc0464_0165:
	goto labelFunc0464_007A;
labelFunc0464_0168:
	endconv;
labelFunc0464_0169:
	message("\"I am sorry, seeker. It is necessary for thee to think more about these questions before undergoing the tests. Please return after further meditation.\"");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
	goto labelFunc0464_0286;
labelFunc0464_01F9:
	message("\"As thou wishest...\"");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
labelFunc0464_0286:
	if (!(gflags[0x021B] == true)) goto labelFunc0464_031E;
	message("\"It is a pleasure to see thee again, seeker. But there is nothing more that can be done here...\" *\"I have taught thee all I can. Thou must seek other virtues to embrace.\"");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
	goto labelFunc0464_0515;
labelFunc0464_031E:
	if (!(gflags[0x021A] && (gflags[0x0007] == false))) goto labelFunc0464_0515;
	if (!(UI_get_timer(0x0003) > 0x0017)) goto labelFunc0464_048D;
	message("\"Thou hast returned, seeker! I am pleased.\" *\"I hope that thou hast benefitted from thy meditations... Behold!\"");
	say();
	if (!(gflags[0x0217] == false)) goto labelFunc0464_0383;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x09AE, 0x036F, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	abort;
labelFunc0464_0383:
	if (!(gflags[0x0218] == false)) goto labelFunc0464_03CA;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0A28, 0x0326, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	abort;
labelFunc0464_03CA:
	if (!(gflags[0x0219] == false)) goto labelFunc0464_048A;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0ABF, 0x0384, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0002 = UI_create_new_object2(0x013E, [0x0ABE, 0x037A, 0x0000]);
	if (!var0002) goto labelFunc0464_0472;
	UI_set_schedule_type(var0002, 0x000F);
	UI_sprite_effect(0x001A, 0x0A22, 0x0373, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(var0002, [(byte)0x59, (byte)0x34]);
	var0003 = Func09A0(0x0000, 0x0001);
	if (!var0003) goto labelFunc0464_0472;
	var0001 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x013E], 0x0019);
labelFunc0464_0472:
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	abort;
labelFunc0464_048A:
	goto labelFunc0464_0515;
labelFunc0464_048D:
	message("\"Further meditation must be done before thou art ready to undertake the tests once more...\"");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
labelFunc0464_0515:
	gflags[0x0007] = false;
	if (!((!gflags[0x021C]) && ((!gflags[0x021D]) && (!gflags[0x021F])))) goto labelFunc0464_05C1;
	message("\"I am sorry, seeker. Thou hast failed to grasp the meaning of Ethicality in this.\" *\"Study and meditate further... Thou canst return tomorrow to try again, if thou wishest.\"");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	Func082F();
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	UI_set_timer(0x0003);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
labelFunc0464_05C1:
	if (!(gflags[0x021C] == true)) goto labelFunc0464_0625;
	message("\"Thou hast truly learned the Ethicality of saving others! Thou art worthy to continue the test... Behold!\"");
	say();
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, (byte)0x32]);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0A28, 0x0326, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	gflags[0x021C] = false;
	gflags[0x0217] = true;
	abort;
labelFunc0464_0625:
	if (!(gflags[0x021D] == true)) goto labelFunc0464_06F8;
	message("\"Thou hast learned to value Ethicality over money... Thou art worthy to continue the test! Behold!\"");
	say();
	gflags[0x021E] = true;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	Func082F();
	UI_move_object(0xFE9C, [0x0ABF, 0x0384, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0002 = UI_create_new_object2(0x013E, [0x0ABE, 0x037A, 0x0000]);
	if (!var0002) goto labelFunc0464_06D8;
	UI_set_schedule_type(var0002, 0x000F);
	UI_sprite_effect(0x001A, 0x0A22, 0x0373, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(var0002, [(byte)0x59, (byte)0x34]);
	var0003 = Func09A0(0x0000, 0x0001);
	if (!var0003) goto labelFunc0464_06D8;
	var0001 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x013E], 0x0019);
labelFunc0464_06D8:
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	gflags[0x021D] = false;
	gflags[0x0218] = true;
	abort;
labelFunc0464_06F8:
	if (!((gflags[0x021A] == true) && (gflags[0x021F] == true))) goto labelFunc0464_0790;
	message("\"Thou hast retained thy virtue! The very essence of Ethicality flows within thine heart!\" *\"I congratulate thee, seeker. Thou hast accomplished what many have failed to do.\"");
	say();
	gflags[0x021B] = true;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	gflags[0x0219] = true;
	gflags[0x021C] = true;
	gflags[0x021D] = true;
	gflags[0x021F] = true;
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
labelFunc0464_0790:
	return;
}


