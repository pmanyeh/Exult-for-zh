#game "blackgate"
// externs
extern var Func0921 0x921 (var var0000);
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);

void Func08E5 0x8E5 (var var0000, var var0001)
{
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

	var0002 = Func0921(UI_get_npc_object(0xFFF9));
	if (!((var0002 == 0xFFF8) || ((var0002 == 0xFFFB) || (var0002 == 0xFFF7)))) goto labelFunc08E5_002E;
	var0003 = true;
	goto labelFunc08E5_0032;
labelFunc08E5_002E:
	var0003 = false;
labelFunc08E5_0032:
	if (!(var0002 == 0x0000)) goto labelFunc08E5_003F;
	goto labelFunc08E5_01B0;
labelFunc08E5_003F:
	var0004 = 0x0001;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc08E5_0068;
	message("「我很抱歉，但你目前没有足够的实战经验来进行训练。等再消灭一些生物之后，改天再回来吧。」");
	say();
	goto labelFunc08E5_01B0;
labelFunc08E5_0068:
	if (!(var0005 == 0x0001)) goto labelFunc08E5_0096;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 < var0001)) goto labelFunc08E5_0096;
	message("「我很遗憾，你手头的金币似乎不足以支付这里的训练。也许改天等你的财富更充裕时再来吧。」");
	say();
	goto labelFunc08E5_01B0;
labelFunc08E5_0096:
	if (!(var0005 == 0x0002)) goto labelFunc08E5_00A7;
	message("「你已经和我一样精通了！恐怕我无法再给你更进一步的训练了！」");
	say();
	goto labelFunc08E5_01B0;
labelFunc08E5_00A7:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	var0008 = UI_get_npc_name(var0002);
	if (!(var0002 == 0xFE9C)) goto labelFunc08E5_00F6;
	var0008 = "你";
	var0009 = "";
	var000A = "手边有的";
	var000B = "你";
	var000C = "你的";
	var000D = "设法";
	goto labelFunc08E5_0135;
labelFunc08E5_00F6:
	if (!var0003) goto labelFunc08E5_0111;
	var0008 = "她";
	var000B = "她";
	var000C = "她的";
	goto labelFunc08E5_0123;
labelFunc08E5_0111:
	var0008 = "他";
	var000B = "他";
	var000C = "他的";
labelFunc08E5_0123:
	var0009 = "";
	var000A = "手边有的";
	var000D = "设法";
labelFunc08E5_0135:
	message("「看招！」Sentri 拔出他的剑大喊。 ^");
	message(var0008);
	message("");
	message(var0009);
	message("被迫匆忙的拿起 ");
	message(var0008);
	message("");
	message(var000A);
	message("武器回应。Sentri 一言不发地逼近 ");
	message(var000B);
	message("，挥舞着他那看似狂乱、实则完全在掌控之中的利刃。 ^");
	message(var0008);
	message("");
	message(var0009);
	message("被迫竭尽");
	message(var000C);
	message("全力来格挡他的攻击。幸好，Sentri 总能在击中 ");
	message(var000B);
	message("前的刹那收手，而他通常都能办到。随着训练进程点滴累积，");
	message(var000C);
	message("格挡技巧有所提升，而且");
	message(var0008);
	message("");
	message(var000D);
	message("展开了几次属于");
	message(var000C);
	message("的反击。 ");
	message(var000C);
	message("敏捷度获得了可明确感受到的进步。");
	say();
	message("「太痛快了！」一切结束后，Sentri 高喊着。*");
	say();
	var000E = Func0910(var0002, 0x0001);
	if (!(var000E < 0x001E)) goto labelFunc08E5_01B0;
	Func0915(var0002, 0x0001);
labelFunc08E5_01B0:
	return;
}