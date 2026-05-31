#game "blackgate"
// externs
extern var Func093E 0x93E ();
extern var Func08F9 0x8F9 (var var0000, var var0001, var var0002);
extern var Func090A 0x90A ();
extern var Func084B 0x84B (var var0000);
extern void Func093F 0x93F (var var0000, var var0001);
extern var Func081B 0x81B (var var0000);
extern var Func081F 0x81F (var var0000);
extern void Func084A 0x84A ();

void Func0625 object#(0x625) ()
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
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;

	if (!(event == 0x0001)) goto labelFunc0625_01E4;
	var0000 = UI_get_item_shape(item);
	var0001 = [0x017B, 0x0111];
	var0002 = [0x01B8, 0x0133];
	var0003 = UI_get_object_position(0xFE9C);
	if (!Func093E()) goto labelFunc0625_0052;
	UI_show_npc_face(0xFEFD, 0x0000);
	message("You see an irate guard.~~Years of indoctrination have instilled in him an overly developed sense of discipline~~and a zealous devotion to the maintainance of order. All of this zeal is now directed against you.~~ \"Such behavior will never be tolerated inside the sanctuary of Trinsic's walls.~~Thy red cloak and blonde curls show only that thou art a vile imposter and not a true Avatar.~~To the Death!\"");
	say();
	UI_remove_npc_face(0xFEFD);
	UI_attack_avatar();
	return;
labelFunc0625_0052:
	if (!Func08F9(var0003, var0001, var0002)) goto labelFunc0625_007B;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("The guard glares at you. \"Unrepentant scoundrel!\"");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_attack_avatar();
	return;
labelFunc0625_007B:
	UI_show_npc_face(0xFEFE, 0x0000);
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!((UI_die_roll(0x0001, 0x0002) == 0x0001) && var0004)) goto labelFunc0625_019F;
	message("You see an angry guard. \"Cease and desist immediately!.~~Dost thou wish to avoid the unpleasantries of a lengthy trial?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0625_019C;
	message("\"What is your liberty worth?\"");
	say();
	if (!Func084B(var0004)) goto labelFunc0625_00D0;
	goto labelFunc0625_00DD;
	goto labelFunc0625_0199;
labelFunc0625_00D0:
	message("The guard looks unimpressed by your paltry offer. \"How about a bit more? Our jail is populated by some unsavory characters.\"");
	say();
	if (!Func084B(var0004)) goto labelFunc0625_0196;
labelFunc0625_00DD:
	if (!UI_is_pc_female()) goto labelFunc0625_00ED;
	var0006 = "woman";
	goto labelFunc0625_00F3;
labelFunc0625_00ED:
	var0006 = "man";
labelFunc0625_00F3:
	var0007 = [0x018A, 0x02D0, 0x0326, 0x03B2];
	var0008 = [];
	enum();
labelFunc0625_010C:
	for (var000B in var0007 with var0009 to var000A) attend labelFunc0625_012F;
	var0008 = (var0008 & UI_find_nearby(item, var000B, 0x001E, 0x0000));
	goto labelFunc0625_010C;
labelFunc0625_012F:
	enum();
labelFunc0625_0130:
	for (var000E in var0008 with var000C to var000D) attend labelFunc0625_0148;
	UI_set_schedule_type(var000E, 0x000C);
	goto labelFunc0625_0130;
labelFunc0625_0148:
	var000F = UI_find_nearby(item, 0xFE99, 0x001E, 0x0008);
	enum();
labelFunc0625_015A:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc0625_0180;
	if (!(UI_get_schedule_type(var0012) == 0x0000)) goto labelFunc0625_017D;
	UI_set_schedule_type(var0012, 0x000C);
labelFunc0625_017D:
	goto labelFunc0625_015A;
labelFunc0625_0180:
	message("The guard winks. \"I am pleased to see that thou art a thinking ");
	message(var0006);
	message(". I will take care of this disturbance.\"");
	say();
	UI_play_music(0x00FF, item);
	abort;
	goto labelFunc0625_0199;
labelFunc0625_0196:
	goto labelFunc0625_01DB;
labelFunc0625_0199:
	goto labelFunc0625_019F;
labelFunc0625_019C:
	goto labelFunc0625_01DB;
labelFunc0625_019F:
	message("You see an angry guard. \"Cease and desist immediately!.~~Wilt thou come quietly?\"");
	say();
	if (!Func090A()) goto labelFunc0625_01DB;
	message("\"Very well. Thou shalt remain in prison until we see fit to release thee.\"");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_halt_scheduled(0xFE9C);
	var0013 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x55, 0x0625, (byte)0x6E, (byte)0x27, 0x0005], 0x0002);
	abort;
	goto labelFunc0625_01E4;
labelFunc0625_01DB:
	message("\"An unfortunate decision, my friend.\"");
	say();
	UI_attack_avatar();
	return;
labelFunc0625_01E4:
	if (!(event == 0x0002)) goto labelFunc0625_028A;
	var0014 = UI_get_party_list();
	enum();
labelFunc0625_01F4:
	for (var0017 in var0014 with var0015 to var0016) attend labelFunc0625_0215;
	Func093F(var0017, 0x001F);
	UI_set_item_frame(var0017, 0x0000);
	goto labelFunc0625_01F4;
labelFunc0625_0215:
	var0018 = [0x01A4, 0x0127, 0x0000];
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_music(0x00FF, item);
	UI_move_object(0xFE9B, var0018);
	var0019 = UI_find_nearby(0xFE9C, 0x033C, 0x000A, 0x0000);
	if (!(var0019 && (Func081B(var0019) == 0x0001))) goto labelFunc0625_0270;
	var0013 = Func081F(var0019);
labelFunc0625_0270:
	Func084A();
	var0013 = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x0001, (byte)0x55, 0x063C]);
labelFunc0625_028A:
	return;
}


