#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func049C object#(0x49C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc049C_02BF;
	UI_show_npc_face(0xFF64, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	var0003 = false;
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!(var0002 == 0x0007)) goto labelFunc049C_0065;
	var0004 = Func08FC(0xFF64, 0xFF06);
	if (!var0004) goto labelFunc049C_0060;
	message("她瞪着眼，将一根手指放在唇边，示意你安静。*");
	say();
	abort;
	goto labelFunc049C_0065;
labelFunc049C_0060:
	message("「我现在不能说话，我必须赶去参加友谊会的会议。」*");
	say();
	abort;
labelFunc049C_0065:
	if (!(!gflags[0x01FD])) goto labelFunc049C_0077;
	message("你看到一位表情非常严肃的女人。");
	say();
	gflags[0x01FD] = true;
	goto labelFunc049C_0081;
labelFunc049C_0077:
	message("「我能帮你什么忙，");
	message(var0000);
	message("？」");
	say();
labelFunc049C_0081:
	if (!gflags[0x020E]) goto labelFunc049C_008E;
	UI_add_answer("利口酒");
labelFunc049C_008E:
	converse attend labelFunc049C_02A1;
	case "姓名" attend labelFunc049C_00A4:
	message("她怀疑地看着你。「我的名字是 Balayna。」");
	say();
	UI_remove_answer("姓名");
labelFunc049C_00A4:
	case "职业" attend labelFunc049C_00BD:
	message("「我是友谊会 Moonglow 分会的书记。」");
	say();
	UI_add_answer(["书记", "Moonglow"]);
labelFunc049C_00BD:
	case "书记" attend labelFunc049C_00D7:
	message("「我的工作是在会议期间做记录，并管理这个分会的决策。」");
	say();
	UI_remove_answer("书记");
	UI_add_answer("会议");
labelFunc049C_00D7:
	case "利口酒" attend labelFunc049C_011B:
	var0005 = UI_remove_party_items(0x0001, 0x02ED, 0xFE99, 0x001E, false);
	if (!var0005) goto labelFunc049C_0110;
	message("「这是什么？」她问着，从你手中接过小瓶。她打开并闻了闻。「品质非常好。我纳闷为什么他……」她抓住自己的喉咙喘息着。你注意到一缕轻烟从现在已从她手中掉落的小瓶顶端升起。她窒息着倒在地上，死了。*");
	say();
	gflags[0x020D] = true;
	UI_kill_npc(UI_get_npc_object(0xFF64));
	abort;
	goto labelFunc049C_011B;
labelFunc049C_0110:
	message("「恐怕我必须先看看你指的是什么，才能回答你的问题。」");
	say();
	UI_remove_answer("利口酒");
labelFunc049C_011B:
	case "会议" attend labelFunc049C_014D:
	var0006 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc049C_0134;
	message("她怀疑地盯着你。");
	say();
labelFunc049C_0134:
	message("「我们在晚上 9 点开会——这是惯例时间。在 Rankin 讲道之后，我们都会讨论友谊会让我们生活中变得多么美好的方方面面。」");
	say();
	if (!(!var0003)) goto labelFunc049C_0146;
	UI_add_answer("Rankin");
labelFunc049C_0146:
	UI_remove_answer("会议");
labelFunc049C_014D:
	case "Moonglow" attend labelFunc049C_016D:
	message("「这里似乎是个……创建分会的合适地点。Moonglow 这里有许多好市民。」");
	say();
	UI_add_answer(["好", "市民"]);
	UI_remove_answer("Moonglow");
labelFunc049C_016D:
	case "好" attend labelFunc049C_018D:
	message("她对这句话似乎感到惊讶。「好吧，我相信许多人都拥有坚强的意志和性格。他们正是友谊会所需要的那种人，能走出去并在整个不列颠尼亚传播指导与繁荣。」");
	say();
	UI_remove_answer("好");
	UI_add_answer(["指导", "繁荣"]);
labelFunc049C_018D:
	case "指导" attend labelFunc049C_01A0:
	message("「许多人缺乏达到最高潜力所需的纪律。」");
	say();
	UI_remove_answer("指导");
labelFunc049C_01A0:
	case "繁荣" attend labelFunc049C_01B3:
	message("「友谊会的宗旨是丰富所有居住在这片美丽土地上的人们的生活。」");
	say();
	UI_remove_answer("繁荣");
labelFunc049C_01B3:
	case "市民" attend labelFunc049C_01C6:
	message("「我忙于职责，在这里认识的人很少。酒保 Phearcy 是社区的杰出成员，农夫 Tolemac 也是。Tolemac 的朋友 Morz 虽然害羞，但口碑很好。还有，Morz 有个兄弟。」她擡起头若有所思。「或者他是 Tolemac 的兄弟？~~「我不确定他是谁的兄弟，但我确实知道我对他了解不多，」她哼了一声。");
	say();
	UI_remove_answer("市民");
labelFunc049C_01C6:
	case "友谊会" attend labelFunc049C_0202:
	var0007 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc049C_01F0;
	message("「我们的分会在 Moonglow 这里已经开设大约五年了。Rankin 一直都在这里，但我几个月前才开始在这个分会工作。」");
	say();
	if (!(!var0003)) goto labelFunc049C_01ED;
	UI_add_answer("Rankin");
labelFunc049C_01ED:
	goto labelFunc049C_01FB;
labelFunc049C_01F0:
	message("「友谊会是一个追求精神层面的社会，致力于达到人类潜力的最高境界。我们通过内在力量的三位一体 (Triad of Inner Strength) 来支持新现实主义。此外，我们管理和组织许多节庆，还经营着一个为有需要的人提供庇护的场所。~「Rankin 是 Moonglow 分会的负责人。他可以回答你的问题。」");
	say();
	UI_add_answer("三位一体 (Triad)");
labelFunc049C_01FB:
	UI_remove_answer("友谊会");
labelFunc049C_0202:
	case "三位一体 (Triad)" attend labelFunc049C_021C:
	message("「三位一体 (Triad) 基本上是三个原则，当它们被统一起来运用时，能使个人更好地达到生活中的创造力、满足感和成功。」");
	say();
	UI_add_answer("原则");
	UI_remove_answer("三位一体 (Triad)");
labelFunc049C_021C:
	case "原则" attend labelFunc049C_023F:
	message("「三个原则是：致力合一 (Strive For Unity)、信赖你的兄弟 (Trust Thy Brother)——与姐妹——以及价值先行于报偿 (Worthiness Precedes Reward)。」");
	say();
	UI_add_answer(["致力合一", "信赖", "价值"]);
	UI_remove_answer("原则");
labelFunc049C_023F:
	case "致力合一" attend labelFunc049C_0252:
	message("「本质上，这意味着人与人之间的合作不仅本身是达到人类潜力的理想手段，它还能促进整个过程。」");
	say();
	UI_remove_answer("致力合一");
labelFunc049C_0252:
	case "信赖" attend labelFunc049C_0265:
	message("「这个信条说明了，身为人我们都是一样的，对彼此的仇恨或恐惧都没有建设性。事实上，那是具有破坏性的。」");
	say();
	UI_remove_answer("信赖");
labelFunc049C_0265:
	case "价值" attend labelFunc049C_0278:
	message("「这基本上意味着个人应该努力让自己配得上他们生活中想要的事物。这常被误引为『你得到你应得的』，但这往往带有负面意涵。」");
	say();
	UI_remove_answer("价值");
labelFunc049C_0278:
	case "Rankin" attend labelFunc049C_0293:
	message("「他是 Moonglow 这里的分会负责人。」~她谨慎地环顾四周。「你在城市里旅行，对吧？最后或许还会去另一座城市——不列颠城？」她又看了一眼，显然在检查什么。最后，她倾身向前，小声地说。~「我不确定 Rankin 是否配得上他的职位。就在 Rankin 说服新成员 Tolemac 加入之前，我听到他和 Tolemac 的谈话。他承认自己对友谊会抱有怀疑。他告诉 Tolemac 他认为，或许，友谊会只是在鼓励其成员成为绵羊，而那些真正『掌权』的人都是骗子，只是为了钱。你对这件事有什么看法？」她靠向椅背。");
	say();
	gflags[0x01D8] = true;
	var0003 = true;
	UI_remove_answer("Rankin");
labelFunc049C_0293:
	case "告辞" attend labelFunc049C_029E:
	goto labelFunc049C_02A1;
labelFunc049C_029E:
	goto labelFunc049C_008E;
labelFunc049C_02A1:
	endconv;
	if (!gflags[0x01D8]) goto labelFunc049C_02B5;
	message("「再见，");
	message(var0000);
	message("。记住我告诉你的话。」*");
	say();
	goto labelFunc049C_02BF;
labelFunc049C_02B5:
	message("「再见，");
	message(var0000);
	message("。」*");
	say();
labelFunc049C_02BF:
	if (!(event == 0x0000)) goto labelFunc049C_02CD;
	Func092E(0xFF64);
labelFunc049C_02CD:
	return;
}


