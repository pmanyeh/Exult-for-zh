#game "blackgate"
// externs
extern void Func0893 0x893 ();
extern void Func0892 0x892 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0891 0x891 ();
extern void Func0890 0x890 ();
extern void Func0894 0x894 (var var0000);

void Func03F7 shape#(0x3F7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc03F7_0138;
	if (!UI_get_cont_items(item, 0x031D, 0x00F3, 0x0004)) goto labelFunc03F7_010C;
	UI_show_npc_face(0xFEE0, 0x0000);
	if (!gflags[0x0328]) goto labelFunc03F7_002C;
	Func0893();
labelFunc03F7_002C:
	if (!(!gflags[0x031C])) goto labelFunc03F7_0036;
	Func0892();
labelFunc03F7_0036:
	if (!gflags[0x031F]) goto labelFunc03F7_0076;
	if (!(!gflags[0x0322])) goto labelFunc03F7_0076;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0090, 0xFE99);
	if (!var0000) goto labelFunc03F7_0076;
	message("「你身上有关于 Castambre 之石的书吗？」");
	say();
	if (!Func090A()) goto labelFunc03F7_0072;
	message("他的眼睛流露出希望。当他从你手中接过书时，看起来几乎像是在微笑。」");
	say();
	Func0891();
	goto labelFunc03F7_0076;
labelFunc03F7_0072:
	message("「那真是，太可惜了，」他摇着头悲伤地说。");
	say();
labelFunc03F7_0076:
	if (!(!gflags[0x0314])) goto labelFunc03F7_00DC;
	message("「向你致敬，尊贵的人。我只能假设我出现在这里是你所为。」很快就可以明显看出，这个生物比他倒下的同伴拥有更强的说话能力。");
	say();
	if (!gflags[0x031C]) goto labelFunc03F7_00D0;
	var0001 = UI_find_nearby(0xFE9C, 0x019E, 0x0028, 0x0000);
	enum();
labelFunc03F7_009B:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc03F7_00CD;
	var0005 = UI_get_item_frame(var0004);
	if (!((var0005 == 0x0004) || (var0005 == 0x0005))) goto labelFunc03F7_00CA;
	message("刚被复活的魔像低头盯着 Bollux 俯卧、毫无生气的身体。他很快擡起头看着你。~「发、发生了什么事？」");
	say();
	Func0890();
	return;
labelFunc03F7_00CA:
	goto labelFunc03F7_009B;
labelFunc03F7_00CD:
	goto labelFunc03F7_00D9;
labelFunc03F7_00D0:
	message("「现在请容我告退，因为我要去找我的守卫同伴了。」*");
	say();
	gflags[0x0314] = true;
	abort;
labelFunc03F7_00D9:
	goto labelFunc03F7_0109;
labelFunc03F7_00DC:
	if (!gflags[0x031E]) goto labelFunc03F7_00EC;
	message("「你好，朋友。希望我能以某种方式协助你。」");
	say();
	Func0890();
	goto labelFunc03F7_0109;
labelFunc03F7_00EC:
	message("「你是来协助我治愈我兄弟的吗？」");
	say();
	if (!Func090A()) goto labelFunc03F7_0104;
	message("「很好。我很高兴能称你为朋友。」");
	say();
	gflags[0x031E] = true;
	Func0890();
	goto labelFunc03F7_0109;
labelFunc03F7_0104:
	message("「那么快走开，我还有工作要做！」*");
	say();
	abort;
labelFunc03F7_0109:
	goto labelFunc03F7_0138;
labelFunc03F7_010C:
	if (!(UI_get_cont_items(item, 0x031D, 0x00F4, 0x0004) || (UI_get_item_quality(UI_find_nearby(item, 0x031D, 0x0001, 0x00B0)) == 0x00F4))) goto labelFunc03F7_0138;
	Func0894(item);
labelFunc03F7_0138:
	return;
}


