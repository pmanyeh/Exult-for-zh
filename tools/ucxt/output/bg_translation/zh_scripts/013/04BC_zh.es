#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func08E2 0x8E2 ();
extern void Func08E1 0x8E1 ();
extern void Func092F 0x92F (var var0000);

void Func04BC object#(0x4BC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04BC_0205;
	UI_show_npc_face(0xFF44, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF44));
	if (!(var0000 == 0x0007)) goto labelFunc04BC_004F;
	var0002 = Func08FC(0xFF44, 0xFF47);
	if (!var0002) goto labelFunc04BC_004A;
	message("這隻石像鬼正全神貫注於友誼會會議，現在沒空跟你說話。*");
	say();
	goto labelFunc04BC_004E;
labelFunc04BC_004A:
	message("「現在無法交談。友誼會會議後再來找我。」他繼續趕他的路。*");
	say();
labelFunc04BC_004E:
	abort;
labelFunc04BC_004F:
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!(!gflags[0x024D])) goto labelFunc04BC_0074;
	message("你看到一隻非常心煩意亂的石像鬼。");
	say();
	gflags[0x024D] = true;
	goto labelFunc04BC_0078;
labelFunc04BC_0074:
	message("「向你問候，人類。」");
	say();
labelFunc04BC_0078:
	if (!gflags[0x0250]) goto labelFunc04BC_00A8;
	var0003 = true;
	if (!(gflags[0x0241] && (!gflags[0x0240]))) goto labelFunc04BC_0094;
	UI_add_answer("祭壇衝突");
labelFunc04BC_0094:
	if (!gflags[0x023F]) goto labelFunc04BC_00A8;
	UI_add_answer("找到的紙條");
	UI_remove_answer("祭壇衝突");
labelFunc04BC_00A8:
	converse attend labelFunc04BC_0200;
	case "姓名" attend labelFunc04BC_00EF:
	message("「你可以叫我 Sarpling 。」");
	say();
	gflags[0x0250] = true;
	UI_remove_answer("姓名");
	if (!(!var0003)) goto labelFunc04BC_00EF;
	if (!(gflags[0x0241] && (!gflags[0x0240]))) goto labelFunc04BC_00DB;
	UI_add_answer("祭壇衝突");
labelFunc04BC_00DB:
	if (!gflags[0x023F]) goto labelFunc04BC_00EF;
	UI_add_answer("找到的紙條");
	UI_remove_answer("祭壇衝突");
labelFunc04BC_00EF:
	case "職業" attend labelFunc04BC_0108:
	message("「在 Terfin 提供各種魔法和物品。」");
	say();
	UI_add_answer(["購買", "Terfin"]);
labelFunc04BC_0108:
	case "Terfin" attend labelFunc04BC_0122:
	message("「就是你現在所在的城市。是石像鬼的城市。」");
	say();
	UI_add_answer("石像鬼");
	UI_remove_answer("Terfin");
labelFunc04BC_0122:
	case "石像鬼" attend labelFunc04BC_014C:
	message("「知道 Quan 是友誼會的領袖。相信他能提供良好的指導。」他看起來若有所思。~~ 「跟 Draxinusom 談過了嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04BC_0141;
	message("「那麼去找 Forbrak 或 Quaeven 吧。知道他們經常能見到所有的市民。」");
	say();
	goto labelFunc04BC_0145;
labelFunc04BC_0141:
	message("「首先去找 Draxinusom。他是這座城市的領袖。認識許多居民。」");
	say();
labelFunc04BC_0145:
	UI_remove_answer("石像鬼");
labelFunc04BC_014C:
	case "友誼會" attend labelFunc04BC_015F:
	message("「是我生命中重要的一部分。全力支持友誼會。」");
	say();
	UI_remove_answer("友誼會");
labelFunc04BC_015F:
	case "祭壇衝突" attend labelFunc04BC_0172:
	message("「對祭壇一無所知。想知道你說的是什麼意思？」");
	say();
	UI_remove_answer("祭壇衝突");
labelFunc04BC_0172:
	case "找到的紙條" attend labelFunc04BC_018C:
	message("他臉上浮現出驚訝與恐懼交織的表情。~~ 「全是 Runeb 的決定！全是 Runeb 幹的好事！不想和破壞祭壇或暗殺陰謀扯上任何關係！」");
	say();
	UI_remove_answer("找到的紙條");
	UI_add_answer("暗殺陰謀！");
labelFunc04BC_018C:
	case "暗殺陰謀！" attend labelFunc04BC_019D:
	message("「還不知道這陰謀嗎？」他哀嚎著。~~ 「這次惹上麻煩了，Sarpling！」他自言自語地說。「帶來了大麻煩！~~ 告訴你， Runeb 想要陷害 Quan 破壞祭壇。如果計畫失敗就殺了 Quan，並控制 Terfin 的友誼會。這就是 Runeb 的目標。~~ 你和我都身處險境！」*");
	say();
	gflags[0x0240] = true;
	abort;
labelFunc04BC_019D:
	case "購買" attend labelFunc04BC_01CE:
	UI_remove_answer("購買");
	if (!(var0001 == 0x0007)) goto labelFunc04BC_01CA;
	message("「想要魔法材料，還是珠寶和藥水？」");
	say();
	UI_add_answer(["魔法材料", "珠寶與藥水"]);
	goto labelFunc04BC_01CE;
labelFunc04BC_01CA:
	message("「在我的店鋪營業時賣東西給你。」");
	say();
labelFunc04BC_01CE:
	case "魔法材料" attend labelFunc04BC_01E0:
	Func08E2();
	UI_remove_answer("魔法材料");
labelFunc04BC_01E0:
	case "珠寶與藥水" attend labelFunc04BC_01F2:
	Func08E1();
	UI_remove_answer("珠寶與藥水");
labelFunc04BC_01F2:
	case "告辭" attend labelFunc04BC_01FD:
	goto labelFunc04BC_0200;
labelFunc04BC_01FD:
	goto labelFunc04BC_00A8;
labelFunc04BC_0200:
	endconv;
	message("「向你道別，人類。」*");
	say();
labelFunc04BC_0205:
	if (!(event == 0x0000)) goto labelFunc04BC_0213;
	Func092F(0xFF44);
labelFunc04BC_0213:
	return;
}


