#game "serpentisle"
void Func0972 0x972 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;

	var0001 = false;
	var0002 = UI_get_item_shape(var0000);
	var0003 = UI_get_item_frame(var0000);
	var0004 = UI_get_item_quality(var0000);
	var0005 = UI_get_party_list();
	enum();
labelFunc0972_002A:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0972_007E;
	var0009 = UI_get_cont_items(var0008, var0002, var0004, var0003);
	enum();
labelFunc0972_0049:
	for (var000C in var0009 with var000A to var000B) attend labelFunc0972_007B;
	if (!(var000C == var0000)) goto labelFunc0972_0078;
	var0001 = var0008;
	var000D = UI_give_last_created(var0001);
	var000D = UI_set_last_created(var0000);
labelFunc0972_0078:
	goto labelFunc0972_0049;
labelFunc0972_007B:
	goto labelFunc0972_002A;
labelFunc0972_007E:
	if (!(var0001 == false)) goto labelFunc0972_00A4;
	var0001 = UI_get_object_position(var0000);
	var000D = UI_update_last_created(var0001);
	var000D = UI_set_last_created(var0000);
labelFunc0972_00A4:
	return;
}


