#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0900 0x900 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0621 object#(0x621) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0003)) goto labelFunc0621_05CB;
	var0000 = "";
	var0001 = UI_get_item_quality(item);
	var0002 = item;
	var0003 = 0x0000;
	if (!(var0001 == 0x0000)) goto labelFunc0621_0036;
	var0000 = "@欢迎，圣者。@";
	var0003 = 0x0000;
labelFunc0621_0036:
	if (!(var0001 == 0x0001)) goto labelFunc0621_005C;
	if (!gflags[0x0157]) goto labelFunc0621_005B;
	var0000 = "或许你应该使用水晶球。";
	var0002 = 0xFE9B;
	var0003 = 0x0001;
	goto labelFunc0621_005C;
labelFunc0621_005B:
	abort;
labelFunc0621_005C:
	if (!(var0001 == 0x0002)) goto labelFunc0621_0078;
	var0000 = "我们到了吗？";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0078:
	if (!(var0001 == 0x0003)) goto labelFunc0621_0094;
	var0000 = "我需要喝一杯。";
	var0002 = 0xFFFC;
	var0003 = 0x0000;
labelFunc0621_0094:
	if (!(var0001 == 0x0004)) goto labelFunc0621_00B0;
	var0000 = "我老了，受不了这个了。";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_00B0:
	if (!(var0001 == 0x0005)) goto labelFunc0621_00CC;
	var0000 = "我听到了什么声音！";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_00CC:
	if (!(var0001 == 0x0006)) goto labelFunc0621_00E8;
	var0000 = "喔不！别再下雨了！";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_00E8:
	if (!(var0001 == 0x0007)) goto labelFunc0621_0104;
	var0000 = "我们需要沼泽靴！";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_0104:
	if (!(var0001 == 0x0008)) goto labelFunc0621_0120;
	var0000 = "我们什么时候能休息？";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0120:
	if (!(var0001 == 0x0009)) goto labelFunc0621_013C;
	var0000 = "这里是 Destard 地城。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_013C:
	if (!(var0001 == 0x000A)) goto labelFunc0621_0158;
	var0000 = "这里是 Despise 地城。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0158:
	if (!(var0001 == 0x000B)) goto labelFunc0621_0174;
	var0000 = "这里是 Deceit 地城。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0174:
	if (!(var0001 == 0x000C)) goto labelFunc0621_0190;
	var0000 = "这里是蜜蜂洞穴。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0190:
	if (!(var0001 == 0x000D)) goto labelFunc0621_01AC;
	var0000 = "这里是 Minoc 矿坑。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_01AC:
	if (!(var0001 == 0x000E)) goto labelFunc0621_01C8;
	var0000 = "这里是 Vesper 矿坑。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_01C8:
	if (!(var0001 == 0x000F)) goto labelFunc0621_01E4;
	var0000 = "这看起来很有趣。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_01E4:
	if (!(var0001 == 0x0010)) goto labelFunc0621_0200;
	var0000 = "这个地方真让人毛骨悚然。";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_0200:
	if (!(var0001 == 0x0011)) goto labelFunc0621_021C;
	var0000 = "哇...！";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_021C:
	if (!(var0001 == 0x0012)) goto labelFunc0621_0238;
	var0000 = "我们来唱首船歌吧！";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_0238:
	if (!(var0001 == 0x0013)) goto labelFunc0621_0254;
	var0000 = "让我们赢点金币吧！";
	var0002 = 0xFFFC;
	var0003 = 0x0000;
labelFunc0621_0254:
	if (!(var0001 == 0x0014)) goto labelFunc0621_0270;
	var0000 = "圣者，他们在演一出关于你的戏呢！";
	var0002 = 0xFFFF;
	var0003 = 0x0001;
labelFunc0621_0270:
	if (!(var0001 == 0x0015)) goto labelFunc0621_028C;
	var0000 = "不列颠城真大！";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_028C:
	if (!(var0001 == 0x0016)) goto labelFunc0621_02A8;
	var0000 = "千万要小心。谁知道树丛里潜伏着什么...";
	var0002 = 0xFE9B;
	var0003 = 0x0001;
labelFunc0621_02A8:
	if (!(var0001 == 0x0017)) goto labelFunc0621_02C4;
	var0000 = "复习好你的石像鬼语了吗？";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_02C4:
	if (!(var0001 == 0x0018)) goto labelFunc0621_02E0;
	var0000 = "真正的战士住在这里！";
	var0002 = 0xFFFC;
	var0003 = 0x0000;
labelFunc0621_02E0:
	if (!(var0001 == 0x0019)) goto labelFunc0621_02FC;
	var0000 = "你的旧遗物在这里！";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_02FC:
	if (!(var0001 == 0x001A)) goto labelFunc0621_0318;
	var0000 = "那面包闻起来好香...";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0318:
	if (!(var0001 == 0x001B)) goto labelFunc0621_0334;
	var0000 = "那食物闻起来好香...";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0334:
	if (!(var0001 == 0x001C)) goto labelFunc0621_0350;
	var0000 = "那水果看起来很好吃...";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0350:
	if (!(var0001 == 0x001D)) goto labelFunc0621_036C;
	var0000 = "我开始困了...";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_036C:
	if (!(var0001 == 0x001E)) goto labelFunc0621_0388;
	var0000 = "慈悲（Compassion）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0388:
	if (!(var0001 == 0x001F)) goto labelFunc0621_03A4;
	var0000 = "诚实（Honesty）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_03A4:
	if (!(var0001 == 0x0020)) goto labelFunc0621_03C0;
	var0000 = "正义（Justice）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_03C0:
	if (!(var0001 == 0x0021)) goto labelFunc0621_03DC;
	var0000 = "灵性（Spirituality）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_03DC:
	if (!(var0001 == 0x0022)) goto labelFunc0621_03F8;
	var0000 = "荣誉（Honor）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_03F8:
	if (!(var0001 == 0x0023)) goto labelFunc0621_0414;
	var0000 = "勇气（Valor）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0414:
	if (!(var0001 == 0x0024)) goto labelFunc0621_0430;
	var0000 = "牺牲（Sacrifice）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0430:
	if (!(var0001 == 0x0025)) goto labelFunc0621_044C;
	var0000 = "谦卑（Humility）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_044C:
	if (!(var0001 == 0x0026)) goto labelFunc0621_0468;
	var0000 = "小心桥上的巨魔。";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_0468:
	if (!(var0001 == 0x0027)) goto labelFunc0621_0484;
	var0000 = "啊，甜蜜的家。";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_0484:
	if (!(var0001 == 0x0028)) goto labelFunc0621_04A0;
	var0000 = "这噪音！啊！好痛！";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_04A0:
	if (!(var0001 == 0x0029)) goto labelFunc0621_04DA;
	if (!((!Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0000)) && gflags[0x0004])) goto labelFunc0621_04D9;
	var0000 = "你留下了小圆球！";
	var0002 = 0xFE9B;
	var0003 = 0x0001;
	goto labelFunc0621_04DA;
labelFunc0621_04D9:
	abort;
labelFunc0621_04DA:
	if (!(var0001 == 0x002A)) goto labelFunc0621_0514;
	if (!((!Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001)) && gflags[0x0005])) goto labelFunc0621_0513;
	var0000 = "你留下了小方块！";
	var0002 = 0xFE9B;
	var0003 = 0x0001;
	goto labelFunc0621_0514;
labelFunc0621_0513:
	abort;
labelFunc0621_0514:
	if (!(var0001 == 0x002B)) goto labelFunc0621_054E;
	if (!((!Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0002)) && gflags[0x0003])) goto labelFunc0621_054D;
	var0000 = "你留下了小四面体！";
	var0002 = 0xFE9B;
	var0003 = 0x0001;
	goto labelFunc0621_054E;
labelFunc0621_054D:
	abort;
labelFunc0621_054E:
	if (!(var0002 == 0xFE9B)) goto labelFunc0621_0569;
	var0002 = Func0900();
	if (!(var0002 == 0xFE9C)) goto labelFunc0621_0569;
	abort;
labelFunc0621_0569:
	if (!(var0003 == 0x0000)) goto labelFunc0621_059A;
	var0000 = (("@" + var0000) + "@");
	var0004 = Func08F7(var0002);
	if (!var0004) goto labelFunc0621_059A;
	UI_item_say(var0002, var0000);
labelFunc0621_059A:
	if (!(var0003 == 0x0001)) goto labelFunc0621_05CB;
	var0004 = Func08F7(var0002);
	if (!var0004) goto labelFunc0621_05CB;
	UI_show_npc_face(var0002, 0x0000);
	message(var0000);
	message("");
	say();
	UI_remove_npc_face(var0002);
labelFunc0621_05CB:
	return;
}


