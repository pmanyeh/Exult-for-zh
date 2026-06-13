#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04B1 object#(0x4B1) ()
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

	if (!(event == 0x0001)) goto labelFunc04B1_02E4;
	UI_show_npc_face(0xFF4F, 0x0000);
	var0000 = Func0909();
	if (!(gflags[0x0213] && (!gflags[0x0234]))) goto labelFunc04B1_0042;
	message("「聖者！我的兒子 Tobias 被誣陷了！他不是小偷！我無法相信在他身上發現了一瓶毒液。我真的相信那是被栽贓的！拜託——我求求你！請還我兒子清白。他沒有做錯任何事！」");
	say();
	message("「我知道我的兒子 Tobias 因為沒有父親而受苦。我已經盡我所能獨自將他撫養長大，但這個農場需要做很多工作，我擔心我沒有足夠的時間陪伴他。但在我心裡，我知道我兒子不是小偷。」*");
	say();
	message("「我能建議你再和 Morfin 談談嗎。他可能在村裡其他人身上認出了使用這種邪惡物質的跡象。」");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF4F), 0x000B);
	gflags[0x0234] = true;
	abort;
labelFunc04B1_0042:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0212]) goto labelFunc04B1_005F;
	UI_add_answer("小偷");
labelFunc04B1_005F:
	if (!gflags[0x0213]) goto labelFunc04B1_006C;
	UI_add_answer("Feridwyn");
labelFunc04B1_006C:
	if (!gflags[0x0218]) goto labelFunc04B1_0086;
	UI_add_answer("Tobias 沉冤得雪");
	UI_remove_answer(["Feridwyn", "小偷"]);
labelFunc04B1_0086:
	if (!(!gflags[0x022A])) goto labelFunc04B1_009C;
	message("你看到一個農婦。她搓著手，手上沾滿了泥土和勞動留下的紋路。");
	say();
	message("「我的夢想成真了。你是聖者，對吧？我立刻就認出你了！」");
	say();
	gflags[0x022A] = true;
	goto labelFunc04B1_00A6;
labelFunc04B1_009C:
	message("「你好嗎，");
	message(var0000);
	message("？」Camille 問。");
	say();
labelFunc04B1_00A6:
	converse attend labelFunc04B1_02DF;
	case "姓名" attend labelFunc04B1_00C0:
	message("「我的名字是 Camille，聖者。很榮幸見到你。」");
	say();
	gflags[0x022A] = true;
	UI_remove_answer("姓名");
labelFunc04B1_00C0:
	case "職業" attend labelFunc04B1_00E7:
	message("「我和我兒子 Tobias 在 Paws 這裡經營一個小農場。我是個寡婦。」");
	say();
	UI_add_answer(["Paws", "Tobias"]);
	if (!(!gflags[0x021A])) goto labelFunc04B1_00E7;
	UI_add_answer("農場");
labelFunc04B1_00E7:
	case "農場" attend labelFunc04B1_0107:
	message("「我種了一些農作物。特別是胡蘿蔔和小麥。」");
	say();
	UI_add_answer(["胡蘿蔔", "小麥"]);
	UI_remove_answer("農場");
labelFunc04B1_0107:
	case "胡蘿蔔" attend labelFunc04B1_01CD:
	message("「我相信我的胡蘿蔔特別好吃。你想買一些嗎？三個只要你一枚金幣。」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04B1_01C2;
	message("「你想要多少？」");
	say();
	var0002 = UI_input_numeric_value(0x0003, 0x001E, 0x0003, 0x0003);
	var0003 = (var0002 / 0x0003);
	var0004 = UI_remove_party_items(var0003, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc04B1_0196;
	var0005 = UI_add_party_items(var0002, 0x0179, 0xFE99, 0x0012, true);
	if (!var0005) goto labelFunc04B1_017B;
	message("「我肯定你會喜歡它們的。」");
	say();
	goto labelFunc04B1_0193;
labelFunc04B1_017B:
	message("「你必須先減輕你的負重。然後我才能給你一些美味的胡蘿蔔。」");
	say();
	var0006 = UI_add_party_items(var0003, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04B1_0193:
	goto labelFunc04B1_01BF;
labelFunc04B1_0196:
	message("「很抱歉，聖者。」她悲傷地搖搖頭。「你沒有錢來品嚐它們。」~~她盯著你看了一會兒，顯然在思考。她壓低聲音說：~~「拿去吧，聖者，拿一個。」");
	say();
	var0007 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0012, true);
	if (!var0007) goto labelFunc04B1_01BB;
	message("她溫柔地笑著，遞給你一根胡蘿蔔。");
	say();
	goto labelFunc04B1_01BF;
labelFunc04B1_01BB:
	message("「你帶太多東西了……」她看起來真的很失望。");
	say();
labelFunc04B1_01BF:
	goto labelFunc04B1_01C6;
labelFunc04B1_01C2:
	message("「好吧......但聖者......它們真的很好吃！」");
	say();
labelFunc04B1_01C6:
	UI_remove_answer("胡蘿蔔");
labelFunc04B1_01CD:
	case "小麥" attend labelFunc04B1_021C:
	message("「這提醒了我。今天需要把這包東西送到磨坊。如果你能幫我送去，Thurston 會付錢給你。你願意嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04B1_0211;
	var0009 = UI_add_party_items(0x0001, 0x02A5, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc04B1_020A;
	message("「一定要把這個交給磨坊主人 Thurston。他會為你的辛勞付錢給你。」");
	say();
	gflags[0x021A] = true;
	goto labelFunc04B1_020E;
labelFunc04B1_020A:
	message("「你帶太多東西了！去放下一些東西，然後我再給你。」");
	say();
labelFunc04B1_020E:
	goto labelFunc04B1_0215;
labelFunc04B1_0211:
	message("「我明白你忙於你的任務，聖者。」");
	say();
labelFunc04B1_0215:
	UI_remove_answer("小麥");
labelFunc04B1_021C:
	case "Paws" attend labelFunc04B1_023C:
	message("「在 Paws 這裡生活很艱苦。這是一個窮人的城鎮，伴隨著貧窮帶來的所有弊病。至少友誼會給我們帶來了一些慰藉。」");
	say();
	UI_add_answer(["弊病", "友誼會"]);
	UI_remove_answer("Paws");
labelFunc04B1_023C:
	case "Tobias" attend labelFunc04B1_0259:
	if (!gflags[0x0213]) goto labelFunc04B1_024E;
	message("「我了解我的兒子。我知道他成長得很不快樂。但我無法相信他會偷東西。」");
	say();
labelFunc04B1_024E:
	message("「他基本上是個好孩子。他工作努力，而且想念他的父親。」");
	say();
	UI_remove_answer("Tobias");
labelFunc04B1_0259:
	case "友誼會" attend labelFunc04B1_026C:
	message("「我不確定我是否信任友誼會。它無疑在這個世界上做了一些好事，所以它不可能全是壞的。或者，至少，裡面的人不可能全是壞的。」");
	say();
	UI_remove_answer("友誼會");
labelFunc04B1_026C:
	case "弊病" attend labelFunc04B1_0286:
	message("「最近，我們鎮上一直受到一個小偷的困擾。」");
	say();
	UI_add_answer("小偷");
	UI_remove_answer("弊病");
labelFunc04B1_0286:
	case "小偷" attend labelFunc04B1_02AB:
	if (!(!gflags[0x0213])) goto labelFunc04B1_02A0;
	message("「經營屠宰場的商人 Morfin 被偷了一些銀蛇毒液。」");
	say();
	gflags[0x0212] = true;
	goto labelFunc04B1_02A4;
labelFunc04B1_02A0:
	message("「我不在乎 Feridwyn 怎麼說！我兒子不是小偷！」");
	say();
labelFunc04B1_02A4:
	UI_remove_answer("小偷");
labelFunc04B1_02AB:
	case "Feridwyn" attend labelFunc04B1_02BE:
	message("「Feridwyn 那個男人知道我不信任友誼會，因此他把我視為他的個人敵人。我不知道他為什麼試圖透過我兒子來攻擊我，但他絕不能得逞。」");
	say();
	UI_remove_answer("Feridwyn");
labelFunc04B1_02BE:
	case "Tobias 沉冤得雪" attend labelFunc04B1_02D1:
	message("你告訴 Camille 你是如何發現 Garritt 才是真正的小偷，而她的兒子 Tobias 已經洗清了嫌疑。「我要感謝你在我們鎮上找到了小偷，並還我兒子清白。看到聖者再次回到我們身邊，而且你夠關心 Britannia 的人民，願意幫助解決我們 Paws 這裡的當地麻煩，這讓我的心感到安慰。聖者，我再次感謝你。」");
	say();
	UI_remove_answer("Tobias 沉冤得雪");
labelFunc04B1_02D1:
	case "告辭" attend labelFunc04B1_02DC:
	goto labelFunc04B1_02DF;
labelFunc04B1_02DC:
	goto labelFunc04B1_00A6;
labelFunc04B1_02DF:
	endconv;
	message("「祝你旅途愉快，聖者。」*");
	say();
labelFunc04B1_02E4:
	if (!(event == 0x0000)) goto labelFunc04B1_02F2;
	Func092E(0xFF4F);
labelFunc04B1_02F2:
	return;
}


