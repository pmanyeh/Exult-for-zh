#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func09AD 0x9AD (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func08AB 0x8AB ()
{
	var var0000;

	if (!((Func0994() == 0x0003) && ((!UI_get_item_flag(0xFFC7, 0x0004)) && (gflags[0x0190] && UI_get_item_flag(0xFFCC, 0x001C))))) goto labelFunc08AB_0063;
	var0000 = UI_approach_avatar(0xFFC7, 0x0078, 0x0028);
	if (!var0000) goto labelFunc08AB_0063;
	Func09AD(0xFFC7);
	gflags[0x015D] = true;
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0439], 0x0032);
	abort;
labelFunc08AB_0063:
	if (!(gflags[0x018F] && (gflags[0x015D] && (gflags[0x0190] && ((((((((((((UI_get_item_flag(0xFFD2, 0x001C) + UI_get_item_flag(0xFFD1, 0x001C)) + UI_get_item_flag(0xFFD0, 0x001C)) + UI_get_item_flag(0xFFCF, 0x001C)) + UI_get_item_flag(0xFFCE, 0x001C)) + UI_get_item_flag(0xFFCD, 0x001C)) + UI_get_item_flag(0xFFCC, 0x001C)) + UI_get_item_flag(0xFFCB, 0x001C)) + UI_get_item_flag(0xFFC7, 0x001C)) + UI_get_item_flag(0xFFCA, 0x001C)) + UI_get_item_flag(0xFFC6, 0x001C)) + UI_get_item_flag(0xFFC3, 0x001C)) > 0x0004))))) goto labelFunc08AB_0125;
	UI_modify_schedule(0xFFCB, 0x0004, 0x000A, [0x040E, 0x06BF]);
	UI_modify_schedule(0xFFCB, 0x0005, 0x000A, [0x040E, 0x06BF]);
labelFunc08AB_0125:
	return;
}


