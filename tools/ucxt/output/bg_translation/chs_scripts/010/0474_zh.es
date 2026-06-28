#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);

void Func0474 object#(0x474) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0474_0209;
	UI_show_npc_face(0xFF8C, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x014E])) goto labelFunc0474_003A;
	message("一个将斧头扛在肩上、身材高大、胸膛宽阔的男人笑着对你点头。");
	say();
	gflags[0x014E] = true;
	goto labelFunc0474_0044;
labelFunc0474_003A:
	message("「你好， ");
	message(var0000);
	message("。日安，对吧？」");
	say();
labelFunc0474_0044:
	converse attend labelFunc0474_01FE;
	case "姓名" attend labelFunc0474_006D:
	message("「你可以叫我 Ben ， ");
	message(var0000);
	message("。我住在这里，在 Yew 森林里。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer(["Yew", "森林"]);
labelFunc0474_006D:
	case "职业" attend labelFunc0474_0092:
	message("「我是一个伐木工， ");
	message(var0000);
	message("。这是我一辈子都在做的事。事实上， ");
	message(var0000);
	message("，我父亲也是做这个的。他父亲之前也是。以此类推。我们做这行已经超过十代了。」");
	say();
	if (!gflags[0x012A]) goto labelFunc0474_0092;
	UI_add_answer("银叶树");
labelFunc0474_0092:
	case "Yew" attend labelFunc0474_00A5:
	message("「它曾经是个大城镇，但现在，只剩下散布在森林各处的一些小屋了。」");
	say();
	UI_remove_answer("Yew");
labelFunc0474_00A5:
	case "森林" attend labelFunc0474_00CB:
	message("「恐怕， ");
	message(var0000);
	message("，我在这个区域不认识任何人。但，」他骄傲地补充说，「我确实认识在 Minoc 经营锯木厂的人。我也知道有僧侣住在高等法院旁边的修道院里。」");
	say();
	UI_add_answer(["锯木厂", "高等法院"]);
	UI_remove_answer("森林");
labelFunc0474_00CB:
	case "锯木厂" attend labelFunc0474_00DE:
	message("「那里的锯木工叫 William 。」");
	say();
	UI_remove_answer("锯木厂");
labelFunc0474_00DE:
	case "高等法院" attend labelFunc0474_00F1:
	message("「就在友谊会东北边的建筑里。我知道他们把囚犯关在那里。」");
	say();
	UI_remove_answer("高等法院");
labelFunc0474_00F1:
	case "银叶树" attend labelFunc0474_0158:
	message("「哎呀，是的， ");
	message(var0000);
	message("，我砍伐银叶树 。它们只生长在一个区域，所以我需要它们的木材时，得走很长一段路。你为什么问这个， ");
	message(var0000);
	message("？~~「喔，我懂了，」他咧嘴一笑，「你想要一些给自己用，对吧？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0474_0122;
	message("「抱歉， ");
	message(var0000);
	message("，我不知道怎么料理它。或许你该去酒馆试试。」");
	say();
	goto labelFunc0474_014A;
labelFunc0474_0122:
	message("「你有其他原因问这个吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0474_0140;
	UI_push_answers();
	UI_add_answer("森灵族");
	goto labelFunc0474_014A;
labelFunc0474_0140:
	message("「好吧， ");
	message(var0000);
	message("，」他耸耸肩。");
	say();
labelFunc0474_014A:
	UI_add_answer("一个区域");
	UI_remove_answer("银叶树");
labelFunc0474_0158:
	case "一个区域" attend labelFunc0474_016B:
	message("「它们主要分布在大森林的东部，在很远的另一边。」");
	say();
	UI_remove_answer("一个区域");
labelFunc0474_016B:
	case "森灵族" attend labelFunc0474_0189:
	message("「那见鬼的森灵是什么东西？」~~在你快速向他解释了银叶树的情况后，他惊呼道，「喔，那太可怕了。我不知道有任何人——呃——任何其他生物在使用银叶树。我能怎么做呢？」");
	say();
	UI_pop_answers();
	UI_add_answer("签署合约");
	UI_remove_answer("森灵族");
labelFunc0474_0189:
	case "签署合约" attend labelFunc0474_01F0:
	message("「哎呀，我当然会签。我不会再砍银叶树了。」");
	say();
	var0003 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0003, 0xFE99);
	if (!var0003) goto labelFunc0474_01E1;
	message("他从你手中接过合约并签了名。");
	say();
	var0004 = Func08F7(0xFFFA);
	if (!var0004) goto labelFunc0474_01CA;
	message("他转向 Trellek 。「请代我向你的同胞道歉。我从来无意破坏你们的家园。当个朋友，好吗？」~~ Trellek 微笑着点点头。");
	say();
	goto labelFunc0474_01D4;
labelFunc0474_01CA:
	message("「请替我向森灵们道歉， ");
	message(var0000);
	message("。我从来无意破坏他们的家园。」");
	say();
labelFunc0474_01D4:
	gflags[0x012B] = true;
	Func0911(0x01F4);
	goto labelFunc0474_01E5;
labelFunc0474_01E1:
	message("「嗯，我很乐意签，但看来你把它弄丢了。如果你再找到它，我会非常乐意帮助你和森灵们。」");
	say();
labelFunc0474_01E5:
	UI_pop_answers();
	UI_remove_answer("签署合约");
labelFunc0474_01F0:
	case "告辞" attend labelFunc0474_01FB:
	goto labelFunc0474_01FE;
labelFunc0474_01FB:
	goto labelFunc0474_0044;
labelFunc0474_01FE:
	endconv;
	message("「再见， ");
	message(var0000);
	message("。旅途愉快，对吧。」*");
	say();
labelFunc0474_0209:
	if (!(event == 0x0000)) goto labelFunc0474_0212;
	abort;
labelFunc0474_0212:
	return;
}


