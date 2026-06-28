#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04F8 object#(0x4F8) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;

	if (!(event == 0x0001)) goto labelFunc04F8_0424;
	UI_show_npc_face(0xFF08, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x01F7])) goto labelFunc04F8_004C;
	message("你看到一位看起来很博学的男人，带着友善的表情。");
	say();
	gflags[0x01F7] = true;
	gflags[0x01F9] = true;
	goto labelFunc04F8_0056;
labelFunc04F8_004C:
	message("「向你致敬，");
	message(var0001);
	message("。」Brion 微笑着。");
	say();
labelFunc04F8_0056:
	if (!gflags[0x0008]) goto labelFunc04F8_0063;
	UI_add_answer("Caddellite");
labelFunc04F8_0063:
	if (!gflags[0x01EE]) goto labelFunc04F8_0070;
	UI_add_answer("水晶");
labelFunc04F8_0070:
	if (!(gflags[0x01ED] && (!gflags[0x01F0]))) goto labelFunc04F8_0082;
	UI_add_answer("有水晶");
labelFunc04F8_0082:
	if (!gflags[0x0209]) goto labelFunc04F8_009A;
	if (!(gflags[0x01DA] && (!var0002))) goto labelFunc04F8_009A;
	UI_add_answer("Zelda 的感觉");
labelFunc04F8_009A:
	converse attend labelFunc04F8_0423;
	case "姓名" attend labelFunc04F8_00C2:
	message("「你可以叫我 Brion。」");
	say();
	if (!(gflags[0x01DA] && (!var0002))) goto labelFunc04F8_00BB;
	UI_add_answer("Zelda 的感觉");
labelFunc04F8_00BB:
	UI_remove_answer("姓名");
labelFunc04F8_00C2:
	case "职业" attend labelFunc04F8_00E8:
	message("「我是 Moonglow 这里天文台的负责人，」他自豪地说。「这就是存放望远镜的地方。」");
	say();
	UI_add_answer(["望远镜", "Moonglow"]);
	if (!gflags[0x0100]) goto labelFunc04F8_00E8;
	UI_add_answer("事件");
labelFunc04F8_00E8:
	case "Moonglow" attend labelFunc04F8_0102:
	message("「我很喜欢住在 Moonglow。我非常喜欢这里的人。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("Moonglow");
labelFunc04F8_0102:
	case "人" attend labelFunc04F8_0125:
	message("「你和我的双胞胎兄弟 Nelson 谈过吗？他负责智者书库。或者是 Elad ？你肯定知道法师 Penumbra 。」");
	say();
	UI_add_answer(["Nelson", "Elad", "Penumbra"]);
	UI_remove_answer("人");
labelFunc04F8_0125:
	case "Zelda 的感觉" attend labelFunc04F8_0140:
	var0002 = true;
	gflags[0x01DB] = true;
	message("「喔，我明白了，」他耸了耸肩。「我从来没有这样想过我兄弟的助手。这太糟糕了，因为我的时间只允许我进行观察。啊，好吧，我还有什么可以帮你的吗？」");
	say();
	UI_remove_answer("Zelda 的感觉");
labelFunc04F8_0140:
	case "Nelson" attend labelFunc04F8_0153:
	message("「我见他的次数没有我希望的那么多，因为我们都太忙于工作了。如果你看到他，会很容易认出他来，因为人们说我们长得一模一样。我当然不这么认为，因为他不仅生来就有头脑，还有一张英俊的脸。」");
	say();
	UI_remove_answer("Nelson");
labelFunc04F8_0153:
	case "Elad" attend labelFunc04F8_0166:
	message("「可怜的 Elad 。他有时会在晚上加入我一起观赏星空。他很多年来一直想离开 Moonglow 。他喜欢这个岛，但充满了对漫游的渴望。」他微笑着。");
	say();
	UI_remove_answer("Elad");
labelFunc04F8_0166:
	case "Penumbra" attend labelFunc04F8_0179:
	message("「你没听说过吗？两百年前她让自己沉睡了。」");
	say();
	UI_remove_answer("Penumbra");
labelFunc04F8_0179:
	case "望远镜" attend labelFunc04F8_0193:
	message("「我当然把它放在楼上了。欢迎你随时使用它。事实上，我也有一个太阳系仪（orrery），如果你也想看看的话。」");
	say();
	UI_add_answer("太阳系仪");
	UI_remove_answer("望远镜");
labelFunc04F8_0193:
	case "Caddellite" attend labelFunc04F8_01AD:
	message("他奇怪地看着你，耸了耸肩说：「Caddellite 是一种非不列颠尼亚原产的矿物。事实上，它只来自陨石。~~「而已知最后一颗撞击地球的陨石降落在东北海域的某个地方。你为什么想知道？」");
	say();
	UI_add_answer("头盔");
	UI_remove_answer("Caddellite");
labelFunc04F8_01AD:
	case "头盔" attend labelFunc04F8_01C4:
	message("「你想要一顶用 Caddellite 做的头盔？」他仔细想了想。「也许 Minoc 的 Zorn 有技术能打造出你想要的那种头盔。如果你找到 Caddellite ，就把它带给他。~~「我听过关于东北海域曾经存在过一座岛屿的传闻。也许我在智者书库的兄弟能帮上忙。」");
	say();
	UI_remove_answer("头盔");
	gflags[0x01F6] = true;
labelFunc04F8_01C4:
	case "太阳系仪" attend labelFunc04F8_01E9:
	message("太阳系仪？那是我们太阳系所有行星的模型，包含不列颠尼亚的两颗卫星。太阳系仪的移动与我们真实系统的实际、当前轨道相匹配。");
	say();
	if (!(!var0003)) goto labelFunc04F8_01E2;
	message("「我非常兴奋，因为很快就会发生一件非常罕见的事件！」");
	say();
	UI_add_answer("事件");
labelFunc04F8_01E2:
	UI_remove_answer("太阳系仪");
labelFunc04F8_01E9:
	case "事件" attend labelFunc04F8_0200:
	message("「你指的是我们这行所说的天文排列（Astronomical Alignment）。行星和卫星将会完美地排成一直线，这可是 800 年才发生一次的事！」");
	say();
	var0003 = true;
	UI_remove_answer("事件");
labelFunc04F8_0200:
	case "告辞" attend labelFunc04F8_0246:
	if (!(gflags[0x01E8] && (gflags[0x01E9] && (gflags[0x01EA] && gflags[0x01DD])))) goto labelFunc04F8_0228;
	message("「祝你有个美好的一天，");
	message(var0001);
	message("。你可以随时使用我的天文台。」*");
	say();
	abort;
	goto labelFunc04F8_0246;
labelFunc04F8_0228:
	message("「在你离开之前，让我给你看看我的一些小玩意。这是我的……」");
	say();
	UI_push_answers();
	UI_add_answer(["月亮", "六分仪", "风筝", "水晶", "再看看"]);
labelFunc04F8_0246:
	case "再看看" attend labelFunc04F8_0252:
	UI_pop_answers();
labelFunc04F8_0252:
	case "月亮" attend labelFunc04F8_02AC:
	var0004 = false;
	var0005 = UI_find_nearby(item, 0x0179, 0x0014, 0x0000);
	enum();
labelFunc04F8_0270:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc04F8_0290;
	if (!(UI_get_item_frame(var0008) == 0x001C)) goto labelFunc04F8_028D;
	var0004 = true;
labelFunc04F8_028D:
	goto labelFunc04F8_0270;
labelFunc04F8_0290:
	if (!var0004) goto labelFunc04F8_029D;
	message("「这代表着绕行不列颠尼亚的其中一颗卫星。」他把模型递给你。你接过来，很快就意识到它完全是用绿色起司做的。~~「我自己雕刻的，」当你把它还给他时他说道。");
	say();
	goto labelFunc04F8_02A1;
labelFunc04F8_029D:
	message("「现在那东西跑哪去了？」他抓抓头说。「嗯，它一定就在这附近。我以后再给你看。」他似乎比他愿意表现出来的还要心烦意乱。");
	say();
labelFunc04F8_02A1:
	UI_remove_answer("月亮");
	gflags[0x01E8] = true;
labelFunc04F8_02AC:
	case "六分仪" attend labelFunc04F8_0308:
	var0009 = false;
	var000A = UI_find_nearby(0xFE9C, 0x028A, 0x0028, 0x0000);
	enum();
labelFunc04F8_02CC:
	for (var0008 in var000A with var000B to var000C) attend labelFunc04F8_02EC;
	if (!(UI_get_item_frame(var0008) == 0x0001)) goto labelFunc04F8_02E9;
	var0009 = true;
labelFunc04F8_02E9:
	goto labelFunc04F8_02CC;
labelFunc04F8_02EC:
	if (!var0009) goto labelFunc04F8_02F9;
	message("他递给你一个纯金的六分仪。「这是传给 Moonglow 天文台历任负责人的。这东西有 200 多年的历史了。」当你把它还给他时，他满面笑容。");
	say();
	goto labelFunc04F8_02FD;
labelFunc04F8_02F9:
	message("「该死！不见了！那东西在这里已经有 200 多年了。」他似乎很不高兴。");
	say();
labelFunc04F8_02FD:
	UI_remove_answer("六分仪");
	gflags[0x01E9] = true;
labelFunc04F8_0308:
	case "风筝" attend labelFunc04F8_033C:
	var000D = UI_find_nearest(0xFE9C, 0x0149, 0xFFFF);
	if (!var000D) goto labelFunc04F8_032D;
	message("他给你看一个风筝。「这是我读了我兄弟图书馆里的一本书后自己做的。」");
	say();
	goto labelFunc04F8_0331;
labelFunc04F8_032D:
	message("「那东西去哪了？」他抓抓下巴，显然很困惑。「我真希望它没不见。那是我根据我兄弟图书馆里的一本书制作的。」");
	say();
labelFunc04F8_0331:
	UI_remove_answer("风筝");
	gflags[0x01EA] = true;
labelFunc04F8_033C:
	case "水晶" attend labelFunc04F8_037F:
	if (!(!gflags[0x01EE])) goto labelFunc04F8_034F;
	message("「这个，」他说着，展示了一堆以某种无法确定的方式连接在一起的水晶，「这是一个太阳系仪查看器（orrery viewer）。它能让人从不列颠尼亚的任何地方看到我这里的太阳系仪。」~~他似乎若有所思。~~「我知道你无法留在这里观看行星排列。");
	say();
labelFunc04F8_034F:
	message("你想要这个来查看我的太阳系仪，并更好地预测行星的位置吗？」");
	say();
	gflags[0x01DD] = true;
	var000E = Func090A();
	if (!var000E) goto labelFunc04F8_036A;
	message("他自豪地笑了。「我想你会想要的。但是，有一个问题。我还需要一颗水晶才能完全完成查看器。如果你去酒馆，你可能会在那里找到一位有时会提供给我水晶的商人或旅行者。如果你能找到另一颗水晶，我就能把完成的查看器交给你。」");
	say();
	goto labelFunc04F8_0378;
labelFunc04F8_036A:
	message("「很好，");
	message(var0001);
	message("。我希望你以后不会为此后悔。」");
	say();
	gflags[0x01EE] = true;
labelFunc04F8_0378:
	UI_remove_answer("水晶");
labelFunc04F8_037F:
	case "有水晶" attend labelFunc04F8_03E0:
	var000F = Func0931(0xFE9B, 0x0001, 0x02EA, 0xFE99, 0xFE99);
	if (!var000F) goto labelFunc04F8_03D6;
	message("「你有水晶了？太好了。」他接过你从冒险者那里得到的水晶，开始把它连接到他的太阳系仪查看器上。他很快就完成了。");
	say();
	gflags[0x01ED] = false;
	UI_remove_npc(0xFF5C);
	UI_remove_answer("有水晶");
	UI_add_answer("要水晶");
	var0010 = UI_remove_party_items(0x0001, 0x02EA, 0xFE99, 0xFE99, false);
	goto labelFunc04F8_03E0;
labelFunc04F8_03D6:
	message("「我很抱歉，");
	message(var0001);
	message("，但我必须要有水晶才能完成查看器。」");
	say();
labelFunc04F8_03E0:
	case "要水晶" attend labelFunc04F8_0420:
	var0011 = UI_add_party_items(0x0001, 0x0302, 0xFE99, 0x0001, 0x0000);
	if (!var0011) goto labelFunc04F8_0415;
	message("「好好使用它，");
	message(var0001);
	message("。」他把这个设备交给了你。");
	say();
	gflags[0x01F0] = true;
	goto labelFunc04F8_0419;
labelFunc04F8_0415:
	message("他摇了摇头。「你没有足够的空间来放它。也许等你以后再回来时再说吧。」");
	say();
labelFunc04F8_0419:
	UI_remove_answer("要水晶");
labelFunc04F8_0420:
	goto labelFunc04F8_009A;
labelFunc04F8_0423:
	endconv;
labelFunc04F8_0424:
	if (!(event == 0x0000)) goto labelFunc04F8_0432;
	Func092E(0xFF08);
labelFunc04F8_0432:
	return;
}


