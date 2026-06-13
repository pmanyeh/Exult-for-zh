#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func08D7 0x8D7 ()
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

	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFF70);
	if (!(var0002 in var0001)) goto labelFunc08D7_00A2;
	var0003 = Func08F7(0xFF72);
	if (!var0003) goto labelFunc08D7_0051;
	UI_remove_from_party(0xFF70);
	message("這對苦命鴛鴦衝向彼此，緊緊擁入幽靈般的懷抱。一時之間，很難分清一個靈魂從何處開始，另一個又在何處結束，接著兩人緩緩轉身面向你。「你為我們做了這麼多，我希望在幫助我們的同時，也對你自己的任務有所幫助。」Rowena 向你行了個屈膝禮，然後轉身凝視她英俊的丈夫。*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF70), 0x000F);
	gflags[0x01A6] = true;
	abort;
	goto labelFunc08D7_009F;
labelFunc08D7_0051:
	message("「我該如何幫助你，");
	message(var0000);
	message("？我必須趕快去見 Trent。」她看起來迫不及待想和丈夫在一起。");
	say();
	UI_add_answer(["Trent", "告辭"]);
labelFunc08D7_0068:
	converse attend labelFunc08D7_009E;
	case "Trent" attend labelFunc08D7_007E:
	message("當你提到她丈夫的名字時，她的臉龐亮了起來。「他是鎮上的鐵匠。那台你用來將我從 Horance 的黑暗力量中喚醒的音樂盒，就是他親手製作的。」");
	say();
	UI_remove_answer("Trent");
labelFunc08D7_007E:
	case "犧牲" attend labelFunc08D7_008E:
	message("「我不能那樣對待我可憐的 Trent，至少在再見他一面之前絕不行。」她搖了搖頭表示拒絕。");
	say();
	gflags[0x019D] = true;
labelFunc08D7_008E:
	case "告辭" attend labelFunc08D7_009B:
	message("「是的，我們必須趕快去鐵匠鋪。Trent 會擔心我的。」*");
	say();
	abort;
labelFunc08D7_009B:
	goto labelFunc08D7_0068;
labelFunc08D7_009E:
	endconv;
labelFunc08D7_009F:
	goto labelFunc08D7_0110;
labelFunc08D7_00A2:
	message("「這個地方太可怕了。你能不能好心帶我去見我的丈夫 Trent？他很容易為我擔心。」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc08D7_010B;
	var0005 = false;
	message(" Rowena 燦爛地微笑著，「謝謝你，");
	message(var0000);
	message("。你的心地確實非常慷慨。」*");
	say();
	var0006 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc08D7_00CE:
	for (var0009 in var0001 with var0007 to var0008) attend labelFunc08D7_00E6;
	var0006 = (var0006 + 0x0001);
	goto labelFunc08D7_00CE;
labelFunc08D7_00E6:
	if (!(var0006 < 0x0008)) goto labelFunc08D7_0103;
	message("她走進隊伍中，並示意你帶路。*");
	say();
	UI_add_to_party(0xFF70);
	var0005 = true;
	abort;
	goto labelFunc08D7_0108;
labelFunc08D7_0103:
	message("「你目前的隊伍人數太多了，我無法與你同行。」");
	say();
	abort;
labelFunc08D7_0108:
	goto labelFunc08D7_0110;
labelFunc08D7_010B:
	message("「那麼我會在這裡等待一位有美德的人，他能保護我的安全，並幫助我回到我丈夫身邊。」她轉過身去，顯得有些疏離。*");
	say();
	abort;
labelFunc08D7_0110:
	return;
}