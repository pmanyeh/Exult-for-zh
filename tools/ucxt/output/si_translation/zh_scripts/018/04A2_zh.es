#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern void Func080F 0x80F ();
extern void Func0810 0x810 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func04A2 object#(0x4A2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04A2_000F;
	Func0809();
	abort;
labelFunc04A2_000F:
	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0001)) goto labelFunc04A2_004D;
	UI_item_say(item, "@Well done!@");
	0xFF5E->Func07D1();
	var0003 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x55, 0x04A2]);
labelFunc04A2_004D:
	if (!(event == 0x0002)) goto labelFunc04A2_00AF;
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Thou hast made it this far... Dost thou wish to purchase food or healing potions?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04A2_0098;
	message("\"Such items are very valuable here, felon. Thou mayest find the prices steep...\"");
	say();
	message("\"What dost thou wish, food or healing potions?\"");
	say();
	var0004 = Func0956(["food", "healing"]);
	if (!(var0004 == "food")) goto labelFunc04A2_0092;
	Func080F();
	goto labelFunc04A2_0095;
labelFunc04A2_0092:
	Func0810();
labelFunc04A2_0095:
	goto labelFunc04A2_00AF;
labelFunc04A2_0098:
	message("\"But it is my task to bar thine exit still. If thou canst defeat me, thou mayest take the key and be free!\"* \"But if thou canst not, thou wilt remain here. Forever!\"");
	say();
	Func097F(0xFF5E, "@To arms, felon!@", 0x0002);
	Func09AD(0xFF5E);
	abort;
labelFunc04A2_00AF:
	if (!(event == 0x0007)) goto labelFunc04A2_00ED;
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Congratulations, ");
	message(var0000);
	message("! Thou hast proven thine innocence...\"");
	say();
	message("\"Take the key and enjoy thy freedom!\"");
	say();
	var0005 = Func099B(0xFE9C, 0x0001, 0x0281, 0xFE99, 0x0018, 0x0000, true);
	UI_remove_npc_face1();
	abort;
labelFunc04A2_00ED:
	return;
}


