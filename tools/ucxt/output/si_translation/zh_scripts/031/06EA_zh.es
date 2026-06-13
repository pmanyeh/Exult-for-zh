#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);

void Func06EA object#(0x6EA) ()
{
	var var0000;

	if (!(event == 0x0003)) goto labelFunc06EA_00B1;
	if (!(!gflags[0x00D5])) goto labelFunc06EA_0021;
	UI_show_npc_face0(0xFEE0, 0x0000);
	message("\"I had almost tired of waiting for thee, Avatar. Thou'rt some hero... it\ttook thee long enough.\"");
	say();
	UI_remove_npc_face0();
labelFunc06EA_0021:
	var0000 = [0xFEFA, 0xFEF9, 0xFEF8];
	if (!(!gflags[0x00D5])) goto labelFunc06EA_005B;
	UI_set_item_flag(0xFEFA, 0x001D);
	UI_set_alignment(0xFEFA, 0x0002);
	UI_set_schedule_type(0xFEFA, 0x0000);
	Func09AD(0xFEFA);
labelFunc06EA_005B:
	if (!(!gflags[0x00D3])) goto labelFunc06EA_0086;
	UI_set_item_flag(0xFEF9, 0x001D);
	UI_set_alignment(0xFEF9, 0x0002);
	UI_set_schedule_type(0xFEF9, 0x0000);
	Func09AD(0xFEF9);
labelFunc06EA_0086:
	if (!(!gflags[0x00D4])) goto labelFunc06EA_00B1;
	UI_set_item_flag(0xFEF8, 0x001D);
	UI_set_alignment(0xFEF8, 0x0002);
	UI_set_schedule_type(0xFEF8, 0x0000);
	Func09AD(0xFEF8);
labelFunc06EA_00B1:
	return;
}


