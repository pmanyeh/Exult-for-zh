#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func08CF 0x8CF ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func08F7(0xFF64);
	var0001 = Func08F7(0xFF63);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFC);
	message("\"Fellow members, each of thee has faced -- and doubtless shall face again -- a moment in which thou dost feel the heat of the fever. A moment when thy mind has been clouded with illusory thoughts and visions. A moment when thy recognition has simply vanished, without rhyme or reason. A moment when, perhaps, thou hast even doubted the very words of The Fellowship itself!\"*");
	say();
	if (!var0000) goto labelFunc08CF_004D;
	UI_show_npc_face(0xFF64, 0x0000);
	message("You see the clerk gasp, her eyes widening in disbelief.*");
	say();
	UI_remove_npc_face(0xFF64);
	UI_show_npc_face(0xFF06, 0x0000);
labelFunc08CF_004D:
	message("\"The second principle of the Triad is `trust thy brother.' 'Tis a simple practice when thou dost know thy brother. But The Fellowship was not always known to thee. It may, at one time, have been difficult to put thy trust in something as large as The Fellowship.~~ \"However, to gain full knowledge of thine inner strength, one must have the courage to walk on the fire of trust!\"*");
	say();
	if (!var0001) goto labelFunc08CF_0076;
	UI_show_npc_face(0xFF63, 0x0000);
	message("\"'Tis true! Trust was the key to my freedom!\"*");
	say();
	UI_remove_npc_face(0xFF63);
	UI_show_npc_face(0xFF06, 0x0000);
labelFunc08CF_0076:
	message("\"Trust requires great courage, and that courage exists within thyself.\"*");
	say();
	if (!var0002) goto labelFunc08CF_00B7;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo leans toward you.~~ \"I believe we have heard enough of this, no?\"*");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc08CF_00A2;
	message("\"Good. Let us leave.\"*");
	say();
	abort;
	goto labelFunc08CF_00B7;
labelFunc08CF_00A2:
	message("Iolo sighs deeply.*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF06, 0x0000);
labelFunc08CF_00B7:
	message("\"But as long as one remains aware, this problem will not plague thee.\"*");
	say();
	if (!var0003) goto labelFunc08CF_00D0;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Come, friend. That is enough of this. Drinks are on me.\"~~ As you make your way out of the Hall, the leader's voice continues to drone on and on.*");
	say();
	abort;
labelFunc08CF_00D0:
	return;
}


