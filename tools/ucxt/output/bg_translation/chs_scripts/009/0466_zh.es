#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func08C3 0x8C3 ();
extern void Func08C4 0x8C4 ();
extern void Func0911 0x911 (var var0000);

void Func0466 object#(0x466) ()
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

	if (!(event == 0x0000)) goto labelFunc0466_0009;
	abort;
labelFunc0466_0009:
	UI_show_npc_face(0xFF9A, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0001 = UI_get_party_list();
	var0002 = UI_count_objects(0xFE9B, 0x0347, 0xFE99, 0x0000);
	if (!gflags[0x01D2]) goto labelFunc0466_0056;
	UI_add_answer(["沙漏", "时间领主"]);
labelFunc0466_0056:
	if (!(var0002 || gflags[0x0211])) goto labelFunc0466_0067;
	UI_add_answer("附魔");
labelFunc0466_0067:
	if (!(!gflags[0x0140])) goto labelFunc0466_0079;
	message("你的老朋友 Nicodemus 的眼神显得很遥远。");
	say();
	gflags[0x0140] = true;
	goto labelFunc0466_0091;
labelFunc0466_0079:
	if (!(!gflags[0x0003])) goto labelFunc0466_0087;
	message("「你是谁？」 Nicodemus 问。「噢，我记得了。记得 (Remember) 皮得 (demember) ！哈 哈 哈！」");
	say();
	goto labelFunc0466_0091;
labelFunc0466_0087:
	message("「又见面了， ");
	message(var0000);
	message("，」 Nicodemus 说。");
	say();
labelFunc0466_0091:
	converse attend labelFunc0466_02F9;
	case "姓名" attend labelFunc0466_00B5:
	if (!(!gflags[0x0003])) goto labelFunc0466_00AA;
	message("「这是一个非常好的问题。有些日子我真的能记得。让我想想……今天……对！我是 Nicodemus ！ Nicodomus ！ Nicodimus ！ Nico-nico-kukodamus ！哈 哈 哈！」");
	say();
	goto labelFunc0466_00AE;
labelFunc0466_00AA:
	message("「你在跟 Nicodemus 说话。」");
	say();
labelFunc0466_00AE:
	UI_remove_answer("姓名");
labelFunc0466_00B5:
	case "职业" attend labelFunc0466_00E9:
	if (!(!gflags[0x0003])) goto labelFunc0466_00D8;
	message("「绝对是疯了！因为那确实正在发生！我的魔法失效了！每次我试图把东西变成龙 (drake) ，牠就只会变成蝾螈 (newt) ！喔，蝾螈-蝾螈 蹦蹦-跳跳！ (newty-wewty scooty-booty!) 」他对着身旁一个想像中的生物说话。「谁问你了？走开！」他转向你。「抱歉。那只该死的蝾螈一直试图破坏我的谈话。总之……我想我可以卖给你一些秘药、药水或法术。我必须『某牛』 (somecow) 维生。我是说『设法』 (somehow) 维生！那是『一些牛』 (Some Cow) ！哈 哈 哈！」");
	say();
	UI_add_answer(["魔法", "药水"]);
	goto labelFunc0466_00DC;
labelFunc0466_00D8:
	message("「哎呀，为了施展魔法啊！看来以太的干扰已经修复了！我也能卖给你一些秘药或法术。」");
	say();
labelFunc0466_00DC:
	UI_add_answer(["法术", "秘药"]);
labelFunc0466_00E9:
	case "魔法" attend labelFunc0466_010A:
	if (!(!gflags[0x0003])) goto labelFunc0466_00FF;
	message("「魔法？什么魔法！？世界上所有的魔法都已经完全乱套了！喔，糊里糊涂！哈 哈 哈！这些字很蠢，不是吗？可惜它们没有魔力！哈 哈 哈！」");
	say();
	goto labelFunc0466_0103;
labelFunc0466_00FF:
	message("「以太修复了。全世界的法师都欠你一个人情。」");
	say();
labelFunc0466_0103:
	UI_remove_answer("魔法");
labelFunc0466_010A:
	case "法术" attend labelFunc0466_012C:
	message("「你想买些法术吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0466_0128;
	Func08C3();
	goto labelFunc0466_012C;
labelFunc0466_0128:
	message("「那就算了！」");
	say();
labelFunc0466_012C:
	case "秘药" attend labelFunc0466_014E:
	message("「你想买些秘药吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0466_014A;
	Func08C4();
	goto labelFunc0466_014E;
labelFunc0466_014A:
	message("「那就算了！」");
	say();
labelFunc0466_014E:
	case "药水" attend labelFunc0466_01E3:
	if (!(!gflags[0x0003])) goto labelFunc0466_0164;
	message("「药水 (Potions) ？你怎么会觉得我有药水？你确定你不想要乳液 (Lotions) ？我绝对有乳液！ Otions, slotions, motions, votions ！哈 哈 哈！等等！喔，对了！我确实有药水！我告诉过你的，不是吗！让我们看看……我这里有这瓶黑色的药水。我不太确定它具体的作用，但我很确定它能让人隐形。");
	say();
	goto labelFunc0466_0168;
labelFunc0466_0164:
	message("「是的，我有药水。嗯，我有这瓶黑色的。这是一瓶隐形药水。");
	say();
labelFunc0466_0168:
	message("「你想要它吗，比方说，75 个金币？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0466_01D8;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 >= 0x004B)) goto labelFunc0466_01D1;
	var0007 = UI_add_party_items(0x0001, 0x0154, 0xFE99, 0x0007, true);
	if (!var0007) goto labelFunc0466_01CA;
	message("「这是药水。」");
	say();
	var0008 = UI_remove_party_items(0x004B, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0466_01CE;
labelFunc0466_01CA:
	message("「你没有足够的空间来携带药水！」");
	say();
labelFunc0466_01CE:
	goto labelFunc0466_01D5;
labelFunc0466_01D1:
	message("「你想骗我吗？你没有足够的金币！」");
	say();
labelFunc0466_01D5:
	goto labelFunc0466_01DC;
labelFunc0466_01D8:
	message("「那你为什么要提？别烦我！」");
	say();
labelFunc0466_01DC:
	UI_remove_answer("药水");
labelFunc0466_01E3:
	case "时间领主" attend labelFunc0466_0226:
	if (!(!gflags[0x0003])) goto labelFunc0466_0214;
	message("「滴答滴答领主 (Timey Limey Lord) ？嗯。我不认识他。等等！对，我认识。他是不是留着黑色大胡子，还穿着三条裤子？不！我知道他是谁了。他是前几天来修我日晷的家伙，对吧？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0466_0209;
	message("「我就知道！告诉他那该死的东西还是坏的！它给了我三个影子！ Dadows badows whoopeee ！哈 哈 哈！」");
	say();
	goto labelFunc0466_020D;
labelFunc0466_0209:
	message("「他不是吗？嗯。那他一定是我没想到的那个人！」");
	say();
labelFunc0466_020D:
	message("「等等！我记起来了！他是我的骑士桥棋对手！我们在我家北边的骑士桥棋场地玩。」");
	say();
	goto labelFunc0466_0218;
labelFunc0466_0214:
	message("「我好几个月没跟时间领主说过话了！那老家伙好吗？代我向他问好。告诉他我很想念我们的骑士桥棋游戏！」");
	say();
labelFunc0466_0218:
	UI_remove_answer("时间领主");
	UI_add_answer("骑士桥棋");
labelFunc0466_0226:
	case "骑士桥棋" attend labelFunc0466_0239:
	message("「这是一种真人大小的棋盘游戏。我这附近应该有一本书里面写着规则。」");
	say();
	UI_remove_answer("骑士桥棋");
labelFunc0466_0239:
	case "沙漏" attend labelFunc0466_0287:
	if (!gflags[0x012D]) goto labelFunc0466_024E;
	message("「是的，我刚刚给它附了魔。」");
	say();
	goto labelFunc0466_0280;
labelFunc0466_024E:
	if (!(!(gflags[0x0211] || var0002))) goto labelFunc0466_026E;
	if (!(!gflags[0x0003])) goto labelFunc0466_0267;
	message("「这个时间领主告诉你什么？一个沙漏！我没有什么见鬼的沙漏！玻璃-玻璃 沙漏-沙漏！ (Glassy wassy hoursplassy!) 哈 哈 哈！等等！一个附魔的沙漏？这听起来很耳熟。叮叮当当！哈 哈 哈！等等！我记得了。我以前有一个沙漏。我把它卖了。卖给了一个吉普赛人。还是一个古董商？我想我可能把它卖给了不列颠城的一个吉普赛古董商。或是 Paws 。在那片土地上的某个地方。但如果我没记错的话，那个沙漏的魔力已经用光了，这就是我卖掉它的原因。我想如果以太修复了，我或许可以重新给它附魔。把它带来给我，我们看看能做些什么。我知道了！我们可以来一场激烈的西洋棋！但前提是必须总是由我发牌。我不信任你。」");
	say();
	goto labelFunc0466_026B;
labelFunc0466_0267:
	message("「我的旧沙漏！我当然记得它！我相信我把它卖给了 Paws 的一个古董商。如果你能把它带来给我，我或许可以重新给它附魔。」");
	say();
labelFunc0466_026B:
	goto labelFunc0466_0280;
labelFunc0466_026E:
	if (!(!gflags[0x0003])) goto labelFunc0466_027C;
	message("「这是什么？某种沙漏？等等！它看起来有点眼熟！小偷！！这是我的沙漏！我找它找了好几年了！你从哪里弄来的，无赖？我要把你变成一只鸭子！」~~Nicodemus 念了个法术并指着你，但什么事也没发生。~~「天啊！你跟我一样不是只会嘎嘎叫的鸭子。什么都没用了。嘎嘎 懒鬼 哇哇 飞飞！ (Quacker slacker wacker flacker!) 哈 哈 哈！」");
	say();
	goto labelFunc0466_0280;
labelFunc0466_027C:
	message("「我的旧沙漏！我想我可以重新恢复它的魔力。」");
	say();
labelFunc0466_0280:
	UI_remove_answer("沙漏");
labelFunc0466_0287:
	case "附魔" attend labelFunc0466_02EB:
	if (!(!gflags[0x0003])) goto labelFunc0466_029D;
	message("「附魔？你想要我给这件破东西附魔？你一定是有个蟾蜍脑袋！蟾蜍 蟾蜍 蟾蜍！ (Toady woady bloady coady!) 哈 哈 哈！~~帮我个忙，圣者先生。修好那该死的以太，好吗？做到了我就能给你的玻璃沙漏 (glourblass) 附魔。我是说面粉沙漏 (floursass) 。我是说沙漏 (hourglass) 。把这告诉你的『时间领主』。你还可以告诉他，他需要洗个澡了。」");
	say();
	goto labelFunc0466_02E4;
labelFunc0466_029D:
	message("「我很乐意为沙漏附魔。在解放以太之后，我欠你一个天大的人情。让我看看它……」");
	say();
	if (!var0002) goto labelFunc0466_02E0;
	message("Nicodemus 拿过沙漏，研究了一会儿。他把它放在桌上，闭上眼睛集中精神。他念了几个字，向空中撒了一些秘药，然后把手拂过这件神器。~~「这样应该就行了。」他把沙漏交还给你。");
	say();
	var000A = UI_remove_party_items(0x0001, 0x0347, 0xFE99, 0x0000, false);
	var000B = UI_add_party_items(0x0001, 0x0347, 0xFE99, 0x0001, false);
	gflags[0x012D] = true;
	Func0911(0x0064);
	goto labelFunc0466_02E4;
labelFunc0466_02E0:
	message("「它在哪里？你没有沙漏！」");
	say();
labelFunc0466_02E4:
	UI_remove_answer("附魔");
labelFunc0466_02EB:
	case "告辞" attend labelFunc0466_02F6:
	goto labelFunc0466_02F9;
labelFunc0466_02F6:
	goto labelFunc0466_0091;
labelFunc0466_02F9:
	endconv;
	if (!(!gflags[0x0003])) goto labelFunc0466_0308;
	message("「再见，再见，再见，再见，再见！哈 哈 哈！」*");
	say();
	goto labelFunc0466_0312;
labelFunc0466_0308:
	message("「再见， ");
	message(var0000);
	message("。」*");
	say();
labelFunc0466_0312:
	return;
}


