#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func04F3 object#(0x4F3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0000)) goto labelFunc04F3_0009;
	abort;
labelFunc04F3_0009:
	UI_show_npc_face(0xFF0D, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF11);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func08F7(0xFFFC);
	if (!(!gflags[0x02BD])) goto labelFunc04F3_004F;
	message("你看到面前站著一個矮胖的男人，臉上帶著自命不凡的傻笑。他一手拿著燈籠，另一手拿著一把髒湯匙。");
	say();
	gflags[0x02BD] = true;
	goto labelFunc04F3_0053;
labelFunc04F3_004F:
	message("「你好，好朋友，」Malloy 說。「很高興再次見到你。」");
	say();
labelFunc04F3_0053:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x02D9]) goto labelFunc04F3_0070;
	UI_add_answer("腳上的頭盔");
labelFunc04F3_0070:
	converse attend labelFunc04F3_02C3;
	case "姓名" attend labelFunc04F3_00CF:
	if (!(!gflags[0x02DA])) goto labelFunc04F3_00C4;
	message("「我的名字是 Malloy。很高興認識你。」Malloy 禮貌地鞠了一躬。");
	say();
	if (!var0001) goto labelFunc04F3_00C1;
	if (!(!gflags[0x02BC])) goto labelFunc04F3_009A;
	message("Malloy 臉上帶著惱怒的冷笑。「那邊我的搭檔是 Owings，」他指著在旁邊拼命挖土的瘦小男人說。「你的禮貌呢？！跟我們的訪客打聲招呼！」");
	say();
	goto labelFunc04F3_009E;
labelFunc04F3_009A:
	message("「你已經認識我那邊的搭檔了，」他指著 Owings 說。");
	say();
labelFunc04F3_009E:
	UI_show_npc_face(0xFF11, 0x0000);
	message("「你好啊！」Owings 說，給了你一個大大的微笑。他採礦頭盔的前緣掉了下來，遮住了他的眼睛。看不見的他，在周圍的空氣中摸索著。*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 悲傷地搖了搖頭。*");
	say();
labelFunc04F3_00C1:
	goto labelFunc04F3_00C8;
labelFunc04F3_00C4:
	message("Malloy 恢復了鎮定。「你好，我是 Malloy。我為我搭檔幼稚的滑稽舉動道歉。」");
	say();
labelFunc04F3_00C8:
	UI_remove_answer("姓名");
labelFunc04F3_00CF:
	case "職業" attend labelFunc04F3_0122:
	if (!(!var0001)) goto labelFunc04F3_00E5;
	message("「通常我的工作是挖土，但既然我的搭檔 Owings 似乎不見了，我想我的工作就是尋找他。我希望那個小傢伙沒出什麼事。」");
	say();
	goto labelFunc04F3_0115;
labelFunc04F3_00E5:
	message("「Owings 和我正在擔任採礦工程師，這是我們最近有幸獲得的職位。我們正在為不列顛尼亞礦業公司進行一項特別專案。」*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	if (!gflags[0x02DA]) goto labelFunc04F3_0100;
	message("Owings 用力地點點頭，把頭向後仰，然後猛地低下。「完全正確，Malloy。」*");
	say();
	goto labelFunc04F3_0104;
labelFunc04F3_0100:
	message("「完全正確，Malloy，」Owings 說。他用力地點點頭，導致他的頭盔掉了下來，遮住了眼睛。*");
	say();
labelFunc04F3_0104:
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
labelFunc04F3_0115:
	UI_add_answer(["採礦工程師", "特別專案"]);
labelFunc04F3_0122:
	case "採礦工程師" attend labelFunc04F3_0188:
	message("「我和搭檔並不完全是採礦工程師，雖然我們確實去了 Minoc 成為礦工。我們帶著一張地圖來到這裡……」*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("「就是那個打扮得像聖者的滑稽男人賣給我們的地圖！」*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("「沒錯。但當我們到了這裡，我們發現不列顛尼亞礦業公司已經擁有這片土地的權利了！」*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("「那個打扮得像聖者的滑稽男人對我們撒謊了。」Owings 若有所思地抓了抓頭。「不列顛尼亞礦業公司想把我們關進 Yew 的監獄，因為我們侵占了礦區！」*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("「我成功說服了他們，如果我們能來為他們工作，我們對不列顛尼亞礦業公司會更有價值。」Malloy 自豪地笑著。*");
	say();
	UI_remove_answer("採礦工程師");
	UI_add_answer(["地圖", "滑稽男人"]);
labelFunc04F3_0188:
	case "地圖" attend labelFunc04F3_019B:
	message("「我們為那張地圖付了將近一百枚金幣。它應該能通往一百多年前發現的貴重礦物地點。這是一筆極好的投資。這張地圖是件古董，但它看起來不超過幾年！你不是每天都能看到保存得那麼好的東西！」");
	say();
	UI_remove_answer("地圖");
labelFunc04F3_019B:
	case "滑稽男人" attend labelFunc04F3_01AE:
	message("「有人告訴我們他的名字。讓我想想我記不記得……我想是 Sullivan。對聖者來說是個滑稽的名字，但事實就是這樣！」");
	say();
	UI_remove_answer("滑稽男人");
labelFunc04F3_01AE:
	case "特別專案" attend labelFunc04F3_0228:
	message("「Owings 和我現在參與了一項非常重要的特別專案，但這是個秘密。我們能信任你嗎？」");
	say();
	var0005 = Func090A();
	if (!(!var0005)) goto labelFunc04F3_01ED;
	message("「既然如此，我感謝你的誠實。我其實不介意一個人不值得信任。但一個不值得信任還對此不誠實的人，那是我無法忍受的。」*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("你看到 Owings 最熱情地點著頭。一秒鐘後，他臉上露出了非常困惑的表情。*");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	goto labelFunc04F3_0228;
labelFunc04F3_01ED:
	message("「不列顛尼亞礦業公司要求我們挖一條通往 New Magincia 的隧道！這將徹底改變採礦業。」");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("「他們不想讓任何人知道這件事。他們說帶更多採礦設備來這裡只會讓人起疑，所以他們告訴我們一開始先用這些湯匙！」Owings 自豪地舉起他的湯匙給你看。他笑了。");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("「是的，這是一個非常特別的專案，他們告訴我們，我們是他們能想到的唯一會去嘗試做這種事的人！」Malloy 自豪地笑著。「好了，來吧，Owings，我們最好回去工作了。我們有進度要趕。」");
	say();
	UI_remove_answer("特別專案");
	UI_add_answer(["隧道", "進度"]);
labelFunc04F3_0228:
	case "隧道" attend labelFunc04F3_023B:
	message("Malloy 看著你，把一根手指放在唇邊。「噓！！！！我請你不要跟任何人提起這件事！」");
	say();
	UI_remove_answer("隧道");
labelFunc04F3_023B:
	case "進度" attend labelFunc04F3_0271:
	message("「Owings，看看那份進度表，看看我們做得怎麼樣了。」");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 彎下腰去撿一個非常大的卷軸。當他碰到卷軸的邊緣時，卷軸滾下了礦井。當它滾走時，它展開了，在後面留下一條長長的紙痕。Owings 追了上去，但他除了讓自己的雙腿纏在長長的紙卷裡之外，幾乎什麼也沒做成。當他終於拿到另一端時，那已經是一團無法閱讀的爛攤子了。");
	say();
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("「給我！」Malloy 說著，一把搶過一塊卷軸。他檢查了一會兒。「根據這個，我們將在……一百七十三年後完工！Owings，我們必須開始加快工作速度了！」兩個人又回去用他們的湯匙挖土。在他們挖土時，Malloy 轉向 Owings 說：『你又把我捲進了這樣一個大麻煩裡！』」");
	say();
	UI_remove_answer("進度");
labelFunc04F3_0271:
	case "腳上的頭盔" attend labelFunc04F3_02B5:
	message("Malloy 用腳踢，試圖弄掉卡在那裡的頭盔。他看著 Owings 噘著嘴說：「你為什麼不做點什麼來幫我？！」");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 抓住 Malloy 腳上的頭盔試圖把它弄掉。在幾次猛烈的拉扯後，它發出「啵」的一大聲脫落了。Owings 把頭盔直接拉到自己的臉上，這發出了「喀」的一大聲。");
	say();
	UI_play_sound_effect(0x0053);
	UI_remove_npc_face(0xFF11);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 往後猛摔，驚慌地大叫。他的後腦勺撞到了他後面的岩壁。他拿下他皺巴巴的頭盔並指著它。「還好我戴著這個，否則我可能會受傷！」這時，一塊鬆動的岩石從天花板上滾下來，正正地落在他的頭上。Malloy 說『喔喔喔喔喔！』Owings 突然咯咯地笑了起來。Malloy 對你做了一個難以置信、噘著嘴的鬼臉。");
	say();
	UI_play_sound_effect(0x000F);
	UI_remove_answer("腳上的頭盔");
labelFunc04F3_02B5:
	case "告辭" attend labelFunc04F3_02C0:
	goto labelFunc04F3_02C3;
labelFunc04F3_02C0:
	goto labelFunc04F3_0070;
labelFunc04F3_02C3:
	endconv;
	if (!var0001) goto labelFunc04F3_02D1;
	message("Malloy 和 Owings 都停下他們正在做的事，友善地向你揮手道別。*");
	say();
	goto labelFunc04F3_02DB;
labelFunc04F3_02D1:
	message("「祝你今天愉快，");
	message(var0000);
	message("。」*");
	say();
labelFunc04F3_02DB:
	return;
}


