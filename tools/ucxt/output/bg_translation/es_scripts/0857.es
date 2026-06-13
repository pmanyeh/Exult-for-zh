#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func0857 0x857 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	UI_push_answers();
	var0000 = 0x0001;
	var0001 = 0x0001;
	message("\"Excellent! Hast thou brought some pumpkins for me?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0857_00D5;
	message("\"Very good! Let me see how many thou dost have...\"");
	say();
	var0003 = UI_count_objects(0xFE9B, 0x0179, 0xFE99, 0x0014);
	var0004 = UI_count_objects(0xFE9B, 0x0179, 0xFE99, 0x0015);
	var0005 = (var0003 + var0004);
	if (!(var0005 == 0x0000)) goto labelFunc0857_0066;
	message("\"But thou dost not have a single one in thy possession! Thou art as looney as Mack!\"*");
	say();
	abort;
	goto labelFunc0857_00D2;
labelFunc0857_0066:
	var0006 = ((var0005 / var0001) * var0000);
	message("\"Lovely! ");
	message(var0005);
	message("! That means I owe thee ");
	message(var0006);
	message(" gold. Here thou art! I shall take the pumpkins from thee now!\"");
	say();
	var0007 = UI_add_party_items(var0006, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc0857_00CE;
	var0008 = UI_remove_party_items(var0003, 0x0179, 0xFE99, 0x0014, true);
	var0008 = UI_remove_party_items(var0004, 0x0179, 0xFE99, 0x0015, true);
	message("\"Come back and work for me at any time!\"*");
	say();
	abort;
	goto labelFunc0857_00D2;
labelFunc0857_00CE:
	message("\"If thou wouldst travel in a lighter fashion, thou wouldst have hands to take my gold!\"");
	say();
labelFunc0857_00D2:
	goto labelFunc0857_00D9;
labelFunc0857_00D5:
	message("\"No? What hast thou been doing in my field? Thou art as worthless as most of the workers one finds!\"");
	say();
labelFunc0857_00D9:
	UI_pop_answers();
	return;
}


