#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0299 shape#(0x299) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0299_0164;
	var0000 = 0x0000;
	var0001 = UI_get_npc_id(item);
	if (!((var0001 == 0x0001) || (var0001 == 0x000B))) goto labelFunc0299_007C;
	var0000 = 0x0619;
	if (!(var0001 == 0x000B)) goto labelFunc0299_003C;
	var0002 = true;
labelFunc0299_003C:
	if (!(!var0002)) goto labelFunc0299_0050;
	UI_item_say(0xFE9C, "@Hail, old woman!@");
	goto labelFunc0299_005A;
labelFunc0299_0050:
	UI_item_say(0xFE9C, "@Hail, Drusilla!@");
labelFunc0299_005A:
	item->Func07D1();
	if (!(!var0002)) goto labelFunc0299_0072;
	Func097F(item, "@Old, is it?!@", 0x0002);
	goto labelFunc0299_007C;
labelFunc0299_0072:
	Func097F(item, "@Hail yerself!@", 0x0002);
labelFunc0299_007C:
	if (!((var0001 == 0x0002) || (var0001 == 0x000C))) goto labelFunc0299_00E2;
	var0000 = 0x061A;
	if (!(var0001 == 0x000C)) goto labelFunc0299_00A2;
	var0002 = true;
labelFunc0299_00A2:
	if (!(!var0002)) goto labelFunc0299_00B6;
	UI_item_say(0xFE9C, "@Greetings, strange one.@");
	goto labelFunc0299_00C0;
labelFunc0299_00B6:
	UI_item_say(0xFE9C, "@Greetings, Rieya.@");
labelFunc0299_00C0:
	item->Func07D1();
	if (!(!var0002)) goto labelFunc0299_00D8;
	Func097F(item, "@Me, strange?!@", 0x0002);
	goto labelFunc0299_00E2;
labelFunc0299_00D8:
	Func097F(item, "@Back again?@", 0x0002);
labelFunc0299_00E2:
	if (!((var0001 == 0x0003) || (var0001 == 0x000D))) goto labelFunc0299_0148;
	var0000 = 0x061B;
	if (!(var0001 == 0x000D)) goto labelFunc0299_0108;
	var0002 = true;
labelFunc0299_0108:
	if (!(!var0002)) goto labelFunc0299_011C;
	UI_item_say(0xFE9C, "@Hail, lady!@");
	goto labelFunc0299_0126;
labelFunc0299_011C:
	UI_item_say(0xFE9C, "@Hail, Solaria!@");
labelFunc0299_0126:
	item->Func07D1();
	if (!(!var0002)) goto labelFunc0299_013E;
	Func097F(item, "@Me, a lady?!@", 0x0002);
	goto labelFunc0299_0148;
labelFunc0299_013E:
	Func097F(item, "@Hail to thee!@", 0x0002);
labelFunc0299_0148:
	if (!var0000) goto labelFunc0299_0163;
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, var0000], 0x000A);
labelFunc0299_0163:
	abort;
labelFunc0299_0164:
	if (!(event == 0x001D)) goto labelFunc0299_019F;
	var0004 = UI_get_object_position(item);
	UI_remove_item(item);
	UI_play_sound_effect(0x0060);
	UI_sprite_effect(0x001A, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0299_019F:
	return;
}


