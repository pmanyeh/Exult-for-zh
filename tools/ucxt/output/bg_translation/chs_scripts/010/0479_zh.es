#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08AA 0x8AA ();
extern void Func08A9 0x8A9 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0479 object#(0x479) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0479_02E8;
	UI_show_npc_face(0xFF87, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF87));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0186]) goto labelFunc0479_004A;
	UI_add_answer("Sprellic");
labelFunc0479_004A:
	if (!gflags[0x0167]) goto labelFunc0479_005E;
	if (!(!gflags[0x0168])) goto labelFunc0479_005E;
	UI_add_answer("假旗子");
labelFunc0479_005E:
	if (!(!gflags[0x0173])) goto labelFunc0479_0070;
	message("你看到一个身经百战、满布伤痕的老兵。");
	say();
	gflags[0x0173] = true;
	goto labelFunc0479_0074;
labelFunc0479_0070:
	message("「你好！」 Kliftin 说。「你最近有遇到什么麻烦吗？」");
	say();
labelFunc0479_0074:
	converse attend labelFunc0479_02E3;
	case "姓名" attend labelFunc0479_008A:
	message("「我是 Kliftin 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0479_008A:
	case "职业" attend labelFunc0479_00A9:
	message("「在我的年代，我是个非常出色的士兵。现在我是 Jhelom 这里军械库的主人。」");
	say();
	UI_add_answer(["老兵", "军械库", "Jhelom", "买"]);
labelFunc0479_00A9:
	case "买" attend labelFunc0479_00EC:
	if (!((var0002 == 0x0007) || (var0002 == 0x0013))) goto labelFunc0479_00DB;
	message("「我在这里贩售防具和武器。我有东西能满足你的各种需求。你想看防具还是武器？」");
	say();
	UI_push_answers();
	UI_add_answer(["防具", "武器"]);
	goto labelFunc0479_00E5;
labelFunc0479_00DB:
	message("「我的店目前休息中，但请再回来， ");
	message(var0000);
	message("。」");
	say();
labelFunc0479_00E5:
	UI_remove_answer("买");
labelFunc0479_00EC:
	case "防具" attend labelFunc0479_00F7:
	Func08AA();
labelFunc0479_00F7:
	case "武器" attend labelFunc0479_0102:
	Func08A9();
labelFunc0479_0102:
	case "老兵" attend labelFunc0479_0115:
	message("「你肯定不想听那些古老的战争故事吧？！我看过太多死亡和毁灭了。就说到这吧。」");
	say();
	UI_remove_answer("老兵");
labelFunc0479_0115:
	case "军械库" attend labelFunc0479_0135:
	message("「我贩售并收藏各种类型的武器。生意一直都很好，虽然我最好的顾客总是死在决斗中！」");
	say();
	UI_remove_answer("军械库");
	UI_add_answer(["决斗", "买"]);
labelFunc0479_0135:
	case "Jhelom" attend labelFunc0479_0148:
	message("「Jhelom 是个粗犷的地方。如果你不喜欢惹麻烦，那么我可以想到许多比这里更好的地方让你待着。」");
	say();
	UI_remove_answer("Jhelom");
labelFunc0479_0148:
	case "决斗" attend labelFunc0479_0162:
	message("「每天中午在城镇广场，人们都会来解决他们的分歧。他们战斗到见血或分出死活。这简直是疯了！就像那个 Sprellic 一样。」");
	say();
	UI_remove_answer("决斗");
	UI_add_answer("Sprellic");
labelFunc0479_0162:
	case "Sprellic" attend labelFunc0479_019F:
	if (!(!gflags[0x0186])) goto labelFunc0479_017F;
	message("「Sprellic ，我们这位脾气相当温和的旅馆老板，从伤疤图书馆的墙上偷走了荣誉旗，而且拒绝归还。现在他必须和我们当地最优秀的三名战士进行生死决斗。」");
	say();
	UI_add_answer("战士们");
	goto labelFunc0479_0198;
labelFunc0479_017F:
	if (!(!gflags[0x0167])) goto labelFunc0479_0194;
	message("你向这位全神贯注听着的老人讲述 Sprellic 的故事。「听起来像是骗子 Sullivan 的杰作。他是一个从未被抓到过的传奇小偷和骗子！甚至很少有人相信他真的存在。你不可能用那样的故事来劝阻决斗者。」");
	say();
	UI_add_answer("劝阻");
	goto labelFunc0479_0198;
labelFunc0479_0194:
	message("「你在那个可怜的 Sprellic 需要时帮助他，真是太好了。」");
	say();
labelFunc0479_0198:
	UI_remove_answer("Sprellic");
labelFunc0479_019F:
	case "战士们" attend labelFunc0479_01B2:
	message("「如果你想了解更多关于这整件事的详情，你可以去酒馆问问。」");
	say();
	UI_remove_answer("战士们");
labelFunc0479_01B2:
	case "劝阻" attend labelFunc0479_01CC:
	message("「唯一能劝阻他们不杀可怜的 Sprellic 的方法就是归还荣誉旗！它一定是被 Sullivan 拿走了，但决斗者们不知道！如果我们有一个荣誉旗的拷贝品，我们就可以把它给他们！」");
	say();
	UI_remove_answer("劝阻");
	UI_add_answer("拷贝品");
labelFunc0479_01CC:
	case "拷贝品" attend labelFunc0479_01EC:
	message("「在我的年代，我缝合伤口的技术相当不错……嗯，或许我可以制作一面荣誉旗的拷贝品。这个欺骗的把戏只需要撑到他们正式取消决斗就行了。」");
	say();
	UI_remove_answer("拷贝品");
	UI_add_answer(["欺骗", "缝纫"]);
labelFunc0479_01EC:
	case "缝纫" attend labelFunc0479_01FF:
	message("「在我经历过的所有战斗之后，我缝合了太多同志的伤口。现在我退休了，缝纫反而成了我的嗜好。」他有些尴尬地看着你。「这没什么不对吧！」");
	say();
	UI_remove_answer("缝纫");
labelFunc0479_01FF:
	case "欺骗" attend labelFunc0479_0219:
	message("「即使他们发现那不是真正的荣誉旗，他们也绝对不会承认。那样做会让他们看起来很愚蠢。他们宁愿直接向任何说那不是他们荣誉旗的人挑战另一场决斗！但我们还是一次解决一场决斗吧。」");
	say();
	UI_remove_answer("欺骗");
	UI_add_answer("荣誉旗");
labelFunc0479_0219:
	case "荣誉旗" attend labelFunc0479_027D:
	message("「你要我制作一面可以交给伤疤图书馆的荣誉旗，好让决斗停止吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0479_0265;
	if (!gflags[0x0170]) goto labelFunc0479_024E;
	message("「那你必须确保在你去决斗区之前来跟我拿。决斗区就在我店外靠近伤疤图书馆的地方。如果要及时完成，我最好现在就开始忙！请几小时后再回我的店里。」*");
	say();
	gflags[0x0167] = true;
	gflags[0x017B] = true;
	UI_set_timer(0x0000);
	abort;
	goto labelFunc0479_0262;
labelFunc0479_024E:
	message("「那你必须确保在 Sprellic 去决斗区之前来跟我拿。如果要及时完成，我最好现在就开始忙。请几小时后再回我的店里。」*");
	say();
	gflags[0x017B] = true;
	gflags[0x0167] = true;
	UI_set_timer(0x0000);
	abort;
labelFunc0479_0262:
	goto labelFunc0479_0276;
labelFunc0479_0265:
	if (!gflags[0x0170]) goto labelFunc0479_0272;
	message("「你想亲自对付伤疤图书馆？那很好，但要警告你——他们唯一相信的荣誉就是胜利。」");
	say();
	goto labelFunc0479_0276;
labelFunc0479_0272:
	message("「你手里明明握着拯救 Sprellic 生命的钥匙，怎么能在面对必死结局时袖手旁观呢？！」");
	say();
labelFunc0479_0276:
	UI_remove_answer("荣誉旗");
labelFunc0479_027D:
	case "假旗子" attend labelFunc0479_02D5:
	var0004 = UI_get_timer(0x0000);
	if (!(!(var0004 > 0x0002))) goto labelFunc0479_02A1;
	message("「别打扰我！旗子还没完成！晚点再来我的店里。」");
	say();
	goto labelFunc0479_02CE;
labelFunc0479_02A1:
	message("「这是我制作的伤疤图书馆荣誉旗的仿制品。」");
	say();
	var0005 = UI_add_party_items(0x0001, 0x011E, 0xFE99, 0xFE99, false);
	if (!var0005) goto labelFunc0479_02CA;
	message("「决斗的时间一定快到了。祝 Sprellic 好运，也祝你好运！」");
	say();
	gflags[0x0168] = true;
	goto labelFunc0479_02CE;
labelFunc0479_02CA:
	message("「如果你要拿旗子，你必须先放下一些东西！」");
	say();
labelFunc0479_02CE:
	UI_remove_answer("假旗子");
labelFunc0479_02D5:
	case "告辞" attend labelFunc0479_02E0:
	goto labelFunc0479_02E3;
labelFunc0479_02E0:
	goto labelFunc0479_0074;
labelFunc0479_02E3:
	endconv;
	message("「日安。」*");
	say();
labelFunc0479_02E8:
	if (!(event == 0x0000)) goto labelFunc0479_0377;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF87));
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!((var0002 == 0x0007) || (var0002 == 0x0013))) goto labelFunc0479_0371;
	if (!(var0006 == 0x0001)) goto labelFunc0479_0334;
	var0007 = "@Fine arms and armour for sale!@";
labelFunc0479_0334:
	if (!(var0006 == 0x0002)) goto labelFunc0479_0344;
	var0007 = "@Just look at this fine armoury!@";
labelFunc0479_0344:
	if (!(var0006 == 0x0003)) goto labelFunc0479_0354;
	var0007 = "@I have the fiercest weapons!@";
labelFunc0479_0354:
	if (!(var0006 == 0x0004)) goto labelFunc0479_0364;
	var0007 = "@I have the strongest armour!@";
labelFunc0479_0364:
	UI_item_say(0xFF87, var0007);
	goto labelFunc0479_0377;
labelFunc0479_0371:
	Func092E(0xFF87);
labelFunc0479_0377:
	return;
}


