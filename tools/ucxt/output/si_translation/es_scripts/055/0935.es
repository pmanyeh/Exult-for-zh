#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0935 0x935 (var var0000)
{
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

	UI_show_npc_face0(0xFEED, 0x0000);
	message("\"What weapon dost thou favor?\"");
	say();
	var0001 = ["nothing", "sword", "spear", "hammer", "morning star", "mace", "halberd", "battle axe"];
	var0002 = Func0957(var0001);
	if (!(var0002 == 0x0001)) goto labelFunc0935_0043;
	message("\"Indeed. If that's what thou wantest.... Best of luck to ya.\"");
	say();
labelFunc0935_0043:
	if (!(var0002 == 0x0002)) goto labelFunc0935_0073;
	if (!UI_is_pc_female()) goto labelFunc0935_005B;
	message("\"Take care with that blade. 'Tis sharp.\"");
	say();
	goto labelFunc0935_005F;
labelFunc0935_005B:
	message("\"Be thou careful with that blade.\"");
	say();
labelFunc0935_005F:
	var0003 = UI_create_new_object(0x0257);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_0073:
	if (!(var0002 == 0x0003)) goto labelFunc0935_0095;
	message("\"Only a coward fights from a distance, not that I be referring to thee or nothing.\"");
	say();
	var0003 = UI_create_new_object(0x0250);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_0095:
	if (!(var0002 == 0x0004)) goto labelFunc0935_00B7;
	message("\"Aaahh, a fine weapon a war hammer is. There's nothing quite like the feeling of whacking someone with a mallet.\"");
	say();
	var0003 = UI_create_new_object(0x0258);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_00B7:
	if (!(var0002 == 0x0005)) goto labelFunc0935_00D9;
	message("\"A respectable weapon that is. Leaves quite a mess, though.\"");
	say();
	var0003 = UI_create_new_object(0x0254);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_00D9:
	if (!(var0002 == 0x0006)) goto labelFunc0935_00FB;
	message("\"Squeamish at the sight of blood, are ya? The morning star is the true warrior's mace.\"");
	say();
	var0003 = UI_create_new_object(0x0293);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_00FB:
	if (!(var0002 == 0x0007)) goto labelFunc0935_011D;
	message("\"A fine enough weapon for a coward. I never did care for that fightin' at a distance and all. I thinks that the only way to victory is to close and hack, and I should know, seeing that I've seen many a battle in my time.\"");
	say();
	var0003 = UI_create_new_object(0x025B);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_011D:
	if (!(var0002 == 0x0008)) goto labelFunc0935_014D;
	message("\"Thou knowest thy weapons well.\"");
	say();
	message("\"Sweet is the sight of a battle axe swinging in the pitch of battle.\"");
	say();
	message("\"Lovely is the sound of bone crunching under its mighty arc.\"");
	say();
	var0003 = UI_create_new_object(0x0259);
	if (!var0003) goto labelFunc0935_014D;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_014D:
	var0003 = UI_create_new_object(0x0239);
	if (!var0003) goto labelFunc0935_0167;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_0167:
	var0003 = UI_create_new_object(0x024B);
	if (!var0003) goto labelFunc0935_0181;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_0181:
	var0003 = UI_create_new_object(0x03EC);
	if (!var0003) goto labelFunc0935_019B;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_019B:
	var0003 = UI_create_new_object(0x0243);
	if (!var0003) goto labelFunc0935_01B5;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_01B5:
	message("\"All right. If thou'lt follow me, then.\"");
	say();
	UI_remove_npc_face0();
	UI_play_music(0x0022, 0x0000);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	var0004 = UI_find_nearby(0xFE9C, 0x00E4, 0x0023, 0x0000);
	enum();
labelFunc0935_01E9:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc0935_0208;
	if (!(UI_get_npc_id(var0007) == 0x0009)) goto labelFunc0935_0205;
	goto labelFunc0935_0211;
labelFunc0935_0205:
	goto labelFunc0935_01E9;
labelFunc0935_0208:
	Func092F(var0000, 0x0014);
labelFunc0935_0211:
	UI_clear_item_say(var0007);
	Func097F(var0007, "@Follow me...@", 0x000F);
	var0008 = UI_find_nearby(var0000, 0x036F, 0x001E, 0x0000);
	enum();
labelFunc0935_0238:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc0935_0276;
	var000C = UI_get_object_position(var000B);
	if (!((var000C[0x0001] == 0x03F4) && ((var000C[0x0002] == 0x0A7F) && (var000C[0x0003] == 0x0006)))) goto labelFunc0935_0273;
	goto labelFunc0935_027F;
labelFunc0935_0273:
	goto labelFunc0935_0238;
labelFunc0935_0276:
	Func092F(var0000, 0x0002);
labelFunc0935_027F:
	var000D = [0xFFFE, 0xFFFD, 0xFFFF];
	var000E = [0x0000, 0x0000, 0x0000];
	UI_si_path_run_usecode(var0007, [(var000C[0x0001] - 0x0002), (var000C[0x0002] - 0x0000), var000C[0x0003]], 0x000B, var0000, 0x07FD, true);
	return;
}


