#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func040B object#(0x40B) ()
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

	if (!(event == 0x0001)) goto labelFunc040B_026C;
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_is_pc_female();
	UI_add_answer(["姓名", "職業", "告辭"]);
	UI_show_npc_face(0xFFF5, 0x0000);
	if (!(!gflags[0x0014])) goto labelFunc040B_005D;
	if (!var0002) goto labelFunc040B_004C;
	var0003 = "女人";
	goto labelFunc040B_0052;
labelFunc040B_004C:
	var0003 = "男人";
labelFunc040B_0052:
	message("這位農夫看著你，像大白天撞見鬼。「Iolo！這");
	message(var0003);
	message("就這樣憑空冒出來！救命啊！」*");
	say();
	abort;
labelFunc040B_005D:
	if (!(!gflags[0x004B])) goto labelFunc040B_009B;
	message("你看到一個慌得六神無主的農夫。「你……真的是聖者嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc040B_008F;
	message("Petre 趕緊向你低頭行禮。「");
	message(var0000);
	message("。」");
	say();
	gflags[0x004B] = true;
	UI_set_schedule_type(0xFFF5, 0x000B);
	goto labelFunc040B_0098;
labelFunc040B_008F:
	message("Petre 一臉困惑。「這種時候別拿我開玩笑！」他轉身走開。*");
	say();
	gflags[0x004B] = true;
	abort;
labelFunc040B_0098:
	goto labelFunc040B_00A5;
labelFunc040B_009B:
	message("「怎麼了，");
	message(var0000);
	message("？」Petre 問道。");
	say();
labelFunc040B_00A5:
	if (!gflags[0x003C]) goto labelFunc040B_00B8;
	UI_add_answer(["謀殺", "腳印"]);
labelFunc040B_00B8:
	if (!gflags[0x003F]) goto labelFunc040B_00CE;
	UI_add_answer(["友誼會", "Klog", "Spark"]);
labelFunc040B_00CE:
	converse attend labelFunc040B_0267;
	if (!(!gflags[0x003C])) goto labelFunc040B_00E0;
	message("「你先去馬廄看！裡面真的太可怕了！我可以回答你的問題，但你先去看！」*");
	say();
	abort;
	goto labelFunc040B_0264;
labelFunc040B_00E0:
	case "姓名" attend labelFunc040B_00F3:
	message("「我叫 Petre，」那男人吸了吸鼻子。");
	say();
	UI_remove_answer("姓名");
labelFunc040B_00F3:
	case "職業" attend labelFunc040B_0106:
	message("「我管這間馬廄。」");
	say();
	UI_add_answer("馬廄");
labelFunc040B_0106:
	case "馬廄" attend labelFunc040B_0132:
	message("「我在這裡做很多年了。你有需要的話，我可以賣你一隊好馬，連馬車一起。那車就在北門外的小棚子裡。」");
	say();
	if (!(!gflags[0x0057])) goto labelFunc040B_0120;
	message("「現在那地方，我光想到就起雞皮疙瘩！」~~他的眼裡滿是恐懼。");
	say();
	goto labelFunc040B_0124;
labelFunc040B_0120:
	message("「你離開 Trinsic 整整一天後，市長才叫我去那裡清理。他說要保留現場。唉，你問我喔，裡面還是臭得像世界末日一樣！」");
	say();
labelFunc040B_0124:
	UI_remove_answer("馬廄");
	UI_add_answer("馬車");
labelFunc040B_0132:
	case "謀殺" attend labelFunc040B_0152:
	message("「今天早上，是我發現可憐的 Christopher 和 Inamo。我真的什麼都沒碰。光想到就想吐，真的！」");
	say();
	UI_remove_answer("謀殺");
	UI_add_answer(["Christopher", "Inamo"]);
labelFunc040B_0152:
	case "Christopher" attend labelFunc040B_0165:
	message("「他是個好人。平常會幫我的馬釘馬蹄鐵。」");
	say();
	UI_remove_answer("Christopher");
labelFunc040B_0165:
	case "Inamo" attend labelFunc040B_0178:
	message("「他領沒多少錢，平常就在馬廄跟酒館打雜。我讓他睡後面的小房間。他真的是算倒楣，不對的時間地點，他偏偏在那邊，就沒了。」");
	say();
	UI_remove_answer("Inamo");
labelFunc040B_0178:
	case "馬車" attend labelFunc040B_01FB:
	message("「一匹馬加一台馬車，總共 60 枚金幣。你要買所有權狀嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc040B_01F0;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 >= 0x003C)) goto labelFunc040B_01E9;
	var0007 = UI_add_party_items(0x0001, 0x031D, 0x001C, 0xFE99, false);
	if (!var0007) goto labelFunc040B_01E2;
	message("「好，成交。能做點小生意，至少讓我暫時別一直想馬廄裡的那一幕。」");
	say();
	var0008 = UI_remove_party_items(0x003C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc040B_01E6;
labelFunc040B_01E2:
	message("「哎呀，東西拿太多了，你的權狀放不下！」");
	say();
labelFunc040B_01E6:
	goto labelFunc040B_01ED;
labelFunc040B_01E9:
	message("「呃，你身上的錢不夠買權狀。」");
	say();
labelFunc040B_01ED:
	goto labelFunc040B_01F4;
labelFunc040B_01F0:
	message("「那就下次再說吧。」");
	say();
labelFunc040B_01F4:
	UI_remove_answer("馬車");
labelFunc040B_01FB:
	case "腳印" attend labelFunc040B_020E:
	message("「那些腳印通到後門，對吧？一定是兇手留下的！」~~他的眼睛瞪得更大。~~「應該不只一個人。」");
	say();
	UI_remove_answer("腳印");
labelFunc040B_020E:
	case "友誼會" attend labelFunc040B_0221:
	message("「我是沒想加入，不過他們人看起來還不錯。」");
	say();
	UI_remove_answer("友誼會");
labelFunc040B_0221:
	case "Klog" attend labelFunc040B_0234:
	message("「我不太熟，沒什麼往來。」");
	say();
	UI_remove_answer("Klog");
labelFunc040B_0234:
	case "Spark" attend labelFunc040B_0259:
	if (!(!(0xFFFE in var0001))) goto labelFunc040B_024E;
	message("「那是 Christopher 的兒子。好孩子。」");
	say();
	goto labelFunc040B_0252;
labelFunc040B_024E:
	message("Petre 揉了揉男孩的頭髮。~~「這孩子是 Christopher 的兒子。Spark 算好孩子啦，叫他別再從一些店家那裡順手牽羊。」");
	say();
labelFunc040B_0252:
	UI_remove_answer("Spark");
labelFunc040B_0259:
	case "告辭" attend labelFunc040B_0264:
	goto labelFunc040B_0267;
labelFunc040B_0264:
	goto labelFunc040B_00CE;
labelFunc040B_0267:
	endconv;
	message("「保重，」那男人吸了吸鼻子。*");
	say();
labelFunc040B_026C:
	if (!(event == 0x0000)) goto labelFunc040B_027A;
	Func092E(0xFFF5);
labelFunc040B_027A:
	return;
}