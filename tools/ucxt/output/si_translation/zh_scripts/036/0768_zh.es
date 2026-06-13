#game "serpentisle"
// externs
extern void Func07D2 object#(0x7D2) ();
extern void Func07D1 object#(0x7D1) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0768 object#(0x768) ()
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
	var var0012;

	if (!(event == 0x0003)) goto labelFunc0768_0201;
	gflags[0x02FC] = true;
	var0000 = [0x0A45, 0x0A27, 0x0A45, 0x0A24, 0x0A47, 0x0A22];
	var0001 = [0x00F0, 0x00EF, 0x00EE];
	var0002 = 0x0001;
labelFunc0768_0039:
	if (!(var0002 <= 0x0003)) goto labelFunc0768_01DD;
	var0003 = (var0002 * 0x0002);
	var0004 = UI_create_new_object2(0x0299, [var0000[(var0003 - 0x0001)], var0000[var0003], 0x0000]);
	if (!var0004) goto labelFunc0768_01DA;
	UI_set_schedule_type(var0004, 0x000F);
	var0005 = UI_add_cont_items(var0004, 0x0001, 0x0281, var0001[var0002], var0003, false);
	var0002 = (var0002 + 0x0001);
	UI_sprite_effect(0x001A, var0000[(var0003 - 0x0001)], var0000[var0003], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var0004->Func07D2();
	UI_set_npc_id(var0004, var0002);
	UI_set_alignment(var0004, 0x0002);
	UI_clear_item_flag(var0004, 0x0012);
	UI_clear_item_flag(var0004, 0x001D);
	UI_set_npc_id(var0004, (var0002 + 0x000A));
	var0006 = UI_get_npc_prop(var0004, 0x0000);
	var0007 = (0x000B - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0000, var0007);
	var0006 = UI_get_npc_prop(var0004, 0x0001);
	var0007 = (0x000D - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0001, var0007);
	var0006 = UI_get_npc_prop(var0004, 0x0002);
	var0007 = (0x0014 - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0002, var0007);
	var0006 = UI_get_npc_prop(var0004, 0x0004);
	var0007 = (0x000C - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0004, var0007);
	var0006 = UI_get_npc_prop(var0004, 0x0003);
	var0007 = (0x000B - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0003, var0007);
	if (!(var0002 == 0x0003)) goto labelFunc0768_01DA;
	var0004->Func07D1();
labelFunc0768_01DA:
	goto labelFunc0768_0039;
labelFunc0768_01DD:
	var0008 = Func09A0(0x0000, 0x0001);
	var0005 = UI_delayed_execute_usecode_array(var0008, [(byte)0x23, (byte)0x55, 0x0768], 0x000E);
	abort;
labelFunc0768_0201:
	if (!(event == 0x0002)) goto labelFunc0768_0375;
	var0009 = UI_is_pc_female();
	var000A = "he";
	var000B = "him";
	var000C = "his";
	if (!var0009) goto labelFunc0768_023A;
	var000A = "she";
	var000B = "her";
	var000C = "her";
labelFunc0768_023A:
	UI_show_npc_face0(0xFEC6, 0x0000);
	message("\"Not so fast, deary! Ye don't think that ye kin just dance outta here with that little seed so easy, now do ye?\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"And who will stop me, hag? Thou?\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Hag, now is it?! Well, we shall see about that, deary!\"");
	say();
	UI_show_npc_face0(0xFEC8, 0x0000);
	message("\"I don't know about thee, Drusilla, but I think that lout would do well as a candlestick. What thinkest thou?\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face1(0xFEC6, 0x0000);
	message("\"With such a bright wit, I think it would be fitting indeed!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Bright wit?! I would have said half-wit, trying to keep this flawed world alive!");
	say();
	message("\"One would think that a pawn of prophecy would be... I don't know, more intelligent!\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face1(0xFEC7, 0x0000);
	message("\"Oh, don't be so hard on ");
	message(var000B);
	message("! It's not ");
	message(var000C);
	message(" fault that ");
	message(var000A);
	message(" doesn't have the wisdom of the Guardian to guide ");
	message(var000B);
	message("...");
	say();
	message("\"Besides, I think ");
	message(var000A);
	message(" is rather cute...\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Hsssst! Solaria! Thou shouldst not speak of the Guide to outsiders! Now thou hast sealed ");
	message(var000C);
	message(" fate! Wilt thou never learn to think beyond thy bed?!\"");
	say();
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	var000D = UI_find_nearby(0xFE9C, 0x0299, 0x001E, 0x0000);
	var000E = ["@Oh dear...@", "@Fool!@", "@Take that!@"];
	var000F = 0x0001;
	enum();
labelFunc0768_0306:
	for (var0012 in var000D with var0010 to var0011) attend labelFunc0768_035C;
	Func097F(var0012, var000E[var000F], (var000F * 0x0004));
	if (!(var000F == 0x0003)) goto labelFunc0768_034F;
	var0005 = UI_delayed_execute_usecode_array(var0012, [(byte)0x23, 0x07D2, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x58, 0x0043], 0x000A);
labelFunc0768_034F:
	var000F = (var000F + 0x0001);
	goto labelFunc0768_0306;
labelFunc0768_035C:
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0632], 0x0014);
	gflags[0x0007] = false;
labelFunc0768_0375:
	return;
}


