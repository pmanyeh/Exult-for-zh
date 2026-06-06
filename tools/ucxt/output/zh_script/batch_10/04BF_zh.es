#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04BF object#(0x4BF) ()
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

	if (!(event == 0x0001)) goto labelFunc04BF_02A4;
	UI_show_npc_face(0xFF41, 0x0000);
	var0000 = UI_is_pc_female();
	var0001 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x023B]) goto labelFunc04BF_003F;
	UI_add_answer(["以太戒指"]);
labelFunc04BF_003F:
	if (!(!gflags[0x0256])) goto labelFunc04BF_00A4;
	message("你看到一位貴族，獨自一人，眼中閃爍著瘋狂的光芒。~~「你到底是誰？」男人問道。他的態度就像是一個剛被從某件極其重要的事情中打斷的人。");
	say();
	var0002 = Func090B([var0001, "I am the Avatar"]);
	if (!(var0002 == var0001)) goto labelFunc04BF_007C;
	message("Martingo 和你握手，但表現得完全不感興趣。「我真是太激動了。」");
	say();
	message("他轉向右邊，對著空氣說話。");
	say();
	message("「什麼？哦，真的嗎！我不認為");
	message(var0001);
	message(" 看起來特別沒腦子。我們走著瞧，不是嗎？」");
	say();
	message("他轉過身來對你咧嘴一笑。");
	say();
	goto labelFunc04BF_009D;
labelFunc04BF_007C:
	message("「你當然是！而我是 Mondain 的邪靈，回來對整個 Britannia 進行大破壞。好笑，你看起來不像聖者 (Avatar) ——你看起來像個傻瓜。");
	say();
	if (!var0000) goto labelFunc04BF_008D;
	message("「我能為你做什麼，傻瓜小姐？」");
	say();
	goto labelFunc04BF_0091;
labelFunc04BF_008D:
	message("「我能為你做什麼，傻瓜先生？」");
	say();
labelFunc04BF_0091:
	message("他轉向右邊，對著空氣說話。");
	say();
	message("「什麼？哦，真的嗎！你覺得這個聖者 (Avatar) 看起來像真的嗎？我懷疑， Lucinda 。我非常懷疑。」");
	say();
	message("他轉過身來對你咧嘴一笑。");
	say();
labelFunc04BF_009D:
	gflags[0x0256] = true;
	goto labelFunc04BF_00A8;
labelFunc04BF_00A4:
	message("「你想要什麼？」 Martingo 好鬥地問道。");
	say();
labelFunc04BF_00A8:
	converse attend labelFunc04BF_029F;
	case "姓名" attend labelFunc04BF_00BE:
	message("這位貴族不耐煩地看著你。「我是 Martingo ， Spektran 的蘇丹。這有什麼問題嗎？」他翻了個白眼。他轉向右邊，再次對著一個想像中的人低語：「我相信我們遇到了一個無知的人。」");
	say();
	UI_remove_answer("姓名");
labelFunc04BF_00BE:
	case "職業" attend labelFunc04BF_00EF:
	message("「我是 Spektran 的蘇丹！什麼，你的腦袋只有豌豆那麼大嗎？別回答，這是個修辭問題。」");
	say();
	if (!var0000) goto labelFunc04BF_00D7;
	message("他轉向左邊，對著空氣低語：「你不覺得她的腦袋只有豌豆大嗎？我覺得是！」他與他那看不見的朋友神秘地咯咯笑著。");
	say();
	goto labelFunc04BF_00DB;
labelFunc04BF_00D7:
	message("他轉向左邊，再次對著一個想像中的人低語：「你不覺得他的腦袋只有豌豆大嗎？我覺得是！」他與他那看不見的朋友神秘地咯咯笑著。");
	say();
labelFunc04BF_00DB:
	message("Martingo 然後拿出一根香蕉開始剝皮。");
	say();
	UI_add_answer(["蘇丹", "Spektran", "香蕉"]);
labelFunc04BF_00EF:
	case "蘇丹" attend labelFunc04BF_0145:
	message("「得了吧，別侮辱我的智商。你肯定知道蘇丹是什麼！難道你沒看到我的後宮嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04BF_010E;
	message("「很可愛，不是嗎？");
	say();
	goto labelFunc04BF_0112;
labelFunc04BF_010E:
	message("Martingo 看起來很困惑。「那你必須去檢查一下眼睛！我被十個……」他迅速環顧四周。「不，是『十一個』美女包圍著！」");
	say();
labelFunc04BF_0112:
	message("「每天我都會享受不同的一位。你無法想像當蘇丹有多有趣！」他傾身親吻了一個看不見的臉頰。「今天，我正在享受 Lucinda 。」他咧嘴大笑。");
	say();
	UI_add_answer("Lucinda");
	if (!var0000) goto labelFunc04BF_013E;
	message("Martingo 色瞇瞇地上下打量你。「嗯。你想加入我的後宮嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04BF_013A;
	message("你的回答讓 Martingo 感到驚訝。「你會？」他緊張地環顧四周。「哦，嗯，我最好先就此事諮詢我的占星師。我之後再給你答覆，好嗎？」");
	say();
	goto labelFunc04BF_013E;
labelFunc04BF_013A:
	message("「真遺憾。」");
	say();
labelFunc04BF_013E:
	UI_remove_answer("Sultan");
labelFunc04BF_0145:
	case "Spektran" attend labelFunc04BF_0186:
	message("「就是你現在站著的這座島！」他轉向左邊看不見的人低語：「你說得對——這個人真的是個傻瓜！」~~ Martingo 轉回頭對你說。「如我所說，我是這裡的蘇丹。我是所有這些臣民的主人。」他朝房間周圍比劃了一下。");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc04BF_017F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 對你低語。「這傢伙相當愚蠢。小心點。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF41, 0x0000);
labelFunc04BF_017F:
	UI_remove_answer("Spektran");
labelFunc04BF_0186:
	case "Lucinda" attend labelFunc04BF_0199:
	message("「她很美，不是嗎？」 Martingo 傾身，將舌頭伸進一個不存在的耳朵裡。");
	say();
	UI_remove_answer("Lucinda");
labelFunc04BF_0199:
	case "香蕉" attend labelFunc04BF_0231:
	if (!(!gflags[0x0258])) goto labelFunc04BF_0226;
	message("「哦，原諒我的失禮！你要來根香蕉嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04BF_021F;
	message("「嗯，這將花費你 3 枚金幣。還要嗎？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc04BF_0218;
	var0008 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0008 >= 0x0003)) goto labelFunc04BF_0211;
	var0009 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0011, true);
	if (!var0009) goto labelFunc04BF_020A;
	message("「給你。」 Martingo 遞給你一根香蕉並收下你的金幣。他轉向「Lucinda」低語：「那個混蛋拿走了我最後一根香蕉！」");
	say();
	gflags[0x0258] = true;
	goto labelFunc04BF_020E;
labelFunc04BF_020A:
	message("「你的腦袋裝的是小麥嗎！你連放一根香蕉的空間都沒有！」");
	say();
labelFunc04BF_020E:
	goto labelFunc04BF_0215;
labelFunc04BF_0211:
	message("「破產了，是嗎？太糟糕了。」 Martingo 哼了一聲。「好吧，我必須說，我非常有錢。」");
	say();
labelFunc04BF_0215:
	goto labelFunc04BF_021C;
labelFunc04BF_0218:
	message("「那真是鬆了一口氣。我只剩一個了。」");
	say();
labelFunc04BF_021C:
	goto labelFunc04BF_0223;
labelFunc04BF_021F:
	message("「那真是鬆了一口氣。我只剩一個了。」");
	say();
labelFunc04BF_0223:
	goto labelFunc04BF_022A;
labelFunc04BF_0226:
	message("「我已經把最後一根香蕉賣給你了！」");
	say();
labelFunc04BF_022A:
	UI_remove_answer("香蕉");
labelFunc04BF_0231:
	case "以太戒指" attend labelFunc04BF_024B:
	message("Martingo 看起來很懷疑。「你是想偷我的以太戒指嗎？」他轉向他想像中的朋友低語：「你說得對。我們的客人看起來像個小偷。」他轉回頭對你微笑。「是的，我確實有一枚以太戒指。我是從石像鬼國王那裡買來的。他叫什麼名字來著？」他傾向右邊看不見的同伴。「什麼？哦，對，Draxinusom。我一直都知道。」他轉回頭對你說。「它在我的金庫裡。」");
	say();
	UI_remove_answer("以太戒指");
	UI_add_answer("金庫");
labelFunc04BF_024B:
	case "金庫" attend labelFunc04BF_026B:
	message("Martingo 的眼睛亮了起來。「我的金庫是全 Britannia 防護最嚴密的金庫。沒有人，我再說一遍，『沒有人』能從我的金庫偷走任何東西。我那裡有很多好寶物。」他轉向「Lucinda」並咬了一個不存在的耳垂。");
	say();
	UI_remove_answer("金庫");
	UI_add_answer(["寶物", "受保護"]);
labelFunc04BF_026B:
	case "寶物" attend labelFunc04BF_027E:
	message("「我收集魔法物品。金庫裡裝滿了這些東西。包含你提到的那枚戒指。」");
	say();
	UI_remove_answer("寶物");
labelFunc04BF_027E:
	case "受保護" attend labelFunc04BF_0291:
	message("「金庫的安全是我的秘密。隨便你嘗試進入。事實上，我還打賭你進不去！如果你成功進去，歡迎你拿走任何東西！」 Martingo 笑了。「你只需要那把鑰匙！」他和他想像中的後宮一起笑著，彷彿她們都在陪他笑。「我相信你會找到的！」他笑得前仰後合，笑得眼淚都流下來了。");
	say();
	UI_remove_answer("受保護");
labelFunc04BF_0291:
	case "告辭" attend labelFunc04BF_029C:
	goto labelFunc04BF_029F;
labelFunc04BF_029C:
	goto labelFunc04BF_00A8;
labelFunc04BF_029F:
	endconv;
	message("「好吧。走開吧。這對有好處！」*");
	say();
labelFunc04BF_02A4:
	if (!(event == 0x0000)) goto labelFunc04BF_02B2;
	Func092E(0xFF41);
labelFunc04BF_02B2:
	return;
}


