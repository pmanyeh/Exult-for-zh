#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func070B object#(0x70B) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc070B_0043;
	var0000 = UI_find_nearby(item, 0x034D, 0x0014, 0x0000);
	if (!var0000) goto labelFunc070B_0043;
	var0001 = Func0992(0x0001, "There hath not been a jail made yet that can hold me!", "I am glad to be out of there!", false);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x034D]);
labelFunc070B_0043:
	return;
}


