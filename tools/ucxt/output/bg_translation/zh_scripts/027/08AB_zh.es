#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func08AB 0x8AB ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func08F7(0xFFF2);
	var0001 = Func08F7(0xFF14);
	var0002 = Func08F7(0xFFEE);
	var0003 = Func08F7(0xFFEA);
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFE);
	UI_show_npc_face(0xFFF0, 0x0000);
	message("Klog 正帶領鎮民進行一場友誼會會議。");
	say();
	message("「感謝各位 Trinsic 的友誼會成員今晚參加我們的會議。~~我想你們一定都很清楚我們城裡所發生的罪行。現在是哀悼那些我們失去之人的時刻。我們將永遠銘記我們的鐵匠 Christopher，他既是我們鎮上寶貴的公民，也是一位摯友。Inamo 是一位和藹可親且勤奮的石像鬼。正如他們的死亡所顯示的，不列顛尼亞比以往任何時候都更需要友誼會。」");
	say();
	message("「友誼會的創立是為了推廣一種理念，一種將樂觀的思考秩序應用於生活的實踐方法。你該如何遵循這種方法呢？透過將內在力量的三位一體 (Triad of Inner Strength) 應用於你的生活。這三位一體 (Triad) 由三個原則組成，當這三個原則同時應用於你的生活時，它們可以安撫社會的狂熱，因為社會教導你接受失敗，並從你的靈魂中驅逐破壞性的虛幻思想與情感。」");
	say();
	message("「第一個原則是致力合一 (Strive For Unity)。這意味著我們應該拒絕分歧，擱置我們的差異，並為了我們所有人的利益而共同努力。」");
	say();
	message("「第二個原則是信賴你的兄弟 (Trust Thy Brother)。信任是必不可少的，因為如果你們必須因不斷提防彼此而分裂，你們還能成就什麼呢？」");
	say();
	message("「第三個也是最後一個原則是價值先行於報償 (Worthiness Precedes Reward)。一個人必須努力配得上我們每個人所追求的獎勵，因為如果一個人不配得到獎勵，你為什麼會認為他們應該得到呢？」");
	say();
	message("「我們必須將這種理念傳播給每一個能聽到的人。因為除了我們友誼會之外，還有誰能將分裂、猜忌且不配的不列顛尼亞從悲慘的境地中提升起來呢？」");
	say();
	message("「現在是時候請我們每一位成員大聲發表感言，並講述與友誼會同行是如何影響他們的生活。」*");
	say();
	if (!var0001) goto labelFunc08AB_007B;
	UI_show_npc_face(0xFF14, 0x0000);
	message("「友誼會讓我能夠伸出援手幫助他人，而在此之前我總是太忙碌了。」*");
	say();
	UI_remove_npc_face(0xFF14);
labelFunc08AB_007B:
	if (!var0000) goto labelFunc08AB_0096;
	UI_show_npc_face(0xFFF2, 0x0000);
	message("「友誼會讓我執行 Trinsic 守衛的工作時變得更加機警和細心。」*");
	say();
	UI_remove_npc_face(0xFFF2);
labelFunc08AB_0096:
	if (!var0002) goto labelFunc08AB_00BF;
	UI_show_npc_face(0xFFEE, 0x0000);
	message("「友誼會讓我成為一個更快樂、更隨和的人。」*");
	say();
	UI_show_npc_face(0xFFF0, 0x0000);
	message("「感謝你的分享，兄弟！」*");
	say();
	UI_remove_npc_face(0xFFEE);
labelFunc08AB_00BF:
	if (!var0003) goto labelFunc08AB_00DA;
	UI_show_npc_face(0xFFEA, 0x0000);
	message("「身為友誼會成員，我覺得我正在為不列顛尼亞做一些好事。」*");
	say();
	UI_remove_npc_face(0xFFEA);
labelFunc08AB_00DA:
	if (!var0005) goto labelFunc08AB_00F5;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 小聲嘀咕著，不對任何人說：「這是我有幸身處其中過最無聊的馬糞堆了！」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc08AB_00F5:
	if (!var0004) goto labelFunc08AB_0110;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 拍了拍自己的臉頰，讓自己不要睡著。~~「聖者，我相信我們已經聽夠這些了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc08AB_0110:
	UI_show_npc_face(0xFFF0, 0x0000);
	message("顯然這場會議還會持續一段時間……你決定你有更重要的事情要處理。*");
	say();
	abort;
	return;
}
