#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0488 object#(0x488) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0488_0329;
	UI_show_npc_face(0xFF78, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = Func08F7(0xFF7A);
	var0003 = Func08F7(0xFF79);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x017D]) goto labelFunc0488_004E;
	UI_add_answer("吊飾盒");
labelFunc0488_004E:
	if (!(!gflags[0x0191])) goto labelFunc0488_006D;
	message("你看到一個年輕人在指尖上平衡著一把匕首。他努力想忽視你。");
	say();
	gflags[0x0191] = true;
	if (!gflags[0x0180]) goto labelFunc0488_006A;
	UI_add_answer("陌生人");
labelFunc0488_006A:
	goto labelFunc0488_0071;
labelFunc0488_006D:
	message("Leavell 在指尖上平衡著他的匕首。在一陣模糊的動作中，他從半空中抓住了它，並指向你。他直視著你的眼睛。");
	say();
labelFunc0488_0071:
	converse attend labelFunc0488_0324;
	case "姓名" attend labelFunc0488_0087:
	message("「我是 Leavell。」");
	say();
	UI_remove_answer("姓名");
labelFunc0488_0087:
	case "職業" attend labelFunc0488_00A6:
	message("「和 Battles 一起，我是 Robin 少爺的保鑣。要不是他，我早就進監獄了，而不是來到 New Magincia。」");
	say();
	UI_add_answer(["Battles", "Robin", "監獄", "New Magincia"]);
labelFunc0488_00A6:
	case "陌生人" attend labelFunc0488_00B9:
	message("「我不知道你在說什麼。」");
	say();
	UI_remove_answer("陌生人");
labelFunc0488_00B9:
	case "Battles" attend labelFunc0488_0101:
	message("「他有著像老鷹般銳利的眼睛，而且動作比貓還快。你最好放尊重點。」");
	say();
	if (!var0003) goto labelFunc0488_00EA;
	UI_show_npc_face(0xFF79, 0x0000);
	message("「哈！哈！你說得太對了，Leavell！」");
	say();
	UI_remove_npc_face(0xFF79);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_00EA:
	UI_remove_answer("Battles");
	UI_add_answer(["眼睛", "動作快", "尊重"]);
labelFunc0488_0101:
	case "眼睛" attend labelFunc0488_011B:
	message("「如果 Battles 沒有發現那場逼近的風暴，我們肯定早就沒命了！」");
	say();
	UI_remove_answer("眼睛");
	UI_add_answer("風暴");
labelFunc0488_011B:
	case "風暴" attend labelFunc0488_012E:
	message("「它對我們的船造成了嚴重的破壞，但老實說，我見過更糟的。」");
	say();
	UI_remove_answer("風暴");
labelFunc0488_012E:
	case "動作快" attend labelFunc0488_0141:
	message("「我見過 Battles 有著比蛇還快的反應速度。」");
	say();
	UI_remove_answer("動作快");
labelFunc0488_0141:
	case "監獄" attend labelFunc0488_0154:
	message("「是的，我做過一些足以讓我被關進監獄的事。但我對我的生活並不感到羞恥。我也不需要向你交代。」");
	say();
	UI_remove_answer("監獄");
labelFunc0488_0154:
	case "尊重" attend labelFunc0488_0167:
	message("「既然說到這，你也應該對我放尊重點。」Leavell 冷笑著說。");
	say();
	UI_remove_answer("尊重");
labelFunc0488_0167:
	case "Robin" attend labelFunc0488_01AC:
	message("「他是一名職業賭徒，在海盜巢穴 (Buccaneer's Den)的遊戲廳賭桌上贏錢。」");
	say();
	if (!var0002) goto labelFunc0488_0198;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「很快我們就會回去，錢又會像甜酒一樣湧進來，是吧，Leavell？」");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_0198:
	UI_add_answer(["職業", "海盜巢穴"]);
	UI_remove_answer("Robin");
labelFunc0488_01AC:
	case "職業" attend labelFunc0488_01E8:
	message("「賭博是 Robin 賺錢的方式。但他花了很多時間談論 Lord British，你甚至會以為他是皇室成員還是什麼的！」");
	say();
	if (!var0002) goto labelFunc0488_01E1;
	message("Leavell 臉上突然露出尷尬的表情，並停止了說話。*");
	say();
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「說夠了，Leavell！」*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_01E1:
	UI_remove_answer("職業");
labelFunc0488_01E8:
	case "海盜巢穴" attend labelFunc0488_0208:
	message("「我們上次在那裡遇到了一些不幸。遊戲廳的『先生』得知了 Robin 少爺的作弊系統，讓他輸掉了很多黃金。」");
	say();
	UI_add_answer(["先生", "系統"]);
	UI_remove_answer("海盜巢穴");
labelFunc0488_0208:
	case "系統" attend labelFunc0488_021B:
	message("「他設計了一個聰明的方法，可以在機會之屋(House of Chance)的所有各種遊戲中作弊。我敢肯定，這讓他賺到了好幾倍於他體重的金幣。」");
	say();
	UI_remove_answer("系統");
labelFunc0488_021B:
	case "先生" attend labelFunc0488_023B:
	message("「當 Robin 少爺無法償還債務時，『先生』派了他的打手 Sintag 和他的無賴們來追捕我們。我們不得不搭乘第一艘離開海盜巢穴 (Buccaneer's Den)的船。我不知道他為什麼被稱為『先生』。」");
	say();
	UI_add_answer(["Sintag", "船"]);
	UI_remove_answer("先生");
labelFunc0488_023B:
	case "Sintag" attend labelFunc0488_0277:
	message("「Battles 和我絕對有能力對付 Sintag……」 *");
	say();
	if (!var0003) goto labelFunc0488_026C;
	UI_show_npc_face(0xFF79, 0x0000);
	message("「是啊，你說得他媽的太對了，我們能搞定他！我們會像宰羊一樣割斷他的喉嚨！哈！」 *");
	say();
	UI_remove_npc_face(0xFF79);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_026C:
	message("「但 Gordy 雇了一群暴徒來追捕我們。真可惜。我本來想教訓他一兩頓的。事實上，我想總有一天我會的。」");
	say();
	UI_remove_answer("Sintag");
labelFunc0488_0277:
	case "船" attend labelFunc0488_0297:
	message("「我們乘坐的船沉了，把我們困在這裡。我們能活著來到 New Magincia 真幸運！」");
	say();
	UI_add_answer(["沉了", "受困"]);
	UI_remove_answer("船");
labelFunc0488_0297:
	case "沉了" attend labelFunc0488_02AA:
	message("「船員們都不敢相信！那艘船幾乎是新的。它從 Minoc 一路航行過來都沒有問題。事實上，那是那艘船遇到的第一場風暴。船員沒有一個活下來，可憐的傢伙們。」");
	say();
	UI_remove_answer("沉了");
labelFunc0488_02AA:
	case "受困" attend labelFunc0488_02BD:
	message("「如果你有辦法讓我們回到海盜巢穴 (Buccaneer's Den)，Robin 少爺會豐厚地獎賞你。」");
	say();
	UI_remove_answer("受困");
labelFunc0488_02BD:
	case "New Magincia" attend labelFunc0488_02DD:
	message("「全是些鄉巴佬蠢貨和羊群。這個鎮上唯一值得多看一眼的就只有 Constance。」");
	say();
	UI_add_answer(["蠢貨和羊群", "Constance"]);
	UI_remove_answer("New Magincia");
labelFunc0488_02DD:
	case "蠢貨和羊群" attend labelFunc0488_02F0:
	message("「這裡的人不是前者就是後者。這個地方太與世隔絕，所以很落後。更糟的是，他們還喜歡這樣！」");
	say();
	UI_remove_answer("蠢貨和羊群");
labelFunc0488_02F0:
	case "Constance" attend labelFunc0488_0303:
	message("「她確實能讓男人充滿活力！我們已經盯上她了，沒錯！」Leavell 迅速清了清嗓子，暫時把目光從你身上移開。");
	say();
	UI_remove_answer("Constance");
labelFunc0488_0303:
	case "吊飾盒" attend labelFunc0488_0316:
	message("「雖然我自己沒見過這樣的吊飾盒，也許你應該問問 Robin 少爺。」");
	say();
	UI_remove_answer("吊飾盒");
labelFunc0488_0316:
	case "告辭" attend labelFunc0488_0321:
	goto labelFunc0488_0324;
labelFunc0488_0321:
	goto labelFunc0488_0071;
labelFunc0488_0324:
	endconv;
	message("說完，Leavell 又回去玩他的匕首了。*");
	say();
labelFunc0488_0329:
	if (!(event == 0x0000)) goto labelFunc0488_0337;
	Func092E(0xFF78);
labelFunc0488_0337:
	return;
}


