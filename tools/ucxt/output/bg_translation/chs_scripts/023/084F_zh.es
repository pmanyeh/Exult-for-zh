#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0852 0x852 ();
extern void Func0911 0x911 (var var0000);

void Func084F 0x84F ()
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
	var var0012;
	var var0013;

	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	message("仪式开始了，巴特林站在不列颠城友谊会聚集的成员面前。他开始布道。「我的朋友们，我最初创立友谊会是为了帮助不列颠尼亚及其人民为未来做好准备。");
	message("今天，它过去最伟大的象征之一来到了这里，加入了我们的友谊会。这是伟大的一天，因为当我们的过去和现在交织在一起时，我们将发出一个响彻整个不列颠尼亚的消息。");
	message("很快地，它所有的人民将会为团结而共同奋斗。」人群爆发出热烈的欢呼声。「当他们听到圣者成为友谊会的一员时，那些最初不信任我们的人将会看到我们宗旨的真相。");
	message("那么我们就可以迎来这样一天：整个不列颠尼亚都配得上它将获得的丰厚回报。」");
	say();
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc084F_005C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 对你低语：「你确定吗，");
	message(var0000);
	message("，你想加入这些人吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc084F_0050;
	message("「我不确定你是勇敢还是纯粹的愚蠢。」*");
	say();
	goto labelFunc084F_0055;
labelFunc084F_0050:
	message("「听到你不确定，我松了一口气！容我提醒你，现在拒绝他们的提议还不算太晚！我们赶快离开吧！」*");
	say();
	abort;
labelFunc084F_0055:
	UI_remove_npc_face(0xFFFF);
labelFunc084F_005C:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「现在是我们的成员作见证的时候了，谈谈他们如何将内在力量三位一体应用到他们的生活中。谁先来？」");
	say();
	var0004 = Func08F7(0xFFCB);
	if (!var0004) goto labelFunc084F_008E;
	UI_show_npc_face(0xFFCB, 0x0000);
	message("「友谊会教会我如何与他人的缺点共存，」Gaye 说。");
	say();
	UI_remove_npc_face(0xFFCB);
labelFunc084F_008E:
	var0005 = Func08F7(0xFFD7);
	if (!var0005) goto labelFunc084F_00C0;
	UI_show_npc_face(0xFFD7, 0x0000);
	message("「在加入友谊会之前，我对生活失去了所有的热情，」Candice 说。*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「谢谢你的分享，Candice。」*");
	say();
	UI_remove_npc_face(0xFFD7);
labelFunc084F_00C0:
	var0006 = Func08F7(0xFFD5);
	if (!var0006) goto labelFunc084F_00E4;
	UI_show_npc_face(0xFFD5, 0x0000);
	message("「友谊会帮助我对人更加诚实，」Patterson 说。*");
	say();
	UI_remove_npc_face(0xFFD5);
labelFunc084F_00E4:
	var0007 = Func08F7(0xFFD3);
	if (!var0007) goto labelFunc084F_0108;
	UI_show_npc_face(0xFFD3, 0x0000);
	message("「友谊会教会我不让别人摆布我，」Figg 说。*");
	say();
	UI_remove_npc_face(0xFFD3);
labelFunc084F_0108:
	var0008 = Func08F7(0xFFC9);
	if (!var0008) goto labelFunc084F_012C;
	UI_show_npc_face(0xFFC9, 0x0000);
	message("「内在力量三位一体帮助我提高技能，打造更好的武器，」Grayson 说。*");
	say();
	UI_remove_npc_face(0xFFC9);
labelFunc084F_012C:
	var0009 = Func08F7(0xFFC6);
	if (!var0009) goto labelFunc084F_015E;
	UI_show_npc_face(0xFFC6, 0x0000);
	message("「友谊会让我重新走上了繁荣的道路，」Gordon 说。*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「是的！谢谢你的分享，兄弟！」*");
	say();
	UI_remove_npc_face(0xFFC6);
labelFunc084F_015E:
	var000A = Func08F7(0xFFC5);
	if (!var000A) goto labelFunc084F_0182;
	UI_show_npc_face(0xFFC5, 0x0000);
	message("「友谊会教会我不要害怕成功，」Sean 说。*");
	say();
	UI_remove_npc_face(0xFFC5);
labelFunc084F_0182:
	var000B = Func08F7(0xFFC1);
	if (!var000B) goto labelFunc084F_01A6;
	UI_show_npc_face(0xFFC1, 0x0000);
	message("「友谊会给了我的生活一个全新的目标。就在今天，我招募了两个潜在成员！」Millie 说。*");
	say();
	UI_remove_npc_face(0xFFC1);
labelFunc084F_01A6:
	var000C = Func08F7(0xFFDE);
	if (!var000C) goto labelFunc084F_01CA;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「友谊会教会我阶级结构的罪恶，」Nanna 说。*");
	say();
	UI_remove_npc_face(0xFFDE);
labelFunc084F_01CA:
	var0002 = Func08F7(0xFFFF);
	var000D = Func08F7(0xFFFD);
	if (!(var000D && var0002)) goto labelFunc084F_023A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("你注意到 Iolo 正在和 Shamino 低语。「我不认为");
	message(var0000);
	message("意识到了情况的严重性。");
	message(var0001);
	message("劝不听。也许你应该试试看。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「好吧，我来试试看。」他轻推了你一下，低声说道：「也许我们应该离开这里，");
	message(var0001);
	message("，免得我们之中有人做出日后会后悔的事？我们离开这个地方吧，好吗？」");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc084F_022F;
	message("「我很高兴你同意我的看法。你准备好我们随时可以离开。」*");
	say();
	abort;
	goto labelFunc084F_0233;
labelFunc084F_022F:
	message("「那么我想太迟了，因为我已经后悔来到这里了。」*");
	say();
labelFunc084F_0233:
	UI_remove_npc_face(0xFFFD);
labelFunc084F_023A:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「现在是欢迎友谊会最新成员入席的时候了。」巴特林示意你加入他在讲台上的位置。");
	say();
	message("他将一杯酒倒入水晶高脚杯中，并抿了一口。");
	say();
	message("高脚杯在大厅里传递，每位成员各自抿了一口。最后，高脚杯递到了你手上。你若有所思地看着它，感觉房间里所有人的目光都集中在你身上。");
	say();
	if (!var000D) goto labelFunc084F_02C9;
	var000F = Func08F7(0xFFFC);
	var0010 = UI_is_pc_female();
	if (!var0010) goto labelFunc084F_0275;
	var0011 = "她";
	goto labelFunc084F_027B;
labelFunc084F_0275:
	var0011 = "他";
labelFunc084F_027B:
	if (!var000F) goto labelFunc084F_02C9;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("你听到 Shamino 在你身后绝望地对 Dupre 低语。「Dupre，我们没能成功向圣者展示");
	message(var0011);
	message("肯定正在犯下的错误。你是我们最后的希望了。」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("你感觉有人拍了拍你的肩膀，转过头看到 Dupre 在你耳边低语：「我知道一个比这里好得多的喝酒去处。也许你想在那里和你的战友们一起喝一杯？」");
	say();
	var0012 = Func090A();
	if (!var0012) goto labelFunc084F_02BE;
	message("「那我们就走吧。现在就走！」*");
	say();
	abort;
	goto labelFunc084F_02C2;
labelFunc084F_02BE:
	message("「那么我希望这个游戏能娱乐到你，因为它让你的战友们非常担心。」*");
	say();
labelFunc084F_02C2:
	UI_remove_npc_face(0xFFFC);
labelFunc084F_02C9:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「现在还有最后一项对你友谊会忠诚度的考验。我想你现在应该已经读过《友谊会之书》了。我必须问你两个问题。答案可以在书中找到。」巴特林谦虚地笑了笑。「我是作者，你知道吗？好吧，没关系。我们开始吧。」");
	say();
	Func0852();
	if (!(!gflags[0x0038])) goto labelFunc084F_0328;
	message("「太棒了，圣者！」");
	say();
	message("你强忍着犹豫的颤抖，从高脚杯中深吸了一大口。巴特林走到你面前。「愿这个消息传遍四方，我们最新的成员正是圣者！」");
	say();
	message("其他友谊会成员高兴地欢呼。");
	say();
	var0013 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	gflags[0x0091] = true;
	gflags[0x0006] = true;
	Func0911(0x01F4);
	if (!var0013) goto labelFunc084F_0320;
	message("「请容许我颁发友谊会奖章给你。」巴特林把奖章交给你。「请——随时佩戴你的奖章，因为它对所有看到它的人来说，象征着你与友谊会同行。立刻戴到你的脖子上！喔，还有……欢迎加入友谊会，圣者。」*");
	say();
	gflags[0x0090] = true;
	goto labelFunc084F_0324;
labelFunc084F_0320:
	message("「你负载太重了，无法接受友谊会奖章。你必须减轻负担。」*");
	say();
labelFunc084F_0324:
	abort;
	goto labelFunc084F_0331;
labelFunc084F_0328:
	message("「亲爱的圣者。你必须明白，你必须了解所有关于友谊会的事情，我才能接纳你。请研读你的《友谊会之书》然后再回来找我。」");
	say();
	message("你的头脑似乎不太清楚。如果你听不懂与你交谈的另一个人的话，我也不会感到惊讶。」");
	say();
	abort;
labelFunc084F_0331:
	return;
}


