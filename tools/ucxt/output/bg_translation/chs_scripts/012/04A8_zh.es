#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04A8 object#(0x4A8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04A8_0276;
	UI_show_npc_face(0xFF58, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x0212] && (!gflags[0x0218]))) goto labelFunc04A8_003A;
	UI_add_answer("小偷");
labelFunc04A8_003A:
	if (!gflags[0x0218]) goto labelFunc04A8_0047;
	UI_add_answer("找到毒液");
labelFunc04A8_0047:
	var0001 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0001) goto labelFunc04A8_0069;
	UI_add_answer("找到毒液");
labelFunc04A8_0069:
	if (!(!gflags[0x0221])) goto labelFunc04A8_007B;
	message("「一个表情严厉的女人毫不幽默地盯着你看。」");
	say();
	gflags[0x0221] = true;
	goto labelFunc04A8_0085;
labelFunc04A8_007B:
	message("「向你问好，");
	message(var0000);
	message("。」你听到 Brita 说。");
	say();
labelFunc04A8_0085:
	converse attend labelFunc04A8_0275;
	case "姓名" attend labelFunc04A8_009B:
	message("「我是 Brita。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A8_009B:
	case "职业" attend labelFunc04A8_00BA:
	message("「我帮我丈夫 Feridwyn 经营友谊会在 Paws 的庇护所。」");
	say();
	UI_add_answer(["Feridwyn", "友谊会", "庇护所", "Paws"]);
labelFunc04A8_00BA:
	case "Feridwyn" attend labelFunc04A8_0109:
	if (!(!gflags[0x0220])) goto labelFunc04A8_00D0;
	message("「我丈夫是个好人，他无私地奉献自己来帮助镇上的穷人，而他们却毫不感激。他是个好人，也是个尽责的友谊会成员。」");
	say();
	goto labelFunc04A8_0102;
labelFunc04A8_00D0:
	message("「我丈夫是我这辈子见过最可敬的人。」");
	say();
	var0002 = Func08F7(0xFF59);
	if (!var0002) goto labelFunc04A8_0102;
	UI_show_npc_face(0xFF59, 0x0000);
	message("「别相信妻子骄傲的自夸，善良的圣者。我只是一个尽己所能的普通人。」*");
	say();
	UI_remove_npc_face(0xFF59);
	UI_show_npc_face(0xFF58, 0x0000);
labelFunc04A8_0102:
	UI_remove_answer("Feridwyn");
labelFunc04A8_0109:
	case "友谊会" attend labelFunc04A8_012A:
	if (!(!gflags[0x0006])) goto labelFunc04A8_011F;
	message("「你应该跟我丈夫谈谈友谊会的事。我敢肯定你对他要告诉你的事会印象深刻的。」");
	say();
	goto labelFunc04A8_0123;
labelFunc04A8_011F:
	message("「看到你加入了友谊会，只是证实了我早已知道的事。那就是友谊会是我们带领不列颠尼亚迈向美好新未来的道路。你加入我们的消息正在四处传开！」");
	say();
labelFunc04A8_0123:
	UI_remove_answer("友谊会");
labelFunc04A8_012A:
	case "庇护所" attend labelFunc04A8_013D:
	message("「经营庇护所对我丈夫和我来说是项艰苦的工作，但为了减轻那些比我们不幸的人的痛苦，这是值得的。」");
	say();
	UI_remove_answer("庇护所");
labelFunc04A8_013D:
	case "Paws" attend labelFunc04A8_0177:
	message("「我们听说了 Paws 发生的一切。如果我不知道，那我丈夫也一定知道。有你想特别了解的人吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04A8_016C;
	message("「我知道这些人：」");
	say();
	UI_add_answer(["Alina", "Camille", "Polly"]);
	goto labelFunc04A8_0170;
labelFunc04A8_016C:
	message("「自己决定对他人的印象是件好事。」");
	say();
labelFunc04A8_0170:
	UI_remove_answer("Paws");
labelFunc04A8_0177:
	case "Alina" attend labelFunc04A8_018A:
	message("「Alina 和她的孩子住在庇护所里，可怜的东西。她的丈夫是个普通的小偷，现在还在监狱里。但一旦我们说服她加入友谊会，我们就会帮助她把生活整顿好。你知道的，她不够聪明，看不出这对她有什么好处。必须仔细指导她。」");
	say();
	UI_remove_answer("Alina");
labelFunc04A8_018A:
	case "Camille" attend labelFunc04A8_01AA:
	message("「Camille 是一个农场寡妇。她倾向于活在过去，遵循旧有的美德并质疑友谊会的做法。你知道的，这些乡下人很迷信。这是他们智力低下造成的。她甚至没有注意到她的儿子 Tobias 长大后变成了什么样的流氓！完全不像我们的儿子 Garritt。」");
	say();
	UI_add_answer(["Tobias", "Garritt"]);
	UI_remove_answer("Camille");
labelFunc04A8_01AA:
	case "Tobias" attend labelFunc04A8_01BD:
	message("「一个非常可怜的小鬼。总是闷闷不乐。但是，必须了解到他没有父亲来好好管教他。」");
	say();
	UI_remove_answer("Tobias");
labelFunc04A8_01BD:
	case "找到毒液" attend labelFunc04A8_01E6:
	if (!(!gflags[0x0218])) goto labelFunc04A8_01D4;
	message("「你说在 Garritt 的物品中发现了那瓶毒液？我不相信！你是说我儿子是个说谎者和小偷吗？我不会相信的！祝你有个美好的一天！」*");
	say();
	abort;
	goto labelFunc04A8_01DF;
labelFunc04A8_01D4:
	message("「所以 Garritt 承认他偷了毒液瓶。我简直不敢相信！我不知道该说什么。」");
	say();
	UI_add_answer("Garritt");
labelFunc04A8_01DF:
	UI_remove_answer("找到毒液");
labelFunc04A8_01E6:
	case "Garritt" attend labelFunc04A8_020E:
	if (!(!gflags[0x0218])) goto labelFunc04A8_0203;
	message("「Brita 喜笑颜开。『Garritt 是一个很棒的儿子。他正在被抚养长大以遵循友谊会的价值观。他的价值得到了回报。』」");
	say();
	UI_add_answer("回报");
	goto labelFunc04A8_0207;
labelFunc04A8_0203:
	message("「Brita 皱眉皱得比以前更厉害了。『如果你问我，这全是一个让我小男孩惹上麻烦的阴谋。如果你没有来镇上，这整个事件就不会发生！』」");
	say();
labelFunc04A8_0207:
	UI_remove_answer("Garritt");
labelFunc04A8_020E:
	case "回报" attend labelFunc04A8_0221:
	message("「Garritt 在吹排笛方面太有天赋了！这真是一份礼物！」");
	say();
	UI_remove_answer("回报");
labelFunc04A8_0221:
	case "Polly" attend labelFunc04A8_0234:
	message("「Polly 经营当地酒馆是为了靠近人群。她是一个孤独的灵魂，觉得根本没有人渴望她的心。想到她就让我好难过。如果她加入友谊会，她就能找到所有她想要的陪伴。」");
	say();
	UI_remove_answer("Polly");
labelFunc04A8_0234:
	case "小偷" attend labelFunc04A8_0252:
	message("「我们的一名成员，当地商人 Morfin，被偷了一批银蛇毒液。虽然我不在乎毒液本身，但这难道不令人震惊吗？」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("小偷");
	UI_add_answer("蛇毒");
labelFunc04A8_0252:
	case "蛇毒" attend labelFunc04A8_0265:
	message("「我自己从没见过。我不知道它对人有什么作用，但它绝对不可能是好东西！」");
	say();
	UI_remove_answer("蛇毒");
labelFunc04A8_0265:
	case "告辞" attend labelFunc04A8_0272:
	message("「愿你与友谊会同行，圣者。」*");
	say();
	abort;
labelFunc04A8_0272:
	goto labelFunc04A8_0085;
labelFunc04A8_0275:
	endconv;
labelFunc04A8_0276:
	if (!(event == 0x0000)) goto labelFunc04A8_0284;
	Func092E(0xFF58);
labelFunc04A8_0284:
	return;
}


