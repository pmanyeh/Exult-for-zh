#game "blackgate"
void Func08C0 0x8C0 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = false;
	UI_push_answers();
	if (!gflags[0x01CC]) goto labelFunc08C0_002D;
	UI_add_answer("Forsythe");
labelFunc08C0_002D:
	if (!gflags[0x01C3]) goto labelFunc08C0_003A;
	UI_add_answer("摆渡人");
labelFunc08C0_003A:
	if (!gflags[0x01C4]) goto labelFunc08C0_0047;
	UI_add_answer("Markham");
labelFunc08C0_0047:
	if (!gflags[0x01CB]) goto labelFunc08C0_0054;
	UI_add_answer("Quenton");
labelFunc08C0_0054:
	if (!gflags[0x01C7]) goto labelFunc08C0_0061;
	UI_add_answer("Trent");
labelFunc08C0_0061:
	if (!gflags[0x01C2]) goto labelFunc08C0_006E;
	UI_add_answer("Caine");
labelFunc08C0_006E:
	UI_add_answer("暂时没有");
	message("「那好。你想谈谈谁？」");
	say();
labelFunc08C0_0079:
	converse attend labelFunc08C0_0336;
	case "Forsythe" attend labelFunc08C0_008F:
	message("她狠狠地瞪了你一会儿。「关于那个——笨手笨脚的蠢货，我没什么好说的！」");
	say();
	UI_remove_answer("Forsythe");
labelFunc08C0_008F:
	case "摆渡人" attend labelFunc08C0_00A9:
	message("「我对那个人知之甚少。自从巫妖将愤怒的死者从坟墓中召唤出来后，他就一直待在这里。不过我知道一件事：即使你击败了 Horance，他依然会留在这里服从他所侍奉的禁制。」她对你说这话时，神情显得有些哀伤。");
	say();
	UI_remove_answer("摆渡人");
	UI_add_answer("愤怒的死者");
labelFunc08C0_00A9:
	case "愤怒的死者" attend labelFunc08C0_00BC:
	message("「我们祖先的坟墓涌出了 Skara Brae 的死者。他们的思想和心灵都已腐烂，根本不在乎活人。因此得名『愤怒的死者』。」");
	say();
	UI_remove_answer("愤怒的死者");
labelFunc08C0_00BC:
	case "Markham" attend labelFunc08C0_00D6:
	message("她对你歪着头微微一笑。「那个无赖开了这附近最棒的酒吧之一，至少他是想让你这么相信。他这个人有点粗鲁，但他懂得怎么买好酒，这点倒是可以肯定。而且他挑选酒吧女侍的品味也算不上差，」她眨了眨眼。「如果你见过 Paulette，你就知道我在说什么了。」");
	say();
	UI_remove_answer("Markham");
	UI_add_answer("Paulette");
labelFunc08C0_00D6:
	case "Quenton" attend labelFunc08C0_00F4:
	message("「那个可怜的人一生充满了悲伤，这是我的魔法似乎都无能为力的唯一恶疾。~~「他的妻子 Gwen 在他们的女儿 Marney 出生几年后，被一群相当凶残的男人掳走了。我知道她遭遇了什么，但出于同情，我没有让 Quenton 知道这件事。~~「那些男人因她那无与伦比的美貌而误以为她是位贵族女士。当他们发现她只是一个卑微渔夫的妻子时，他们残暴地强暴了她，并把她卖给了一家名声狼藉的妓院。幸运的是，她到那里后不久就去世了。」Mordra 显得极为悲伤。");
	say();
	UI_remove_answer("Quenton");
	UI_add_answer("Marney");
	var0000 = true;
labelFunc08C0_00F4:
	case "Marney" attend labelFunc08C0_010E:
	message("「好啦，好啦，话说一半就称不上是故事了。」她继续述说着 Quenton 悲惨的一生。~~「Marney 在她母亲被绑架后就病倒了，此后好几年都活在死亡的边缘。最后，Quenton 再也无法忍受了。他向一个名叫 Michael、绰号叫 Blade 的暴力之徒借了钱。当他无力偿还贷款时，Blade 便杀了他。~~「然而，这并不是我这段可怜故事的终点，因为即使在他死后，Quenton 的亡灵仍被迫留在这座精神之镇，在那里他不得不看着他挚爱的 Marney 病情加重并最终死去。~~「Yorl，那个在 Marney 父亲去世后照顾她的男人，为她尘世的\t 身躯建造了一座神龛。」她沉默了一会儿，低下了头。~~「我由衷希望你能帮我们除掉 Horance，好让 Quenton  \t 能与他的至爱重逢，无论她们身在何方。」");
	say();
	UI_remove_answer("Marney");
	UI_add_answer("Blade");
labelFunc08C0_010E:
	case "Blade" attend labelFunc08C0_0121:
	message("自从你见到她以来，她的脸上第一次变得毫无情感。~~「我之所以知道这个故事，是因为我已故的哥哥 Rinaldo 曾任职于 Yew 的高等法院。他写信告诉我，他们不仅抓到了 Blade，还抓到了绑架 Quenton 妻子的海盗。那些海盗在地下城最底层的牢房里度过了余生，而 Blade 则在断头台的刀刃下迎来了他的下场。~~「很适合他的死法，你不觉得吗？」");
	say();
	UI_remove_answer("Blade");
labelFunc08C0_0121:
	case "Paulette" attend labelFunc08C0_0134:
	message("「她真是个可爱的女孩，虽然想法有点像小孩子。我相信她的父亲不是这个世界的人。他说话的语调很奇特，外貌也和大多数不列颠尼亚的人大不相同。~~「不过你也非常清楚，许多其他世界的人都会来到这片土地。我甚至听过传闻说连不列颠王本人也是个外世界人。想像一下吧。」她脸上露出狡黠的表情。");
	say();
	UI_remove_answer("Paulette");
labelFunc08C0_0134:
	case "Trent" attend labelFunc08C0_01B1:
	if (!gflags[0x01A6]) goto labelFunc08C0_0157;
	message("「那两个人能重新在一起真是太好了。我只希望 Quenton 也能迎来相同的命运。」她的声音里充满了希望。");
	say();
	if (!(!var0000)) goto labelFunc08C0_0154;
	UI_add_answer("Quenton");
labelFunc08C0_0154:
	goto labelFunc08C0_01A6;
labelFunc08C0_0157:
	if (!gflags[0x01A5]) goto labelFunc08C0_0194;
	if (!(!gflags[0x01A8])) goto labelFunc08C0_0179;
	message("「既然 Trent 已经走出了阴霾，我相信是时候让他建造，那座将成为巫妖棺材的灵魂囚笼(Soul Cage)了。」她毫无幽默感地笑了笑。~~「如果你想把这个小镇从 Horance 的魔掌中解救出来，就去找他并协助他吧。」");
	say();
	if (!(!var0004)) goto labelFunc08C0_0176;
	UI_add_answer("巫妖 Horance");
labelFunc08C0_0176:
	goto labelFunc08C0_0191;
labelFunc08C0_0179:
	if (!gflags[0x01AA]) goto labelFunc08C0_018D;
	message("「我感觉仿佛卸下了一副重担。对于你所做的一切，我真是感激不尽。然而，在灵魂之井(Well of Souls)被摧毁之前，我们是不会完全摆脱巫妖力量的。」");
	say();
	UI_add_answer("灵魂之井(Well of Souls)");
	goto labelFunc08C0_0191;
labelFunc08C0_018D:
	message("「你必须好好使用他的笼子来阻止巫妖。」");
	say();
labelFunc08C0_0191:
	goto labelFunc08C0_01A6;
labelFunc08C0_0194:
	message("「唉，我担心他的心智因失去妻子 Rowena 而破碎了。他无法打破吞噬着他的恨意。总有一天，他会耗尽心力，而他的灵魂也将永远迷失。也许，Rowena 会知道有什么能帮上忙……但不行，她自己也正需要协助。」Mordra 摇了摇头。");
	say();
	if (!(!var0002)) goto labelFunc08C0_01A6;
	UI_add_answer("Rowena");
labelFunc08C0_01A6:
	UI_remove_answer("Trent");
	var0001 = true;
labelFunc08C0_01B1:
	case "Rowena" attend labelFunc08C0_01F8:
	UI_remove_answer("Rowena");
	if (!gflags[0x01A6]) goto labelFunc08C0_01DB;
	message("「那两个人能重新在一起真是太好了。我只希望 Quenton 也能迎来相同的命运。」她的声音里充满了希望。");
	say();
	if (!(!var0000)) goto labelFunc08C0_01D8;
	UI_add_answer("Quenton");
labelFunc08C0_01D8:
	goto labelFunc08C0_01ED;
labelFunc08C0_01DB:
	if (!(!gflags[0x01A9])) goto labelFunc08C0_01E9;
	message("「你必须想办法让她从巫妖的迷魂术中清醒过来，哪怕只有短短的一瞬间。我肯定她掌握着让 Trent 恢复自我的关键。也许，如果你能找到她的一件贴身物品——也许是来自 Trent 的东西——并带给她。那说不定能打破她所受的魔咒。」");
	say();
	goto labelFunc08C0_01ED;
labelFunc08C0_01E9:
	message(" Mistress Mordra 稍微皱了下眉头。「我希望那个可怜的女孩能再多撑一会儿，直到她能被带离那个恐怖的地方。」");
	say();
labelFunc08C0_01ED:
	UI_remove_answer("Rowena");
	var0002 = true;
labelFunc08C0_01F8:
	case "Caine" attend labelFunc08C0_0260:
	if (!(!gflags[0x01C0])) goto labelFunc08C0_022B;
	message("「他是一个饱受折磨的灵魂。他将小镇的毁灭归咎于自己。在他的妄想中，他不断感受到自己死亡时的火焰。然而，我相信他的状态带给了他某种净化与智能。据说他甚至知道生命与死亡的答案。」~~她显得有些困惑。「不管事实如何，你必须从他那里取得用来消灭巫妖的魔法药剂。不过，我可以给你成分清单。」");
	say();
	UI_add_answer("配方");
	gflags[0x01C0] = true;
	if (!(!var0004)) goto labelFunc08C0_0224;
	UI_add_answer("巫妖 Horance");
labelFunc08C0_0224:
	var0003 = true;
	goto labelFunc08C0_0259;
labelFunc08C0_022B:
	if (!(!gflags[0x01AA])) goto labelFunc08C0_0247;
	message("「很好，你已经设法调配出了魔法配方；现在你必须将它与灵魂囚笼(Soul Cage)配合使用，来消灭 Horance。」");
	say();
	if (!(!var0004)) goto labelFunc08C0_0244;
	UI_add_answer("巫妖 Horance");
labelFunc08C0_0244:
	goto labelFunc08C0_0259;
labelFunc08C0_0247:
	message("她的笑容扩大了。「你非常完美地利用了那张配方。现在，我们必须想办法摧毁灵魂之井(Well of Souls)，以解放 Skara Brae。」");
	say();
	if (!(!var0005)) goto labelFunc08C0_0259;
	UI_add_answer("灵魂之井(Well of Souls)");
labelFunc08C0_0259:
	UI_remove_answer("Caine");
labelFunc08C0_0260:
	case "配方" attend labelFunc08C0_0273:
	message("「如果我告诉你，你必须确保弄对它们。否则，当初我告诉那个该死的市长时发生的惨剧就会再次重演。而且，虽然我们在 Skara Brae 这里已经没有更多的生命可以失去了，但你却有一条相当宝贵的性命！~~「瓦解巫妖所需的成分有：一瓶隐形药水、一瓶疗伤药水，以及一小瓶曼陀罗根精华——我家里的某个地方有一瓶。记住，只要 -一- 小瓶！」");
	say();
	UI_remove_answer("配方");
labelFunc08C0_0273:
	case "巫妖 Horance" attend labelFunc08C0_0291:
	message("「他就是大火发生时，我试图消灭的那个该死的巫妖。法师 Horance 显然在某一天决定了凡人的寿命不适合他。于是，他开始研究避免死亡的方法。最后，他找到了将自己变成不死生物——一个长生不老的不死生物——巫妖所需的配方。不幸的是，这种转变加上他本就偏执的行为，使他变成了今天这个邪恶的怪物！~~「而正是他那邪恶的『黑色仪式』在摆布着我们所有人！」");
	say();
	UI_remove_answer("巫妖 Horance");
	UI_add_answer("黑色仪式");
	var0004 = true;
labelFunc08C0_0291:
	case "黑暗之塔" attend labelFunc08C0_02B6:
	message("「Dark Tower 坐落在 Skara Brae 的西北角。它的建造有些古怪，因为我发现很难用我的魔法感知去渗透它。在它内部，」她说道，「你会找到灵魂之井。");
	say();
	UI_remove_answer("黑暗之塔");
	if (!(!var0005)) goto labelFunc08C0_02B2;
	UI_add_answer("灵魂之井(Well of Souls)");
labelFunc08C0_02B2:
	var0006 = true;
labelFunc08C0_02B6:
	case "灵魂之井(Well of Souls)" attend labelFunc08C0_02DF:
	var0005 = true;
	message("「灵魂之井是一个强大的神器，位于 Dark Tower 的后方，巫妖就是从中汲取力量。死者的灵魂被囚禁在那里，注定要遭受 Horance 那无止境食欲的折磨。」她的容貌上显露出一丝痛苦的表情。");
	say();
	if (!(!var0004)) goto labelFunc08C0_02D4;
	UI_add_answer("巫妖 Horance");
labelFunc08C0_02D4:
	UI_remove_answer("灵魂之井(Well of Souls)");
	var0005 = true;
labelFunc08C0_02DF:
	case "黑色仪式" attend labelFunc08C0_031C:
	if (!(!gflags[0x01AA])) goto labelFunc08C0_0303;
	message(" Mordra 愤怒地说道：「每晚子时一到，Skara Brae 的亡灵就会前往 Dark Tower，并被用来为 Horance 注入力量以延续他的黑暗存在。其他人在这发生时都毫无察觉，但我能感受得到却无法阻止自己。」");
	say();
	if (!(!var0006)) goto labelFunc08C0_0300;
	UI_add_answer("黑暗之塔");
labelFunc08C0_0300:
	goto labelFunc08C0_0315;
labelFunc08C0_0303:
	message("「即使巫妖已经不在了，我们依然会被吸引到他举行黑色仪式的地方。他一定是对我们施加了某种禁制，并将其与灵魂之井(Well of Souls)的力量绑在了一起。噢，他曾是个多么狡猾的恶棍啊。」对一位熟练法师的由衷敬佩与厌恶之情交织在 Mordra 的表情中。");
	say();
	if (!(!var0005)) goto labelFunc08C0_0315;
	UI_add_answer("灵魂之井(Well of Souls)");
labelFunc08C0_0315:
	UI_remove_answer("黑色仪式");
labelFunc08C0_031C:
	case "暂时没有" attend labelFunc08C0_0333:
	message("「我明白了。那么，你想谈谈什么？」*");
	say();
	UI_clear_answers();
	UI_pop_answers();
	goto labelFunc08C0_0336;
labelFunc08C0_0333:
	goto labelFunc08C0_0079;
labelFunc08C0_0336:
	endconv;
	return;
}
