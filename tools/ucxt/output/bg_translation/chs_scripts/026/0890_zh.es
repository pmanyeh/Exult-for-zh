#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0891 0x891 ();

void Func0890 0x890 ()
{
	var var0000;

	UI_show_npc_face(0xFEE0, 0x0000);
	if (!(!gflags[0x0314])) goto labelFunc0890_0028;
	UI_add_answer(["不知道", "牺牲了", "告辞"]);
	gflags[0x0314] = true;
	goto labelFunc0890_0038;
labelFunc0890_0028:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0890_0038:
	if (!gflags[0x031E]) goto labelFunc0890_0045;
	UI_add_answer("接下来呢");
labelFunc0890_0045:
	converse attend labelFunc0890_022C;
	case "不知道" attend labelFunc0890_008F:
	message("他跪在尸体旁检查另一个魔像。当他的手指滑过 Bollux 胸口那个大洞时，他的脸上露出恍然大悟的表情。~「他、他的心脏不见了！」~他低头看着自己的胸口。「他牺牲了自己，把他的心脏给了我……这个傻瓜！」他的话语充满了侮辱，但语气中却带着深情。");
	say();
	UI_remove_answer(["不知道", "牺牲了"]);
	message("「我必须帮助他，就像他帮助我一样！你愿意帮忙吗？」");
	say();
	if (!Func090A()) goto labelFunc0890_0086;
	message("「非常好，」他明显松了一口气地说。「我先谢谢你了。」");
	say();
	gflags[0x031E] = true;
	UI_add_answer(["姓名", "职业", "傻瓜"]);
	goto labelFunc0890_008F;
labelFunc0890_0086:
	message("「那我就只能靠自己了，」他生气地说。「这只不过是朋友之间应该做的事……这只不过是 Bollux 为我做的事！」");
	say();
	message("他仔细地看着你。他如石头般冷酷的面容，完全无法掩饰他脸上和语气中的怀疑。~「对我来说很明显，你只不过是个迷路的旅行者，绝对不是我误认的那个圣者。」*");
	say();
	abort;
labelFunc0890_008F:
	case "牺牲了" attend labelFunc0890_00D6:
	message("你很快地讲述了 Bollux 死亡的细节，他是如何从自己胸口拔出那东西，并放进另一个魔像的身体里。~「他牺牲了自己，把他的心脏给了我……这个傻瓜！」他的话语充满了侮辱，但语气中却带着深情。");
	say();
	UI_remove_answer(["不知道", "牺牲了"]);
	message("「我必须帮助他，就像他帮助我一样！你愿意帮忙吗？」");
	say();
	if (!Func090A()) goto labelFunc0890_00CD;
	message("「非常好，」他明显松了一口气地说。「我先谢谢你了。」");
	say();
	gflags[0x031E] = true;
	UI_add_answer(["姓名", "职业", "傻瓜"]);
	goto labelFunc0890_00D6;
labelFunc0890_00CD:
	message("「那我就只能靠自己了，」他生气地说。「这只不过是朋友之间应该做的事……这只不过是 Bollux 为我做的事！」");
	say();
	message("他仔细地看着你。他如石头般冷酷的面容，完全无法掩饰他脸上和语气中的怀疑。~「对我来说很明显，你只不过是个迷路的旅行者，绝对不是我误认的那个圣者。」*");
	say();
	abort;
labelFunc0890_00D6:
	case "姓名" attend labelFunc0890_00E9:
	UI_remove_answer("姓名");
	message("「我是名为 Adjhar 的魔像，为你服务。」");
	say();
labelFunc0890_00E9:
	case "职业" attend labelFunc0890_0105:
	message("「我是真理、爱与勇气神殿的守护者之一。当墙壁倒塌并压碎我的时候，Bollux 和我正在做这件事。」");
	say();
	UI_add_answer(["Bollux", "神殿", "墙壁"]);
labelFunc0890_0105:
	case "神殿" attend labelFunc0890_0118:
	UI_remove_answer("神殿");
	message("「你肯定听说过三大原则神殿：真理、爱与勇气！我们魔像被制造出来是为了保护神殿，因为只有圣者——『那位』圣者——才能利用它们所能传达的惊人力量。」");
	say();
labelFunc0890_0118:
	case "墙壁" attend labelFunc0890_013C:
	UI_remove_answer("墙壁");
	message("「我对那起事件记得不是很清楚。不过，我会讲述我能回忆起来的部分。Bollux 和我正在原则神殿的房间里站岗，这时我们察觉到有人入侵了城堡。除了意识到巨大的热量之外，我什么也不记得了，然后一部分墙壁崩塌砸在我身上，压碎了我的腿。我想 Bollux 比较幸运。是他把我带到这里的吗？」");
	say();
	if (!Func090A()) goto labelFunc0890_0138;
	message("「那我们必须找到让他复活的方法！就算没有别的理由，我也欠他一份感激之情。」");
	say();
	goto labelFunc0890_013C;
labelFunc0890_0138:
	message("「奇怪，」他困惑地说。「那我就无法解释我为什么会在这里了。~无论如何，我『必须』找到让他复活的方法！」");
	say();
labelFunc0890_013C:
	case "Bollux" attend labelFunc0890_0156:
	message("「你难道还没见过他吗？他是我的哥哥，也是我的朋友。」");
	say();
	UI_remove_answer("Bollux");
	UI_add_answer("更年长");
labelFunc0890_0156:
	case "更年长" attend labelFunc0890_0169:
	message("「Astelleron 大师——我们其实称他为父亲——在创造我之前创造了他。而且他首先赋予了 Bollux 人格。」");
	say();
	UI_remove_answer("更年长");
labelFunc0890_0169:
	case "接下来呢" attend labelFunc0890_01BA:
	UI_remove_answer("接下来呢");
	message("「你有那本名为『Castambre 之石』的书吗？」");
	say();
	if (!Func090A()) goto labelFunc0890_01B2;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0090, 0xFE99);
	if (!var0000) goto labelFunc0890_01A7;
	message("他的眼神中透露出希望。当他从你手中接过书时，看起来几乎像是在微笑。」");
	say();
	Func0891();
	goto labelFunc0890_01AF;
labelFunc0890_01A7:
	message("「我必须看着那本书才能使用它。也许你把它随手放在哪里了。」他直视着你。「我必须拥有那本书，这至关重要。我恳求你，去帮我把它找回来！」");
	say();
	gflags[0x031F] = true;
labelFunc0890_01AF:
	goto labelFunc0890_01BA;
labelFunc0890_01B2:
	message("「那么请去把它找回来。我相信里面包含了可以帮助我同伴的信息。」");
	say();
	gflags[0x031F] = true;
labelFunc0890_01BA:
	case "傻瓜" attend labelFunc0890_021C:
	UI_remove_answer("傻瓜");
	message("「可怜的 Bollux 并不知道 Castambre 之石。他的牺牲也许是不必要的。你碰巧见过 MacCuth 写的《Castambre 之石》吗？」");
	say();
	if (!Func090A()) goto labelFunc0890_0218;
	message("「你有带在身上吗？」");
	say();
	if (!Func090A()) goto labelFunc0890_020D;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0090, 0xFE99);
	if (!var0000) goto labelFunc0890_0202;
	message("他的眼神中透露出希望。当他从你手中接过书时，看起来几乎像是在微笑。」");
	say();
	Func0891();
	goto labelFunc0890_020A;
labelFunc0890_0202:
	message("「我必须看着那本书才能使用它。也许你把它随手放在哪里了。」他直视着你。「我必须拥有那本书，这至关重要。我恳求你，去帮我把它找回来！」");
	say();
	gflags[0x031F] = true;
labelFunc0890_020A:
	goto labelFunc0890_0215;
labelFunc0890_020D:
	message("「那么请去把它找回来。我相信里面包含了可以帮助我同伴的信息。」");
	say();
	gflags[0x031F] = true;
labelFunc0890_0215:
	goto labelFunc0890_021C;
labelFunc0890_0218:
	message("「那么我建议你去我主人的房间里找找看。书页中包含可能有助于我同伴的词语。」");
	say();
labelFunc0890_021C:
	case "告辞" attend labelFunc0890_0229:
	message("「对于你的帮助，我除了最深切的感激之外，无法提供任何东西。请平安上路。」*");
	say();
	abort;
labelFunc0890_0229:
	goto labelFunc0890_0045;
labelFunc0890_022C:
	endconv;
	return;
}


