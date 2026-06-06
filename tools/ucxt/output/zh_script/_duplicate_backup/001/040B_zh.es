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
	message("這名農夫看著你，就像見到鬼一樣！「 Iolo ！這");
	message(var0003);
	message(" 憑空出現了！救救我！」*");
	say();
	abort;
labelFunc040B_005D:
	if (!(!gflags[0x004B])) goto labelFunc040B_009B;
	message("你看到一個心煩意亂的農夫。「你真的是聖者嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc040B_008F;
	message("Petre 在你面前鞠躬。「^");
	message(var0000);
	message("。」");
	say();
	gflags[0x004B] = true;
	UI_set_schedule_type(0xFFF5, 0x000B);
	goto labelFunc040B_0098;
labelFunc040B_008F:
	message("Petre 看起來很困惑。「你不應該取笑我！」他轉身離開。*");
	say();
	gflags[0x004B] = true;
	abort;
labelFunc040B_0098:
	goto labelFunc040B_00A5;
labelFunc040B_009B:
	message("「怎麼了，");
	message(var0000);
	message("？」 Petre 問。");
	say();
labelFunc040B_00A5:
	if (!gflags[0x003C]) goto labelFunc040B_00B8;
	UI_add_answer(["謀殺案", "腳印"]);
labelFunc040B_00B8:
	if (!gflags[0x003F]) goto labelFunc040B_00CE;
	UI_add_answer(["友誼會", "Klog", "Spark"]);
labelFunc040B_00CE:
	converse attend labelFunc040B_0267;
	if (!(!gflags[0x003C])) goto labelFunc040B_00E0;
	message("「去馬廄看看！太可怕了！我會回答你的問題，但先去馬廄看看！」*");
	say();
	abort;
	goto labelFunc040B_0264;
labelFunc040B_00E0:
	case "姓名" attend labelFunc040B_00F3:
	message("「我叫 Petre ，」男人抽了抽鼻子。");
	say();
	UI_remove_answer("姓名");
labelFunc040B_00F3:
	case "職業" attend labelFunc040B_0106:
	message("「我是馬廄管理員。」");
	say();
	UI_add_answer("馬廄");
labelFunc040B_0106:
	case "馬廄" attend labelFunc040B_0132:
	message("「我在這裡工作很多年了。如果你想要的話，我可以賣給你一匹好馬和馬車。動物和馬車就在鎮子北門外的一個小棚子裡。」");
	say();
	if (!(!gflags[0x0057])) goto labelFunc040B_0120;
	message("「現在那地方讓我毛骨悚然！」~~他的眼睛充滿了恐懼。");
	say();
	goto labelFunc040B_0124;
labelFunc040B_0120:
	message("「鎮長不讓我在你離開 Trinsic 二十四小時內去那裡清理。他認為我們必須保持犯罪現場原封不動。好吧，如果你問我的話，我可以告訴你，裡面還是臭得像世界末日一樣！」");
	say();
labelFunc040B_0124:
	UI_remove_answer("馬廄");
	UI_add_answer("馬車");
labelFunc040B_0132:
	case "謀殺案" attend labelFunc040B_0152:
	message("「今天早上我發現了可憐的 Christopher 和 Inamo 。我什麼都沒碰。這讓我噁心死了！」");
	say();
	UI_remove_answer("謀殺案");
	UI_add_answer(["Christopher", "Inamo"]);
labelFunc040B_0152:
	case "Christopher" attend labelFunc040B_0165:
	message("「好人。他為我的馬做馬蹄鐵。」");
	say();
	UI_remove_answer("Christopher");
labelFunc040B_0165:
	case "Inamo" attend labelFunc040B_0178:
	message("「他為了微薄的薪水工作。在馬廄和酒吧做些基本的雜事。我讓他睡在後面的小房間裡。他一定是在錯誤的時間出現在錯誤的地點。」");
	say();
	UI_remove_answer("Inamo");
labelFunc040B_0178:
	case "馬車" attend labelFunc040B_01FB:
	message("「馬匹和馬車組合售價 60 枚金幣。你想要產權證明嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc040B_01F0;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 >= 0x003C)) goto labelFunc040B_01E9;
	var0007 = UI_add_party_items(0x0001, 0x031D, 0x001C, 0xFE99, false);
	if (!var0007) goto labelFunc040B_01E2;
	message("「很好。沒有什麼比一筆小生意更能讓我忘掉馬廄裡那可怕的場景了。」");
	say();
	var0008 = UI_remove_party_items(0x003C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc040B_01E6;
labelFunc040B_01E2:
	message("「噢，天啊。你的手太滿了，拿不了產權證明！」");
	say();
labelFunc040B_01E6:
	goto labelFunc040B_01ED;
labelFunc040B_01E9:
	message("「噢。你沒有足夠的金幣來購買產權證明。」");
	say();
labelFunc040B_01ED:
	goto labelFunc040B_01F4;
labelFunc040B_01F0:
	message("「那下次吧。」");
	say();
labelFunc040B_01F4:
	UI_remove_answer("馬車");
labelFunc040B_01FB:
	case "腳印" attend labelFunc040B_020E:
	message("「它們是從後門出去的，對吧？那些一定是兇手的腳印！」~~他的眼睛睜得更大了。~~「或者……兇手們！」");
	say();
	UI_remove_answer("腳印");
labelFunc040B_020E:
	case "友誼會" attend labelFunc040B_0221:
	message("「我不想加入他們，但他們看起來還不錯。」");
	say();
	UI_remove_answer("友誼會");
labelFunc040B_0221:
	case "Klog" attend labelFunc040B_0234:
	message("「我不太了解那個人。我跟他沒有交集。」");
	say();
	UI_remove_answer("Klog");
labelFunc040B_0234:
	case "Spark" attend labelFunc040B_0259:
	if (!(!(0xFFFE in var0001))) goto labelFunc040B_024E;
	message("「那是 Christopher 的兒子。好孩子。」");
	say();
	goto labelFunc040B_0252;
labelFunc040B_024E:
	message("Petre 揉了揉男孩的頭髮。~~「這是 Christopher 的兒子。他是個好孩子， Spark ，當他沒有從誠實的店主那裡偷東西的時候。」");
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
	message("「再見，」男人抽了抽鼻子。*");
	say();
labelFunc040B_026C:
	if (!(event == 0x0000)) goto labelFunc040B_027A;
	Func092E(0xFFF5);
labelFunc040B_027A:
	return;
}


