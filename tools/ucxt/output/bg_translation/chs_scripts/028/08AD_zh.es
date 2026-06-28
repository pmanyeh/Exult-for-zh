#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func08AE 0x8AE (var var0000);
extern void Func08AF 0x8AF ();

void Func08AD 0x8AD ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = Func0909();
	var0001 = Func0908();
	if (!(!gflags[0x01AD])) goto labelFunc08AD_0039;
	gflags[0x01AD] = true;
	message("「感谢你，");
	message(var0000);
	message("。那个黑暗灵魂压抑我的意志太久了，以至于我不确定自己是否还拥有意志。你为 Skara Brae、为我，甚至为整个不列颠尼亚做了一件伟大的事，不过我想对你这样的人来说，这只是理所当然。我对你充满感激。」他深深地向你鞠躬。");
	say();
	if (!(!gflags[0x0003])) goto labelFunc08AD_0036;
	message("「但现在，我担心世界还没有完全恢复正常。这座黑暗高塔之外的以太正混乱地搅动着。如果不是因为墙内有某些特性，我恐怕我的心智会受到这股力量的摧残。」");
	say();
labelFunc08AD_0036:
	goto labelFunc08AD_005E;
labelFunc08AD_0039:
	if (!gflags[0x01D1]) goto labelFunc08AD_0048;
	var0002 = "你重新考虑过我的请求了吗？";
	goto labelFunc08AD_004E;
labelFunc08AD_0048:
	var0002 = "";
labelFunc08AD_004E:
	message("「很高兴再次见到你，");
	message(var0001);
	message("。");
	message(var0002);
	message("」");
	say();
labelFunc08AD_005E:
	if (!gflags[0x01D1]) goto labelFunc08AD_0070;
	var0003 = "啊，我明白了。没关系";
	Func08AE(var0003);
labelFunc08AD_0070:
	if (!(!gflags[0x01AC])) goto labelFunc08AD_0098;
	if (!(!gflags[0x01D1])) goto labelFunc08AD_0098;
	message("「现在，");
	message(var0000);
	message("。我必须请求你帮这个忙。这座塔底下的灵魂之井(Well of Souls)困住了许多受折磨的灵魂，并将 Skara Brae 的精灵束缚在这座岛上。它必须被摧毁。」Horance 专注地看着你。~「我只能希望你会试着释放他们。」");
	say();
	message("「那么，你愿意吗？」他满怀期待地看着你。");
	say();
	var0003 = "我明白了。别担心";
	Func08AE(var0003);
labelFunc08AD_0098:
	if (!(!gflags[0x01AE])) goto labelFunc08AD_00AA;
	message("Horance 思考了片刻，然后说：「当井被摧毁时，里面的灵魂将会被释放，在以太中漫无目的地飘浮一段时间。我严重亏欠 Rowena 女士和她的丈夫，我想弥补这个错误。请带她离开这个黑暗的地方，并确保她能与 Trent 重聚。这样当他们被释放时，他们就能在一起。当你完成这个任务时，我会知道，然后我们就可以继续摧毁这口井。」");
	say();
	gflags[0x01AE] = true;
	goto labelFunc08AD_00D2;
labelFunc08AD_00AA:
	if (!(!gflags[0x01A6])) goto labelFunc08AD_00BE;
	message("「但请，");
	message(var0000);
	message("，我恳求你快点。带 Rowena 去找 Trent！时间紧迫！跟她谈谈，并带她去见她丈夫！井里的灵魂不断地在受苦，有些灵魂变得如此枯竭，以至于像蜡烛的火焰一样熄灭，从存在中消失。」他看起来仿佛自己也感受到了那种痛苦。");
	say();
	goto labelFunc08AD_00D2;
labelFunc08AD_00BE:
	if (!gflags[0x0198]) goto labelFunc08AD_00CA;
	Func08AF();
	goto labelFunc08AD_00D2;
labelFunc08AD_00CA:
	message("「很好，现在我们可以继续解放 Skara Brae 的其余部分。灵魂之井(Well of Souls)的摧毁，只能通过一个愿意无私牺牲的灵魂来达成。活着的生物是不行的，因为灵魂与身体是相连的。~~去镇上找一个愿意为了整个 Skara Brae 的利益而做出牺牲的精灵。我建议你先去问镇长 Mayor Forsythe，因为在其他人之前，他有优先被考虑的权利。」当你离开时，他沉思地抚摸着下巴。");
	say();
	gflags[0x0198] = true;
labelFunc08AD_00D2:
	abort;
	return;
}
