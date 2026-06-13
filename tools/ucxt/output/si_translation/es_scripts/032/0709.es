#game "serpentisle"
// externs
extern void Func0922 0x922 (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0709 object#(0x709) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0001)) goto labelFunc0709_004B;
	var0001 = UI_find_nearby(item, 0x0106, 0x0002, 0x0000);
	if (!var0001) goto labelFunc0709_0044;
	var0002 = UI_get_item_frame(var0001);
	if (!(var0002 == 0x0003)) goto labelFunc0709_0041;
	gflags[0x023E] = true;
labelFunc0709_0041:
	goto labelFunc0709_0048;
labelFunc0709_0044:
	gflags[0x023E] = false;
labelFunc0709_0048:
	goto labelFunc0709_00C5;
labelFunc0709_004B:
	var0003 = UI_find_nearby(item, 0x0392, 0x0002, 0x0000);
	if (!var0003) goto labelFunc0709_007A;
	var0000 = UI_get_item_quality(var0003);
	if (!(var0000 == 0x0001)) goto labelFunc0709_007A;
	gflags[0x0242] = true;
labelFunc0709_007A:
	var0004 = UI_find_nearby(item, 0x01BD, 0x0002, 0x0000);
	if (!var0004) goto labelFunc0709_00C5;
	var0002 = UI_get_item_frame(var0004);
	if (!(var0002 == 0x0005)) goto labelFunc0709_00A9;
	gflags[0x0241] = true;
labelFunc0709_00A9:
	if (!(var0002 == 0x0006)) goto labelFunc0709_00B7;
	gflags[0x0240] = true;
labelFunc0709_00B7:
	if (!(var0002 == 0x0007)) goto labelFunc0709_00C5;
	gflags[0x023F] = true;
labelFunc0709_00C5:
	if (!(gflags[0x023E] && (gflags[0x0242] && (gflags[0x0240] && (gflags[0x0241] && gflags[0x023F]))))) goto labelFunc0709_010A;
	Func0922(0x0019);
	UI_show_npc_face0(0xFF29, 0x0000);
	message("\"I am Xenka. Thou must take this Serpent Sword and go to Sunrise Isle.\"");
	say();
	var0005 = Func099B(0xFE9C, 0x0001, 0x02C6, 0x0000, 0x0000, false, true);
	UI_remove_npc_face0();
labelFunc0709_010A:
	return;
}


