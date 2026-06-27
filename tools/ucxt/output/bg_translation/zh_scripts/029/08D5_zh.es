#game "blackgate"
void Func08D5 0x8D5 ()
{
	var var0000;

	if (!gflags[0x003A]) goto labelFunc08D5_000F;
	var0000 = "你倒下的地方離我們的庇護所這麼近真是太幸運了。你一定有位守護者在照看著你。@";
	goto labelFunc08D5_0015;
labelFunc08D5_000F:
	var0000 = "是 Elizabeth 和 Abraham 發現了你，並把你送到我們這裡來的。";
labelFunc08D5_0015:
	message("「謝天謝地，你又回到我們身邊了！我們都非常擔心你的狀況。~~」「你昏迷了這麼久，我們還以為你沒命了呢！~~");
	message(var0000);
	message("*");
	say();
	if (!(!gflags[0x003A])) goto labelFunc08D5_00C6;
	if (!(!gflags[0x0087])) goto labelFunc08D5_0031;
	message("「他們在前往不列顛城的路上順道把你帶來這裡。」");
	say();
labelFunc08D5_0031:
	if (!(gflags[0x0087] && (!gflags[0x0105]))) goto labelFunc08D5_0040;
	message("「他們在前往 Minoc 的路上順道把你帶來這裡。」");
	say();
labelFunc08D5_0040:
	if (!(gflags[0x0105] && (!gflags[0x0217]))) goto labelFunc08D5_0053;
	message("「他們在來 Paws 的路上把你帶來給我們，但他們之後已經離開前往 Jhelom 了。」");
	say();
	gflags[0x0217] = true;
labelFunc08D5_0053:
	if (!(gflags[0x0217] && (!gflags[0x016B]))) goto labelFunc08D5_0062;
	message("「他們在前往 Jhelom 的路上順道把你帶來這裡。」");
	say();
labelFunc08D5_0062:
	if (!(gflags[0x016B] && (!gflags[0x0088]))) goto labelFunc08D5_0071;
	message("「他們在前往不列顛城的路上順道把你帶來這裡。」");
	say();
labelFunc08D5_0071:
	if (!(gflags[0x0088] && (!gflags[0x0284]))) goto labelFunc08D5_0080;
	message("「他們在前往 Vesper 的路上順道把你帶來這裡。」");
	say();
labelFunc08D5_0080:
	if (!(gflags[0x0284] && (!gflags[0x01EF]))) goto labelFunc08D5_008F;
	message("「他們在前往 Moonglow 的路上順道把你帶來這裡。」");
	say();
labelFunc08D5_008F:
	if (!(gflags[0x01EF] && (!gflags[0x0243]))) goto labelFunc08D5_009E;
	message("「他們在前往 Terfin 的路上順道把你帶來這裡。」");
	say();
labelFunc08D5_009E:
	if (!(gflags[0x0243] && (!gflags[0x0264]))) goto labelFunc08D5_00AD;
	message("「他們在前往 Serpent's Hold 附近的友誼會冥想營的路上順道把你帶來這裡。」");
	say();
labelFunc08D5_00AD:
	if (!(gflags[0x0264] && (!gflags[0x02A8]))) goto labelFunc08D5_00BC;
	message("「他們在前往海盜巢穴 (Buccaneer's Den)的路上順道把你帶來這裡。」");
	say();
labelFunc08D5_00BC:
	if (!gflags[0x02A8]) goto labelFunc08D5_00C6;
	message("「他們把你帶來這裡，然後就返回海盜巢穴 (Buccaneer's Den)了。」");
	say();
labelFunc08D5_00C6:
	if (!gflags[0x0026]) goto labelFunc08D5_00D0;
	message("「這事怎麼會不斷發生在你身上，真是太不可思議了！」");
	say();
labelFunc08D5_00D0:
	return;
}


