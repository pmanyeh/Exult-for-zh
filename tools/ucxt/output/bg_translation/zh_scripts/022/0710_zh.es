#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);
extern var Func0814 0x814 ();
extern void Func08E6 0x8E6 (var var0000);
extern void Func08FF 0x8FF (var var0000);

void Func0710 object#(0x710) ()
{
	var var0000;
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	if (!(event == 0x0001)) goto labelFunc0710_0197;
	UI_close_gumps();
	var0000 = UI_find_nearby(item, 0x03F7, 0x0028, 0x0008);
	var0001 = false;
	var0002 = false;
	enum();
labelFunc0710_0026:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc0710_0066;
	if (!UI_get_cont_items(var0005, 0x031D, 0x00F3, 0x0004)) goto labelFunc0710_004A;
	var0001 = var0005;
labelFunc0710_004A:
	if (!UI_get_cont_items(var0005, 0x031D, 0x00F4, 0x0004)) goto labelFunc0710_0063;
	var0002 = var0005;
labelFunc0710_0063:
	goto labelFunc0710_0026;
labelFunc0710_0066:
	if (!(gflags[0x031B] && (!gflags[0x031C]))) goto labelFunc0710_007C;
	Func08FE("@現在所有的魔像都活著了。@");
	message("*");
	say();
	abort;
labelFunc0710_007C:
	var0006 = false;
	var0007 = Func0814();
	if (!(!var0007)) goto labelFunc0710_009C;
	Func08FE(["@魔像必須位於", "五芒星陣的中央。@"]);
	goto labelFunc0710_0162;
labelFunc0710_009C:
	var0000 = UI_find_nearby([0x09B7, 0x06C8, 0x0000], 0x014B, 0x000A, 0x0000);
	var0008 = 0x0000;
	enum();
labelFunc0710_00BF:
	for (var000B in var0000 with var0009 to var000A) attend labelFunc0710_0104;
	var000C = UI_get_item_frame(var000B);
	if (!((var000C >= 0x0000) && ((var000C <= 0x000A) && UI_find_nearby(var000B, 0x0390, 0x0002, 0x00B0)))) goto labelFunc0710_0101;
	var0008 = (var0008 + 0x0001);
labelFunc0710_0101:
	goto labelFunc0710_00BF;
labelFunc0710_0104:
	if (!(var0008 >= 0x0005)) goto labelFunc0710_0112;
	var0006 = true;
labelFunc0710_0112:
	if (!(!var0006)) goto labelFunc0710_0162;
	if (!((var0008 > 0x0000) && (var0008 < 0x0005))) goto labelFunc0710_015C;
	var000D = " 塊石頭被";
	if (!(var0008 > 0x0001)) goto labelFunc0710_0141;
	var000D = " 塊石頭被";
labelFunc0710_0141:
	var000E = ((("@只有 " + var0008) + var000D) + " 覆蓋。@");
	Func08FE(var000E);
	goto labelFunc0710_0162;
labelFunc0710_015C:
	Func08FE("@血液必須覆蓋石頭。@");
	goto labelFunc0710_0162;
labelFunc0710_0162:
	UI_play_sound_effect2(0x000E, item);
	UI_book_mode(item);
	message("     Vas Flam Uus~~");
	say();
	message("這份卷軸將允許你執行必要的儀式，以創造或重建石頭生物，並賦予它們思想的能力。首先，收集前面章節中討論的材料。完成上述任務後，你應該參考這份卷軸並開始...");
	say();
	if (!(var0006 && var0007)) goto labelFunc0710_0197;
	var000F = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0714, (byte)0x02]);
labelFunc0710_0197:
	if (!(event == 0x0002)) goto labelFunc0710_0253;
	gflags[0x031C] = true;
	var0010 = UI_get_object_position(item);
	Func08E6(item);
	var0011 = UI_create_new_object(0x019E);
	UI_set_item_frame(var0011, 0x0005);
	var0012 = UI_update_last_created(var0010);
	var0013 = UI_create_new_object(0x031D);
	var0012 = UI_set_item_quality(var0013, 0x00F4);
	UI_set_item_frame(var0013, 0x0004);
	var0012 = UI_give_last_created(var0011);
	var0014 = UI_create_new_object(0x00CB);
	UI_set_item_frame(var0014, 0x000A);
	var0010[0x0001] = (var0010[0x0001] + 0x0004);
	var0010[0x0002] = (var0010[0x0002] - 0x0001);
	var0010[0x0003] = (var0010[0x0003] + 0x0002);
	var0012 = UI_update_last_created(var0010);
	Func08FF("@他獻出了自己的心... 為了讓 Adjhar 活下去！* 好了，不想說得太悲傷，但我想咒語現在應該能起作用了。@");
	UI_halt_scheduled(0xFE9C);
labelFunc0710_0253:
	return;
}


