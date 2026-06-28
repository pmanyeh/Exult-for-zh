#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08DB 0x8DB ();
extern void Func08DC 0x8DC ();
extern void Func0911 0x911 (var var0000);

void Func044A object#(0x44A) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc044A_0009;
	abort;
labelFunc044A_0009:
	UI_show_npc_face(0xFFB6, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0065]) goto labelFunc044A_0036;
	UI_add_answer(["黑石", "月之门"]);
labelFunc044A_0036:
	if (!(!gflags[0x00E7])) goto labelFunc044A_0048;
	message("这位年迈的法师看起来比你上次见到他时还要衰老且更加健忘。");
	say();
	gflags[0x00E7] = true;
	goto labelFunc044A_005A;
labelFunc044A_0048:
	if (!(!gflags[0x0003])) goto labelFunc044A_0056;
	message("「你是谁？」 Rudyom 问道。「喔——我想起来了。」");
	say();
	goto labelFunc044A_005A;
labelFunc044A_0056:
	message("「又见面了，圣者！」 Rudyom 喜笑颜开地说。");
	say();
labelFunc044A_005A:
	converse attend labelFunc044A_01B6;
	case "姓名" attend labelFunc044A_0070:
	message("「这我知道。我的名字叫 Rudyom。」");
	say();
	UI_remove_answer("姓名");
labelFunc044A_0070:
	case "职业" attend labelFunc044A_00A1:
	if (!(!gflags[0x0003])) goto labelFunc044A_008D;
	message("「我也不确定了。我曾经是个强大的法师！现在什么都不管用了。魔法出错了！如果你需要的话，我想我可以卖你一些药材和法术。还有，注意那张地毯——它坏掉了！」");
	say();
	UI_add_answer("魔毯");
	goto labelFunc044A_0091;
labelFunc044A_008D:
	message("「我是一位强大的法师！魔法是我的专长！我可以卖你法术或药材。」");
	say();
labelFunc044A_0091:
	UI_add_answer(["魔法", "法术", "药材"]);
labelFunc044A_00A1:
	case "魔法" attend labelFunc044A_00C2:
	if (!(!gflags[0x0003])) goto labelFunc044A_00B7;
	message("「我不明白哪里出了问题。我的魔法不再那么灵光了。」");
	say();
	goto labelFunc044A_00BB;
labelFunc044A_00B7:
	message("「以太正自由地流动！魔法再次与我们同在了！」");
	say();
labelFunc044A_00BB:
	UI_remove_answer("魔法");
labelFunc044A_00C2:
	case "魔毯" attend labelFunc044A_00DD:
	message("「那张蓝色大地毯。那是一张飞行魔毯。它没有发挥应有的功用。」");
	say();
	message("Rudyom 四处张望并抓了抓头。");
	say();
	message("「真好笑。它刚刚还在这里的。喔！我想起来了。几周前一些冒险者借走了我的飞行魔毯。当他们回来时，他们说把地毯遗失在巨蛇脊背山脉附近。在失落之河周围的某个地方。我想如果你想去找它，你可以留着。反正它运作得不是很好。也许你能让它动起来。不管怎样，我本来就不喜欢那个颜色！」");
	say();
	UI_remove_answer("魔毯");
labelFunc044A_00DD:
	case "法术" attend labelFunc044A_00FF:
	message("「你想买些法术吗？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc044A_00FB;
	Func08DB();
	goto labelFunc044A_00FF;
labelFunc044A_00FB:
	message("「喔。那就算了。」");
	say();
labelFunc044A_00FF:
	case "药材" attend labelFunc044A_0121:
	message("「你想买些药材吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc044A_011D;
	Func08DC();
	goto labelFunc044A_0121;
labelFunc044A_011D:
	message("「喔。那就算了。」");
	say();
labelFunc044A_0121:
	case "黑石" attend labelFunc044A_013B:
	message("「别跟我提那个肮脏矿物的名字！它让我感到非常挫折！在我丧失记忆之前，我正用那种地狱般的材料进行实验。但现在我怎么也想不起我当时想做什么了。」");
	say();
	UI_add_answer("实验");
	UI_remove_answer("黑石");
labelFunc044A_013B:
	case "月之门" attend labelFunc044A_015C:
	if (!(!gflags[0x0004])) goto labelFunc044A_0151;
	message("「它们很烦人，不是吗？我确实相信黑石是解决问题的方法。我希望我没有失忆，这样我就可以继续我的工作了……」");
	say();
	goto labelFunc044A_0155;
labelFunc044A_0151:
	message("「我明白它们永远消失了。别怪你自己，圣者。这场灾难只会为实验与发现的新时代铺平道路。我希望如此。」");
	say();
labelFunc044A_0155:
	UI_remove_answer("月之门");
labelFunc044A_015C:
	case "实验" attend labelFunc044A_017C:
	message("「我都把它们写在我的笔记本里了，就在这附近的某处。欢迎你随便看。但远离那个该死的转换器——那很危险！」");
	say();
	UI_add_answer(["转换器", "笔记本"]);
	UI_remove_answer("实验");
labelFunc044A_017C:
	case "笔记本" attend labelFunc044A_018F:
	message("「我用它来记录我对黑石和黑石转换器的实验。」");
	say();
	UI_remove_answer("笔记本");
labelFunc044A_018F:
	case "转换器" attend labelFunc044A_01A8:
	message("「就是那个像法杖的东西。它本应该能磁化并神奇地转换黑石，但它无法正常运作。试着把它指向一块黑石，你就会明白我的意思。但别站得太近！如果你想要一件垃圾，欢迎你拿走！」");
	say();
	Func0911(0x0032);
	UI_remove_answer("转换器");
labelFunc044A_01A8:
	case "告辞" attend labelFunc044A_01B3:
	goto labelFunc044A_01B6;
labelFunc044A_01B3:
	goto labelFunc044A_005A;
labelFunc044A_01B6:
	endconv;
	if (!(!gflags[0x0003])) goto labelFunc044A_01C5;
	message("「这么快就走？哎呀。希望你回来时我还能认得你。」*");
	say();
	goto labelFunc044A_01C9;
labelFunc044A_01C5:
	message("「再见，圣者。」*");
	say();
labelFunc044A_01C9:
	return;
}


