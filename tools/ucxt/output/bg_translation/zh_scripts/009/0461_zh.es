#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();

void Func0461 object#(0x461) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0461_0009;
	abort;
labelFunc0461_0009:
	UI_show_npc_face(0xFF9F, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0461_0043;
	var0001 = Func08FC(0xFF9F, 0xFFAF);
	if (!var0001) goto labelFunc0461_003E;
	message("Mikos 在友誼會的集會中陷入冥想，沒有聽到你的聲音。*");
	say();
	abort;
	goto labelFunc0461_0043;
labelFunc0461_003E:
	message("「我必須趕去參加友誼會集會！我們下次再聊！」*");
	say();
	abort;
labelFunc0461_0043:
	var0002 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0107]) goto labelFunc0461_0066;
	UI_add_answer("銀色液體");
labelFunc0461_0066:
	if (!(!gflags[0x011C])) goto labelFunc0461_0078;
	message("一個面帶冷笑的男人看著你靠近。他懷疑地東張西望。");
	say();
	gflags[0x011C] = true;
	goto labelFunc0461_007C;
labelFunc0461_0078:
	message("Mikos 聳了聳肩，嘆了口氣。「你這次又想要什麼？」");
	say();
labelFunc0461_007C:
	converse attend labelFunc0461_0139;
	case "姓名" attend labelFunc0461_0092:
	message("「我是 Mikos 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0461_0092:
	case "職業" attend labelFunc0461_00AB:
	message("「我是 Minoc 礦場的工頭。」");
	say();
	UI_add_answer(["Minoc", "礦場"]);
labelFunc0461_00AB:
	case "Minoc" attend labelFunc0461_00BE:
	message("他往地上吐了口口水。「去他們的！在這裡我很安全，遠離他們所有的爭吵。接下來，他們就要互相殘殺了。」");
	say();
	UI_remove_answer("Minoc");
labelFunc0461_00BE:
	case "礦場" attend labelFunc0461_00DE:
	message("「這座礦場由不列顛尼亞礦業公司經營。它位於曾經是 Covetous 地城的地方。他們使用訓練有素的礦工和特殊的採礦設備來開採鐵礦石、鉛和其他礦物。」");
	say();
	UI_remove_answer("礦場");
	UI_add_answer(["礦工", "設備"]);
labelFunc0461_00DE:
	case "礦工" attend labelFunc0461_00F8:
	message("「因為機器正在維修，目前大部分的礦工都不在。現在我們有兩位工程師 Owings 和 Malloy 在主隧道的一個分支裡。別打擾他們，因為他們正在進行一個特殊專案。我們還有一個石像鬼 Fodus ，他在幫忙維持礦場通常運作的樣子。」");
	say();
	UI_remove_answer("礦工");
	UI_add_answer("Owings 和 Malloy");
labelFunc0461_00F8:
	case "設備" attend labelFunc0461_010B:
	message("「這地方充滿了非常危險的機器，如果你不知道自己在做什麼的話。你絕對不想看到如果有人靠得太近，那些挖掘裝置會對他造成什麼下場！」");
	say();
	UI_remove_answer("設備");
labelFunc0461_010B:
	case "Owings 和 Malloy" attend labelFunc0461_011E:
	message("Mikos 緩緩地搖了搖頭。「我不知道不列顛尼亞礦業公司是從哪裡找到他們的。」");
	say();
	UI_remove_answer("Owings 和 Malloy");
labelFunc0461_011E:
	case "銀色液體" attend labelFunc0461_012B:
	message("你向 Mikos 複述了你聽到 Fodus 說的話。 Mikos 露出震驚的表情。「我完全不知道他在說什麼，但我只能說這是石像鬼的典型行為。只是想逃避責任而已。聽著，如果你把時間都花在擾亂礦場工作上，那你最好離開這個地方！」*");
	say();
	abort;
labelFunc0461_012B:
	case "告辭" attend labelFunc0461_0136:
	goto labelFunc0461_0139;
labelFunc0461_0136:
	goto labelFunc0461_007C;
labelFunc0461_0139:
	endconv;
	message("「別在這裡到處亂逛，");
	message(var0002);
	message("。你應該馬上離開。」*");
	say();
	return;
}


