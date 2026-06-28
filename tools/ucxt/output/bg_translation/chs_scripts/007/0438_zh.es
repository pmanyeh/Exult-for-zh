#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0438 object#(0x438) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0438_01D8;
	UI_show_npc_face(0xFFC8, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!var0001) goto labelFunc0438_0043;
	UI_add_answer("友谊会");
labelFunc0438_0043:
	if (!(!gflags[0x00B9])) goto labelFunc0438_0055;
	message("你看见一位面容姣好的年轻农妇。");
	say();
	gflags[0x00B9] = true;
	goto labelFunc0438_005F;
labelFunc0438_0055:
	message("「向你问好，");
	message(var0000);
	message("，」 Diane 说。");
	say();
labelFunc0438_005F:
	converse attend labelFunc0438_01CD;
	case "姓名" attend labelFunc0438_0075:
	message("「我的名字是 Diane 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0438_0075:
	case "职业" attend labelFunc0438_0091:
	message("「我的工作是负责管理不列颠城这里的马厩，如果你需要的话，也可以卖马匹和马车给你。」");
	say();
	UI_add_answer(["马厩", "不列颠城", "马车"]);
labelFunc0438_0091:
	case "马厩" attend labelFunc0438_00A4:
	message("「在这里你会找到由不列颠王御用马匹饲育员培育出的顶级马匹。如果你想买一匹，我相信我们可以商量出一个好价格。当然，牠们会附带马车。」");
	say();
	UI_remove_answer("马厩");
labelFunc0438_00A4:
	case "不列颠城" attend labelFunc0438_00BE:
	message("「不列颠城是个如此宏伟的城市，但如果你谁都不认识，可能会有些令人不安。幸运的是，我认识这里的很多人。」");
	say();
	UI_remove_answer("不列颠城");
	UI_add_answer("很多人");
labelFunc0438_00BE:
	case "马车" attend labelFunc0438_0141:
	message("「马匹和马车的组合售价是 120 枚金币。你可以在马厩南边过马路的一个小棚子里找到牠们。你想要一张马匹契约吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0438_0136;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x0078)) goto labelFunc0438_012F;
	var0005 = UI_add_party_items(0x0001, 0x031D, 0x001D, 0xFE99, false);
	if (!var0005) goto labelFunc0438_0128;
	message("「很好。这是你的契约。」");
	say();
	var0006 = UI_remove_party_items(0x0078, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0438_012C;
labelFunc0438_0128:
	message("「哎呀。你的手太满了，拿不下契约！」");
	say();
labelFunc0438_012C:
	goto labelFunc0438_0133;
labelFunc0438_012F:
	message("「噢。你没有足够的金币买契约。」");
	say();
labelFunc0438_0133:
	goto labelFunc0438_013A;
labelFunc0438_0136:
	message("「那么，下次吧。」");
	say();
labelFunc0438_013A:
	UI_remove_answer("马车");
labelFunc0438_0141:
	case "很多人" attend labelFunc0438_0167:
	message("「我在不列颠尼亚认识很多朋友。其中包括 Greg 、 James 、 Brownie 和 Mack 。」");
	say();
	UI_remove_answer("很多人");
	UI_add_answer(["Greg", "James", "Brownie", "Mack"]);
labelFunc0438_0167:
	case "Greg" attend labelFunc0438_017A:
	message("「Greg 经营一间卖补给品的商店。如果你正在计划任何探险，他就是你该找的人。他似乎很幸运。也许他的好运会沾染到你身上。」");
	say();
	UI_remove_answer("Greg");
labelFunc0438_017A:
	case "James" attend labelFunc0438_018D:
	message("「在离这里不远经营旅店的 James ，渴望过着冒险的生活。他父亲死后，他的家人希望他经营旅店，从那以后他就一直很不满。不过，我想他喜欢在造币厂工作的 Cynthia 。」");
	say();
	UI_remove_answer("James");
labelFunc0438_018D:
	case "Brownie" attend labelFunc0438_01A0:
	message("「Brownie 是个正直诚实的人，如果你想听我的意见，他会是个比 Patterson 好得多的市长。他在春天用我们的马来犁田。」");
	say();
	UI_remove_answer("Brownie");
labelFunc0438_01A0:
	case "Mack" attend labelFunc0438_01B3:
	message("「关于 Mack ，我要警告你一句。别让他开始谈论天空。除此之外，他完全没问题，我可以向你保证。」");
	say();
	UI_remove_answer("Mack");
labelFunc0438_01B3:
	case "友谊会" attend labelFunc0438_01BF:
	message("Diane 注意到你的友谊会徽章。「真奇怪。如果你不介意我这么说，你看起来不像个友谊会成员。你身上有一种气质。我说不上来。」");
	say();
labelFunc0438_01BF:
	case "告辞" attend labelFunc0438_01CA:
	goto labelFunc0438_01CD;
labelFunc0438_01CA:
	goto labelFunc0438_005F;
labelFunc0438_01CD:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc0438_01D8:
	if (!(event == 0x0000)) goto labelFunc0438_01E6;
	Func092E(0xFFC8);
labelFunc0438_01E6:
	return;
}


