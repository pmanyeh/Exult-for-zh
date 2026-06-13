#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08CD 0x8CD ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04B3 object#(0x4B3) ()
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

	if (!(event == 0x0001)) goto labelFunc04B3_0236;
	UI_show_npc_face(0xFF4D, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF4D));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0212]) goto labelFunc04B3_004A;
	UI_add_answer("小偷");
labelFunc04B3_004A:
	if (!gflags[0x0218]) goto labelFunc04B3_0057;
	UI_remove_answer("小偷");
labelFunc04B3_0057:
	if (!gflags[0x0215]) goto labelFunc04B3_0064;
	UI_add_answer("Merrick");
labelFunc04B3_0064:
	if (!gflags[0x0214]) goto labelFunc04B3_0071;
	UI_add_answer("Morfin");
labelFunc04B3_0071:
	if (!gflags[0x0216]) goto labelFunc04B3_007E;
	UI_add_answer("Thurston");
labelFunc04B3_007E:
	if (!(!gflags[0x022C])) goto labelFunc04B3_0090;
	message("「你看到鎮上的酒館老闆娘。她看起來很忙碌，但她顯然為自己的工作感到自豪。」");
	say();
	gflags[0x022C] = true;
	goto labelFunc04B3_009A;
labelFunc04B3_0090:
	message("Polly 笑了笑。「我能為你做什麼，");
	message(var0000);
	message("？」");
	say();
labelFunc04B3_009A:
	converse attend labelFunc04B3_022B;
	case "姓名" attend labelFunc04B3_00B0:
	message("「我是 Polly。很高興認識你。」");
	say();
	UI_remove_answer("姓名");
labelFunc04B3_00B0:
	case "職業" attend labelFunc04B3_00E4:
	message("「我是 Salty Dog 鹹狗酒館——整個 Paws 最好吃好喝的場所——的老闆和經營者，為你服務。」");
	say();
	if (!(var0002 == 0x0017)) goto labelFunc04B3_00D9;
	UI_add_answer(["Paws", "買東西", "房間"]);
	goto labelFunc04B3_00E4;
labelFunc04B3_00D9:
	message("「然而，Salty Dog 現在打烊了。請在營業時間再來。」");
	say();
	UI_add_answer("Paws");
labelFunc04B3_00E4:
	case "買東西" attend labelFunc04B3_00F6:
	Func08CD();
	UI_remove_answer("買東西");
labelFunc04B3_00F6:
	case "房間" attend labelFunc04B3_01AF:
	message("「只要 5 枚金幣，你就可以租用我們一間可愛的房間。你想在這裡過夜嗎？」");
	say();
	if (!Func090A()) goto labelFunc04B3_01A4;
	var0003 = UI_get_party_list();
	var0004 = 0x0000;
	enum();
labelFunc04B3_0116:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc04B3_012E;
	var0004 = (var0004 + 0x0001);
	goto labelFunc04B3_0116;
labelFunc04B3_012E:
	var0008 = (var0004 * 0x0005);
	var0009 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0009 >= var0008)) goto labelFunc04B3_0197;
	var000A = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!var000A) goto labelFunc04B3_018A;
	message("「這是這間客棧的鑰匙。只能使用一次。」");
	say();
	var000B = UI_remove_party_items(var0008, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04B3_0194;
labelFunc04B3_018A:
	message("「抱歉，");
	message(var0000);
	message("，你必須放下一些行囊，我才能把鑰匙給你。」");
	say();
labelFunc04B3_0194:
	goto labelFunc04B3_01A1;
labelFunc04B3_0197:
	message("「我真的很抱歉，");
	message(var0000);
	message("，但這房間的費用超過你擁有的金幣。」");
	say();
labelFunc04B3_01A1:
	goto labelFunc04B3_01A8;
labelFunc04B3_01A4:
	message("「也許下次晚上再來吧。」");
	say();
labelFunc04B3_01A8:
	UI_remove_answer("房間");
labelFunc04B3_01AF:
	case "Paws" attend labelFunc04B3_01C2:
	message("「事實上，Paws 沒有其他的客棧或酒館了。這是一個小地方，但老實說，我們這裡的食物和飲料相當不錯。」");
	say();
	UI_remove_answer("Paws");
labelFunc04B3_01C2:
	case "小偷" attend labelFunc04B3_01D9:
	message("「這個鎮上有個小偷！經營屠宰場的商人 Morfin 被偷了銀蛇毒液。」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("小偷");
labelFunc04B3_01D9:
	case "Merrick" attend labelFunc04B3_01EC:
	message("「他曾經是個農夫。他人不壞。他只是運氣不好。現在他是個虔誠的友誼會成員。」");
	say();
	UI_remove_answer("Merrick");
labelFunc04B3_01EC:
	case "Morfin" attend labelFunc04B3_0206:
	message("「Morfin 是個非常精明且成功的商人，也是個友誼會成員，但我忍不住覺得，如果價錢合適，他連自己的母親都會賣掉。難怪小偷會選擇偷他的東西。」");
	say();
	UI_add_answer("小偷");
	UI_remove_answer("Morfin");
labelFunc04B3_0206:
	case "Thurston" attend labelFunc04B3_021D:
	message("「你向 Polly 轉述了你聽到 Thurston 說關於她的話。她完全驚呆了。『Thurston 真的那麼說我嗎！我一直很喜歡他，但老實說，我一直覺得自己配不上他！』」");
	say();
	gflags[0x021B] = true;
	UI_remove_answer("Thurston");
labelFunc04B3_021D:
	case "告辭" attend labelFunc04B3_0228:
	goto labelFunc04B3_022B;
labelFunc04B3_0228:
	goto labelFunc04B3_009A;
labelFunc04B3_022B:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc04B3_0236:
	if (!(event == 0x0000)) goto labelFunc04B3_0244;
	Func092E(0xFF4D);
labelFunc04B3_0244:
	return;
}


