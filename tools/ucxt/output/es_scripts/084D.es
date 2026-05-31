#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func084F 0x84F ();
extern void Func084E 0x84E ();

void Func084D 0x84D ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_part_of_day();
	if (!(gflags[0x0096] && gflags[0x0097])) goto labelFunc084D_0059;
	message("\"Well, thou didst certainly attempt to complete the quest. I cannot understand why the chest in Destard was empty. But we shall forget it, shall we?");
	say();
	message("\"Now that thou hast worked a little for The Fellowship, and hast learned what we stand for, dost thou still wish to join?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc084D_0051;
	gflags[0x008D] = true;
	message("\"Then thou art most welcome to The Fellowship. ");
	say();
	if (!(!(var0000 == 0x0007))) goto labelFunc084D_0040;
	message("\"Thou wilt officially be inducted during our nightly meeting this evening. Please come, and thou shalt receive thy medallion then. Once again, we thank thee, Avatar.\"*");
	say();
	abort;
	goto labelFunc084D_0047;
labelFunc084D_0040:
	message("\"The Ceremony shall begin.\"");
	say();
	Func084F();
labelFunc084D_0047:
	UI_remove_answer("join");
	goto labelFunc084D_0056;
labelFunc084D_0051:
	message("\"I can see that thou art not yet ready to take such a courageous step in thy thinking and in thy life. But do remember what we spoke of today, my friend! Perhaps in time thou wilt become ready.\"*");
	say();
	abort;
labelFunc084D_0056:
	goto labelFunc084D_007C;
labelFunc084D_0059:
	message("\"Ah, but first things first. I recommend that thou takest our Examination to determine if thou art truly in need of The Fellowship's teachings. Dost thou want to take the test?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc084D_0077;
	UI_push_answers();
	Func084E();
	UI_pop_answers();
	goto labelFunc084D_007C;
labelFunc084D_0077:
	message("\"Perhaps another time, then.\"*");
	say();
	abort;
labelFunc084D_007C:
	return;
}


