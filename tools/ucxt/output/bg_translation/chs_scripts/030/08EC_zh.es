#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func08EC 0x8EC ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func08F7(0xFFFE);
	var0001 = Func08F7(0xFFFF);
	var0002 = Func08F7(0xFFFD);
	message("「狮子 Hubert 既傲慢又虚荣，~尤其对牠那优雅的鬃毛感到自豪。~但这种自负一点也不合适，~而狮子 Hubert 注定要摔个跟头。」");
	say();
	message("有一天，当他在岩石上磨爪子时~他受到了一个最可怕、最糟糕的惊吓。~一颗炽热的火星飞到半空中，~掉到他的头上，点燃了他的头发。");
	say();
	message("伴随着惊讶的吼声，他像一道闪电般飞奔而去，~穿过丛林直奔 Zamboozi 溪流。~他扑通一声跳进水里！溅起一阵水花，~然后顶着满头短毛浮出水面。");
	say();
	message("一开始他只是张大嘴巴盯着看~看着那团飘向南方的黑烟。~然后他用爪子摸了摸耳朵后面~他突然意识到他最害怕的事情发生了。");
	say();
	message("「我毁了，」他大喊，「喔我该怎么办！~我宁可死掉或去动物园里住！~如果有人看到我，喔那多丢脸，~所以我最好找个好地方躲起来！」");
	say();
	UI_pop_answers();
	return;
}


