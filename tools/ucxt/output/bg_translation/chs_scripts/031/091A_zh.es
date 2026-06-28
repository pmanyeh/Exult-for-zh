#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func091A 0x91A ()
{
	var var0000;
	var var0001;

	message("「友谊会通过所谓的『内在力量的三位一体 (Triad of Inner Strength)』来推广『自信认知 (sanguine cognition)』的理念，这是一种将自信的思想秩序应用于生活的方法。这三合一理念就是三个基本原则，当它们结合在一起应用时，能够让人们在生活中更具创造力、更满足也更成功。它们分别是：『致力合一 (Strive For Unity)』、『信赖你的兄弟 (Trust Thy Brother)』和『价值先行于报偿 (Worthiness Precedes Reward)』。『致力合一』基本上意味着人们应该合作并共同努力。『信赖你的兄弟』意味着我们都是一样的，我们不应该互相憎恨或恐惧。『价值先行于报偿』则意味着我们每个人都必须努力使自己配得上我们在生活中想要得到的东西。」");
	say();
	var0000 = UI_wearing_fellowship();
	if (!(!var0000)) goto labelFunc091A_0030;
	message("「你想加入吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc091A_0029;
	message("「那你应该立刻去不列颠城的友谊会大厅总部找巴特林。」");
	say();
	goto labelFunc091A_002D;
labelFunc091A_0029:
	message("「喔。好吧，也许你下次能够得到启发。」");
	say();
labelFunc091A_002D:
	goto labelFunc091A_0034;
labelFunc091A_0030:
	message("「喔！我才注意到你的徽章！你已经知道这一切了！你是我们的一员！请原谅我喋喋不休地说个不停！」");
	say();
labelFunc091A_0034:
	return;
}
