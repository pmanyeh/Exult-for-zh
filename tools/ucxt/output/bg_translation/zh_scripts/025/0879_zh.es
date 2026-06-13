#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090D 0x90D ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func0879 0x879 (var var0000, var var0001, var var0002)
{
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

	message("「你需要治療 (healing)、解毒 (curing) 還是復活 (resurrection) 嗎？」");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0879_0167;
	message("「你需要我的哪項服務？」");
	say();
	var0004 = ["heal", "cure poison", "resurrect"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "heal") || (var0005 == "cure poison"))) goto labelFunc0879_008F;
	if (!(var0005 == "heal")) goto labelFunc0879_0058;
	var0006 = "被治療";
	var0007 = var0000;
labelFunc0879_0058:
	if (!(var0005 == "cure poison")) goto labelFunc0879_006E;
	var0006 = "被解毒";
	var0007 = var0001;
labelFunc0879_006E:
	message("「你希望誰");
	message(var0006);
	message("？」");
	say();
	var0008 = Func090D();
	if (!(var0008 == 0x0000)) goto labelFunc0879_008F;
	message("「雖然我想要你的生意，但我很高興看到不需要我的服務！」");
	say();
	goto labelFunc0879_016B;
labelFunc0879_008F:
	if (!(var0005 == "resurrect")) goto labelFunc0879_00E1;
	var0009 = UI_get_avatar_ref();
	var000A = UI_find_nearest(var0009, 0x0190, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc0879_00CA;
	var000A = UI_find_nearest(var0009, 0x019E, 0x0019);
labelFunc0879_00CA:
	if (!(var000A == 0x0000)) goto labelFunc0879_00DB;
	message("「好吧，我似乎沒看到任何人需要我的幫助。除非你的背包裡裝著某個人……」他笑了起來。*");
	say();
	goto labelFunc0879_016B;
labelFunc0879_00DB:
	var0007 = var0002;
labelFunc0879_00E1:
	message("「我的價格是 ");
	message(var0007);
	message(" 枚金幣。你同意嗎？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0879_0160;
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var0007)) goto labelFunc0879_0159;
	if (!(var0005 == "heal")) goto labelFunc0879_012A;
	Func091D(var0008, var0007);
	goto labelFunc0879_0156;
labelFunc0879_012A:
	if (!(var0005 == "cure poison")) goto labelFunc0879_0140;
	Func091E(var0008, var0007);
	goto labelFunc0879_0156;
labelFunc0879_0140:
	if (!(var0005 == "resurrect")) goto labelFunc0879_0156;
	Func091F(var000A, var0007);
	goto labelFunc0879_0156;
labelFunc0879_0156:
	goto labelFunc0879_015D;
labelFunc0879_0159:
	message("「你沒有那麼多金幣！也許你可以帶更多的錢回來再購買這項服務。」");
	say();
labelFunc0879_015D:
	goto labelFunc0879_0164;
labelFunc0879_0160:
	message("「那麼你必須去別處尋找這項服務了。」");
	say();
labelFunc0879_0164:
	goto labelFunc0879_016B;
labelFunc0879_0167:
	message("「很好。如果你以後需要我的服務，我會隨時恭候。」");
	say();
labelFunc0879_016B:
	UI_pop_answers();
	return;
}


