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
	var0000 = ("@感谢上天！这孩子还活着。他必须" + "立刻被送回 Tory 夫人那里！@");
	Func08FF(var0000);
	goto labelFunc02DA_006C;
labelFunc02DA_0027:
	var0001 = UI_click_on_item();
	var0002 = UI_get_item_shape(var0001);
	if (!(var0002 == 0x03DB)) goto labelFunc02DA_004B;
	Func08FF("@抱歉了我的朋友，你不觉得那样会有点挤吗？@");
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


