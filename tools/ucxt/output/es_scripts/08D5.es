#game "blackgate"
void Func08D5 0x8D5 ()
{
	var var0000;

	if (!gflags[0x003A]) goto labelFunc08D5_000F;
	var0000 = "It is most fortunate that thou fell so near our shelter. Thou must have a protector watching over thee.@";
	goto labelFunc08D5_0015;
labelFunc08D5_000F:
	var0000 = "It was Elizabeth and Abraham who found thee and delivered thee to us.";
labelFunc08D5_0015:
	message("\"Thank goodness thou art with us again! We were all very worried over thy condition.~~\"Thou hast been unconscious for so long that we thought thou hadst lost thy life!~~");
	message(var0000);
	message("*");
	say();
	if (!(!gflags[0x003A])) goto labelFunc08D5_00C6;
	if (!(!gflags[0x0087])) goto labelFunc08D5_0031;
	message("\"They brought thee here along their way to Britain.\"");
	say();
labelFunc08D5_0031:
	if (!(gflags[0x0087] && (!gflags[0x0105]))) goto labelFunc08D5_0040;
	message("\"They brought thee here along their way to Minoc.\"");
	say();
labelFunc08D5_0040:
	if (!(gflags[0x0105] && (!gflags[0x0217]))) goto labelFunc08D5_0053;
	message("\"They brought thee to us as they were on their way here to Paws, but they have since left for Jhelom.\"");
	say();
	gflags[0x0217] = true;
labelFunc08D5_0053:
	if (!(gflags[0x0217] && (!gflags[0x016B]))) goto labelFunc08D5_0062;
	message("\"They brought thee here along their way to Jhelom.\"");
	say();
labelFunc08D5_0062:
	if (!(gflags[0x016B] && (!gflags[0x0088]))) goto labelFunc08D5_0071;
	message("\"They brought thee here along their way to Britain.\"");
	say();
labelFunc08D5_0071:
	if (!(gflags[0x0088] && (!gflags[0x0284]))) goto labelFunc08D5_0080;
	message("\"They brought thee here along their way to Vesper.\"");
	say();
labelFunc08D5_0080:
	if (!(gflags[0x0284] && (!gflags[0x01EF]))) goto labelFunc08D5_008F;
	message("\"They brought thee here along their way to Moonglow.\"");
	say();
labelFunc08D5_008F:
	if (!(gflags[0x01EF] && (!gflags[0x0243]))) goto labelFunc08D5_009E;
	message("\"They brought thee here along their way to Terfin.\"");
	say();
labelFunc08D5_009E:
	if (!(gflags[0x0243] && (!gflags[0x0264]))) goto labelFunc08D5_00AD;
	message("\"They brought thee here along their way to the Fellowship meditation retreat near Serpent's Hold.\"");
	say();
labelFunc08D5_00AD:
	if (!(gflags[0x0264] && (!gflags[0x02A8]))) goto labelFunc08D5_00BC;
	message("\"They brought thee here along their way to Buccaneer's Den.\"");
	say();
labelFunc08D5_00BC:
	if (!gflags[0x02A8]) goto labelFunc08D5_00C6;
	message("\"They brought thee here and then returned to Buccaneer's Den.\"");
	say();
labelFunc08D5_00C6:
	if (!gflags[0x0026]) goto labelFunc08D5_00D0;
	message("\"It is truly mysterious how this continues to happen to thee!\"");
	say();
labelFunc08D5_00D0:
	return;
}


