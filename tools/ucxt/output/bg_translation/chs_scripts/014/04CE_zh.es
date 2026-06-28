#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func087A 0x87A ();

void Func04CE object#(0x4CE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04CE_01BA;
	UI_show_npc_face(0xFF32, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF32));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x028B])) goto labelFunc04CE_0048;
	message("一个非常整洁、修饰整齐、和蔼可亲的男人站在你面前。");
	say();
	gflags[0x028B] = true;
	goto labelFunc04CE_0052;
labelFunc04CE_0048:
	message("「你好，");
	message(var0000);
	message("。我能怎么帮助你？」");
	say();
labelFunc04CE_0052:
	converse attend labelFunc04CE_01AF;
	case "姓名" attend labelFunc04CE_006E:
	message("他对你微笑。「啊，太好了。你不害怕问问题。记住，没有愚蠢的问题，只有笨问题。我的名字是 Eldroth ，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04CE_006E:
	case "职业" attend labelFunc04CE_008D:
	message("「我的朋友，我是物资商人。而且，恕我直言，我也是 Vesper 的顾问。或许有一天我能给你一些建议，");
	message(var0000);
	message("。请记住，那些杀不死我们的，会让我们受伤。」");
	say();
	UI_add_answer(["Vesper", "购买"]);
labelFunc04CE_008D:
	case "Vesper" attend labelFunc04CE_00B3:
	message("「是的，");
	message(var0000);
	message("，这个镇上充满了我曾给予建议的出色人们。」");
	say();
	UI_add_answer(["人们", "建议"]);
	UI_remove_answer("Vesper");
labelFunc04CE_00B3:
	case "建议" attend labelFunc04CE_00C6:
	message("「早睡早起，让杰克变成一个无聊的男孩。」");
	say();
	UI_remove_answer("建议");
labelFunc04CE_00C6:
	case "购买" attend labelFunc04CE_00F3:
	UI_remove_answer("购买");
	if (!(var0001 == 0x0007)) goto labelFunc04CE_00E9;
	message("「你想买点东西。很好。但记住，省下一枚金币就是不花一枚金币。」");
	say();
	Func087A();
	goto labelFunc04CE_00F3;
labelFunc04CE_00E9:
	message("「也许你可以等到我店铺营业的时候，");
	message(var0000);
	message("。」");
	say();
labelFunc04CE_00F3:
	case "人们" attend labelFunc04CE_0123:
	message("「你想知道谁的事？Auston？石像鬼们？Liana？Cador？或许是 Yongi？」");
	say();
	UI_push_answers();
	UI_add_answer(["Auston", "石像鬼", "Liana", "Yongi", "Cador", "先这样吧"]);
	UI_remove_answer("人们");
labelFunc04CE_0123:
	case "Liana" attend labelFunc04CE_0136:
	message("「Liana 是位非常好的年轻女子，在市政厅担任书记员。」");
	say();
	UI_remove_answer("Liana");
labelFunc04CE_0136:
	case "Yongi" attend labelFunc04CE_0149:
	message("「他是 Glided Gizzard 的酒保。」他停了下来，摇摇头，然后纠正自己。「我是说 Lilded Lizard ，」他皱着眉头。「不，是镀金蜥蜴 (Gilded Lizard) 。对，就是那个！」");
	say();
	UI_remove_answer("Yongi");
labelFunc04CE_0149:
	case "Cador" attend labelFunc04CE_015C:
	message("「Cador 监督矿区。他和他的妻子 Yvella 有个可爱的女儿叫 Catherine 。」");
	say();
	UI_remove_answer("Cador");
labelFunc04CE_015C:
	case "Auston" attend labelFunc04CE_0175:
	message("「镇长？我以为你现在应该已经见过他了，");
	message(var0000);
	message("。他做得非常好。你可能没有意识到，」他红着脸说，「但当初是我建议他去竞选这个职位的。」");
	say();
	UI_remove_answer("Auston");
labelFunc04CE_0175:
	case "石像鬼" attend labelFunc04CE_018E:
	message("「我担心他们会发动暴动。我知道 Auston 也有同样的想法，因为最近他找我寻求准备这种事件的指导。我会像警告他一样警告你。永远记住，");
	message(var0000);
	message("，最好的防御就是好的防御！」");
	say();
	UI_remove_answer("石像鬼");
labelFunc04CE_018E:
	case "先这样吧" attend labelFunc04CE_01A1:
	UI_pop_answers();
	UI_remove_answer("人们");
labelFunc04CE_01A1:
	case "告辞" attend labelFunc04CE_01AC:
	goto labelFunc04CE_01AF;
labelFunc04CE_01AC:
	goto labelFunc04CE_0052;
labelFunc04CE_01AF:
	endconv;
	message("「再会，");
	message(var0000);
	message("。永远别忘了，下雨时草总是比较绿。」");
	say();
labelFunc04CE_01BA:
	if (!(event == 0x0000)) goto labelFunc04CE_0252;
	var0002 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF32));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!((var0002 >= 0x0002) || (var0002 <= 0x0006))) goto labelFunc04CE_0252;
	if (!((var0001 == 0x0007) || (var0001 == 0x0005))) goto labelFunc04CE_0248;
	if (!(var0003 == 0x0001)) goto labelFunc04CE_0218;
	var0004 = "@及时缝补省九针。@";
labelFunc04CE_0218:
	if (!(var0003 == 0x0002)) goto labelFunc04CE_0228;
	var0004 = "@别打倒地的人。@";
labelFunc04CE_0228:
	if (!(var0003 == 0x0003)) goto labelFunc04CE_0238;
	var0004 = "@早起的鸟儿有虫吃。@";
labelFunc04CE_0238:
	if (!(var0003 == 0x0004)) goto labelFunc04CE_0248;
	var0004 = "@一鸟在手胜过双鸟在林。@";
labelFunc04CE_0248:
	UI_item_say(0xFF32, var0004);
labelFunc04CE_0252:
	return;
}


