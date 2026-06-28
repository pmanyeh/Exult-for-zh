#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08BD 0x8BD (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	var0002 = Func0920();
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0x0000)) goto labelFunc08BD_001D;
	goto labelFunc08BD_0105;
labelFunc08BD_001D:
	if (!(var0002 == 0xFE9C)) goto labelFunc08BD_0030;
	var0004 = "你";
	goto labelFunc08BD_0036;
labelFunc08BD_0030:
	var0004 = var0003;
labelFunc08BD_0036:
	var0005 = 0x0001;
	var0006 = Func0922(var0000, var0001, var0002, var0005);
	if (!(var0006 == 0x0000)) goto labelFunc08BD_005F;
	message("「恐怕你目前在实战经验上还不足以接受训练。如果你之后能再来，我很乐意为你提供我的服务。」");
	say();
	goto labelFunc08BD_0105;
labelFunc08BD_005F:
	if (!(var0006 == 0x0001)) goto labelFunc08BD_0097;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你聚集并清点了你的金币，总共有 ");
	message(var0007);
	message(" 个。");
	say();
	if (!(var0007 < var0001)) goto labelFunc08BD_0097;
	message(" Markus 伸了个懒腰。他耸耸肩说道：「很遗憾，你的金币不足以支付我的费用。也许之后，等你靠掠夺这片土地发了财再来吧……」");
	say();
	goto labelFunc08BD_0105;
labelFunc08BD_0097:
	message("你支付了 ");
	message(var0001);
	message(" 个金币，训练课程随即开始。");
	say();
	if (!(var0006 == 0x0002)) goto labelFunc08BD_00B2;
	message(" Markus 眨了眨眼，仿佛刚从无聊中回过神来。「你已经和我一样精通了！在这里没法再进一步训练你了。」~~ Markus 退还了金币。");
	say();
	goto labelFunc08BD_0105;
labelFunc08BD_00B2:
	var0008 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("「好吧，」Markus 强忍着打了一个哈欠说道。「那我们开始吧。」~~ Markus 挥动他的剑，面对着 ");
	message(var0004);
	message(" 。他给了 ");
	message(var0004);
	message(" 一些关于站姿与平衡的指导，然后演示了几种突刺动作。");
	say();
	message("没过多久， ");
	message(var0004);
	message(" 便与教官开始以武器互相过招。显然他在这方面非常有造诣，而这些经验对 ");
	message(var0004);
	message(" 来说相当宝贵。训练结束时，可以感觉到战斗能力有所提升。*");
	say();
	var0009 = Func0910(var0002, 0x0004);
	if (!(var0009 < 0x001E)) goto labelFunc08BD_0105;
	Func0917(var0002, 0x0001);
labelFunc08BD_0105:
	return;
}