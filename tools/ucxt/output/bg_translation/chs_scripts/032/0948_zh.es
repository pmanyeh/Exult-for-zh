#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func0948 0x948 ()
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

	UI_push_answers();
	var0000 = 0x0004;
	var0001 = 0x0001;
	message("「太好了！你有面粉给我吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0948_00D7;
	message("「很好！让我看看你有多少袋……」");
	say();
	var0003 = UI_count_objects(0xFE9B, 0x035F, 0xFE99, 0x000E);
	var0004 = UI_count_objects(0xFE9B, 0x035F, 0xFE99, 0x000F);
	if (!((var0003 == 0x0000) && (var0004 == 0x0000))) goto labelFunc0948_0064;
	message("「但你身上一袋也没有！你是在耍我吗？滚出我的店！」*");
	say();
	abort;
	goto labelFunc0948_00D4;
labelFunc0948_0064:
	var0005 = ((var0003 + (var0004 / var0001)) * var0000);
	message("「好漂亮的面粉！ ");
	message(var0003);
	message("！这表示我该给你 ");
	message(var0005);
	message(" 枚金币。给你！我现在就把面粉收下了！」");
	say();
	var0006 = UI_add_party_items(var0005, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc0948_00D0;
	var0007 = UI_remove_party_items(var0003, 0x035F, 0xFE99, 0x000E, true);
	var0008 = UI_remove_party_items(var0004, 0x035F, 0xFE99, 0x000F, true);
	message("「随时欢迎你回来为我工作！」*");
	say();
	abort;
	goto labelFunc0948_00D4;
labelFunc0948_00D0:
	message("「如果你能减轻一点行囊，你就有手来拿我的金币了！」");
	say();
labelFunc0948_00D4:
	goto labelFunc0948_00DB;
labelFunc0948_00D7:
	message("「没有？那你真是个只会吃白食的懒虫！哈哈哈！」");
	say();
labelFunc0948_00DB:
	UI_pop_answers();
	return;
}


