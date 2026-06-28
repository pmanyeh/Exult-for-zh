#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0899 0x899 ();
extern void Func092E 0x92E (var var0000);

void Func0426 object#(0x426) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0426_0223;
	UI_show_npc_face(0xFFDA, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFDA));
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00A7])) goto labelFunc0426_0056;
	message("你看见一位满脸笑容、说话和举止都很热情的商人。");
	say();
	gflags[0x00A7] = true;
	goto labelFunc0426_0060;
labelFunc0426_0056:
	message("「哎呀，有什么我能为你效劳的，");
	message(var0000);
	message("？」 Greg 问。");
	say();
labelFunc0426_0060:
	converse attend labelFunc0426_0218;
	case "姓名" attend labelFunc0426_0076:
	message("「哎呀，我的名字是 Greg 。很高兴见到你。」");
	say();
	UI_remove_answer("姓名");
labelFunc0426_0076:
	case "职业" attend labelFunc0426_0092:
	message("「哎呀，我在不列颠城这里经营杂货店。这是无畏勇者的第二个家。」");
	say();
	UI_add_answer(["杂货店", "不列颠城", "购买"]);
labelFunc0426_0092:
	case "杂货店" attend labelFunc0426_00AC:
	message("「哎呀，你看起来像是一个对冒险毫不陌生的人。无论你是在爬山、航行在海洋、穿越沙漠、探索地城或在星空下露宿，我都有你可能需要的东西。」");
	say();
	UI_remove_answer("杂货店");
	UI_add_answer("需要的东西");
labelFunc0426_00AC:
	case "不列颠城" attend labelFunc0426_00CC:
	message("「我把我的店搬到这里，是为了服务不列颠王，他专门委托我为他的各种探险队提供装备。这是真的！」");
	say();
	UI_remove_answer("不列颠城");
	UI_add_answer(["搬家", "不列颠王"]);
labelFunc0426_00CC:
	case "搬家" attend labelFunc0426_00DF:
	message("「我以前的店开在 Paws 。但 Paws 没有人有钱买太多东西。」");
	say();
	UI_remove_answer("搬家");
labelFunc0426_00DF:
	case "需要的东西" attend labelFunc0426_00FF:
	message("「每个冒险家需要的都是好运！这家店、这里买的物品、关于我和我的店，就是有一种非常幸运的特质。我可以给你举个例子来说明我的意思。」");
	say();
	UI_remove_answer("需要的东西");
	UI_add_answer(["幸运", "例子"]);
labelFunc0426_00FF:
	case "例子" attend labelFunc0426_011F:
	message("「一个名叫 Gorn 的战士曾经向我买了一把铲子，他告诉我这把铲子救了他的命。」");
	say();
	UI_add_answer(["Gorn", "救了他的命"]);
	UI_remove_answer("例子");
labelFunc0426_011F:
	case "Gorn" attend labelFunc0426_0132:
	message("「或许你认识 Gorn 。他说话带有非常奇特的口音！」");
	say();
	UI_remove_answer("Gorn");
labelFunc0426_0132:
	case "救了他的命" attend labelFunc0426_0145:
	message("「Gorn 想在某处挖掘埋藏的宝藏，这时他听到身后有声响。转过身时，他惊恐地看到一群不死骷髅正向他冲来！在急于挖出宝藏的过程中，他解开了腰带并放下了剑。他手里唯一拿着的东西就是那把铲子。他立刻开始挥舞它，结果把所有的骷髅都打成了碎片！他现在把它当成他的『幸运铲子』！」");
	say();
	UI_remove_answer("救了他的命");
labelFunc0426_0145:
	case "不列颠王" attend labelFunc0426_0196:
	message("「这是不列颠王最喜欢的杂货店。他亲口告诉我的。各种著名的冒险家都会走进这扇门。哎呀，就在上周，圣者本人就来过我这家店！」");
	say();
	var0004 = Func0931(0xFE9C, 0x0001, 0x0346, 0xFE99, 0xFE99);
	if (!var0004) goto labelFunc0426_0177;
	message("「哎呀，既然我都提到了，他的穿着跟你还真像。是的，他真的很像。」");
	say();
	UI_add_answer("穿得像圣者");
labelFunc0426_0177:
	if (!var0003) goto labelFunc0426_0188;
	message("「哎呀，我好像记得那位圣者也戴着一个和你戴的那个一样的友谊会徽章。嗯。而且他几乎把我抢个精光。我得小心盯着你，我会的。」");
	say();
	UI_add_answer("抢个精光？");
labelFunc0426_0188:
	UI_add_answer("另一个圣者？");
	UI_remove_answer("不列颠王");
labelFunc0426_0196:
	case "另一个圣者？" attend labelFunc0426_01A9:
	message("「嗯，他说他是圣者。但话说回来，遇到一些疯子或傻瓜自称是圣者也没什么不寻常的！」他看着你，有一瞬间显得有些尴尬。");
	say();
	UI_remove_answer("另一个圣者？");
labelFunc0426_01A9:
	case "穿得像圣者" attend labelFunc0426_01BC:
	message("「他穿得像圣者，就像你现在的打扮。起初我以为是 Jesse ，就是那位在那个导演的戏里扮演圣者的演员……他叫什么名字来着？~~「喔，算了。总之不是他。」");
	say();
	UI_remove_answer("穿得像圣者");
labelFunc0426_01BC:
	case "抢个精光？" attend labelFunc0426_01CF:
	message("「你会以为一个看起来像圣者的人是值得信任的。但是，不。在这个时代，谁也说不准会发生什么事！」");
	say();
	UI_remove_answer("抢个精光？");
labelFunc0426_01CF:
	case "幸运" attend labelFunc0426_01E2:
	message("「我的顾客都是那些出去展现英勇与大胆冒险的人。但大多数人都会一次又一次地回来购买更多物资。我的顾客做着这么多危险的事，我居然没有失去他们所有人并倒闭，这真是个奇迹！」");
	say();
	UI_remove_answer("幸运");
labelFunc0426_01E2:
	case "购买" attend labelFunc0426_020A:
	if (!(!(var0002 == 0x0007))) goto labelFunc0426_01FC;
	message("「非常抱歉，杂货店目前休息。请在中午重新营业时再来。」");
	say();
	goto labelFunc0426_0203;
labelFunc0426_01FC:
	message("「就像我说的，我们有你度过一次美妙冒险所需的一切！」");
	say();
	Func0899();
labelFunc0426_0203:
	UI_remove_answer("购买");
labelFunc0426_020A:
	case "告辞" attend labelFunc0426_0215:
	goto labelFunc0426_0218;
labelFunc0426_0215:
	goto labelFunc0426_0060;
labelFunc0426_0218:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc0426_0223:
	if (!(event == 0x0000)) goto labelFunc0426_02AA;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFDA));
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc0426_02A4;
	if (!(var0005 == 0x0001)) goto labelFunc0426_0267;
	var0006 = "@这里卖杂货喔！@";
labelFunc0426_0267:
	if (!(var0005 == 0x0002)) goto labelFunc0426_0277;
	var0006 = "@里面请进！@";
labelFunc0426_0277:
	if (!(var0005 == 0x0003)) goto labelFunc0426_0287;
	var0006 = "@欢迎光临！@";
labelFunc0426_0287:
	if (!(var0005 == 0x0004)) goto labelFunc0426_0297;
	var0006 = "@优质好货在这里！@";
labelFunc0426_0297:
	UI_item_say(0xFFDA, var0006);
	goto labelFunc0426_02AA;
labelFunc0426_02A4:
	Func092E(0xFFDA);
labelFunc0426_02AA:
	return;
}


