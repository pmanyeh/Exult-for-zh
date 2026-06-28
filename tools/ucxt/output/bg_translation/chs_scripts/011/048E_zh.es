#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0909 0x909 ();
extern void Func08F0 0x8F0 ();
extern void Func08EF 0x8EF ();

void Func048E object#(0x48E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc048E_025C;
	UI_show_npc_face(0xFF72, 0x0000);
	var0000 = Func0931(0xFE9B, 0x0001, 0x0127, 0x0000, 0xFE99);
	var0001 = Func0909();
	var0002 = UI_find_nearest(0xFF72, 0x02EB, 0xFFFF);
	var0003 = false;
	if (!gflags[0x01CE]) goto labelFunc048E_0050;
	message("Trent 瞪着你，他的眼神中透露出一种强烈的情感，让你对他的态度毫不怀疑。「如果我认为你会在接到通知的那一刻就跑掉，我就不会请求你帮我救出我的挚爱了。~~「现在，请拿着这个笼子去找 Mordra 。她会教你如何使用它。」他的态度变得温和起来，「我已经把与 Rowena 重聚的唯一机会交到你可靠的手中了。」*");
	say();
	gflags[0x01CE] = false;
	abort;
labelFunc048E_0050:
	if (!(gflags[0x01CF] && (!gflags[0x01A8]))) goto labelFunc048E_0060;
	message("「拜托，当我建造这个笼子时不要打扰我，因为我满脑子想的都是要摧毁那个邪恶的 Horance ！」他继续建造着灵魂笼。*");
	say();
	abort;
labelFunc048E_0060:
	if (!(!gflags[0x01B6])) goto labelFunc048E_0079;
	if (!var0002) goto labelFunc048E_0074;
	message("这个愤怒的高大幽灵无视你的存在，继续在一个奇怪的铁笼上敲打着。*");
	say();
	goto labelFunc048E_0078;
labelFunc048E_0074:
	message("这个愤怒的高大幽灵无视你的存在，显然正在寻找某样东西。*");
	say();
labelFunc048E_0078:
	abort;
labelFunc048E_0079:
	if (!var0000) goto labelFunc048E_0086;
	UI_add_answer("戒指");
labelFunc048E_0086:
	if (!gflags[0x0198]) goto labelFunc048E_0093;
	UI_add_answer("牺牲");
labelFunc048E_0093:
	if (!gflags[0x01A6]) goto labelFunc048E_00A6;
	UI_show_npc_face(0xFF72, 0x0001);
	Func08F0();
labelFunc048E_00A6:
	if (!gflags[0x01A5]) goto labelFunc048E_00BD;
	UI_show_npc_face(0xFF72, 0x0001);
	gflags[0x01C1] = false;
	Func08EF();
labelFunc048E_00BD:
	if (!(!gflags[0x01C7])) goto labelFunc048E_00CF;
	message("你在幽灵锻造炉的火光中看到一个肌肉发达、留着大胡子的高大幽灵。他没有注意到你的靠近。");
	say();
	gflags[0x01C7] = true;
	goto labelFunc048E_00EE;
labelFunc048E_00CF:
	if (!var0002) goto labelFunc048E_00E3;
	message("Trent 继续在那个形状奇怪的铁笼上工作着。");
	say();
	UI_add_answer("铁笼");
	goto labelFunc048E_00EE;
labelFunc048E_00E3:
	message("Trent 似乎在寻找某样东西。");
	say();
	UI_add_answer("某样东西");
labelFunc048E_00EE:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc048E_00FE:
	converse attend labelFunc048E_025B;
	case "姓名" attend labelFunc048E_012C:
	message("一道由浓密眉毛突显的深深皱纹，刻画在幽灵疲惫的额头上。他没有从工作中移开视线。「我是 Trent 。现在，请让我继续工作。」");
	say();
	if (!var0002) goto labelFunc048E_0125;
	message("他继续在一个形状奇怪的铁笼上敲打着。");
	say();
	if (!(!var0003)) goto labelFunc048E_0125;
	UI_add_answer("铁笼");
labelFunc048E_0125:
	UI_remove_answer("姓名");
labelFunc048E_012C:
	case "某样东西" attend labelFunc048E_0139:
	message("「我找不到那个铁笼了！」他大喊着。「一定是哪个笨蛋把它拿走了！当我查出是谁做的，还有它在哪里时，那个笨蛋一定会为了把它从我的店里拿走而后悔莫及！」*");
	say();
	abort;
labelFunc048E_0139:
	case "职业" attend labelFunc048E_014C:
	message("「你瞎了吗！你看不出我是个铁匠吗？」他似乎不是那种喜欢闲聊的人。");
	say();
	UI_remove_answer("职业");
labelFunc048E_014C:
	case "铁笼" attend labelFunc048E_0170:
	message("愤怒几乎以实体的形式从这个高大的幽灵身上散发出来。他从笼子上擡起头，你看到火光不是从锻造炉里发出的，而是从他的眼睛里发出的。「我造这个笼子是为了摧毁那个混蛋 Horance ，他从我身边夺走了我的妻子。」~~有一瞬间，你以为他要向你扑过来，然后他伴随着一声沉重的叹息松开了拳头，又回到了他的工作中。");
	say();
	var0003 = true;
	UI_remove_answer("铁笼");
	UI_add_answer(["Horance", "妻子"]);
labelFunc048E_0170:
	case "Horance" attend labelFunc048E_0183:
	message("当你说话时，他全身都绷紧了。~~「 Horance ……」这个词听起来就像一句诅咒。「我会亲眼看着他那邪恶的灵魂燃烧。然后当他可怜地哭喊着求饶时，我会大笑。」出于某种原因，你觉得你宁愿不要听到那种笑声。");
	say();
	UI_remove_answer("Horance");
labelFunc048E_0183:
	case "妻子" attend labelFunc048E_01A3:
	message("一滴滚烫的眼泪从幽灵的眼角滑落，掉在铁笼一块烧红的铁上。它发出嘶嘶声，然后就消失了。~~「 Rowena 是我的生命，我在这个世界上唯一的快乐。」他的声音几乎是温柔的，但他随后又恢复了粗哑的语调。「他杀了她，从我这里夺走了那份快乐。现在我只是一个空壳，燃烧着仇恨。」");
	say();
	UI_remove_answer("妻子");
	UI_add_answer(["Rowena", "被杀"]);
labelFunc048E_01A3:
	case "被杀" attend labelFunc048E_01B6:
	message("「为了试图将她从我身边偷走，那个邪恶的恶魔派出了他的不死仆从，将她带到黑暗塔。当她挣扎时，那些没有大脑的生物杀害了她。」幽灵痛苦地转向你，「我无能为力……当她失去生命时，数量庞大的骷髅战士将我压倒在地。」~~疯狂的决心在这位高大幽灵的眼中闪烁，「为此，我永远不会原谅，也永远不会忘记。");
	say();
	UI_remove_answer("被杀");
labelFunc048E_01B6:
	case "Rowena" attend labelFunc048E_01E3:
	message("当你说出他已故妻子的名字时，他举起了一只手。「请不要说那个名字。那会带走我的一点点仇恨，而这也是我现在仅有的东西了。你难道想夺走唯一能让我活下去的东西吗？」他似乎没有意识到自己其实已经不在人世了。一个奇怪的表情闪过他的脸庞。~~「我送了一个音乐盒给她作为我们的结婚礼物，现在它是我用来怀念她的唯一东西了。」他的语气变了。~~「你看到你做了什么吗？！当我想起她时，我就无法工作了！」他带着更新的热情回到了他的工作中。");
	say();
	var0004 = UI_find_nearest(0xFE9C, 0x02F0, 0xFFFF);
	if (!var0004) goto labelFunc048E_01DC;
	message("你注意到他提到的那个音乐盒就放在附近。");
	say();
labelFunc048E_01DC:
	UI_remove_answer("Rowena");
labelFunc048E_01E3:
	case "戒指" attend labelFunc048E_024B:
	var0005 = UI_remove_party_items(0x0001, 0x0127, 0x0000, 0xFE99, false);
	message("你把戒指递给 Trent 。一开始他没理你。接着，认出这枚戒指后，他从你手中接过它，并将它举在面前。他体内的某种东西崩溃了，他庞大的身躯向前瘫倒。~~你让幽灵哭了一会儿，当他结束时，你看到他的外表发生了显著的变化。");
	say();
	UI_remove_npc_face(0xFF72);
	UI_show_npc_face(0xFF72, 0x0001);
	message("曾经在他眼中燃烧的火焰现在已经消失，取而代之的是深沉的蓝色。他看起来像个全新的人，或者说，一个全新的幽灵。~~「原谅我的行为，");
	message(var0001);
	message("。我不知道我是怎么了。我记得有火焰，但它们没有我自己的仇恨来得猛烈。」他对这段记忆感到痛苦。~~ 「你见过她了？你见过 Rowena 了？她还在乎我。好吧，这更是完成这个灵魂笼的理由了。我们必须将她从 Horance 邪恶的魔法中解救出来。」");
	say();
	gflags[0x01A5] = true;
	UI_remove_answer(["铁笼", "姓名", "职业", "Horance", "妻子", "Rowena", "被杀", "戒指", "告辞"]);
	gflags[0x01C1] = true;
	Func08EF();
labelFunc048E_024B:
	case "告辞" attend labelFunc048E_0258:
	message("如果他听到了你的话，当你告辞时他忽略了这个事实。你真的对这个受了重伤的灵魂感到怜悯。*");
	say();
	abort;
labelFunc048E_0258:
	goto labelFunc048E_00FE;
labelFunc048E_025B:
	endconv;
labelFunc048E_025C:
	if (!(event == 0x0000)) goto labelFunc048E_0265;
	abort;
labelFunc048E_0265:
	return;
}


