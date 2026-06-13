#game "serpentisle"
void Func075D object#(0x75D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_find_nearby(item, 0x031F, 0x000A, 0x0000);
	enum();
labelFunc075D_0012:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc075D_0056;
	if (!(UI_get_item_frame(var0003) == 0x0012)) goto labelFunc075D_0053;
	var0000 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x52, "@Thou, stop!@", (byte)0x27, 0x000F, (byte)0x52, "@Wouldst thou talk with me?@", (byte)0x27, 0x0014, (byte)0x52, "@Please...@"]);
labelFunc075D_0053:
	goto labelFunc075D_0012;
labelFunc075D_0056:
	return;
}


