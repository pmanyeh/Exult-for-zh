#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04E8 object#(0x4E8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04E8_0130;
	UI_show_npc_face(0xFF18, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF18));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02B5])) goto labelFunc04E8_004F;
	message("你看到一個衣著考究，頭髮塗著油的海盜。");
	say();
	gflags[0x02B5] = true;
	goto labelFunc04E8_0053;
labelFunc04E8_004F:
	message("「我能幫你嗎？」 Smithy 問。");
	say();
labelFunc04E8_0053:
	converse attend labelFunc04E8_0125;
	case "姓名" attend labelFunc04E8_0069:
	message("「我是 Smithy 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04E8_0069:
	case "職業" attend labelFunc04E8_0097:
	message("「我在賭坊 (House of Games) 負責遊戲營運。");
	say();
	if (!(var0002 == 0x000A)) goto labelFunc04E8_0093;
	message("「我可以為你解釋規則和玩法。我也會確保沒人作弊。」");
	say();
	UI_add_answer(["遊戲", "作弊"]);
	goto labelFunc04E8_0097;
labelFunc04E8_0093:
	message("「請在設施營業時來試試你的身手。」");
	say();
labelFunc04E8_0097:
	case "作弊" attend labelFunc04E8_00AA:
	message("「如果你作弊被抓到，你將被逮捕。而且我們真的會起訴！」");
	say();
	UI_remove_answer("作弊");
labelFunc04E8_00AA:
	case "遊戲" attend labelFunc04E8_0117:
	message("「你有三種遊戲可以玩。第一種是美德輪盤。第二種是老鼠賽跑。第三種是三倍。你想聽聽規則嗎？」");
	say();
	if (!Func090A()) goto labelFunc04E8_0113;
	message("「你想聽哪個遊戲的規則？」");
	say();
	var0003 = Func090B(["不用了", "美德輪盤", "老鼠賽跑", "三倍"]);
	if (!(var0003 == "不用了")) goto labelFunc04E8_00E6;
	message("「沒關係。」");
	say();
	goto labelFunc04E8_0125;
labelFunc04E8_00E6:
	if (!(var0003 == "美德輪盤")) goto labelFunc04E8_00F4;
	message("「只需將你想要下注的金幣數量放在一個或多個顏色上。使用轉盤，如果你猜對了，你的錢就會增加。」");
	say();
labelFunc04E8_00F4:
	if (!(var0003 == "老鼠賽跑")) goto labelFunc04E8_0102;
	message("「將你的賭注下在你認為老鼠會跑的那條通道末端的綠色標記上。」");
	say();
labelFunc04E8_0102:
	if (!(var0003 == "三倍")) goto labelFunc04E8_0110;
	message("「你可以押三倍數，也就是三個 1 、三個 2 或三個 3 。這個的回報率最高。押『1、2、3』的回報略少。總和為『4』、『5』、『7』或『8』的回報最少。不要把錢放在數字之間，特別是『4』和『5』之間。如果『6』是由三個 2 以外的任何組合所組成，就會輸。下注後，轉動輪盤。」");
	say();
labelFunc04E8_0110:
	goto labelFunc04E8_0117;
labelFunc04E8_0113:
	message("「那好吧。你自求多福吧。」");
	say();
labelFunc04E8_0117:
	case "告辭" attend labelFunc04E8_0122:
	goto labelFunc04E8_0125;
labelFunc04E8_0122:
	goto labelFunc04E8_0053;
labelFunc04E8_0125:
	endconv;
	message("「再見了，");
	message(var0000);
	message("。」*");
	say();
labelFunc04E8_0130:
	if (!(event == 0x0000)) goto labelFunc04E8_01B7;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF18));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000A)) goto labelFunc04E8_01B1;
	if (!(var0004 == 0x0001)) goto labelFunc04E8_0174;
	var0005 = "@下注。@";
labelFunc04E8_0174:
	if (!(var0004 == 0x0002)) goto labelFunc04E8_0184;
	var0005 = "@停止下注。@";
labelFunc04E8_0184:
	if (!(var0004 == 0x0003)) goto labelFunc04E8_0194;
	var0005 = "@贏家全拿。@";
labelFunc04E8_0194:
	if (!(var0004 == 0x0004)) goto labelFunc04E8_01A4;
	var0005 = "@莊家贏。@";
labelFunc04E8_01A4:
	UI_item_say(0xFF18, var0005);
	goto labelFunc04E8_01B7;
labelFunc04E8_01B1:
	Func092E(0xFF18);
labelFunc04E8_01B7:
	return;
}


