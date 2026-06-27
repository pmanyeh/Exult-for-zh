#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func042A object#(0x42A) ()
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

	if (!(event == 0x0001)) goto labelFunc042A_0302;
	UI_show_npc_face(0xFFD6, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00DC]) goto labelFunc042A_003C;
	UI_add_answer("兌換");
labelFunc042A_003C:
	if (!gflags[0x00AF]) goto labelFunc042A_0049;
	UI_add_answer("James");
labelFunc042A_0049:
	if (!(!gflags[0x00AB])) goto labelFunc042A_005B;
	message("你看見一位看起來熱心且有效率的女人。");
	say();
	gflags[0x00AB] = true;
	goto labelFunc042A_005F;
labelFunc042A_005B:
	message("「有什麼我能幫你的嗎？」 Cynthia 問。");
	say();
labelFunc042A_005F:
	converse attend labelFunc042A_02F7;
	case "姓名" attend labelFunc042A_0075:
	message("「我的名字是 Cynthia 。」");
	say();
	UI_remove_answer("姓名");
labelFunc042A_0075:
	case "職業" attend labelFunc042A_008E:
	message("「我是造幣廠 (Mint) 的出納員。我也是不列顛尼亞稅務委員會的一員。」");
	say();
	UI_add_answer(["造幣廠", "不列顛尼亞稅務委員會"]);
labelFunc042A_008E:
	case "造幣廠" attend labelFunc042A_00BD:
	message("「在造幣廠，我們儲存黃金，監督硬幣的生產，並準確統計王國有多少可用資金，用於農業、修建道路、開發淡水資源、照顧公民的健康、維護貴族的莊園、招募守衛民兵以及執行不列顛王的法令。」");
	say();
	UI_remove_answer("造幣廠");
	UI_add_answer(["資金", "農業", "道路", "淡水", "健康", "莊園", "守衛"]);
labelFunc042A_00BD:
	case "不列顛尼亞稅務委員會" attend labelFunc042A_00F5:
	message("「不列顛尼亞稅務委員會負責稅收的會計、評估和徵收。如果你要在不列顛尼亞這裡賺錢，你需要拿著這份文件。」");
	say();
	var0002 = UI_add_party_items(0x0001, 0x031D, 0x000C, 0xFE99, true);
	if (!var0002) goto labelFunc042A_00EA;
	message("「填寫完後，在年底回來繳稅時把它交回這裡。」");
	say();
	goto labelFunc042A_00EE;
labelFunc042A_00EA:
	message("「你帶了太多東西了。等你沒有背負那麼重時再來，我會把文件給你。」");
	say();
labelFunc042A_00EE:
	UI_remove_answer("不列顛尼亞稅務委員會");
labelFunc042A_00F5:
	case "資金" attend labelFunc042A_0119:
	message("「為了保持貨幣標準的穩定，我們也為那些擁有大量黃金的人提供兌換服務。~~我們提供等值於他們黃金的王國流通硬幣，然後將我們收到的黃金轉換成更多的錢。所以，如你所見，這是一個非常有效率的系統。」");
	say();
	gflags[0x00DC] = true;
	UI_remove_answer("資金");
	UI_add_answer(["兌換", "系統"]);
labelFunc042A_0119:
	case "農業" attend labelFunc042A_012C:
	message("「我肯定你一定知道，那場幸好在幾年前結束的七年大旱，讓王國的大部分農業陷入混亂。這就是為什麼食物的成本如此昂貴。但如果沒有皇家金庫的支持，價格會更高。」");
	say();
	UI_remove_answer("農業");
labelFunc042A_012C:
	case "道路" attend labelFunc042A_013F:
	message("「馬車使用量的增加導致不列顛尼亞各地的許多道路迅速惡化。修建新道路並保持它們的維修需要花費大量的資金。」");
	say();
	UI_remove_answer("道路");
labelFunc042A_013F:
	case "淡水" attend labelFunc042A_0152:
	message("「確保其人民擁有乾淨的水源對王國來說是至關重要的，這需要定期供應新的、乾淨的水井。」");
	say();
	UI_remove_answer("淡水");
labelFunc042A_0152:
	case "健康" attend labelFunc042A_0165:
	message("「由於不列顛尼亞的人口在過去兩百年間大幅增加，傳染病的風險也隨之增加，例如那些服用銀蛇毒液的人所感染的神秘皮膚惡化症。王國需要的治療師數量急劇上升。」");
	say();
	UI_remove_answer("健康");
labelFunc042A_0165:
	case "莊園" attend labelFunc042A_0178:
	message("「當地領主和市長的住所都由王國贊助維護。」");
	say();
	UI_remove_answer("莊園");
labelFunc042A_0178:
	case "守衛" attend labelFunc042A_018B:
	message("「軍事訓練在 Serpent's Hold 進行，保護不列顛尼亞所有城鎮的守衛都在那裡受訓。這是由皇家金庫資助的。」");
	say();
	UI_remove_answer("守衛");
labelFunc042A_018B:
	case "系統" attend labelFunc042A_019E:
	message("「這不僅適用於黃金，也適用於所有礦物。我們負責監督不列顛尼亞礦業公司 (不列顛尼亞n Mining Company) 開採的珍貴礦石的銷售和兌換率。但我們不處理寶石的銷售。城裡有一家珠寶商負責處理那部分。」");
	say();
	UI_remove_answer("系統");
labelFunc042A_019E:
	case "兌換" attend labelFunc042A_02D2:
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFD6));
	if (!(var0003 == 0x001E)) goto labelFunc042A_02C7;
	message("「你有一些想要兌換的黃金嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc042A_02C0;
	var0005 = Func0931(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99);
	var0006 = Func0931(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99);
	if (!(var0005 || var0006)) goto labelFunc042A_0209;
	var0007 = true;
	goto labelFunc042A_020D;
labelFunc042A_0209:
	var0007 = false;
labelFunc042A_020D:
	if (!(!var0007)) goto labelFunc042A_021B;
	message("「我看到你沒有金塊或金條。你擁有的任何黃金都已經是王國的硬幣了。我無法再幫你更多了。」");
	say();
	goto labelFunc042A_02BD;
labelFunc042A_021B:
	message("「我們可以將你的金塊和金條兌換成可花費的硬幣。每一塊金塊我會給你十枚金幣，每一根金條我會給你一百枚金幣。」");
	say();
	var0008 = UI_count_objects(0xFE9B, 0x0285, 0xFE99, 0xFE99);
	var0009 = UI_count_objects(0xFE9B, 0x0286, 0xFE99, 0xFE99);
	var000A = (0x000A * var0008);
	var000B = (0x0064 * var0009);
	var000C = (var000A + var000B);
	var000D = UI_add_party_items(var000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var000D)) goto labelFunc042A_0285;
	message("「喔，天啊。你不可能拿得下這麼多金幣。你必須在你的背包有更多空間時再來。」");
	say();
	goto labelFunc042A_02BD;
labelFunc042A_0285:
	var000E = UI_remove_party_items(var0008, 0x0285, 0xFE99, 0xFE99, true);
	var000F = UI_remove_party_items(var0009, 0x0286, 0xFE99, 0xFE99, true);
	message("「這是給你的 ");
	message(var000C);
	message(" 枚金幣作為回報，");
	message(var0000);
	message("。感謝你的光臨。」");
	say();
labelFunc042A_02BD:
	goto labelFunc042A_02C4;
labelFunc042A_02C0:
	message("「很好。或許下次吧。」");
	say();
labelFunc042A_02C4:
	goto labelFunc042A_02CB;
labelFunc042A_02C7:
	message("「請在正常營業時間來造幣廠 (The Mint)。」");
	say();
labelFunc042A_02CB:
	UI_remove_answer("兌換");
labelFunc042A_02D2:
	case "James" attend labelFunc042A_02E9:
	message("「James 是我的丈夫，我非常擔心他。我知道他最近感到很不快樂，而且他不喜歡他的工作。如果你有跟他說話，請告訴他，即使我們最近沒說什麼話，我仍然在想著他，我仍然在乎他。」");
	say();
	UI_remove_answer("James");
	gflags[0x0092] = true;
labelFunc042A_02E9:
	case "告辭" attend labelFunc042A_02F4:
	goto labelFunc042A_02F7;
labelFunc042A_02F4:
	goto labelFunc042A_005F;
labelFunc042A_02F7:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc042A_0302:
	if (!(event == 0x0000)) goto labelFunc042A_0310;
	Func092E(0xFFD6);
labelFunc042A_0310:
	return;
}


