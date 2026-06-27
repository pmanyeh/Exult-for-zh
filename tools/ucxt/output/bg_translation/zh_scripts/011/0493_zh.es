#game "blackgate"
// externs
extern void Func088B 0x88B ();
extern var Func0909 0x909 ();
extern void Func088A 0x88A ();

void Func0493 object#(0x493) ()
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

	if (!(event == 0x0001)) goto labelFunc0493_03F6;
	UI_show_npc_face(0xFF6D, 0x0000);
	var0000 = false;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(0xFF6D);
	if (!(!gflags[0x01BB])) goto labelFunc0493_0033;
	message("你看到一個幽靈般的男人蜷縮在角落裡。他以防禦的姿勢舉著生命護符，瘋狂地環顧房間，但沒有注意到你。*");
	say();
	abort;
labelFunc0493_0033:
	var0003 = UI_get_party_list();
	if (!(UI_get_npc_object(0xFF6D) in var0003)) goto labelFunc0493_0077;
	UI_add_answer("離開");
	var0004 = UI_find_nearby(0xFE9C, 0x02EC, 0x001E, 0x0000);
	if (!var0004) goto labelFunc0493_0072;
	message("他看著井裡那些被困靈魂旋轉的漩渦，他新建立的決心似乎減弱了。「也許這不是個好主意。你確定我必須這樣做嗎？」~~你點點頭。他的決心再次堅定起來。~~「是的，你說得很對。沒時間演講了。沒時間動搖意志了。沒時間……」他看到你並不買帳他試圖拖延的行為。~~「那麼，就是這樣了。」他走向井。「我想我生前並不是個很好的市長。」Forsythe 下垂的面頰垮了下來。~~「好吧，至少在死後，我會為自己留名，把事情做對。」說完，他消失了。~~井裡的靈魂衝出了他們的禁錮，留下了這件強大神器的焦黑殘骸。*");
	say();
	Func088B();
	goto labelFunc0493_0077;
labelFunc0493_0072:
	message("「你只要帶我到井邊，我就會履行我的職責。」他似乎對自己的命運相當順從。*");
	say();
	abort;
labelFunc0493_0077:
	var0005 = Func0909();
	if (!gflags[0x0198]) goto labelFunc0493_0136;
	UI_add_answer("犧牲");
	if (!gflags[0x0199]) goto labelFunc0493_012A;
	if (!gflags[0x019A]) goto labelFunc0493_011B;
	if (!gflags[0x019B]) goto labelFunc0493_010C;
	if (!gflags[0x019C]) goto labelFunc0493_00FD;
	if (!gflags[0x01A0]) goto labelFunc0493_00EE;
	if (!gflags[0x019E]) goto labelFunc0493_00DF;
	if (!gflags[0x019D]) goto labelFunc0493_00D0;
	if (!gflags[0x01A1]) goto labelFunc0493_00C1;
	gflags[0x01A2] = true;
	goto labelFunc0493_00CD;
labelFunc0493_00C1:
	var0006 = "Caine";
	var0007 = "Caine";
labelFunc0493_00CD:
	goto labelFunc0493_00DC;
labelFunc0493_00D0:
	var0006 = "Rowena";
	var0007 = "Rowena";
labelFunc0493_00DC:
	goto labelFunc0493_00EB;
labelFunc0493_00DF:
	var0006 = "Trent";
	var0007 = "Trent";
labelFunc0493_00EB:
	goto labelFunc0493_00FA;
labelFunc0493_00EE:
	var0006 = "Mordra 女士";
	var0007 = "Mordra 女士";
labelFunc0493_00FA:
	goto labelFunc0493_0109;
labelFunc0493_00FD:
	var0006 = "Quenton";
	var0007 = "Quenton";
labelFunc0493_0109:
	goto labelFunc0493_0118;
labelFunc0493_010C:
	var0006 = "酒館女侍 Paulette";
	var0007 = "Paulette";
labelFunc0493_0118:
	goto labelFunc0493_0127;
labelFunc0493_011B:
	var0006 = "烈酒桶的 Markham";
	var0007 = "Markham";
labelFunc0493_0127:
	goto labelFunc0493_0136;
labelFunc0493_012A:
	var0006 = "擺渡人";
	var0007 = "擺渡人";
labelFunc0493_0136:
	if (!(!gflags[0x01AA])) goto labelFunc0493_0171;
	if (!((var0001 == 0x0000) && (var0001 == 0x0001))) goto labelFunc0493_0171;
	if (!(var0002 == 0x000E)) goto labelFunc0493_0161;
	message("這個男人看起來異常放鬆，幾乎太放鬆了。他也忽略了你與他交談的嘗試。看來他無法控制自己的行動。*");
	say();
	abort;
	goto labelFunc0493_0171;
labelFunc0493_0161:
	if (!(!(var0002 == 0x000A))) goto labelFunc0493_0171;
	message("「不！退後！拜託，別管我！」市長看起來很害怕。看來你暫時必須放棄從他那裡得到任何有用的東西。*");
	say();
	abort;
labelFunc0493_0171:
	if (!(!gflags[0x01CC])) goto labelFunc0493_0197;
	if (!(!gflags[0x01AA])) goto labelFunc0493_0186;
	message("你看到一個中年幽靈蜷縮在這個被燒毀的房間角落裡。他從頭到腳都在發抖，當你靠近時，他跳了出來，在你面前揮舞著生命護符。~~「你不會抓到我的，邪惡的野獸！退後，我說退後！以美德之名，退後！」他慢慢注意到這除了讓你驚訝之外沒有任何效果，並更仔細地看著你的方向。他看了看你，又看了看牆上你的畫像。他來回看著，瞇著眼睛，直到他如釋重負地睜大了眼睛。~~「哦，謝謝你來了。 British 國王終於叫你來幫助我們了。」他顯然正遭受某種幻覺。「我是 Forsythe 市長。你覺得你需要很長時間才能打敗巫妖嗎？」");
	say();
	goto labelFunc0493_0190;
labelFunc0493_0186:
	message("「啊，你好，");
	message(var0005);
	message("。我能為你效勞嗎？」");
	say();
labelFunc0493_0190:
	gflags[0x01CC] = true;
	goto labelFunc0493_01C9;
labelFunc0493_0197:
	if (!gflags[0x01A2]) goto labelFunc0493_01AA;
	message("「你好，");
	message(var0005);
	message("。」市長敷衍地對你笑了笑。");
	say();
	goto labelFunc0493_01C9;
labelFunc0493_01AA:
	if (!gflags[0x01AA]) goto labelFunc0493_01B9;
	var0008 = "";
	goto labelFunc0493_01BF;
labelFunc0493_01B9:
	var0008 = "那個巫妖走了嗎？";
labelFunc0493_01BF:
	message("「啊，是的，善良的聖者。很高興再次見到你。");
	message(var0008);
	message("我能為像你這麼偉大的人提供什麼服務嗎？」他鞠躬。");
	say();
labelFunc0493_01C9:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x01AA])) goto labelFunc0493_01E7;
	UI_add_answer("巫妖 (Liche)");
labelFunc0493_01E7:
	converse attend labelFunc0493_03F5;
	case "姓名" attend labelFunc0493_01FD:
	message("「如我所說，我的名字是 Forsythe。」");
	say();
	UI_remove_answer("姓名");
labelFunc0493_01FD:
	case "職業" attend labelFunc0493_0216:
	message("他似乎對你的問題感到困惑。「我不是已經說過了嗎？我是市長。」");
	say();
	if (!gflags[0x017C]) goto labelFunc0493_0216;
	UI_add_answer("受折磨的人");
labelFunc0493_0216:
	case "巫妖 (Liche)" attend labelFunc0493_023E:
	message("「哎呀，是的，巫妖對我可憐的城鎮來說是一場可怕的災難。首先他透過喚醒死者趕走了所有的遊客。然後，在試圖阻止他的過程中，這座城鎮在一場可怕的大火中被摧毀。嗯，我想這嚴格來說不是他的錯，但是，嗯，必須對他做點什麼。」Forsythe 看起來有點慌亂。");
	say();
	UI_remove_answer("巫妖 (Liche)");
	UI_add_answer("他的錯");
	if (!(!var0000)) goto labelFunc0493_023E;
	UI_add_answer("大火");
labelFunc0493_023E:
	case "他的錯" attend labelFunc0493_0251:
	message("「嗯，鍊金術士才是引發那場大火的人！」");
	say();
	UI_remove_answer("他的錯");
labelFunc0493_0251:
	case "受折磨的人" attend labelFunc0493_0272:
	message("「我們都這樣叫 Caine 。他就是製造那場大火的鍊金術士。」");
	say();
	if (!(!var0000)) goto labelFunc0493_026B;
	UI_add_answer("大火");
labelFunc0493_026B:
	UI_remove_answer("受折磨的人");
labelFunc0493_0272:
	case "大火" attend labelFunc0493_02AA:
	message("他把手搭在你的肩膀上低聲說：「我們的治療師 Mordra 女士認為她找到了一勞永逸擺脫 Horance 的方法。我們所要做的就是做一個金籠子 (gold cage) ，還是一個舊籠子 (old cage) 。嗯，沒關係。~~「我們做了這個籠子，然後某人……」他對著你微笑，「……把它放進靈魂之井去做些什麼。完成之後，你必須在深夜趁巫妖不備時抓住他，並把籠子緊緊鎖在他身上。到目前為止聽起來很容易，對吧？~~「嗯，現在。在那之後，你只需要把鍊金術士製作的魔法液體倒在他身上。」他在這裡停頓了一下，似乎有點尷尬。~~");
	say();
	message("「我告訴鍊金術士配方時，顯然把比例弄錯了一點。無論如何，對你來說，這應該就像從原木上掉下來一樣簡單。我想你現在最好趕快去吧， Mordra 女士能告訴你的事比我能告訴你的多得多。不過要小心，她是個危險的老太婆。」");
	say();
	var0000 = true;
	UI_remove_answer("大火");
	if (!gflags[0x01AA]) goto labelFunc0493_029A;
	message("「當然，現在你已經處理好這一切了！」他優雅地微笑。");
	say();
	goto labelFunc0493_02AA;
labelFunc0493_029A:
	UI_add_answer(["Horance", "Mordra 女士", "比例"]);
labelFunc0493_02AA:
	case "比例" attend labelFunc0493_02BD:
	message("「那是很久以前的事了，我幾乎不記得了。少許治療藥水、一點隱形藥水，還有……沒錯，『大量』的曼陀羅根精華！」");
	say();
	UI_remove_answer("比例");
labelFunc0493_02BD:
	case "Horance" attend labelFunc0493_02D0:
	message("「嗯，如果我對巫妖的傳說沒有弄錯的話，那麼曾經是一個善良仁慈的法師 Horance ，已經變成了一個討厭、可怕的不死法師。」他以一種自以為是的態度笑著。「現在快去吧。如果你需要更多情報，可以去問 Mordra 。」");
	say();
	UI_remove_answer("Horance");
labelFunc0493_02D0:
	case "Mordra 女士" attend labelFunc0493_02E4:
	message("「她就住在對面，可以幫助你解決擺脫巫妖可能需要的一切。非常感謝你。很高興能和你談話。再見。」他急忙跑回他的角落，以一種保護的姿勢拿著他的生命護符。*");
	say();
	UI_remove_answer("Mordra 女士");
	abort;
labelFunc0493_02E4:
	case "犧牲" attend labelFunc0493_0330:
	if (!(!gflags[0x019F])) goto labelFunc0493_030B;
	if (!(!gflags[0x01A2])) goto labelFunc0493_0305;
	message("「哦，天哪，不。我不認為我是你想要做那份工作的人。不，我可不這麼想。也許你應該先問問所有的鎮民。如果他們都不願意做，我也許可以考慮一下。是的，沒錯，你應該去問問其他人，然後再回來告訴我哪個可憐蟲會去。」他為自己的聰明感到好笑。");
	say();
	gflags[0x019F] = true;
	goto labelFunc0493_0308;
labelFunc0493_0305:
	Func088A();
labelFunc0493_0308:
	goto labelFunc0493_0329;
labelFunc0493_030B:
	if (!(!gflags[0x01A2])) goto labelFunc0493_0326;
	message("當你要求市長為了他的人民犧牲自己時，他的眼睛來回轉動。「還有一個人你忘了問。去找");
	message(var0006);
	message("。然後再回來，我們再看看。」幽靈般的汗水從他幽靈的額頭上滴下來。");
	say();
	UI_add_answer(var0007);
	goto labelFunc0493_0329;
labelFunc0493_0326:
	Func088A();
labelFunc0493_0329:
	UI_remove_answer("犧牲");
labelFunc0493_0330:
	case "Caine" attend labelFunc0493_0343:
	message("「只要尋找東北海岸附近的坑洞。你可以在那裡找到他。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0343:
	case "Rowena" attend labelFunc0493_0356:
	message("「鎮上的治療師說了一些關於 Rowena 坐在西北角黑塔的王座上的事。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0356:
	case "離開" attend labelFunc0493_0373:
	message("「如你所願！」");
	say();
	UI_remove_from_party(0xFF6D);
	UI_set_schedule_type(0xFF6D, 0x000B);
labelFunc0493_0373:
	case "Trent" attend labelFunc0493_0386:
	message("「Trent 在鐵匠鋪裡，離這裡不遠，就在馬路對面。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0386:
	case "Mordra 女士" attend labelFunc0493_0399:
	message("「你可以在她的房子裡找到她，就在馬路對面。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0399:
	case "Quenton" attend labelFunc0493_03AC:
	message("「Quen 幾乎把所有的時間都花在渡輪碼頭附近的烈酒桶酒館裡。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03AC:
	case "Paulette" attend labelFunc0493_03BF:
	message("「啊，那個可愛的女孩是烈酒桶酒館的女侍，就在渡輪碼頭那邊。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03BF:
	case "Markham" attend labelFunc0493_03D2:
	message("「那個脾氣暴躁的男人經營著那家名叫烈酒桶的酒館。你可以在渡輪碼頭附近找到它。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03D2:
	case "擺渡人" attend labelFunc0493_03E5:
	message("「嗯，現在。你是怎麼來到這個島的？沒錯，就是『那個』擺渡人。他在 Skara Brae 東南方的渡輪上。」");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03E5:
	case "告辭" attend labelFunc0493_03F2:
	message("「哦，是的，對了。如果我忘了告訴你什麼事，你可以回來問我，好嗎。」當你準備離開時，他重重地嘆了口氣，然後回到他在角落的守望。*");
	say();
	abort;
labelFunc0493_03F2:
	goto labelFunc0493_01E7;
labelFunc0493_03F5:
	endconv;
labelFunc0493_03F6:
	if (!(event == 0x0000)) goto labelFunc0493_03FF;
	abort;
labelFunc0493_03FF:
	return;
}


