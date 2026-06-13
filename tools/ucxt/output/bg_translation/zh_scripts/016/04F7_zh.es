#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func04F7 object#(0x4F7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04F7_0399;
	UI_show_npc_face(0xFF09, 0x0000);
	if (!(!gflags[0x01B2])) goto labelFunc04F7_001E;
	message("這名沒有實體的男子凝視著你身後，似乎穿透了建築物的邊界，或許甚至是穿透了這個世界。然後，他突然發抖，彷彿充滿了痛苦。*");
	say();
	abort;
labelFunc04F7_001E:
	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x01C2])) goto labelFunc04F7_0052;
	message("這名幽靈般的男子露出了充滿痛苦的表情。");
	say();
	gflags[0x01C2] = true;
	goto labelFunc04F7_008A;
labelFunc04F7_0052:
	message("「你好，");
	message(var0003);
	message("。」Caine 深吸了一口氣，顯然是在強忍著他的痛苦。");
	say();
	if (!(gflags[0x017C] && (!gflags[0x0196]))) goto labelFunc04F7_0072;
	UI_add_answer("問題");
	var0002 = true;
labelFunc04F7_0072:
	if (!(!gflags[0x01BF])) goto labelFunc04F7_008A;
	if (!gflags[0x01C0]) goto labelFunc04F7_008A;
	UI_add_answer("需要配方");
	var0001 = true;
labelFunc04F7_008A:
	if (!gflags[0x01BF]) goto labelFunc04F7_009E;
	if (!(!gflags[0x01D0])) goto labelFunc04F7_009E;
	UI_add_answer("指示");
labelFunc04F7_009E:
	if (!gflags[0x0198]) goto labelFunc04F7_00B2;
	if (!(!gflags[0x01A1])) goto labelFunc04F7_00B2;
	UI_add_answer("犧牲");
labelFunc04F7_00B2:
	converse attend labelFunc04F7_038E;
	case "姓名" attend labelFunc04F7_0103:
	message("「我，」他喘息著說，「名叫 Caine。但我也被我的……鎮民同胞們起了一個別名。對他們來說，我被稱為『被折磨者』。」他雙手在空中揮舞，但似乎什麼也沒指。「你可以看出來為什麼。」");
	say();
	if (!(gflags[0x017C] && (!gflags[0x0196]))) goto labelFunc04F7_00DA;
	if (!(!var0002)) goto labelFunc04F7_00DA;
	UI_add_answer("問題");
labelFunc04F7_00DA:
	UI_remove_answer("姓名");
	UI_add_answer("為什麼？");
	if (!(!var0001)) goto labelFunc04F7_0103;
	if (!(!gflags[0x01BF])) goto labelFunc04F7_0103;
	if (!gflags[0x01C0]) goto labelFunc04F7_0103;
	UI_add_answer("需要配方");
labelFunc04F7_0103:
	case "為什麼？" attend labelFunc04F7_0116:
	message("「火焰呀！笨蛋！是火焰呀！」他又喘了一口氣。");
	say();
	UI_remove_answer("為什麼？");
labelFunc04F7_0116:
	case "職業" attend labelFunc04F7_0150:
	message("他對你的話冷笑。~~「你想知道我的工作？我告訴你我的工作！」他大喊。~「為了我對美麗的 Skara Brae 犯下的罪行，在這裡永遠在火焰中燃燒！那，」他停頓了一下以強調語氣，「就是我的工作！」~過了一會兒，他平靜下來。~「我很抱歉，");
	message(var0003);
	message("。我知道你的問題無意進一步折磨我，」他嘆了口氣，把臉轉過去不看你。「曾經，我是這裡的煉金術士。」");
	say();
	UI_add_answer(["火焰", "Skara Brae"]);
	if (!(!var0001)) goto labelFunc04F7_0150;
	if (!(!gflags[0x01BF])) goto labelFunc04F7_0150;
	if (!gflags[0x01C0]) goto labelFunc04F7_0150;
	UI_add_answer("需要配方");
labelFunc04F7_0150:
	case "火焰" attend labelFunc04F7_0171:
	message("他低頭看著地面，臉上流露出懊悔的表情。~~「火焰是我的懲罰。多年前，當邪惡的巫妖第一次對 Skara Brae 施加他死亡的統治時，治療師 Mordra 構想了一個消滅這最邪惡生物的計畫。~~「她設計了一種混合物，可以摧毀構成巫妖的魔法束縛。這個配方被交給了我們的鎮長，然後他交給了我。~~「但是，」他皺起眉頭，「當我準備藥水時出了問題。比例混合不當，或者……我不知道！」他大喊著，緊握雙拳。~~「我只記得商店爆炸了，然後是火！火！所有那些人都死了……因為我……因為我的錯誤……」");
	say();
	UI_remove_answer("火焰");
	if (!(!var0000)) goto labelFunc04F7_0171;
	UI_add_answer("鎮長");
labelFunc04F7_0171:
	case "Skara Brae" attend labelFunc04F7_018B:
	message("「這曾是座繁榮的城鎮——直到我毀了它！」他的下顎一緊，整張臉因痛苦而扭曲。");
	say();
	message("「為什麼？為什麼、為什麼、為什麼！」他再次因痛苦而劇烈抽息，但很快便按捺住情緒。");
	say();
	message("「那裡有那麼多無辜的百姓，」他直勾勾地盯著你說道：「我真的無法相信，我竟然必須為他們所有人的死負責。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("Skara Brae");
labelFunc04F7_018B:
	case "犧牲" attend labelFunc04F7_01A8:
	message("「我很抱歉，");
	message(var0003);
	message("，但我必須在這裡度過我的永恆，不斷回憶那些被我摧毀的人。」");
	say();
	gflags[0x01A1] = true;
	UI_remove_answer("犧牲");
labelFunc04F7_01A8:
	case "鎮長", "Forsythe" attend labelFunc04F7_01C8:
	message("「Forsythe 是鎮長。如果你想和他說話，也許你可以在鎮政廳找到他。」");
	say();
	var0000 = true;
	UI_remove_answer(["Forsythe", "鎮長"]);
labelFunc04F7_01C8:
	case "需要配方" attend labelFunc04F7_01FD:
	message("「你居然相信我告訴你配方！在我對這個城鎮做了這一切之後？你瘋了嗎？我希望至少，你已經和 Mordra 確認了正確的比例，對吧？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04F7_01F2;
	message("他難以置信地搖搖頭。~~「你真是瘋了。但是，」他聳聳肩，「你除了自己的生命之外也沒什麼好失去的……」");
	say();
	UI_add_answer("指示");
	gflags[0x01BF] = true;
	goto labelFunc04F7_01F6;
labelFunc04F7_01F2:
	message("「這還差不多。你讓我懷疑了一下。」他的語氣中夾雜著如釋重負和失望。");
	say();
labelFunc04F7_01F6:
	UI_remove_answer("需要配方");
labelFunc04F7_01FD:
	case "指示" attend labelFunc04F7_0210:
	message("「首先你需要這三種藥水。然後，你必須將每種藥水放在連接管的正下方——順序無關緊要。拿一個空玻璃瓶——我的實驗室裡應該有一個——並將其放在噴嘴下方。然後，打開燃燒器。幾分鐘後，混合物就會形成，裝滿的玻璃瓶就為你準備好了。」");
	say();
	UI_remove_answer("指示");
labelFunc04F7_0210:
	case "人" attend labelFunc04F7_0238:
	message("「你想知道我殺了誰？我只能假設所有人都死在火災中：Markham 和他的酒吧女侍 Paulette；Trent 和 Forsythe；當然還有治療師 Mordra。」");
	say();
	UI_add_answer("Trent");
	if (!(!var0000)) goto labelFunc04F7_0231;
	UI_add_answer("Forsythe");
labelFunc04F7_0231:
	UI_remove_answer("人");
labelFunc04F7_0238:
	case "Trent" attend labelFunc04F7_0258:
	message("「他現在是——曾經是——鐵匠。我唯一的安慰就在他身上，因為我以為他的死至少會有一個好處。可悲的是，」他深吸了一口氣，「連這點都沒發生。」");
	say();
	UI_add_answer(["鐵匠", "好處"]);
	UI_remove_answer("Trent");
labelFunc04F7_0258:
	case "鐵匠" attend labelFunc04F7_0272:
	message("「他曾經是所有金屬製品的大師。現在我聽說他所做的，就是無休止地打造那個該死的籠子！」");
	say();
	UI_remove_answer("鐵匠");
	UI_add_answer("籠子");
labelFunc04F7_0272:
	case "籠子" attend labelFunc04F7_0285:
	message("「我對此一無所知，只知道必須先把巫妖關進去，我的……藥水才能對他起作用。」");
	say();
	UI_remove_answer("籠子");
labelFunc04F7_0285:
	case "好處" attend labelFunc04F7_02A5:
	message("「巫妖從 Trent 身邊奪走了這位鐵匠生命中最寶貴的東西——他的妻子 Rowena。我原本希望他的死至少能消除他的痛苦。」他冷嘲熱諷地笑著。~~「嗯，就某種意義上來說，這確實結束了他的痛苦。」");
	say();
	UI_remove_answer("好處");
	UI_add_answer(["Rowena", "結束"]);
labelFunc04F7_02A5:
	case "結束" attend labelFunc04F7_02B8:
	message("「痛苦消失了，但取而代之的是他執著的憤怒。這個可憐的傻瓜甚至沒有意識到他已經死了！他靠著他的憤怒而存在。」");
	say();
	UI_remove_answer("結束");
labelFunc04F7_02B8:
	case "Rowena" attend labelFunc04F7_02D2:
	message("「她是他活著的全部。當巫妖試圖把她從他身邊奪走時，他被她死亡的空虛吞噬了。但是，在他自己死後，」他直視著你，「他苦澀的感情變得更加糟糕。~~「我懷疑現在沒法跟他講道理了。」");
	say();
	UI_remove_answer("Rowena");
	UI_add_answer("講道理");
labelFunc04F7_02D2:
	case "講道理" attend labelFunc04F7_02E5:
	message("「我懷疑他甚至不會相信自己的死，更別說在乎了。」");
	say();
	UI_remove_answer("講道理");
labelFunc04F7_02E5:
	case "問題" attend labelFunc04F7_0350:
	if (!(!gflags[0x01BC])) goto labelFunc04F7_031B;
	message("幽靈帶著一絲愉快的表情看著你。「你正在尋找關於生與死問題的答案？」");
	say();
	if (!Func090A()) goto labelFunc04F7_0313;
	message("被折磨者認真地看著你。停頓片刻後，他說。「如果你同意幫助我，我會告訴你我所知道的。釋放我。釋放我們所有人。將我們從邪惡的巫妖手中解放出來。」");
	say();
	UI_add_answer("巫妖");
	UI_remove_answer("問題");
	goto labelFunc04F7_0318;
labelFunc04F7_0313:
	message("「那麼我沒有答案可以給你。」*");
	say();
	abort;
labelFunc04F7_0318:
	goto labelFunc04F7_0349;
labelFunc04F7_031B:
	if (!gflags[0x01AA]) goto labelFunc04F7_0345;
	message("「你已經將我們從巫妖手中解救出來。你有權得到我這部分的約定。~~「所以你想知道生與死問題的答案嗎？」");
	say();
	if (!Func090A()) goto labelFunc04F7_033D;
	message("被折磨者認真地看著你。然後，他笑著搖了搖頭。「我沒有秘密，我愚蠢的朋友。你真是個傻瓜。根本『沒有』答案。只有問題。」~~他看起來像是痛苦得要大叫出來。然後 Caine 轉身背對著你。「現在走開吧。讓我留給我的永恆。」*");
	say();
	gflags[0x0196] = true;
	Func0911(0x02BC);
	abort;
	goto labelFunc04F7_0342;
labelFunc04F7_033D:
	message("「那你為什麼要浪費時間？走開，傻瓜！」*");
	say();
	abort;
labelFunc04F7_0342:
	goto labelFunc04F7_0349;
labelFunc04F7_0345:
	message("「你還沒有替我們除掉邪惡的巫妖。按照你的承諾完成這項任務，我就會給你你尋找的答案。」");
	say();
labelFunc04F7_0349:
	UI_remove_answer("問題");
labelFunc04F7_0350:
	case "巫妖" attend labelFunc04F7_0380:
	message("「他是一個附身在可憐的死者 Horance 身體裡的邪惡靈魂。他控制著這個城鎮裡的每一個生物——甚至是我。他吸取我們靈魂中的生命力——所剩無幾的生命力。拜託，你必須將我們從他的力量中解放出來。你願意嘗試嗎？」");
	say();
	if (!Func090A()) goto labelFunc04F7_0374;
	message("被折磨者的眼睛稍微亮了起來，彷彿他在漫長黑暗的隧道盡頭看到了光芒。「那你給了我希望。首先，去和 Mordra 女士談談。她可以告訴你如何完成這項壯舉。」");
	say();
	UI_remove_answer("巫妖");
	gflags[0x01BC] = true;
	goto labelFunc04F7_0379;
labelFunc04F7_0374:
	message("「那麼你永遠不會知道關於生與死問題的答案。以眼還眼，我的朋友。」*");
	say();
	abort;
labelFunc04F7_0379:
	UI_remove_answer("巫妖");
labelFunc04F7_0380:
	case "告辭" attend labelFunc04F7_038B:
	goto labelFunc04F7_038E;
labelFunc04F7_038B:
	goto labelFunc04F7_00B2;
labelFunc04F7_038E:
	endconv;
	message("「再見，");
	message(var0003);
	message("。」你離開時他壓抑著痛苦的尖叫。*");
	say();
labelFunc04F7_0399:
	if (!(event == 0x0000)) goto labelFunc04F7_03A2;
	abort;
labelFunc04F7_03A2:
	return;
}


