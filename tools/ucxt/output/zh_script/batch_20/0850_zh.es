#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0850 0x850 ()
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

	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	message("儀式開始了，Batlin 站在聚集的友誼會成員面前。大廳裡充滿了雷鳴般的歡呼聲。他們以敬畏和純粹的崇拜交織的目光看著他。Batlin 站著，在熱烈的歡迎中沐浴了片刻，臉上掛著勝利的微笑。他輕輕一揮手，人群便安靜了下來。");
	say();
	message("「很高興今晚能在這裡見到你們！」Batlin 說。「你們確實讓我為能成為我們所深愛的友誼會的一員而感到自豪。」又爆發出一陣掌聲。");
	say();
	message("「在你的心中，為你與友誼會同行而感到高興吧！Britannia 的人民生活在虛幻的思想和情感的狂熱狀態中。但我今晚在這裡看到的人，都是在這世界上尋求真善美的人！他們走在通往真正認知的道路上。但是你如何找到你的路呢？問任何一個友誼會成員，他們都會告訴你！通往完全覺知的道路很容易找到。一個人必須將內在力量三位一體 (Triad) 應用到他的生活中。」");
	say();
	message("「內在力量三位一體是一系列三個價值觀，可以使心靈達到樂觀認知的完美狀態。第一個價值觀是『追求團結』。當全世界所有人都想完成某件事時，這件事就會實現。因此，一旦全世界的人都朝著同一個目標努力，就沒有什麼是不可能的。想像一下！一個可以實現任何夢想、可以達成任何善行的世界。但正如你透過觀察我們自己這個悲慘的社會所能清楚看到的，當全世界的人不團結時，能完成任何事情簡直是個奇蹟！");
	say();
	message("「第二個價值觀是『信任兄弟』。你必須放棄你的恐懼、偏見和猜疑。看看你自己吧！在質疑任何事情之前，先質疑你自己！世界是一個自然平衡在你甚至沒有意識到的情況下每秒都在保護你的地方！如果你把所有的時間都花在質疑你的兄弟上，你在這個世界上能成就什麼？！他有我這麼努力嗎？他的真實動機是什麼？當你浪費精力去想這些時，他看到你，也開始對你想著同樣的事情。因此世界被削弱了！");
	say();
	message("「第三個價值觀是『配得才配得賞』。我們當中沒有一個人是沒有慾望的。世上許多的苦難都可以追溯到未滿足的慾望。但等一下！你憑什麼得到你想要的東西？大多數人在這一生中都會得到他們應得的。如果你配不上你的慾望，那麼如果你的慾望沒有實現，你就不應該感到驚訝。只有當你變得配得時，你才對實現你的慾望敞開了大門。慾望是一件奇怪的事。許多人渴望他們並不真正想要的東西。他們真正渴望的是『配得』本身！");
	say();
	message("「我剛剛已經告訴你們遵循內在力量三位一體所需要知道的一切。這些教導很簡單。衡量你理解程度的真正標準，在於你將多麼絕對地將它們應用到你的生活中。你現在已經知道了你將需要的所有東西。你不需要正在消亡的魔法藝術的奧秘知識。你不需要治療師不確定的手法和他有限的知識。你所需要的就是不斷地尋求自己最好的一面，並生活在那些願意做同樣事情的人當中。只有那樣，你才是真正地與友誼會同行。」");
	say();
	message("「現在我認為是聽聽我們成員分享的好時機。聽聽他們與我們分享友誼會如何為他們的生活帶來積極的改變。」");
	say();
	var0002 = Func08F7(0xFFD7);
	if (!var0002) goto labelFunc0850_005A;
	UI_show_npc_face(0xFFD7, 0x0000);
	message("「友誼會讓我看到我一直害怕自己，我必須敞開心扉去接受生活的體驗，」Candice 說。*");
	say();
	UI_remove_npc_face(0xFFD7);
labelFunc0850_005A:
	var0003 = Func08F7(0xFFD5);
	if (!var0003) goto labelFunc0850_008C;
	UI_show_npc_face(0xFFD5, 0x0000);
	message("「友誼會幫助我對人更加誠實，」Patterson 說。*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「謝謝你的分享，Patterson。」*");
	say();
	UI_remove_npc_face(0xFFD5);
labelFunc0850_008C:
	var0004 = Func08F7(0xFFD3);
	if (!var0004) goto labelFunc0850_00B0;
	UI_show_npc_face(0xFFD3, 0x0000);
	message("「友誼會教會我如何更好地履行身為皇家果園管理員的職責，」Figg 說。*");
	say();
	UI_remove_npc_face(0xFFD3);
labelFunc0850_00B0:
	var0005 = Func08F7(0xFFCB);
	if (!var0005) goto labelFunc0850_00D4;
	UI_show_npc_face(0xFFCB, 0x0000);
	message("「友誼會教會我，首先也是最重要的是，要尊重他人，」Gaye 說。*");
	say();
	UI_remove_npc_face(0xFFCB);
labelFunc0850_00D4:
	var0006 = Func08F7(0xFFC9);
	if (!var0006) goto labelFunc0850_00F8;
	UI_show_npc_face(0xFFC9, 0x0000);
	message("「加入友誼會後，我學會了如何成為一個真正的男人，」Grayson 說。*");
	say();
	UI_remove_npc_face(0xFFC9);
labelFunc0850_00F8:
	var0007 = Func08F7(0xFFC6);
	if (!var0007) goto labelFunc0850_012A;
	UI_show_npc_face(0xFFC6, 0x0000);
	message("「友誼會正在幫助我從個人和財務破產的邊緣中恢復過來，」Gordon 說。*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「你說得對，兄弟！」*");
	say();
	UI_remove_npc_face(0xFFC6);
labelFunc0850_012A:
	var0008 = Func08F7(0xFFC5);
	if (!var0008) goto labelFunc0850_014E;
	UI_show_npc_face(0xFFC5, 0x0000);
	message("「友誼會將我從平庸的虛幻吸引力中解放出來，」Sean 說。*");
	say();
	UI_remove_npc_face(0xFFC5);
labelFunc0850_014E:
	var0009 = Func08F7(0xFFC1);
	if (!var0009) goto labelFunc0850_0172;
	UI_show_npc_face(0xFFC1, 0x0000);
	message("「在友誼會裡，我學到我需要將我的一生奉獻給一個特殊的目標，」Millie 說。*");
	say();
	UI_remove_npc_face(0xFFC1);
labelFunc0850_0172:
	var000A = Func08F7(0xFFFE);
	if (!var000A) goto labelFunc0850_0196;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「這整個儀式和裡面的每一個人都讓我毛骨悚然！」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0850_0196:
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0850_01BA;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看到這麼多人生活中沒有更好的事可做，只能盲目地跟隨這個可疑的精神領袖，真是一件可悲的事。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0850_01BA:
	var000C = Func08F7(0xFFFD);
	if (!var000C) goto labelFunc0850_01DE;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「Britannia 墮落到如此地步，竟然讓自己對友誼會這樣的團體敞開大門，真是一件可悲的事。」*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0850_01DE:
	var000D = Func08F7(0xFFFC);
	if (!var000D) goto labelFunc0850_0202;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我甚至無聊到無法在友誼會的儀式上睜開眼睛，真是一件可悲的事！」*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0850_0202:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("看著 Batlin 和其他人，你有一種感覺，友誼會的儀式將會持續到深夜。現在是個溜走的好時機，不會引起太多注意……*");
	say();
	abort;
	return;
}


