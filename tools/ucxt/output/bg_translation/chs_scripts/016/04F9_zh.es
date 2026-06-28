#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func04F9 object#(0x4F9) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;

	if (!(event == 0x0001)) goto labelFunc04F9_03C3;
	UI_show_npc_face(0xFF07, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x01F9])) goto labelFunc04F9_0044;
	message("你看到一位看起来很博学的男人，带着友善的表情。");
	say();
	gflags[0x01F9] = true;
	gflags[0x01F7] = true;
	goto labelFunc04F9_005B;
labelFunc04F9_0044:
	message("「向你致敬，");
	message(var0000);
	message("。」");
	say();
	if (!gflags[0x01F6]) goto labelFunc04F9_005B;
	UI_add_answer("东北海域");
labelFunc04F9_005B:
	if (!gflags[0x01E3]) goto labelFunc04F9_0068;
	UI_add_answer("Zelda 的回应");
labelFunc04F9_0068:
	converse attend labelFunc04F9_03C2;
	case "姓名" attend labelFunc04F9_008B:
	message("「你可以叫我 Nelson 。」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x01F6]) goto labelFunc04F9_008B;
	UI_add_answer("东北海域");
labelFunc04F9_008B:
	case "职业" attend labelFunc04F9_00A4:
	message("「我是 Moonglow 这里智者书库的负责人，但是，」他靠近你说，「我的助手 Zelda 做了大部分的工作。」");
	say();
	UI_add_answer(["Moonglow", "Zelda"]);
labelFunc04F9_00A4:
	case "Zelda" attend labelFunc04F9_00C4:
	message("「她是一位出色的助手。智者书库从未运作得如此之好。然而，我认为她有点太严厉了，而且，」他再次靠近，「我觉得她相当美丽。」");
	say();
	UI_add_answer(["严厉", "美丽"]);
	UI_remove_answer("Zelda");
labelFunc04F9_00C4:
	case "东北海域" attend labelFunc04F9_00D7:
	message("「我听说过关于一座岛屿的传闻，但恐怕除此之外我一无所知。你可能想和 Jillian 谈谈——她应该对那片区域略知一二。」");
	say();
	UI_remove_answer("东北海域");
labelFunc04F9_00D7:
	case "严厉" attend labelFunc04F9_00EA:
	message("「她投入了非凡的时间和精力，以确保这座建筑物内的活动顺利进行。而且，」他补充道，「如果没有，她会认为是冲着她来的！」");
	say();
	UI_remove_answer("严厉");
labelFunc04F9_00EA:
	case "美丽" attend labelFunc04F9_010E:
	message("「你不同意吗？每当她美丽的倩影经过时，我都会脸红。但是！」他举起食指，「我怕她对我没有同样的吸引力。而且她太严肃了，让我不敢随意求婚。」");
	say();
	gflags[0x01DC] = true;
	if (!gflags[0x01DA]) goto labelFunc04F9_0107;
	UI_add_answer("Zelda 的感觉");
labelFunc04F9_0107:
	UI_remove_answer("美丽");
labelFunc04F9_010E:
	case "Moonglow" attend labelFunc04F9_0128:
	message("「我喜欢这个岛和这里的人民。主要是人民。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("Moonglow");
labelFunc04F9_0128:
	case "人" attend labelFunc04F9_015D:
	message("「你见过我的双胞胎兄弟吗？他是这里天文台的负责人。在智者书库的某个地方，你可以找到 Mariah。可悲的是，她这里不太好。」他指了指自己的头。~~「贤者 Jillian 也在这里的智者书库学习。如果要打听 Moonglow 的其他居民，最好的对象就是『亲切恶棍酒馆』的酒保。Phearcy 几乎认识我们岛上所有人。~~「喔，你可别忘了 Penumbra 的传说。那是两百年前，她让自己陷入沉睡。现在我回想起来，");
	message(var0000);
	message("，你就是她预言会唤醒她的人。~~「最好快点，");
	message(var0001);
	message("，」他轻笑着。");
	say();
	UI_remove_answer("人");
	UI_add_answer(["双胞胎", "Mariah", "Jillian", "Phearcy", "Penumbra"]);
labelFunc04F9_015D:
	case "双胞胎" attend labelFunc04F9_0170:
	message("「他的名字是 Brion 。人们常把我们搞混，但我认为我们一点也不像——他独占了所有的外表『和』头脑！」");
	say();
	UI_remove_answer("双胞胎");
labelFunc04F9_0170:
	case "Mariah" attend labelFunc04F9_0183:
	message("「她曾经是一名熟练的法师，但自从巫师们开始失去他们的，呃，能力后，她也跟着失去了。」");
	say();
	UI_remove_answer("Mariah");
labelFunc04F9_0183:
	case "Jillian" attend labelFunc04F9_0196:
	message("「她很少有时间接待访客，但我知道她偶尔会收学生。」");
	say();
	UI_remove_answer("Jillian");
labelFunc04F9_0196:
	case "Phearcy" attend labelFunc04F9_01A9:
	message("「那个人总是能跟上他的政治，或者更确切地说，是他的八卦，」他笑着说。「如果你想了解 Moonglow 的某个居民，就去拜访他吧。」");
	say();
	UI_remove_answer("Phearcy");
labelFunc04F9_01A9:
	case "Penumbra" attend labelFunc04F9_01BC:
	message("「有趣的是，从来没有人发现如何进入她的房子。我相信门上那些神秘的标志需要有人将特定的物品放在牌匾旁边。」");
	say();
	UI_remove_answer("Penumbra");
labelFunc04F9_01BC:
	case "Zelda 的回应" attend labelFunc04F9_01D5:
	message("他笑得很开心。「那真的是她的回应吗？我真是高兴极了！谢谢你，");
	message(var0000);
	message("，带来这个令人愉快的信息。」");
	say();
	UI_remove_answer("Zelda 的回应");
labelFunc04F9_01D5:
	case "Zelda 的感觉" attend labelFunc04F9_01E8:
	message("「喔。喔，好吧，」他耸耸肩，试图装作若无其事的样子。「反正她也不是真的很重要。」");
	say();
	UI_remove_answer("Zelda 的感觉");
labelFunc04F9_01E8:
	case "告辞" attend labelFunc04F9_022E:
	if (!(gflags[0x01E4] && (gflags[0x01E5] && (gflags[0x01E6] && gflags[0x01E7])))) goto labelFunc04F9_0210;
	message("「祝你有个美好的一天，");
	message(var0001);
	message("。你当然可以在智者书库随意行动。」*");
	say();
	abort;
	goto labelFunc04F9_022E;
labelFunc04F9_0210:
	message("「你当然可以在这栋建筑物里随意行动。但首先，」他笑着说，「让我给你看看我的……」");
	say();
	UI_push_answers();
	UI_add_answer(["书架", "书签", "笔筒", "书", "再看看"]);
labelFunc04F9_022E:
	case "书架" attend labelFunc04F9_0262:
	var0002 = UI_find_nearest(0xFE9C, 0x02B9, 0xFFFF);
	if (!var0002) goto labelFunc04F9_0253;
	message("「这个实心黄铜书架配有相配的悬挂式烛台，适合在深夜探索文学。这是我自己发明的。」");
	say();
	goto labelFunc04F9_0257;
labelFunc04F9_0253:
	message("\"'Twas just here...\" he scratches his chin. \"Oh well, never mind.\"");
	say();
labelFunc04F9_0257:
	UI_remove_answer("书架");
	gflags[0x01E4] = true;
labelFunc04F9_0262:
	case "书签" attend labelFunc04F9_02BC:
	var0003 = false;
	var0004 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_0280:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc04F9_02A0;
	if (!(UI_get_item_frame(var0007) == 0x0004)) goto labelFunc04F9_029D;
	var0003 = true;
labelFunc04F9_029D:
	goto labelFunc04F9_0280;
labelFunc04F9_02A0:
	if (!var0003) goto labelFunc04F9_02AD;
	message("「这个，」他说着，拿着一张枫叶形状的纯金薄片，「是我在拍卖会上以半价买到的。」");
	say();
	goto labelFunc04F9_02B1;
labelFunc04F9_02AD:
	message("他看起来很难过。「我就知道总有一天会被偷，」他生气地说。~~「我早该知道不该把它拿给每个来访的人看。」");
	say();
labelFunc04F9_02B1:
	UI_remove_answer("书签");
	gflags[0x01E5] = true;
labelFunc04F9_02BC:
	case "笔筒" attend labelFunc04F9_0359:
	var0008 = false;
	var0009 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_02DA:
	for (var0007 in var0009 with var000A to var000B) attend labelFunc04F9_02FA;
	if (!(UI_get_item_frame(var0007) == 0x0003)) goto labelFunc04F9_02F7;
	var0008 = true;
labelFunc04F9_02F7:
	goto labelFunc04F9_02DA;
labelFunc04F9_02FA:
	var000C = false;
	var000D = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_0310:
	for (var0007 in var000D with var000E to var000F) attend labelFunc04F9_0330;
	if (!(UI_get_item_frame(var0007) == 0x0005)) goto labelFunc04F9_032D;
	var000C = true;
labelFunc04F9_032D:
	goto labelFunc04F9_0310;
labelFunc04F9_0330:
	if (!var0008) goto labelFunc04F9_034A;
	if (!var000C) goto labelFunc04F9_0343;
	message("他给你展示了一个蛇形的橡木笔筒和它相配的卷轴打开器。「这是我在旅行经过——你能猜到的——巨蛇堡（Serpent's Hold）时买的。」");
	say();
	goto labelFunc04F9_0347;
labelFunc04F9_0343:
	message("他给你展示了一个蛇形的橡木笔筒。「这是我在旅行经过——你能猜到的——巨蛇堡时买的。但是，」他显得很困惑，「我敢发誓相配的拆信刀刚才也在这里。真奇怪。」");
	say();
labelFunc04F9_0347:
	goto labelFunc04F9_034E;
labelFunc04F9_034A:
	message("「笔筒不见了？」他惊呼。「那……」他似乎在找什么东西。~~「相配的卷轴打开器也不见了！」");
	say();
labelFunc04F9_034E:
	UI_remove_answer("笔筒");
	gflags[0x01E6] = true;
labelFunc04F9_0359:
	case "书" attend labelFunc04F9_03B3:
	var0010 = false;
	var0011 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_0377:
	for (var0010 in var0009 with var0012 to var0013) attend labelFunc04F9_0397;
	if (!(UI_get_item_quality(var0010) == 0x0004)) goto labelFunc04F9_0394;
	var0010 = true;
labelFunc04F9_0394:
	goto labelFunc04F9_0377;
labelFunc04F9_0397:
	if (!var0010) goto labelFunc04F9_03A4;
	message("他小心翼翼地拿出一本皮装的厚书。他从长袍中掏出手帕，一丝不苟地擦去灰尘。~~「这是不列颠王亲自送给我的。看，这是初版。」~~他小心翼翼地放在你手掌上的那本书非常古老，书名的金箔几乎已经被完全磨掉。将书本翻正，你可以读到书名：《异乡异客（Stranger in a Strange Land）》。");
	say();
	goto labelFunc04F9_03A8;
labelFunc04F9_03A4:
	message("「不在这里……喔好吧，Zelda 一定把它放回书架上了。」他叹了口气。");
	say();
labelFunc04F9_03A8:
	UI_remove_answer("书");
	gflags[0x01E7] = true;
labelFunc04F9_03B3:
	case "再看看" attend labelFunc04F9_03BF:
	UI_pop_answers();
labelFunc04F9_03BF:
	goto labelFunc04F9_0068;
labelFunc04F9_03C2:
	endconv;
labelFunc04F9_03C3:
	if (!(event == 0x0000)) goto labelFunc04F9_03D1;
	Func092E(0xFF07);
labelFunc04F9_03D1:
	return;
}


