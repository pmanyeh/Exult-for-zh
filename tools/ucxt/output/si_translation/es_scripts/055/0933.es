#game "serpentisle"
// externs
extern var Func096E 0x96E (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0934 0x934 (var var0000);

void Func0933 0x933 (var var0000, var var0001)
{
	UI_show_npc_face0(var0000, 0x0000);
	UI_set_npc_id(0xFFB6, 0x0000);
	UI_set_npc_id(0xFFB9, 0x0000);
	UI_set_npc_id(0xFFC1, 0x0000);
	UI_set_npc_id(0xFFB1, 0x0000);
	UI_set_npc_id(0xFF6A, 0x0000);
	UI_set_npc_id(var0000, 0x0009);
	if (!(var0000 == 0xFF6A)) goto labelFunc0933_00A5;
	var0000 = Func096E([0x0001, 0x0004, 0x0004], 0x03B7, 0x0032, var0001, 0x0003);
	if (!(var0000 == 0x0000)) goto labelFunc0933_007F;
	message("\"Thou dost not have enough experience. Come back when thou art more knowledgeable of the world!\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_007F:
	if (!(var0000 == 0x0001)) goto labelFunc0933_0090;
	message("\"Thou dost not have enough money.\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_0090:
	if (!(var0000 == 0x0002)) goto labelFunc0933_00A1;
	message("\"Thou art already as proficient as I. Thou mightest consider consulting one of the other trainers that specialize in other areas.\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_00A1:
	message("\"I will train thee now.\"");
	say();
labelFunc0933_00A5:
	if (!(var0000 == 0xFFB6)) goto labelFunc0933_0104;
	var0000 = Func096E([0x0001, 0x0001, 0x0004], 0x03B7, 0x0032, var0001, 0x0003);
	if (!(var0000 == 0x0000)) goto labelFunc0933_00DE;
	message("\"Thou dost not have enough experience. Come back when thou art more knowledgeable of the world!\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_00DE:
	if (!(var0000 == 0x0001)) goto labelFunc0933_00EF;
	message("\"Thou dost not have enough money.\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_00EF:
	if (!(var0000 == 0x0002)) goto labelFunc0933_0100;
	message("\"Thou art already as proficient as I. Thou mightest consider consulting one of the other trainers that specialize in other areas.\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_0100:
	message("\"I will train thee now.\"");
	say();
labelFunc0933_0104:
	if (!(var0000 == 0xFFB9)) goto labelFunc0933_0163;
	var0000 = Func096E([0x0000, 0x0000, 0x0000], 0x03B7, 0x0032, var0001, 0x0003);
	if (!(var0000 == 0x0000)) goto labelFunc0933_013D;
	message("\"Thou dost not have enough experience. Come back when thou art more knowledgeable of the world!\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_013D:
	if (!(var0000 == 0x0001)) goto labelFunc0933_014E;
	message("\"Thou dost not have enough money.\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_014E:
	if (!(var0000 == 0x0002)) goto labelFunc0933_015F;
	message("\"Thou art already as proficient as I. Thou mightest consider consulting one of the other trainers that specialize in other areas.\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_015F:
	message("\"I will train thee now.\"");
	say();
labelFunc0933_0163:
	if (!(var0000 == 0xFFC1)) goto labelFunc0933_01C2;
	var0000 = Func096E([0x0000, 0x0000, 0x0004], 0x03B7, 0x0032, var0001, 0x0003);
	if (!(var0000 == 0x0000)) goto labelFunc0933_019C;
	message("\"Thou dost not have enough experience. Come back when thou art more knowledgeable of the world!\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_019C:
	if (!(var0000 == 0x0001)) goto labelFunc0933_01AD;
	message("\"Thou dost not have enough money.\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_01AD:
	if (!(var0000 == 0x0002)) goto labelFunc0933_01BE;
	message("\"Thou art already as proficient as I. Thou mightest consider consulting one of the other trainers that specialize in other areas.\"");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_01BE:
	message("\"I will train thee now.\"");
	say();
labelFunc0933_01C2:
	var0000 = UI_remove_party_items(0x0032, 0x03B7, 0xFE99, 0xFE99, false);
	gflags[0x0084] = true;
	Func0934(var0001);
	abort;
labelFunc0933_01E1:
	return;
}


