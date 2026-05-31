#game "blackgate"
void Func0614 object#(0x614) ()
{
	var var0000;

	UI_show_npc_face(0xFEEB, 0x0000);
	var0000 = UI_get_speech_track();
	if (!(var0000 == 0x0001)) goto labelFunc0614_0027;
	message("\"Yes, rest, my friend. Rest and heal, so that you are strong and able to face the perils before you. Pleasant dreams!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0027:
	if (!(var0000 == 0x0002)) goto labelFunc0614_003D;
	message("\"Go inside. Tell them you are the Avatar!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_003D:
	if (!(var0000 == 0x0003)) goto labelFunc0614_0053;
	message("\"Thank you for the information in the notebook, Avatar! It was most useful! Ha ha ha ha ha!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0053:
	if (!(var0000 == 0x0004)) goto labelFunc0614_0069;
	message("\"Do not go in! It is a trap! Do you not see? It is a trap!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0069:
	if (!(var0000 == 0x0005)) goto labelFunc0614_007F;
	message("\"You are not going to trust the Time Lord are you? Careful, my friend -- do not believe him!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_007F:
	if (!(var0000 == 0x0006)) goto labelFunc0614_0095;
	message("\"Do not go in! You will surely die!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0095:
	if (!(var0000 == 0x0007)) goto labelFunc0614_00AB;
	message("\"Avatar, you are not welcome here!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00AB:
	if (!(var0000 == 0x0008)) goto labelFunc0614_00C1;
	message("\"Are you sure? Think again!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00C1:
	if (!(var0000 == 0x0009)) goto labelFunc0614_00D7;
	message("\"At least one sign is true, and at least one sign is false.\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00D7:
	if (!(var0000 == 0x000A)) goto labelFunc0614_00ED;
	message("\"Two of these signs are either true or false!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00ED:
	if (!(var0000 == 0x000B)) goto labelFunc0614_0103;
	message("\"No no no! Think again!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0103:
	if (!(var0000 == 0x000C)) goto labelFunc0614_0119;
	message("\"Each sign could be either true or false!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0119:
	if (!(var0000 == 0x000D)) goto labelFunc0614_012F;
	message("\"Stop the Avatar! I will come through the Black Gate now! Do not let him near!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_012F:
	if (!(var0000 == 0x000E)) goto labelFunc0614_0145;
	message("\"So, Avatar! The moment of truth has come! You can destroy the Black Gate, but you will never return to your beloved Earth. Or you can come through now and go home! It is your choice!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0145:
	if (!((var0000 > 0x0011) && (var0000 < 0x0016))) goto labelFunc0614_0163;
	message("\"Ha ha ha ha ha ha!\"*");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0163:
	if (!(var0000 == 0x0016)) goto labelFunc0614_0179;
	message("\"Poor Avatar... poor, poor Avatar...\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0179:
	if (!(var0000 == 0x0017)) goto labelFunc0614_018F;
	message("\"Well done, my friend! You are truly an Avatar!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_018F:
	if (!(var0000 == 0x0018)) goto labelFunc0614_01A5;
	message("\"You are travelling in the wrong direction, my friend!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01A5:
	if (!(var0000 == 0x0019)) goto labelFunc0614_01BB;
	message("\"Go away!!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01BB:
	if (!(var0000 == 0x001A)) goto labelFunc0614_01D1;
	message("\"That is precisely the thing to do, Avatar!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01D1:
	if (!(var0000 == 0x001B)) goto labelFunc0614_01E7;
	message("\"You had best not do that, Avatar!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01E7:
	if (!(var0000 == 0x001C)) goto labelFunc0614_01FD;
	message("\"Do you really know where you are going, Avatar?\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01FD:
	if (!(var0000 == 0x001D)) goto labelFunc0614_0213;
	message("\"Yes, that is the proper direction to travel, Avatar.\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0213:
	if (!(var0000 > 0x001D)) goto labelFunc0614_0229;
	message("\"Ha ha ha ha ha ha!\"");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0229:
	message("\"Ho ho ha ha heh heh heh!\"");
	say();
	return;
}


