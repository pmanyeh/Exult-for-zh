#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0645 object#(0x645) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0645_00A8;
	UI_halt_scheduled(item);
	if (!(gflags[0x003D] == false)) goto labelFunc0645_0018;
	goto labelFunc0645_008C;
labelFunc0645_0018:
	UI_item_say(item, "@Kal Lor@");
	if (!Func0906()) goto labelFunc0645_008C;
	gflags[0x0027] = true;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0040, (byte)0x6F, (byte)0x61, (byte)0x6C, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x55, 0x0645]);
	var0001 = UI_get_party_list();
	enum();
labelFunc0645_0053:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0645_0089;
	UI_clear_item_flag(var0004, 0x0008);
	UI_clear_item_flag(var0004, 0x0003);
	UI_clear_item_flag(var0004, 0x0002);
	UI_clear_item_flag(var0004, 0x0007);
	goto labelFunc0645_0053;
labelFunc0645_0089:
	goto labelFunc0645_00A8;
labelFunc0645_008C:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x61, (byte)0x6C, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x55, 0x0606]);
labelFunc0645_00A8:
	if (!(event == 0x0002)) goto labelFunc0645_00C9;
	var0005 = [0x03A8, 0x047A, 0x0000];
	UI_move_object(0xFE9B, var0005);
labelFunc0645_00C9:
	return;
}


