#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08B1 0x8B1 ();
extern void Func08B2 0x8B2 ();

void Func08AF 0x8AF ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = UI_get_party_list();
	if (!(!(UI_get_npc_object(0xFF6D) in var0000))) goto labelFunc08AF_0059;
	message("\"Is there a problem? Art thou confounded by thy task?\"");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc08AF_0039;
	message("\"Well then, I suggest that thou hasten to finish thy task, lest the souls of the well perish before thou art done.*\"");
	say();
	abort;
	goto labelFunc08AF_0056;
labelFunc08AF_0039:
	message("\"Canst thou not find the spirits of the town?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc08AF_0051;
	message("\"Well then, I suggest that thou make haste, lest the souls of the well perish.\"*");
	say();
	abort;
	goto labelFunc08AF_0056;
labelFunc08AF_0051:
	message("\"Ah, then it is good that thou hast returned. The Mayor knows most of the townsfolk and can tell thee of them.\"*");
	say();
	abort;
labelFunc08AF_0056:
	goto labelFunc08AF_008F;
labelFunc08AF_0059:
	if (!(!gflags[0x01A3])) goto labelFunc08AF_007F;
	message("\"Very good, now thou shalt take the Mayor to the well and he must enter it of his own free will. When he does that, the souls of the island and the well will be free to go on to their destiny. Unfortunately, Mayor Forsythe will be lost for all time.\"");
	say();
	var0003 = Func08F7(0xFF6D);
	if (!var0003) goto labelFunc08AF_0077;
	message(" He looks sadly at the ghostly gentleman.");
	say();
labelFunc08AF_0077:
	message("*");
	say();
	abort;
	goto labelFunc08AF_008F;
labelFunc08AF_007F:
	if (!(!gflags[0x01AB])) goto labelFunc08AF_008C;
	Func08B1();
	goto labelFunc08AF_008F;
labelFunc08AF_008C:
	Func08B2();
labelFunc08AF_008F:
	return;
}


