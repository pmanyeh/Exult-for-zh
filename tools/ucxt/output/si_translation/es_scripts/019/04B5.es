#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func085C 0x85C ();
extern void Func085D 0x85D (var var0000, var var0001);

void Func04B5 object#(0x4B5) ()
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
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func097D(0xFE9B, 0x0001, 0x017F, 0xFE99, 0x0001);
	var0004 = Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0003);
	var0005 = Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x000B);
	var0006 = UI_get_npc_id(0xFF4B);
	if (!(event == 0x0002)) goto labelFunc04B5_0144;
	if (!((var0006 == 0x0001) || ((var0006 == 0x0007) || (var0006 == 0x0008)))) goto labelFunc04B5_00FA;
	if (!(var0006 == 0x0001)) goto labelFunc04B5_0092;
	UI_set_npc_id(0xFF4B, 0x0000);
labelFunc04B5_0092:
	if (!(var0006 == 0x0007)) goto labelFunc04B5_00A6;
	UI_set_npc_id(0xFF4B, 0x0005);
labelFunc04B5_00A6:
	if (!(var0006 == 0x0008)) goto labelFunc04B5_00BA;
	UI_set_npc_id(0xFF4B, 0x0006);
labelFunc04B5_00BA:
	UI_play_sound_effect(0x0029);
	UI_obj_sprite_effect(0xFE9C, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0007 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x78, 0x0032, 0x0000], 0x000C);
	goto labelFunc04B5_0144;
labelFunc04B5_00FA:
	UI_play_sound_effect(0x0030);
	UI_obj_sprite_effect(0xFE9C, 0x0009, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFF4B, 0x0003);
	var0007 = UI_execute_usecode_array(0xFF4B, [(byte)0x66, (byte)0x65, (byte)0x68, (byte)0x61, (byte)0x66, (byte)0x65, (byte)0x68, (byte)0x61]);
labelFunc04B5_0144:
	if (!(event == 0x0001)) goto labelFunc04B5_0183;
	Func097F(0xFE9C, "@Excuse me...@", 0x0000);
	Func097F(0xFF4B, "@Who art thou?@", 0x0002);
	var0007 = UI_execute_usecode_array(0xFF4B, [(byte)0x02]);
	UI_set_schedule_type(0xFF4B, 0x0003);
	0xFF4B->Func07D1();
labelFunc04B5_0183:
	if (!(event == 0x0009)) goto labelFunc04B5_02D0;
	UI_run_schedule(0xFF4B);
	UI_clear_item_say(0xFF4B);
	UI_show_npc_face0(0xFF4B, 0x0000);
	if (!(var0006 == 0x0000)) goto labelFunc04B5_01E2;
	message("\"Hast thou seen the firebird's death or followed thy dreams to seek power? Canst thou touch the face of a dream that clutches thee with bony claws? How wouldst thou know the power that leaps from dream to dream, devouring death as it went?\"");
	say();
	UI_set_item_flag(0xFF4B, 0x001C);
	message("\"Dost thou have the protection of Courage to face thy dreams? Can thine helm face the power and kiss the lips of sweet death?\"");
	say();
	if (!(var0003 == true)) goto labelFunc04B5_01D4;
	UI_set_npc_id(0xFF4B, 0x0002);
	goto labelFunc04B5_01DE;
labelFunc04B5_01D4:
	UI_set_npc_id(0xFF4B, 0x0001);
labelFunc04B5_01DE:
	Func085C();
	abort;
labelFunc04B5_01E2:
	if (!(var0006 == 0x0002)) goto labelFunc04B5_020C;
	if (!(var0003 == true)) goto labelFunc04B5_01F8;
	message("\"Curse the pot metal protection that thou dost call Courage! Thou hast not danced with the maker of dreams upon the cold stone grave of power...\"");
	say();
labelFunc04B5_01F8:
	UI_set_npc_id(0xFF4B, 0x0005);
	Func085D(0x0B66, 0x05C7);
	abort;
labelFunc04B5_020C:
	if (!(var0006 == 0x0005)) goto labelFunc04B5_023D;
	message("\"Dost thou have the glass petals of Love to bind thy dreams? Canst thou swim the seas of death and come forth the father of power?\"");
	say();
	if (!(var0004 == true)) goto labelFunc04B5_022F;
	UI_set_npc_id(0xFF4B, 0x0003);
	goto labelFunc04B5_0239;
labelFunc04B5_022F:
	UI_set_npc_id(0xFF4B, 0x0007);
labelFunc04B5_0239:
	Func085C();
	abort;
labelFunc04B5_023D:
	if (!(var0006 == 0x0003)) goto labelFunc04B5_0267;
	if (!(var0004 == true)) goto labelFunc04B5_0253;
	message("\"A thousand plagues upon the putrid flower thou dost call Love! Thou canst not walk amongst the clouds of dreams and reap the withered souls of weaklings...\"");
	say();
labelFunc04B5_0253:
	UI_set_npc_id(0xFF4B, 0x0006);
	Func085D(0x0B3A, 0x0594);
	abort;
labelFunc04B5_0267:
	if (!(var0006 == 0x0006)) goto labelFunc04B5_0298;
	message("\"Dost thou have the reflection of Truth to make thy dreams real? Canst thou mirror the ride of the spiraling serpent of death down to the peak of moonlit dreams?\"");
	say();
	if (!(var0005 == true)) goto labelFunc04B5_028A;
	UI_set_npc_id(0xFF4B, 0x0004);
	goto labelFunc04B5_0294;
labelFunc04B5_028A:
	UI_set_npc_id(0xFF4B, 0x0008);
labelFunc04B5_0294:
	Func085C();
	abort;
labelFunc04B5_0298:
	if (!(var0006 == 0x0004)) goto labelFunc04B5_02C3;
	if (!(var0005 == true)) goto labelFunc04B5_02C0;
	message("\"Damnation to the false reflection that thou dost call Truth! Thou didst not fly to the vaulted tombs of vilified saints to grasp at the reins of the sun...\"");
	say();
	message("\"Nooooo!\"");
	say();
	UI_earthquake(0x0005);
	UI_kill_npc(0xFF4B);
labelFunc04B5_02C0:
	goto labelFunc04B5_02D0;
labelFunc04B5_02C3:
	UI_set_npc_id(0xFF4B, 0x0001);
	Func085C();
labelFunc04B5_02D0:
	return;
}


