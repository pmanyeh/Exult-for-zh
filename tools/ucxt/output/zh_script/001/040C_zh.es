#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func0883 0x883 ();
extern void Func0885 0x885 ();
extern void Func0884 0x884 ();
extern var Func0886 0x886 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func040C object#(0x40C) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	if (!(event == 0x0001)) goto labelFunc040C_04FE;
	UI_show_npc_face(0xFFF4, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = Func08F7(0xFFFE);
	var0003 = UI_is_pc_female();
	if (!((gflags[0x005A] == true) && (gflags[0x0048] == false))) goto labelFunc040C_00CE;
	message("「你仔細搜查過馬廄了嗎？」");
	say();
	if (!Func090A()) goto labelFunc040C_00C9;
	message("「你發現了什麼？」");
	say();
	UI_clear_answers();
	var0004 = ["什麼都沒有", "一個水桶", "一具屍體"];
	if (!gflags[0x003C]) goto labelFunc040C_006D;
	var0004 = (var0004 & "一把鑰匙");
labelFunc040C_006D:
	var0005 = Func090B(var0004);
	if (!(var0005 == "一把鑰匙")) goto labelFunc040C_0099;
	if (!(!var0002)) goto labelFunc040C_008E;
	message("「嗯，一把鑰匙。或許如果你去問問克里斯多福的兒子，他可能知道那是做什麼用的。」");
	say();
	goto labelFunc040C_0092;
labelFunc040C_008E:
	message("「去問斯帕克。他可能知道些什麼。」");
	say();
labelFunc040C_0092:
	gflags[0x0048] = true;
	goto labelFunc040C_0226;
labelFunc040C_0099:
	if (!(var0005 == "一具屍體")) goto labelFunc040C_00A8;
	message("「我知道有屍體！你『還』發現了什麼？你應該再仔細找找，聖者！」");
	say();
	abort;
labelFunc040C_00A8:
	if (!(var0005 == "一個水桶")) goto labelFunc040C_00B7;
	message("「是的，顯然裡面裝滿了可憐的克里斯多福的血。但肯定還有其他東西能為我們指出兇手的方向——你應該再仔細找找，聖者。」");
	say();
	abort;
labelFunc040C_00B7:
	if (!(var0005 == "什麼都沒有")) goto labelFunc040C_00C6;
	message("「你應該再仔細找找，『聖者』！」");
	say();
	abort;
labelFunc040C_00C6:
	goto labelFunc040C_00CE;
labelFunc040C_00C9:
	message("「好吧，去搜查，然後再來跟我說！」");
	say();
	abort;
labelFunc040C_00CE:
	if (!gflags[0x0059]) goto labelFunc040C_011F;
	message("「嗯。你重新考慮我提議調查這起謀殺案的事了嗎？」");
	say();
	if (!Func090A()) goto labelFunc040C_00EF;
	message("「太好了。看來你畢竟真的是聖者！」");
	say();
	gflags[0x0059] = false;
	Func0883();
	goto labelFunc040C_0226;
	goto labelFunc040C_011F;
labelFunc040C_00EF:
	message("「那就讓我們的人自己去解決吧。」");
	say();
	UI_remove_npc_face(0xFFF4);
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc040C_011E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「聖者！我對你感到羞愧！你應該重新考慮！」");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc040C_011E:
	abort;
labelFunc040C_011F:
	if (!(!gflags[0x004C])) goto labelFunc040C_0222;
	UI_halt_scheduled(item);
	UI_set_schedule_type(UI_get_npc_object(0xFFF4), 0x000B);
	message("你看到一位中年的貴族。");
	say();
	gflags[0x004C] = true;
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc040C_01A9;
	message("「Iolo！這個陌生人是誰？」");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「哎呀，這位是聖者！」 Iolo 自豪地宣布。「你敢相信嗎？請容我為你介紹？這位是 Trinsic 的鎮長 Finnigan。而這位是 ");
	message(var0001);
	message("，聖者！");
	say();
	if (!var0003) goto labelFunc040C_0175;
	message("「我真的沒料到他會出現！」");
	say();
	goto labelFunc040C_0179;
labelFunc040C_0175:
	message("「我真的沒料到他會出現！」");
	say();
labelFunc040C_0179:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("鎮長上下打量著你，不確定是否該相信Iolo。他用懷疑的眼神看著Iolo。");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我向你發誓，這真的是聖者！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF4, 0x0000);
	goto labelFunc040C_01AD;
labelFunc040C_01A9:
	message("「我聽說你是聖者。我不確定我是否相信。");
	say();
labelFunc040C_01AD:
	message("鎮長再次看著你，彷彿在研究你臉上的每一個毛孔。最後，他笑了。");
	say();
	message("「歡迎，聖者。」");
	say();
	message("但就在突然間，Finnigan 的臉色變得嚴厲。");
	say();
	message("「發生了一起可怕的謀殺案。如果你真的是聖者，或許你能幫我們解決它。如果你能接手處理這件事，我會感到安心得多。如果你能找出兇手的名字，你將會獲得豐厚的報酬。你接受嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc040C_0216;
	var0007 = Func08F7(0xFFF5);
	if (!var0007) goto labelFunc040C_01F4;
	message("「Petre 知道一些關於這件事的事情。」");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	message("那名農夫插嘴道。「我今天清晨發現了可憐的 Christopher 和石像鬼 Inamo。」");
	say();
	UI_remove_npc_face(0xFFF5);
	goto labelFunc040C_0202;
labelFunc040C_01F4:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("「馬廄管理員 Petre，在今天清晨發現了可憐的 Christopher 和 Inamo。」");
	say();
labelFunc040C_0202:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("鎮長繼續說道。「你搜查過馬廄了嗎？」");
	say();
	Func0885();
	goto labelFunc040C_021F;
labelFunc040C_0216:
	message("「好吧，那你就不可能是真正的聖者！」");
	say();
	gflags[0x0059] = true;
	abort;
labelFunc040C_021F:
	goto labelFunc040C_0226;
labelFunc040C_0222:
	message("「什麼事，聖者？」 Finnigan 問道。");
	say();
labelFunc040C_0226:
	UI_add_answer(["姓名", "職業", "謀殺", "告辭"]);
	if (!gflags[0x005B]) goto labelFunc040C_0246;
	UI_add_answer("報告");
labelFunc040C_0246:
	if (!gflags[0x003F]) goto labelFunc040C_0259;
	UI_add_answer(["友誼會", "Klog"]);
labelFunc040C_0259:
	if (!(gflags[0x0042] && (!gflags[0x003D]))) goto labelFunc040C_026B;
	UI_add_answer("口令");
labelFunc040C_026B:
	if (!(gflags[0x0045] && (!gflags[0x0044]))) goto labelFunc040C_027D;
	UI_add_answer("請現在付錢給我");
labelFunc040C_027D:
	converse attend labelFunc040C_04F9;
	case "姓名" attend labelFunc040C_0293:
	message("「我的名字是 Finnigan。」");
	say();
	UI_remove_answer("姓名");
labelFunc040C_0293:
	case "職業" attend labelFunc040C_02A6:
	message("「我是 Trinsic 的鎮長，自從我三年前來到這裡就一直是。」");
	say();
	UI_add_answer("Trinsic");
labelFunc040C_02A6:
	case "Trinsic" attend labelFunc040C_02DF:
	if (!var0003) goto labelFunc040C_02BD;
	var0008 = "被一個自稱是聖者的女人拿走了。";
	goto labelFunc040C_02C3;
labelFunc040C_02BD:
	var0008 = "被一個自稱是聖者的男人拿走了。";
labelFunc040C_02C3:
	message("「 Trinsic 曾經是榮譽之城。我想現在依然是。我們的榮譽符文很多年前 ");
	message(var0008);
	message("我相信它現在被保存在 Britain 的皇家博物館中，然而城鎮中心仍留著空蕩蕩的基座。我覺得這象徵著這個城鎮本身。它是相當空虛的——沒有人氣，沒有生氣，也沒有榮譽。真的很悲哀。」");
	say();
	message("「然後當然還有這起謀殺案。我們暫時關閉了城門，需要口令才能進出。」");
	say();
	UI_remove_answer("Trinsic");
	UI_add_answer("口令");
labelFunc040C_02DF:
	case "請現在付錢給我" attend labelFunc040C_032C:
	message("「當然，");
	message(var0001);
	message("。這是你的金幣。」");
	say();
	var0009 = UI_add_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var0009)) goto labelFunc040C_0319;
	message("「喔，我很抱歉，");
	message(var0001);
	message("。你現在還拿不動這麼多。你必須晚點再來找我。」");
	say();
	goto labelFunc040C_0325;
labelFunc040C_0319:
	message("「給你。」");
	say();
	gflags[0x0045] = false;
	gflags[0x0044] = true;
labelFunc040C_0325:
	UI_remove_answer("請現在付錢給我");
labelFunc040C_032C:
	case "謀殺" attend labelFunc040C_036F:
	if (!(!gflags[0x003D])) goto labelFunc040C_036B;
	message("「Trinsic 以前從未發生過這樣的犯罪。我不敢相信這種事會發生在 Christopher 和 Inamo 身上。拜託——去城鎮裡調查吧！如果你能向我報告你的進展，我會非常感激。務必向鎮上的每個人詢問關於謀殺案的事。在和 Christopher 的兒子談過之後，你可能接著會想去和 Gilberto 談談，他是昨晚在碼頭值班的守衛。」");
	say();
	message("鎮長猶豫了一下，然後湊近小聲說道。");
	say();
	message("「事實上，我以前見過類似的情況。大約是四年前，在 Britain。」");
	say();
	UI_add_answer(["Gilberto", "Christopher", "Inamo", "Britain", "報告"]);
	gflags[0x005B] = true;
	UI_remove_answer("謀殺");
	goto labelFunc040C_036F;
labelFunc040C_036B:
	message("「我希望你的謀殺案調查有所進展。」");
	say();
labelFunc040C_036F:
	case "Britain" attend labelFunc040C_0382:
	message("「那是在我來到 Trinsic 之前的事了。曾經發生過一起有著驚人相似之處的謀殺案。發現了一具被肢解的屍體，就像可憐的 Christopher 一樣。那看起來像是一場儀式性的殺戮。我敢打賭，當年那起謀殺案的凶手就是這次事件的幕後黑手。」");
	say();
	UI_remove_answer("Britain");
labelFunc040C_0382:
	case "兒子" attend labelFunc040C_0395:
	message("「Christopher 的兒子名叫 Spark。他們的房子在城鎮的西北區。」");
	say();
	UI_remove_answer("兒子");
labelFunc040C_0395:
	case "Gilberto" attend labelFunc040C_03B5:
	message("「他今天清晨從背後遭到襲擊，被打得失去了知覺。早班守衛 Johnson 發現他不省人事。他目前正在鎮上西側治療師 Chantu 的房子裡休養。」");
	say();
	UI_remove_answer("Gilberto");
	UI_add_answer(["Johnson", "Chantu"]);
labelFunc040C_03B5:
	case "Chantu" attend labelFunc040C_03C8:
	message("「他是我們鎮上的治療師。他在這裡已經很多年了。是個好人。」");
	say();
	UI_remove_answer("Chantu");
labelFunc040C_03C8:
	case "報告" attend labelFunc040C_0426:
	if (!gflags[0x0044]) goto labelFunc040C_03DD;
	message("「我對你的報告很滿意。請繼續你的調查，聖者。」");
	say();
	goto labelFunc040C_041F;
labelFunc040C_03DD:
	if (!(!gflags[0x005D])) goto labelFunc040C_0405;
	message("「你準備好回答一些關於調查的問題了嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc040C_03FE;
	gflags[0x005D] = true;
	Func0884();
	goto labelFunc040C_0402;
labelFunc040C_03FE:
	message("「喔。那麼，繼續你的調查吧。」");
	say();
labelFunc040C_0402:
	goto labelFunc040C_041F;
labelFunc040C_0405:
	message("「我們可以繼續你的報告了嗎？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc040C_041B;
	Func0884();
	goto labelFunc040C_041F;
labelFunc040C_041B:
	message("「喔。那麼，繼續你的調查吧。」");
	say();
labelFunc040C_041F:
	UI_remove_answer("報告");
labelFunc040C_0426:
	case "友誼會" attend labelFunc040C_0439:
	message("「哎呀，他們是一個非常有幫助的團體。他們的分會就在我辦公室的東邊。是一群非常樂觀的人。」");
	say();
	UI_remove_answer("友誼會");
labelFunc040C_0439:
	case "Klog" attend labelFunc040C_044C:
	message("「他是友誼會的分會長。是個善良的人。」");
	say();
	UI_remove_answer("Klog");
labelFunc040C_044C:
	case "Johnson" attend labelFunc040C_045F:
	message("「他現在可能在碼頭。」");
	say();
	UI_remove_answer("Johnson");
labelFunc040C_045F:
	case "Christopher" attend labelFunc040C_0479:
	message("「Christopher 是當地的鐵匠。他和他兒子住在一起，或者該說『曾經』住在一起，在城鎮西北部。鐵匠鋪在西南角。克里斯多福絕對不是個有錢人——他勉強能養活自己和兒子。但他肯定很享受他的工作。」");
	say();
	UI_remove_answer("Christopher");
	UI_add_answer("兒子");
labelFunc040C_0479:
	case "Inamo" attend labelFunc040C_048C:
	message("「據我所知，石像鬼 Inamo 睡在馬廄裡。我相信他幾個月前才從 Terfin 移居到這裡。看來他只是一個遭到暴力襲擊的無辜受害者。」");
	say();
	UI_remove_answer("Inamo");
labelFunc040C_048C:
	case "口令" attend labelFunc040C_04EB:
	if (!(gflags[0x0044] && (!gflags[0x003D]))) goto labelFunc040C_04D5;
	message("「喔，你現在想要口令嗎？」");
	say();
	if (!Func090A()) goto labelFunc040C_04CD;
	if (!Func0886()) goto labelFunc040C_04C5;
	message("「太好了！我現在毫不懷疑你就是那位真正的聖者！」");
	say();
	message("「喔——我差點忘了！離開或進入城鎮的口令是『Blackbird』！」");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc040C_04CA;
labelFunc040C_04C5:
	message("「嗯。恐怕我還是對你是否為聖者感到懷疑。我的公職不允許我把口令給你。我很抱歉。」");
	say();
	abort;
labelFunc040C_04CA:
	goto labelFunc040C_04D2;
labelFunc040C_04CD:
	message("鎮長聳了聳肩，看著你彷彿你瘋了一樣。*");
	say();
	abort;
labelFunc040C_04D2:
	goto labelFunc040C_04E4;
labelFunc040C_04D5:
	message("「當你向我報告調查進度時，我就會把口令給你。」");
	say();
	UI_add_answer("報告");
	gflags[0x0042] = true;
labelFunc040C_04E4:
	UI_remove_answer("口令");
labelFunc040C_04EB:
	case "告辭" attend labelFunc040C_04F6:
	goto labelFunc040C_04F9;
labelFunc040C_04F6:
	goto labelFunc040C_027D;
labelFunc040C_04F9:
	endconv;
	message("鎮長向你點了點頭，然後繼續忙他的事。*");
	say();
labelFunc040C_04FE:
	if (!(event == 0x0000)) goto labelFunc040C_057E;
	var000C = UI_get_schedule_type(UI_get_npc_object(0xFFF4));
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var000C == 0x000B)) goto labelFunc040C_0578;
	if (!(var000D == 0x0001)) goto labelFunc040C_053B;
	var000E = "@真是漫長的一天...@";
labelFunc040C_053B:
	if (!(var000D == 0x0002)) goto labelFunc040C_054B;
	var000E = "@又過了一天，又賺了一枚金幣...@";
labelFunc040C_054B:
	if (!(var000D == 0x0003)) goto labelFunc040C_055B;
	var000E = "@我要在這裡搜查一下...@";
labelFunc040C_055B:
	if (!(var000D == 0x0004)) goto labelFunc040C_056B;
	var000E = "@我太老了，不適合做這些...@";
labelFunc040C_056B:
	UI_item_say(0xFFF4, var000E);
	goto labelFunc040C_057E;
labelFunc040C_0578:
	Func092E(0xFFF4);
labelFunc040C_057E:
	return;
}
