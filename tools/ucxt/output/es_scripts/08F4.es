#game "blackgate"
void Func08F4 0x8F4 (var var0000, var var0001)
{
	var var0002;

	var0002 = "thee";
	if (!(var0001 > 0x0002)) goto labelFunc08F4_0016;
	var0002 = "the party";
labelFunc08F4_0016:
	if (!gflags[0x015D]) goto labelFunc08F4_0034;
	message("\"^");
	message(var0000);
	message(", I have weighed thine actions against thy former conduct. Now that I am travelling with ");
	message(var0002);
	message("...");
	say();
	message("I forgive thy misrepresentation at our first meeting.\"");
	say();
	gflags[0x015D] = false;
labelFunc08F4_0034:
	if (!(UI_die_roll(0x0001, 0x0003) == 0x0001)) goto labelFunc08F4_004F;
	message("\"I enjoy travelling with ");
	message(var0002);
	message(".\"");
	say();
labelFunc08F4_004F:
	if (!UI_get_item_flag(UI_get_npc_object(0xFE9C), 0x0000)) goto labelFunc08F4_0064;
	message("\"Avatar! 'Tis strange to converse yet not see the speaker. Invisibility is queer magic.\"");
	say();
labelFunc08F4_0064:
	message("\"How may I assist ");
	message(var0002);
	message(", ");
	message(var0000);
	message("?\"");
	say();
	UI_add_answer(["bees", "leave"]);
	return;
}


