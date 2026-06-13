#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0617 object#(0x617) ();

void Func08EF 0x8EF ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_find_nearest(0xFF72, 0x02EB, 0xFFFF);
	var0001 = Func0909();
	if (!(!gflags[0x01C1])) goto labelFunc08EF_007C;
	if (!gflags[0x01A8]) goto labelFunc08EF_006A;
	message("Trent 在他那燒毀的店鋪殘骸旁踱步。當他看到你回來時，他衝了向前，尋找著他的摯愛 Rowena。");
	say();
	var0002 = UI_get_party_list();
	if (!(UI_get_npc_object(0xFF70) in var0002)) goto labelFunc08EF_005D;
	message("這對苦命鴛鴦衝向彼此，緊緊擁入幽靈般的懷抱。一時之間，很難分清一個靈魂從何處開始，另一個又在何處結束。你勉強看清 Trent 將戒指重新戴回 Rowena 手指上的畫面。~~接著兩人緩緩轉身面向你。「你為我們做了這麼多，我希望在幫助我們的同時，也對你自己的任務有所幫助。」Trent 向你鞠躬，然後轉身凝視他可愛的妻子。*");
	say();
	UI_remove_from_party(0xFF70);
	UI_set_schedule_type(UI_get_npc_object(0xFF70), 0x000F);
	gflags[0x01A6] = true;
	abort;
	goto labelFunc08EF_0067;
labelFunc08EF_005D:
	message("「我該如何幫助你，");
	message(var0001);
	message("？有什麼事是我忘記的嗎？」他看著你，顯得有些困惑。");
	say();
labelFunc08EF_0067:
	goto labelFunc08EF_007C;
labelFunc08EF_006A:
	if (!var0000) goto labelFunc08EF_0077;
	message("那個高大的幽靈繼續工作著，但他一邊用錘子敲擊著鐵籠的鐵條，一邊吹著甜美而憂傷的口哨。");
	say();
	goto labelFunc08EF_007C;
labelFunc08EF_0077:
	message("「哎呀，籠子跑到哪去了？我敢肯定剛才還在這裡的。在找到籠子之前，我根本沒法繼續工作！」*");
	say();
	abort;
labelFunc08EF_007C:
	UI_add_answer(["接下來呢？", "告辭"]);
	if (!gflags[0x01C1]) goto labelFunc08EF_009C;
	UI_add_answer(["靈魂囚籠", "釋放"]);
labelFunc08EF_009C:
	converse attend labelFunc08EF_0168;
	case "靈魂囚籠" attend labelFunc08EF_00B2:
	message("「這是一個特殊的籠子，是按照人的體型打造的。Mordra 夫人說，一旦將它放進巫妖 Horance 的靈魂之井，就能把牠關在裡面。」他的聲音似乎比之前溫和了許多。");
	say();
	UI_remove_answer("靈魂囚籠");
labelFunc08EF_00B2:
	case "釋放" attend labelFunc08EF_00DD:
	message("「是的，你會幫我釋放她，對吧？」his 他的聲音裡又帶了一絲銳氣。");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc08EF_00D1;
	message("他握著錘柄的手鬆了開來，感激地微笑著。~~「你無法想像這對我有多重要。謝謝你。」");
	say();
	goto labelFunc08EF_00D6;
labelFunc08EF_00D1:
	message("他緊緊握住錘柄。「最好給我趕快離開！如果你不快點，我就當作你改變主意了！」*");
	say();
	abort;
labelFunc08EF_00D6:
	UI_remove_answer("釋放");
labelFunc08EF_00DD:
	case "接下來呢？" attend labelFunc08EF_0145:
	var0004 = Func0931(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99);
	if (!gflags[0x01A8]) goto labelFunc08EF_0107;
	message("「唉，我求求你，請幫幫忙，讓我可愛的 Rowena 回到我身邊，」他懇求著。");
	say();
	goto labelFunc08EF_0145;
labelFunc08EF_0107:
	if (!(!var0004)) goto labelFunc08EF_011C;
	message("「我需要一根鐵條來完成這個籠子。在鎮上的墓地裡可以找到幾根。」");
	say();
	UI_remove_answer("接下來呢？");
	goto labelFunc08EF_0145;
labelFunc08EF_011C:
	message("「啊，我需要你身上帶的那根鐵條。」他伸出手，從你那裡接過鐵條。");
	say();
	var0005 = UI_remove_party_items(0x0001, 0x0108, 0xFE99, 0xFE99, false);
	message("「有了這個，我很快就能把它完成。你在這裡等一會，我來處理這個籠子。」");
	say();
	message("「把籠子拿去給 Mordra 夫人，她會告訴你更多關於它以及它的用途。」");
	say();
	gflags[0x01CF] = true;
	item->Func0617();
	abort;
labelFunc08EF_0145:
	case "犧牲" attend labelFunc08EF_0158:
	message("「在與我的摯愛重逢之前，我甚至連考慮都不會考慮那件事。」關於這點，他似乎非常堅決。");
	say();
	UI_remove_answer("犧牲");
labelFunc08EF_0158:
	case "告辭" attend labelFunc08EF_0165:
	message("「請快一點。我心愛的人多忍受 Horance 那污穢存在的一秒鐘，都像是有一把刀刺在我的肋旁。」他開始在店裡踱步。*");
	say();
	abort;
labelFunc08EF_0165:
	goto labelFunc08EF_009C;
labelFunc08EF_0168:
	endconv;
	return;
}