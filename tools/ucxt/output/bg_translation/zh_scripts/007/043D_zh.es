#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08B8 0x8B8 ();
extern void Func092E 0x92E (var var0000);

void Func043D object#(0x43D) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc043D_02E9;
	UI_show_npc_face(0xFFC3, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0093]) goto labelFunc043D_0035;
	UI_add_answer("證據");
labelFunc043D_0035:
	if (!gflags[0x00CF]) goto labelFunc043D_0042;
	UI_add_answer("撿雞蛋");
labelFunc043D_0042:
	if (!(!gflags[0x00BE])) goto labelFunc043D_0054;
	message("你看見一位農夫，狂野的雙眼因為興奮而睜得大大的。");
	say();
	gflags[0x00BE] = true;
	goto labelFunc043D_0058;
labelFunc043D_0054:
	message("「聖者！你回來了！」 Mack 驚呼。");
	say();
labelFunc043D_0058:
	converse attend labelFunc043D_02E4;
	case "姓名" attend labelFunc043D_006E:
	message("「我是 Mack 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043D_006E:
	case "職業" attend labelFunc043D_0087:
	message("「我是個農夫，雖然大部分的人都叫我瘋子。」");
	say();
	UI_add_answer(["農夫", "瘋子"]);
labelFunc043D_0087:
	case "農夫" attend labelFunc043D_00A1:
	message("「在我的農場裡，我養雞和種蔬菜。如果你需要工作，跟我說！」");
	say();
	UI_remove_answer("農夫");
	UI_add_answer("職業");
labelFunc043D_00A1:
	case "瘋子" attend labelFunc043D_00C4:
	message("「你也這麼認為，是吧？但我告訴你我說的都是真的！有來自星星上另一個地方的生物來拜訪我們！我親眼見過！」");
	say();
	UI_remove_answer("瘋子");
	UI_add_answer(["生物", "另一個地方", "親眼見過"]);
labelFunc043D_00C4:
	case "生物" attend labelFunc043D_00D7:
	message("「他們是又大又凶又醜的獅虎獸！還是虎獅獸？他們非常兇猛，而且想吃我們！」");
	say();
	UI_remove_answer("生物");
labelFunc043D_00D7:
	case "另一個地方" attend labelFunc043D_00EA:
	message("「我只能說，這個世界上絕對沒有這種生物！他們的船也不像在不列顛尼亞任何地方見過的任何船隻。」");
	say();
	UI_remove_answer("另一個地方");
labelFunc043D_00EA:
	case "親眼見過" attend labelFunc043D_0104:
	message("「我親眼見過一隻星際生物，以及讓它能旅行到不列顛尼亞的莫名交通工具！我向你發誓！我完全理智！我有證據！」");
	say();
	UI_remove_answer("親眼見過");
	UI_add_answer("證據");
labelFunc043D_0104:
	case "證據" attend labelFunc043D_0150:
	if (!(!gflags[0x0093])) goto labelFunc043D_011F;
	message("「去我農場後面的田野中央看看。你自己去看看，你就會看到我的證據。」");
	say();
	gflags[0x0093] = true;
	abort;
	goto labelFunc043D_0150;
labelFunc043D_011F:
	message("「我就告訴過你我不是瘋子！你看到證據了嗎？」");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc043D_013E;
	message("「你必須去看看我田裡有什麼！然後回來這裡，因為我必須跟知道我不是瘋子的人談談這件事！」");
	say();
	UI_remove_answer("證據");
	goto labelFunc043D_0150;
labelFunc043D_013E:
	message("「我是不是告訴過你我不是瘋子？不過，我如何偶然發現這東西的故事，簡直令人難以置信。」");
	say();
	UI_remove_answer("證據");
	UI_add_answer("故事");
labelFunc043D_0150:
	case "故事" attend labelFunc043D_0185:
	if (!(!gflags[0x0095])) goto labelFunc043D_017A;
	message("「我喜歡熬夜。有時候我會看到明亮的光芒劃過天空。沒有其他人會去注意它們。但有一天晚上，我看到這道明亮的光芒墜落下來，降落在我的田裡。」");
	say();
	UI_remove_answer("故事");
	UI_add_answer(["明亮光芒", "降落"]);
	goto labelFunc043D_0185;
labelFunc043D_017A:
	message("「我每天晚上都在尋找那些東西的另一個跡象，但自從我上次告訴你的那次之後，我就再也沒見過了。」");
	say();
	UI_remove_answer("故事");
labelFunc043D_0185:
	case "明亮光芒" attend labelFunc043D_0198:
	message("「我總是觀察夜空中移動的明亮光芒。這也是鎮上的人說我是瘋子的部分原因。但我所做的，跟他們在太陽系儀館裡做的事情有什麼不同嗎？」");
	say();
	UI_remove_answer("明亮光芒");
labelFunc043D_0198:
	case "降落" attend labelFunc043D_01B8:
	message("「在爆炸和墜毀之後，我跑到了我的田裡。在那裡我看到了你所見過的那台奇怪的機器，只是它正發出熾熱的光芒。我嚇壞了。但接著機器的頂部開始打開。」");
	say();
	UI_remove_answer("降落");
	UI_add_answer(["機器", "打開"]);
labelFunc043D_01B8:
	case "機器" attend labelFunc043D_01CB:
	message("「它長得像鳥，但它不是鳥！」");
	say();
	UI_remove_answer("機器");
labelFunc043D_01CB:
	case "打開" attend labelFunc043D_01EB:
	message("「當我看到那艘奇怪的船打開時，我嚇得無法動彈。從頂部出來的是一隻兇惡的虎獅獸。它的眼中充滿了野蠻的飢餓感。」");
	say();
	UI_remove_answer("打開");
	UI_add_answer(["虎獅獸", "飢餓"]);
labelFunc043D_01EB:
	case "飢餓" attend labelFunc043D_01FE:
	message("「換句話說，它看起來好像會把我吃掉！」");
	say();
	UI_remove_answer("飢餓");
labelFunc043D_01FE:
	case "虎獅獸" attend labelFunc043D_0218:
	message("「它像掠食者追捕獵物一樣撲向我。它太快了，我甚至無法移動。我以為我死定了。它一秒鐘就衝到了我面前。它看著我的眼睛，然後它就死了。」");
	say();
	UI_remove_answer("虎獅獸");
	UI_add_answer("死了");
labelFunc043D_0218:
	case "死了" attend labelFunc043D_0238:
	message("「它和我沒注意的是，我手裡正拿著我的鋤頭。它曾經被一個路過的法師意外地施了魔法，而且在田裡使用起來效果奇佳。我什麼事都用它！那隻虎獅獸自己撞穿在它上面。當它死的時候，那東西說話了。」");
	say();
	UI_remove_answer("死了");
	UI_add_answer(["說話", "鋤頭"]);
labelFunc043D_0238:
	case "說話" attend labelFunc043D_0252:
	message("「它說了兩個字。『殺了 Wrathy。』我不知道這個 Wrathy 是誰，也不知道為什麼虎獅獸要我殺了他。但我知道現在每當我看到夜空中移動的光芒時，我就會感到很擔心。」");
	say();
	UI_remove_answer("說話");
	UI_add_answer("殺了 Wrathy");
labelFunc043D_0252:
	case "鋤頭" attend labelFunc043D_026C:
	message("「我相信你一定知道那場折磨了世界上所有法師的瘋狂瘟疫。幾年前，我把我弄壞的鋤頭帶給一個叫 Mumb 的法師。修東西是他唯一還擅長的事。那時還有個戰士想要 Mumb 附魔他的劍，把它變成『死亡之劍』。看來可憐的 Mumb 搞混了，那個戰士回來殺了他，因為那個人最後拿到了一把只能用來除草的劍。我一直搞不清楚到底發生了什麼事。看來老 Mumb 把我的鋤頭變成了毀滅之鋤！不幸的是，這把鋤頭不見了。」");
	say();
	UI_remove_answer("鋤頭");
	UI_add_answer("不見了");
labelFunc043D_026C:
	case "不見了" attend labelFunc043D_027F:
	message("「嗯，也不是真的不見了。它被鎖在我的棚子裡。不見的是棚子的鑰匙！我想我可能在 Lock Lake 岸邊釣魚時不小心把它當成魚鉤用了。所以現在我進不去我的棚子了。人家還真會以為我是個瘋子呢！」");
	say();
	UI_remove_answer("不見了");
labelFunc043D_027F:
	case "殺了 Wrathy" attend labelFunc043D_0296:
	message("「我相當肯定是那樣，或類似的話。不管怎樣，那隻虎獅獸本身嚐起來相當美味。」");
	say();
	gflags[0x0095] = true;
	UI_remove_answer("殺了 Wrathy");
labelFunc043D_0296:
	case "職業" attend labelFunc043D_02C4:
	message("「我需要有人來幫我工作，幫忙收集雞下的所有蛋！當那個巨大的東西墜毀時，牠們都嚇壞了，所以牠們停不下來一直下蛋！你願意為我工作嗎？每顆雞蛋我付你 1 枚金幣。」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc043D_02B9;
	message("「很好！你會在後面找到那些雞。你必須在雞窩裡摸索才能找到那裡的雞蛋。當然，牠們一天能產的數量是有限的。」");
	say();
	gflags[0x00CF] = true;
	goto labelFunc043D_02BD;
labelFunc043D_02B9:
	message("「如果你改變主意再問我吧。」");
	say();
labelFunc043D_02BD:
	UI_remove_answer("職業");
labelFunc043D_02C4:
	case "撿雞蛋" attend labelFunc043D_02D6:
	Func08B8();
	UI_remove_answer("撿雞蛋");
labelFunc043D_02D6:
	case "告辭" attend labelFunc043D_02E1:
	goto labelFunc043D_02E4;
labelFunc043D_02E1:
	goto labelFunc043D_0058;
labelFunc043D_02E4:
	endconv;
	message("「感謝你的體面與體貼。」");
	say();
labelFunc043D_02E9:
	if (!(event == 0x0000)) goto labelFunc043D_02F7;
	Func092E(0xFFC3);
labelFunc043D_02F7:
	return;
}


