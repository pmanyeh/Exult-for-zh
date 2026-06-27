#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092F 0x92F (var var0000);

void Func04C5 object#(0x4C5) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04C5_01E2;
	UI_show_npc_face(0xFF3B, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x026E])) goto labelFunc04C5_0078;
	var0000 = UI_get_distance(0xFF3B, 0xFF3D);
	if (!(var0000 < 0x000B)) goto labelFunc04C5_0058;
	if (!gflags[0x026C]) goto labelFunc04C5_004F;
	var0001 = "，站在 John-Paul 爵士身後，行舉手禮。";
	goto labelFunc04C5_0055;
labelFunc04C5_004F:
	var0001 = "，站在另一名騎士身後，行舉手禮。";
labelFunc04C5_0055:
	goto labelFunc04C5_005E;
labelFunc04C5_0058:
	var0001 = "。";
labelFunc04C5_005E:
	message("你看到一隻表情非常嚴肅的石像鬼");
	message(var0001);
	say();
	var0002 = Func08F7(0xFF3D);
	gflags[0x026E] = true;
	goto labelFunc04C5_007C;
labelFunc04C5_0078:
	message("「請問如何能提供協助。」他瞇起眼睛。");
	say();
labelFunc04C5_007C:
	if (!(gflags[0x025E] && (!gflags[0x0265]))) goto labelFunc04C5_008E;
	UI_add_answer("雕像");
labelFunc04C5_008E:
	if (!(gflags[0x0276] && (!gflags[0x0261]))) goto labelFunc04C5_00A0;
	UI_add_answer("是 Pendaran 做的");
labelFunc04C5_00A0:
	converse attend labelFunc04C5_01DD;
	case "姓名" attend labelFunc04C5_00B6:
	message("「名字是 Horffe。」");
	say();
	UI_remove_answer("姓名");
labelFunc04C5_00B6:
	case "職業" attend labelFunc04C5_00CF:
	message("「是衛兵隊長。為 Serpent's Hold 的人民服務並保護他們。」");
	say();
	UI_add_answer(["隊長", "Serpent's Hold"]);
labelFunc04C5_00CF:
	case "隊長" attend labelFunc04C5_00EF:
	message("「被命令保護居住在 Serpent's Hold 的人民，並維持騎士的整體秩序。」");
	say();
	UI_remove_answer("隊長");
	UI_add_answer(["人們", "騎士"]);
labelFunc04C5_00EF:
	case "Serpent's Hold", "人們" attend labelFunc04C5_010B:
	message("「引導你去找神聖碼頭的酒館老闆 Denton 爵士。他比我更了解堡壘和這裡的人。」");
	say();
	UI_remove_answer(["人們", "Serpent's Hold"]);
labelFunc04C5_010B:
	case "是 Pendaran 做的" attend labelFunc04C5_011E:
	message("「感謝你提供這些資訊。很高興能知道襲擊我的人的身分。」");
	say();
	UI_remove_answer("是 Pendaran 做的");
labelFunc04C5_011E:
	case "騎士" attend labelFunc04C5_0131:
	message("「通知你，許多優秀的戰士居住在堡壘之內。幾乎不用擔心土匪或兇猛動物的襲擊。」");
	say();
	UI_remove_answer("騎士");
labelFunc04C5_0131:
	case "雕像" attend labelFunc04C5_0151:
	message("「對此一無所知！」");
	say();
	if (!gflags[0x025F]) goto labelFunc04C5_014A;
	UI_add_answer("碎片上的血");
labelFunc04C5_014A:
	UI_remove_answer("雕像");
labelFunc04C5_0151:
	case "碎片上的血" attend labelFunc04C5_016F:
	message("他粗獷的態度軟化了。~~「是我的血。」他嘆了口氣。「但破壞雕像的人不是我！是在試圖阻止破壞者時受傷的。」");
	say();
	UI_add_answer("破壞者");
	UI_remove_answer("碎片上的血");
	gflags[0x0265] = true;
labelFunc04C5_016F:
	case "破壞者" attend labelFunc04C5_018F:
	message("他低頭看著自己的腳。~~「不知道他是誰。當時非常暗。請你不要告訴 Richter 爵士。」");
	say();
	UI_remove_answer("破壞者");
	UI_add_answer(["黑暗", "Richter 爵士"]);
labelFunc04C5_018F:
	case "黑暗" attend labelFunc04C5_01A2:
	message("「能見度非常差，但我確信我是在和一名武裝騎士扭打。」");
	say();
	UI_remove_answer("黑暗");
labelFunc04C5_01A2:
	case "Richter 爵士" attend labelFunc04C5_01BC:
	message("「知道他不會相信一個公然藐視友誼會的人。」");
	say();
	UI_remove_answer("Richter 爵士");
	UI_add_answer("友誼會");
labelFunc04C5_01BC:
	case "友誼會" attend labelFunc04C5_01CF:
	message("「對它了解不多。也不怎麼喜歡它。」");
	say();
	UI_remove_answer("友誼會");
labelFunc04C5_01CF:
	case "告辭" attend labelFunc04C5_01DA:
	goto labelFunc04C5_01DD;
labelFunc04C5_01DA:
	goto labelFunc04C5_00A0;
labelFunc04C5_01DD:
	endconv;
	message("「道別。」*");
	say();
labelFunc04C5_01E2:
	if (!(event == 0x0000)) goto labelFunc04C5_01F0;
	Func092F(0xFF3B);
labelFunc04C5_01F0:
	return;
}


