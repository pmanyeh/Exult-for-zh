#game "serpentisle"
// externs
extern void Func060F object#(0x60F) ();

void Func0715 object#(0x715) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 != 0x00E0)) goto labelFunc0715_003A;
	var0001 = UI_find_nearby(0xFE9C, 0x01E9, 0xFFFF, 0x00B0);
	enum();
labelFunc0715_0026:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0715_003A;
	var0004->Func060F();
	goto labelFunc0715_0026;
labelFunc0715_003A:
	if (!(var0000 == 0x00E0)) goto labelFunc0715_0085;
	var0005 = UI_find_nearby(item, 0x0215, 0xFFFF, 0x0000);
	if (!var0005) goto labelFunc0715_0085;
	var0006 = UI_create_new_object(0x0281);
	if (!var0006) goto labelFunc0715_0085;
	var0007 = UI_set_item_quality(var0006, 0x004D);
	var0007 = UI_give_last_created(var0005[0x0001]);
labelFunc0715_0085:
	return;
}


