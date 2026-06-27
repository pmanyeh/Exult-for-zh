#game "blackgate"
// externs
extern void Func0710 object#(0x710) ();
extern var Func0908 0x908 ();

void Func031D shape#(0x31D) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x002D)) goto labelFunc031D_0017;
	item->Func0710();
	return;
labelFunc031D_0017:
	UI_play_sound_effect2(0x000E, item);
	UI_book_mode(item);
	if (!(var0000 > 0x0033)) goto labelFunc031D_0035;
	message("這不是一張有效的卷軸");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0035:
	if (!(var0000 == 0x0000)) goto labelFunc031D_0046;
	message("來自不列顛王的辦公桌");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0046:
	if (!(var0000 == 0x0001)) goto labelFunc031D_008B;
	message("如何讓聖者為了尋找線索而忙上好幾個小時——");
	say();
	message("（請往下捲動）*");
	say();
	message("如何讓聖者為了尋找線索而非常忙碌好幾個小時——");
	say();
	message("（請往下捲動）*");
	say();
	message("如何讓聖者為了尋找線索而非常非常忙碌好幾個小時——");
	say();
	message("（請往下捲動）*");
	say();
	message("如何讓聖者為了尋找線索而非常非常「非常」忙碌好幾個小時——");
	say();
	message("（請往下捲動）*");
	say();
	message("如何讓聖者為了尋找線索而非常非常「非常」難以置信地忙碌好幾個小時——");
	say();
	message("（請往下捲動）*");
	say();
	message("如何讓聖者為了尋找線索而非常非常絕對難以置信地忙碌好幾個小時——");
	say();
	message("（請往下捲動）*");
	say();
	message("當你不那麼忙的時候，你應該去 Minoc 找吉普賽人 Margareta 算算命！");
	say();
	message("署名 - Chuckles");
	say();
	goto labelFunc031D_0487;
labelFunc031D_008B:
	if (!(var0000 == 0x0002)) goto labelFunc031D_009C;
	message("保持不列顛尼亞乾淨 —— 把石像鬼送回去！ ~~ ~~ ~~ 贊助者：不列顛尼亞純潔聯盟");
	say();
	goto labelFunc031D_0487;
labelFunc031D_009C:
	if (!(var0000 == 0x0003)) goto labelFunc031D_00BA;
	if (!gflags[0x012B]) goto labelFunc031D_00B3;
	message("你將不能再砍伐銀葉樹。希望能得到你的配合。謝謝你，樵夫。~~Salamon~~ ~~伐木工 Ben");
	say();
	goto labelFunc031D_00B7;
labelFunc031D_00B3:
	message("你將不能再砍伐銀葉樹。希望能得到你的配合。謝謝你，樵夫。~~Salamon");
	say();
labelFunc031D_00B7:
	goto labelFunc031D_0487;
labelFunc031D_00BA:
	if (!(var0000 == 0x0004)) goto labelFunc031D_00CF;
	message("Lock Lake 排放廢棄物之懲罰法案~~78934979.S3，第 835 條~~");
	say();
	message("違規一方的成員將被浸泡在名為 Lock Lake 的湖中，水深及頸，連續浸泡不超過三天且不少於...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_00CF:
	if (!(var0000 == 0x0005)) goto labelFunc031D_00E0;
	message("「你已收到付款。今晚交貨。」");
	say();
	goto labelFunc031D_0487;
labelFunc031D_00E0:
	if (!(var0000 == 0x0006)) goto labelFunc031D_00F1;
	message("一旦建造完成，將黑石存放在『皇冠寶石號 (The Crown Jewel)』的船艙裡。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_00F1:
	if (!(var0000 == 0x0007)) goto labelFunc031D_0127;
	var0001 = Func0908();
	message("Finster -不列顛城(x)");
	say();
	message("Duncan - 海盜巢穴 (Buccaneer's Den)(x)");
	say();
	message("Christopher - Trinsic (x)");
	say();
	message("Frederico - Minoc (x)");
	say();
	message("Tania - Minoc (x)");
	say();
	message("Alagner - New Magincia  (x)");
	say();
	message("不列顛王-不列顛城( )");
	say();
	message(var0001);
	message("，聖者 - ( )");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0127:
	if (!(var0000 == 0x0008)) goto labelFunc031D_0138;
	message("石座的高度應為四英尺，寬三英尺，深兩英尺。在三個石座上分別放置三個容器：四面體、球體和立方體。~~所有這些傳送門防禦機制的物品都已經由 Trinsic 的鐵匠打造完畢。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0138:
	if (!(var0000 == 0x0009)) goto labelFunc031D_0149;
	message("皇冠寶石號 (The Crown Jewel)~~明天日出 - 啟航前往聖者之島 (Isle of the Avatar)！");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0149:
	if (!(var0000 == 0x000A)) goto labelFunc031D_015E;
	gflags[0x023F] = true;
	message("告訴你這些炸藥的數量足以摧毀祭壇。這是為了提醒你需要保持沉默，以及這能幫你免除的懲罰。~~--Runeb");
	say();
	goto labelFunc031D_0487;
labelFunc031D_015E:
	if (!(var0000 == 0x000B)) goto labelFunc031D_016F;
	message("獨角鯨號 (Narwha) 將會是一艘極其完美的船艦，從船首到船艉足足有 100 腕尺長。她將由最頂級的紫杉木打造，並配有三十七 腕尺的壓艙物。在船板進行逆向退化工程後，我會對底層甲板進行預先相互反轉，以確保它們的冗長與多話。～每張床鋪都將精準地容納在 3 英尺乘以 14 腕尺的船艙內，除了大副和中士的寢室，那裡的尺寸會是八角形的……～～ ～～米諾克的歐文");
	say();
	goto labelFunc031D_0487;
labelFunc031D_016F:
	if (!(var0000 == 0x000C)) goto labelFunc031D_0188;
	message("不列顛尼亞稅務委員會");
	say();
	message("稅務申報單");
	say();
	message("為確保爾之進項與支度皆能妥善登帳，首要之事，須將表格中編號 37-A 至 1204-W 之卷宗一式三份予以複製。於每份副本之後，彙編支出之總額，並乘以表3、表69、表106。下一步則涉及……");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0188:
	if (!(var0000 == 0x000D)) goto labelFunc031D_0199;
	message("首先你需要將金屬裝滿坩堝。然後，使用風箱將火燒得越旺越好。當火焰不再發光時，你就可以準備將坩堝放在火上熔化金屬了。~~ 然後，將熔化的金屬倒入刀刃模具中並讓其冷卻。警告！坩堝的溫度極高。小心不要燙傷自己。~~ 用夾子將冷卻的刀刃從模具中取出。再次將火加熱，並將刀刃放入其中。不過要注意不要讓它變形。只要把它放在那裡足夠長的時間使其變得有延展性即可。~~ 準備好後，將其拿到鐵砧上，用錘子完成塑形。當你得到理想的刀刃後，找到淬火桶，將劍浸入冷水中。它會很快變硬。~~ 現在你所需要做的就是把劍首套在劍根上。要打造一把精良、堅固的劍需要花費一些功夫，但完成的武器絕對物超所值！");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0199:
	if (!(var0000 == 0x000E)) goto labelFunc031D_01AE;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：The Scaly Eel~~完工日期：7-21-0355~~ 檢查日期：8-2-0355~~造船匠：Trinsic 的 Gargan");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01AE:
	if (!(var0000 == 0x000F)) goto labelFunc031D_01C3;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：The Beast~~完工日期：3-12-0358~~ 檢查日期：3-19-0358~~造船匠：不列顛城的 Clint");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01C3:
	if (!(var0000 == 0x0010)) goto labelFunc031D_01D8;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：The Excellencia~~完工日期：~~ 檢查日期：~~造船匠：Minoc 的 Owen");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01D8:
	if (!(var0000 == 0x0011)) goto labelFunc031D_01ED;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：The Nymphet~~完工日期：12-22-0357~~ 檢查日期：1-3-0358~~造船匠：New Magincia 的 Russell");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01ED:
	if (!(var0000 == 0x0012)) goto labelFunc031D_0202;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：The Lusty Wench~~完工日期：6-14-0327~~ 檢查日期：6-24-0359~~造船匠：Moonglow 的 Kethron");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0202:
	if (!(var0000 == 0x0013)) goto labelFunc031D_0217;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：The Dragon's Breath~~完工日期：5-18-0342~~ 檢查日期：5-23-0342~~造船匠：不列顛城的 Rohden");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0217:
	if (!(var0000 == 0x0014)) goto labelFunc031D_0228;
	message("       ZARA的舞蹈~為魯特琴而作。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0228:
	if (!(var0000 == 0x0015)) goto labelFunc031D_0239;
	message("       起風之夜~為豎琴而作。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0239:
	if (!(var0000 == 0x0016)) goto labelFunc031D_024A;
	message("       野獸的其中之一~為大鍵琴而作。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_024A:
	if (!(var0000 == 0x0017)) goto labelFunc031D_025B;
	message("       春之火~為木琴而作。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_025B:
	if (!(var0000 == 0x0018)) goto labelFunc031D_0270;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：~~完工日期：~~檢查日期：~~ 造船匠：");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0270:
	if (!(var0000 == 0x0019)) goto labelFunc031D_0281;
	message("水下打撈與板球運動法案~~23568976.Y7，第 069 條~~其中，屬於第一方第一團隊的參與者，亦可於碼頭周圍兩百三十九英尺的範圍內進行額外的尋寶活動。~~其中，屬於第二方第二團隊的參與者可隨之進行，條件是在距離第一方第一團隊七點五英尺的範圍內不得使用手帕。~~茲聲明第一方第二團隊不得牽涉外部...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0281:
	if (!(var0000 == 0x001A)) goto labelFunc031D_0292;
	message("   G.J.的素描本");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0292:
	if (!(var0000 == 0x001B)) goto labelFunc031D_02A3;
	message("~~在這些石柱之間，這座石座之上，曾經放置著終極智慧法典 (CODEX OF ULTIMATE WISDOM)。~~現在它位處虛空無盡的黑暗之中，永遠作為知識的燈塔，照耀著人類與石像鬼種族。~~那些尋求其中智慧的人，必須像兩百多年前的聖者一樣，將神祕的透鏡結合起來。~不列顛王~~透過控制、熱情和勤奮來尋找奇異點。~~Lord Draxinusom");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02A3:
	if (!(var0000 == 0x001C)) goto labelFunc031D_02B4;
	message("~     馬匹與馬車所有權~~此狀授予持有人對馬車及其配屬馬匹 Fletcher 的所有權及使用權。非對上述馬車與馬匹擁有完全所有權者濫用此狀，將根據不列顛尼亞稅務委員會執行的《私人貨物與牲畜所有權法》第 7890.3D5 條予以處罰。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02B4:
	if (!(var0000 == 0x001D)) goto labelFunc031D_02C5;
	message("~     馬匹與馬車所有權~~此狀授予持有人對馬車及其配屬馬匹 Brikabrak 的所有權及使用權。非對上述馬車與馬匹擁有完全所有權者濫用此狀，將根據不列顛尼亞稅務委員會執行的《私人貨物與牲畜所有權法》第 7890.3D5 條予以處罰。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02C5:
	if (!(var0000 == 0x001E)) goto labelFunc031D_02DA;
	message("室內動物飼養法案~~89634510.P4，第 402 條~~");
	say();
	message("其中，允許屬於擁有方的參與者將動物及照顧該動物之相關物品存放於室內，前提是...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02DA:
	if (!(var0000 == 0x001F)) goto labelFunc031D_02EF;
	message("馬車建造法案 ~~48382745.F3，第 058 條~~");
	say();
	message("其中，木匠與金屬工匠可跨越技能領域，無需公會干預，受以下原則限制...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02EF:
	if (!(var0000 == 0x0020)) goto labelFunc031D_0304;
	message("花崗岩分區附近之小屋建築法案~~ 48923013.Q4，第 193 條~~");
	say();
	message("其中，屬於石匠公會的參與者，可向在此由木匠公會成員代表的小屋建造者一方提出投訴，其意圖為...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0304:
	if (!(var0000 == 0x0021)) goto labelFunc031D_0319;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：Anne's Revenge~~完工日期：11-23-0198 ~~檢查日期：1-17-0199~~造船匠：New Magincia 的 Alluria");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0319:
	if (!(var0000 == 0x0022)) goto labelFunc031D_032E;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：Golden Hinde~~完工日期：7-08-0105 ~~檢查日期：7-12-0105~~造船匠：Trinsic 的 Gendra");
	say();
	goto labelFunc031D_0487;
labelFunc031D_032E:
	if (!(var0000 == 0x0023)) goto labelFunc031D_0343;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：Bounty~~完工日期：5-27-0185 ~~檢查日期：6-04-0185~~造船匠：Minoc 的 Gibson");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0343:
	if (!(var0000 == 0x0024)) goto labelFunc031D_0360;
	var0001 = Func0908();
	message("最親愛的 Iolo，~     在海盜巢穴 (Buccaneer's Den)，我遇到了一位老海盜，他告訴我，他航行過不列顛尼亞海域的次數比我經歷過的夏天還要多。出於賭博的心態，我問他是否聽說過傳說中的巨蛇島 (Serpent Isle)。他聽過！而且他甚至還有一張標示著如何找到該島嶼的地圖。我買下了地圖，並已經開始了我的尋找之旅。不過，我留了一份副本，好讓你在完成目前的冒險後可以跟上我。我已將副本交給不列顛王，但他答應我，直到你與 ");
	message(var0001);
	message(" 完成探索之前，他不會把地圖交給你。~~     直到我們再次相見，我的愛人！~     Gwenno");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0360:
	if (!(var0000 == 0x0025)) goto labelFunc031D_0371;
	message("~~一切並非如其表面所見...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0371:
	if (!(var0000 == 0x0026)) goto labelFunc031D_0382;
	message("~     馬匹與馬車所有權~~此狀授予持有人對馬車及其配屬馬匹 ____________ 的所有權及使用權。非對上述馬車與馬匹擁有完全所有權者濫用此狀，將根據不列顛尼亞稅務委員會執行的《私人貨物與牲畜所有權法》第 7890.3D5 條予以處罰。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0382:
	if (!(var0000 == 0x0027)) goto labelFunc031D_0393;
	message("~很好。我們同意在第七天的黎明攻擊不列顛王的城堡。~~Fransisa~Corwin~ Brax~Athelas");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0393:
	if (!(var0000 == 0x0028)) goto labelFunc031D_03B0;
	message("~     Selwyn 的遺囑：~~");
	say();
	message("     我在此將我的火末日法杖 (firedoom staff) 遺贈給任何足夠強大和狡猾，能夠突破我堡壘的防禦並殺死我寵物的人。~~");
	say();
	message("     願所有讀到這段話的人都在死亡中腐爛！~");
	say();
	message("          Selwyn");
	say();
	goto labelFunc031D_0487;
labelFunc031D_03B0:
	if (!(var0000 == 0x0029)) goto labelFunc031D_03C1;
	message("     『變革』(Change) 的王座將你拒之門外，但『美德』(Virtue) 將指引你前進！");
	say();
	goto labelFunc031D_0487;
labelFunc031D_03C1:
	if (!(var0000 == 0x002A)) goto labelFunc031D_03D3;
	message("     我在這裡待了多少天，我已經記不清了，但我沒有忘記進入這個已成為我墳墓的被遺棄的洞穴的那一天。那是 2-29-0227。但我的食物早就吃光了，老鼠似乎對吃我比讓我吃牠們更感興趣。我的力量已經消失了，我的意志也是。如果你找到這個，請告訴 Mythra 我愛她。");
	say();
	message("     --Denyel");
	say();
labelFunc031D_03D3:
	if (!(var0000 == 0x002B)) goto labelFunc031D_03EC;
	message("~不列顛王的最終遺囑與聲明：~~");
	say();
	message("     在我身心健康之際，我在此將我所有的財產遺贈給... Nell，我心愛的女僕。她陪伴我度過了許多溫暖的夜晚，這是我對多數我那群該死臣民無法言喻的！而對於我們未出生的孩子，我將我的王冠遺贈給他/她。國王萬歲。或是女王，不管是哪個！~~");
	say();
	message("不列顛王");
	say();
	goto labelFunc031D_0487;
labelFunc031D_03EC:
	if (!(var0000 == 0x002C)) goto labelFunc031D_0401;
	message("奉不列顛王詔令，此為官方文件，表明對文件中，所記載之帆船的所有權。根據第 1989832.A5 號法律第 809 條，禁止偽造此所有權狀。");
	say();
	message("     船契~~船名：Golden Ankh~~完工日期：3-8-0338~~ 檢查日期：3-18-0338~~造船匠：不列顛城的 Clint");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0401:
	if (!(var0000 == 0x002D)) goto labelFunc031D_0412;
	item->Func0710();
	goto labelFunc031D_0487;
labelFunc031D_0412:
	if (!(var0000 == 0x002F)) goto labelFunc031D_0437;
	message("第 1 天：我繞過了活雕像，穿過了大門。儘管乘了很長時間的船，我並沒有感到虛弱。我猜想探險的興奮感給了我力量。我很快就會休息了。");
	say();
	message("第 2 天：在那個大房間裡，我在標記著「X」的地方遇到了閃電。非常聰明的一招——預測到我不會信任那個標記。我不會再這麼愚蠢了。");
	say();
	message("第 3 天：我找到了一個寬闊的房間，在裡面我可以完全看清它所有的內容物。然而，卻有無形的障礙物阻止我進入。");
	say();
	message("第 4 天：這些障礙物並不是我最初所懷疑的那樣。它們是牆壁。我看得到出口，卻無法抵達。這太令人抓狂了！");
	say();
	message("第 5 天：我真希望我帶了更多的口糧。我沒想到會被困成這樣。如果我找不到出路... 以及食物和水，我很快就會餓死！");
	say();
	message("第 天：我還是沒有食物和水（鯨魚？）... 我看到了卻無法... 會有幫助及時抵達嗎！？我在思考但我很深思熟慮...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0437:
	if (!(var0000 == 0x0030)) goto labelFunc031D_0448;
	message("... 我在這個鬼地方待的幾個星期已經多到我不想去記——就算我試圖去記，我也記不清了。我看到了太多欺騙和虛假的事情。我不禁懷疑這個隧道迷宮要如何展現『真理』。有一件事我敢說我學到了，雖然我不知道我還能和誰分享它：我不是聖者。我用我最後的呼吸祝願那個能真正宣稱擁有聖者頭銜的『他』... 或『她』... 好運。當我躺在這裡奄奄一息時，我只對發現者提出一個請求：好好記住我的掙扎...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0448:
	if (!(var0000 == 0x0031)) goto labelFunc031D_045D;
	message("... 我帶著僅存的一絲希望寫下這些。Frenke 已經死了——被射出的火球殺死。我將嘗試獨自穿越這條危險的火之隧道。如果我的探險成功，我將成為聖者。我不再回想我的另一個命運...");
	say();
	message("     這將是我的最後一篇日記。我的墨水幾乎用光了，就像我的意志一樣。我不再驚訝一個人怎麼會放棄，就像我們在隱形迷宮盡頭找到的那個可憐傻瓜一樣。但我拒絕屈服於我疲憊身軀的呼喚。我會繼續跋涉。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_045D:
	if (!(var0000 == 0x0032)) goto labelFunc031D_046E;
	message("       無限卷軸 (SCROLL OF INFINITY)~~ 神器 無限護身符 (TalismanOfInfinity) -~ 如果 實相 (Reality) 為 魔法 (Magic) -~ 如果 區域 (Locale)(神器) 為 虛空 (Void) -~ 凸透鏡 (Convex) 為 在不列顛尼亞尋找(凸透鏡)~ 凹透鏡 (Concave) 為 在不列顛尼亞尋找(凹透鏡)~ ~ 如果 執行光線測試 (凹透鏡，凸透鏡) -~ 護身符清單 為不列顛尼亞搜尋(護身符)~ ~~ 計數器 為 0~ 對於 護身符清單 中的每個護身符 -~ 如果 知道類型(護身符) 為 真理 (Truth) -~ 計數器 為 計數器 與 1~ --~ 如果 知道類型(護身符) 為 愛 (Love) -~ 計數器 為 計數器 與 1~ --~ 如果 知道類型(護身符) 為 勇氣 (Courage) -~ 計數器 為 計數器 與 1~ --~ ~ 如果 計數器 為 3 -~ 執行虛空存取()~ ~~ 無限行動 為 行動(實例,~ 位面旅行，不列顛尼亞,~ 回呼，無限護身符)~ --~ 如果 實相 為 偽科學 (PseudoScience) -~ 邪惡實體 為 實體搜尋(全部，強大，邪惡)~ 如果 邪惡實體 -~ 檢查 為 推動實相(邪惡實體)~ 如果 未 檢查 -~ 測試(「你絕對看不到這個！」)");
	say();
	goto labelFunc031D_0487;
labelFunc031D_046E:
	if (!(var0000 == 0x0033)) goto labelFunc031D_0487;
	message("Erethian 的日記：~~");
	say();
	message("第一篇：");
	say();
	message("     也許有一天我會有時間和意願在這張羊皮紙上寫字，但現在我還不想。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0487:
	return;
}


