#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func08A4 0x8A4 ();
extern void Func08A3 0x8A3 ();
extern void Func092E 0x92E (var var0000);

void Func04C6 object#(0x4C6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04C6_02E7;
	UI_show_npc_face(0xFF3A, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "Avatar";
	var0003 = Func08F7(0xFFFF);
	var0004 = Func08F7(0xFFFD);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x025A]) goto labelFunc04C6_0052;
	var0005 = var0001;
labelFunc04C6_0052:
	if (!gflags[0x025B]) goto labelFunc04C6_005E;
	var0005 = var0002;
labelFunc04C6_005E:
	if (!(!gflags[0x026F])) goto labelFunc04C6_0116;
	message("你看到一个男人，尽管双眼失明，却很快就注意到了你。~~「我是 Jordan，Jordan 爵士。而你是？」");
	say();
	var0006 = Func090B([var0001, var0002]);
	if (!(var0006 == var0001)) goto labelFunc04C6_0093;
	message("「这是我的荣幸，");
	message(var0001);
	message("。」他跟你握手。");
	say();
	gflags[0x025A] = true;
	goto labelFunc04C6_010F;
labelFunc04C6_0093:
	message("他笑了。「是的，你当然是。」");
	say();
	gflags[0x025B] = true;
	if (!var0003) goto labelFunc04C6_010F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「这是真的， Jordan 爵士。他是圣者。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF3A, 0x0000);
	message("Jordan 笑了。「我明白了。那你又是谁？Shamino 吗？」*");
	say();
	if (!var0004) goto labelFunc04C6_00EC;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「不。」他指着 Shamino 。「他是。我是 Iolo！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF3A, 0x0000);
	goto labelFunc04C6_010B;
labelFunc04C6_00EC:
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「不。我是 Iolo，不是 Shamino！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF3A, 0x0000);
labelFunc04C6_010B:
	message("「当然！」他摆出屈尊降贵的态度说。「我怎么会认不出伟大的 Iolo 呢。」");
	say();
labelFunc04C6_010F:
	gflags[0x026F] = true;
	goto labelFunc04C6_0120;
labelFunc04C6_0116:
	message("「你好，");
	message(var0005);
	message("。」");
	say();
labelFunc04C6_0120:
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C6_0132;
	UI_add_answer("雕像");
labelFunc04C6_0132:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x025A]) goto labelFunc04C6_014E;
	var0005 = var0001;
labelFunc04C6_014E:
	if (!gflags[0x025B]) goto labelFunc04C6_015A;
	var0005 = var0002;
labelFunc04C6_015A:
	converse attend labelFunc04C6_02DC;
	case "姓名" attend labelFunc04C6_0170:
	message("「我告诉过你了，我的名字是 Jordan 爵士。」");
	say();
	UI_remove_answer("姓名");
labelFunc04C6_0170:
	case "职业" attend labelFunc04C6_0189:
	message("「我在 Iolo's South 贩售弓和弩。」");
	say();
	UI_add_answer(["Iolo's South", "贩售"]);
labelFunc04C6_0189:
	case "Iolo's South" attend labelFunc04C6_01A9:
	message("「本店在不列颠城。但我这里的生意也做得很好。」");
	say();
	UI_remove_answer("Iolo's South");
	UI_add_answer(["最初设的店", "堡垒"]);
labelFunc04C6_01A9:
	case "堡垒" attend labelFunc04C6_01C9:
	message("「Serpent's Hold ，");
	message(var0000);
	message("。我已经卖了很多优质的弓，给这里的骑士。」");
	say();
	UI_remove_answer("堡垒");
	UI_add_answer("骑士");
labelFunc04C6_01C9:
	case "最初设的店" attend labelFunc04C6_0225:
	message("「伟大的弓箭手本人， Iolo ，在两百多年前创立了那家分店。」");
	say();
	if (!var0003) goto labelFunc04C6_021E;
	message("*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我，呃，感谢你的称赞。」*");
	say();
	UI_show_npc_face(0xFF3A, 0x0000);
	message("「如果你是 Iolo 的话会更有意义！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「听着，流氓，我真的『是』……」*");
	say();
	UI_show_npc_face(0xFF3A, 0x0000);
	message("「是的，是的，我知道。你真的『是』 Iolo ……而我是不列颠王！」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04C6_021E:
	UI_remove_answer("最初设的店");
labelFunc04C6_0225:
	case "骑士" attend labelFunc04C6_0238:
	message("「有很多人住在堡垒里。神圣码头的酒保 Denton 爵士，认识他们所有人。」");
	say();
	UI_remove_answer("骑士");
labelFunc04C6_0238:
	case "贩售" attend labelFunc04C6_0281:
	var0007 = UI_get_schedule_type(UI_get_npc_object(0xFF3A));
	if (!(var0007 == 0x0007)) goto labelFunc04C6_0270;
	message("「近战武器还是远程武器？」");
	say();
	UI_push_answers();
	UI_add_answer(["武器", "远程"]);
	goto labelFunc04C6_027A;
labelFunc04C6_0270:
	message("「很抱歉，");
	message(var0000);
	message("，但我只能在营业时间——早上 6 点到晚上 6 点之间卖东西。」");
	say();
labelFunc04C6_027A:
	UI_remove_answer("贩售");
labelFunc04C6_0281:
	case "武器" attend labelFunc04C6_028C:
	Func08A4();
labelFunc04C6_028C:
	case "远程" attend labelFunc04C6_0297:
	Func08A3();
labelFunc04C6_0297:
	case "雕像" attend labelFunc04C6_02B1:
	message("他显得很有防备。「我跟那件事毫无关系。~~但我可以告诉你，在事件发生的那晚，我听到公共广场有扭打的声音。而且，在当晚晚些时候，我听到一个女人的叫声，似乎很惊讶！」");
	say();
	UI_add_answer("女人");
	UI_remove_answer("雕像");
labelFunc04C6_02B1:
	case "女人" attend labelFunc04C6_02CE:
	message("「我不太确定，");
	message(var0005);
	message("，但我相信那声音是 Jehanne 女士的。」他会意地点点头。「有人失去了他们的团结感。」");
	say();
	UI_remove_answer("女人");
	gflags[0x025C] = true;
labelFunc04C6_02CE:
	case "告辞" attend labelFunc04C6_02D9:
	goto labelFunc04C6_02DC;
labelFunc04C6_02D9:
	goto labelFunc04C6_015A;
labelFunc04C6_02DC:
	endconv;
	message("「希望能再次见到你，");
	message(var0005);
	message("。」*");
	say();
labelFunc04C6_02E7:
	if (!(event == 0x0000)) goto labelFunc04C6_02F5;
	Func092E(0xFF3A);
labelFunc04C6_02F5:
	return;
}


