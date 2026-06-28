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
	message("这只石像鬼正全神贯注于友谊会会议，现在没空跟你说话。*");
	say();
	goto labelFunc04BC_004E;
labelFunc04BC_004A:
	message("「现在无法交谈。友谊会会议后再来找我。」他继续赶他的路。*");
	say();
labelFunc04BC_004E:
	abort;
labelFunc04BC_004F:
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!(!gflags[0x024D])) goto labelFunc04BC_0074;
	message("你看到一只非常心烦意乱的石像鬼。");
	say();
	gflags[0x024D] = true;
	goto labelFunc04BC_0078;
labelFunc04BC_0074:
	message("「向你问候，人类。」");
	say();
labelFunc04BC_0078:
	if (!gflags[0x0250]) goto labelFunc04BC_00A8;
	var0003 = true;
	if (!(gflags[0x0241] && (!gflags[0x0240]))) goto labelFunc04BC_0094;
	UI_add_answer("祭坛冲突");
labelFunc04BC_0094:
	if (!gflags[0x023F]) goto labelFunc04BC_00A8;
	UI_add_answer("找到的纸条");
	UI_remove_answer("祭坛冲突");
labelFunc04BC_00A8:
	converse attend labelFunc04BC_0200;
	case "姓名" attend labelFunc04BC_00EF:
	message("「你可以叫我 Sarpling 。」");
	say();
	gflags[0x0250] = true;
	UI_remove_answer("姓名");
	if (!(!var0003)) goto labelFunc04BC_00EF;
	if (!(gflags[0x0241] && (!gflags[0x0240]))) goto labelFunc04BC_00DB;
	UI_add_answer("祭坛冲突");
labelFunc04BC_00DB:
	if (!gflags[0x023F]) goto labelFunc04BC_00EF;
	UI_add_answer("找到的纸条");
	UI_remove_answer("祭坛冲突");
labelFunc04BC_00EF:
	case "职业" attend labelFunc04BC_0108:
	message("「在 Terfin 提供各种魔法和物品。」");
	say();
	UI_add_answer(["购买", "Terfin"]);
labelFunc04BC_0108:
	case "Terfin" attend labelFunc04BC_0122:
	message("「就是你现在所在的城市。是石像鬼的城市。」");
	say();
	UI_add_answer("石像鬼");
	UI_remove_answer("Terfin");
labelFunc04BC_0122:
	case "石像鬼" attend labelFunc04BC_014C:
	message("「知道 Quan 是友谊会的领袖。相信他能提供良好的指导。」他看起来若有所思。~~ 「跟 Draxinusom 谈过了吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04BC_0141;
	message("「那么去找 Forbrak 或 Quaeven 吧。知道他们经常能见到所有的市民。」");
	say();
	goto labelFunc04BC_0145;
labelFunc04BC_0141:
	message("「首先去找 Draxinusom。他是这座城市的领袖。认识许多居民。」");
	say();
labelFunc04BC_0145:
	UI_remove_answer("石像鬼");
labelFunc04BC_014C:
	case "友谊会" attend labelFunc04BC_015F:
	message("「是我生命中重要的一部分。全力支持友谊会。」");
	say();
	UI_remove_answer("友谊会");
labelFunc04BC_015F:
	case "祭坛冲突" attend labelFunc04BC_0172:
	message("「对祭坛一无所知。想知道你说的是什么意思？」");
	say();
	UI_remove_answer("祭坛冲突");
labelFunc04BC_0172:
	case "找到的纸条" attend labelFunc04BC_018C:
	message("他脸上浮现出惊讶与恐惧交织的表情。~~ 「全是 Runeb 的决定！全是 Runeb 干的好事！不想和破坏祭坛或暗杀阴谋扯上任何关系！」");
	say();
	UI_remove_answer("找到的纸条");
	UI_add_answer("暗杀阴谋！");
labelFunc04BC_018C:
	case "暗杀阴谋！" attend labelFunc04BC_019D:
	message("「还不知道这阴谋吗？」他哀嚎着。~~ 「这次惹上麻烦了，Sarpling！」他自言自语地说。「带来了大麻烦！~~ 告诉你， Runeb 想要陷害 Quan 破坏祭坛。如果计划失败就杀了 Quan，并控制 Terfin 的友谊会。这就是 Runeb 的目标。~~ 你和我都身处险境！」*");
	say();
	gflags[0x0240] = true;
	abort;
labelFunc04BC_019D:
	case "购买" attend labelFunc04BC_01CE:
	UI_remove_answer("购买");
	if (!(var0001 == 0x0007)) goto labelFunc04BC_01CA;
	message("「想要魔法材料，还是珠宝和药水？」");
	say();
	UI_add_answer(["魔法材料", "珠宝与药水"]);
	goto labelFunc04BC_01CE;
labelFunc04BC_01CA:
	message("「在我的店铺营业时卖东西给你。」");
	say();
labelFunc04BC_01CE:
	case "魔法材料" attend labelFunc04BC_01E0:
	Func08E2();
	UI_remove_answer("魔法材料");
labelFunc04BC_01E0:
	case "珠宝与药水" attend labelFunc04BC_01F2:
	Func08E1();
	UI_remove_answer("珠宝与药水");
labelFunc04BC_01F2:
	case "告辞" attend labelFunc04BC_01FD:
	goto labelFunc04BC_0200;
labelFunc04BC_01FD:
	goto labelFunc04BC_00A8;
labelFunc04BC_0200:
	endconv;
	message("「向你道别，人类。」*");
	say();
labelFunc04BC_0205:
	if (!(event == 0x0000)) goto labelFunc04BC_0213;
	Func092F(0xFF44);
labelFunc04BC_0213:
	return;
}


