#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func0948 0x948 ()
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
	var0000 = 0x0004;
	var0001 = 0x0001;
	message("\"Excellent! Dost thou have some flour for me?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0948_00D7;
	message("\"Very good! Let me see how many sacks thou dost have...\"");
	say();
	var0003 = UI_count_objects(0xFE9B, 0x035F, 0xFE99, 0x000E);
	var0004 = UI_count_objects(0xFE9B, 0x035F, 0xFE99, 0x000F);
	if (!((var0003 == 0x0000) || (var0004 == 0x0000))) goto labelFunc0948_0064;
	message("\"But thou dost not have a single one in thy possession! Art thou trying to trick me? Get out of my shoppe!\"*");
	say();
	abort;
	goto labelFunc0948_00D4;
labelFunc0948_0064:
	var0005 = ((var0003 + (var0004 / var0001)) * var0000);
	message("\"Beautiful flour! ");
	message(var0003);
	message("! That means I owe thee ");
	message(var0005);
	message(" gold. Here thou art! I shall take the flour from thee now!\"");
	say();
	var0006 = UI_add_party_items(var0005, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc0948_00D0;
	var0007 = UI_remove_party_items(var0003, 0x035F, 0xFE99, 0x000E, true);
	var0008 = UI_remove_party_items(var0004, 0x035F, 0xFE99, 0x000F, true);
	message("\"Come back and work for me at any time!\"*");
	say();
	abort;
	goto labelFunc0948_00D4;
labelFunc0948_00D0:
	message("\"If thou dost travel in a lighter fashion, thou wouldst have hands to take my gold!\"");
	say();
labelFunc0948_00D4:
	goto labelFunc0948_00DB;
labelFunc0948_00D7:
	message("\"No? Then thou art a -loaf-er! Ha ha ha!\"");
	say();
labelFunc0948_00DB:
	UI_pop_answers();
	return;
}


