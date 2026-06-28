#game "blackgate"
// externs
extern void Func0710 object#(0x710) ();
extern var Func0908 0x908 ();

void Func031D shape#(0x31D) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x002D)) goto labelFunc031D_0017;
	item->Func0710();
	return;
labelFunc031D_0017:
	UI_play_sound_effect2(0x000E, item);
	UI_book_mode(item);
	if (!(var0000 > 0x0033)) goto labelFunc031D_0035;
	message("这不是一张有效的卷轴");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0035:
	if (!(var0000 == 0x0000)) goto labelFunc031D_0046;
	message("来自不列颠王的办公桌");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0046:
	if (!(var0000 == 0x0001)) goto labelFunc031D_008B;
	message("如何让圣者为了寻找线索而忙上好几个小时——");
	say();
	message("（请往下卷动）*");
	say();
	message("如何让圣者为了寻找线索而非常忙碌好几个小时——");
	say();
	message("（请往下卷动）*");
	say();
	message("如何让圣者为了寻找线索而非常非常忙碌好几个小时——");
	say();
	message("（请往下卷动）*");
	say();
	message("如何让圣者为了寻找线索而非常非常「非常」忙碌好几个小时——");
	say();
	message("（请往下卷动）*");
	say();
	message("如何让圣者为了寻找线索而非常非常「非常」难以置信地忙碌好几个小时——");
	say();
	message("（请往下卷动）*");
	say();
	message("如何让圣者为了寻找线索而非常非常绝对难以置信地忙碌好几个小时——");
	say();
	message("（请往下卷动）*");
	say();
	message("当你不那么忙的时候，你应该去 Minoc 找吉普赛人 Margareta 算算命！");
	say();
	message("署名 - Chuckles");
	say();
	goto labelFunc031D_0487;
labelFunc031D_008B:
	if (!(var0000 == 0x0002)) goto labelFunc031D_009C;
	message("保持不列颠尼亚干净 —— 把石像鬼送回去！ ~~ ~~ ~~ 赞助者：不列颠尼亚纯洁联盟");
	say();
	goto labelFunc031D_0487;
labelFunc031D_009C:
	if (!(var0000 == 0x0003)) goto labelFunc031D_00BA;
	if (!gflags[0x012B]) goto labelFunc031D_00B3;
	message("你将不能再砍伐银叶树。希望能得到你的配合。谢谢你，樵夫。~~Salamon~~ ~~伐木工 Ben");
	say();
	goto labelFunc031D_00B7;
labelFunc031D_00B3:
	message("你将不能再砍伐银叶树。希望能得到你的配合。谢谢你，樵夫。~~Salamon");
	say();
labelFunc031D_00B7:
	goto labelFunc031D_0487;
labelFunc031D_00BA:
	if (!(var0000 == 0x0004)) goto labelFunc031D_00CF;
	message("Lock Lake 排放废弃物之惩罚法案~~78934979.S3，第 835 条~~");
	say();
	message("违规一方的成员将被浸泡在名为 Lock Lake 的湖中，水深及颈，连续浸泡不超过三天且不少于...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_00CF:
	if (!(var0000 == 0x0005)) goto labelFunc031D_00E0;
	message("「你已收到付款。今晚交货。」");
	say();
	goto labelFunc031D_0487;
labelFunc031D_00E0:
	if (!(var0000 == 0x0006)) goto labelFunc031D_00F1;
	message("一旦建造完成，将黑石存放在『皇冠宝石号 (The Crown Jewel)』的船舱里。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_00F1:
	if (!(var0000 == 0x0007)) goto labelFunc031D_0127;
	var0001 = Func0908();
	message("Finster -不列颠城(x)");
	say();
	message("Duncan - 海盗巢穴 (Buccaneer's Den)(x)");
	say();
	message("Christopher - Trinsic (x)");
	say();
	message("Frederico - Minoc (x)");
	say();
	message("Tania - Minoc (x)");
	say();
	message("Alagner - New Magincia  (x)");
	say();
	message("不列颠王-不列颠城( )");
	say();
	message(var0001);
	message("，圣者 - ( )");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0127:
	if (!(var0000 == 0x0008)) goto labelFunc031D_0138;
	message("石座的高度应为四英尺，宽三英尺，深两英尺。在三个石座上分别放置三个容器：四面体、球体和立方体。~~所有这些发送门防御机制的物品都已经由 Trinsic 的铁匠打造完毕。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0138:
	if (!(var0000 == 0x0009)) goto labelFunc031D_0149;
	message("皇冠宝石号 (The Crown Jewel)~~明天日出 - 启航前往圣者之岛 (Isle of the Avatar)！");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0149:
	if (!(var0000 == 0x000A)) goto labelFunc031D_015E;
	gflags[0x023F] = true;
	message("告诉你这些炸药的数量足以摧毁祭坛。这是为了提醒你需要保持沉默，以及这能帮你免除的惩罚。~~--Runeb");
	say();
	goto labelFunc031D_0487;
labelFunc031D_015E:
	if (!(var0000 == 0x000B)) goto labelFunc031D_016F;
	message("独角鲸号 (Narwha) 将会是一艘极其完美的船舰，从船首到船艉足足有 100 腕尺长。她将由最顶级的紫杉木打造，并配有三十七 腕尺的压舱物。在船板进行逆向退化工程后，我会对底层甲板进行预先相互反转，以确保它们的冗长与多话。～每张床铺都将精准地容纳在 3 英尺乘以 14 腕尺的船舱内，除了大副和中士的寝室，那里的尺寸会是八角形的……～～ ～～米诺克的欧文");
	say();
	goto labelFunc031D_0487;
labelFunc031D_016F:
	if (!(var0000 == 0x000C)) goto labelFunc031D_0188;
	message("不列颠尼亚税务委员会");
	say();
	message("税务申报单");
	say();
	message("为确保尔之进项与支度皆能妥善登帐，首要之事，须将表格中编号 37-A 至 1204-W 之卷宗一式三份予以拷贝。于每份副本之后，汇编支出之总额，并乘以表3、表69、表106。下一步则涉及……");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0188:
	if (!(var0000 == 0x000D)) goto labelFunc031D_0199;
	message("首先你需要将金属装满坩埚。然后，使用风箱将火烧得越旺越好。当火焰不再发光时，你就可以准备将坩埚放在火上熔化金属了。~~ 然后，将熔化的金属倒入刀刃模具中并让其冷却。警告！坩埚的温度极高。小心不要烫伤自己。~~ 用夹子将冷却的刀刃从模具中取出。再次将火加热，并将刀刃放入其中。不过要注意不要让它变形。只要把它放在那里足够长的时间使其变得有延展性即可。~~ 准备好后，将其拿到铁砧上，用锤子完成塑形。当你得到理想的刀刃后，找到淬火桶，将剑浸入冷水中。它会很快变硬。~~ 现在你所需要做的就是把剑首套在剑根上。要打造一把精良、坚固的剑需要花费一些功夫，但完成的武器绝对物超所值！");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0199:
	if (!(var0000 == 0x000E)) goto labelFunc031D_01AE;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：The Scaly Eel~~完工日期：7-21-0355~~ 检查日期：8-2-0355~~造船匠：Trinsic 的 Gargan");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01AE:
	if (!(var0000 == 0x000F)) goto labelFunc031D_01C3;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：The Beast~~完工日期：3-12-0358~~ 检查日期：3-19-0358~~造船匠：不列颠城的 Clint");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01C3:
	if (!(var0000 == 0x0010)) goto labelFunc031D_01D8;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：The Excellencia~~完工日期：~~ 检查日期：~~造船匠：Minoc 的 Owen");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01D8:
	if (!(var0000 == 0x0011)) goto labelFunc031D_01ED;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：The Nymphet~~完工日期：12-22-0357~~ 检查日期：1-3-0358~~造船匠：New Magincia 的 Russell");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01ED:
	if (!(var0000 == 0x0012)) goto labelFunc031D_0202;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：The Lusty Wench~~完工日期：6-14-0327~~ 检查日期：6-24-0359~~造船匠：Moonglow 的 Kethron");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0202:
	if (!(var0000 == 0x0013)) goto labelFunc031D_0217;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：The Dragon's Breath~~完工日期：5-18-0342~~ 检查日期：5-23-0342~~造船匠：不列颠城的 Rohden");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0217:
	if (!(var0000 == 0x0014)) goto labelFunc031D_0228;
	message("       ZARA的舞蹈~为鲁特琴而作。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0228:
	if (!(var0000 == 0x0015)) goto labelFunc031D_0239;
	message("       起风之夜~为竖琴而作。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0239:
	if (!(var0000 == 0x0016)) goto labelFunc031D_024A;
	message("       野兽的其中之一~为大键琴而作。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_024A:
	if (!(var0000 == 0x0017)) goto labelFunc031D_025B;
	message("       春之火~为木琴而作。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_025B:
	if (!(var0000 == 0x0018)) goto labelFunc031D_0270;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：~~完工日期：~~检查日期：~~ 造船匠：");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0270:
	if (!(var0000 == 0x0019)) goto labelFunc031D_0281;
	message("水下打捞与板球运动法案~~23568976.Y7，第 069 条~~其中，属于第一方第一团队的参与者，亦可于码头周围两百三十九英尺的范围内进行额外的寻宝活动。~~其中，属于第二方第二团队的参与者可随之进行，条件是在距离第一方第一团队七点五英尺的范围内不得使用手帕。~~兹声明第一方第二团队不得牵涉外部...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0281:
	if (!(var0000 == 0x001A)) goto labelFunc031D_0292;
	message("   G.J.的素描本");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0292:
	if (!(var0000 == 0x001B)) goto labelFunc031D_02A3;
	message("~~在这些石柱之间，这座石座之上，曾经放置着终极智能法典 (CODEX OF ULTIMATE WISDOM)。~~现在它位处虚空无尽的黑暗之中，永远作为知识的灯塔，照耀着人类与石像鬼种族。~~那些寻求其中智能的人，必须像两百多年前的圣者一样，将神秘的透镜结合起来。~不列颠王~~通过控制、热情和勤奋来寻找奇异点。~~Lord Draxinusom");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02A3:
	if (!(var0000 == 0x001C)) goto labelFunc031D_02B4;
	message("~     马匹与马车所有权~~此状授予持有人对马车及其配属马匹 Fletcher 的所有权及使用权。非对上述马车与马匹拥有完全所有权者滥用此状，将根据不列颠尼亚税务委员会运行的《私人货物与牲畜所有权法》第 7890.3D5 条予以处罚。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02B4:
	if (!(var0000 == 0x001D)) goto labelFunc031D_02C5;
	message("~     马匹与马车所有权~~此状授予持有人对马车及其配属马匹 Brikabrak 的所有权及使用权。非对上述马车与马匹拥有完全所有权者滥用此状，将根据不列颠尼亚税务委员会运行的《私人货物与牲畜所有权法》第 7890.3D5 条予以处罚。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02C5:
	if (!(var0000 == 0x001E)) goto labelFunc031D_02DA;
	message("室内动物饲养法案~~89634510.P4，第 402 条~~");
	say();
	message("其中，允许属于拥有方的参与者将动物及照顾该动物之相关物品存放于室内，前提是...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02DA:
	if (!(var0000 == 0x001F)) goto labelFunc031D_02EF;
	message("马车建造法案 ~~48382745.F3，第 058 条~~");
	say();
	message("其中，木匠与金属工匠可跨越技能领域，无需公会干预，受以下原则限制...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02EF:
	if (!(var0000 == 0x0020)) goto labelFunc031D_0304;
	message("花岗岩分区附近之小屋建筑法案~~ 48923013.Q4，第 193 条~~");
	say();
	message("其中，属于石匠公会的参与者，可向在此由木匠公会成员代表的小屋建造者一方提出投诉，其意图为...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0304:
	if (!(var0000 == 0x0021)) goto labelFunc031D_0319;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：Anne's Revenge~~完工日期：11-23-0198 ~~检查日期：1-17-0199~~造船匠：New Magincia 的 Alluria");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0319:
	if (!(var0000 == 0x0022)) goto labelFunc031D_032E;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：Golden Hinde~~完工日期：7-08-0105 ~~检查日期：7-12-0105~~造船匠：Trinsic 的 Gendra");
	say();
	goto labelFunc031D_0487;
labelFunc031D_032E:
	if (!(var0000 == 0x0023)) goto labelFunc031D_0343;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：Bounty~~完工日期：5-27-0185 ~~检查日期：6-04-0185~~造船匠：Minoc 的 Gibson");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0343:
	if (!(var0000 == 0x0024)) goto labelFunc031D_0360;
	var0001 = Func0908();
	message("最亲爱的 Iolo，~     在海盗巢穴 (Buccaneer's Den)，我遇到了一位老海盗，他告诉我，他航行过不列颠尼亚海域的次数比我经历过的夏天还要多。出于赌博的心态，我问他是否听说过传说中的巨蛇岛 (Serpent Isle)。他听过！而且他甚至还有一张标示着如何找到该岛屿的地图。我买下了地图，并已经开始了我的寻找之旅。不过，我留了一份副本，好让你在完成目前的冒险后可以跟上我。我已将副本交给不列颠王，但他答应我，直到你与 ");
	message(var0001);
	message(" 完成探索之前，他不会把地图交给你。~~     直到我们再次相见，我的爱人！~     Gwenno");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0360:
	if (!(var0000 == 0x0025)) goto labelFunc031D_0371;
	message("~~一切并非如其表面所见...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0371:
	if (!(var0000 == 0x0026)) goto labelFunc031D_0382;
	message("~     马匹与马车所有权~~此状授予持有人对马车及其配属马匹 ____________ 的所有权及使用权。非对上述马车与马匹拥有完全所有权者滥用此状，将根据不列颠尼亚税务委员会运行的《私人货物与牲畜所有权法》第 7890.3D5 条予以处罚。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0382:
	if (!(var0000 == 0x0027)) goto labelFunc031D_0393;
	message("~很好。我们同意在第七天的黎明攻击不列颠王的城堡。~~Fransisa~Corwin~ Brax~Athelas");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0393:
	if (!(var0000 == 0x0028)) goto labelFunc031D_03B0;
	message("~     Selwyn 的遗嘱：~~");
	say();
	message("     我在此将我的火末日法杖 (firedoom staff) 遗赠给任何足够强大和狡猾，能够突破我堡垒的防御并杀死我宠物的人。~~");
	say();
	message("     愿所有读到这段话的人都在死亡中腐烂！~");
	say();
	message("          Selwyn");
	say();
	goto labelFunc031D_0487;
labelFunc031D_03B0:
	if (!(var0000 == 0x0029)) goto labelFunc031D_03C1;
	message("     『变革』(Change) 的王座将你拒之门外，但『美德』(Virtue) 将指引你前进！");
	say();
	goto labelFunc031D_0487;
labelFunc031D_03C1:
	if (!(var0000 == 0x002A)) goto labelFunc031D_03D3;
	message("     我在这里待了多少天，我已经记不清了，但我没有忘记进入这个已成为我坟墓的被遗弃的洞穴的那一天。那是 2-29-0227。但我的食物早就吃光了，老鼠似乎对吃我比让我吃牠们更感兴趣。我的力量已经消失了，我的意志也是。如果你找到这个，请告诉 Mythra 我爱她。");
	say();
	message("     --Denyel");
	say();
labelFunc031D_03D3:
	if (!(var0000 == 0x002B)) goto labelFunc031D_03EC;
	message("~不列颠王的最终遗嘱与声明：~~");
	say();
	message("     在我身心健康之际，我在此将我所有的财产遗赠给... Nell，我心爱的女仆。她陪伴我度过了许多温暖的夜晚，这是我对多数我那群该死臣民无法言喻的！而对于我们未出生的孩子，我将我的王冠遗赠给他/她。国王万岁。或是女王，不管是哪个！~~");
	say();
	message("不列颠王");
	say();
	goto labelFunc031D_0487;
labelFunc031D_03EC:
	if (!(var0000 == 0x002C)) goto labelFunc031D_0401;
	message("奉不列颠王诏令，此为官方文档，表明对文档中，所记载之帆船的所有权。根据第 1989832.A5 号法律第 809 条，禁止伪造此所有权状。");
	say();
	message("     船契~~船名：Golden Ankh~~完工日期：3-8-0338~~ 检查日期：3-18-0338~~造船匠：不列颠城的 Clint");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0401:
	if (!(var0000 == 0x002D)) goto labelFunc031D_0412;
	item->Func0710();
	goto labelFunc031D_0487;
labelFunc031D_0412:
	if (!(var0000 == 0x002F)) goto labelFunc031D_0437;
	message("第 1 天：我绕过了活雕像，穿过了大门。尽管乘了很长时间的船，我并没有感到虚弱。我猜想探险的兴奋感给了我力量。我很快就会休息了。");
	say();
	message("第 2 天：在那个大房间里，我在标记着「X」的地方遇到了闪电。非常聪明的一招——预测到我不会信任那个标记。我不会再这么愚蠢了。");
	say();
	message("第 3 天：我找到了一个宽阔的房间，在里面我可以完全看清它所有的内容物。然而，却有无形的障碍物阻止我进入。");
	say();
	message("第 4 天：这些障碍物并不是我最初所怀疑的那样。它们是墙壁。我看得到出口，却无法抵达。这太令人抓狂了！");
	say();
	message("第 5 天：我真希望我带了更多的口粮。我没想到会被困成这样。如果我找不到出路... 以及食物和水，我很快就会饿死！");
	say();
	message("第 天：我还是没有食物和水（鲸鱼？）... 我看到了却无法... 会有帮助及时抵达吗！？我在思考但我很深思熟虑...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0437:
	if (!(var0000 == 0x0030)) goto labelFunc031D_0448;
	message("... 我在这个鬼地方待的几个星期已经多到我不想去记——就算我试图去记，我也记不清了。我看到了太多欺骗和虚假的事情。我不禁怀疑这个隧道迷宫要如何展现『真理』。有一件事我敢说我学到了，虽然我不知道我还能和谁分享它：我不是圣者。我用我最后的呼吸祝愿那个能真正宣称拥有圣者头衔的『他』... 或『她』... 好运。当我躺在这里奄奄一息时，我只对发现者提出一个请求：好好记住我的挣扎...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0448:
	if (!(var0000 == 0x0031)) goto labelFunc031D_045D;
	message("... 我带着仅存的一丝希望写下这些。Frenke 已经死了——被射出的火球杀死。我将尝试独自穿越这条危险的火之隧道。如果我的探险成功，我将成为圣者。我不再回想我的另一个命运...");
	say();
	message("     这将是我的最后一篇日记。我的墨水几乎用光了，就像我的意志一样。我不再惊讶一个人怎么会放弃，就像我们在隐形迷宫尽头找到的那个可怜傻瓜一样。但我拒绝屈服于我疲惫身躯的呼唤。我会继续跋涉。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_045D:
	if (!(var0000 == 0x0032)) goto labelFunc031D_046E;
	message("       无限卷轴 (SCROLL OF INFINITY)~~ 神器 无限护身符 (TalismanOfInfinity) -~ 如果 实相 (Reality) 为 魔法 (Magic) -~ 如果 区域 (Locale)(神器) 为 虚空 (Void) -~ 凸透镜 (Convex) 为 在不列颠尼亚寻找(凸透镜)~ 凹透镜 (Concave) 为 在不列颠尼亚寻找(凹透镜)~ ~ 如果 运行光线测试 (凹透镜，凸透镜) -~ 护身符清单 为不列颠尼亚搜索(护身符)~ ~~ 计数器 为 0~ 对于 护身符清单 中的每个护身符 -~ 如果 知道类型(护身符) 为 真理 (Truth) -~ 计数器 为 计数器 与 1~ --~ 如果 知道类型(护身符) 为 爱 (Love) -~ 计数器 为 计数器 与 1~ --~ 如果 知道类型(护身符) 为 勇气 (Courage) -~ 计数器 为 计数器 与 1~ --~ ~ 如果 计数器 为 3 -~ 运行虚空访问()~ ~~ 无限行动 为 行动(实例,~ 位面旅行，不列颠尼亚,~ 回呼，无限护身符)~ --~ 如果 实相 为 伪科学 (PseudoScience) -~ 邪恶实体 为 实体搜索(全部，强大，邪恶)~ 如果 邪恶实体 -~ 检查 为 推动实相(邪恶实体)~ 如果 未 检查 -~ 测试(「你绝对看不到这个！」)");
	say();
	goto labelFunc031D_0487;
labelFunc031D_046E:
	if (!(var0000 == 0x0033)) goto labelFunc031D_0487;
	message("Erethian 的日记：~~");
	say();
	message("第一篇：");
	say();
	message("     也许有一天我会有时间和意愿在这张羊皮纸上写字，但现在我还不想。");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0487:
	return;
}


