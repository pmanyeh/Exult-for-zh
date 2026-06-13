#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);
extern void Func0949 0x949 (var var0000);
extern var Func0983 0x983 (var var0000);
extern void Func0971 0x971 (var var0000);

void Func033B shape#(0x33B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc033B_00F1;
	var0000 = UI_click_on_item();
	if (!UI_is_npc(var0000)) goto labelFunc033B_00EB;
	var0001 = UI_get_npc_prop(var0000, 0x0000);
	var0002 = UI_get_npc_prop(var0000, 0x0003);
	if (!(var0002 == var0001)) goto labelFunc033B_0046;
	Func094A("@It doth not appear that a bandage is needed.@");
	goto labelFunc033B_00E8;
labelFunc033B_0046:
	if (!(UI_get_npc_number(var0000) == 0xFE9C)) goto labelFunc033B_005D;
	Func0949("@Much better.@");
	goto labelFunc033B_00AF;
labelFunc033B_005D:
	if (!Func0983(var0000)) goto labelFunc033B_00AF;
	var0003 = UI_die_roll(0x0001, 0x0003);
	if (!(var0003 == 0x0001)) goto labelFunc033B_0087;
	UI_item_say(var0000, "@Ah, much better!@");
labelFunc033B_0087:
	if (!(var0003 == 0x0002)) goto labelFunc033B_009B;
	UI_item_say(var0000, "@Thank thee!@");
labelFunc033B_009B:
	if (!(var0003 == 0x0003)) goto labelFunc033B_00AF;
	UI_item_say(var0000, "@That looks better.@");
labelFunc033B_00AF:
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!((var0002 + var0003) > var0001)) goto labelFunc033B_00D4;
	var0003 = (var0001 - var0002);
labelFunc033B_00D4:
	var0003 = UI_set_npc_prop(var0000, 0x0003, var0003);
	Func0971(item);
labelFunc033B_00E8:
	goto labelFunc033B_00F1;
labelFunc033B_00EB:
	Func0949("@Do not soil the bandages.@");
labelFunc033B_00F1:
	return;
}


