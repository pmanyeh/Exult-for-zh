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
	message("「我很抱歉，但你目前沒有足夠的實戰經驗來進行訓練。等再消滅一些生物之後，改天再回來吧。」");
	say();
	goto labelFunc08E5_01B0;
labelFunc08E5_0068:
	if (!(var0005 == 0x0001)) goto labelFunc08E5_0096;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 < var0001)) goto labelFunc08E5_0096;
	message("「我很遺憾，你手頭的金幣似乎不足以支付這裡的訓練。也許改天等你的財富更充裕時再來吧。」");
	say();
	goto labelFunc08E5_01B0;
labelFunc08E5_0096:
	if (!(var0005 == 0x0002)) goto labelFunc08E5_00A7;
	message("「你已經和我一樣精通了！恐怕我無法再給你更進一步的訓練了！」");
	say();
	goto labelFunc08E5_01B0;
labelFunc08E5_00A7:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	var0008 = UI_get_npc_name(var0002);
	if (!(var0002 == 0xFE9C)) goto labelFunc08E5_00F6;
	var0008 = "你";
	var0009 = "";
	var000A = "手邊有的";
	var000B = "你";
	var000C = "你的";
	var000D = "設法";
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
	var000A = "手邊有的";
	var000D = "設法";
labelFunc08E5_0135:
	message("「看招！」Sentri 拔出他的劍大喊。 ^");
	message(var0008);
	message("");
	message(var0009);
	message("被迫匆忙的拿起 ");
	message(var0008);
	message("");
	message(var000A);
	message("武器回應。Sentri 一言不發地逼近 ");
	message(var000B);
	message("，揮舞著他那看似狂亂、實則完全在掌控之中的利刃。 ^");
	message(var0008);
	message("");
	message(var0009);
	message("被迫竭盡");
	message(var000C);
	message("全力來格擋他的攻擊。幸好，Sentri 總能在擊中 ");
	message(var000B);
	message("前的剎那收手，而他通常都能辦到。隨著訓練進程點滴累積，");
	message(var000C);
	message("格擋技巧有所提升，而且");
	message(var0008);
	message("");
	message(var000D);
	message("展開了幾次屬於");
	message(var000C);
	message("的反擊。 ");
	message(var000C);
	message("敏捷度獲得了可明確感受到的進步。");
	say();
	message("「太痛快了！」一切結束後，Sentri 高喊著。*");
	say();
	var000E = Func0910(var0002, 0x0001);
	if (!(var000E < 0x001E)) goto labelFunc08E5_01B0;
	Func0915(var0002, 0x0001);
labelFunc08E5_01B0:
	return;
}