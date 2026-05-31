#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func08D7 0x8D7 ()
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
	var var0009;

	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFF70);
	if (!(var0002 in var0001)) goto labelFunc08D7_00A2;
	var0003 = Func08F7(0xFF72);
	if (!var0003) goto labelFunc08D7_0051;
	UI_remove_from_party(0xFF70);
	message("The starcrossed lovers rush into each other's ghostly embrace. For a time it's hard to see where one spirit ends and the other begins, then the two slowly turn to face you. \"Thou hast done so much for us, I hope that in helping us, thou hast been assisted in thine own quest.\" Rowena performs a curtsey then turns to regard her handsome husband.*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF70), 0x000F);
	gflags[0x01A6] = true;
	abort;
	goto labelFunc08D7_009F;
labelFunc08D7_0051:
	message("\"How can I help thee, ");
	message(var0000);
	message("? I must get to Trent quickly.\" She looks impatient to be with her husband.");
	say();
	UI_add_answer(["Trent", "bye"]);
labelFunc08D7_0068:
	converse attend labelFunc08D7_009E;
	case "Trent" attend labelFunc08D7_007E:
	message("Her face lights up as you say her husband's name. \"He is the town smith. He hand crafted that music box thou didst use to awaken me from Horance's dark power.\"");
	say();
	UI_remove_answer("Trent");
labelFunc08D7_007E:
	case "sacrifice" attend labelFunc08D7_008E:
	message("\"I cannot do that to my poor Trent, at least not without seeing him one more time.\" She shakes her head in negation.");
	say();
	gflags[0x019D] = true;
labelFunc08D7_008E:
	case "bye" attend labelFunc08D7_009B:
	message("\"Yes, we must be getting to the smithy. Trent will be worrying about me.\"*");
	say();
	abort;
labelFunc08D7_009B:
	goto labelFunc08D7_0068;
labelFunc08D7_009E:
	endconv;
labelFunc08D7_009F:
	goto labelFunc08D7_0110;
labelFunc08D7_00A2:
	message("\"This place is horrible. Wouldst thou be so kind as to take me to mine husband, Trent? He has a tendency to worry about me.\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc08D7_010B;
	var0005 = false;
	message("Rowena smiles radiantly, \"Thank thee, ");
	message(var0000);
	message(". Thy spirit is a generous one, indeed.\"*");
	say();
	var0006 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc08D7_00CE:
	for (var0009 in var0001 with var0007 to var0008) attend labelFunc08D7_00E6;
	var0006 = (var0006 + 0x0001);
	goto labelFunc08D7_00CE;
labelFunc08D7_00E6:
	if (!(var0006 < 0x0008)) goto labelFunc08D7_0103;
	message("She steps in line and motions for you to lead on.*");
	say();
	UI_add_to_party(0xFF70);
	var0005 = true;
	abort;
	goto labelFunc08D7_0108;
labelFunc08D7_0103:
	message("\"Thou hast too many people in thy party at the moment for me to travel with thee.\"");
	say();
	abort;
labelFunc08D7_0108:
	goto labelFunc08D7_0110;
labelFunc08D7_010B:
	message("\"Then I shall wait here for one of virtue who would safeguard my well being, and help me to return to mine husband.\" She seems distanced as she turns away from you.*");
	say();
	abort;
labelFunc08D7_0110:
	return;
}


