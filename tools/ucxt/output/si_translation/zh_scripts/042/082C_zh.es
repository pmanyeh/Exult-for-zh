#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func096E 0x96E (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func0964 0x964 (var var0000, var var0001);
extern void Func0962 0x962 (var var0000, var var0001);

void Func082C 0x82C ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func0954();
	var0001 = 0x0284;
	var0002 = [0x0002, 0x0006];
	var0003 = 0x0096;
	message("\"I charge 150 gold to train thee in the use of magic. Dost thou agree?\"");
	say();
	var0004 = Func0956(["Yes", "No"]);
	if (!(var0004 == "No")) goto labelFunc082C_0040;
	message("\"Suit thyself... It is thy loss.\"");
	say();
	abort;
labelFunc082C_0040:
	if (!(var0004 == "Yes")) goto labelFunc082C_012E;
	var0005 = Func096E(var0002, var0001, var0003, 0xFE9C, 0x0002);
	if (!(var0005 == 0x0000)) goto labelFunc082C_006D;
	message("\"Thou art not ready to learn yet!\"");
	say();
labelFunc082C_006D:
	if (!(var0005 == 0x0001)) goto labelFunc082C_007C;
	message("\"Thou dost not have 150 gold! Speak with me when thou dost have the money.\"");
	say();
	abort;
labelFunc082C_007C:
	if (!(var0005 == 0x0002)) goto labelFunc082C_009D;
	if (!(Func095C(0xFE9C, 0x0006) < 0x001E)) goto labelFunc082C_0099;
	goto labelFunc082C_00A7;
labelFunc082C_0099:
	message("\"Thou dost already possess more skill than I could teach thee!\"");
	say();
labelFunc082C_009D:
	if (!(var0005 == 0x0003)) goto labelFunc082C_012E;
labelFunc082C_00A7:
	message("\"Let me see how thou dost handle the reagents...");
	say();
	message("\"No, no! This is not chicken feed that thou dost handle!\"");
	say();
	message("\"All right, now speak the words of power...");
	say();
	message("\"Slowly, slowly! If thou dost mis-pronounce them, the spell will go awry and thou wilt have wasted the reagents.\"");
	say();
	message("\"Unleash the spell... NOW!\"");
	say();
	var0006 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x001A, var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	message("\"Thou hast potential but thou must pratice, or thou wilt be undone when haste is called for.\"");
	say();
	var0007 = UI_remove_party_items(var0003, var0001, 0xFE99, 0xFE99, true);
	if (!(Func095C(0xFE9C, 0x0006) < 0x001E)) goto labelFunc082C_0115;
	Func0964(0xFE9C, 0x0001);
labelFunc082C_0115:
	if (!(Func095C(0xFE9C, 0x0002) < 0x001E)) goto labelFunc082C_012E;
	Func0962(0xFE9C, 0x0001);
labelFunc082C_012E:
	return;
}


