#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func08BA 0x8BA ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_is_pc_female();
	message("\"The fortune vill cost thee 20 gold. All right?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc08BA_0044;
	var0002 = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0002) goto labelFunc08BA_0038;
	message("Margareta takes your money.");
	say();
	goto labelFunc08BA_0041;
labelFunc08BA_0038:
	message("\"Thou dost not have enough gold.\"");
	say();
	message("Margareta turns away from you.*");
	say();
	abort;
labelFunc08BA_0041:
	goto labelFunc08BA_004D;
labelFunc08BA_0044:
	message("\"Never mind, then.\"");
	say();
	message("Margareta turns away from you.*");
	say();
	abort;
labelFunc08BA_004D:
	UI_play_music(0x001F, 0x0000);
	message("The gypsy woman peers into her crystal ball.");
	say();
	if (!(!var0000)) goto labelFunc08BA_0073;
	if (!gflags[0x00E2]) goto labelFunc08BA_006F;
	message("\"I see a voman standing by a shrine. She is in love vith thee. I do not see more on this subject.");
	say();
	goto labelFunc08BA_0073;
labelFunc08BA_006F:
	message("\"I see a voman standing by a shrine. She vill play an important role in thy life.");
	say();
labelFunc08BA_0073:
	message("\"Hmmm... The crystal ball is very murky...");
	say();
	if (!(!gflags[0x0006])) goto labelFunc08BA_0085;
	message("\"I see that thou must join The Fellowship if thou vantest to learn more about them and discover their true nature.");
	say();
	goto labelFunc08BA_0089;
labelFunc08BA_0085:
	message("\"Now that thou art a Fellowship member, thou vilt learn more about them and discover their true nature in due time.");
	say();
labelFunc08BA_0089:
	message("\"It is not very clear... ah, yes... there is a new evil that threatens Britannia. I see that thou shalt have to reckon vith it in the future.");
	say();
	message("\"The crystal ball tells me that the ether ov the vorld -- the substance that controls magic -- has been affected by this new evil presence.");
	say();
	message("\"I see further that this evil presence vill gain greater power during an event in the near future. This event has something to do vith the planets. Seek out a man at the observatory in Moonglow to learn more about this. I see that he has a device which will be very useful to thee. See him soon, for this event is drawing near.\"");
	say();
	message("\"Vhat is this? I see... I see... thou dost seek a Man vith a Hook. He is not thy true adversary, but finding him vill be necessary to complete thine ultimate quest.");
	say();
	message("\"Vait! I see that thou must seek audience vith the Time Lord. He is in trouble, although I cannot see vhat that trouble is. The Time Lord knows much about this new evil, so do not fail to seek him out.");
	say();
	message("\"To find the Time Lord, thou must first meet the Visps who live in the forest ov Yew. They are thy best link to him. The monks ov Empath Abbey may know how to contact the Visps.");
	say();
	message("\"The ball has grown dark. I see no more.\"");
	say();
	message("Margareta looks up at you and says, \"Thou dost face many dangers ahead. Take care.\"");
	say();
	message("With those words, Margareta slumps and closes her eyes to rest. She is obviously exhausted.*");
	say();
	if (!(!gflags[0x0100])) goto labelFunc08BA_00BA;
	Func0911(0x0032);
labelFunc08BA_00BA:
	gflags[0x0100] = true;
	return;
}


