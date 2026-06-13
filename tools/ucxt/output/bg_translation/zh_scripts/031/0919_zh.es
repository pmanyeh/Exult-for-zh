#game "blackgate"
void Func0919 0x919 ()
{
	var var0000;
	var var0001;

	var0000 = UI_wearing_fellowship();
	var0001 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0001)) goto labelFunc0919_0022;
	message("「友誼會是一個由心靈探索者組成的協會，致力於激發人類最高的潛能，並與所有人無私地分享這種理念。友誼會是在二十年前由 Batlin 在 Lord British 的全力批准和支持下成立的。」");
	say();
labelFunc0919_0022:
	if (!(var0001 == 0x0002)) goto labelFunc0919_0030;
	message("「友誼會是一個向所有不列顛尼亞人民開放的美妙組織。透過學習其理念，我學到了很多，這幫助我過上了最充實的生活。透過友誼會，我能夠實現我在生活中的目標，並且因為加入而成為一個更好的人。」");
	say();
labelFunc0919_0030:
	if (!(var0001 == 0x0003)) goto labelFunc0919_003E;
	message("「友誼會是一個致力於一位名叫 Batlin 的偉人教導的理念團體。在聖者不在的日子裡，Batlin 成了不列顛尼亞人民的一種精神之父。透過他的演講和著作，他改變了許多人的生活，包括我自己的生活。」");
	say();
labelFunc0919_003E:
	if (!(var0001 == 0x0004)) goto labelFunc0919_004C;
	message("「友誼會是一個近年來在不列顛尼亞人民中大受歡迎的團體。雖然表面上看，它可能只是一個研究其獨特理念的學術協會，但其教義卻具有永遠改變不列顛尼亞社會形態的力量。它的儀式是非常感人的體驗。」");
	say();
labelFunc0919_004C:
	UI_add_answer("理念");
	return;
}


