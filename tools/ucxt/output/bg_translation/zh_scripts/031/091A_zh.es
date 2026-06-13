#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func091A 0x91A ()
{
	var var0000;
	var var0001;

	message("「友誼會透過所謂的『內在力量的三位一體 (Triad of Inner Strength)』來推廣『自信認知 (sanguine cognition)』的理念，這是一種將自信的思想秩序應用於生活的方法。這三合一理念就是三個基本原則，當它們結合在一起應用時，能夠讓人們在生活中更具創造力、更滿足也更成功。它們分別是：『致力合一 (Strive For Unity)』、『信賴你的兄弟 (Trust Thy Brother)』和『價值先行於報償 (Worthiness Precedes Reward)』。『致力合一』基本上意味著人們應該合作並共同努力。『信賴你的兄弟』意味著我們都是一樣的，我們不應該互相憎恨或恐懼。『價值先行於報償』則意味著我們每個人都必須努力使自己配得上我們在生活中想要得到的東西。」");
	say();
	var0000 = UI_wearing_fellowship();
	if (!(!var0000)) goto labelFunc091A_0030;
	message("「你想加入嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc091A_0029;
	message("「那你應該立刻去 Britain 的友誼會大廳總部找 Batlin。」");
	say();
	goto labelFunc091A_002D;
labelFunc091A_0029:
	message("「喔。好吧，也許你下次能夠得到啟發。」");
	say();
labelFunc091A_002D:
	goto labelFunc091A_0034;
labelFunc091A_0030:
	message("「喔！我才注意到你的徽章！你已經知道這一切了！你是我們的一員！請原諒我喋喋不休地說個不停！」");
	say();
labelFunc091A_0034:
	return;
}
