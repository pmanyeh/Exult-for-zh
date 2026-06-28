#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func087B 0x87B ()
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

	message("随着 Elynor 站在聚集的友谊会 (The Fellowship) 成员面前，仪式开始了。「我在友谊会的弟兄们，我在此场合向你们致意，并感谢你们的出席。在这个城镇发生的事件正威胁着要使我们分裂。我不需要提醒你们，『内在力量的三位一体(Triad of Inner Strength)』的第一个价值观是我们必须『致力合一』(Strive For Unity)。现在正是所有那些憎恨和恐惧我们的人可能正在密谋反对我们的时候。」");
	say();
	message("「有些人害怕觉知，因为那会照亮他们自身的局限。有些人鄙视更好的改变，因为他们花了一辈子的时间在教导自己去爱他们周遭的平庸。这些人将我们的友谊会视为一种威胁。」");
	say();
	message("「还有一些人对我们友谊会的价值感到非常不确定。那些听过反对我们的人的言论，但却亲眼看见友谊会所做的实质善举，以及它每天为成员的生活带来的改变的人。那些犹豫不决的人仍然可能被带入我们的大家庭。我们必须『信赖未来的弟兄』(Trust Our Brothers-yet-to-be)。但最重要的是，我们必须阻止我们的敌人散播对我们的偏见。为了做到这一点，我们必须证明他们的信念是不真实的。」");
	say();
	message("「我们必须证明自己配得上我们希望同胞们寄托在我们身上的信任。一旦我们充分展现了这种价值，我们获得信任的奖赏只是时间问题。这就像黑夜跟随著白天一样不可避免。正如我们的敌人总有一天会得到他们自己咎由自取、无可避免的报应一样。」");
	say();
	message("「现在我想听听今晚聚集在这里的成员们的说法。与我们分享友谊会是如何帮助你的吧！」");
	say();
	var0000 = Func08F7(0xFFAE);
	if (!var0000) goto labelFunc087B_0038;
	UI_show_npc_face(0xFFAE, 0x0000);
	message("「友谊会提升了我经营生意的能力，」Gregor 说。*");
	say();
	UI_remove_npc_face(0xFFAE);
labelFunc087B_0038:
	var0001 = Func08F7(0xFFA6);
	if (!var0001) goto labelFunc087B_006A;
	UI_show_npc_face(0xFFA6, 0x0000);
	message("「友谊会教会了我如何毫不怀疑地面对我自身成就伟大的潜力，」Owen 说。*");
	say();
	UI_show_npc_face(0xFFAF, 0x0000);
	message("「感谢你的分享，弟兄！」*");
	say();
	UI_remove_npc_face(0xFFA6);
labelFunc087B_006A:
	var0002 = Func08F7(0xFFA5);
	if (!var0002) goto labelFunc087B_008E;
	UI_show_npc_face(0xFFA5, 0x0000);
	message("你注意到 Burnside 显然已经打瞌睡了。在被旁边的人推了一下之后，他猛然睁开眼睛。「嗯……刚才的问题是什么来着……？」他不好意思地问。*");
	say();
	UI_remove_npc_face(0xFFA5);
labelFunc087B_008E:
	var0003 = Func08F7(0xFFA3);
	if (!var0003) goto labelFunc087B_00B2;
	UI_show_npc_face(0xFFA3, 0x0000);
	message("「友谊会帮助我拥有更多勇气去应对生活中意想不到的恐惧，」William 说。*");
	say();
	UI_remove_npc_face(0xFFA3);
labelFunc087B_00B2:
	var0004 = Func08F7(0xFF9F);
	if (!var0004) goto labelFunc087B_00D6;
	UI_show_npc_face(0xFF9F, 0x0000);
	message("「友谊会帮助我拥有了身为矿场主管所必须的坚定手腕，」Mikos 说。*");
	say();
	UI_remove_npc_face(0xFF9F);
labelFunc087B_00D6:
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc087B_00FA;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「这个友谊会的一切都让我毛骨悚然！」Spark 说。*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc087B_00FA:
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc087B_011E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「Elynor 显然是在竭尽全力让他们觉得自己正受到迫害，」Iolo 说。*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc087B_011E:
	var0007 = Func08F7(0xFFFD);
	if (!var0007) goto labelFunc087B_0142;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「这些友谊会成员似乎只专注于他们自己的个人利益，对其他事漠不关心，」Shamino 说。*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc087B_0142:
	var0008 = Func08F7(0xFFFC);
	if (!var0008) goto labelFunc087B_0166;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「为什么这些人会对友谊会如此着迷？我真是不明白。」*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc087B_0166:
	UI_show_npc_face(0xFFAF, 0x0000);
	message("就这样，Elynor 再次成为会议的焦点。「现在让我们开始今晚的冥想吧。」在几分钟的沉默之后，你开始意识到这场冥想会持续相当长的一段时间，而现在可能是悄悄离开的好时机。*");
	say();
	abort;
	return;
}


