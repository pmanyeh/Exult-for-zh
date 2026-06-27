#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func08E3 0x8E3 ();
extern void Func092E 0x92E (var var0000);

void Func043B object#(0x43B) ()
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

	if (!(event == 0x0001)) goto labelFunc043B_030F;
	UI_show_npc_face(0xFFC5, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC5));
	var0003 = UI_wearing_fellowship();
	var0001 = UI_part_of_day();
	if (!(var0001 == 0x0007)) goto labelFunc043B_0074;
	var0004 = Func08FC(0xFFC5, 0xFFE6);
	if (!var0004) goto labelFunc043B_005F;
	message("Sean 全神貫注地聽著友誼會的集會。*");
	say();
	abort;
	goto labelFunc043B_0074;
labelFunc043B_005F:
	if (!gflags[0x00DA]) goto labelFunc043B_006F;
	message("「我無法想像巴特林在哪裡。他從不錯過友誼會集會！」");
	say();
	goto labelFunc043B_0074;
	goto labelFunc043B_0074;
labelFunc043B_006F:
	message("「我現在不能停下來說話！我參加友誼會集會要遲到了！」*");
	say();
	abort;
labelFunc043B_0074:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00BC])) goto labelFunc043B_0096;
	message("你看見一個男人，他那張充滿孩子氣的臉龐上，鑲嵌著彷彿看透世事、充滿審視意味的雙眼。");
	say();
	gflags[0x00BC] = true;
	goto labelFunc043B_00A0;
labelFunc043B_0096:
	message("「我能為你做什麼，");
	message(var0000);
	message("？」 Sean 問。");
	say();
labelFunc043B_00A0:
	converse attend labelFunc043B_030A;
	case "姓名" attend labelFunc043B_00B6:
	message("「我的名字是 Sean 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043B_00B6:
	case "職業" attend labelFunc043B_00D5:
	message("「當我不在處理友誼會事務時，我是不列顛城這裡的珠寶商。如果你想買些什麼，請說！」");
	say();
	UI_add_answer(["友誼會", "珠寶商", "不列顛城", "買東西"]);
labelFunc043B_00D5:
	case "珠寶商" attend labelFunc043B_00F5:
	message("「這是一項非常精細的工作。它需要只有少數人擁有的特殊手感。你必須確切地知道如何處理珍貴的材料。只有最優秀的工匠才能成為珠寶商，而且他們能獲得最高的報酬。」");
	say();
	UI_remove_answer("珠寶商");
	UI_add_answer(["珍貴材料", "最優秀的工匠"]);
labelFunc043B_00F5:
	case "珍貴材料" attend labelFunc043B_010F:
	message("「我經常需要新材料來製作我非常特別的珠寶。我總是在市場上收購寶石。如果你有偶然發現任何寶石，而你想賣掉它們賺錢的話，我就是你要找的人。」");
	say();
	UI_remove_answer("珍貴材料");
	UI_add_answer("寶石");
labelFunc043B_010F:
	case "最優秀的工匠" attend labelFunc043B_0122:
	message("「就像我告訴你的，只有最優秀的工匠才能成為珠寶商，而我是最優秀的珠寶商。這難道還不夠明顯嗎？」 Sean 哼了一聲。「我的生意賺的錢比造幣廠還多！」他勉強地笑了笑。");
	say();
	UI_remove_answer("最優秀的工匠");
labelFunc043B_0122:
	case "寶石" attend labelFunc043B_0257:
	if (!(!(var0002 == 0x0007))) goto labelFunc043B_013C;
	message("「珠寶店目前打烊了。晚點再來！」");
	say();
	goto labelFunc043B_0250;
labelFunc043B_013C:
	message("「你有寶石要賣嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc043B_024C;
	message("「我願意以每顆寶石 30 枚金幣的價格向你收購。這個價格你同意嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc043B_0245;
	var0007 = [0x000C, 0x000D];
	enum();
labelFunc043B_0169:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc043B_01A7;
	if (!UI_count_objects(0xFE9B, 0x02F8, 0xFE99, var000A)) goto labelFunc043B_01A4;
	if (!(var000A == 0x000C)) goto labelFunc043B_0195;
	message("「你以為我是傻瓜嗎？！這個藍色小玩意兒一文不值！」");
	say();
labelFunc043B_0195:
	if (!(var000A == 0x000D)) goto labelFunc043B_01A3;
	message("Sean 的臉色緊繃。「這顆寶石又小又暗，就像邪惡巫妖的心臟一樣。拿走！」");
	say();
labelFunc043B_01A3:
	abort;
labelFunc043B_01A4:
	goto labelFunc043B_0169;
labelFunc043B_01A7:
	var000B = UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0xFE99);
	var000C = (var000B * 0x001E);
	var000D = UI_remove_party_items(var000B, 0x02F8, 0xFE99, 0xFE99, true);
	if (!(var000B == 0x0000)) goto labelFunc043B_01E7;
	message("「你根本沒有寶石！你這個騙子！我不跟你做生意了！」");
	say();
	abort;
labelFunc043B_01E7:
	if (!(var000B == 0x0001)) goto labelFunc043B_01F5;
	message("「我看到你有一顆寶石。」");
	say();
labelFunc043B_01F5:
	if (!(var000B > 0x0001)) goto labelFunc043B_0209;
	message("「我看到你有 ");
	message(var000B);
	message(" 顆寶石。」");
	say();
labelFunc043B_0209:
	var000E = UI_add_party_items(var000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000E) goto labelFunc043B_022A;
	message("「這是你的報酬。」");
	say();
	goto labelFunc043B_0242;
labelFunc043B_022A:
	message("「你身上的東西太多，拿不下你的報酬了！」");
	say();
	var000F = UI_add_party_items(var000B, 0x02F8, 0xFE99, 0xFE99, true);
labelFunc043B_0242:
	goto labelFunc043B_0249;
labelFunc043B_0245:
	message("「看來我們沒什麼好談的了。」");
	say();
labelFunc043B_0249:
	goto labelFunc043B_0250;
labelFunc043B_024C:
	message("「如果你沒有寶石要賣，那就連提都別提，別浪費我的時間！」");
	say();
labelFunc043B_0250:
	UI_remove_answer("寶石");
labelFunc043B_0257:
	case "友誼會" attend labelFunc043B_0285:
	if (!var0003) goto labelFunc043B_026C;
	message("「我看你也是成員！」 Sean 突然用較為尊敬的眼神看著你。「我相信友誼會未來會為你帶來無窮的好處。」他帶著高傲的笑容說道。");
	say();
	goto labelFunc043B_0277;
labelFunc043B_026C:
	message("「甚至連你也可以加入友誼會，我可以告訴你更多關於它的事。」");
	say();
	Func0919();
	message("「如果你想聽，我可以告訴你友誼會的理念。」");
	say();
labelFunc043B_0277:
	UI_remove_answer("友誼會");
	UI_add_answer("理念");
labelFunc043B_0285:
	case "理念" attend labelFunc043B_02AE:
	message("「你真的有興趣聽更多嗎？」");
	say();
	var0010 = Func090A();
	if (!var0010) goto labelFunc043B_02A3;
	Func091A();
	goto labelFunc043B_02A7;
labelFunc043B_02A3:
	message("「我就知道我在白費唇舌。」");
	say();
labelFunc043B_02A7:
	UI_remove_answer("理念");
labelFunc043B_02AE:
	case "不列顛城" attend labelFunc043B_02C8:
	message("「我把整個生意搬到不列顛城，就是為了靠近友誼會的總部。你根本無法想像我加入友誼會之後，我的生意改善了多少。」");
	say();
	UI_remove_answer("不列顛城");
	UI_add_answer("友誼會");
labelFunc043B_02C8:
	case "買東西" attend labelFunc043B_02FC:
	if (!(var0002 == 0x0007)) goto labelFunc043B_02F1;
	message("「你想買些什麼嗎？」");
	say();
	if (!Func090A()) goto labelFunc043B_02EA;
	Func08E3();
	goto labelFunc043B_02EE;
labelFunc043B_02EA:
	message("「那麼請隨意逛逛。」");
	say();
labelFunc043B_02EE:
	goto labelFunc043B_02F5;
labelFunc043B_02F1:
	message("「請在正常營業時間來店裡。」");
	say();
labelFunc043B_02F5:
	UI_remove_answer("買東西");
labelFunc043B_02FC:
	case "告辭" attend labelFunc043B_0307:
	goto labelFunc043B_030A;
labelFunc043B_0307:
	goto labelFunc043B_00A0;
labelFunc043B_030A:
	endconv;
	message("「我相信你一定得趕路了。」 Sean 微笑著。*");
	say();
labelFunc043B_030F:
	if (!(event == 0x0000)) goto labelFunc043B_0396;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC5));
	var0011 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc043B_0390;
	if (!(var0011 == 0x0001)) goto labelFunc043B_0353;
	var0012 = "@精美珠寶！@";
labelFunc043B_0353:
	if (!(var0011 == 0x0002)) goto labelFunc043B_0363;
	var0012 = "@需要黃金飾品嗎？@";
labelFunc043B_0363:
	if (!(var0011 == 0x0003)) goto labelFunc043B_0373;
	var0012 = "@上等寶石！@";
labelFunc043B_0373:
	if (!(var0011 == 0x0004)) goto labelFunc043B_0383;
	var0012 = "@精工打造的珠寶！@";
labelFunc043B_0383:
	UI_item_say(0xFFC5, var0012);
	goto labelFunc043B_0396;
labelFunc043B_0390:
	Func092E(0xFFC5);
labelFunc043B_0396:
	return;
}


