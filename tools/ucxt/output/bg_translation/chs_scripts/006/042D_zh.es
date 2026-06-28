#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func042D object#(0x42D) ()
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

	if (!(event == 0x0001)) goto labelFunc042D_02E6;
	UI_show_npc_face(0xFFD3, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = Func0909();
	var0002 = UI_wearing_fellowship();
	var0003 = Func08FC(0xFFD3, 0xFFE6);
	if (!(var0000 == 0x0007)) goto labelFunc042D_005F;
	if (!var0003) goto labelFunc042D_004A;
	message("Figg 太过专心聆听友谊会聚会，没有理会你与他交谈的尝试。*");
	say();
	abort;
	goto labelFunc042D_005F;
labelFunc042D_004A:
	if (!gflags[0x00DA]) goto labelFunc042D_005A;
	message("「你有看到巴特林吗？他在哪里？他需要来主持我们的聚会！」");
	say();
	goto labelFunc042D_005F;
	goto labelFunc042D_005F;
labelFunc042D_005A:
	message("「天哪！九点了！抱歉，我必须赶去今晚的友谊会聚会。」*");
	say();
	abort;
labelFunc042D_005F:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00C6]) goto labelFunc042D_007C;
	UI_add_answer("Weston");
labelFunc042D_007C:
	if (!gflags[0x0094]) goto labelFunc042D_0089;
	UI_add_answer("友谊会");
labelFunc042D_0089:
	if (!(!gflags[0x00AE])) goto labelFunc042D_009B;
	message("你看见一个男人，他布满皱纹的脸构成了一副脾气暴躁的滑稽漫画。");
	say();
	gflags[0x00AE] = true;
	goto labelFunc042D_00A5;
labelFunc042D_009B:
	message("「你想跟我说话，");
	message(var0001);
	message("？」Figg 问道。");
	say();
labelFunc042D_00A5:
	converse attend labelFunc042D_02E1;
	case "姓名" attend labelFunc042D_00BB:
	message("「我是 Figg 。」");
	say();
	UI_remove_answer("姓名");
labelFunc042D_00BB:
	case "职业" attend labelFunc042D_00D4:
	message("「我是不列颠城这里皇家果园 (Royal Orchards) 的管理员。」");
	say();
	UI_add_answer(["管理员", "皇家果园"]);
labelFunc042D_00D4:
	case "管理员" attend labelFunc042D_00F7:
	message("「我的职责包括照顾果树，在收获时节监督采摘工，以及保护皇家果园免受小偷的光顾。」");
	say();
	UI_add_answer(["果树", "采摘工", "小偷"]);
	UI_remove_answer("管理员");
labelFunc042D_00F7:
	case "果树" attend labelFunc042D_010A:
	message("「苹果树需要持续的照顾。我必须确保所有的树都有足够的水分，但又不能太多。我必须保持所有的树都修剪得当，并保持警惕，以免作物被害虫或蠕虫感染。我还必须捡起所有掉落的苹果，这本身就是一项工作。」");
	say();
	UI_remove_answer("果树");
labelFunc042D_010A:
	case "采摘工" attend labelFunc042D_011D:
	message("「他们大多是来自 Paws 的移工。因为他们曾经是农夫，所以他们确信自己比我更了解果园的保养！这当然是荒谬的。而且采摘工不太服从命令。」");
	say();
	UI_remove_answer("采摘工");
labelFunc042D_011D:
	case "小偷" attend labelFunc042D_0137:
	message("「如果我给他们机会，他们会把我们抢到只剩最后一根树枝！我冒着生命危险保护这片果园，不列颠王应该亲自颁发奖章给我。哎呀，我最近刚抓到另一个小偷。他的名字是 Weston 。」");
	say();
	UI_remove_answer("小偷");
	UI_add_answer("Weston");
labelFunc042D_0137:
	case "皇家果园" attend labelFunc042D_014A:
	message("「这里种植着全不列颠尼亚最好的苹果。我想让你尝尝看，但这会违法，因为你显然不是贵族血统。」");
	say();
	UI_remove_answer("皇家果园");
labelFunc042D_014A:
	case "Weston" attend labelFunc042D_0177:
	message("「多亏了我，他现在住在监狱里！我一看到他就知道他想干嘛！他有一副老练苹果贼的模样，所以我让城镇守卫把他抓了。」");
	say();
	UI_add_answer(["监狱", "苹果贼"]);
	if (!gflags[0x0094]) goto labelFunc042D_0170;
	UI_add_answer("友谊会");
labelFunc042D_0170:
	UI_remove_answer("Weston");
labelFunc042D_0177:
	case "监狱" attend labelFunc042D_018A:
	message("「是的， Weston 现在就住在我们当地的监狱里。如果你不相信我，你可以自己去那里看看！」");
	say();
	UI_remove_answer("监狱");
labelFunc042D_018A:
	case "苹果贼" attend labelFunc042D_01AA:
	message("「喔，他带着一些赚人热泪的故事来这里。但当一个人像我一样是人类行为的敏锐观察者时，就能看出人们的真实意图，而这往往与他们告诉你的相反！」");
	say();
	UI_remove_answer("苹果贼");
	UI_add_answer(["赚人热泪的故事", "观察者"]);
labelFunc042D_01AA:
	case "赚人热泪的故事" attend labelFunc042D_01BD:
	message("「我记不太清楚了。好像是关于他贫困的妻子和家人在 Paws 快饿死了，或者其他一堆废话。」");
	say();
	UI_remove_answer("赚人热泪的故事");
labelFunc042D_01BD:
	case "观察者" attend labelFunc042D_01EA:
	message("「是的，我确实认为自己是一个非常合格的品格判断者。你知道我是怎么变得如此的吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc042D_01DC;
	message("「喔，那你不是很聪明吗！」");
	say();
	goto labelFunc042D_01E3;
labelFunc042D_01DC:
	message("「那我告诉你吧！我是友谊会的成员！」");
	say();
	Func0919();
labelFunc042D_01E3:
	UI_remove_answer("观察者");
labelFunc042D_01EA:
	case "理念" attend labelFunc042D_01FC:
	Func091A();
	UI_remove_answer("理念");
labelFunc042D_01FC:
	case "友谊会" attend labelFunc042D_024C:
	message("「我是友谊会的成员，没错。但我若把皇家果园的苹果给友谊会将是一种犯罪，也是对我神圣职责的侵犯。虽然卖苹果也是违规的，我只是想帮这个名叫 Weston 的人一个忙。而我想这些指控就是我得到的回报？哼！」");
	say();
	if (!var0002) goto labelFunc042D_023A;
	message("他向你靠近并压低声音。「毕竟你也是友谊会的成员。我难道不是你的弟兄吗？你难道不应该信任我吗？」他给了你一个狡黠的眨眼。");
	say();
	var0005 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0010, true);
	if (!var0005) goto labelFunc042D_0233;
	message("「你看到了吗？我是你的弟兄！」他递给你一颗苹果。");
	say();
	goto labelFunc042D_0237;
labelFunc042D_0233:
	message("「我本想给你一颗苹果来表达我的诚意，但看来你背了太多东西了。」");
	say();
labelFunc042D_0237:
	goto labelFunc042D_0245;
labelFunc042D_023A:
	message("「但这个已知罪犯的绝望指控已经够了。」");
	say();
	UI_add_answer("买");
labelFunc042D_0245:
	UI_remove_answer("友谊会");
labelFunc042D_024C:
	case "买" attend labelFunc042D_02D3:
	message("「我也可以帮你一个忙。你想不想用区区五枚金币的微薄价格买下这些美丽的苹果之一呢？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc042D_02B0;
	var0007 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, 0xFE99);
	if (!var0007) goto labelFunc042D_02A8;
	var0008 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0010, true);
	if (!var0008) goto labelFunc042D_02A1;
	message("Figg 从旁边的篮子里拿出一颗苹果。在衬衫上稍微擦亮后，他把它递给了你。");
	say();
	goto labelFunc042D_02A5;
labelFunc042D_02A1:
	message("「你拿不下苹果！你带了太多东西了！」");
	say();
labelFunc042D_02A5:
	goto labelFunc042D_02AD;
labelFunc042D_02A8:
	message("「你连买一颗苹果的金币都不够！你浪费了国王皇家果园管理员的时间。滚开，农民！在我叫守卫之前滚开！」");
	say();
	abort;
labelFunc042D_02AD:
	goto labelFunc042D_02CC;
labelFunc042D_02B0:
	message("「很好。但你正在放弃一个很少有人得到的机会。事实上，呃，如果你不向任何人提及我们的小谈话，我会很感激。同意吗？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc042D_02C7;
	message("「啊，我就知道你是个好人。」");
	say();
	goto labelFunc042D_02CC;
labelFunc042D_02C7:
	message("「不！嗯，那好吧。」*");
	say();
	abort;
labelFunc042D_02CC:
	UI_remove_answer("买");
labelFunc042D_02D3:
	case "告辞" attend labelFunc042D_02DE:
	goto labelFunc042D_02E1;
labelFunc042D_02DE:
	goto labelFunc042D_00A5;
labelFunc042D_02E1:
	endconv;
	message("「我看你该上路了。」*");
	say();
labelFunc042D_02E6:
	if (!(event == 0x0000)) goto labelFunc042D_02F4;
	Func092E(0xFFD3);
labelFunc042D_02F4:
	return;
}


