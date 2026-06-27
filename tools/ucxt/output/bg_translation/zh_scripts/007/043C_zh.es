#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0857 0x857 ();
extern void Func092E 0x92E (var var0000);

void Func043C object#(0x43C) ()
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

	if (!(event == 0x0001)) goto labelFunc043C_0253;
	UI_show_npc_face(0xFFC4, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00CE]) goto labelFunc043C_003C;
	UI_add_answer("南瓜");
labelFunc043C_003C:
	if (!(!gflags[0x00BD])) goto labelFunc043C_004E;
	message("你看見一位農夫，儘管繁重的工作讓他看起來相當疲憊，但他顯得精力充沛、開朗且友善。");
	say();
	gflags[0x00BD] = true;
	goto labelFunc043C_0058;
labelFunc043C_004E:
	message("「又見面了，");
	message(var0000);
	message("，」 Brownie 向你打招呼。");
	say();
labelFunc043C_0058:
	converse attend labelFunc043C_0248;
	case "姓名" attend labelFunc043C_006E:
	message("「我是 Brownie 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043C_006E:
	case "職業" attend labelFunc043C_0087:
	message("「嗯，我曾經競選過不列顛城的市長，但我落選了。現在我又回到了我從小就在做的事。在農場工作。」");
	say();
	UI_add_answer(["市長", "農場"]);
labelFunc043C_0087:
	case "市長" attend labelFunc043C_00A7:
	message("「Patterson 贏得了選舉。他在競選上花了很多錢。大部分是用來買票。但我並不怨恨。我只是注定當不了市長。」");
	say();
	UI_remove_answer("市長");
	UI_add_answer(["Patterson", "選舉"]);
labelFunc043C_00A7:
	case "Patterson" attend labelFunc043C_00C7:
	message("「Patterson 爭取了友誼會的支持。他們強迫所有成員投票給他。一旦消息傳開，我的支持者就流失了。沒有人想站在輸家那邊。」 Brownie 嘆了口氣。");
	say();
	UI_remove_answer("Patterson");
	UI_add_answer(["友誼會", "輸家"]);
labelFunc043C_00C7:
	case "選舉" attend labelFunc043C_00DA:
	message("「我其實沒有任何想在政治上獲得成功的願望。我只是看不慣那些有錢人虐待窮人，然後還得聽他們談論階級制度已經被廢除了。」");
	say();
	UI_remove_answer("選舉");
labelFunc043C_00DA:
	case "友誼會" attend labelFunc043C_00FA:
	if (!var0001) goto labelFunc043C_00EF;
	message("Brownie 指著你的徽章。「說實話，我不知道你在那個團體裡看到了什麼。」");
	say();
	goto labelFunc043C_00F3;
labelFunc043C_00EF:
	message("「如果你不與友誼會同流合污，你就是在反對他們。我想他們把我視為一個必須被阻止的潛在敵人。」");
	say();
labelFunc043C_00F3:
	UI_remove_answer("友誼會");
labelFunc043C_00FA:
	case "輸家" attend labelFunc043C_0114:
	message("「當然，如果我想要的話，我本來是可以贏得選舉的。我掌握了關於 Patterson 的情報，那會毀掉他所有獲勝的機會。」");
	say();
	UI_remove_answer("輸家");
	UI_add_answer("情報");
labelFunc043C_0114:
	case "情報" attend labelFunc043C_012E:
	message("「我本來可以揭露一個關於 Patterson 的秘密，但如果我這麼做了，會對他身邊親近的人造成很大的傷害。我並沒有那麼想當市長。」");
	say();
	UI_remove_answer("情報");
	UI_add_answer("秘密");
labelFunc043C_012E:
	case "秘密" attend labelFunc043C_0141:
	message("「Patterson 幾乎沒有掩飾他的秘密。如果你留意他，你遲早會發現的。」");
	say();
	UI_remove_answer("秘密");
labelFunc043C_0141:
	case "農場" attend labelFunc043C_0161:
	message("「我還是覺得在農場種蔬菜比較自在。還有另一個農夫叫 Mack ，他也在不列顛城附近經營農場。他養雞。」");
	say();
	UI_remove_answer("農場");
	UI_add_answer(["蔬菜", "Mack"]);
labelFunc043C_0161:
	case "Mack" attend labelFunc043C_0174:
	message("「我喜歡他。他甚至還投票給我。但說實話，關於 Mack ，他是個瘋子。」");
	say();
	UI_remove_answer("Mack");
labelFunc043C_0174:
	case "蔬菜" attend labelFunc043C_0194:
	message("「我種南瓜。但我現在遇到了一點麻煩，需要一些幫忙。」");
	say();
	UI_remove_answer("蔬菜");
	UI_add_answer(["麻煩", "幫忙"]);
labelFunc043C_0194:
	case "麻煩" attend labelFunc043C_01A7:
	message("「前幾天我搬重南瓜時扭傷了背。我今天連一個小南瓜都搬不動！我需要有人幫忙收成南瓜，這樣我才能把它們送到市集去。」");
	say();
	UI_remove_answer("麻煩");
labelFunc043C_01A7:
	case "幫忙" attend labelFunc043C_021B:
	message("「田地北端有一堆南瓜。我需要把它們搬到我的農舍附近。如果你願意幫我把南瓜搬過來，我很樂意為你的工作付錢。每搬一個南瓜給你一枚金幣，聽起來如何？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc043C_0210;
	message("「太好了！一個幫手！請隨時開始工作吧！」");
	say();
	gflags[0x00CE] = true;
	var0003 = UI_find_nearby_avatar(0x0014);
	var0004 = UI_find_nearby_avatar(0x0015);
	enum();
labelFunc043C_01DC:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc043C_01F4;
	UI_set_item_flag(var0007, 0x000B);
	goto labelFunc043C_01DC;
labelFunc043C_01F4:
	enum();
labelFunc043C_01F5:
	for (var0007 in var0004 with var0008 to var0009) attend labelFunc043C_020D;
	UI_set_item_flag(var0007, 0x000B);
	goto labelFunc043C_01F5;
labelFunc043C_020D:
	goto labelFunc043C_0214;
labelFunc043C_0210:
	message("「那麼，也許下次吧。」");
	say();
labelFunc043C_0214:
	UI_remove_answer("幫忙");
labelFunc043C_021B:
	case "南瓜" attend labelFunc043C_023A:
	if (!gflags[0x00CE]) goto labelFunc043C_022F;
	Func0857();
	goto labelFunc043C_0233;
labelFunc043C_022F:
	message("「你只要去田地北端，帶回盡可能多你能拿的南瓜就行了！」");
	say();
labelFunc043C_0233:
	UI_remove_answer("南瓜");
labelFunc043C_023A:
	case "告辭" attend labelFunc043C_0245:
	goto labelFunc043C_0248;
labelFunc043C_0245:
	goto labelFunc043C_0058;
labelFunc043C_0248:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc043C_0253:
	if (!(event == 0x0000)) goto labelFunc043C_0261;
	Func092E(0xFFC4);
labelFunc043C_0261:
	return;
}


