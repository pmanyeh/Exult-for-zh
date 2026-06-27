#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func04EF object#(0x4EF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc04EF_0009;
	abort;
labelFunc04EF_0009:
	UI_show_npc_face(0xFF11, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF0D);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func08F7(0xFFFC);
	if (!(!gflags[0x02BC])) goto labelFunc04EF_004F;
	message("在你面前的是個骨瘦如柴的男人，臉上帶著傻笑。他一手拿著燈籠，另一手拿著一把髒湯匙。");
	say();
	gflags[0x02BC] = true;
	goto labelFunc04EF_0053;
labelFunc04EF_004F:
	message("「又見面了，」 Owings 說。他微笑著對你脫下他的礦工帽致意。");
	say();
labelFunc04EF_0053:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc04EF_0063:
	converse attend labelFunc04EF_02D3;
	case "姓名" attend labelFunc04EF_0091:
	message("「我的名字是 Owings ，」他說著，迅速上下握了握你的手。「很高興認識你。」");
	say();
	if (!var0001) goto labelFunc04EF_008A;
	if (!(!gflags[0x02BD])) goto labelFunc04EF_0086;
	message("「我的夥伴名叫 Malloy 。」");
	say();
	goto labelFunc04EF_008A;
labelFunc04EF_0086:
	message("「你已經認識我的夥伴 Malloy 了。」");
	say();
labelFunc04EF_008A:
	UI_remove_answer("姓名");
labelFunc04EF_0091:
	case "職業" attend labelFunc04EF_0111:
	if (!var0001) goto labelFunc04EF_010D;
	message("「我做他做的事。」 Owings 用拇指向旁邊正在挖掘的 Malloy 比了比。那個胖男人正試圖只用一把湯匙鑿穿岩壁。 Owings 的拇指戳到了他的背。");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 看向你，在他站起來時給了你一個友善的揮手。就在他這麼做的時候，他撞到了頭。發出一聲響亮的敲擊聲。他非常大聲地說：「喔喔喔喔喔喔！」他的叫聲在整個礦坑中迴盪。你可以感覺到天花板裂縫中掉落的灰塵落在你的肩膀上。*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 突然看起來非常緊張，將雙臂抱住頭。一陣可怕的隆隆聲響起，你感覺腳下的地面開始震動。片刻後震動平息了。他們兩人都顯得非常鬆了口氣。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 一手扶著瘀傷的頭，另一手在地上摸索。他終於找到並撿起一頂金屬礦工安全帽。他小心翼翼地把它戴在頭上，這似乎仍然讓他感到疼痛。你可以看到 Malloy 的頭頂勉強塞得進去。*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("「讓我重新說一遍。我做他做的事，除了一點，我總是戴著我的安全帽。」話音剛落， Owings 用力點頭，上下晃動他的頭。這導致他的安全帽掉下來遮住他的眼睛。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 看了看你又看了看 Owings ，對你們兩個做了一個難以置信的撅嘴鬼臉。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_add_answer(["震動", "安全帽", "眼睛"]);
	goto labelFunc04EF_0111;
labelFunc04EF_010D:
	message("「通常我都在挖掘，但最近我似乎找不到我的夥伴 Malloy 。所以我想我的工作就是找他。不知道他去哪了？」");
	say();
labelFunc04EF_0111:
	case "震動" attend labelFunc04EF_016A:
	message("Owings 把手搭在你的肩膀上，將手指放在嘴唇上。「噓！安靜點！這是一條舊隧道。工頭 Mikos 說，任何突然的巨響都可能引發崩塌！」*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 回到挖掘工作中。工作的勞累導致他的安全帽掉下來。他嘆口氣，撿起來戴上，然後繼續工作。幾乎立刻它又掉下來了。他重新戴上。它掉下來。他重新戴上。 Malloy 咕噥並嘆氣。它掉下來。他沮喪地重新戴上。這事反覆發生了好幾次，看著都讓人覺得痛苦。最後， Malloy 乾脆讓安全帽躺在那裡並發起脾氣。他顫抖著咬住自己的手，以防在挫折中哭喊出來。*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 走到 Malloy 面前，將手指放在嘴唇上。「噓！」 Owings 低頭看到 Malloy 的安全帽掉在地上。「你不記得 Mikos 告訴過你總是戴著安全帽嗎？」他說。 Owings 撿起它並拍掉灰塵。他把它壓在 Malloy 痠痛的頭上，痛得 Malloy 皺起了臉。「不用謝我！」 Owings 說。話音剛落，他上下點頭，導致他安全帽的前緣掉下來遮住了眼睛。他盲目地伸出雙臂。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 看了看 Owings 又看了看你，對你們兩個做了一個撅嘴的鬼臉。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	gflags[0x02D8] = true;
	UI_remove_answer("震動");
	UI_add_answer("眼睛");
labelFunc04EF_016A:
	case "眼睛" attend labelFunc04EF_01A9:
	message("你伸手把 Owings 的安全帽往後推，這樣它就不再遮住他的眼睛了。他感激地對你微笑。他拿下安全帽抓了抓頭頂。他重新戴上，它立刻又傾斜下來遮住他的眼睛。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 看著這一切，得意地笑著並慢慢搖頭。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer("眼睛");
	if (!gflags[0x02D8]) goto labelFunc04EF_01A9;
	UI_add_answer("Owings 的安全帽");
labelFunc04EF_01A9:
	case "安全帽" attend labelFunc04EF_01DB:
	message("「這個礦坑的工頭 Mikos 告訴我們要一直戴著安全帽。這非常重要。我們倆甚至送了一頂礦工安全帽給不列顛王。一個穿得像聖者的滑稽男人告訴我們，不列顛王曾經被掉落的物體砸到頭——兩次！所以我們寄了一頂安全帽給他。」*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("看來 Malloy 再也無法忍受被排除在對話之外了。「送安全帽給不列顛王是『我』的主意，」他驕傲地說。「雖然我們還沒收到他的回覆，但我確定他會找到方法感謝我們的。」 Malloy 的安全帽掉了下來，他在那裡站了很久才恢復鎮定把它撿起來。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer("安全帽");
labelFunc04EF_01DB:
	case "Owings 的安全帽" attend labelFunc04EF_0228:
	message("「你真是個好人，幫我修好我的安全帽，」 Owings 說，給你一個燦爛的笑容。");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("你看到 Malloy 非常懷疑地看著 Owings 的安全帽。「你戴著我的帽子！」他發出低吼的「哼！」並一把抓下 Owings 頭上的安全帽。 Malloy 摘下自己的安全帽，隨意丟在地上。然後他戴上 Owings 的安全帽。這對他來說非常合適。 Malloy 對你們兩人露出一個高傲的燦爛笑容。他簡短地點了點頭，轉身回去工作。*");
	say();
	UI_show_npc_face(0xFF11, 0x0000);
	message("Owings 看了看 Malloy 又看回你。他非常困惑。「這可不太好， Malloy ！你拿了我的帽子！」 Owings 皺起眉頭。他的下唇開始顫抖。");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer(["Owings 的安全帽", "眼睛"]);
	UI_add_answer("我的帽子");
labelFunc04EF_0228:
	case "我的帽子" attend labelFunc04EF_0288:
	message("Owings 伸出手，非常小心地把 Malloy 頭上的礦工安全帽拿下來，以至於他都沒發現。 Owings 帶著勝利的竊笑把安全帽戴回自己頭上。他指著帽子，拍了拍 Malloy 的背讓他知道自己做了什麼。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 停止挖掘並站起來。就在他這麼做的時候，他的頭撞到了天花板。再次發出了響亮的敲擊聲。 Malloy 說：「喔喔喔！」搖搖頭讓自己清醒後，他慢慢地走向 Owings 。他非常生氣——氣到沒發現他踩進了另一頂安全帽裡，且它卡在他的腳上。他拿起湯匙往 Owings 的鼻子上敲下去。*");
	say();
	UI_play_sound_effect(0x0053);
	gflags[0x02D9] = true;
	UI_show_npc_face(0xFF11, 0x0000);
	message("被打中鼻子後， Owings 猛地往後仰，導致他的安全帽掉下來。「喔！我的安全帽！」他哭喊道。*");
	say();
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 氣到再也無法克制自己。「那不是你的安全帽！那是我的安全帽！」他大喊。這在礦坑裡引起了雷鳴般的回音。你可以感覺到一陣落塵和岩石。伴隨著低沉的隆隆聲和不祥的地面震動。 Owings 和 Malloy 嚇壞了，在恐慌中他們直接撞在了一起。 Malloy 的腳——那隻卡著安全帽的腳——滑了出去，讓他一屁股跌坐在地上。兩人都抱住頭，等待著大規模崩塌的到來。*");
	say();
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer("我的帽子");
	UI_add_answer("崩塌");
labelFunc04EF_0288:
	case "崩塌" attend labelFunc04EF_02C5:
	message("經過片刻恐懼的預期，震動平息了。隧道依然屹立不搖，絲毫未損。「我以為我死定了！」 Owings 說。話音剛落，一塊大石頭從天花板掉下來，正中 Owings 的頭。發出了一聲響亮的敲擊聲。 Owings 開始像個小孩一樣撅起嘴大哭起來。");
	say();
	UI_play_sound_effect(0x0053);
	UI_show_npc_face(0xFF0D, 0x0000);
	message("Malloy 指著 Owings 笑到眼淚流下來。 Malloy 抬頭看了看天花板，開始四處摸索他的安全帽。最後，他在自己身下摸索著，抽出了他的安全帽，他剛才就跌坐在它上面！看著那頂帽子， Malloy 發現他龐大的身軀已經把它壓扁了。它毀了。他還是戴上了它，看起來滑稽極了，而他歡笑的眼淚變成了悲傷的眼淚。現在，兩人都陷入了孩子般的嚎啕大哭中。 Malloy 看著 Owings 說：「這又是你給我們惹的一個爛攤子！」*");
	say();
	gflags[0x02DA] = true;
	UI_remove_npc_face(0xFF0D);
	UI_show_npc_face(0xFF11, 0x0000);
	UI_remove_answer("崩塌");
labelFunc04EF_02C5:
	case "告辭" attend labelFunc04EF_02D0:
	goto labelFunc04EF_02D3;
labelFunc04EF_02D0:
	goto labelFunc04EF_0063;
labelFunc04EF_02D3:
	endconv;
	if (!var0001) goto labelFunc04EF_02E1;
	message("Owings 和 Malloy 兩人都無法停止哭泣，揮手道別。*");
	say();
	goto labelFunc04EF_02EB;
labelFunc04EF_02E1:
	message("「祝你日安，");
	message(var0000);
	message("。」*");
	say();
labelFunc04EF_02EB:
	return;
}


