#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func08B8 0x8B8 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	UI_push_answers();
	var0000 = 0x0001;
	var0001 = 0x0001;
	message("\"Excellent! Dost thou have some eggs for me?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc08B8_00A4;
	message("\"Very good! Let me see how many thou dost have...\"");
	say();
	var0003 = UI_count_objects(0xFE9B, 0x0179, 0xFE99, 0x0018);
	if (!(var0003 == 0x0000)) goto labelFunc08B8_0049;
	message("\"But thou dost not have a single one in thy possession! Thou dost waste my time!\"*");
	say();
	abort;
	goto labelFunc08B8_00A1;
labelFunc08B8_0049:
	var0004 = ((var0003 / var0001) * var0000);
	message("\"Lovely! ");
	message(var0003);
	message("! That means I owe thee ");
	message(var0004);
	message(" gold. Here thou art! I shall take the eggs from thee now!\"");
	say();
	var0005 = UI_add_party_items(var0004, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc08B8_009D;
	var0006 = UI_remove_party_items(var0003, 0x0179, 0xFE99, 0x0018, true);
	message("\"Come back and work for me at any time!\"*");
	say();
	abort;
	goto labelFunc08B8_00A1;
labelFunc08B8_009D:
	message("\"If thou wouldst travel in a lighter fashion, thou wouldst have hands to take my gold!\"");
	say();
labelFunc08B8_00A1:
	goto labelFunc08B8_00A8;
labelFunc08B8_00A4:
	message("\"No? What hast thou been doing with my chickens? Art thou some kind of fowl pervert?\"");
	say();
labelFunc08B8_00A8:
	UI_pop_answers();
	return;
}


