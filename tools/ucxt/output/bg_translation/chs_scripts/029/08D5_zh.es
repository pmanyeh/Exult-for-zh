#game "blackgate"
void Func08D5 0x8D5 ()
{
	var var0000;

	if (!gflags[0x003A]) goto labelFunc08D5_000F;
	var0000 = "你倒下的地方离我们的庇护所这么近真是太幸运了。你一定有位守护者在照看着你。@";
	goto labelFunc08D5_0015;
labelFunc08D5_000F:
	var0000 = "是 Elizabeth 和 Abraham 发现了你，并把你送到我们这里来的。";
labelFunc08D5_0015:
	message("「谢天谢地，你又回到我们身边了！我们都非常担心你的状况。~~」「你昏迷了这么久，我们还以为你没命了呢！~~");
	message(var0000);
	message("*");
	say();
	if (!(!gflags[0x003A])) goto labelFunc08D5_00C6;
	if (!(!gflags[0x0087])) goto labelFunc08D5_0031;
	message("「他们在前往不列颠城的路上顺道把你带来这里。」");
	say();
labelFunc08D5_0031:
	if (!(gflags[0x0087] && (!gflags[0x0105]))) goto labelFunc08D5_0040;
	message("「他们在前往 Minoc 的路上顺道把你带来这里。」");
	say();
labelFunc08D5_0040:
	if (!(gflags[0x0105] && (!gflags[0x0217]))) goto labelFunc08D5_0053;
	message("「他们在来 Paws 的路上把你带来给我们，但他们之后已经离开前往 Jhelom 了。」");
	say();
	gflags[0x0217] = true;
labelFunc08D5_0053:
	if (!(gflags[0x0217] && (!gflags[0x016B]))) goto labelFunc08D5_0062;
	message("「他们在前往 Jhelom 的路上顺道把你带来这里。」");
	say();
labelFunc08D5_0062:
	if (!(gflags[0x016B] && (!gflags[0x0088]))) goto labelFunc08D5_0071;
	message("「他们在前往不列颠城的路上顺道把你带来这里。」");
	say();
labelFunc08D5_0071:
	if (!(gflags[0x0088] && (!gflags[0x0284]))) goto labelFunc08D5_0080;
	message("「他们在前往 Vesper 的路上顺道把你带来这里。」");
	say();
labelFunc08D5_0080:
	if (!(gflags[0x0284] && (!gflags[0x01EF]))) goto labelFunc08D5_008F;
	message("「他们在前往 Moonglow 的路上顺道把你带来这里。」");
	say();
labelFunc08D5_008F:
	if (!(gflags[0x01EF] && (!gflags[0x0243]))) goto labelFunc08D5_009E;
	message("「他们在前往 Terfin 的路上顺道把你带来这里。」");
	say();
labelFunc08D5_009E:
	if (!(gflags[0x0243] && (!gflags[0x0264]))) goto labelFunc08D5_00AD;
	message("「他们在前往 Serpent's Hold 附近的友谊会冥想营的路上顺道把你带来这里。」");
	say();
labelFunc08D5_00AD:
	if (!(gflags[0x0264] && (!gflags[0x02A8]))) goto labelFunc08D5_00BC;
	message("「他们在前往海盗巢穴 (Buccaneer's Den)的路上顺道把你带来这里。」");
	say();
labelFunc08D5_00BC:
	if (!gflags[0x02A8]) goto labelFunc08D5_00C6;
	message("「他们把你带来这里，然后就返回海盗巢穴 (Buccaneer's Den)了。」");
	say();
labelFunc08D5_00C6:
	if (!gflags[0x0026]) goto labelFunc08D5_00D0;
	message("「这事怎么会不断发生在你身上，真是太不可思议了！」");
	say();
labelFunc08D5_00D0:
	return;
}


