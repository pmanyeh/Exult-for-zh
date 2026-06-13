#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func0878 0x878 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0477 object#(0x477) ()
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

	if (!(event == 0x0001)) goto labelFunc0477_02E0;
	UI_show_npc_face(0xFF89, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF89));
	var0003 = UI_get_npc_object(0xFF89);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0171])) goto labelFunc0477_0059;
	message("雖然他看起來沒有敵意，但這個男人以戰鬥的姿勢迎接你。");
	say();
	gflags[0x0171] = true;
	goto labelFunc0477_005D;
labelFunc0477_0059:
	message("「你需要什麼？」 De Snel 問。");
	say();
labelFunc0477_005D:
	var0004 = UI_is_dead(0xFF84);
	if (!var0004) goto labelFunc0477_0074;
	UI_add_answer("Sprellic");
labelFunc0477_0074:
	var0005 = UI_is_dead(0xFF83);
	var0006 = UI_is_dead(0xFF82);
	var0007 = UI_is_dead(0xFF81);
	if (!(var0005 && (var0006 && var0007))) goto labelFunc0477_00A7;
	UI_add_answer("決鬥者");
labelFunc0477_00A7:
	if (!gflags[0x016A]) goto labelFunc0477_00B4;
	UI_add_answer("榮譽旗");
labelFunc0477_00B4:
	converse attend labelFunc0477_02BA;
	case "姓名" attend labelFunc0477_00CA:
	message("「我被稱為 De Snel 大師。」");
	say();
	UI_remove_answer("姓名");
labelFunc0477_00CA:
	case "職業" attend labelFunc0477_00E6:
	message("「我在 Jhelom 經營著名的格鬥學校，傷疤圖書館 (Library of Scars) 。如果戰士展現出潛力，我有時也會親自訓練他們。」");
	say();
	UI_add_answer(["Jhelom", "傷疤圖書館", "潛力"]);
labelFunc0477_00E6:
	case "潛力" attend labelFunc0477_0100:
	message("「我教導一種我自己發明的戰鬥風格。它能讓人完全壓制對手。我可以為你安排一個小小的示範……」");
	say();
	UI_add_answer("示範");
	UI_remove_answer("潛力");
labelFunc0477_0100:
	case "Jhelom" attend labelFunc0477_0113:
	message("「這座城市致力於戰鬥的藝術。不只是盲目的軍事紀律，而是純粹的暴力對抗。這是一個合我心意的地方。」");
	say();
	UI_remove_answer("Jhelom");
labelFunc0477_0113:
	case "傷疤圖書館" attend labelFunc0477_0145:
	if (!(var0002 == 0x0007)) goto labelFunc0477_0139;
	message("「一所擁有悠久、自豪歷史的菁英戰士學校。許多偉大的戰士都在它的牆內接受過訓練。這個組織甚至擁有自己的特殊武器。」");
	say();
	UI_add_answer(["戰士", "武器"]);
	goto labelFunc0477_013E;
labelFunc0477_0139:
	message("「我現在不想談生意。或許改天吧。」");
	say();
	abort;
labelFunc0477_013E:
	UI_remove_answer("傷疤圖書館");
labelFunc0477_0145:
	case "戰士" attend labelFunc0477_0158:
	message("「我訓練我的學生們成為兇猛無情的戰士！」");
	say();
	UI_remove_answer("戰士");
labelFunc0477_0158:
	case "武器" attend labelFunc0477_018D:
	message("他拔出自己的劍給你看。劍上刻有精緻的蛇形圖案。「你可以透過刻痕認出傷疤圖書館的武器。那是蛇的標誌。攻擊迅速、無聲、致命，就跟我們一樣！」");
	say();
	UI_remove_answer("武器");
	var0008 = Func0931(0xFE9B, 0x0001, 0x027C, 0xFE99, 0xFE99);
	if (!var0008) goto labelFunc0477_018D;
	UI_add_answer("匕首");
labelFunc0477_018D:
	case "匕首" attend labelFunc0477_01FD:
	message("你拿出在 Minoc 謀殺現場發現的匕首。蛇形的刻痕與傷疤圖書館的標記完全吻合。 De Snel 看了看它，然後轉頭看你。他無法掩飾自己的驚訝。~「你從哪裡弄來那把匕首的？」");
	say();
	UI_push_answers();
	var0009 = Func090B(["found it", "murder site"]);
	if (!(var0009 == "found it")) goto labelFunc0477_01BA;
	message("De Snel 盯著你看，顯然知道你在說謊。");
	say();
labelFunc0477_01BA:
	if (!(var0009 == "murder site")) goto labelFunc0477_01C8;
	message("你看著 De Snel 的眼睛，告訴他你是在 Minoc 的謀殺現場找到的。他給了你一個好奇的眼神。");
	say();
labelFunc0477_01C8:
	message("「那把匕首幾週前從傷疤圖書館被偷了。我對此一無所知。」");
	say();
	message("「順帶一提，你看過我訓練技巧的示範嗎？」");
	say();
	if (!Func090A()) goto labelFunc0477_01DD;
	message("「那或許你應該再來一場。」");
	say();
	goto labelFunc0477_01E1;
labelFunc0477_01DD:
	message("「那或許你應該試試看。」");
	say();
labelFunc0477_01E1:
	UI_pop_answers();
	UI_remove_answer("匕首");
	UI_add_answer("示範");
	gflags[0x016C] = true;
	Func0911(0x0032);
labelFunc0477_01FD:
	case "示範" attend labelFunc0477_0248:
	if (!gflags[0x016C]) goto labelFunc0477_0227;
	message("「很好。讓我們開始吧！」*");
	say();
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
	goto labelFunc0477_0248;
labelFunc0477_0227:
	message("「我必須為我的失禮道歉，但我無與倫比的才華要求我為訓練示範收取 40 個金幣。你接受嗎？」");
	say();
	if (!Func090A()) goto labelFunc0477_023D;
	Func0878(0x0004, 0x0028);
	goto labelFunc0477_0248;
labelFunc0477_023D:
	message("「那很好！」他的怒容顯示了他的不悅。「如果你不喜歡，或許傷疤圖書館不是適合你的地方。」");
	say();
	UI_remove_answer("示範");
labelFunc0477_0248:
	case "Sprellic" attend labelFunc0477_025B:
	message("「正如你可能看到的，我們幾名成員因為榮譽旗和一個當地的麻煩製造者發生了爭執。我們傷疤圖書館對我們的組織有著強烈的奉獻精神。我不知道這個暴發戶具體發生了什麼事，但我知道他現在已經死了。當然，我不是在暗示傷疤圖書館與此有關。只是想說，最好別惹我們。」");
	say();
	UI_remove_answer("Sprellic");
labelFunc0477_025B:
	case "決鬥者" attend labelFunc0477_0299:
	message("「我聽說你在為那個偷我們榮譽旗的小偷辯護的決鬥中，殺了我們幾名成員。」他瞇起眼睛緊盯著你。「太出色了！我這個人最看重的就是技巧的運用。我為你的勝利向你致敬。或許你想加入我們的組織？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0477_0292;
	if (!gflags[0x016C]) goto labelFunc0477_0287;
	message("「你的同伴和你看起來夠強壯，適合進行一場非正式的練習。就把它當作我戰鬥風格的示範吧。」");
	say();
	UI_add_answer("示範");
	goto labelFunc0477_0292;
labelFunc0477_0287:
	message("「因為我的戰鬥風格是優越的風格，我只對訓練最優秀的人有興趣。或許你的同伴和你夠資格。我們可以測試看看，前提是，如果你夠勇敢的話。」");
	say();
	UI_add_answer("示範");
labelFunc0477_0292:
	UI_remove_answer("決鬥者");
labelFunc0477_0299:
	case "榮譽旗" attend labelFunc0477_02AC:
	message("「對 Sprellic 來說幸運的是，我們的榮譽旗被歸還了。如果沒有，我們別無選擇，只能用他的血來挽回我們的榮譽。」");
	say();
	UI_remove_answer("榮譽旗");
labelFunc0477_02AC:
	case "告辭" attend labelFunc0477_02B7:
	goto labelFunc0477_02BA;
labelFunc0477_02B7:
	goto labelFunc0477_00B4;
labelFunc0477_02BA:
	endconv;
	if (!gflags[0x016C]) goto labelFunc0477_02DC;
	message("「你休想沒有進行示範就這麼輕易走掉！無論如何你都得來一場！」*");
	say();
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0003, 0x0000);
	goto labelFunc0477_02E0;
labelFunc0477_02DC:
	message("「願你在 Jhelom 有個難忘的時光，」 De Snel 大笑著轉身離開。*");
	say();
labelFunc0477_02E0:
	if (!(event == 0x0000)) goto labelFunc0477_02EE;
	Func092E(0xFF89);
labelFunc0477_02EE:
	return;
}


