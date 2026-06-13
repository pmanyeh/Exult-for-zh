#game "blackgate"
// externs
extern void Func08FA 0x8FA (var var0000);
extern void Func0925 0x925 (var var0000);
extern var Func0937 0x937 (var var0000);

void Func0813 0x813 (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	var0003 = UI_click_on_item();
	var0004 = UI_get_party_list();
	if (!((var0003 in var0004) && ((!UI_get_item_flag(var0003, 0x0001)) && ((!UI_get_item_flag(var0003, 0x0007)) && (!UI_get_item_flag(var0003, 0x0004)))))) goto labelFunc0813_01C0;
	var0005 = UI_get_npc_prop(var0003, 0x0009);
	var0006 = (var0005 + var0001);
	if (!(var0005 > 0x0018)) goto labelFunc0813_0066;
	var0007 = "@不，謝謝你。@";
	goto labelFunc0813_0192;
labelFunc0813_0066:
	Func08FA(var0000);
	UI_play_sound_effect2(var0002, item);
	Func0925(var0000);
	var0008 = UI_die_roll(0x0001, 0x000A);
	if (!(var0005 <= 0x0004)) goto labelFunc0813_0129;
	if (!(var0006 <= 0x0004)) goto labelFunc0813_00B4;
	var0007 = "@還要！@";
	if (!(var0008 < 0x0006)) goto labelFunc0813_00B1;
	var0007 = "@我還要更多！@";
labelFunc0813_00B1:
	goto labelFunc0813_0192;
labelFunc0813_00B4:
	if (!(var0006 < 0x000A)) goto labelFunc0813_00E6;
	var0007 = "@我還是很餓。@";
	if (!(var0008 < 0x0006)) goto labelFunc0813_00E3;
	if (!(!(var0003 == UI_get_npc_object(0xFE9C)))) goto labelFunc0813_00E3;
	var0007 = "@我可以再來一點嗎？@";
labelFunc0813_00E3:
	goto labelFunc0813_0192;
labelFunc0813_00E6:
	if (!(var0006 < 0x0014)) goto labelFunc0813_0110;
	if (!(UI_get_item_shape(var0000) == 0x034A)) goto labelFunc0813_0107;
	var0007 = "@美味的大蒜！@";
	goto labelFunc0813_010D;
labelFunc0813_0107:
	var0007 = "@啊，好多了。@";
labelFunc0813_010D:
	goto labelFunc0813_0192;
labelFunc0813_0110:
	var0007 = "@真合胃口！@";
	if (!(var0008 < 0x0006)) goto labelFunc0813_0126;
	var0007 = "@打嗝@";
labelFunc0813_0126:
	goto labelFunc0813_0192;
labelFunc0813_0129:
	if (!(var0005 < 0x0014)) goto labelFunc0813_0168;
	if (!(UI_get_item_shape(var0000) == 0x034A)) goto labelFunc0813_0147;
	var0007 = "@美味的大蒜！@";
labelFunc0813_0147:
	var0007 = "@啊，非常美味。@";
	if (!((var0006 > 0x0018) && (var0008 < 0x0003))) goto labelFunc0813_0165;
	var0007 = "@打嗝@";
labelFunc0813_0165:
	goto labelFunc0813_0192;
labelFunc0813_0168:
	if (!(gflags[0x009B] && (var0008 < 0x0002))) goto labelFunc0813_017F;
	var0007 = "@我很快就會變胖了。@";
	goto labelFunc0813_0192;
labelFunc0813_017F:
	if (!(var0008 < 0x0005)) goto labelFunc0813_0192;
	var0007 = "@我很快就會變胖了。@";
	goto labelFunc0813_0192;
labelFunc0813_0192:
	if (!(!(var0007 == ""))) goto labelFunc0813_01B0;
	if (!Func0937(var0003)) goto labelFunc0813_01B0;
	UI_item_say(var0003, var0007);
labelFunc0813_01B0:
	var0009 = UI_set_npc_prop(var0003, 0x0009, var0001);
labelFunc0813_01C0:
	return;
}


