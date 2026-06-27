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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x025A]) goto labelFunc04C6_0052;
	var0005 = var0001;
labelFunc04C6_0052:
	if (!gflags[0x025B]) goto labelFunc04C6_005E;
	var0005 = var0002;
labelFunc04C6_005E:
	if (!(!gflags[0x026F])) goto labelFunc04C6_0116;
	message("你看到一個男人，儘管雙眼失明，卻很快就注意到了你。~~「我是 Jordan，Jordan 爵士。而你是？」");
	say();
	var0006 = Func090B([var0001, var0002]);
	if (!(var0006 == var0001)) goto labelFunc04C6_0093;
	message("「這是我的榮幸，");
	message(var0001);
	message("。」他跟你握手。");
	say();
	gflags[0x025A] = true;
	goto labelFunc04C6_010F;
labelFunc04C6_0093:
	message("他笑了。「是的，你當然是。」");
	say();
	gflags[0x025B] = true;
	if (!var0003) goto labelFunc04C6_010F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「這是真的， Jordan 爵士。他是聖者。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF3A, 0x0000);
	message("Jordan 笑了。「我明白了。那你又是誰？Shamino 嗎？」*");
	say();
	if (!var0004) goto labelFunc04C6_00EC;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「不。」他指著 Shamino 。「他是。我是 Iolo！」*");
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
	message("「當然！」他擺出屈尊降貴的態度說。「我怎麼會認不出偉大的 Iolo 呢。」");
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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x025A]) goto labelFunc04C6_014E;
	var0005 = var0001;
labelFunc04C6_014E:
	if (!gflags[0x025B]) goto labelFunc04C6_015A;
	var0005 = var0002;
labelFunc04C6_015A:
	converse attend labelFunc04C6_02DC;
	case "姓名" attend labelFunc04C6_0170:
	message("「我告訴過你了，我的名字是 Jordan 爵士。」");
	say();
	UI_remove_answer("姓名");
labelFunc04C6_0170:
	case "職業" attend labelFunc04C6_0189:
	message("「我在 Iolo's South 販售弓和弩。」");
	say();
	UI_add_answer(["Iolo's South", "販售"]);
labelFunc04C6_0189:
	case "Iolo's South" attend labelFunc04C6_01A9:
	message("「本店在不列顛城。但我這裡的生意也做得很好。」");
	say();
	UI_remove_answer("Iolo's South");
	UI_add_answer(["最初設的店", "堡壘"]);
labelFunc04C6_01A9:
	case "堡壘" attend labelFunc04C6_01C9:
	message("「Serpent's Hold ，");
	message(var0000);
	message("。我已經賣了很多優質的弓，給這裡的騎士。」");
	say();
	UI_remove_answer("堡壘");
	UI_add_answer("騎士");
labelFunc04C6_01C9:
	case "最初設的店" attend labelFunc04C6_0225:
	message("「偉大的弓箭手本人， Iolo ，在兩百多年前創立了那家分店。」");
	say();
	if (!var0003) goto labelFunc04C6_021E;
	message("*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我，呃，感謝你的稱讚。」*");
	say();
	UI_show_npc_face(0xFF3A, 0x0000);
	message("「如果你是 Iolo 的話會更有意義！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「聽著，流氓，我真的『是』……」*");
	say();
	UI_show_npc_face(0xFF3A, 0x0000);
	message("「是的，是的，我知道。你真的『是』 Iolo ……而我是不列顛王！」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04C6_021E:
	UI_remove_answer("最初設的店");
labelFunc04C6_0225:
	case "騎士" attend labelFunc04C6_0238:
	message("「有很多人住在堡壘裡。神聖碼頭的酒保 Denton 爵士，認識他們所有人。」");
	say();
	UI_remove_answer("騎士");
labelFunc04C6_0238:
	case "販售" attend labelFunc04C6_0281:
	var0007 = UI_get_schedule_type(UI_get_npc_object(0xFF3A));
	if (!(var0007 == 0x0007)) goto labelFunc04C6_0270;
	message("「近戰武器還是遠程武器？」");
	say();
	UI_push_answers();
	UI_add_answer(["武器", "遠程"]);
	goto labelFunc04C6_027A;
labelFunc04C6_0270:
	message("「很抱歉，");
	message(var0000);
	message("，但我只能在營業時間——早上 6 點到晚上 6 點之間賣東西。」");
	say();
labelFunc04C6_027A:
	UI_remove_answer("販售");
labelFunc04C6_0281:
	case "武器" attend labelFunc04C6_028C:
	Func08A4();
labelFunc04C6_028C:
	case "遠程" attend labelFunc04C6_0297:
	Func08A3();
labelFunc04C6_0297:
	case "雕像" attend labelFunc04C6_02B1:
	message("他顯得很有防備。「我跟那件事毫無關係。~~但我可以告訴你，在事件發生的那晚，我聽到公共廣場有扭打的聲音。而且，在當晚晚些時候，我聽到一個女人的叫聲，似乎很驚訝！」");
	say();
	UI_add_answer("女人");
	UI_remove_answer("雕像");
labelFunc04C6_02B1:
	case "女人" attend labelFunc04C6_02CE:
	message("「我不太確定，");
	message(var0005);
	message("，但我相信那聲音是 Jehanne 女士的。」他會意地點點頭。「有人失去了他們的團結感。」");
	say();
	UI_remove_answer("女人");
	gflags[0x025C] = true;
labelFunc04C6_02CE:
	case "告辭" attend labelFunc04C6_02D9:
	goto labelFunc04C6_02DC;
labelFunc04C6_02D9:
	goto labelFunc04C6_015A;
labelFunc04C6_02DC:
	endconv;
	message("「希望能再次見到你，");
	message(var0005);
	message("。」*");
	say();
labelFunc04C6_02E7:
	if (!(event == 0x0000)) goto labelFunc04C6_02F5;
	Func092E(0xFF3A);
labelFunc04C6_02F5:
	return;
}


