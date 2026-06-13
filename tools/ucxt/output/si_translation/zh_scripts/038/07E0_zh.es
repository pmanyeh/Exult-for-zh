#game "serpentisle"
void Func07E0 object#(0x7E0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_find_nearby(item, 0x0113, 0x0008, 0x0010);
	var0001 = 0x0000;
	enum();
labelFunc07E0_0018:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc07E0_003E;
	if (!(UI_get_item_frame(var0004) == 0x0006)) goto labelFunc07E0_003B;
	var0001 = UI_get_item_quality(var0004);
labelFunc07E0_003B:
	goto labelFunc07E0_0018;
labelFunc07E0_003E:
	if (!var0001) goto labelFunc07E0_0307;
	var0005 = false;
	if (!(var0001 <= 0x0012)) goto labelFunc07E0_02CB;
	if (!(var0001 == 0x0001)) goto labelFunc07E0_0075;
	var0005 = [0x068F, 0x010F, 0x0006];
	UI_set_item_flag(0xFE9C, 0x0025);
labelFunc07E0_0075:
	if (!(var0001 == 0x0002)) goto labelFunc07E0_0098;
	var0005 = [0x0597, 0x03BF, 0x0001];
	UI_set_item_flag(0xFE9C, 0x0025);
labelFunc07E0_0098:
	if (!(var0001 == 0x0003)) goto labelFunc07E0_00BB;
	var0005 = [0x04CB, 0x038B, 0x0001];
	UI_set_item_flag(0xFE9C, 0x0025);
labelFunc07E0_00BB:
	if (!(var0001 == 0x0004)) goto labelFunc07E0_00DE;
	var0005 = [0x0850, 0x0298, 0x0003];
	UI_set_item_flag(0xFE9C, 0x0025);
labelFunc07E0_00DE:
	if (!(var0001 == 0x0005)) goto labelFunc07E0_0101;
	UI_set_item_flag(0xFE9C, 0x0025);
	var0005 = [0x06F8, 0x0288, 0x0001];
labelFunc07E0_0101:
	if (!(var0001 == 0x0006)) goto labelFunc07E0_0124;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0005 = [0x0AB7, 0x0477, 0x0001];
labelFunc07E0_0124:
	if (!(var0001 == 0x0007)) goto labelFunc07E0_0147;
	UI_set_item_flag(0xFE9C, 0x0025);
	var0005 = [0x00E3, 0x0348, 0x0001];
labelFunc07E0_0147:
	if (!(var0001 == 0x0008)) goto labelFunc07E0_016A;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0005 = [0x0437, 0x0617, 0x0001];
labelFunc07E0_016A:
	if (!(var0001 == 0x0009)) goto labelFunc07E0_018D;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0005 = [0x06B0, 0x0498, 0x0001];
labelFunc07E0_018D:
	if (!(var0001 == 0x000A)) goto labelFunc07E0_01B0;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0005 = [0x018F, 0x060F, 0x0001];
labelFunc07E0_01B0:
	if (!(var0001 == 0x000B)) goto labelFunc07E0_01D3;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0005 = [0x0B56, 0x0664, 0x0001];
labelFunc07E0_01D3:
	if (!(var0001 == 0x000C)) goto labelFunc07E0_01F6;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0005 = [0x07F5, 0x0568, 0x0001];
labelFunc07E0_01F6:
	if (!(var0001 == 0x000D)) goto labelFunc07E0_0219;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0005 = [0x0998, 0x0827, 0x0001];
labelFunc07E0_0219:
	if (!(var0001 == 0x000E)) goto labelFunc07E0_023C;
	UI_set_item_flag(0xFE9C, 0x0025);
	var0005 = [0x0928, 0x0137, 0x0001];
labelFunc07E0_023C:
	if (!(var0001 == 0x000F)) goto labelFunc07E0_025F;
	UI_set_item_flag(0xFE9C, 0x0025);
	var0005 = [0x0627, 0x01F5, 0x0001];
labelFunc07E0_025F:
	if (!(var0001 == 0x0010)) goto labelFunc07E0_0282;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0005 = [0x02CF, 0x0A31, 0x0001];
labelFunc07E0_0282:
	if (!(var0001 == 0x0011)) goto labelFunc07E0_02A5;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0005 = [0x0A4F, 0x03BB, 0x0001];
labelFunc07E0_02A5:
	if (!(var0001 == 0x0012)) goto labelFunc07E0_02C8;
	UI_set_item_flag(0xFE9C, 0x0025);
	var0005 = [0x0632, 0x0349, 0x0001];
labelFunc07E0_02C8:
	goto labelFunc07E0_02E4;
labelFunc07E0_02CB:
	UI_set_item_flag(0xFE9C, 0x0025);
	var0005 = [0x0AF8, 0x01F8, 0x0001];
labelFunc07E0_02E4:
	UI_move_object(0xFE9B, var0005);
	gflags[0x026F] = false;
	var0006 = UI_execute_usecode_array(item, [(byte)0x27, 0x0004, (byte)0x55, 0x07DE]);
labelFunc07E0_0307:
	return;
}


