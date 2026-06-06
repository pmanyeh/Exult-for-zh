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
	message("「恐怕你目前在實戰經驗上還不足以接受訓練。如果你之後能再來，我很樂意為你提供我的服務。」");
	say();
	goto labelFunc08BD_0105;
labelFunc08BD_005F:
	if (!(var0006 == 0x0001)) goto labelFunc08BD_0097;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你聚集並清點了你的金幣，總共有 ");
	message(var0007);
	message(" 個。");
	say();
	if (!(var0007 < var0001)) goto labelFunc08BD_0097;
	message(" Markus 伸了個懶腰。他聳聳肩說道：「很遺憾，你的金幣不足以支付我的費用。也許之後，等你靠掠奪這片土地發了財再來吧……」");
	say();
	goto labelFunc08BD_0105;
labelFunc08BD_0097:
	message("你支付了 ");
	message(var0001);
	message(" 個金幣，訓練課程隨即開始。");
	say();
	if (!(var0006 == 0x0002)) goto labelFunc08BD_00B2;
	message(" Markus 眨了眨眼，彷彿剛從無聊中回過神來。「你已經和我一樣精通了！在這裡沒法再進一步訓練你了。」~~ Markus 退還了金幣。");
	say();
	goto labelFunc08BD_0105;
labelFunc08BD_00B2:
	var0008 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("「好吧，」Markus 強忍著打了一個哈欠說道。「那我們開始吧。」~~ Markus 揮動他的劍，面對著 ");
	message(var0004);
	message(" 。他給了 ");
	message(var0004);
	message(" 一些關於站姿與平衡的指導，然後演示了幾種突刺動作。");
	say();
	message("沒過多久， ");
	message(var0004);
	message(" 便與教官開始以武器互相過招。顯然他在這方面非常有造詣，而這些經驗對 ");
	message(var0004);
	message(" 來說相當寶貴。訓練結束時，可以感覺到戰鬥能力有所提升。*");
	say();
	var0009 = Func0910(var0002, 0x0004);
	if (!(var0009 < 0x001E)) goto labelFunc08BD_0105;
	Func0917(var0002, 0x0001);
labelFunc08BD_0105:
	return;
}