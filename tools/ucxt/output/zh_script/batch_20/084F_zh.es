#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0852 0x852 ();
extern void Func0911 0x911 (var var0000);

void Func084F 0x84F ()
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
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;

	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	message("儀式開始了，Batlin 站在 Britain 友誼會聚集的成員面前。他開始佈道。「我的朋友們，我最初創立友誼會是為了幫助 Britannia 及其人民為未來做好準備。");
	message("今天，它過去最偉大的象徵之一來到了這裡，加入了我們的友誼會。這是偉大的一天，因為當我們的過去和現在交織在一起時，我們將發出一個響徹整個 Britannia 的訊息。");
	message("很快地，它所有的人民將會為團結而共同奮鬥。」人群爆發出熱烈的歡呼聲。「當他們聽到聖者成為友誼會的一員時，那些最初不信任我們的人將會看到我們宗旨的真相。");
	message("那麼我們就可以迎來這樣一天：整個 Britannia 都配得上它將獲得的豐厚回報。」");
	say();
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc084F_005C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 對你低語：「你確定嗎，");
	message(var0000);
	message("，你想加入這些人嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc084F_0050;
	message("「我不確定你是勇敢還是純粹的愚蠢。」*");
	say();
	goto labelFunc084F_0055;
labelFunc084F_0050:
	message("「聽到你不確定，我鬆了一口氣！容我提醒你，現在拒絕他們的提議還不算太晚！我們趕快離開吧！」*");
	say();
	abort;
labelFunc084F_0055:
	UI_remove_npc_face(0xFFFF);
labelFunc084F_005C:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「現在是我們的成員作見證的時候了，談談他們如何將內在力量三位一體應用到他們的生活中。誰先來？」");
	say();
	var0004 = Func08F7(0xFFCB);
	if (!var0004) goto labelFunc084F_008E;
	UI_show_npc_face(0xFFCB, 0x0000);
	message("「友誼會教會我如何與他人的缺點共存，」Gaye 說。");
	say();
	UI_remove_npc_face(0xFFCB);
labelFunc084F_008E:
	var0005 = Func08F7(0xFFD7);
	if (!var0005) goto labelFunc084F_00C0;
	UI_show_npc_face(0xFFD7, 0x0000);
	message("「在加入友誼會之前，我對生活失去了所有的熱情，」Candice 說。*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「謝謝你的分享，Candice。」*");
	say();
	UI_remove_npc_face(0xFFD7);
labelFunc084F_00C0:
	var0006 = Func08F7(0xFFD5);
	if (!var0006) goto labelFunc084F_00E4;
	UI_show_npc_face(0xFFD5, 0x0000);
	message("「友誼會幫助我對人更加誠實，」Patterson 說。*");
	say();
	UI_remove_npc_face(0xFFD5);
labelFunc084F_00E4:
	var0007 = Func08F7(0xFFD3);
	if (!var0007) goto labelFunc084F_0108;
	UI_show_npc_face(0xFFD3, 0x0000);
	message("「友誼會教會我不讓別人擺佈我，」Figg 說。*");
	say();
	UI_remove_npc_face(0xFFD3);
labelFunc084F_0108:
	var0008 = Func08F7(0xFFC9);
	if (!var0008) goto labelFunc084F_012C;
	UI_show_npc_face(0xFFC9, 0x0000);
	message("「內在力量三位一體幫助我提高技能，打造更好的武器，」Grayson 說。*");
	say();
	UI_remove_npc_face(0xFFC9);
labelFunc084F_012C:
	var0009 = Func08F7(0xFFC6);
	if (!var0009) goto labelFunc084F_015E;
	UI_show_npc_face(0xFFC6, 0x0000);
	message("「友誼會讓我重新走上了繁榮的道路，」Gordon 說。*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「是的！謝謝你的分享，兄弟！」*");
	say();
	UI_remove_npc_face(0xFFC6);
labelFunc084F_015E:
	var000A = Func08F7(0xFFC5);
	if (!var000A) goto labelFunc084F_0182;
	UI_show_npc_face(0xFFC5, 0x0000);
	message("「友誼會教會我不要害怕成功，」Sean 說。*");
	say();
	UI_remove_npc_face(0xFFC5);
labelFunc084F_0182:
	var000B = Func08F7(0xFFC1);
	if (!var000B) goto labelFunc084F_01A6;
	UI_show_npc_face(0xFFC1, 0x0000);
	message("「友誼會給了我的生活一個全新的目標。就在今天，我招募了兩個潛在成員！」Millie 說。*");
	say();
	UI_remove_npc_face(0xFFC1);
labelFunc084F_01A6:
	var000C = Func08F7(0xFFDE);
	if (!var000C) goto labelFunc084F_01CA;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「友誼會教會我階級結構的罪惡，」Nanna 說。*");
	say();
	UI_remove_npc_face(0xFFDE);
labelFunc084F_01CA:
	var0002 = Func08F7(0xFFFF);
	var000D = Func08F7(0xFFFD);
	if (!(var000D && var0002)) goto labelFunc084F_023A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("你注意到 Iolo 正在和 Shamino 低語。「我不認為");
	message(var0000);
	message("意識到了情況的嚴重性。");
	message(var0001);
	message("勸不聽。也許你應該試試看。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「好吧，我來試試看。」他輕推了你一下，低聲說道：「也許我們應該離開這裡，");
	message(var0001);
	message("，免得我們之中有人做出日後會後悔的事？我們離開這個地方吧，好嗎？」");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc084F_022F;
	message("「我很高興你同意我的看法。你準備好我們隨時可以離開。」*");
	say();
	abort;
	goto labelFunc084F_0233;
labelFunc084F_022F:
	message("「那麼我想太遲了，因為我已經後悔來到這裡了。」*");
	say();
labelFunc084F_0233:
	UI_remove_npc_face(0xFFFD);
labelFunc084F_023A:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「現在是歡迎友誼會最新成員入席的時候了。」Batlin 示意你加入他在講台上的位置。");
	say();
	message("他將一杯酒倒入水晶高腳杯中，並抿了一口。");
	say();
	message("高腳杯在大廳裡傳遞，每位成員各自抿了一口。最後，高腳杯遞到了你手上。你若有所思地看著它，感覺房間裡所有人的目光都集中在你身上。");
	say();
	if (!var000D) goto labelFunc084F_02C9;
	var000F = Func08F7(0xFFFC);
	var0010 = UI_is_pc_female();
	if (!var0010) goto labelFunc084F_0275;
	var0011 = "she";
	goto labelFunc084F_027B;
labelFunc084F_0275:
	var0011 = "he";
labelFunc084F_027B:
	if (!var000F) goto labelFunc084F_02C9;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("你聽到 Shamino 在你身後絕望地對 Dupre 低語。「Dupre，我們沒能成功向聖者展示");
	message(var0011);
	message("肯定正在犯下的錯誤。你是我們最後的希望了。」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("你感覺有人拍了拍你的肩膀，轉過頭看到 Dupre 在你耳邊低語：「我知道一個比這裡好得多的喝酒去處。也許你想在那裡和你的戰友們一起喝一杯？」");
	say();
	var0012 = Func090A();
	if (!var0012) goto labelFunc084F_02BE;
	message("「那我們就走吧。現在就走！」*");
	say();
	abort;
	goto labelFunc084F_02C2;
labelFunc084F_02BE:
	message("「那麼我希望這個遊戲能娛樂到你，因為它讓你的戰友們非常擔心。」*");
	say();
labelFunc084F_02C2:
	UI_remove_npc_face(0xFFFC);
labelFunc084F_02C9:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「現在還有最後一項對你友誼會忠誠度的考驗。我想你現在應該已經讀過《友誼會之書》了。我必須問你兩個問題。答案可以在書中找到。」Batlin 謙虛地笑了笑。「我是作者，你知道嗎？好吧，沒關係。我們開始吧。」");
	say();
	Func0852();
	if (!(!gflags[0x0038])) goto labelFunc084F_0328;
	message("「太棒了，聖者！」");
	say();
	message("你強忍著猶豫的顫抖，從高腳杯中深吸了一大口。Batlin 走到你面前。「願這個消息傳遍四方，我們最新的成員正是聖者！」");
	say();
	message("其他友誼會成員高興地歡呼。");
	say();
	var0013 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	gflags[0x0091] = true;
	gflags[0x0006] = true;
	Func0911(0x01F4);
	if (!var0013) goto labelFunc084F_0320;
	message("「請容許我頒發友誼會獎章給你。」Batlin 把獎章交給你。「請——隨時佩戴你的獎章，因為它對所有看到它的人來說，象徵著你與友誼會同行。立刻戴到你的脖子上！喔，還有……歡迎加入友誼會，聖者。」*");
	say();
	gflags[0x0090] = true;
	goto labelFunc084F_0324;
labelFunc084F_0320:
	message("「你負載太重了，無法接受友誼會獎章。你必須減輕負擔。」*");
	say();
labelFunc084F_0324:
	abort;
	goto labelFunc084F_0331;
labelFunc084F_0328:
	message("「親愛的聖者。你必須明白，你必須了解所有關於友誼會的事情，我才能接納你。請研讀你的《友誼會之書》然後再回來找我。」");
	say();
	message("你的頭腦似乎不太清楚。如果你聽不懂與你交談的另一個人的話，我也不會感到驚訝。」");
	say();
	abort;
labelFunc084F_0331:
	return;
}


