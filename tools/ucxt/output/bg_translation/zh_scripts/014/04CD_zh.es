#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func094F 0x94F (var var0000, var var0001);

void Func04CD object#(0x4CD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04CD_019B;
	UI_show_npc_face(0xFF33, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF33));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x028A])) goto labelFunc04CD_004A;
	message("一個強壯有力的人看著你，點頭致意。");
	say();
	goto labelFunc04CD_004E;
labelFunc04CD_004A:
	message("「我能為你做什麼？」 Zaksam 問。");
	say();
labelFunc04CD_004E:
	converse attend labelFunc04CD_0196;
	case "姓名" attend labelFunc04CD_0064:
	message("「我是 Zaksam ，」他驕傲地說。");
	say();
	UI_remove_answer("姓名");
labelFunc04CD_0064:
	case "職業" attend labelFunc04CD_007D:
	message("「我教導別人成為強大的戰士。我是 Vesper 的訓練師。」");
	say();
	UI_add_answer(["Vesper", "訓練"]);
labelFunc04CD_007D:
	case "Vesper" attend labelFunc04CD_009D:
	message("「我在這裡教了很多年了。我喜歡這個城鎮，但我不太喜歡某些居民。」");
	say();
	UI_add_answer(["城鎮", "居民"]);
	UI_remove_answer("Vesper");
labelFunc04CD_009D:
	case "城鎮" attend labelFunc04CD_00B0:
	message("「東北方的土地有點乾燥，但綠洲和附近的海岸給了我們充足的飲用和洗浴水源。」");
	say();
	UI_remove_answer("城鎮");
labelFunc04CD_00B0:
	case "居民" attend labelFunc04CD_00D0:
	message("「我們大多數人都是受人尊敬的，但有幾個人讓我感到懷疑。例如 Blorn 和鎮長。");
	say();
	UI_add_answer(["鎮長", "Blorn"]);
	UI_remove_answer("居民");
labelFunc04CD_00D0:
	case "鎮長" attend labelFunc04CD_00E3:
	message("「不是我不信任他。我只是懷疑他管理城鎮的能力。他的名字是 Auston 。你去跟他談談，看看你怎麼想。更好的話，去跟他的書記員 Liana 談談。」");
	say();
	UI_remove_answer("鎮長");
labelFunc04CD_00E3:
	case "Blorn" attend labelFunc04CD_00FD:
	message("「那個人我一點也不喜歡。我不信任他。他讓我想到那些石像鬼。」");
	say();
	UI_add_answer("石像鬼");
	UI_remove_answer("Blorn");
labelFunc04CD_00FD:
	case "石像鬼" attend labelFunc04CD_011D:
	message("「有什麼好說的，只能說別讓他們靠得太近，否則他們會搶劫你。隨時他們都可能試圖使用暴力接管這個城鎮。鎮長親自要求我在必要時戰鬥。雖然我不怕死，但那是一場我不期待的戰鬥。」");
	say();
	UI_remove_answer("石像鬼");
	UI_add_answer(["搶劫", "暴力"]);
labelFunc04CD_011D:
	case "搶劫" attend labelFunc04CD_0130:
	message("「我聽說有些居民，被那些可悲的生物偷了東西。」");
	say();
	UI_remove_answer("搶劫");
labelFunc04CD_0130:
	case "暴力" attend labelFunc04CD_0143:
	message("「你肯定知道，所有石像鬼都容易產生毫無理智的暴力行為。期待他們為了自己的私利而使用暴力是很自然的。」");
	say();
	UI_remove_answer("暴力");
labelFunc04CD_0143:
	case "訓練" attend labelFunc04CD_0188:
	if (!(var0002 == 0x0007)) goto labelFunc04CD_017E;
	message("「我可以以 40 金幣訓練你。可以嗎？」");
	say();
	if (!Func090A()) goto labelFunc04CD_0171;
	Func094F([0x0000, 0x0004], 0x0028);
	goto labelFunc04CD_017B;
labelFunc04CD_0171:
	message("「也許下次吧，");
	message(var0001);
	message("。」");
	say();
labelFunc04CD_017B:
	goto labelFunc04CD_0188;
labelFunc04CD_017E:
	message("「等我在訓練大廳時就可以訓練你，");
	message(var0001);
	message("。請在營業時間隨時來找我。」");
	say();
labelFunc04CD_0188:
	case "告辭" attend labelFunc04CD_0193:
	goto labelFunc04CD_0196;
labelFunc04CD_0193:
	goto labelFunc04CD_004E;
labelFunc04CD_0196:
	endconv;
	message("「願你的力量成為你的指引。」*");
	say();
labelFunc04CD_019B:
	if (!(event == 0x0000)) goto labelFunc04CD_026F;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF33));
	var0003 = UI_part_of_day();
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!((var0003 == 0x0007) || ((var0003 == 0x0000) || (var0003 == 0x0001)))) goto labelFunc04CD_01EF;
	if (!(var0002 == 0x000E)) goto labelFunc04CD_01EF;
	var0005 = "@Zzzzz . . .@";
labelFunc04CD_01EF:
	if (!((var0003 >= 0x0002) && (var0003 <= 0x0005))) goto labelFunc04CD_024B;
	if (!(var0002 == 0x0007)) goto labelFunc04CD_024B;
	if (!(var0004 == 0x0001)) goto labelFunc04CD_021B;
	var0005 = "@在這裡提升你的技巧！@";
labelFunc04CD_021B:
	if (!(var0004 == 0x0002)) goto labelFunc04CD_022B;
	var0005 = "@在這裡提升你的力量！@";
labelFunc04CD_022B:
	if (!(var0004 == 0x0003)) goto labelFunc04CD_023B;
	var0005 = "@更努力地戰鬥，變得更強壯！@";
labelFunc04CD_023B:
	if (!(var0004 == 0x0004)) goto labelFunc04CD_024B;
	var0005 = "@守護自己免受石像鬼的侵害！@";
labelFunc04CD_024B:
	if (!(var0003 == 0x0006)) goto labelFunc04CD_0265;
	if (!(var0002 == 0x001A)) goto labelFunc04CD_0265;
	var0005 = "@嗯嗯，優質的麥酒！@";
labelFunc04CD_0265:
	UI_item_say(0xFF33, var0005);
labelFunc04CD_026F:
	return;
}


