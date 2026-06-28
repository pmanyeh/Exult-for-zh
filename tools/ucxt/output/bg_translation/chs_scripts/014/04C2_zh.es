#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A1 0x8A1 ();

void Func04C2 object#(0x4C2) ()
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

	if (!(event == 0x0001)) goto labelFunc04C2_02B0;
	UI_show_npc_face(0xFF3E, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x026B])) goto labelFunc04C2_0044;
	message("这名女子向你屈膝行礼。");
	say();
	gflags[0x026B] = true;
	goto labelFunc04C2_004E;
labelFunc04C2_0044:
	message("「日安，");
	message(var0001);
	message("，」Jehanne 女士说。");
	say();
labelFunc04C2_004E:
	if (!gflags[0x027C]) goto labelFunc04C2_006A;
	if (!(gflags[0x025C] && (!gflags[0x025D]))) goto labelFunc04C2_006A;
	UI_add_answer("公地");
	var0002 = true;
labelFunc04C2_006A:
	converse attend labelFunc04C2_02AF;
	case "姓名" attend labelFunc04C2_00A3:
	message("「我是 Jehanne 女士，");
	message(var0001);
	message("。」");
	say();
	gflags[0x027C] = true;
	UI_remove_answer("姓名");
	if (!(gflags[0x025C] && (!gflags[0x025D]))) goto labelFunc04C2_00A3;
	if (!(!var0002)) goto labelFunc04C2_00A3;
	UI_add_answer("公地");
labelFunc04C2_00A3:
	case "职业" attend labelFunc04C2_00CE:
	message("「我是巨蛇堡的补给品商人。」");
	say();
	if (!(!gflags[0x0274])) goto labelFunc04C2_00C1;
	message("「而且，」她补充道，「我还有一艘船要卖，如果～你有兴趣的话。」");
	say();
	UI_add_answer("船只");
labelFunc04C2_00C1:
	UI_add_answer(["巨蛇堡", "补给品"]);
labelFunc04C2_00CE:
	case "船只" attend labelFunc04C2_0167:
	message("「嗯，它曾经是宏伟的『星座号（Constellation）』。然而，它被船长亲手摧毁了，以防止它落入袭击的海盗手中。剩下的一点残骸被改建成了一艘更精美的船，『龙息号（The Dragon's Breath）』？你有兴趣用 600 金币购买它吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04C2_0156;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x0258)) goto labelFunc04C2_0149;
	var0005 = UI_add_party_items(0x0001, 0x031D, 0x0013, 0xFE99, false);
	if (!var0005) goto labelFunc04C2_013C;
	message("「这是你的地契。」");
	say();
	var0006 = UI_remove_party_items(0x0258, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0274] = true;
	goto labelFunc04C2_0146;
labelFunc04C2_013C:
	message("「令人遗憾，");
	message(var0001);
	message("，你没有空间放这张地契了。」");
	say();
labelFunc04C2_0146:
	goto labelFunc04C2_0153;
labelFunc04C2_0149:
	message("「我明白，");
	message(var0001);
	message("，你现在没有足够的资金。」");
	say();
labelFunc04C2_0153:
	goto labelFunc04C2_0160;
labelFunc04C2_0156:
	message("「也许在未来的某个时候，");
	message(var0001);
	message("。」");
	say();
labelFunc04C2_0160:
	UI_remove_answer("船只");
labelFunc04C2_0167:
	case "巨蛇堡" attend labelFunc04C2_0187:
	message("「我们这里大多数人都是骑士，发誓要保护不列颠尼亚和不列颠王的高贵战士。我自己的领主，」她满怀骄傲地笑着，「就是这样一位骑士—— Pendaran 爵士。」");
	say();
	UI_remove_answer("巨蛇堡");
	UI_add_answer(["Sir Pendaran", "骑士"]);
labelFunc04C2_0187:
	case "Sir Pendaran" attend labelFunc04C2_01A7:
	message("「我们三年前认识的。他非常勇敢强壮。我就是喜欢看他战斗。」她笑了。~~「不过，我不太确定他是否能和友谊会的其他成员相处融洽。」");
	say();
	UI_remove_answer("Sir Pendaran");
	UI_add_answer(["战斗", "友谊会"]);
labelFunc04C2_01A7:
	case "战斗" attend labelFunc04C2_01C7:
	message("「他和 Menion 以前经常在练习后一起切磋。那真是一幅美丽的……景象，");
	message(var0001);
	message("，」她红着脸说。");
	say();
	UI_remove_answer("战斗");
	UI_add_answer("过去");
labelFunc04C2_01C7:
	case "过去" attend labelFunc04C2_01DA:
	message("「当时， Pendaran 是唯一能跟上 Menion 的人。现在 Menion 已经开始指导别人了，他不再有时间和我的领主练习了。」");
	say();
	UI_remove_answer("过去");
labelFunc04C2_01DA:
	case "友谊会" attend labelFunc04C2_0201:
	var0007 = UI_wearing_fellowship();
	if (!var0007) goto labelFunc04C2_01F6;
	message("「嗯，呃，我的意思是，他在加入『之前』不会相处得很好，就是这样，」她结结巴巴地说。");
	say();
	goto labelFunc04C2_01FA;
labelFunc04C2_01F6:
	message("「其实也没什么。他在加入之前只是稍微更……个人主义一些。我并不认为友谊会一定有什么问题；但我没想到它会是能引起 Pendaran 兴趣的东西。」");
	say();
labelFunc04C2_01FA:
	UI_remove_answer("友谊会");
labelFunc04C2_0201:
	case "骑士" attend labelFunc04C2_0214:
	message("除了一些例外（包括我在内），堡里所有的战士都是骑士。你可能想和 John-Paul 领主谈谈。他负责管理巨蛇堡，也许能更好地带你到处看看。");
	say();
	UI_remove_answer("骑士");
labelFunc04C2_0214:
	case "补给品" attend labelFunc04C2_0262:
	var0008 = UI_get_schedule_type(UI_get_npc_object(0xFF3E));
	if (!(var0008 == 0x0007)) goto labelFunc04C2_0257;
	message("「你想买点什么吗？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc04C2_024A;
	Func08A1();
	goto labelFunc04C2_0254;
labelFunc04C2_024A:
	message("「嗯，也许下次吧，");
	message(var0001);
	message("。」");
	say();
labelFunc04C2_0254:
	goto labelFunc04C2_025B;
labelFunc04C2_0257:
	message("「一个更好的购买时机是当我的店铺营业时。」");
	say();
labelFunc04C2_025B:
	UI_remove_answer("补给品");
labelFunc04C2_0262:
	case "公地" attend labelFunc04C2_0280:
	message("有那么一瞬间，你看到她表情犹豫不决，然后她突然妥协了，话语如洪水般倾泻而出。~~「我不敢说，但知道你会看穿任何伪装，我再也无法隐瞒真相了。我的领主， Pendaran 爵士，自从加入友谊会后就不再是那个温柔的灵魂了。~~「不久前，我的 Pendaran 还是一位高贵的骑士，一位女士可以为之骄傲的骑士。但现在，」她摇摇头，「为了抗议他认为不列颠尼亚官府的错误，他毁坏了我们敬爱的不列颠王的雕像。」她开始啜泣。~~「而且，他还与一位在他作恶时偶然遇见他的同袍骑士战斗，并刺伤了他。他来找我，」她试图忍住泪水，「剑上沾着另一个人的血！」~~在你安慰了一会儿后，她恢复了平静。~~「请不要对他太严苛，」她恳求道。");
	say();
	gflags[0x025D] = true;
	UI_remove_answer("公地");
	UI_add_answer("另一个");
labelFunc04C2_0280:
	case "另一个" attend labelFunc04C2_0299:
	message("「我不知道是谁，");
	message(var0001);
	message("，而 Pendaran 不肯说！」");
	say();
	UI_remove_answer("另一个");
labelFunc04C2_0299:
	case "告辞" attend labelFunc04C2_02AC:
	message("「愿好运伴随着你，");
	message(var0001);
	message("。」*");
	say();
	abort;
labelFunc04C2_02AC:
	goto labelFunc04C2_006A;
labelFunc04C2_02AF:
	endconv;
labelFunc04C2_02B0:
	if (!(event == 0x0000)) goto labelFunc04C2_0378;
	var000A = UI_part_of_day();
	var0008 = UI_get_schedule_type(UI_get_npc_object(0xFF3E));
	var000B = UI_die_roll(0x0001, 0x0004);
	if (!(var0008 == 0x0007)) goto labelFunc04C2_0324;
	if (!(var000B == 0x0001)) goto labelFunc04C2_02F4;
	var000C = "@补给品！@";
labelFunc04C2_02F4:
	if (!(var000B == 0x0002)) goto labelFunc04C2_0304;
	var000C = "@提前购买！@";
labelFunc04C2_0304:
	if (!(var000B == 0x0003)) goto labelFunc04C2_0314;
	var000C = "@镇上最好的补给品！@";
labelFunc04C2_0314:
	if (!(var000B == 0x0004)) goto labelFunc04C2_0324;
	var000C = "@装备齐全！@";
labelFunc04C2_0324:
	if (!(var0008 == 0x001A)) goto labelFunc04C2_036E;
	if (!(var000B == 0x0001)) goto labelFunc04C2_033E;
	var000C = "@美味佳肴！@";
labelFunc04C2_033E:
	if (!(var000B == 0x0002)) goto labelFunc04C2_034E;
	var000C = "@美酒！@";
labelFunc04C2_034E:
	if (!(var000B == 0x0003)) goto labelFunc04C2_035E;
	var000C = "@嗯……@";
labelFunc04C2_035E:
	if (!(var000B == 0x0004)) goto labelFunc04C2_036E;
	var000C = "@我饱了。@";
labelFunc04C2_036E:
	UI_item_say(0xFF3E, var000C);
labelFunc04C2_0378:
	return;
}


