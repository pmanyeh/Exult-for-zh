#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern void Func0925 0x925 (var var0000);
extern void Func08FD 0x8FD (var var0000);

void Func02DA shape#(0x2DA) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc02DA_006C;
	if (!(UI_get_item_frame(item) == 0x0002)) goto labelFunc02DA_0027;
	var0000 = ("@Praise All! The child is still alive. He must" + " be returned to Lady Tory immediately!@");
	Func08FF(var0000);
	goto labelFunc02DA_006C;
labelFunc02DA_0027:
	var0001 = UI_click_on_item();
	var0002 = UI_get_item_shape(var0001);
	if (!(var0002 == 0x03DB)) goto labelFunc02DA_004B;
	Func08FF("@Pardon me my friend, dost thou not think that would be a little crowded?@");
	goto labelFunc02DA_006C;
labelFunc02DA_004B:
	if (!(var0002 == 0x03E0)) goto labelFunc02DA_0066;
	UI_set_item_shape(var0001, 0x03DB);
	Func0925(item);
	goto labelFunc02DA_006C;
labelFunc02DA_0066:
	Func08FD(0x003C);
labelFunc02DA_006C:
	return;
}


