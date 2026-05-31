#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);

void Func0337 shape#(0x337) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0337_011E;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 < 0x0002)) goto labelFunc0337_0023;
	Func08FE("@Finger-painting again?@");
	goto labelFunc0337_011E;
labelFunc0337_0023:
	var0001 = UI_click_on_item();
	var0002 = UI_get_item_shape(var0001);
	if (!(var0002 == 0x0337)) goto labelFunc0337_0117;
	if (!(UI_get_item_frame(var0001) < 0x0002)) goto labelFunc0337_0114;
	var0001 = UI_click_on_item();
	if (!(UI_get_item_shape(var0001) == 0x0345)) goto labelFunc0337_00F5;
	var0003 = (UI_get_item_frame(var0001) % 0x0008);
	var0004 = UI_die_roll(0x0001, 0x000A);
	if (!(var0004 == 0x0001)) goto labelFunc0337_008C;
	var0005 = "@Looks great!@";
labelFunc0337_008C:
	if (!(var0004 == 0x0002)) goto labelFunc0337_009C;
	var0005 = "@Do not quit your day job.@";
labelFunc0337_009C:
	if (!(var0004 == 0x0003)) goto labelFunc0337_00B0;
	var0005 = ("@I can barely" & "see the numbers.@");
labelFunc0337_00B0:
	if (!(var0004 == 0x0004)) goto labelFunc0337_00C0;
	var0005 = "@Stay within the lines.@";
labelFunc0337_00C0:
	if (!(var0004 == 0x0005)) goto labelFunc0337_00D0;
	var0005 = "@What is it?@";
labelFunc0337_00D0:
	Func08FE(var0005);
	if (!(var0003 < 0x0007)) goto labelFunc0337_00F2;
	UI_set_item_frame(var0001, (UI_get_item_frame(var0001) + 0x0001));
labelFunc0337_00F2:
	goto labelFunc0337_0114;
labelFunc0337_00F5:
	if (!UI_is_npc(var0001)) goto labelFunc0337_0108;
	Func08FE("@Tattooing?@");
	goto labelFunc0337_0114;
labelFunc0337_0108:
	Func08FE(["@The stain will", "never come out.@"]);
labelFunc0337_0114:
	goto labelFunc0337_011E;
labelFunc0337_0117:
	Func08FE("@Use pigments!@");
	return;
labelFunc0337_011E:
	return;
}


