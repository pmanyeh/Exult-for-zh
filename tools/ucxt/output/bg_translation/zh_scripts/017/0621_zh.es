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
	var0000 = "@歡迎，聖者。@";
	var0003 = 0x0000;
labelFunc0621_0036:
	if (!(var0001 == 0x0001)) goto labelFunc0621_005C;
	if (!gflags[0x0157]) goto labelFunc0621_005B;
	var0000 = "或許你應該使用水晶球。";
	var0002 = 0xFE9B;
	var0003 = 0x0001;
	goto labelFunc0621_005C;
labelFunc0621_005B:
	abort;
labelFunc0621_005C:
	if (!(var0001 == 0x0002)) goto labelFunc0621_0078;
	var0000 = "我們到了嗎？";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0078:
	if (!(var0001 == 0x0003)) goto labelFunc0621_0094;
	var0000 = "我需要喝一杯。";
	var0002 = 0xFFFC;
	var0003 = 0x0000;
labelFunc0621_0094:
	if (!(var0001 == 0x0004)) goto labelFunc0621_00B0;
	var0000 = "我老了，受不了這個了。";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_00B0:
	if (!(var0001 == 0x0005)) goto labelFunc0621_00CC;
	var0000 = "我聽到了什麼聲音！";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_00CC:
	if (!(var0001 == 0x0006)) goto labelFunc0621_00E8;
	var0000 = "喔不！別再下雨了！";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_00E8:
	if (!(var0001 == 0x0007)) goto labelFunc0621_0104;
	var0000 = "我們需要沼澤靴！";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_0104:
	if (!(var0001 == 0x0008)) goto labelFunc0621_0120;
	var0000 = "我們什麼時候能休息？";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0120:
	if (!(var0001 == 0x0009)) goto labelFunc0621_013C;
	var0000 = "這裡是 Destard 地城。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_013C:
	if (!(var0001 == 0x000A)) goto labelFunc0621_0158;
	var0000 = "這裡是 Despise 地城。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0158:
	if (!(var0001 == 0x000B)) goto labelFunc0621_0174;
	var0000 = "這裡是 Deceit 地城。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0174:
	if (!(var0001 == 0x000C)) goto labelFunc0621_0190;
	var0000 = "這裡是蜜蜂洞穴。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0190:
	if (!(var0001 == 0x000D)) goto labelFunc0621_01AC;
	var0000 = "這裡是 Minoc 礦坑。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_01AC:
	if (!(var0001 == 0x000E)) goto labelFunc0621_01C8;
	var0000 = "這裡是 Vesper 礦坑。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_01C8:
	if (!(var0001 == 0x000F)) goto labelFunc0621_01E4;
	var0000 = "這看起來很有趣。";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_01E4:
	if (!(var0001 == 0x0010)) goto labelFunc0621_0200;
	var0000 = "這個地方真讓人毛骨悚然。";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_0200:
	if (!(var0001 == 0x0011)) goto labelFunc0621_021C;
	var0000 = "哇...！";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_021C:
	if (!(var0001 == 0x0012)) goto labelFunc0621_0238;
	var0000 = "我們來唱首船歌吧！";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_0238:
	if (!(var0001 == 0x0013)) goto labelFunc0621_0254;
	var0000 = "讓我們贏點金幣吧！";
	var0002 = 0xFFFC;
	var0003 = 0x0000;
labelFunc0621_0254:
	if (!(var0001 == 0x0014)) goto labelFunc0621_0270;
	var0000 = "聖者，他們在演一齣關於你的戲呢！";
	var0002 = 0xFFFF;
	var0003 = 0x0001;
labelFunc0621_0270:
	if (!(var0001 == 0x0015)) goto labelFunc0621_028C;
	var0000 = "不列顛城真大！";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_028C:
	if (!(var0001 == 0x0016)) goto labelFunc0621_02A8;
	var0000 = "千萬要小心。誰知道樹叢裡潛伏著什麼...";
	var0002 = 0xFE9B;
	var0003 = 0x0001;
labelFunc0621_02A8:
	if (!(var0001 == 0x0017)) goto labelFunc0621_02C4;
	var0000 = "複習好你的石像鬼語了嗎？";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_02C4:
	if (!(var0001 == 0x0018)) goto labelFunc0621_02E0;
	var0000 = "真正的戰士住在這裡！";
	var0002 = 0xFFFC;
	var0003 = 0x0000;
labelFunc0621_02E0:
	if (!(var0001 == 0x0019)) goto labelFunc0621_02FC;
	var0000 = "你的舊遺物在這裡！";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_02FC:
	if (!(var0001 == 0x001A)) goto labelFunc0621_0318;
	var0000 = "那麵包聞起來好香...";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0318:
	if (!(var0001 == 0x001B)) goto labelFunc0621_0334;
	var0000 = "那食物聞起來好香...";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0334:
	if (!(var0001 == 0x001C)) goto labelFunc0621_0350;
	var0000 = "那水果看起來很好吃...";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_0350:
	if (!(var0001 == 0x001D)) goto labelFunc0621_036C;
	var0000 = "我開始睏了...";
	var0002 = 0xFFFE;
	var0003 = 0x0000;
labelFunc0621_036C:
	if (!(var0001 == 0x001E)) goto labelFunc0621_0388;
	var0000 = "慈悲（Compassion）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0388:
	if (!(var0001 == 0x001F)) goto labelFunc0621_03A4;
	var0000 = "誠實（Honesty）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_03A4:
	if (!(var0001 == 0x0020)) goto labelFunc0621_03C0;
	var0000 = "正義（Justice）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_03C0:
	if (!(var0001 == 0x0021)) goto labelFunc0621_03DC;
	var0000 = "靈性（Spirituality）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_03DC:
	if (!(var0001 == 0x0022)) goto labelFunc0621_03F8;
	var0000 = "榮譽（Honor）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_03F8:
	if (!(var0001 == 0x0023)) goto labelFunc0621_0414;
	var0000 = "勇氣（Valor）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0414:
	if (!(var0001 == 0x0024)) goto labelFunc0621_0430;
	var0000 = "犧牲（Sacrifice）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_0430:
	if (!(var0001 == 0x0025)) goto labelFunc0621_044C;
	var0000 = "謙卑（Humility）神殿！";
	var0002 = 0xFFFD;
	var0003 = 0x0000;
labelFunc0621_044C:
	if (!(var0001 == 0x0026)) goto labelFunc0621_0468;
	var0000 = "小心橋上的巨魔。";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_0468:
	if (!(var0001 == 0x0027)) goto labelFunc0621_0484;
	var0000 = "啊，甜蜜的家。";
	var0002 = 0xFFFF;
	var0003 = 0x0000;
labelFunc0621_0484:
	if (!(var0001 == 0x0028)) goto labelFunc0621_04A0;
	var0000 = "這噪音！啊！好痛！";
	var0002 = 0xFE9B;
	var0003 = 0x0000;
labelFunc0621_04A0:
	if (!(var0001 == 0x0029)) goto labelFunc0621_04DA;
	if (!((!Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0000)) && gflags[0x0004])) goto labelFunc0621_04D9;
	var0000 = "你留下了小圓球！";
	var0002 = 0xFE9B;
	var0003 = 0x0001;
	goto labelFunc0621_04DA;
labelFunc0621_04D9:
	abort;
labelFunc0621_04DA:
	if (!(var0001 == 0x002A)) goto labelFunc0621_0514;
	if (!((!Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001)) && gflags[0x0005])) goto labelFunc0621_0513;
	var0000 = "你留下了小方塊！";
	var0002 = 0xFE9B;
	var0003 = 0x0001;
	goto labelFunc0621_0514;
labelFunc0621_0513:
	abort;
labelFunc0621_0514:
	if (!(var0001 == 0x002B)) goto labelFunc0621_054E;
	if (!((!Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0002)) && gflags[0x0003])) goto labelFunc0621_054D;
	var0000 = "你留下了小四面體！";
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


