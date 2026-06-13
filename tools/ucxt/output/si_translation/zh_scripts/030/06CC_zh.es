#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);

void Func06CC object#(0x6CC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0003)) goto labelFunc06CC_0086;
	var0000 = UI_get_object_position(item);
	var0001 = UI_create_new_object2(0x02FB, var0000);
	if (!var0001) goto labelFunc06CC_0057;
	Func09AD(var0001);
	var0002 = UI_create_new_object(0x034A);
	if (!var0002) goto labelFunc06CC_0057;
	UI_set_item_frame(var0002, 0x000A);
	UI_set_item_flag(var0002, 0x000B);
	var0003 = UI_give_last_created(var0001);
labelFunc06CC_0057:
	var0004 = UI_get_item_quality(item);
	var0004 = (var0004 - 0x0001);
	if (!(var0004 > 0x0001)) goto labelFunc06CC_0081;
	var0003 = UI_set_item_quality(item, var0004);
	goto labelFunc06CC_0086;
labelFunc06CC_0081:
	UI_remove_item(item);
labelFunc06CC_0086:
	return;
}


