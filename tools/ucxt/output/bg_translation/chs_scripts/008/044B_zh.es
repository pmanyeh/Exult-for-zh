#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func044B object#(0x44B) ()
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

	if (!(event == 0x0000)) goto labelFunc044B_0009;
	abort;
labelFunc044B_0009:
	if (!(event == 0x0001)) goto labelFunc044B_0030;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x001A, 0x0001, (byte)0x01, (byte)0x55, 0x044B, (byte)0x21]);
	return;
labelFunc044B_0030:
	UI_show_npc_face(0xFFB5, 0x0000);
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = UI_is_pc_female();
	var0005 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00E0]) goto labelFunc044B_0083;
	if (!(!gflags[0x00E2])) goto labelFunc044B_0083;
	UI_add_answer(["Ariana", "Julius", "Nadia", "Yew"]);
labelFunc044B_0083:
	if (!gflags[0x0129]) goto labelFunc044B_0090;
	UI_add_answer("你父亲的消息");
labelFunc044B_0090:
	if (!(!var0004)) goto labelFunc044B_00A4;
	if (!gflags[0x00E6]) goto labelFunc044B_00A4;
	UI_add_answer("亲吻");
labelFunc044B_00A4:
	if (!(!gflags[0x00E8])) goto labelFunc044B_00C7;
	if (!var0004) goto labelFunc044B_00B8;
	message("这是一位年轻迷人的女性，但神情似乎有些哀伤。");
	say();
	goto labelFunc044B_00C0;
labelFunc044B_00B8:
	message("看到如此美丽的年轻女子显得如此悲伤，你的心立刻揪了一下。");
	say();
	message("当你介绍自己时，她擡起了头。");
	say();
labelFunc044B_00C0:
	gflags[0x00E8] = true;
	goto labelFunc044B_00D1;
labelFunc044B_00C7:
	message("「再次问候，");
	message(var0005);
	message("！」Nastassia 说。");
	say();
labelFunc044B_00D1:
	converse attend labelFunc044B_0332;
	case "姓名" attend labelFunc044B_00E7:
	message("「我是 Nastassia。」");
	say();
	UI_remove_answer("姓名");
labelFunc044B_00E7:
	case "职业" attend labelFunc044B_00FA:
	message("她想了一会儿。「我想我的工作是保持慈悲神殿的整洁，虽然这不是个正式的职位。」");
	say();
	UI_add_answer("神殿");
labelFunc044B_00FA:
	case "神殿" attend labelFunc044B_011A:
	message("「慈悲神殿和不列颠尼亚的所有神殿一样，已经存在好几代了。我的高祖母 Ariana 在遗嘱中要求她的家族世世代代照料这座神殿。」");
	say();
	UI_add_answer(["所有神殿", "照料"]);
	UI_remove_answer("神殿");
labelFunc044B_011A:
	case "所有神殿" attend labelFunc044B_012D:
	message("「许多神殿已经荒废，或者被杂草淹没到几乎消失的地步。这很可悲。」");
	say();
	UI_remove_answer("所有神殿");
labelFunc044B_012D:
	case "照料" attend labelFunc044B_014D:
	message("「恐怕你会发现其他神殿的状况很糟。我把这座保持得……很好。我这么做不仅是为了延续我高祖母的传统，还有……其他原因。」");
	say();
	UI_remove_answer("照料");
	UI_add_answer(["传统", "原因"]);
labelFunc044B_014D:
	case "传统" attend labelFunc044B_0160:
	message("「有些人可能会觉得一个年轻人如此坚持旧习很奇怪。但这给了我极大的安慰。这让我觉得在这个世界上有我所归属的东西。」");
	say();
	UI_remove_answer("传统");
labelFunc044B_0160:
	case "原因" attend labelFunc044B_0181:
	if (!(!gflags[0x00E0])) goto labelFunc044B_0176;
	message("「我……我宁愿不说。请别问。」");
	say();
	goto labelFunc044B_017A;
labelFunc044B_0176:
	message("「你知道原因的。」");
	say();
labelFunc044B_017A:
	UI_remove_answer("原因");
labelFunc044B_0181:
	case "Ariana" attend labelFunc044B_01B6:
	if (!var0004) goto labelFunc044B_0198;
	var0006 = "她";
	goto labelFunc044B_019E;
labelFunc044B_0198:
	var0006 = "他";
labelFunc044B_019E:
	message("「是的，她是我的高祖母。我听说她曾见过圣者，而且」");
	message(var0006);
	message("对她的一生产生了深远的影响。~~「说来奇怪，但你长得很像我看过的圣者画像。」");
	say();
	UI_remove_answer("Ariana");
	UI_add_answer("我是圣者");
labelFunc044B_01B6:
	case "Julius" attend labelFunc044B_01CD:
	message("「你知道我父亲？我想镇民们又在谈论了。我希望我认识他。我内心深处渴望得到他的消息。任何消息都好。」");
	say();
	UI_remove_answer("Julius");
	gflags[0x00E1] = true;
labelFunc044B_01CD:
	case "Nadia" attend labelFunc044B_01E0:
	message("「我母亲。她死得很惨，而且是死在自己手里。这才是我向这座神殿致敬的真正原因。我希望有一天能让她安息。」");
	say();
	UI_remove_answer("Nadia");
labelFunc044B_01E0:
	case "Yew" attend labelFunc044B_0259:
	message("「我父亲死在那里的巨大森林里。被野兽或什么东西杀死了。你也许要去 Yew 吗？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc044B_024E;
	message("「喔，");
	message(var0005);
	message(", 我真的希望你能试着找出关于我父亲的事。他是怎么死的？发生了什么事？拜托！你愿意寻找真相并回来告诉我吗？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc044B_0231;
	message("「祝福你！我会在这里等你。」");
	say();
	if (!var0004) goto labelFunc044B_021F;
	message("「我知道我们现在有着强烈的亲切感。我们将会像姐妹一样。」");
	say();
	goto labelFunc044B_022A;
labelFunc044B_021F:
	message("出乎意料地，Nastassia 把你的头拉向她，亲吻了你的嘴唇。");
	say();
	UI_add_answer("亲吻");
labelFunc044B_022A:
	gflags[0x00E2] = true;
	goto labelFunc044B_024B;
labelFunc044B_0231:
	message("Nastassia 转过身去，看起来好像快哭了。「好吧。请让我一个人静一静。」*");
	say();
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x001A, 0x0000]);
	abort;
labelFunc044B_024B:
	goto labelFunc044B_0252;
labelFunc044B_024E:
	message("「不吗？好吧，如果未来有机会请让我知道。也许你可以帮我。」");
	say();
labelFunc044B_0252:
	UI_remove_answer("Yew");
labelFunc044B_0259:
	case "亲吻" attend labelFunc044B_02A4:
	if (!(gflags[0x00E6] && var0003)) goto labelFunc044B_026F;
	message("你亲吻了 Nastassia，她发出了轻声呻吟。");
	say();
labelFunc044B_026F:
	if (!(gflags[0x00E6] && (!var0003))) goto labelFunc044B_0282;
	message("你们冲进彼此的怀抱，双唇交会。你都忘了她的双唇贴着你的感觉有多好。");
	say();
	var0003 = true;
labelFunc044B_0282:
	if (!(!(gflags[0x00E6] && (!var0001)))) goto labelFunc044B_02A4;
	message("你再次亲吻 Nastassia 迷人的嘴唇。她回应了。~~「没有男人能做得像你这么好。」~~她睁大眼睛看着你。~~「再来一次，大人。」");
	say();
	var0001 = true;
	UI_remove_answer("亲吻");
	UI_add_answer("再次亲吻");
labelFunc044B_02A4:
	case "再次亲吻" attend labelFunc044B_02C6:
	if (!(!var0002)) goto labelFunc044B_02C2;
	message("你再次亲吻了 Nastassia。这次你们的身体紧紧贴在一起，你知道这绝不是与某个酒馆女孩短暂的逢场作戏。");
	say();
	var0002 = true;
	gflags[0x00E6] = true;
	goto labelFunc044B_02C6;
labelFunc044B_02C2:
	message("你亲吻了 Nastassia，她发出了轻声呻吟。");
	say();
labelFunc044B_02C6:
	case "我是圣者" attend labelFunc044B_02D9:
	message("Nastassia 仔细端详你的五官。~~「不知怎么地，我就知道。传说你会回来的。」");
	say();
	UI_remove_answer("我是圣者");
labelFunc044B_02D9:
	case "你父亲的消息" attend labelFunc044B_030F:
	message("你把从 Trellek 那里得知的消息告诉 Nastassia。她闭上双眼，似乎卸下了肩上的重担。~~这名女子向天空举起双臂，大喊道：「妳听到了吗，母亲？妳的丈夫只是想养活他的家人！而他死得……像个英雄！他不是流浪汉！妳听到了吗？妳受尽折磨的灵魂现在可以安息了。拜托，母亲，原谅他。这样一来，我现在也能原谅妳了。」~~她擦去脸上的泪水，看着你。");
	say();
	if (!var0004) goto labelFunc044B_02F8;
	message("「我感谢你，");
	message(var0005);
	message("。你让我非常快乐。我会永远记住你。」");
	say();
	goto labelFunc044B_0302;
labelFunc044B_02F8:
	message("她轻轻吻了你一下。「谢谢你，");
	message(var0005);
	message("。你让我非常快乐。如果你厌倦了冒险，我会在这里等你。欢迎你来和我一起生活，分享你的人生。现在去吧。完成你必须完成的工作。但请把我留在你的心中。」");
	say();
labelFunc044B_0302:
	Func0911(0x0032);
	UI_remove_answer("你父亲的消息");
labelFunc044B_030F:
	case "告辞" attend labelFunc044B_032F:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x001A, 0x0000]);
	goto labelFunc044B_0332;
labelFunc044B_032F:
	goto labelFunc044B_00D1;
labelFunc044B_0332:
	endconv;
	if (!(!var0004)) goto labelFunc044B_0354;
	if (!var0002) goto labelFunc044B_0347;
	message("「再见。」她再次吻了你，然后转过身去，以免看到你离开。*");
	say();
	goto labelFunc044B_0351;
labelFunc044B_0347:
	message("「再见，");
	message(var0005);
	message("。」*");
	say();
labelFunc044B_0351:
	goto labelFunc044B_035E;
labelFunc044B_0354:
	message("「再见，");
	message(var0005);
	message("。」*");
	say();
labelFunc044B_035E:
	return;
}


