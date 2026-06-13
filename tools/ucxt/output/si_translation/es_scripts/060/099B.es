#game "serpentisle"
// externs
extern var Func0977 0x977 (var var0000);
extern var Func099A 0x99A (var var0000, var var0001);
extern void Func094E 0x94E (var var0000, var var0001);

var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006)
{
	var var0007;
	var var0008;
	var var0009;

	var0007 = UI_add_cont_items(var0000, var0001, var0002, var0003, var0004, var0005);
	if (!(var0007 == 0x0000)) goto labelFunc099B_0030;
	return [0x0000, 0x0000];
	goto labelFunc099B_00ED;
labelFunc099B_0030:
	var0007 = UI_add_party_items(var0007, var0002, var0003, var0004, var0005);
	var0003 = var0001;
	if (!(!var0006)) goto labelFunc099B_0057;
	return var0007;
labelFunc099B_0057:
	var0004 = Func0977(var0007);
	var0001 = var0007[var0004];
	var0005 = Func099A(var0007, var0004);
	if (!var0005) goto labelFunc099B_00B3;
	if (!(var0003 == 0x0001)) goto labelFunc099B_008C;
	message("\"Thou art so encumbered! Perhaps one of thy friends might be willing to carry this?\"");
	say();
	goto labelFunc099B_0090;
labelFunc099B_008C:
	message("\"Thou art so encumbered! Let me give some of this to thy friends.\"");
	say();
labelFunc099B_0090:
	enum();
labelFunc099B_0091:
	for (var0002 in var0005 with var0008 to var0009) attend labelFunc099B_00B3;
	Func094E(UI_get_npc_number(var0002), "@I'll help carry it.@");
	UI_set_conversation_slot(0x0000);
	goto labelFunc099B_0091;
labelFunc099B_00B3:
	if (!(var0001 > 0x0000)) goto labelFunc099B_00E9;
	if (!(var0003 == 0x0001)) goto labelFunc099B_00CE;
	message("\"Since thou art so encumbered, I shall set this upon the ground.\"");
	say();
	goto labelFunc099B_00E9;
labelFunc099B_00CE:
	if (!(var0001 == 0x0001)) goto labelFunc099B_00DF;
	message("\"Since not one of you can hold another, I shall place this last remaining one upon the ground.\"");
	say();
	goto labelFunc099B_00E9;
labelFunc099B_00DF:
	message("\"Since thou art so encumbered, I shall place the remaining ");
	message(var0001);
	message(" of these upon the ground.\"");
	say();
labelFunc099B_00E9:
	return var0007;
labelFunc099B_00ED:
	return 0;
}


