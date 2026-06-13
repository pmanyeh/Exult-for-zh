#game "serpentisle"
void Func092F 0x92F (var var0000, var var0001)
{
	var var0002;

	UI_init_conversation();
	UI_show_npc_face0(0xFEED, 0x0000);
	if (!(var0001 == 0x0001)) goto labelFunc092F_001C;
	message("\"Failure in NowSettleDownBoys() because we could not find the tournament door.\"");
	say();
labelFunc092F_001C:
	if (!(var0001 == 0x0002)) goto labelFunc092F_002A;
	message("\"Failure in Brendan2Usable(_Action, $Temp1Flag) because we\t//$ couldn't find the wall at the top of the stairs.\"");
	say();
labelFunc092F_002A:
	if (!(var0001 == 0x0003)) goto labelFunc092F_0038;
	message("\"Failure in Brendan2Usable(_Action, $Temp2Flag) because we\t//$ couldn't find the door.\"");
	say();
labelFunc092F_0038:
	if (!(var0001 == 0x0004)) goto labelFunc092F_0046;
	message("\"Failure in BrendanUsable(_Polymorph) because we couldn't find the door.\"");
	say();
labelFunc092F_0046:
	if (!(var0001 == 0x0005)) goto labelFunc092F_0054;
	message("\"Failure in BrendanUsable(_Polymorph) because we couldn't pop a path egg next to the door.\"");
	say();
labelFunc092F_0054:
	if (!(var0001 == 0x0006)) goto labelFunc092F_0062;
	message("\"Failure in BrendanUsable(_Talking) because we couldn't find the door.\"");
	say();
labelFunc092F_0062:
	if (!(var0001 == 0x0007)) goto labelFunc092F_0070;
	message("\"Failure in BrendanUsable(_Path_Failure) because we failed in our pathfind.\"");
	say();
labelFunc092F_0070:
	if (!(var0001 == 0x0008)) goto labelFunc092F_007E;
	message("\"Failure in BrendanUsable(_Pathfind1) because we couldn't find the guard of the list fields.\"");
	say();
labelFunc092F_007E:
	if (!(var0001 == 0x0009)) goto labelFunc092F_008C;
	message("\"Failure in BrendanUsable(_Pathfind2) because we couldn't find the door.\"");
	say();
labelFunc092F_008C:
	if (!(var0001 == 0x000A)) goto labelFunc092F_009A;
	message("\"Failure in BrendanUsable(_Pathfind2) because we failed in our pop of a path egg.\"");
	say();
labelFunc092F_009A:
	if (!(var0001 == 0x000B)) goto labelFunc092F_00A8;
	message("\"Failure in BrendanUsable(_Action, not $Temp1Flag) because\t//$ we were unable to find the guard.\"");
	say();
labelFunc092F_00A8:
	if (!(var0001 == 0x000C)) goto labelFunc092F_00B6;
	message("\"Failure in BrendanUsable(_Path_Success) because we couldn't find the door.\"");
	say();
labelFunc092F_00B6:
	if (!(var0001 == 0x000D)) goto labelFunc092F_00C4;
	message("\"Failure in CleanUpTournament() because we couldn't push an item into the ethereal void. We were doing this during the transfer of inventory from the chest into the student.\"");
	say();
labelFunc092F_00C4:
	if (!(var0001 == 0x000E)) goto labelFunc092F_00D2;
	message("\"Failure in CleanUpTournament() because we couldn't pop an item into the student's inventory.\"");
	say();
labelFunc092F_00D2:
	if (!(var0001 == 0x000F)) goto labelFunc092F_00E0;
	message("\"Failure in CleanUpTournament() because we couldn't find the guard.\"");
	say();
labelFunc092F_00E0:
	if (!(var0001 == 0x0010)) goto labelFunc092F_00EE;
	message("\"Failure in StartTournament() because we couldn't find the chest.\"");
	say();
labelFunc092F_00EE:
	if (!(var0001 == 0x0011)) goto labelFunc092F_00FC;
	message("\"Failure in StartTournament() because we couldn't push an item into the ethereal void.\"");
	say();
labelFunc092F_00FC:
	if (!(var0001 == 0x0012)) goto labelFunc092F_010A;
	message("\"Failure in StartTournament() because we couldn't pop an item into the chest.\"");
	say();
labelFunc092F_010A:
	if (!(var0001 == 0x0013)) goto labelFunc092F_0118;
	message("\"Failure in ContStartOfTournament() because we couldn't find the door.\"");
	say();
labelFunc092F_0118:
	if (!(var0001 == 0x0014)) goto labelFunc092F_0126;
	message("\"Failure in ContStartOfTournament() because we couldn't find the guard.\"");
	say();
labelFunc092F_0126:
	if (!(var0001 == 0x0015)) goto labelFunc092F_0134;
	message("\"Failure in Brendan2Usable(_Path_Failure) because we failed in our pathfind.\"");
	say();
labelFunc092F_0134:
	if (!(var0001 == 0x0016)) goto labelFunc092F_0142;
	message("\"Failure in Brendan2Usable(_Action) because we couldn't find the guard that is supposedly pathfinding to the door.\"");
	say();
labelFunc092F_0142:
	UI_remove_npc_face0();
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x07FF], 0x0001);
	abort;
	return;
}


