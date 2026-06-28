#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();

void Func04D2 object#(0x4D2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04D2_0221;
	UI_show_npc_face(0xFF2E, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x028F])) goto labelFunc04D2_0044;
	message("你看到一个个子不高的女人，脸上带着心不在焉的表情。");
	say();
	gflags[0x028F] = true;
	goto labelFunc04D2_0048;
labelFunc04D2_0044:
	message("「你在担心什么？」");
	say();
labelFunc04D2_0048:
	converse attend labelFunc04D2_021C;
	case "姓名" attend labelFunc04D2_005E:
	message("这位女士停下手边的工作，转过头来看你，回答道：「我的名字是 Liana 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D2_005E:
	case "职业" attend labelFunc04D2_0077:
	message("「我是镇长的书记员。我负责记录 Vesper 的官方记录和文档。」");
	say();
	UI_add_answer(["Vesper", "市长"]);
labelFunc04D2_0077:
	case "Vesper" attend labelFunc04D2_0097:
	message("「我喜欢这个城镇，但它离不列颠城太远了，以至于吸引了一些真正……不寻常的人。」");
	say();
	UI_add_answer(["居民", "奇怪的人"]);
	UI_remove_answer("Vesper");
labelFunc04D2_0097:
	case "市长" attend labelFunc04D2_00AA:
	message("「我在非官方身分上尊重 Auston 。但是，」她挑起眉毛补充道，「作为一名镇长，他太没有骨气了。他害怕在任何问题上选边站。我不认为他当初应该自愿参选。」");
	say();
	UI_remove_answer("市长");
labelFunc04D2_00AA:
	case "奇怪的人" attend labelFunc04D2_00D3:
	message("「嗯，有几个奇怪的人： Mara 和 Yongi 。还有 Blorn ——他是个刻薄的人，还有……嗯……当然，还有 Eldroth 。而且，」她打了个寒颤说，「还有石像鬼。」");
	say();
	UI_add_answer(["Mara", "Yongi", "Blorn", "Eldroth", "石像鬼"]);
	UI_remove_answer("奇怪的人");
labelFunc04D2_00D3:
	case "Mara" attend labelFunc04D2_0101:
	var0003 = UI_is_dead(UI_get_npc_object(0xFF34));
	if (!var0003) goto labelFunc04D2_00F6;
	message("「既然她已经走了，我对我说过的话感到抱歉。太可惜她死在那场酒吧斗殴中了。」");
	say();
	goto labelFunc04D2_00FA;
labelFunc04D2_00F6:
	message("「Mara ？她需要学习如何表现得像个女人。她那男人般的态度骗不了任何人。」");
	say();
labelFunc04D2_00FA:
	UI_remove_answer("Mara");
labelFunc04D2_0101:
	case "Yongi" attend labelFunc04D2_0114:
	message("「Yongi 不过是个酒鬼。他开酒馆的唯一原因，就是有借口以批发价大量购买酒精饮料。不要问他关于石像鬼的事，除非你想让他对你喋喋不休。他几乎和 Blorn 一样恨他们！」");
	say();
	UI_remove_answer("Yongi");
labelFunc04D2_0114:
	case "Eldroth" attend labelFunc04D2_0127:
	message("「我想他人很好，但他也是个老糊涂。我不认为他有脑子已经超过十年了。」");
	say();
	UI_remove_answer("Eldroth");
labelFunc04D2_0127:
	case "Blorn" attend labelFunc04D2_0141:
	message("「如果我见过的话，他就是个惹事生非的家伙和小偷。如果他知道什么对他最好的话，他应该考虑离开这个城镇——快点。不过，有一件事我倒是很欣赏他——他比任何人都恨石像鬼！」");
	say();
	UI_add_answer("石像鬼");
	UI_remove_answer("Blorn");
labelFunc04D2_0141:
	case "石像鬼" attend labelFunc04D2_017D:
	message("「那对你来说就是个恶心的生物。我觉得以前我们叫他们恶魔 (daemons) 的时候名字取得更好！」");
	say();
	if (!(!var0002)) goto labelFunc04D2_0176;
	var0004 = UI_add_party_items(0x0001, 0x031D, 0x0002, 0xFE99, true);
	if (!var0004) goto labelFunc04D2_0176;
	message("「事实上……」她递给你一张纸。");
	say();
	var0002 = true;
labelFunc04D2_0176:
	UI_remove_answer("石像鬼");
labelFunc04D2_017D:
	case "居民" attend labelFunc04D2_01A0:
	message("「嗯，有 Cador 、 Yvella 和 Zaksam ——那些是正常人。」");
	say();
	UI_add_answer(["Cador", "Yvella", "Zaksam"]);
	UI_remove_answer("居民");
labelFunc04D2_01A0:
	case "Zaksam" attend labelFunc04D2_01B3:
	message("「他是训练师。据我所知是个相当好的战士。」");
	say();
	UI_remove_answer("Zaksam");
labelFunc04D2_01B3:
	case "Cador" attend labelFunc04D2_01E8:
	var0005 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0005) goto labelFunc04D2_01DD;
	message("「太可惜他死了。我听过许多人称赞他在矿区作为领导者的能力。」");
	say();
	UI_add_answer("死去的");
	goto labelFunc04D2_01E8;
labelFunc04D2_01DD:
	message("「Cador 是这里 Vesper 的不列颠尼亚矿业公司分部的负责人。」");
	say();
	UI_remove_answer("Cador");
labelFunc04D2_01E8:
	case "死去的" attend labelFunc04D2_01FB:
	message("「他在 Yongi 的酒馆里的一场残忍屠杀中被杀。没有人真正知道发生了什么事，但我想许多喝酒的人都是这样迎来死亡的。」她耸了耸肩。");
	say();
	UI_remove_answer("死去的");
labelFunc04D2_01FB:
	case "Yvella" attend labelFunc04D2_020E:
	message("「她是 Cador 的妻子。」");
	say();
	UI_remove_answer("Yvella");
labelFunc04D2_020E:
	case "告辞" attend labelFunc04D2_0219:
	goto labelFunc04D2_021C;
labelFunc04D2_0219:
	goto labelFunc04D2_0048;
labelFunc04D2_021C:
	endconv;
	message("她对你点点头，然后回到她的事情上。*");
	say();
labelFunc04D2_0221:
	if (!(event == 0x0000)) goto labelFunc04D2_022A;
	abort;
labelFunc04D2_022A:
	return;
}


