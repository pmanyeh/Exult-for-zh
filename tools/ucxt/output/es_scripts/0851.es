#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func0851 0x851 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(!gflags[0x00D6])) goto labelFunc0851_000E;
	message("\"I need thee to deliver this sealed package unopened to Elynor, the leader of our Fellowship branch in Minoc. Elynor will reward thee upon receiving it, thou dost have my word. May I trust thee to do it?\"");
	say();
	goto labelFunc0851_0012;
labelFunc0851_000E:
	message("\"Hast thou reconsidered thy task? Wilt thou deliver the package to Elynor in Minoc?\"");
	say();
labelFunc0851_0012:
	var0000 = Func090A();
	if (!var0000) goto labelFunc0851_0070;
	var0001 = UI_find_object(0xFFE6, 0x031E, 0xFE99, 0xFE99);
	var0002 = UI_set_last_created(var0001);
	var0003 = UI_give_last_created(0xFE9C);
	if (!var0003) goto labelFunc0851_005A;
	message("\"Excellent! Here it is. Thou must now be on thy way!\"*");
	say();
	gflags[0x008F] = true;
	Func0911(0x00C8);
	abort;
labelFunc0851_005A:
	var0003 = UI_give_last_created(0xFFE6);
	message("\"Zounds! Thine hands are too full to take the box. Please divest thyself of some of thy belongings.\"*");
	say();
	gflags[0x00D7] = true;
	abort;
	goto labelFunc0851_0079;
labelFunc0851_0070:
	message("\"Avatar, I know that thou hast gone on many quests. The quest for the spiritual is often the most fearsome and elusive one of all, as we both know. Do not be afraid of thyself, Avatar, for that is what prevents us from doing that which we must do. We shall speak of this again once thou hast reconsidered. Ask me about the package again tomorrow.\"*");
	say();
	gflags[0x00D6] = true;
	abort;
labelFunc0851_0079:
	return;
}


