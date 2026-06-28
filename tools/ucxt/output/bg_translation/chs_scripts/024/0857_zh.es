#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func0857 0x857 ()
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
	var0000 = 0x0001;
	var0001 = 0x0001;
	message("「太棒了！你给我带了些南瓜吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0857_00D5;
	message("「非常好！让我看看你有多少个……」");
	say();
	var0003 = UI_count_objects(0xFE9B, 0x0179, 0xFE99, 0x0014);
	var0004 = UI_count_objects(0xFE9B, 0x0179, 0xFE99, 0x0015);
	var0005 = (var0003 + var0004);
	if (!(var0005 == 0x0000)) goto labelFunc0857_0066;
	message("「但是你身上连一个都没有！你简直和 Mack 一样疯狂！」*");
	say();
	abort;
	goto labelFunc0857_00D2;
labelFunc0857_0066:
	var0006 = ((var0005 / var0001) * var0000);
	message("「太棒了！");
	message(var0005);
	message("！这意味着我欠你 ");
	message(var0006);
	message(" 金币。给你！我现在就把南瓜拿走！」");
	say();
	var0007 = UI_add_party_items(var0006, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc0857_00CE;
	var0008 = UI_remove_party_items(var0003, 0x0179, 0xFE99, 0x0014, true);
	var0008 = UI_remove_party_items(var0004, 0x0179, 0xFE99, 0x0015, true);
	message("「随时回来为我工作！」*");
	say();
	abort;
	goto labelFunc0857_00D2;
labelFunc0857_00CE:
	message("「如果你能轻装旅行，你就有手拿我的金币了！」");
	say();
labelFunc0857_00D2:
	goto labelFunc0857_00D9;
labelFunc0857_00D5:
	message("「没有吗？那你在我的田里做什么？你和大多数你能找到的工人一样毫无价值！」");
	say();
labelFunc0857_00D9:
	UI_pop_answers();
	return;
}


