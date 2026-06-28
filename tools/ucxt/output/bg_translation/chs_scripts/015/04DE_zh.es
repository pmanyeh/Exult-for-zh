#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func088F 0x88F ();
extern void Func092E 0x92E (var var0000);

void Func04DE object#(0x4DE) ()
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

	if (!(event == 0x0001)) goto labelFunc04DE_026C;
	UI_show_npc_face(0xFF22, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02AB])) goto labelFunc04DE_0042;
	message("你看到一位英俊、肌肉发达，带着些许调皮气质的男人。");
	say();
	gflags[0x02AB] = true;
	goto labelFunc04DE_0046;
labelFunc04DE_0042:
	message("「是的，我能帮你吗？」 Glenno 问。");
	say();
labelFunc04DE_0046:
	converse attend labelFunc04DE_0267;
	case "姓名" attend labelFunc04DE_005C:
	message("「 Glenno 为您服务！」");
	say();
	UI_remove_answer("姓名");
labelFunc04DE_005C:
	case "职业" attend labelFunc04DE_01AE:
	message("「我是澡堂的经理。");
	say();
	if (!((var0000 == 0x0006) || ((var0000 == 0x0007) || (var0000 == 0x0000)))) goto labelFunc04DE_01AA;
	message("「入场费是 300 金币。所有的东西都包含在这个固定价格里了。不需要小费。你想进来吗？」");
	say();
	if (!Func090A()) goto labelFunc04DE_00EE;
	var0002 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0002 >= 0x012C)) goto labelFunc04DE_00E6;
	var0003 = UI_add_party_items(0x0001, 0x0281, 0x00FB, 0x0004, false);
	if (!var0003) goto labelFunc04DE_00DE;
	message("「太棒了！这是你的钥匙！");
	say();
	var0004 = UI_remove_party_items(0x012C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04DE_00E3;
labelFunc04DE_00DE:
	message("「你的双手拿太多东西了，拿不下钥匙！」*");
	say();
	abort;
labelFunc04DE_00E3:
	goto labelFunc04DE_00EB;
labelFunc04DE_00E6:
	message("「你想搞什么鬼？你没有 300 金币！」*");
	say();
	abort;
labelFunc04DE_00EB:
	goto labelFunc04DE_00F3;
labelFunc04DE_00EE:
	message("「那，下次吧！如果你来了，你不会后悔的！绝对物超所值。」*");
	say();
	abort;
labelFunc04DE_00F3:
	message("「进来吧！请放松！享受你自己！让我们的男士或女士让你的停留更舒适。");
	say();
	if (!var0001) goto labelFunc04DE_0108;
	message("他注意到你的奖章。「特别欢迎友谊会的成员！」");
	say();
	UI_add_answer("友谊会");
labelFunc04DE_0108:
	message("「请便！把这里当自己家。如果你想喝点什么，让我知道。」");
	say();
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc04DE_019A;
	message("「嗯，等一下。你几岁，孩子？」*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「嗯，十八岁。」*");
	say();
	UI_show_npc_face(0xFF22, 0x0000);
	message("「你看起来不像十八岁。」*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「好吧，我十六岁。」*");
	say();
	UI_show_npc_face(0xFF22, 0x0000);
	message("「你看起来也不像十六岁。好吧，没关系。你可以进去。但要确保管理层没看到你。」 Glenno 抓抓头。「是的，但是……不！我就是管理层！好吧，进来吧。只要别惹麻烦就好。」*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「太好了！娘们！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc04DE_0190;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 向你低语：「我觉得年轻的 Spark 和你一起冒险时学到了不少！」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04DE_0190:
	UI_show_npc_face(0xFF22, 0x0000);
labelFunc04DE_019A:
	UI_add_answer(["澡堂", "饮料"]);
	goto labelFunc04DE_01AE;
labelFunc04DE_01AA:
	message("「请在深夜时分我们的男士或女士在这里的时候再来拜访！」");
	say();
labelFunc04DE_01AE:
	case "澡堂" attend labelFunc04DE_01D4:
	message("「澡堂是为了海盗巢穴 (Buccaneer's Den)的访客的乐趣而存在的。你可以在我们的温泉池中沐浴。你可以在我们的交谊厅里休息，与我们迷人的男士或女士们社交。你可以饮用上好的葡萄酒和麦酒。你可以欣赏我们收藏的精美艺术品。你可以……逃入梦想世界！」");
	say();
	UI_remove_answer("澡堂");
	UI_add_answer(["温况池", "男女䳘", "交谊厅", "精美艺术品"]);
labelFunc04DE_01D4:
	case "饮料" attend labelFunc04DE_01DF:
	Func088F();
labelFunc04DE_01DF:
	case "男女䳘" attend labelFunc04DE_01F2:
	message("「他们来自全不列颠尼亚各地，来满足你的每一个愿望！我， Glenno ，向他们保证澡堂是已知世界中同类场所中最负盛名的。它可能也是已知世界中唯一这种类型的场所！」");
	say();
	UI_remove_answer("男女䳘");
labelFunc04DE_01F2:
	case "温况池" attend labelFunc04DE_0205:
	message("「水保证纯净、温暖且能洗净身心。」");
	say();
	UI_remove_answer("温况池");
labelFunc04DE_0205:
	case "交谊厅" attend labelFunc04DE_0218:
	message("「你可以舒适地躺在许多柔软的坐垫和枕头中。去了解你的邻居。去『非常深入地』了解你的邻居！」");
	say();
	UI_remove_answer("交谊厅");
labelFunc04DE_0218:
	case "精美艺术品" attend labelFunc04DE_022B:
	message("「啊，是的，那些是不列颠尼亚艺术家 Glen Johnson 笔下的色情杰作。注意到那幅画的曲线有多么自然吗，你不同意吗？」");
	say();
	UI_remove_answer("精美艺术品");
labelFunc04DE_022B:
	case "友谊会" attend labelFunc04DE_0245:
	message("「是的，我是会员。如果不是因为友谊会，我就不会成为澡堂的经理！我为组织尽心尽力，信赖我的众多弟兄，致力于合一，而且……嗯，我的价值先行于报偿！而这一切……就是我的报偿！」 Glenno 笑了，就像一只刚吞下老鼠的公猫。");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer("报偿");
labelFunc04DE_0245:
	case "报偿" attend labelFunc04DE_0259:
	message("「是的，友谊会给了我这个地方。你知道的，这是他们的财产。」突然， Glenno 摀住嘴，好像说了不该说的话。「我的意思是，友谊会只拥有这座建筑所在的『土地』。我用友谊会奖赏给我的钱『建造』了澡堂。所以，不说这些了——享受你自己吧。我必须去忙了！」说完， Glenno 转身离开了你。*");
	say();
	UI_remove_answer("报偿");
	abort;
labelFunc04DE_0259:
	case "告辞" attend labelFunc04DE_0264:
	goto labelFunc04DE_0267;
labelFunc04DE_0264:
	goto labelFunc04DE_0046;
labelFunc04DE_0267:
	endconv;
	message("「这么快就要走了？」*");
	say();
labelFunc04DE_026C:
	if (!(event == 0x0000)) goto labelFunc04DE_030D;
	var0000 = UI_part_of_day();
	var0007 = UI_get_schedule_type(UI_get_npc_object(0xFF22));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0007 == 0x000B)) goto labelFunc04DE_0307;
	if (!((var0000 == 0x0005) || ((var0000 == 0x0007) || (var0000 == 0x0000)))) goto labelFunc04DE_0304;
	if (!(var0008 == 0x0001)) goto labelFunc04DE_02CA;
	var0009 = "@酒色人生！@";
labelFunc04DE_02CA:
	if (!(var0008 == 0x0002)) goto labelFunc04DE_02DA;
	var0009 = "@需要女伴吗，水手？@";
labelFunc04DE_02DA:
	if (!(var0008 == 0x0003)) goto labelFunc04DE_02EA;
	var0009 = "@需要男伴吗，女士？@";
labelFunc04DE_02EA:
	if (!(var0008 == 0x0004)) goto labelFunc04DE_02FA;
	var0009 = "@在澡堂放松一下吧！@";
labelFunc04DE_02FA:
	UI_item_say(0xFF22, var0009);
labelFunc04DE_0304:
	goto labelFunc04DE_030D;
labelFunc04DE_0307:
	Func092E(0xFF22);
labelFunc04DE_030D:
	return;
}


