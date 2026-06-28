#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func045D object#(0x45D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc045D_01B0;
	UI_show_npc_face(0xFFA3, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFA3));
	var0001 = UI_part_of_day();
	if (!(var0001 == 0x0007)) goto labelFunc045D_005E;
	if (!(!(var0000 == 0x0010))) goto labelFunc045D_003F;
	goto labelFunc045D_005E;
labelFunc045D_003F:
	var0002 = Func08FC(0xFFA3, 0xFFAF);
	if (!var0002) goto labelFunc045D_0059;
	message("William 不想将注意力从友谊会集会上移开。*");
	say();
	abort;
	goto labelFunc045D_005E;
labelFunc045D_0059:
	message("「我现在不能停下来跟你说话！我去大厅参加友谊会集会已经迟到了！」*");
	say();
	abort;
labelFunc045D_005E:
	var0003 = UI_wearing_fellowship();
	var0004 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0118])) goto labelFunc045D_008D;
	message("你看到一个脸上带着非常担忧神情的男人。");
	say();
	gflags[0x0118] = true;
	goto labelFunc045D_0091;
labelFunc045D_008D:
	message("「圣者！怎么了？为什么你又想和我说话？现在又出什么事了？！」William 说。");
	say();
labelFunc045D_0091:
	converse attend labelFunc045D_01AB;
	case "姓名" attend labelFunc045D_00AD:
	message("「我叫 William，");
	message(var0004);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc045D_00AD:
	case "职业" attend labelFunc045D_00DE:
	if (!gflags[0x011F]) goto labelFunc045D_00CF;
	message("「我在 Minoc 这里的锯木厂工作。」");
	say();
	UI_add_answer(["锯木厂", "Minoc"]);
	goto labelFunc045D_00DE;
labelFunc045D_00CF:
	message("「在这种时候问这个问题真是太荒谬了！天啊，当我走进我的锯木厂，看到那两个人不仅死透了，还被撕裂得几乎无法辨认时，我简直吓得魂飞魄散！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀");
labelFunc045D_00DE:
	case "锯木厂" attend labelFunc045D_00F1:
	message("「我接收在 Yew 被伐木工砍下所有树木制成的圆木，然后在当地的锯木厂将它们切成木板。接着我出售木板——大部分卖给造船匠 Owen，也卖一些给艺术家公会。」");
	say();
	UI_remove_answer("锯木厂");
labelFunc045D_00F1:
	case "Minoc" attend labelFunc045D_010B:
	message("「在这些谋杀案发生之前，这是一个如此安静的城镇。我无法相信。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer("谋杀");
labelFunc045D_010B:
	case "谋杀" attend labelFunc045D_0137:
	if (!(!gflags[0x010A])) goto labelFunc045D_0125;
	message("「今天早上，我一开锯木厂的门就发现了尸体！靠着从内在力量的三位一体，和友谊会教诲中获得的所有自律，我当下才没发疯。这件事一定发生在昨晚某个时候，但我向你发誓，我什么都没听到！」");
	say();
	gflags[0x010A] = true;
	goto labelFunc045D_0129;
labelFunc045D_0125:
	message("「我以友谊会的名义发誓，我已经把我知道关于谋杀案的一切都告诉你了！」");
	say();
labelFunc045D_0129:
	UI_remove_answer("谋杀");
	UI_add_answer("友谊会");
labelFunc045D_0137:
	case "友谊会" attend labelFunc045D_0178:
	message("「我成为友谊会成员的时间还不长。我最近才开始参加 Elynor 的集会。就在他们宣布要建造纪念碑之后。」");
	say();
	if (!var0003) goto labelFunc045D_0150;
	message("「我真高兴你是我在友谊会里的兄弟；我知道我可以信任你。我担心的是这镇上的其他人。」");
	say();
	goto labelFunc045D_016A;
labelFunc045D_0150:
	message("「你想多了解一些友谊会的事吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc045D_0166;
	Func0919();
	goto labelFunc045D_016A;
labelFunc045D_0166:
	message("「相信我，你不可能了解生活有多么残酷和可怕！你需要友谊会！我很幸运能及时找到它来面对我自己的关键时刻！我希望你能在太迟之前意识到你需要友谊会！」");
	say();
labelFunc045D_016A:
	UI_remove_answer("友谊会");
	UI_add_answer("纪念碑");
labelFunc045D_0178:
	case "理念" attend labelFunc045D_018A:
	Func091A();
	UI_remove_answer("理念");
labelFunc045D_018A:
	case "纪念碑" attend labelFunc045D_019D:
	message("「你知道的！造船匠 Owen 站在高大船首上的纪念碑。镇上每个人都知道！」");
	say();
	UI_remove_answer("纪念碑");
labelFunc045D_019D:
	case "告辞" attend labelFunc045D_01A8:
	goto labelFunc045D_01AB;
labelFunc045D_01A8:
	goto labelFunc045D_0091;
labelFunc045D_01AB:
	endconv;
	message("一旦他打发了你，过度劳累的 William 随即用双手掩面。*");
	say();
labelFunc045D_01B0:
	if (!(event == 0x0000)) goto labelFunc045D_01BE;
	Func092E(0xFFA3);
labelFunc045D_01BE:
	return;
}


